import React, { useState } from "react";
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





interface PropTypes {
  inputValue?: string;
  message?: string;
}
function ContentFooter(props: PropTypes) {
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
        <StyledButton>
        <MdFormatShapes size={20} />
        </StyledButton>
        <StyledButton>
        <MdAttachFile size={20} />
        </StyledButton>
        <StyledButton>
          <MdOutlineEmojiEmotions size={20} />
        </StyledButton>
        <StyledButton>
          <MdGif size={20} />
        </StyledButton>
        <StyledButton>
        <MdCheckCircleOutline size={20} />
        </StyledButton>
        <StyledButton>
        <MdOutlineCalendarToday size={20} />
        </StyledButton>
        <StyledButton>
        <MdOutlineCodeOff size={20} />
        </StyledButton>
      </StyledFooterIcons>
      <StlyedTextarea>
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
        >
        </StyledTextArea>
        <StyledButton onClick={submitMessage}>
          <StyledIconButtonRight src={send} alt="Send Icon" />
        </StyledButton>
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
  width: 85%;
  height: 2.5rem;
  margin-top: 20px;
  margin-left: 1rem;
  font-size: 20px;
  line-height: 47px;
  padding-left: 15px;
  overflow: hidden;
`;
const StyledFooterIconButton = styled.img`
  width: 19px;
  height: 18px;
  cursor: pointer;
  margin-right: 19px;
`;
const StyledFooterIcons = styled.div`
  display: flex;
  padding-left: 72px;
  padding-top: 15px;
`;
const StlyedTextarea = styled.div`
  display: flex;
  width: 340%;
`;
export default ContentFooter;
