// FooterSection.tsx
import React from 'react'
import s from '../../../style/pages/componentStyle/footer-common.module.scss'

interface IFooterSectionProps {
  title: string
  items: Array<string | JSX.Element>
}

export const FooterSection: React.FC<IFooterSectionProps> = ({ title, items }) => {
  return (
    <div className={s.bold}>
      <p>{title}</p>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}
