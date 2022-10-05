import React from "react";
import styled from "styled-components";
import Header from "./Header";
import LeftNav from "./LeftNav";
import Content from "./Content";
import RightNav from "./RightNav";

function Container() {
  return (
    <StyledMain>
      <Header />
      <StyledContainer className="container">
        <StyledSidebarLeft className="sidebar-left">
          <LeftNav />
        </StyledSidebarLeft>
        <StyledMainContent className="main-content">
          <Content />
        </StyledMainContent>
        <StyledSidebarRight className="sidebar-right">
          <RightNav />
        </StyledSidebarRight>
      </StyledContainer>
    </StyledMain>
  );
}
const StyledMain = styled.div`
  // height: 100vh;
`;
const StyledContainer = styled.div`
  width: 100vw;
  display: flex;
`;
const StyledSidebarLeft = styled.div`
  width: 15%;
  // height: 100vh;
`;
const StyledMainContent = styled.div`
  width: 90%;
  // height: 100vh;
`;
const StyledSidebarRight = styled.div`
  width: 15%;
  // height: 100vh;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;

export default Container;
