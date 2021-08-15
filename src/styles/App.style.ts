import styled from "styled-components";

export const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 767px;
  padding: 30px;
  background-color: rgba(5, 5, 5, 0.7);
  min-height: 100vh;

  @media screen and (max-width: 767px) {
      min-width: 0;
  }

  .start-options {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin: 10px;
      padding: 10px;

      > * {
          margin: 20px;
      }

      select {
          outline: none;
      }
  }

  .start-button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: rgba(80,80,256);
    color: white;
  }

  .score {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      
      p {
        font-size: 1.5rem;  
      }
      
  }
`;
