import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GiNotebook } from "react-icons/gi";
import { GrAttachment } from "react-icons/gr";
import { MdInsertEmoticon, MdOutlineStickyNote2 } from "react-icons/md";
import {
  AiOutlineFileGif,
  AiOutlineCheckCircle,
  AiOutlineCalendar,
  AiFillCode,
} from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";

interface PropTypes {
  inputValue?: string;
  message?: string;
  messageWidth: number;
}
function ContentFooter(props: PropTypes) {
  const { messageWidth } = props;
  const initState = {
    inputValue: "",
    message: props.message,
  };
  const [message, setMessage] = useState(initState);
  const [textWidth, setTextWidth] = useState(messageWidth)
  
  useEffect(() => {
    console.log("messageWidth", messageWidth);
    
    setTextWidth(messageWidth - 20)
  }, [messageWidth])
  
  

  const submitMessage = () => {
    setMessage({
      ...message,
      message: message?.inputValue,
    });
  };

  return (
    <StyledFooter className="content-footer">
      <StyledFooterIcons className="icons">
        <GiNotebook size={20} color="gray" />
        <GrAttachment size={20} color="gray" />
        <MdInsertEmoticon size={20} color="gray" />
        <AiOutlineFileGif size={20} color="gray" />
        <AiOutlineCheckCircle size={20} color="gray" />
        <AiOutlineCalendar size={20} color="gray" />
        <MdOutlineStickyNote2 size={20} color="gray" />
        <AiFillCode size={20} color="gray" />
      </StyledFooterIcons>
      <StlyedTextarea
        style={{
          width: textWidth
            ? `${textWidth}px`
            : "100%",
        }}
      >
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
          <RiSendPlaneFill size={25} />
        </a>
      </StlyedTextarea>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  position: fixed;
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
  font-family: inherit;
`;

const StyledFooterIcons = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 15px 0;
  svg {
    margin-right: 1rem;
    cursor: pointer;
  }
`;

const StlyedTextarea = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  a {
    position: absolute;
    color: #333;
    right: 10px;
    bottom: 0;
  }
`;

export default ContentFooter;
