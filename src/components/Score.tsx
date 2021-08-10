import { useAppStore } from "../store/store"

const Score = () => {
    const { score } = useAppStore();
    return (
        <p>Score: {score}</p>
    )
}

export default Score
