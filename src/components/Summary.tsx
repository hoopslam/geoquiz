import { useAppStore } from "../store/store"

const Summary = () => {
    const { userAnswers } = useAppStore();
    return (
        <div>
            summary
            {console.log(userAnswers)}
        </div>
    )
}

export default Summary
