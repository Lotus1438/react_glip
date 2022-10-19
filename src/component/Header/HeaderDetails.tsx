import styled from "styled-components";
import girl from "../../imgs/girl.png";
import {
  MdChevronRight,
  MdChevronLeft,
  MdSearch,
  MdCircle,
} from "react-icons/md";

interface Iprops{
    toggle: boolean,
    onChangeDisplay: (params: boolean) => void;
};

const HeaderDetails = ({toggle, onChangeDisplay}: Iprops) => {
  return (
    <StyledHeader>
      <StyledProfileButton onClick={() => {onChangeDisplay(false)}}>
        <StyledImgProfile src={girl} alt="Girl Avatar Profile" />
      </StyledProfileButton>
      <span>
        <MdCircle color="#03f903" />
      </span>
      { toggle === true && (
        <StyledProfile className="profile">
          <StyledImgProfile
            className="img"
            src={girl}
            alt="Girl Avatar Profile"
          />
          <ul>
            <li>Reina Mates</li>
            <a>View profile</a>
            <hr />
            <li>Share status</li>

            <li>
              <MdCircle size="10" color="gray" /> Invisible
            </li>
            <li>Sign out</li>
          </ul>
        </StyledProfile>
      )}
      <StyledP>DNA Micro</StyledP>
      <StyledButton>
        <MdChevronLeft size={25} />
      </StyledButton>
      <StyledButton>
        <MdChevronRight size={25} />
      </StyledButton>
      <StyledInputContainer className="input-container">
        <StyledIcon>
          <span>
            <MdSearch size={25} color="white" />
          </span>
        </StyledIcon>
        <StyledInput
          className="input-field"
          type="text"
          placeholder="Search"
        ></StyledInput>
      </StyledInputContainer>
      <StyledPlusButton onClick={() => {onChangeDisplay(true)}}>+</StyledPlusButton>
      {toggle === true && (
        <StyledNewAction className="new_action">
          <ul>
            <li>Send new message</li>
            <li>Create team</li>
            <li>Start a video meeting</li>
            <li>Schedule a video meeting</li>
            <li>Invite to RingCentral</li>
          </ul>
        </StyledNewAction>
      )}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #066fac;
  padding: 0.2rem;
  display: flex;
  text-align: center;
  padding-top: 12px;
  position: relative;
  span {
    position: relative;
    top: 32px;
    left: -16px;
  }
`;
const StyledProfileButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const StyledProfile = styled.div`
  padding: 31px 18px;
  width: 17rem;
  background-color: white;
  position: absolute;
  top: 58px;
  left: 36px;
  box-shadow: 5px 5px 5px #e3dddd;
  z-index: 1;
  img {
    margin-left: 0;
  }
  li {
    padding: 7px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #cfd4d6;
    }
  }
  a {
    text-decoration: none;
    color: blue;
    margin-left: -93px;
    cursor: pointer;
    &:hover {
      background-color: #cfd4d6;
    }
  }
`;
const StyledNewAction = styled.div`
  padding: 31px 18px;
  width: 17rem;
  background-color: white;
  position: absolute;
  top: 51px;
  right: 17px;
  box-shadow: 5px 5px 5px #e3dddd;
  z-index: 1;
  img {
    margin-left: 0;
  }
  li {
    padding: 7px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #cfd4d6;
    }
  }
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
  width: 41px;
  height: 31px;
  background-color: rgb(253 207 207 / 16%);
  color: white;
  border: none;
  margin: 4px;
  cursor: pointer;
  &:hover {
  background-color: rgba(255, 255, 255, 0.48);
   }
`;

const StyledInput = styled.input`
  margin-top: 1px;
  width: 27rem;
  height: 32px;
  border: none;
  float: left;
  background-color: rgb(253 207 207 / 16%);
  font-size: 19px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  cursor: pointer;
  &:hover {
  background-color: rgba(255, 255, 255, 0.48);
   }
  /* pointer-events: none; */
   &::placeholder{
    color: white;
    opacity: 1;
   }
`;

const StyledInputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
`;

const StyledIcon = styled.i`
  margin-top: 1px;
  padding: 16px;
  background-color:  rgb(253 207 207 / 16%);
  color: white;
  text-align: center;
  height: 7px;
  margin-left: 8px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  cursor: pointer;
   &:hover {
  background-color: rgba(255, 255, 255, 0.48);
   }
  span {
    position: relative;
    top: -10px;
    left: -4px;
  }
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

export default HeaderDetails