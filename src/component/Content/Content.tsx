import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { ContentFooter, ContentHeader, ContentMessages } from "..";


function Content() {
  const ref = useRef<any>(null);
  const [textWidth, setTextWidth] = useState(0)

  const resizeFunc = () => {
    setTextWidth(ref?.current?.clientWidth)
  }

  useEffect(() => {
    resizeFunc()
    window.addEventListener('resize', resizeFunc)
    return () => {
      window.removeEventListener('resize', resizeFunc)
    }
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
        <ContentFooter messageWidth={textWidth}  />
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
  scrollbar-color: gray transparent;
`;

const StyledFooter = styled.footer`
  border-top: 1px solid rgb(0, 0, 0, 0.2);
  bottom: 0px;
`;

export default Content;
