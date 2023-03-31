import styled from "styled-components";

interface IProps {
  bgImage: string
}

interface PositionProps {
  content?: string
}


export const Container = styled.div<IProps>`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover; 

  @media (max-width: 600px){
    height: 0 auto;
  }
`;  

export const ChildrenContent = styled.div<PositionProps>`
  box-sizing: border-box;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.content ? props.content : 'space-between'};
  align-items: center;
  gap: 1rem;

  @media (max-width: 600px){
      min-height: 100vh;
      height: 100%;
  }
`;
