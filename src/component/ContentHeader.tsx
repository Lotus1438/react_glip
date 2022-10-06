import React from "react";
import styled from "styled-components";
import {
  AiFillLock,
  AiOutlineStar,
  AiOutlineUser,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";

function ContentHeader() {
  return (
    <StyledContentHeader className="content-header">
      <StyledHeader className="header">
        <StyledIconsLeft className="icons-left">
          <StyledP>TEAMBANGAN-weighs</StyledP>
          <div className="icon_cont">
            <AiOutlineStar size={25} />
            <AiFillLock size={25} />
            <AiOutlineUser size={25} />
          </div>
        </StyledIconsLeft>

        <div className="icons-right">
          <AiOutlineVideoCamera size={25} />
          <HiDotsVertical size={25} />
        </div>
      </StyledHeader>
    </StyledContentHeader>
  );
}

const StyledContentHeader = styled.div`
  font-size: 19px;
  width: 100%;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
`;

const StyledP = styled.p`
  white-space: pre-line;
`;

const StyledIconsLeft = styled.div`
  display: flex;
  align-items: center;

  .icon_cont {
    margin-left: 1rem;
    display: flex;
    svg {
      margin-right: 5px;
    }
  }
`;

export default ContentHeader;
