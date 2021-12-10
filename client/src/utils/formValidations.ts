import * as Yup from 'yup'
import { FIELD_REQUIRED, EMAIL_VALID } from '@app/consts/validations'

export const LoginFormValid = Yup.object().shape({
  email: Yup.string().email(EMAIL_VALID).required(FIELD_REQUIRED),
  password: Yup.string().required(FIELD_REQUIRED),
})

export const EditStaffFormValid = Yup.object().shape({
  email: Yup.string().email(EMAIL_VALID),
  firstname: Yup.string(),
  lastname: Yup.string(),
})
