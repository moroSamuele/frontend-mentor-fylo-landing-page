import { NextFont } from '@next/font/dist/types'
import { useFormik } from 'formik'
import * as yup from 'yup'


const EarlyAccessRequest = ({
  fontOpenSans,
} : {
  fontOpenSans: NextFont
})  => {
  const formik = useFormik({
    initialValues: {
      emailEarlyAccess: '',
    },
    onSubmit: async (values, { resetForm }) => {
      resetForm();
    },
    validationSchema: yup.object({
      emailEarlyAccess: yup
        .string()
        .email('Please check your email')
        .required('We need your email')
    }),
  })


  return (
    <section className="main__earlyAccess">
      <div className="earlyAccess__container">
        <div className="earlyAccess__content">
          <h3>Get early access today</h3>
          <p>
            It only takes a minute to sign up and our
            free starter tier is extremely generous. If
            you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="earlyAccess__earlyFormRequest">
          <input
            type="email"
            name="emailEarlyAccess"
            placeholder="email@example.com"
            value={formik.values.emailEarlyAccess}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${fontOpenSans.className} ${formik.touched.emailEarlyAccess && formik.errors.emailEarlyAccess ? 'earlyFormRequest__inputError' : ''}`}
          />
          
            {formik.touched.emailEarlyAccess && formik.errors.emailEarlyAccess && (
              <div className="earlyFormRequest__errorMessage">
                {formik.errors.emailEarlyAccess}
              </div>
            )}
          
          <button>
            Get Started from Free
          </button>
        </form>
      </div>
    </section>
  )
}

export default EarlyAccessRequest