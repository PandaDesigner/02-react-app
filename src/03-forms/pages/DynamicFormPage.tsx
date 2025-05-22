import { Form, Formik } from 'formik';
import formJson from '../data/formik.json';
import React from 'react';
import { MySelectInput, MyTextInput } from '../components';
import * as Yup from 'yup';


interface IFormikValues {
    [key: string]: any
}

const initialValues: IFormikValues = {};
const validationFields: IFormikValues = {};
let schema = Yup.string();
for (const key in formJson.formDynamic) {
    initialValues[formJson.formDynamic[key].name] = formJson.formDynamic[key].value;

    if (!formJson.formDynamic[key].validation) continue;
    if (formJson.formDynamic[key].validation) {
        const validation = formJson.formDynamic[key].validation;
        const type = validation?.type;
        const conditions = validation?.conditions;

        // Initialize schema based on field type
        schema = type === 'email' ? Yup.string().email() : Yup.string();

        if (conditions) {
            for (const rule of conditions) {
                switch (rule.type) {
                    case 'required':
                        schema = schema.required(rule.message);
                        break;
                    case 'minLength':
                        if (type === 'string') {
                            schema = schema.min(
                                typeof rule.value === 'number' ? rule.value : 3,
                                rule.message
                            );
                        }
                        break;
                    case 'maxLength':
                        if (type === 'string') {
                            schema = schema.max(
                                typeof rule.value === 'number' ? rule.value : 15,
                                rule.message
                            );
                        }
                        break;
                }
            }
        }

        validationFields[formJson.formDynamic[key].name] = schema;
    }
}

const validationSchema = Yup.object({ ...validationFields })

export const DynamicFormPage = () => {
    // Memoize form fields to prevent unnecessary re-renders
    const formFields = React.useMemo(() =>
        formJson.formDynamic.map((field) => {
            const componentMap = new Map([
                ['text', MyTextInput],
                ['email', MyTextInput],
                ['password', MyTextInput],
                ['select', MySelectInput]
            ]);

            const FieldComponent = componentMap.get(field.type);

            if (!FieldComponent) {
                return null;
            }

            if (field.type === 'select') {
                return (
                    <FieldComponent
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        placeholder={field.placeholder}
                    >
                        <option value="">Select an option</option>
                        {field.options?.map((obj) => (
                            <option key={obj.id} value={obj.id}>
                                {obj.value}
                            </option>
                        ))}
                    </FieldComponent>
                );
            }

            return (
                <FieldComponent
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    type={field.type as 'text' | 'email' | 'password'}
                    options={field.options}
                    placeholder={field.placeholder}
                />
            )
        })
        , []);

    const handleSubmit = React.useCallback((values: any) => {
        const hasEmptyFields = Object.values(values).some(value =>
            value === undefined || value === null || value === ''
        );

        if (hasEmptyFields) {
            return;
        }
        console.log(values);
    }, []);

    return (
        <div>
            <h1> Dynamic Form </h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {(formik) => (
                    <Form>
                        {formFields}
                        <button type='submit'>
                            Submit
                        </button>
                        <button type='reset'>
                            Reset
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
