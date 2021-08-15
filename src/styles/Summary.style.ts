import styled from "styled-components";

export const SummaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .question {
        border-radius: 10px;
        margin: 10px 0;
        padding: 10px;

        p {
            margin: 5px;
        }
    }

    .answers {
        display: flex;
        justify-content: space-between;

    }

    .correct {
        background-color: rgba(0,180,0,.7);
    }
    .incorrect {
        background-color: rgba(180, 0,0,.7);
    }
    .header{
        display: flex;
        justify-content: space-between;
        margin: 10px 0;

        @media screen and (max-width: 767px) {
            display: block;
            font-size: .8rem;
        }
    }
`