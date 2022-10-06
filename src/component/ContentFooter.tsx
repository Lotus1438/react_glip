import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import add_text from '../imgs/add-text.png';
import clip from '../imgs/clip.png';
import smile from '../imgs/smile.png';
import gif from '../imgs/gif.png';
import check_mark from '../imgs/check-mark.png';
import calendar from '../imgs/calendar.png';
import web_programming from '../imgs/web-programming.png';
import send from '../imgs/send.png';
import {  MdFormatShapes, MdAttachFile, MdCheckCircleOutline, MdGif, MdOutlineEmojiEmotions, MdOutlineCalendarToday, MdOutlineCodeOff  } from "react-icons/md";
import ContentMessages from "./ContentMessages";
import { messages } from "../messages";


import { GiNotebook } from 'react-icons/gi'
import { GrAttachment } from 'react-icons/gr'
import { MdInsertEmoticon, MdOutlineStickyNote2 } from 'react-icons/md'
import { AiOutlineFileGif, AiOutlineCheckCircle, AiOutlineCalendar, AiFillCode } from 'react-icons/ai'
import { RiSendPlaneFill } from 'react-icons/ri'


interface PropTypes {
  inputValue?: string;
  message?: string;
  refs?: React.MutableRefObject<any>
}
function ContentFooter(props: PropTypes) {

  const { refs } = props;
  const initState = {
    inputValue: "",
    message: props.message,
  };
  const [message, setMessage] = useState(initState);

  const submitMessage = () => {
    setMessage({
      ...message,
      message: message?.inputValue,
    });
  };


  return (
    <StyledFooter className="content-footer">
      <StyledFooterIcons className="icons">
        <GiNotebook size={20} />
        <GrAttachment size={20}/>
        <MdInsertEmoticon size={20}/>
        <AiOutlineFileGif size={20}/>
        <AiOutlineCheckCircle  size={20}/>
        <AiOutlineCalendar size={20}/>
        <MdOutlineStickyNote2 size={20}/>
        <AiFillCode size={20}/>
      </StyledFooterIcons>
      <StlyedTextarea style={{width: refs?.current?.clientWidth ? `${refs?.current?.clientWidth}px` : '100%'}}>
        {message.message}
        <StyledTextArea
          name=""
          id=""
          placeholder="Message"
          onChange={(e) => {
            setMessage({
              ...message,
              inputValue: e.target.value,
            });
          }}
        ></StyledTextArea>
        <a href="#">
          <RiSendPlaneFill size={25}/>
        </a>
      </StlyedTextarea>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  position: fixed;
`;
const StyledButton = styled.button`
  border: none;
  margin-right: 12px;
  background-color: transparent;
  position: relative;
  left: -31px;
    top: 14px;
  cursor: pointer;
`;
const StyledIconButtonRight = styled.img`
  width: 25px;
  height: 26px;
  cursor: pointer;
`;
const StyledTextArea = styled.textarea`
  height: 2.5rem;
  margin-top: 20px;
  margin-left: 1rem;
  font-size: 20px;
  line-height: 47px;
  overflow: hidden;
  width: 100%;
  resize: none;
  font-size: 16px;
  font-family:inherit;
`;
const StyledFooterIconButton = styled.img`
  width: 19px;
  height: 18px;
  cursor: pointer;
  margin-right: 19px;
`;
const StyledFooterIcons = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 15px 0;
  svg{
    margin-right: 1rem;
  }
`;
const StlyedTextarea = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  a{
    position: absolute;
    color: #333;
    right: 10px;
    bottom: 0
  }
`;
export default ContentFooter;
