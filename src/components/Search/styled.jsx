import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  img {
      width: 150px;
  }
  input {
    width: 500px;
    border-radius: 15px;
    padding: 10px;
  }
  button {
    background-color: yellow;
    border-radius: 15px;
    padding: 10px;
    margin: 10px 0;
    width: 200px;
    color: #fff;
    border: none;
  }
`;