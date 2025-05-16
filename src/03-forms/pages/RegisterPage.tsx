import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const { handleInputChange, handleSubmit, formData, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`${formData.name.trim().length <= 0 && 'has-error'}`}
                />
                {formData.name.trim().length <= 0
                    && < span > Este campo es necesario</span>}
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`${!isValidEmail(formData.email) && 'has-error'}`}
                />
                {!isValidEmail(formData.email)
                    && < span > Este email no es valido</span>}
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="confirm password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                />
                <button type="submit">Create Register</button>
                <button type='button' onClick={resetForm}>Reset Form</button>
            </form>
        </div >
    );
};
