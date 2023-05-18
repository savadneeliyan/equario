import React from "react";
import styled from "styled-components";

function ButtonContainer({ title, icon, link }) {
  return (
      <a href={link}>
        <ButtonS>
                {icon ? (
                    <img src={icon} alt="" />
            ):(
                <Svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/Svg"
                >
                <path
                    d="M2 21L21 2"
                    stroke="white"
                    stroke-width="2.63994"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M2 2H21V21"
                    stroke="white"
                    stroke-width="2.63994"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                </Svg>
            )}
            <Title>{title ? title : "Click Me"}</Title>
        </ButtonS>
      </a>
  );
}

export default ButtonContainer;

const ButtonS = styled.button`
  color: #fff;
  background-color: red;
  border: 4px solid black;
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  gap: 27px;
  font-family: Roboto;
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  padding: 40px 30px 40px ;
  text-decoration: none;
  max-width: 391px;
  width: 100%;
  cursor: pointer;
`;

const Title = styled.h3`
  /* width: calc(100% - 30); */
`

const Svg = styled.svg`
  /* width: 30px;
  height: 30px; */
`