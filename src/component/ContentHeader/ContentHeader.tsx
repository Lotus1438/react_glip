import { useContext } from "react";
import styled from "styled-components";
import {AiFillLock, AiOutlineStar, AiOutlineUser, AiOutlineVideoCamera} from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import { AppContext } from "../../Context/context";


function ContentHeader() {
  const context = useContext(AppContext);
  const { state } = context;
  const { details } = state;
  console.log("%c 🛎️: ContentHeader -> details ", "font-size:16px;background-color:#7953c0;color:white;", details)

  return (
    <StyledContentHeader className="content-header">
      <StyledHeader className="header">
        <StyledIconsLeft className="icons-left">
          <StyledP>{details?.name ?? details?.team ?? details?.favorite}</StyledP>
          <div className="icon_cont">
            <AiOutlineStar size={16} color="gray" />
            <AiFillLock size={16} color="gray" />
            <AiOutlineUser size={16} color="gray" />
          </div>
        </StyledIconsLeft>
        <StyledIconsRight className="icons-right">
          <AiOutlineVideoCamera size={25} color="gray" />
          <HiDotsVertical size={25} color="gray" />
        </StyledIconsRight>
      </StyledHeader>
    </StyledContentHeader>
  );
}

const StyledContentHeader = styled.div`
  font-size: 19px;
  width: 100%;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
`;

const StyledP = styled.p`
  white-space: pre-line;
`;

const StyledIconsLeft = styled.div`
  display: flex;
  align-items: center;

  .icon_cont {
    margin-left: 1rem;
    display: flex;
    svg {
      margin-right: 5px;
    }
  }
`;
const StyledIconsRight = styled.div``;

export default ContentHeader;
