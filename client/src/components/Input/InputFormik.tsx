import React from 'react'
import { ErrorMessage, Field, FieldConfig } from 'formik'
import cn from 'classnames'

import { IInputProps } from '@app/components/Input/IInputProps'

import './_input.scss'

const InputFormik: React.FC<IInputProps & FieldConfig> = (props) => {
  const {
    block,
    name,
    children,
    value,
    as,
    component,
    innerRef,
    placeholder,
    render,
    type,
    validate,
    error,
  } = props
  return (
    <div className="input">
      <Field
        name={name}
        children={children}
        value={value}
        as={as}
        component={component}
        innerRef={innerRef}
        placeholder={placeholder}
        render={render}
        type={type}
        validate={validate}
        className={cn('input__el', {
          'input__el--block': block,
          'input__el--error': error,
        })}
      />
      <ErrorMessage
        name={name}
        render={(errorMessage) => (
          <span className="input__error">{errorMessage}</span>
        )}
      />
    </div>
  )
}

export default InputFormik
