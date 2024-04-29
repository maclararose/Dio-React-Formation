import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #AAFFAA;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: 'Roboto';

  input {
    width: 100%;
    height: 75px;
    background-color: #AAAAFF;
    color: #FFFFFF;
    border: 0;
    padding: 10px;

    display: flex;
    flex-direction: row;
    float: right;
    clear: both;

    font-size: 24px;
    font-family: 'Roboto';
  }
`