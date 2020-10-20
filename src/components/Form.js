import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/core";
import * as Yup from "yup";
import * as emailjs from "emailjs-com";

// validation
// validation
const emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const phoneVal = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?$/;

const validationConsultation = Yup.object().shape({
  firstName: Yup.string()
    .required("A name is required")
    .min(2, "please enter your first name")
    .max(50, "enter just you"),
  lastName: Yup.string()
    .required("A name is required")
    .min(2, "please enter your last name")
    .max(50, "enter just you"),
  phone: Yup.number()
    .typeError("that doesn't look like a phone number")
    .required("please enter your phone")
    .positive("A phone number can't start with a minus")
    .min(8, "please enter a valid phone number"),
  // .matches(phoneVal, "Phone number is not valid"),
  email: Yup.string()
    .email()
    .required()
    .matches(emailVal, "Email is not valid"),
  // message: Yup.string()
  //   .min(10)
  //   .max(250),
  zipCode: Yup.number().required("*").typeError("that is not a zip Code"),
  countryState: Yup.string().required("*").max(2).trim(),
  address: Yup.string().required("please enter an address"),
  //  TODO: need a geolocation for validation
});

export const HomeForm = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        zipCode: "",
        countryState: "",
        address: "",
        // message: "",
      }}
      validationSchema={validationConsultation}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        let template_params = {
          email: `${values.email}`,
          firstName: `${values.firstName}`,
          lastName: `${values.lastName}`,
          phone: `${values.phone}`,
          zipCode: `${values.zipCode}`,
          address: `${values.address}`,
          countryState: `${values.countryState}`,
          // message: `${values.message}`,
        };
        setTimeout(() => {
          emailjs.send(
              "gmail",
              `${process.env.REACT_APP_TEMPLATE_ID}`,
              template_params,
              `${process.env.REACT_APP_USER_ID}`
            )
            .then(() => {
              setEmailSent(true);
              setSubmitting(false);
              alert("email submitted");
              resetForm();
            })
            .catch(() => {
              setSubmitting(false);
              alert("Errror sending email...");
              console.log("error");
            });
        }, 400);
      }}
    >
      {({ values, isSubmitting }) => (
        <Form id="myForm">
          <h2>Get your cash offer today!</h2>
          <div className="state-container">
            <Field
              type="text"
              name="firstName"
              value={`${values.firstName}`}
              className="field"
              placeholder="First Name"
           />
            <Field
              type="text"
              name="lastName"
              value={`${values.lastName}`}
              className="field"
              placeholder="Last Name"
            />
          </div>
          <ErrorMessage name="email" component="div" className="error" />
          <Field
            type="email"
            name="email"
            value={`${values.email}`}
            placeholder="email"
            className="field"
          />
          <ErrorMessage name="phone" component="div" className="error" />
          <Field
            type="tel"
            name="phone"
            pattern="[0-9]*"
            value={`${values.phone}`}
            className="field"
            placeholder="phone"
          />
          <ErrorMessage name="address" component="div" className="error" />
          <Field
            type="text"
            name="address"
            value={`${values.address}`}
            className="field"
            placeholder="enter address"
          />
          <div className="state-container">
            <Field
              type="text"
              name="countryState"
              value={`${values.countryState}`}
              className="field state-zip"
              placeholder="state"
            />
            <Field
              type="text"
              name="zipCode"
              value={`${values.zipCode}`}
              className="field state-zip"
              placeholder="zip Code"
            />
          </div>
          <button type="submit" disabled={isSubmitting} className="submit-btn">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
