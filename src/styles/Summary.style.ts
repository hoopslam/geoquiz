import styled from "styled-components";

export const SummaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .question {
        border-radius: 10px;
        margin: 10px 0;
        padding: 10px;
    }

    .correct {
        background-color: rgba(0,180,0,.7);
    }
    .incorrect {
        background-color: rgba(180, 0,0,.7);
    }
`