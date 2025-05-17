import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export default function FormikComponents() {

    return (
        <div>
            <h1>
                Formik Components
            </h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(value) => {
                    console.log(value);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        lastName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email')
                            .required('Required'),
                        terms: Yup.boolean()
                            .oneOf([true], 'You must accept the terms and conditions')
                            .required('Required'),
                        jobType: Yup.string()
                            .oneOf(
                                ['developer', 'designer', 'manager', 'other'],
                                'Invalid Job Type')
                            .required('Required'),
                    })
                }
            >
                {(formik) => (
                    <Form>
                        <label htmlFor='firstName'>First Name</label>
                        <Field type='text' name='firstName' />
                        <ErrorMessage name='firstName' component='span' />
                        <label htmlFor='lastName'>Last Name</label>
                        <Field name='lastName' type='text' />
                        <ErrorMessage name='lastName' component='span' />
                        <label htmlFor='email'>Email</label>
                        <Field name='email' type='email' />
                        <ErrorMessage name='email' component='span' />
                        <label htmlFor='jobType'>Select job</label>
                        <Field name='jobType' as='select'>
                            <option value=''>Select a job</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='manager'>Manager</option>
                            <option value='other'>Other</option>
                        </Field>
                        <ErrorMessage name='jobType' component='span' />
                        <label>
                            <Field name='terms' type='checkbox' />
                            Terms & conditions
                        </label>
                        <ErrorMessage name='terms' component='span' />
                        <button type='submit'>Submit</button>

                    </Form>
                )}
            </Formik>

        </div>
    )
}
