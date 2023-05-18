import React from "react";
import styled from "styled-components";

function ButtonContainer({ title, icon, link }) {
  return (
      <a href={link}>
        <ButtonS>
            {title ? title : "Click Me"}
                {icon ? (
                    <img src={icon} alt="" />
            ):(
                <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                </svg>
            )}
        </ButtonS>
      </a>
  );
}

export default ButtonContainer;

const ButtonS = styled.button`
  color: #fff;
  background-color: red;
  border: 4px solid black;
  display: flex;
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
  padding: 20px 30px;
  text-decoration: none;
`;
