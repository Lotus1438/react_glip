import { useContext } from "react";
import styled from "styled-components";
import { directMessages, messages } from "../messages";
import { AppContext } from "../Context/context";


function ContentMessages() {
  const context = useContext(AppContext);

  const { state } = context;
  const { id, type } = state.activeMessage;

  const generateDirectMessage = () => {
    const msgs = directMessages.find((msg) => msg.user_id === id);
    if (msgs) {
      return msgs.details?.map((msg: any) => {
        return (
          <StyledMsgContent key={msg.user_id}>
            {/* <p>{msgs.user_profile?.girl_with_bangs}</p> */}
            <StyledText>
              <StyledTextUser>{msgs.user_name}</StyledTextUser>
              <StyledTextMessage>{msg.message}</StyledTextMessage>
            </StyledText>
            <StyledTime>{msg.time}</StyledTime>
          </StyledMsgContent>
        );
      });
    }
  };

  const generateTeamMessage = () => {
    const msgs = messages.find((msg) => msg.team_id === id)
      if (msgs) {
        return (
          <StyledMsgContent key={msgs.user_profile}>
            {/* <p>{msgs.user_profile?.girl_with_bangs}</p> */}
            <StyledText>
              {/* {messages[0]?.details[0]?.map(() => {})} */}
              <StyledTextUser>{msgs.details[0].userDetails?.profile_name}</StyledTextUser>
              <StyledTextMessage>{msgs.details[0].message}</StyledTextMessage>
            </StyledText>
            <StyledTime>{msgs.details[0].time}</StyledTime>
          </StyledMsgContent>
        );
      }
    
    // return <div>this is team messages</div>;
  };

  return (
    <div>
      <StyledMessages className="messages">
        <StyledMessage className="message">
          <>
            {type === "direct" && generateDirectMessage()}
            {type === "team" && generateTeamMessage()}
            {type === "" && <div>No message found!</div>}
          </>

          {/* {messages.map((message) => ())} */}
          {/* <StyledMsgContent className="msg_content">
              <StyledMessageIconButton
                src="../imgs/hacker.png"
                alt="Hacker Icon"
              />
              <StyledText className="text">
                <StyledP>test</StyledP>
                <p>{context.state.message}</p>
              </StyledText>
              <div className="message-time">
                <StyledTime className="time">{}</StyledTime>
              </div>
            </StyledMsgContent> */}
        </StyledMessage>
      </StyledMessages>
    </div>
  );
}
// messages
const StyledMessages = styled.div`
  padding-left: 71px;
  padding-right: 30px;
  line-height: 42px;
  font-size: 20px;
  padding-top: 27px;
  justify-content: space-between;
`;
const StyledMessage = styled.div`
  display: block;
  justify-content: right;
  margin-left: -65rem;
  margin-right: 2rem;
  overflow-y: auto;
`;
const StyledMessageIconButton = styled.img`
  width: 38px;
  height: 38px;
  cursor: pointer;
  margin-right: 40px;
`;
const StyledMsgContent = styled.div`
  /* display: inline-flex !important; */
`;
const StyledText = styled.text`
  font-size: 17px;
  display: inline-block;
  text-align: justify;
  line-height: 30px;
`;
const StyledTextMessage = styled.p`
  font-size: 16px;
`;
const StyledTextUser = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
const StyledTime = styled.p`
  float: right;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.5);
`;
export default ContentMessages;
