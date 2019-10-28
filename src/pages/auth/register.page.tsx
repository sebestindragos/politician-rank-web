import React from "react";
import { Formik } from "formik";

import DefaultLayout from "../../layouts/default";
import { registerAccount } from "../../kernel/apisdk";

const RegisterPage: React.FC = () => {
  const register = async (
    fullname: string,
    email: string,
    password: string
  ) => {
    try {
      const parts = fullname.split(" ");
      const firstname = parts[0];
      const lastname = parts.slice(1).join(" ");
      const token = await registerAccount({
        email,
        password,
        firstname,
        lastname
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DefaultLayout>
      <div className="row my-5">
        <div className="col-12 col-md-9 col-lg-6 mx-auto">
          <h1>Inregistrare:</h1>
          <Formik
            initialValues={{ fullname: "", email: "", password: "", agree: 1 }}
            validate={values => {
              let errors = {} as any;
              if (!values.fullname) {
                errors.fullname = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("register acc", values.agree);
              if (values.agree) {
                register(values.fullname, values.email, values.password);
              }

              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div
                  className={`form-group ${
                    errors.fullname && touched.fullname ? "has-danger" : ""
                  }`}
                >
                  <label htmlFor="fullnameElem">Nume complet</label>
                  <input
                    type="text"
                    name="fullname"
                    className="form-control"
                    id="fullnameElem"
                    // aria-describedby="fullnameHelp"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullname}
                  />
                  {errors.fullname && touched.fullname && errors.fullname}
                </div>
                <div
                  className={`form-group ${
                    errors.email && touched.email ? "has-danger" : ""
                  }`}
                >
                  <label htmlFor="emailElem">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="emailElem"
                    aria-describedby="emailHelp"
                    placeholder="Introduceti adresa de email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                </div>

                <div
                  className={`form-group ${
                    errors.password && touched.password ? "has-danger" : ""
                  }`}
                >
                  <label htmlFor="passwordElem">Parola</label>
                  <input
                    type="password"
                    name="password"
                    id="passwordElem"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                </div>

                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      name="agree"
                      id="agreeBox"
                      type="checkbox"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.agree}
                    />
                    Sunt de acord cu termenii si conditiile
                    <span className="form-check-sign">
                      <span className="check"></span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-block btn-primary"
                  disabled={isSubmitting}
                >
                  Inregistrare
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default RegisterPage;
