import styled from "styled-components";
import dragon from "../../assets/Shenlong.png";

export const ContainerStyled = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-image: url(${dragon});
  background-repeat: no-repeat, repeat;
  background-size: contain;
  background-position: center;
`;

export const TitleBoxStyled = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const TitleStyled = styled.h1`
  font-size: 70px;
  font-weight: bold;
  background: -webkit-linear-gradient(
    rgba(229, 67, 45, 1),
    rgba(255, 237, 52, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ImgStyled = styled.img`
  width: 200px;
  height: 200px;
`;

export const ButtonStyled = styled.button`
  width: 350px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50px;
  background: -webkit-linear-gradient(
    rgba(229, 67, 45, 1),
    rgba(255, 237, 52, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 50px;
  font-size: 25px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-style: none;
  :hover {
    cursor: pointer;
    transition: 1.5s;
    background: -webkit-linear-gradient(
      rgba(229, 67, 45, 1),
      rgba(255, 237, 52, 1)
    );
    -webkit-text-fill-color: #000;
  }
  :focus {
    outline: none;
  }
`;
