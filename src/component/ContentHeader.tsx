import React, { useContext } from "react";
import styled from "styled-components";
import startIcon from '../imgs/star.png';
import padlock from '../imgs/padlock.png';
import account from '../imgs/account.png';
import videocamera from '../imgs/video-camera.png';
import menu from '../imgs/menu.png';
import {AiFillLock, AiOutlineStar, AiOutlineUser, AiOutlineVideoCamera} from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import { AppContext } from "../Context/context";

function ContentHeader() {

  const context = useContext(AppContext)
  const { state } = context
  const { details } = state

  return (
    <StyledContentHeader className="content-header">
      <StyledHeader className="header">
        <StyledIconsLeft className="icons-left">
          <StyledP>{details.name || details?.team}</StyledP>
           <div className="icon_cont">
            <AiOutlineStar size={25}/>
            <AiFillLock size={25}/>
            <AiOutlineUser size={25}/>
           </div>
        </StyledIconsLeft>
        <StyledIconsRight className="icons-right">
          <AiOutlineVideoCamera size={25}/>
          <HiDotsVertical  size={25}/>
        </StyledIconsRight>
      </StyledHeader>
    </StyledContentHeader>
  );
}

const StyledContentHeader = styled.div`
  font-size: 19px;
  width: 100%;
  // padding: 1rem;
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex:1;
  width: 100%;
`;
const StyledP = styled.p`
  // padding-right: 40px;
  // padding-left: 53px;
  white-space: pre-line;
`;
const StyledButton = styled.button`
  border: none;
  margin-right: 12px;
  background-color: transparent;
  cursor: pointer;
`;
const StyledIconsLeft = styled.div`
  display: flex;
  align-items: center;

  .icon_cont{
    margin-left: 1rem;
    display: flex;
    svg{
      margin-right: 5px;
    }
  }
`;
const StyledIconsRight = styled.div`
  // padding-left: 78rem;
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
