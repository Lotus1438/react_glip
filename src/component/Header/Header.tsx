import { useState } from "react";
import HeaderDetails from "./HeaderDetails";

function Header() {
  // const [showProfile, setShowProfile] = useState(false);
  // const [showNewAction, setShowNewAction] = useState(false);

  const [showHeaderDetails, SetShowHeaderDetails] = useState(false);

  const displayHeaderDisplay = () => {
    SetShowHeaderDetails(!showHeaderDetails)
  }

  // const toggle = () => {
  //   setShowProfile(!showProfile);
  // };
  // const toggleAction = () => {
  //   setShowNewAction(!showNewAction);
  // };

  return (
    <HeaderDetails toggle = {showHeaderDetails} onChangeDisplay = {displayHeaderDisplay}/>
  );
}

export default Header;
