import {ErrorMessage, Field, Form, Formik} from "formik";
import { useId } from "react";
import css from './ContactForm.module.css'
import { nanoid } from 'nanoid'
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
    const fieldIds = {
        username: useId(),
        number: useId()
    }

    const initialValues = {
        username: '',
        number: '',
    };

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.username,
            number: values.number,
        });
        actions.resetForm();
    };

    const validationSchema = Yup.object({
        username: Yup.string()
            .required("Username is required"),
        number: Yup.string()
            .matches(/^[0-9]+$/, "Only numbers are allowed")
            .required("Number is required")
            .min(3, "Number must be at least 3 digits")
            .max(50, "Number must be at most 50 digits")
    });

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className={css['form']}>
                <div className={css['form-row']}>
                    <label htmlFor={fieldIds.username} className={css['form-label']}>Username</label>
                    <Field className={css['form-input']} type="text" name="username" id={fieldIds.username} />
                    <ErrorMessage name="username" component="div" className={css['error']} />
                </div>

                <div className={css['form-row']}>
                    <label htmlFor={fieldIds.number} className={css['form-label']}>Number</label>
                    <Field className={css['form-input']} type="tel" name="number" id={fieldIds.number}/>
                    <ErrorMessage name="number" component="div" className={css['error']} />
                </div>

                <div className={css['form-row']}>
                    <button className={css['form-btn']} type="submit">Add contact</button>
                </div>
            </Form>
        </Formik>
    )
}