import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as emailjs from "emailjs-com";

// validation
const emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const phoneVal = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?$/;

const validationConsultation = Yup.object().shape({
  name: Yup.string()
    .required("A name is required")
    .min(2, "please enter your fullname")
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
  message: Yup.string().min(10).max(250),
  //  TODO: need a geolocation for validation
});

export const HomeForm = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        message: "",
      }}
      validationSchema={validationConsultation}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        let template_params = {
          email: `${values.email}`,
          name: `${values.name}`,
          phone: `${values.phone}`,
          message: `${values.message}`,
        };
        setTimeout(() => {
          emailjs
            .send(
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
            });
        }, 400);
      }}
    >
      {({ values, isSubmitting }) => (
        <Form className="header-contact-form">
          <div id="form">
            <div className="form-wrapper">
              <div className="form-input-container">
                <h2>Get your House Quote</h2>
                <div className="form-input">
                  <label>Name</label>
                  <Field
                    type="text"
                    name="name"
                    value={`${values.name}`}
                    className="field"
                    placeholder="name"
                  />
                </div>
              </div>
              <div className="form-input-container">
                <div className="form-input">
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                  <label>Phone</label>
                  <Field
                    type="tel"
                    name="phone"
                    pattern="[0-9]*"
                    value={`${values.phone}`}
                    className="field"
                    placeholder="phone"
                  />
                </div>
              </div>
              <div className="form-input-container">
                <div className="form-input">
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                  <label>Email</label>
                  <Field
                    type="email"
                    name="email"
                    value={`${values.email}`}
                    placeholder="email"
                    className="field"
                  />
                </div>
              </div>
              <div className="form-input-container checkbox ">
                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <p>
                  I agree to the Terms of service and Term of Privacy policy of
                  Legacy Rebuild Properties comapny
                </p>
              </div>
              <button
                //   onClick={() => {
                //     Event(
                //       "CONSULTATION",
                //       "Consultation has been submitted",
                //       "CONSULTATION_FORM"
                //     );
                //   }}
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
