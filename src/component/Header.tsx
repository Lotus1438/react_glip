import React from "react";
import styled from "styled-components";
import girl from '../imgs/girl.png';
import lessThan from '../imgs/less-than-symbol.png';
import greaterThan from '../imgs/greater-than-symbol.png';


function Header() {
  return (
    <StyledHeader>
      <StyledImgProfile src={girl} alt="Girl Avatar Profile" />
      <StyledP>DNA Micro</StyledP>
      <StyledButton>
        <StyledImgIcon
          src={lessThan}
          alt="Less than symbol"
        />
      </StyledButton>
      <StyledButton>
        <StyledImgIcon
          src={greaterThan}
          alt="Greater than symbol"
        />
      </StyledButton>
      <StyledInputContainer className="input-container">
        <StyledIcon className="fa fa-search"></StyledIcon>
        <StyledInput
          className="input-field"
          type="text"
          placeholder="Search"
        ></StyledInput>
      </StyledInputContainer>
      <StyledPlusButton>+</StyledPlusButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #066fac;
  padding: 0.2rem;
  display: flex;
  text-align: center;
  padding-top: 12px;
`;
const StyledImgProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  padding: 4px;
  float: left;
  margin-left: 28px;
`;

const StyledP = styled.p`
  color: white;
  float: left;
  margin-left: 0rem;
  font-size: 27px;
  width: 14rem;
  padding-top: 5px;
  font-family: revert;
`;
const StyledButton = styled.button`
  border-radius: 50%;
  float: left;
  // font-size: -267px;
  width: 42px;
  height: 34px;
  background-color: white;
  opacity: 0.3;
  color: white;
  border: none;
  margin: 4px;
`;

const StyledInput = styled.input`
  margin-top: 1px;
  width: 27rem;
  border: none;
  float: left;
  background-color: white;
  opacity: 0.3;
  color: black !important;
  font-size: 19px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
`;
const StyledImgIcon = styled.img`
  width: 25px;
  padding-top: 2px;
  padding-left: 0px;
  text-align: center;
`;
const StyledIcon = styled.i`
  margin-top: 1px;
  padding: 16px;
  background-color: white;
  opacity: 0.3;
  color: black;
  text-align: center;
  height: 7px;
  margin-left: 8px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

const StyledPlusButton = styled.button`
  float: right;
  border-radius: 50%;
  float: left;
  font-size: 27px;
  width: 42px;
  height: 34px;
  background-color: white;
  color: black;
  border: none;
  margin: 4px;
  margin-right: 20px;
`;
export default Header;
