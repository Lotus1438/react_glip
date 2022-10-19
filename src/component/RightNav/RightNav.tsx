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
