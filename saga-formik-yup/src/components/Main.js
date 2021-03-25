import React from "react";
import styled from "styled-components";
import "../i18n";
import {useTranslation} from "react-i18next";

const Main = () => {

    const {t} = useTranslation();

    return (
        <Container>
            <h1>{t("Join")} {t("The")} {t("Team")}
            </h1>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default Main;