import { styled } from 'styled-components';

export const ContentCharacter = styled.div`
  padding: 20px;
  border: 5px solid #2a9d8f;
  border-radius: 20px;
  width: 300px;
  text-align: center;
  margin: 10px;
  &:hover{filter:brightness(40%)};//aca hacemios sombra cuando pasa el cursor
`;

export const ContainerButtonAf = styled.div`
width: 100%;
text-align: center;

`;

export const ContainerItems = styled.div`
    display: flex;
    align-items: center;

    p{
        cursor: pointer;
        padding: 0 13px;
        text-decoration: none;
        font-weight: 500;
    }

    @media (max-width: 768px){
        display: ${(props) => (props.showMenuBurger ? "inline-grid" : "none")}; 
        position: absolute;
        top: 100px;
        padding: 10px 0 20px 0;
        width: 100%;
        left: 0;

        a{
            padding: 10px 20px;
        }
    }
 `;

export const ContainerNavBar = styled.div`
width: 500px;
height: 100px;

display: flow;
align-items: center;
justify-content: space-between;
padding: 20px 20px 20px;

`;
