import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button.jsx';

import css from './OrderForm.module.css';

import { ToastContainer, toast } from 'react-toastify';

export default function OrderForm({ camper }) {
  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
    camperId: camper.id,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    date: Yup.string().required('Date is required'),
  });

  const handleSubmit = (values, actions) => {
    const notify = () =>
      toast(
        `Hi ${values.name}! You have successfully booked a camper for ${values.date} date.`,
      );

    notify();
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <h3>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className={css.form}>
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className={css.input}
            />
            <ErrorMessage name="name" component="div" className={css.error} />

            <Field type="hidden" name="camperId" />

            <Field
              type="email"
              name="email"
              placeholder="Email*"
              className={css.input}
            />
            <ErrorMessage name="email" component="div" className={css.error} />

            <Field
              type="text"
              name="date"
              placeholder="Booking date*"
              className={css.input}
            />
            <ErrorMessage name="date" component="div" className={css.error} />

            <Field
              as="textarea"
              name="comment"
              rows="5"
              placeholder="Comment"
              className={css.input}
            />
          </div>
          <Button text="Send" className={css.buttonCenter} />
        </Form>
      </Formik>

      <ToastContainer />
    </div>
  );
}
