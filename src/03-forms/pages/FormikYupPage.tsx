import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export default function FormikYupPage() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email')
                .required('Required'),
        })
    })

    return (
        <div>
            <h1>
                Formik Yup Page
            </h1>
            <form noValidate onSubmit={formik.handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type='text'
                    {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName
                    && formik.errors.firstName
                    && (
                        <span>{formik.errors.firstName}</span>
                    )}
                <br />
                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='text'
                    {...formik.getFieldProps('lastName')}
                />
                {formik.touched.lastName
                    && formik.errors.lastName
                    && (
                        <span>{formik.errors.lastName}</span>
                    )}
                <br />
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email
                    && formik.errors.email
                    && (
                        <span>{formik.errors.email}</span>
                    )}
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
