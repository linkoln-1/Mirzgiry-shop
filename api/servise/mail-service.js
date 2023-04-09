const nodemailer = require('nodemailer')

      class mailService {
        constructor() {
          this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASSWORD /// i edited the password
            },
            tls: {
              rejectUnauthorized:false,
            }
          })
        }
     
        async  sendActivationMail( to, link ) {
          try {
            await this.transporter.sendMail({
              from: process.env.SMTP_USER,
              to,
              subject: "Активация аккаунта на" + process.env.API_URL,
              html: `
              <div>
                  <h1>Для активации перейдите по ссылке</h1>
                  <a href="${link}">${link}</a>
              </div>
              `,
        
            })
          }
          catch (err) {
            console.log(err)
          }
          return true
        }
      }
      const instance = new mailService();
     
      module.exports = instance; 