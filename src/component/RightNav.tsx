import React from "react";
import styled from "styled-components";

function RightNav() {
  return (
    <StyledContent className="Content">
      <StyledHeader>
        <p>Members(3)</p>
        <StyledImgArrowIcon src="../imgs/next.png" alt="Next symbol Icon" />
      </StyledHeader>

      <StyledAvatarsProfile className="avatars_profile">
        <StyledImgButton>
          <StyledImgIcon src="../imgs/girl.png" alt="Girl Avatar Icon" />
        </StyledImgButton>
        <StyledImgButton>
          <StyledImgIcon src="../imgs/hacker.png" alt="Hacker Avatar Icon" />
        </StyledImgButton>
        <StyledImgButton>
          <StyledImgIcon src="../imgs/add-user.png" alt="Add User Icon" />
        </StyledImgButton>
      </StyledAvatarsProfile>

      <StyledMenu className="menu">
        <StyledUl>
          <StyledLi>
            <StyledA className="active" href="#pinned">
              Pinned
            </StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA href="#files">Files</StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA href="#images">Images</StyledA>
          </StyledLi>
        </StyledUl>
        <StyledButton>
          <StyledIconButton src="../imgs/more.png" alt="More Icon" />
        </StyledButton>
      </StyledMenu>

      <hr />

      <StyledPinContent>
        <StyledSticky src="../imgs/sticky-note.png" alt="Sticky note Icon" />
        <h5>No pins Yet</h5>
        <StyledPinP>
          Pin informaton and it will appear here so that you can reference it
          later.
        </StyledPinP>
      </StyledPinContent>
    </StyledContent>
  );
}
const StyledContent = styled.div`
  // height: 100vh;
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 9px;
  margin-left: 12px;
  margin-right: 12px;
`;
const StyledImgArrowIcon = styled.img`
  width: 13px;
  text-align: center;
  float: right;
  margin-right: 12px;
`;
const StyledImgButton = styled.button`
  width: 57px;
  height: 51px;
  border-radius: 50%;
  background-color: white;
  padding: -1px;
  float: left;
  margin-left: 2px;
  border: none;
  cursor: pointer;
`;
const StyledImgIcon = styled.img`
  width: 29px;
  text-align: center;
  float: right;
  margin-right: 12px;
`;
const StyledAvatarsProfile = styled.div`
  display: flex;
`;
const StyledMenu = styled.div`
  margin-bottom: 1rem;
  margin-left: 0rem;
  margin-right: 1rem;
  display: flex;
  justify-content: space-between;
`;
const StyledUl = styled.ul`
  display: flex;
`;
const StyledLi = styled.li`
  float: left;
  list-style: none;
`;
const StyledA = styled.a`
  display: block;
  color: black;
  text-align: center;
  padding: 7px 2px;
  font-size: 16px;
  text-decoration: underline;
  margin-top: 10px;
`;
const StyledButton = styled.button`
  border: none;
  margin-right: 12px;
  cursor: pointer;
`;
const StyledIconButton = styled.img`
  width: 20px;
  cursor: pointer;
`;
const StyledSticky = styled.img`
  width: 160px;
  margin-top: 135px;
`;
const StyledPinContent = styled.div`
  text-align: center;
`;
const StyledPinP = styled.p`
  font-size: 16px;
`;
export default RightNav;
