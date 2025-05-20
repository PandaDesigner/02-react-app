import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput, MyCheckbox, MySelectInput } from '../components';



export function FormikAbstractPage() {

    return (
        <div>
            <h1>
                Formik Abstract Page
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
                        <MyTextInput
                            label='First Name'
                            name='firstName'
                            placeholder='John' />
                        <MyTextInput
                            label='Last Name'
                            name='lastName'
                            placeholder='Doe' />
                        <MyTextInput
                            label='Email'
                            name='email'
                            type='email'
                            placeholder='johndoe@correo.com' />

                        <MySelectInput
                            label='Job Type'
                            name='jobType'>
                            <option value=''>Select a job</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='manager'>Manager</option>
                            <option value='other'>Other</option>
                        </MySelectInput>
                        <MyCheckbox name='terms' label='Terms and conditions' />
                        <button type='submit'>Submit</button>

                    </Form>
                )}
            </Formik>

        </div>
    )
}
