import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../Context/context";
import { directMessages, favoriteMessages, messages } from "../../messages";

function ContentMessages() {
  const context = useContext(AppContext);

  const { state } = context;
  const { id, type } = state.activeMessage;

  const generateFavoriteMessage = () => {
    const msgs = favoriteMessages.find((msg) => msg.user_id === id);
    if (msgs) {
      return msgs.details?.map((msg: any) => {
        return (
          <StyledMsgContent key={msg.user_id}>
            <StyledText>
              <StyledTextUser>{msgs.user_name}</StyledTextUser>
              <StyledTextMessage>{msg.message}</StyledTextMessage>
            </StyledText>
            <StyledTime>{msg.time}</StyledTime>
          </StyledMsgContent>
        );
      });
    }
  }
  const generateDirectMessage = () => {
    const msgs = directMessages.find((msg) => msg.user_id === id);
    if (msgs) {
      return msgs.details?.map((msg: any) => {
        return (
          <StyledMsgContent key={msg.user_id}>
            <StyledText>
              <div className="profile">
                <img src={msg.user === 'you' ? msgs.user_profile : msgs.recipient_profile } alt="tes" />
              </div>
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
    const msgs = messages.find((msg) => msg.team_id === id);
    if (msgs) {
      return msgs.details?.map((msg: any) => {
        return (
          <StyledMsgContent key={msg.team_id}>
            <StyledText>
              <StyledTextUser>
                {msg.profile_name}
              </StyledTextUser>
              <StyledTextMessage>{msg.message}</StyledTextMessage>
            </StyledText>
            <StyledTime>{msg.time}</StyledTime>
          </StyledMsgContent>
        );
      })
    }
  };

  return (
    <div>
      <StyledMessages className="messages">
        <StyledMessage className="message">
        {generateFavoriteMessage()}
            {type === "direct" && generateDirectMessage()}
            {type === "team" && generateTeamMessage()}
            {type === "" && <div>No message found!</div>}
        </StyledMessage>
      </StyledMessages>
    </div>
  );
}

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

const StyledMsgContent = styled.div``;
const StyledText = styled.text`
  font-size: 17px;
  display: inline-block;
  text-align: justify;
  line-height: 30px;
  .profile{
    img{
      width: 30px;
    }
  }
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
