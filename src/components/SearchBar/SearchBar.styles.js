import Styled from "styled-components";

export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: var(--darkGrey);
  padding: 20px;
`;

export const Content = Styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background:#343335;
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);
  img {
    position: absolute;
    top: 14px;
    left: 15px;
    width: 30px;
  }
  input{
      font-size:28px;
      position:absolute:
      left:0;
      margin:8px 0;
      padding:0 0 0 60px;
      border:0;
      width:95%;
      background:transparent;
      height:40px;
      color:var(--white);
      :focus{
          outline:none;
      }
  }
`;
