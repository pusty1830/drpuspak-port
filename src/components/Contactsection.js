import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createContact } from "../services/services";
import { toast } from "react-toastify";

const Contactsection = () => {
  // Validation Schema
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10,15}$/, "Phone number must be 10-15 digits")
      .required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  // Initial Values
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  // Handle Submit
  const handleSubmit = (values, { resetForm }) => {
    const payLoad = {
      name: values.fullName,
      email: values.email,
      phoneNumber: values.phone,
      subject: values.subject,
      message: values.message,
    };
    createContact(payLoad)
      .then((res) => {
        toast("Your Message Send Successfully Will Reach out soon");
      })
      .catch((err) => {
        console.log(err);
      });
    resetForm();
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-stretch g-0 p-0 ms-lg-5 me-lg-5">
          {/* Google Map */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9300364761275!2d90.3842538750386!3d23.787538987079117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77f4f290107%3A0xf35a558f889d3fd2!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1690194553770!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ minHeight: "450px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div
              className="h-100 p-4 text-white shadow-sm"
              style={{ backgroundColor: "#041C33" }}
            >
              <h3 className="mb-4">Let's talk...</h3>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="row mb-3">
                      <div className="col mb-3 mb-md-0">
                        <Field
                          name="fullName"
                          type="text"
                          className={`form-control ${
                            errors.fullName && touched.fullName
                              ? "is-invalid"
                              : ""
                          }`}
                          placeholder="Full Name"
                        />
                        <ErrorMessage
                          name="fullName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="col">
                        <Field
                          name="email"
                          type="email"
                          className={`form-control ${
                            errors.email && touched.email ? "is-invalid" : ""
                          }`}
                          placeholder="Email Address"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <Field
                        name="phone"
                        type="text"
                        className={`form-control ${
                          errors.phone && touched.phone ? "is-invalid" : ""
                        }`}
                        placeholder="Phone Number"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="mb-3">
                      <Field
                        name="subject"
                        type="text"
                        className={`form-control ${
                          errors.subject && touched.subject ? "is-invalid" : ""
                        }`}
                        placeholder="Subject"
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="mb-3">
                      <Field
                        as="textarea"
                        name="message"
                        rows="4"
                        className={`form-control ${
                          errors.message && touched.message ? "is-invalid" : ""
                        }`}
                        placeholder="Message"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                      Submit Now &nbsp;↗
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactsection;
