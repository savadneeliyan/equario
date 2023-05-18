import React from "react";
import styled from "styled-components";

function ButtonRound({ title }) {
  return (
    <ButtonS>
      {title ? title : "Read More"}
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M2 21L21 2"
          stroke="white"
          stroke-width="2.63994"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M2 2H21V21"
          stroke="white"
          stroke-width="2.63994"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </ButtonS>
  );
}

export default ButtonRound;

const ButtonS = styled.button`
  color: #000;
  background-color: yellow;
  border-radius: 50%;
  height:146px;
  width:146px;
  border: 0px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 10px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  padding: 20px 30px;
  text-decoration: none;
  cursor: pointer;
`;

const Path = styled.path`
    stroke:#000;
`