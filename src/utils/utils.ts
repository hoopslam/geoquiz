export const shuffleArray = (array: any[]) => {
  let sorted = [...array];
  return sorted.sort(() => Math.random() - 0.5);
}