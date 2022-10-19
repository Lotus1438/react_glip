import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../Context/context";
import { directMessages, favoriteMessages, messages } from "../../messages";
import girl from "../../imgs/girl.png";
import hacker from "../../imgs/hacker.png";
import girl_with_bangs from "../../imgs/girl-with-bangs.png";

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
              <StyledImgIcon src={girl} alt="Girl Avatar Icon" />
              <StyledTextUser>{msgs.user_name}</StyledTextUser>
              <StyledTextMessage>{msg.message}</StyledTextMessage>
            </StyledText>
            <StyledTime className="tooltip">
              {msg.time}
              {/* <StyledSpan className="tooltiptext">POPOVER</StyledSpan> */}
            </StyledTime>
          </StyledMsgContent>
        );
      });
    }
  };
  const generateDirectMessage = () => {
    const msgs = directMessages.find((msg) => msg.user_id === id);
    if (msgs) {
      return msgs.details?.map((msg: any) => {
        return (
          <StyledMsgContent key={msg.user_id}>
            <StyledText>
              {/* <div className="profile">
                <img src={msg.user === 'you' ? msgs.user_profile : msgs.recipient_profile } alt="tes" />
              </div> */}
              <StyledImgIcon
                src={girl_with_bangs}
                alt="Girl with bangs Avatar Icon"
              />
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
              <StyledImgIcon src={hacker} alt="Hacker Avatar Icon" />
              <StyledTextUser>{msg.profile_name}</StyledTextUser>
              <StyledTextMessage>{msg.message}</StyledTextMessage>
            </StyledText>
            <StyledTime>{msg.time}</StyledTime>
          </StyledMsgContent>
        );
      });
    }
  };

  return (
    <div>
      <StyledMessages className="messages">
        <StyledMessage className="message">
          {type === "favorite" && generateFavoriteMessage()}
          {type === "direct" && generateDirectMessage()}
          {type === "team" && generateTeamMessage()}
          {type === "" && <div>No message found!</div>}
        </StyledMessage>
      </StyledMessages>
    </div>
  );
}

const StyledMessages = styled.div`
  line-height: 42px;
  font-size: 20px;
  padding-top: 27px;
  display: flex;
`;

const StyledMessage = styled.div`
  display: block;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

const StyledMsgContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const StyledText = styled.text`
  font-size: 17px;
  width: 100%;
  text-align: justify;
  line-height: 30px;

  .profile {
    img {
      width: 30px;
    }
  }
`;

const StyledTextMessage = styled.p`
  font-size: 16px;
  margin-left: 41px;
`;

const StyledTextUser = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const StyledTime = styled.p`
  /* float: right; */
  margin-right: -4rem;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.5);
  position: relative;
  cursor: pointer;
  width: 15rem;
      
      /* &:hover .tooltiptext{
        visibility: visible;
      } */
`;
const StyledSpan = styled.span`
   /* visibility: visible;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;  */
  /* Position the tooltip */
  /* position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -60px; */
`
const StyledImgIcon = styled.img`
  width: 29px;
  text-align: center;
  float: left;
  margin-right: 12px;
  span {
    text-indent: 10rem;
  }
`;

export default ContentMessages;
