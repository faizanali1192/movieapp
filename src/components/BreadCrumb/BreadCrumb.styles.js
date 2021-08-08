import Styled from "styled-components";

export const Wrapper = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
    background: darkgrey;
    color: var(--white);
`;

export const Content = Styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;

    span {
        font-size: var(--fontMed);
        color: var(--white);
        pading-right: 10px;
        margin-right: 5px;
 

        @media screen and (max-width:768px){
            font-size: var(--fontSmall)
        }
    }
`;
