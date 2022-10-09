import styled from "styled-components";
import { MdVideoCameraBack, MdPlayCircleFilled } from "react-icons/md";
import { useState } from "react";

function LeftVideoNav() {
  const [showMeeting, setShowMeeting] = useState(false);
  const [showRecording, setShowRecording] = useState(false);

  const showMeetings = () => {
    setShowMeeting(!showMeeting);
  };
  const showRecordings = () => {
    setShowRecording(!showRecording);
  };

  return (
    <StyledCol2 className="col2">
      <StyledCol2Button>VIDEO MEETING</StyledCol2Button>

      <StyledUsers className="users">
        <StyledShowUnread>
          <MdVideoCameraBack size={20} />
          <StyledDirectMessageButton onClick={showMeetings}>
            FAVORITES
          </StyledDirectMessageButton>
        </StyledShowUnread>
        {!showMeeting && (
          <StyledUser>
            <ul>Meetings</ul>
          </StyledUser>
        )}
        <StyledShowUnread>
          <MdPlayCircleFilled size={15} />
          <StyledDirectMessageButton onClick={showRecordings}>
            DIRECT MESSAGES
          </StyledDirectMessageButton>
        </StyledShowUnread>
        {!showRecording && (
          <StyledUser>
            <ul>Cloud recordings</ul>
          </StyledUser>
        )}
      </StyledUsers>
    </StyledCol2>
  );
}
const StyledCol2 = styled.div`
  width: 100%;
  background-color: white;
  position: relative;
  padding: 0.5rem;
  border-right: 1px solid #eae8e8;
`;
const StyledCol2Button = styled.button`
  background-color: transparent;
  display: flex;
  border-color: rgb(0, 0, 0, 0.2);
  width: 100%;
  padding: 0.3rem;
  align-items: center;
  text-align: justify;
  font-size: 16px;
  margin-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;
  svg {
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: aliceblue;
  }
`;
const StyledUsers = styled.div`
  display: block;
  position: absolute;
  font-size: 20px;
  padding: 6px;
`;
const StyledShowUnread = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;
const StyledDirectMessageButton = styled.button`
  background-color: transparent;
  margin-top: 10px;
  width: 12rem;
  text-align: justify;
  width: 12.1rem;
  font-size: 14px;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;
const StyledUser = styled.div`
  display: block;
  align-items: center;
  text-align: initial;
  font-size: 18px;
`;

export default LeftVideoNav;
