import { useEffect, useState } from 'react'
import { Row } from 'reactstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { withRouter } from '../../helpers/withRouter'
import * as Yup from 'yup'
import axios from 'axios'
import toast from 'react-hot-toast'
import { decodeToken, isExpired } from 'react-jwt'

const LoginContainer = ({ router }) => {
  const [btnText, setBtnText] = useState('Login')
  const [btnState, setBtnState] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formState, setFormState] = useState(false)

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    password: Yup.string().required('Please enter your password'),
  })

  const onSubmit = async values => {
    setBtnText('<i class="fa fa-refresh fa-spin fa-fw"></i>')
    setBtnState(true)

    try {
      const { data } = await axios.post(
        'http://localhost:6050/api/v1/auth/login',
        values
      )
      if (data.success) {
        const token = data.token
        const decoded = decodeToken(token)
        localStorage.setItem('token', token)
        localStorage.setItem('id', decoded.id)
        localStorage.setItem('firstname', decoded.firstname)
        localStorage.setItem('lastname', decoded.lastname)
        localStorage.setItem('name', `${decoded.firstname} ${decoded.lastname}`)
        localStorage.setItem('role', decoded.role)
        setTimeout(() => {
          setIsLoggedIn(true)
        }, 1500)
      }
    } catch (error) {
      toast.error(error.response.data.message)
      setBtnText('Login')
      setBtnState(false)
    }
  }

  useEffect(() => {
    setBtnText('<i class="fa fa-refresh fa-spin fa-fw"></i>')
    setBtnState(true)
    const token = localStorage.getItem('token')
    const expired = isExpired(token)

    if (!token || expired) {
      localStorage.clear()
      setTimeout(() => {
        setBtnText('Login')
        setBtnState(false)
        setFormState(true)
      }, 4000)
    } else {
      setTimeout(() => {
        setIsLoggedIn(true)
      }, 4000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      router.navigate('/dashboard')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  return (
    <>
      <div className="loginContainer">
        <div className="loginLeftColumn">
          <div className="loginBox">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {formik => (
                <Form className="loginForm">
                  <Row className="mb-3">
                    <h4>Welcome Back!</h4>
                    <p>
                      {formState
                        ? 'Please enter your credentials to login!'
                        : 'Please Wait ...'}
                    </p>
                  </Row>
                  {formState ? (
                    <>
                      <Row className="mb-3">
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                          className="formInput"
                        />
                        <ErrorMessage name="email" component="ui-error" />
                      </Row>
                      <Row className="mb-4">
                        <Field
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          className="formInput"
                        />
                        <ErrorMessage name="password" component="ui-error" />
                      </Row>
                    </>
                  ) : null}
                  <Row className=" justify-content-around">
                    <button
                      type="submit"
                      className="btnLogin"
                      dangerouslySetInnerHTML={{ __html: btnText }}
                      disabled={btnState}
                    />
                  </Row>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="loginMain"></div>
      </div>
    </>
  )
}

export default withRouter(LoginContainer)
