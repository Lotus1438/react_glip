import styled from "styled-components";
import girl from "../../imgs/girl.png";
import hacker from "../../imgs/hacker.png";
import sticky_note from "../../imgs/sticky-note.png";
// import file from '../../imgs/folder.png';
// import image from '../../imgs/picture.png';
import { MdOutlineMoreHoriz, MdKeyboardTab, MdArrowRightAlt } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";

function RightNav() {
  const [showPinned, setShowPinned] = useState(false);
  const [showFile, setShowFile] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const showPinneds = () => {
    setShowPinned(!showPinned)
  }
  const showFiles = () => {
    setShowFile(!showFile)
  }
  const showImages = () => {
    setShowImage(!showImage)
  }
  return (
    <StyledContent className="Content">
      <StyledHeader>
        <p>Members(3)</p>
        <MdKeyboardTab size={20} color="#585151" />
      </StyledHeader>

      <StyledAvatarsProfile className="avatars_profile">
        <StyledImgButton>
          <StyledImgIcon src={girl} alt="Girl Avatar Icon" />
        </StyledImgButton>
        <StyledImgButton>
          <StyledImgIcon src={hacker} alt="Hacker Avatar Icon" />
        </StyledImgButton>
        <StyledImgButton>
          <AiOutlineUserAdd size={20} color="#585151" />
        </StyledImgButton>
      </StyledAvatarsProfile>

      <StyledMenu className="menu">
        <StyledUl>
          <StyledLi>
            <StyledA className="active" href="#pinned" onClick={showPinneds}>
              Pinned
            </StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA href="#files" onClick={showFiles}>Files</StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA href="#images" onClick={showImages}>Images</StyledA>
          </StyledLi>
        </StyledUl>
        <StyledButton>
          <MdOutlineMoreHoriz size={25} color="#585151" />
        </StyledButton>
      </StyledMenu>

      <hr />

      {!showPinned && showFile && showImage && <StyledPinContent>
        <StyledSticky src={sticky_note} alt="Sticky note Icon" />
        <h4>No pins Yet</h4>
        <StyledPinP>
          Pin informaton and it will appear here so that you can reference it
          later.
        </StyledPinP>
      </StyledPinContent>}

      {!showFile && showPinned && showImage && <StyledPinContent>
        <StyledSticky src={sticky_note} alt="Sticky note Icon" />
        <h4>No files Yet</h4>
        <StyledPinP>
          Pin informaton and it will appear here so that you can reference it
          later.
        </StyledPinP>
      </StyledPinContent>}

      {!showImage && showFile && showPinned && <StyledPinContent>
        <StyledSticky src={sticky_note} alt="Sticky note Icon" />
        <h4>No files Yet</h4>
        <StyledPinP>
          Pin informaton and it will appear here so that you can reference it
          later.
        </StyledPinP>
      </StyledPinContent>}

      <StyledFooter>
        <p>All files</p>
        <MdArrowRightAlt size={25} color="#014770" />
      </StyledFooter>
    </StyledContent>
  );
}

const StyledContent = styled.div``;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 9px;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;
const StyledFooter = styled.div`
  display: flex;
  justify-content: end;
    font-size: 14px;
    margin-top: 9px;
    margin-left: 12px;
    margin-right: 12px;
    color: #014770;
    bottom: -202px;
    align-items: center;
    position: relative;
    cursor: pointer;
      &:hover {
        color: #066fac;
      }
`;
const StyledImgButton = styled.button`
  width: 57px;
  height: 51px;
  border-radius: 50%;
  background-color: white;
  padding: -1px;
  float: left;
  margin-left: 2px;
  border: none;
  cursor: pointer;
`;
const StyledImgIcon = styled.img`
  width: 29px;
  text-align: center;
  float: right;
  margin-right: 12px;
`;
const StyledAvatarsProfile = styled.div`
  display: flex;
`;
const StyledMenu = styled.div`
  margin-left: 0rem;
  margin-right: 1rem;
  display: flex;
  justify-content: space-between;
`;
const StyledUl = styled.ul`
  display: flex;
  padding-left: 18px;
  overflow: hidden;
`;
const StyledLi = styled.li`
  float: left;
  list-style: none;
`;
const StyledA = styled.a`
  display: block;
  color: black;
  text-align: center;
  padding: 7px 2px;
  font-size: 16px;
  margin-top: 10px;
  text-decoration: none;
  &:focus {
    color: blue;
  }
  &:hover {
  border-bottom: 3px solid #066fac;
  }
`;
const StyledButton = styled.button`
  border: none;
  margin-right: 12px;
  background-color: transparent;
  cursor: pointer;
`;
const StyledSticky = styled.img`
  width: 160px;
  margin-top: 135px;
`;
const StyledPinContent = styled.div`
  text-align: center;
`;
const StyledPinP = styled.p`
  font-size: 16px;
  padding: 24px;
`;
export default RightNav;
