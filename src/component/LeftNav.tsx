import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/context";
import {
  MdBookmark,
  MdForum,
  MdMenuBook,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdVideoCameraBack,
  MdCreateNewFolder,
  MdToggleOff,
  MdOutlineToggleOff,
} from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa";
import { AiOutlineQuestionCircle, AiFillFolderAdd } from "react-icons/ai";
import { GoMention } from "react-icons/go";

function LeftNav() {
  const context = useContext(AppContext);

  const { setState, state } = context;

  const users = [
    { name: "Jean Pretzy Rim", id: 1 },
    { name: "Junne Toral", id: 2 },
    { name: "Leslie Marie Reyes", id: 3 },
    { name: "Philip John Batulan", id: 4 },
    { name: "Juphet Vitualla", id: 5 },
  ];

  const teams = [
    { team: "TEAMBANGAN-weighs", team_id: 1 },
    { team: ".{dna:micro}.", team_id: 2 },
    { team: "WFH", team_id: 3 },
    { team: "All Employees", team_id: 4 },
    { team: "Team Vitamins", team_id: 5 },
  ];

  const handlePressTeams = (id: number) => {
    setState({
      ...state,
      activeMessage: {
        id: id,
        type: "team",
      },
      details: teams.find(t => t.team_id === id)
    });
  };
  const handlePressUser = (id: number) => {
    setState({
      ...state,
      activeMessage: {
        id: id,
        type: "direct",
      },
      details: users.find(t => t.id === id)
    });
  };

  return (
    <div>
      <StyledRow className="row">
        <StyledIconCont>
          <StyledCol1 className="col1">
            <StyledIconsUpper className="icons-upper">
              <StyledButton>
                <MdForum size={25} />
                <p>Message</p>
              </StyledButton>
              <StyledButton>
                <MdVideoCameraBack size={25} />
                <p>Video</p>
              </StyledButton>
              <StyledButton>
                <MdMenuBook size={25} />
                <p>Contacts</p>
              </StyledButton>
              <StyledButton>
                <MdOutlineMoreHoriz size={25} />
                <p>More</p>
              </StyledButton>
            </StyledIconsUpper>

            <StyledIconsLower>
              <StyledButton>
                <FaPuzzlePiece size={25} />
                <p>Apps</p>
              </StyledButton>
              <StyledButton>
                <MdOutlineSettings size={25} />
                <p>Settings</p>
              </StyledButton>
              <StyledButton>
                <AiOutlineQuestionCircle size={25} />
                <p>Resource Center</p>
              </StyledButton>
            </StyledIconsLower>
          </StyledCol1>
        </StyledIconCont>

        <StyledCol2 className="col2">
          <StyledCol2Button>
            <GoMention />
            Mentions
          </StyledCol2Button>
          <StyledCol2Button>
            <MdBookmark size={20} />
            Bookmarks
          </StyledCol2Button>

          <StyledShowUnread>
            <StyledP>Show Unread</StyledP>
            {/* <StyledShowUnreadIcon
              src={off_button}
              alt="Off button Icon"
            /> */}
                <MdOutlineToggleOff size={25} />
          </StyledShowUnread>

          <StyledUsers className="users">
            <StyledDirectMessageButton>
              {/* <StyledIconButton2 src={user} alt="User Icon" /> */}
              DIRECT MESSAGES
            </StyledDirectMessageButton>
            <StyledUser className="user">
              <ul>
                {users.map((user) => (
                  <StyledUserli>
                    <StyledUserA
                      onClick={() => {
                        handlePressUser(user.id);
                      }}
                      href="#"
                    >
                      {user.name}
                    </StyledUserA>
                  </StyledUserli>
                ))}
              </ul>
              {/* <StyledIconButtonMenu src={menu} alt="Menu Icon" /> */}
            </StyledUser>
            <StyledDirectMessageButton>
              {/* <StyledIconButton2 src={team} alt="Teams Icon" /> */}
              TEAMS
            </StyledDirectMessageButton>
            <StyledUser className="user">
              <ul>
                {teams.map((team) => (
                  <StyledUserli>
                    <StyledUserA
                      onClick={() => {
                        handlePressTeams(team.team_id);
                      }}
                      href="#"
                    >
                      {team.team}
                    </StyledUserA>
                  </StyledUserli>
                ))}
              </ul>
              {/* <StyledIconButtonMenu src={menu} alt="Menu Icon" /> */}
            </StyledUser>
          </StyledUsers>

          <StyledNewFolder>
            {/* <MdCreateNewFolder size={25} /> */}
              <AiFillFolderAdd size={25}/>
            <StyledP>New Folder</StyledP>
          </StyledNewFolder>
        </StyledCol2>
      </StyledRow>
    </div>
  );
}

const StyledRow = styled.div`
  margin-left: 0;
  /* width: 17%; */
  display: flex;
  position: relative;
`;
const StyledCol1 = styled.div`
  width: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 91vh;
`;
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
const StyledUser = styled.div`
  display: block;
  align-items: center;
  text-align: initial;
  font-size: 18px;
`;
const StyledButton = styled.button`
  border: none;
  background-color: white;
  padding: 10px;
  &:hover {
    background-color: aliceblue;
  }
`;
const StyledIconsUpper = styled.div`
  top: 0%;
`;
const StyledIconsLower = styled.div`
  bottom: 0%;
`;
const StyledIconButton = styled.img`
  width: 20px;
  height: 26px;
  background-color: white;
  margin-left: -1px;
  cursor: pointer;
`;
const StyledIconButtonMenu = styled.img`
  width: 14px;
  height: 16px;
  background-color: white;
  margin-left: 200px;
`;
const StyledIconButton2 = styled.img`
  width: 17px;
  height: 18px;
  background-color: white;
  margin-left: 3px;
  margin-top: 12px;
  margin-right: 8px;
`;
const StyledUserli = styled.li`
  font-size: 16px;
  padding: 6px;
  list-style: none;
  &:hover {
    background-color: aliceblue;
  }
`;
const StyledUserA = styled.a`
  color: rgb(0, 0, 0, 0.5);
  text-decoration: none;
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
const StyledIconCont = styled.div`
  height: 91vh;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
`;

const StyledShowUnread = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;
const StyledNewFolder = styled.div`
  align-items: center;
  display: flex;
  float: left;
  position: absolute;
  bottom: 0px;
  left: 0;
  padding: 5px;
  border: 1px solid #e7e7e7;
  border-left: none;
  border-right: none;
  width: 100%;
`;
const StyledP = styled.p`
  justify-content: center;
  font-size: 15px;
`;
const StyledShowUnreadIcon = styled.img`
  width: 39px;
`;

const StyledNewFolderIcon = styled.img`
  width: 28px;
`;
export default LeftNav;
