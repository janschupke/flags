// Returns true if userAnswer matches any full case-insensitive word in correctAnswer
export function isAnswerCorrect(userAnswer: string, correctAnswer: string): boolean {
  const user = userAnswer.trim().toLowerCase();
  const correctWords = correctAnswer.toLowerCase().split(/\s+/);
  return correctWords.some(word => word.length > 0 && user === word);
} 
