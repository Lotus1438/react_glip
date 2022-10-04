import React from "react";
import { messages } from "../messages";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function JunneMessages() {
 
  const {params} = useParams();
  console.log("%c 🙎‍♀️: JunneMessages -> params ", "font-size:16px;background-color:#ba2f7e;color:white;", params)
  // const id = params.id;

  // const data = messages.find(msg => msg.id === id)
  return (
    <div>
      <StyledMessages className="messages">
        <StyledMessage className="message">
          {messages.map((message) => (
            <StyledMsgContent className="msg_content">
              <StyledMessageIconButton
                src="../imgs/hacker.png"
                alt="Hacker Icon"
              />
              <StyledText className="text">
                <StyledP>{message?.user_name}</StyledP>
                <p>{}</p>
              </StyledText>
              <div className="message-time">
                <StyledTime className="time">{}</StyledTime>
              </div>
            </StyledMsgContent>
          ))}
        </StyledMessage>
      </StyledMessages>
    </div>
  );
}
// messages
const StyledMessages = styled.div`
  padding-left: 71px;
  padding-right: 30px;
  line-height: 53px;
  font-size: 20px;
  padding-top: 27px;
  justify-content: space-between;
`
const StyledMessage = styled.div`
  display: block;
  justify-content: right;
  margin-left: -65rem;
  margin-right: 2rem;
  overflow-y: auto;
`
const StyledMessageIconButton = styled.img`
  width: 38px;
  height: 38px;
  cursor: pointer;
  margin-right: 40px;
`
const StyledMsgContent = styled.div`
  /* display: inline-flex !important; */
`
const StyledText = styled.text`
  font-size: 17px;
  display: inline-block;
  text-align: justify;
  line-height: 30px;
`
const StyledP = styled.p`
  font-weight: bold;
`
const StyledTime = styled.p`
  float: right;
  font-size: 12px;
  color: rgb(0,0,0, 0.5);
`
export default JunneMessages;
