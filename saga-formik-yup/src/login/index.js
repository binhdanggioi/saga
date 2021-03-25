import React, {useCallback} from 'react';
import logoImg from './../assets/logo.svg';
import styled from 'styled-components';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useDispatch} from "react-redux";
import {userLogin} from '../redux/toolkit/userSlice';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import "../i18n";

function Login() {

    const {t} = useTranslation();

    const validateSchema = yup.object().shape({
        email: yup.string().email("please input correct format your email").required("please enter your email"),
        password: yup.string().required('please enter your password').min(6).max(18),
    });

    const dispatch = useDispatch();

    const handleOnSubmit = useCallback((values) => {
        dispatch(userLogin(values));
    });

    return (
            <Container>
                <Logo>
                    <img src={logoImg} alt="logo"/>
                    <h3>{t("Login")}</h3>
                </Logo>

                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={validateSchema}
                    onSubmit={handleOnSubmit}>

                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <Form>
                            <Input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                placeholder="Email"
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email &&
                            <div style={{color: 'red', fontSize: '10px', width: '70%'}}>{errors.email}</div>}

                            <Input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                placeholder="Password"
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password &&
                            <div style={{color: 'red', fontSize: '10px', width: '70%'}}>{errors.password}</div>}
                            <button type="submit" onClick={handleSubmit}>
                                {t("Login")}
                            </button>
                        </Form>
                    )}
                </Formik>
                <div>
                    <Terms>
                        By signing up, I agree to the Privacy Policy <br /> and Terms of
                        Service
                    </Terms>
                    <h4>
                        Do not have an account? <Link to='/register'>Register</Link>
                    </h4>
                </div>
            </Container>
    );
}

const Container = styled.div`
    min-width: 400px;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(35px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 2rem;
    
    @media (max-width: 900px) {
        width: 100vw;
        position: absolute;
        padding: 0;
    }
    h4 {
        color: #808080;
        font-weight: bold;
        font-size: 13px;
        margin-top: 2rem;
        a {
          color: #ff8d8d;
          cursor: pointer;
          text-decoration: none;
        }
`;


const Input = styled.input`
  width: 65%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  outline: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

const Logo = styled.div`
    img {
        height: 6rem;
    }
    h3 {
        color: #ff8d8d;
        text-align: center;
        font-size: 22px;
    }
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    outline:none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;


export default Login;