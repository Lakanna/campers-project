import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button.jsx';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import css from './OrderForm.module.css';

import { toast } from 'react-toastify';
import { useState } from 'react';

import { registerLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';

registerLocale('en-GB', enGB);

export default function OrderForm({ camper }) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

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
      toast.success(
        `Hi ${values.name}! You have successfully booked a camper for ${values.date} date.`,
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'colored',
        },
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
        {({ setFieldValue, values }) => (
          <Form>
            <div className={css.form}>
              <label className={css.inputWrapper}>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className={css.input}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.error}
                />
              </label>

              <label className={css.inputWrapper}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={css.input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.error}
                />
              </label>
              <label className={css.inputWrapper}>
                <DatePicker
                  selected={values.date}
                  onChange={(date) => setFieldValue('date', date)}
                  locale="en-GB" // Встановлюємо локаль (тиждень починається з ПН)
                  formatWeekDay={(day) => day.substring(0, 3).toUpperCase()}
                  dateFormat="dd-MM-yyyy"
                  onCalendarOpen={() => setIsCalendarOpen(true)}
                  onCalendarClose={() => setIsCalendarOpen(false)}
                  placeholderText={
                    isCalendarOpen
                      ? 'Select a date between today'
                      : 'Booking date*'
                  }
                  className={css.input}
                  calendarClassName={css.calendar}
                  minDate={new Date()}
                />

                <ErrorMessage
                  name="date"
                  component="div"
                  className={css.error}
                />
              </label>

              <Field
                as="textarea"
                name="comment"
                rows="4"
                placeholder="Comment"
                className={css.input}
              />

              <Field type="hidden" name="camperId" />
            </div>

            <Button text="Send" className={css.buttonCenter} />
          </Form>
        )}
      </Formik>
    </div>
  );
}
