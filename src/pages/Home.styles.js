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