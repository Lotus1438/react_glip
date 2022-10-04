import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

interface PropTypes {
  inputValue?: string;
  message?: string;
}
function ContentFooter(props: PropTypes) {
  const initState ={
    inputValue: '',
    message: props.message,
  };
  const [message, setMessage] = useState(initState);

  const submitMessage = () => {
    setMessage({
      ...message,
      message: message.inputValue,
    });
  };
  return (
    <StyledFooter className="content-footer">
      <StyledFooterIcons className="icons">
        <StyledButton>
          <StyledFooterIconButton
            src="../imgs/add-text.png"
            alt="Addtext Icon"
          />
        </StyledButton>
        <StyledButton>
          <StyledFooterIconButton src="../imgs/clip.png" alt="Clip Icon" />
        </StyledButton>
        <StyledButton>
          <StyledFooterIconButton src="../imgs/smile.png" alt="Smile Icon" />
        </StyledButton>
        <StyledButton>
          <StyledFooterIconButton src="../imgs/gif.png" alt="Gif Icon" />
        </StyledButton>
        <StyledButton>
          <StyledFooterIconButton
            src="../imgs/check-mark.png"
            alt="Checkmark Icon"
          />
        </StyledButton>
        <StyledButton>
          <StyledFooterIconButton
            src="../imgs/calendar.png"
            alt="Calendar Icon"
          />
        </StyledButton>
        <StyledButton>
          <StyledFooterIconButton
            src="../imgs/web-programming.png"
            alt="Web programming Icon"
          />
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
              inputValue: e.target.value
            })
          }}
        ></StyledTextArea>
        <StyledButton onClick={submitMessage}>
          <StyledIconButtonRight src="../imgs/send.png" alt="Send Icon" />
          {/* <i className="fa-solid fa-paper-plane"></i> */}
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
  cursor: pointer;
`;
const StyledIconButtonRight = styled.img`
  width: 25px;
  height: 26px;
  cursor: pointer;
`;
const StyledTextArea = styled.textarea`
  width: 91%;
  height: 2.5rem;
  margin-top: 20px;
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
