import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/context";
import { MdBookmark, MdForum, MdMenuBook, MdOutlineMoreHoriz, MdOutlineSettings, MdVideoCameraBack } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GoMention } from "react-icons/go";

function LeftNav() {

  const context = useContext(AppContext)

  const { setState, state } = context

  const users = [
    { name: "Jean Pretzy Rim", id: 1 },
    { name: "Junne Toral", id: 2},
    { name: "Leslie Marie Reyes", id: 3 },
    { name: "Philip John Batulan", id: 4 },
    { name: "Juphet Vitualla", id: 5 },
  ];

  const teams = [
    { team: "TEAMBANGAN-weighs", team_id: 1, },
    { team: ".{dna:micro}.", team_id: 2, },
    { team: "WFH", team_id: 3, },
    { team: "All Employees", team_id: 4, },
    { team: "Team Vitamins", team_id: 5, },
  ];

  const handlePressTeams = (id: number) => {
    setState(
      {
        ...state, 
        activeMessage:{
          id: id, 
          type: 'team'
        }
      }
    )
  }
  const handlePressUser = (id: number) => {
    setState(
      {
        ...state, 
        activeMessage:{
          id: id, 
          type: 'direct'
        }
      }
    )
  }

  return (
    <div>
      <StyledRow className="row">
        <StyledIconCont>
          <StyledCol1 className="col1">
            <StyledIconsUpper className="icons-upper">
              <StyledButton>
                <MdForum  size={25}/>
                <p>Message</p>
              </StyledButton>
              <StyledButton>
                <MdVideoCameraBack  size={25}/>
                <p>Video</p>
              </StyledButton>
              <StyledButton>
                <MdMenuBook  size={25}/>
                <p>Contacts</p>
              </StyledButton>
              <StyledButton>
                <MdOutlineMoreHoriz size={25}/>
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
                <AiOutlineQuestionCircle size={25}/>
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
            <StyledShowUnreadIcon
              src="../imgs/off-button.png"
              alt="Off button Icon"
            />
          </StyledShowUnread>

          <StyledUsers className="users">
            <StyledDirectMessageButton>
              <StyledIconButton2 src="../imgs/user.png" alt="User Icon" />
              DIRECT MESSAGES
            </StyledDirectMessageButton>
            <StyledUser className="user">
              <ul>
                {users.map((user) => (
                  <StyledUserli>
                    <StyledUserA 
                      onClick={() => {
                        handlePressUser(user.id)
                      }} 
                      href="#">
                        {user.name}
                    </StyledUserA>
                  </StyledUserli>
                ))}
              </ul>
              <StyledIconButtonMenu src="../imgs/menu.png" alt="Menu Icon" />
            </StyledUser>
            <StyledDirectMessageButton>
              <StyledIconButton2 src="../imgs/teams.png" alt="Teams Icon" />
              TEAMS
            </StyledDirectMessageButton>
            <StyledUser className="user">
              <ul>
                {teams.map((team) => (
                  <StyledUserli>
                    <StyledUserA 
                      onClick={() => {
                        handlePressTeams(team.team_id)
                      }} 
                      href="#">{team.team}</StyledUserA>
                  </StyledUserli>
                ))}
              </ul>
              <StyledIconButtonMenu src="../imgs/menu.png" alt="Menu Icon" />
            </StyledUser>
          </StyledUsers>

          <StyledNewFolder>
            <StyledNewFolderIcon src="../imgs/add.png" alt="Add folder Icon" />
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
`;
const StyledCol2Button = styled.button`
  background-color: transparent;
  display: flex;
  margin-top: 7px;
  border-color: rgb(0, 0, 0, 0.2);
  width: 100%;
  padding: .3rem;
  align-items: center;
  margin-left: 13px;
  text-align: justify;
  font-size: 16px;
  cursor: pointer;
  svg{
    margin-right: .5rem;
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
  overflow-y: scroll;
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
  margin-top: 7px;
  width: 12rem;
  margin-left: -16px;
  text-align: justify;
  width: 12.1rem;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;
const StyledIconCont = styled.div`
  height: 91vh;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
`;

const StyledShowUnread = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
  align-items: center;
  margin-top: 8px;
`;
const StyledNewFolder = styled.div`
  align-items: center;
  display: flex;
  float: left;
  margin-left: 15px;
  position: absolute;
  bottom: 0px;
  left: 0;
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
