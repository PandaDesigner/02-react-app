import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export default function FormikBasicPage() {

    const validate = (values: FormValues) => {

        const errors: FormikErrors<FormValues> = {};

        if (!values.firstName.trim()) {
            errors.firstName = 'Required';
        } else if (values.firstName.length >= 15) {
            errors.firstName = 'Must be 15 characters or less';
        }
        if (!values.lastName.trim()) {
            errors.lastName = 'Required';
        } else if (values.lastName.length >= 10) {
            errors.lastName = 'Must be 10 characters or less';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (values.email.length >= 50) {
            errors.email = 'Must be 50 characters or less';
        }

        return errors;

    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate,
    })

    return (
        <div>
            <h1>
                FormikBasicPage
            </h1>
            <form noValidate onSubmit={formik.handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='First Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName} />
                {formik.touched.firstName
                    && formik.errors.firstName
                    && (
                        <span>{formik.errors.firstName}</span>
                    )}
                <br />
                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    placeholder='Last Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName} />
                {formik.touched.lastName
                    && formik.errors.lastName
                    && (
                        <span>{formik.errors.lastName}</span>
                    )}
                <br />
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
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
