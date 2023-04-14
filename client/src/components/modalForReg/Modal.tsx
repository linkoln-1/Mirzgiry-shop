import React, { type FC, type ReactNode } from 'react'
import s from '../../style/smallComponents/modal-registration-error.module.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  tag: string
  text: string | unknown | ReactNode
}

export const ModalReg: FC<ModalProps> = ({ isOpen, onClose, tag, text }) => {
  if (!isOpen) {
    return null
  }
  const Tag = tag
  return (
    <>
      <div className={s.modal_Overlay}>
        <div className={s.modal}>
          <div className={s.modal_Header}>
            <h3>Ошибка</h3>
            <button onClick={onClose}>&times;</button>
          </div>
          <div className={s.modal_Body}>
            {
              // @ts-ignore
              <Tag>
                {text}
              </Tag>
            }
          </div>
        </div>
      </div>
      <div className={s.backOut}></div>
    </>
  )
}
