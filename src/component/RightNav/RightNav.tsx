import styled from "styled-components";
import girl from "../../imgs/girl.png";
import hacker from "../../imgs/hacker.png";
import sticky_note from "../../imgs/sticky-note.png";
// import file from '../../imgs/folder.png';
// import image from '../../imgs/picture.png';
import { MdOutlineMoreHoriz, MdKeyboardTab, MdArrowRightAlt } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import RightNavDetails from "./RightNavDetails";

function RightNav() {

  const [showRightNavDetails, setRightNavDetails] = useState('pinned');
  
  const displayRightNavDetails = (type: string) => {
    setRightNavDetails(type)
  }

  return (
    <RightNavDetails details = {showRightNavDetails} onChangeDisplay = { displayRightNavDetails } />
  );
}

export default RightNav;
