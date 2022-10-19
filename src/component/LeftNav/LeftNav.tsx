import { useContext, useState } from "react";
import styled from "styled-components";
import {
  MdBookmark,
  MdForum,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineToggleOff,
  MdStar,
  MdGroupWork,
  MdCircle,
  MdOutlineVideoCameraBack,
  MdOutlineSupervisedUserCircle,
} from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FaPuzzlePiece } from "react-icons/fa";
import { AiOutlineQuestionCircle, AiFillFolderAdd } from "react-icons/ai";
import { GoMention } from "react-icons/go";
import { AppContext } from "../../Context/context";

function LeftNav() {
  const context = useContext(AppContext);

  const { state, setState } = context;

  const users = [
    { name: " Jean Pretzy Rim", id: 1 },
    { name: " Junne Toral", id: 2 },
    { name: " Leslie Marie Reyes", id: 3 },
    { name: " Philip John Batulan", id: 4 },
    { name: " Juphet Vitualla", id: 5 },
    { name: " Maruelle Gulfan", id: 6 },
    { name: " Ray Robin Gonzaga", id: 7 },
    { name: " Annabelle Caamod", id: 8 },
  ];

  const teams = [
    { team: " TEAMBANGAN-weighs", team_id: 1 },
    { team: " .{dna:micro}.", team_id: 2 },
    { team: " WFH", team_id: 3 },
    { team: " All Employees", team_id: 4 },
    { team: " Team Vitamins", team_id: 5 },
  ];

  const favorites = [
    { favorite: " Reina Mates", favorite_id: 1 }
  ];

  const handlePressTeams = (id: number) => {
    setState({
      ...state,
      activeMessage: {
        id: id,
        type: "team",
      },
      details: teams.find((team) => team.team_id === id),
    });
  };

  const handlePressUser = (id: number) => {
    setState({
      ...state,
      activeMessage: {
        id: id,
        type: "direct",
      },
      details: users.find((user) => user.id === id),
    });
  };

  const handlePressFavorites = (id: number) => {
    setState({
      ...state,
      activeMessage: {
        id: id,
        type: "favorite",
      },
      details: favorites.find((fav) => fav.favorite_id === id),
    });
  };


  const [showUser, setShowUser] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  const showFavorites = () => {
    setShowFavorite(!showFavorite);
  };
  const showUsers = () => {
    setShowUser(!showUser);
  };
  const showTeams = () => {
    setShowTeam(!showTeam);
  };

  return (
    <div>
      <StyledRow className="row">
        <StyledIconCont>
          <StyledCol1 className="col1">
            <StyledIconsUpper className="icons-upper">
              <StyledButton>
                <MdForum size={25} color="#066fac" />
                <p>Message</p>
              </StyledButton>
              <StyledButton>
                <MdOutlineVideoCameraBack size={25} color="#585151" />
                <p>Video</p>
              </StyledButton>
              <StyledButton>
                <MdOutlineSupervisedUserCircle size={25} color="#585151" />
                <p>Contacts</p>
              </StyledButton>
              <StyledButton>
                <MdOutlineMoreHoriz size={25} color="#585151" />
                <p>More</p>
              </StyledButton>
            </StyledIconsUpper>

            <StyledIconsLower>
              <StyledButton>
                <FaPuzzlePiece size={25} color="#585151" />
                <p>Apps</p>
              </StyledButton>
              <StyledButton>
                <MdOutlineSettings size={25} color="#585151" />
                <p>Settings</p>
              </StyledButton>
              <StyledButton>
                <AiOutlineQuestionCircle size={25} color="#585151" />
                <p>Resource Center</p>
              </StyledButton>
            </StyledIconsLower>
          </StyledCol1>
        </StyledIconCont>

        <StyledCol2 className="col2">
          <StyledCol2Button>
            <GoMention color="rgb(255, 136, 0)"/>
            Mentions
          </StyledCol2Button>
          <StyledCol2Button>
            <MdBookmark size={20} color="#066fac" />
            Bookmarks
          </StyledCol2Button>

          <StyledShowUnread>
            <StyledP>Show Unread</StyledP>
            <MdOutlineToggleOff size={25} color="#585151" />
          </StyledShowUnread>

          <StyledUsers className="users">
            <StyledShowUnread>
              <MdStar size={15} color="gray" />
              <StyledDirectMessageButton onClick={showFavorites}>
                FAVORITES
              </StyledDirectMessageButton>
            </StyledShowUnread>
            {!showFavorite && (
              <StyledUser>
                <ul>
                  {favorites.map((favorite) => (
                    <StyledUserli>
                      <StyledUserA
                        onClick={() => {
                          handlePressFavorites(favorite.favorite_id);
                        }}
                        href="#"
                      >
                        <MdCircle size={10} />
                        {favorite.favorite}
                      </StyledUserA>
                    </StyledUserli>
                  ))}
                </ul>
              </StyledUser>
            )}
            <StyledShowUnread>
              <AiOutlineUser size={15} />
              <StyledDirectMessageButton onClick={showUsers}>
                DIRECT MESSAGES
              </StyledDirectMessageButton>
            </StyledShowUnread>
            {!showUser && (
              <StyledUser>
                <ul>
                  {users.map((user) => (
                    <StyledUserli>
                      <StyledUserA
                        onClick={() => {
                          handlePressUser(user.id);
                        }}
                        href="#"
                      >
                        <MdCircle size={10} />
                        {user.name}
                      </StyledUserA>
                    </StyledUserli>
                  ))}
                </ul>
              </StyledUser>
            )}
            <StyledShowUnread>
              <MdGroupWork size={15} color="gray" />
              <StyledDirectMessageButton onClick={showTeams}>
                TEAMS
              </StyledDirectMessageButton>
            </StyledShowUnread>
            {!showTeam && (
              <StyledUser className="user">
                <ul>
                  {teams.map((team) => (
                    <StyledUserli>
                      <StyledUserA
                        onClick={() => {
                          handlePressTeams(team.team_id);
                        }}
                        // href="#"
                      >
                        <MdCircle size={10} />
                        {team.team}
                      </StyledUserA>
                    </StyledUserli>
                  ))}
                </ul>
              </StyledUser>
            )}
          </StyledUsers>

          <StyledNewFolder>
            <AiFillFolderAdd size={25} color="#237bad" />
            <StyledP>New Folder</StyledP>
          </StyledNewFolder>
        </StyledCol2>
      </StyledRow>
    </div>
  );
}

const StyledRow = styled.div`
  margin-left: 0;
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
  width: 100%;
  max-width: 400px;
  cursor: pointer;

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
  /* overflow-y: scroll; */
  scrollbar-color: gray;
    width: 100%;
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
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #bbddfa;
  }
`;
const StyledIconsUpper = styled.div`
  top: 0%;
`;

const StyledIconsLower = styled.div`
  bottom: 0%;
`;
const StyledUserli = styled.li`
  font-size: 16px;
  padding: 6px;
  list-style: none;
  &:focus{
      background-color: #066fac;
    }
  &:hover {
    background-color: #bbddfa;
  }
`;

const StyledUserA = styled.a`
  color: rgb(0, 0, 0, 0.5);
  text-decoration: none;
  align-items: end;
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
  button{
    margin-top: 0!important;
    margin-left: 3px;
  }
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
`;

const StyledP = styled.p`
  justify-content: center;
  font-size: 15px;
`;

export default LeftNav;
