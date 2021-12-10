import React from 'react'
import { observer } from 'mobx-react-lite'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Form, Formik, FormikHelpers, FormikValues } from 'formik'
import InputFormik from '@app/components/Input/InputFormik'
import Button from '@app/components/Button'
import { HOME } from '@app/consts/routes'
import Loader from '@app/components/Loader'
import { LoginFormValid } from '@app/utils/formValidations'
import { useStore } from '@app/hooks/stores.hooks'

type FormValues = {
  email: string
  password: string
}

const LoginForm: React.FC<RouteComponentProps> = ({ history }) => {
  const authStore = useStore('authStore')

  const submitHandler = (
    values: FormikValues,
    cb: FormikHelpers<FormValues>
  ) => {
    authStore.authorize(values).then((result) => {
      if (!result) {
        cb.setSubmitting(false)
        return
      }
      history.push({ pathname: HOME })
    })
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginFormValid}
      onSubmit={(values, formikHelpers) => {
        submitHandler(values, formikHelpers)
      }}
    >
      {({ isSubmitting, errors }) =>
        isSubmitting ? (
          <Loader block />
        ) : (
          <Form>
            <InputFormik
              error={!!errors.email}
              type="email"
              name="email"
              block
              placeholder="Адрес электронной почты"
            />
            <InputFormik
              error={!!errors.password}
              type="password"
              name="password"
              block
              placeholder="Пароль"
            />
            <Button block htmlType="submit">
              Войти
            </Button>
          </Form>
        )
      }
    </Formik>
  )
}

export default withRouter(observer(LoginForm))
