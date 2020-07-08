import React, { useState } from "react";
import DragonBall from "../../components/DragonBall";
import { ButtonStyled, ContainerStyled, TitleBoxStyled } from "./styles";

function Home() {
  const [timeRotate, setTimeRotate] = useState(3.5);

  return (
    <>
      <ContainerStyled>
        <TitleBoxStyled>
          {/* <TitleStyled>Dragon Ball</TitleStyled> */}
        </TitleBoxStyled>
        <DragonBall timeRotate={timeRotate} />
      </ContainerStyled>
      <ButtonStyled onClick={() => setTimeRotate(0.5)}>
        Apareça, Shenlong! E realize o meu desejo!
      </ButtonStyled>
    </>
  );
}

export default Home;
