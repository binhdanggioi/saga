import React, {Suspense, useState} from 'react';
import styled from 'styled-components';
import bgImage from './../assets/bg.png';
import Main from "./Main";
import Login from "../login";
import Register from '../register';
import {BrowserRouter as Router, Route} from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_EN } from "../translations/en/translations";
import { TRANSLATIONS_VI } from "../translations/vi/translations";
import {TRANSLATIONS_ZH} from "../translations/zh/translations";

function App() {

    i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources: {
                en: {
                    translation: TRANSLATIONS_EN
                },
                vi: {
                    translation: TRANSLATIONS_VI
                },
                zh: {
                    translation: TRANSLATIONS_ZH
                },
            }
        });
    i18n.changeLanguage("en");

    const [language, setLanguage] = useState('en');

    const handleOnclick = (event) => {
        event.preventDefault(event);
        setLanguage(event.target.value);
        console.log(event.target.value);
        i18n.changeLanguage(event.target.value);
    };

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Container>
                    <Wrapper>
                        <Route exact path="/login" component ={Login} />
                        <Route path="/register" component ={Register} />
                        <Main />
                        <MultiLanguage>
                            <button value="en" onClick={handleOnclick}>EN</button>
                            <button value="vi" onClick={handleOnclick}>VI</button>
                            <button value="zh" onClick={handleOnclick}>ZH</button>
                        </MultiLanguage>
                    </Wrapper>
                </Container>
            </Suspense>
        </Router>
    );
}

const Container = styled.div`
    background-color: #eefcff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  `;
const Wrapper = styled.div`
    background-image: url(${bgImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
`;

const MultiLanguage = styled.div`
    position: absolute;
    top: 1rem;
    left: 20rem;
    width: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default App;
