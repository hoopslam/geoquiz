import { useAppStore } from "../store/store";

const DifficultySelector = () => {
  const { selectDifficulty } = useAppStore();

  return (
    <div>
      <label htmlFor="difficulty">Choose difficulty: </label>
      <select name="difficulty" id="difficulty" onChange={selectDifficulty}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default DifficultySelector;
