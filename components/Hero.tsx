import { NextFont } from '@next/font/dist/types'
import { useFormik } from 'formik'
import Image from 'next/image'
import * as yup from 'yup'


const Hero = ({
  fontOpenSans,
} : {
  fontOpenSans: NextFont
}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async (values, { resetForm }) => {
      resetForm();
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Please check your email')
        .required('We need your email')
    }),
  })

  return (
    <section className="main__hero">
        <div className="hero__image">
          <Image
            src="/images/illustration-1.svg"
            alt="All your files in one secure location"
            fill
          />
        </div>
        <div className="hero__content">
          <h1 className={fontOpenSans.className}>All your files in one secure location, accessible anywhere.</h1>
          <p className={fontOpenSans.className}>
            Fylo stores your most important files in one
            secure location. Access them wherever you
            need, share and collaborate with friends,
            family, and co-workers.
          </p>
          <form onSubmit={formik.handleSubmit} className="hero__contentFormGetStarted">
            <div className="contentFormGetStarted__inputContainer">
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${fontOpenSans.className} ${formik.touched.email && formik.errors.email ? 'contentFormGetStarted__inputError' : ''}`}
              />
              
              <div className="contentFormGetStarted__errorMessage">
                {formik.touched.email && formik.errors.email && (
                  formik.errors.email
                )}
              </div>
            </div>
            
            <button>
              Get Started
            </button>
          </form>
        </div>
      </section>
  )
}

export default Hero