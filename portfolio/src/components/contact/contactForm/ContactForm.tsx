'use client';

import React from 'react';
import { useFormik } from 'formik';
import { ContactFormSchema } from './FormValidation';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ContactFormSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <div className="">
          <label htmlFor="name" className="label">
            Name
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            className="contactFields"
            placeholder="Enter Your Name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.name && touched.name ? (
            <p className="error">{errors.name} </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            className="contactFields"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />{' '}
          {errors.email && touched.email ? (
            <p className="error">{errors.email} </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="message" className="label">
            Message
          </label>
          <br />
          <textarea
            id="message"
            name="message"
            rows={4}
            cols={50}
            className="contactFields"
            defaultValue="Write your message here!"
            value={values.message}
            onBlur={handleBlur}
            onChange={handleChange}
          ></textarea>{' '}
          {errors.message && touched.message ? (
            <p className="error">{errors.message}</p>
          ) : null}
        </div>
        <br />
        <div>
          <button className="uppercase border-slate-200 border-2 w-[90%] py-2 font-extralight rounded-md text-slate-400">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
