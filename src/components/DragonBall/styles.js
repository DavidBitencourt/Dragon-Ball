import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ContainerStyled = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxBallsStyled = styled.div`
  width: 90%;
  height: 80%;
  border-radius: 50%;
  animation: ${rotate} infinite 5s linear;
  display: grid;
  grid-template-rows: 2.5fr 2.5fr 2.5fr 2.5fr;
  grid-template-columns: 4.25fr 1.5fr 4.25fr;
`;

export const BallStyled = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    60deg,
    rgba(230, 67, 45, 1) 0%,
    rgba(246, 176, 50, 1) 70%
  );
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : "center")};
  justify-self: ${({ justifySelf }) => justifySelf};
  grid-area: ${({ gridRow, gridColumn }) => `${gridRow}/${gridColumn}`};
  position: ${({ position }) => position && "absolute"};
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.5);
`;

export const StarsBoxStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: ${rotate} infinite 3s linear;
  box-shadow: 1px 1px 5px 5px rgba(255, 237, 52, 1);
  display: ${({ stars }) => (stars ? "grid" : "flex")};
  align-items: center;
  justify-content: center;
  ${({ stars }) =>
    (stars === 3 || stars === 4) &&
    css`
      grid-template-rows: 5fr 5fr;
      grid-template-columns: 5fr 5fr;
    `}

    ${({ stars }) =>
      stars === 5 &&
      css`
        grid-template-rows: 3.3fr 3.3fr 3.3fr;
        grid-template-columns: 5fr 5fr;
      `}

  ${({ stars }) =>
    stars === 6 &&
    css`
      grid-template-rows: 2.5fr 2.5fr 2.5fr 2.5fr;
      grid-template-columns: 5fr 5fr;
    `}
`;

export const ImgStarStyled = styled.img`
  width: 10px;
  height: 10px;
  margin: ${({ margin }) => margin && `${margin}px`};
  position: ${({ position }) => position && "absolute"};
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : "center")};
  justify-self: ${({ justifySelf }) => justifySelf};
  grid-area: ${({ gridRowStart, gridColumnStart, gridRowEnd, gridColumnEnd }) =>
    gridRowStart &&
    `${gridRowStart}/${gridColumnStart}/${gridRowEnd}/${gridColumnEnd}
  `};
`;
