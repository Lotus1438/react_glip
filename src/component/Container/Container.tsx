import styled from "styled-components";
import { Content, Header, LeftNav, RightNav } from "..";

function Container() {
  return (
    <div>
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
    </div>
  );
}
const StyledContainer = styled.div`
  width: 100vw;
  display: flex;
`;

const StyledSidebarLeft = styled.div`
  width: 15%;
`;

const StyledMainContent = styled.div`
  width: 67%;
`;

const StyledSidebarRight = styled.div`
  width: 18%;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;

export default Container;
