import React from "react";
import DragonBall from "../../components/DragonBall";
import { ButtonStyled, ContainerStyled, TitleBoxStyled } from "./styles";

function Home() {
  return (
    <>
      <ContainerStyled>
        <TitleBoxStyled>
          {/* <TitleStyled>Dragon Ball</TitleStyled> */}
        </TitleBoxStyled>
        <DragonBall />
      </ContainerStyled>
      <ButtonStyled>Avançar</ButtonStyled>
    </>
  );
}

export default Home;
