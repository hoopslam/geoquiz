import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 560px;
  padding: 10px;
  background-color: rgba(5, 5, 5, 0.8);
  border-radius: 12px;
  height: 450px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  > * {
    margin: 10px;
  }

  button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    width: 100%;
    background-color: rgba(80, 80, 256);
    color: white;

    :hover {
      cursor: pointer;
    }
  }
`;
