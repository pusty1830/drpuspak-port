import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Reminder } from "../services/services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Reminderform = () => {
  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone number is required"),
    name: Yup.string().required("Full Name is required"),
    age: Yup.number()
      .min(1, "Age must be at least 1")
      .max(120, "Enter a valid age")
      .required("Age is required"),
    address: Yup.string().required("Address is required"),
    disease: Yup.string().required("Disease / Concern is required"),
    location: Yup.string().required("Preferred Location is required"),
    visitDate: Yup.string().required("Next Visit duration is required"),
  });

  const visitOptions = [
    "1 Week",
    "2 Weeks",
    "3 Weeks",
    "1 Month",
    "2 Months",
    "3 Months",
    "4 Months",
    "5 Months",
    "6 Months",
    "7 Months",
    "8 Months",
    "9 Months",
    "10 Months",
    "11 Months",
    "1 Year",
  ];

  const calculateNextVisit = (duration) => {
    const now = new Date();
    const result = new Date(now);

    if (duration.includes("Week")) {
      const weeks = parseInt(duration.split(" ")[0]);
      result.setDate(now.getDate() + weeks * 7);
    } else if (duration.includes("Month")) {
      const months = parseInt(duration.split(" ")[0]);
      result.setMonth(now.getMonth() + months);
    } else if (duration.includes("Year")) {
      result.setFullYear(now.getFullYear() + 1);
    }
    return result.toISOString().split("T")[0];
  };

  const navigate = useNavigate();

  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div
              className="card shadow-lg border-0 rounded-4 p-4"
              style={{
                background: "linear-gradient(145deg, #ffffff, #f1f8ff)",
              }}
            >
              <h3 className="text-center mb-4 text-primary fw-bold">
                🩺 Appointment Reminder Form
              </h3>

              <Formik
                initialValues={{
                  phone: "",
                  name: "",
                  age: "",
                  address: "",
                  disease: "",
                  location: "",
                  visitDate: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                  const payLoad = {
                    patientNumber: values.phone,
                    patientName: values.name,
                    Age: values.age,
                    address: values.address,
                    disease: values.disease,
                    fromWhere: values.location,
                    nextVisit: calculateNextVisit(values.visitDate),
                  };

                  Reminder(payLoad)
                    .then((res) => {
                      toast.success(res?.data?.msg || "Reminder saved!", {
                        position:
                          window.innerWidth < 768
                            ? "bottom-center"
                            : "top-right",
                        autoClose: 3000,
                      });
                      resetForm();
                    })
                    .catch(() => {
                      toast.error("Something went wrong!", {
                        position:
                          window.innerWidth < 768
                            ? "bottom-center"
                            : "top-right",
                        autoClose: 3000,
                      });
                    })
                    .finally(() => {
                      setSubmitting(false); // ✅ re-enable button after submit
                    });

                  console.log("Payload to backend:", payLoad);
                }}
              >
                {({ isSubmitting, isValid, dirty }) => (
                  <Form>
                    {/* Phone */}
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label fw-semibold">
                        Phone Number
                      </label>
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control form-control-lg"
                        placeholder="Enter 10-digit phone number"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Name */}
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Full Name
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Enter your full name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Age */}
                    <div className="mb-3">
                      <label htmlFor="age" className="form-label fw-semibold">
                        Age
                      </label>
                      <Field
                        type="number"
                        id="age"
                        name="age"
                        className="form-control form-control-lg"
                        placeholder="Enter your age"
                      />
                      <ErrorMessage
                        name="age"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Address */}
                    <div className="mb-3">
                      <label
                        htmlFor="address"
                        className="form-label fw-semibold"
                      >
                        Address
                      </label>
                      <Field
                        as="textarea"
                        id="address"
                        name="address"
                        className="form-control form-control-lg"
                        placeholder="Enter your address"
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Disease */}
                    <div className="mb-3">
                      <label
                        htmlFor="disease"
                        className="form-label fw-semibold"
                      >
                        Disease / Concern
                      </label>
                      <Field
                        type="text"
                        id="disease"
                        name="disease"
                        className="form-control form-control-lg"
                        placeholder="E.g. Back pain, Arthritis"
                      />
                      <ErrorMessage
                        name="disease"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Location */}
                    <div className="mb-3">
                      <label
                        htmlFor="location"
                        className="form-label fw-semibold"
                      >
                        Preferred Location
                      </label>
                      <Field
                        as="select"
                        id="location"
                        name="location"
                        className="form-select form-select-lg"
                      >
                        <option value="">-- Select Location --</option>
                        <option value="clinic">Clinic</option>
                        <option value="kims">KIMS</option>
                      </Field>
                      <ErrorMessage
                        name="location"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Visit Date */}
                    <div className="mb-3">
                      <label
                        htmlFor="visitDate"
                        className="form-label fw-semibold"
                      >
                        Next Visit (Duration)
                      </label>
                      <Field
                        as="select"
                        id="visitDate"
                        name="visitDate"
                        className="form-select form-select-lg"
                      >
                        <option value="">-- Select Duration --</option>
                        {visitOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="visitDate"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Submit */}
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-lg fw-bold"
                        style={{
                          background:
                            "linear-gradient(to right, #00bcd4, #2196f3)",
                          color: "#fff",
                          border: "none",
                          borderRadius: "30px",
                          padding: "10px",
                        }}
                        disabled={isSubmitting || !isValid || !dirty} // ✅ disable button
                      >
                        {isSubmitting ? "Booking..." : "Book Reminder ✅"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              <p
                className="text-center text-muted mt-4"
                style={{ fontSize: "0.9rem" }}
              >
                You’ll receive a confirmation on your registered email or
                number.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reminderform;
