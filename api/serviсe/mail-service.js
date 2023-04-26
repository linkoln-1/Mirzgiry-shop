const nodemailer = require("nodemailer");

class mailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: "mirzgiry@mail.ru",
        pass: "RnCiiRxt8YyGA2f2fNPr", /// i edited the password
      },
      tls: {
        rejectUnauthorized: true,
      },
    });
  }

  async sendActivationMail(to, link) {
    try {
      await this.transporter.sendMail({
        from: "mirzgiry@mail.ru",
        to,
        subject: "Активация аккаунта на" + "http://localhost:5001",
        html: `
              <div>
                  <h1>Для активации перейдите по ссылке</h1>
                  <a href="${link}">${link}</a>
              </div>
              `,
      });
    } catch (err) {
      console.log(err);
    }
    return true;
  }
}
const instance = new mailService();

module.exports = instance;
