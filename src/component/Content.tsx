import { useRef, useEffect } from "react";
import styled from "styled-components";
import ContentHeader from "./ContentHeader";
import ContentMessages from "./ContentMessages";
import ContentFooter from "./ContentFooter";

function Content() {
  const ref = useRef(null);

  useEffect(() => {
    console.log("refss", ref);
    
  }, [ref])
  

  return (
    <StyledContent className="content">
      <StyledHeader>
        <ContentHeader />
      </StyledHeader>
      <StyledCont className="cont">
        <ContentMessages />
      </StyledCont>
      <StyledFooter ref={ref}>
        <ContentFooter refs={ref}  />
      </StyledFooter>
    </StyledContent>
  );
}

const StyledHeader = styled.header`
  display: flex;
  font-size: 27px;
  padding: 1rem;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
`;

const StyledContent = styled.div`
  display: contents;
  margin-left: 0;
  padding-left: 4rem;
`;

const StyledCont = styled.div`
  height: 75%;
  overflow-y: auto;
`;

const StyledFooter = styled.footer`
  border-top: 1px solid rgb(0, 0, 0, 0.2);
  bottom: 0px;
`;

export default Content;
