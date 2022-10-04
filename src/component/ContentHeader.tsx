import React from "react";
import styled from "styled-components";
function ContentHeader() {
  return (
    <StyledContentHeader className="content-header">
      <StyledHeader className="header">
        <StyledIconsLeft className="icons-left">
          <StyledP>TEAMBANGAN-weighs</StyledP>
          <StyledButton>
            <StyledIconButton src="../imgs/star.png" alt="Star Icon" />
          </StyledButton>
          <StyledButton>
            <StyledIconButton src="../imgs/padlock.png" alt="Padlock Icon" />
          </StyledButton>
          <StyledButton>
            <StyledIconButton src="../imgs/account.png" alt="Acount Icon" />
          </StyledButton>
        </StyledIconsLeft>

        <StyledIconsRight className="icons-right">
          <StyledButton>
            <StyledIconButtonRight
              src="../imgs/video-camera.png"
              alt="Video Camera Icon"
            />
          </StyledButton>
          <StyledButton>
            <StyledIconButtonRight src="../imgs/menu.png" alt="Menu Icon" />
          </StyledButton>
        </StyledIconsRight>
      </StyledHeader>
    </StyledContentHeader>
  );
}

const StyledContentHeader = styled.header`
  display: flex;
  font-size: 19px;
  // padding: 1rem;
`;
const StyledHeader = styled.div`
  display: contents;
`;
const StyledP = styled.p`
  // padding-right: 40px;
  // padding-left: 53px;
`;
const StyledButton = styled.button`
  border: none;
  margin-right: 12px;
  cursor: pointer;
`;
const StyledIconsLeft = styled.div`
  display: flex;
  align-items: center;
`;
const StyledIconsRight = styled.div`
  // padding-left: 78rem;
  margin-left: 62rem;
`;
const StyledIconButton = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const StyledIconButtonRight = styled.img`
  width: 22px;
  height: 23px;
  cursor: pointer;
`;
export default ContentHeader;
