// src/pages/doctor/DoctorLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "./services/services";
import { setCurrentAccessToken } from "./services/axiosClient";

// ✅ Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    try {
      const res = await signIn(payload);
      console.log("Login response:", res);

      if (res?.statusText === "OK") {
        setCurrentAccessToken(res?.data?.data?.accessToken);
        window.location.href = "/reminder";
      } else {
        alert(res?.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light min-vh-100">
      <div
        className="card shadow-lg p-4"
        style={{
          maxWidth: "400px",
          width: "100%",
          borderRadius: "16px",
        }}
      >
        {/* Header */}
        <div className="text-center mb-4">
          <div
            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{ width: "70px", height: "70px" }}
          >
            <i className="bi bi-hospital fs-2"></i>
          </div>
          <h3 className="fw-bold">Sign in</h3>
          <p className="text-muted small">Access your medical dashboard</p>
        </div>

        {/* Formik Form */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <Field
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger small mt-1"
                />
              </div>

              {/* Password with Eye */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1} // Prevent tab focus on eye button
                  >
                    <i
                      className={`bi ${
                        showPassword ? "bi-eye-slash" : "bi-eye"
                      }`}
                    ></i>
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger small mt-1"
                />
              </div>

              {/* Remember */}
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  id="remember"
                  className="form-check-input"
                />
                <label htmlFor="remember" className="form-check-label">
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-100 py-2 fw-semibold"
                style={{ borderRadius: "8px" }}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
