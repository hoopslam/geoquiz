import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        background-image: url("https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2020&q=80");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    }

    p, label, select, button {
        font-size: 1.2rem;

        @media screen and (max-width: 767px){
            font-size: 1rem;
        }
    }

    h1 {
        font-size: 3rem;
        @media screen and (max-width: 767px){
            font-size: 2rem;
        }
    }
`;
