import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { ISnackbarProps } from '@app/components/SnackBar/ISnackBarProps'

import {
  AiOutlineSafetyCertificate,
  AiOutlineStop,
  AiOutlineInfoCircle,
} from 'react-icons/ai'

import './_snackBar.scss'

const SnackBar: React.FC<ISnackbarProps> = ({
  type,
  title,
  message,
  timer = 4000,
  onDismiss,
  onCancel,
  onOK,
  titleCancel,
  titleOk,
}) => {
  const [closeTimeout, setCloseTimeout] = useState<any>()
  const [isClosed, setIsClosed] = useState<boolean>(false)
  const titles = {
    success: 'Успешно',
    error: 'Произошла ошибка',
    info: 'Информация',
  }

  const closeSnackBar = () => {
    setIsClosed(true)
    if (closeTimeout) {
      clearTimeout(closeTimeout)
    }
    setTimeout(onDismiss, 1000)
  }

  const beginCloseTimeout = () => {
    if (timer) {
      const timeout = setTimeout(() => closeSnackBar(), timer)
      setCloseTimeout(timeout)
    }
  }

  useEffect(() => {
    beginCloseTimeout()
    return () => clearTimeout(closeTimeout)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const RenderIcon: React.FC<{ className: string }> = ({ className }) => {
    switch (type) {
      case 'success':
        return <AiOutlineSafetyCertificate className={className} />
      case 'error':
        return <AiOutlineStop className={className} />
      case 'info':
        return <AiOutlineInfoCircle className={className} />
      default:
        return null
    }
  }

  return (
    <div
      className={cn('snackbar', `snackbar--${type}`, {
        'snackbar--closed': isClosed,
      })}
      onMouseEnter={() => clearTimeout(closeTimeout)}
      onMouseLeave={() => beginCloseTimeout()}
    >
      <div className="snackbar__info">
        <RenderIcon className="snackbar__info-icon" />
        <div>
          <h5 className="snackbar__info-title">
            {!title ? titles[type] : title}
          </h5>
          <span className="snackbar__info-message">{message}</span>
        </div>
      </div>
      <div className="snackbar__extras">
        <div
          className="snackbar__extras-btn"
          onClick={() => {
            if (onOK) onOK()
            closeSnackBar()
          }}
        >
          {titleOk ? titleOk : 'ОК'}
        </div>
        <div
          className="snackbar__extras-btn"
          onClick={() => {
            if (onCancel) onCancel()
            closeSnackBar()
          }}
        >
          {titleCancel ? titleCancel : 'Закрыть'}
        </div>
      </div>
    </div>
  )
}

export default SnackBar
