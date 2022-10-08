import styled from "styled-components";
import girl from "../../imgs/girl.png";
import { MdChevronRight, MdChevronLeft, MdSearch } from "react-icons/md";
import { useState } from "react";

function Header() {
  const [showProfile, setShowProfile] = useState(false);

  const toggle = () => {
    setShowProfile(!showProfile);
  };
  
  return (
    <StyledHeader>
      <StyledProfileButton onClick={toggle}>
      <StyledImgProfile src={girl} alt="Girl Avatar Profile" />
      </StyledProfileButton>
      {showProfile && <StyledProfile className="profile">
        <p>
        Reina Mates
        </p>
        <a href="#">View profile</a>
        <hr />
        <p>
        Share status
        </p>
        <p>
        Invisible 
        </p>
        <p>
        Sign out
        </p>
      </StyledProfile>}
      <StyledP>DNA Micro</StyledP>
      <StyledButton>
      <MdChevronLeft size={25} />
      </StyledButton>
      <StyledButton>
      <MdChevronRight size={25} />
      </StyledButton>
      <StyledInputContainer className="input-container">
        <StyledIcon>
        <MdSearch size={25} />
        </StyledIcon>
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
  background-color: #066FAC;
  padding: 0.2rem;
  display: flex;
  text-align: center;
  padding-top: 12px;
`;
const StyledProfileButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
const StyledProfile = styled.div`
  padding: 0 18px;
    width: 15rem;
    background-color: white;
    position: relative;
    top: 48px;
    left: -44px;
    box-shadow: 5px 5px 5px #b9b9b9;
    z-index: 1;
`
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
  width: 42px;
  height: 34px;
  background-color: #a1abb3;
  opacity: 0.3;
  color: white;
  border: none;
  margin: 4px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  margin-top: 1px;
  width: 27rem;
  border: none;
  float: left;
  background-color: #a1abb3;
  opacity: 0.3;
  color: white;
  font-size: 19px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
`;

const StyledIcon = styled.i`
  margin-top: 1px;
  padding: 16px;
  background-color: #a1abb3;
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
  cursor: pointer;
`;

export default Header;
