import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components';

const initialValues = {
    fullName: '',
    email: '',
    password: '',
    rePassword: ''
}

const initialField = [
    {
        name: 'fullName',
        type: 'text',
        label: 'Full Name',
        placeholder: 'john doe',
        component: 'input',
        error: {
            name: 'fullName',
            component: 'span'
        }
    },
    {
        name: 'email',
        type: 'email',
        label: 'Email',
        placeholder: 'johndoe@correo.com',
        component: 'input',
        error: {
            name: 'email',
            component: 'span'
        }
    },
    {
        name: 'password',
        type: 'password',
        label: 'Password',
        placeholder: 'minimal 6 characters',
        component: 'input',
        error: {
            name: 'password',
            component: 'span'
        }
    },
    {
        name: 'rePassword',
        type: 'password',
        label: 'Re-Password',
        placeholder: 'Re-Password',
        component: 'input',
        error: {
            name: 'rePassword',
            component: 'span'
        }
    }
]

const validationSchema = Yup.object({
    fullName: Yup.string()
        .min(2, 'Minimal 2 characters')
        .max(15, 'Maximal 15 characters')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Minimal 6 characters')
        .required('Required'),
    rePassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
        .required('Required'),
})

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Pages</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(value) => {
                    console.log(value);
                }}
                validationSchema={validationSchema}
            >
                {(formik) =>
                (
                    <Form>
                        {initialField.map((field) => {
                            return (
                                <MyTextInput
                                    key={field.name}
                                    label={field.label}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    type={
                                        field.type as 'text' | 'email' | 'password'
                                    }
                                />
                            )

                        })}
                        <br />
                        <button type='submit'>Submit</button>
                        <button type='reset'>Reset</button>
                        <pre style={{
                            marginTop: '40px',
                            boxSizing: 'border-box',
                            width: '100%',
                            backgroundColor: 'rgba(108, 108, 108, 0.504)',
                            borderRadius: '16px',
                            padding: '10px'
                        }}>
                            {JSON.stringify(formik.values, null, 2)}
                        </pre>
                    </Form>
                )}

            </Formik>
        </div >
    );
};
