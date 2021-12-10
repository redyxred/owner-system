import React from 'react'
import { Form, Formik, FormikHelpers, FormikValues } from 'formik'
import { ServerUser } from '@app/feathers/serverInterfaces'
import InputFormik from '@app/components/Input/InputFormik'
import Button from '@app/components/Button'
import { EditStaffFormValid } from '@app/utils/formValidations'
import Loader from '@app/components/Loader'
import { useStore } from '@app/hooks/stores.hooks'

interface FormValues {
  email: string
  firstname: string
  lastname: string
  permissions: string
}

const EditStaffForm: React.FC<{
  currentStaff: ServerUser
  onSaveForm: () => void
}> = ({ currentStaff, onSaveForm }) => {
  const staffStore = useStore('staffStore')
  const handleSave = (
    values: FormikValues,
    FormikHelpers: FormikHelpers<FormValues>
  ) => {
    staffStore.edit(currentStaff._id, values).then(() => {
      FormikHelpers.setSubmitting(false)
      onSaveForm()
    })
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        email: currentStaff.email,
        firstname: currentStaff.firstname,
        lastname: currentStaff.lastname,
        permissions: currentStaff.permissions,
      }}
      validationSchema={EditStaffFormValid}
      onSubmit={(values, formikHelpers) => {
        console.log(values)
        handleSave(values, formikHelpers)
      }}
    >
      {({ errors, values, isSubmitting, dirty }) =>
        isSubmitting ? (
          <Loader block />
        ) : (
          <Form>
            <InputFormik
              type="email"
              block
              error={!!errors.email}
              name="email"
              placeholder="Адрес электронной почты"
              value={values.email}
            />
            <InputFormik
              block
              name="firstname"
              placeholder="Имя"
              value={values.firstname}
            />
            <InputFormik
              block
              name="lastname"
              placeholder="Фамилия"
              value={values.lastname}
            />
            <InputFormik
              as="select"
              name="permissions"
              value={values.permissions}
            >
              <option value="user">Посетитель</option>
              <option value="waiter">Официант</option>
              <option value="admin">Администратор</option>
              <option value="owner">Владелец</option>
            </InputFormik>
            <Button htmlType="submit" disabled={!dirty}>
              Сохранить
            </Button>
            <Button type="default" onClick={onSaveForm}>
              Закрыть
            </Button>
          </Form>
        )
      }
    </Formik>
  )
}

export default EditStaffForm
