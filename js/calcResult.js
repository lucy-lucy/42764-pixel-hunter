const ANSWERS_COUNT = 10;

function calcResults(answers, livesLeft) {
  if (answers.length < ANSWERS_COUNT) {
    return -1;
  }

  let score = 0;

  answers.forEach((answer) => {
    if (answer.success) {
      if (answer.time <= 10) {
        score += 150;
      } else if (answer.time > 20) {
        score += 50;
      } else {
        score += 100;
      }
    }
  });

  if (livesLeft > 0) {
    score += livesLeft * 50;
  }

  return score;
}

export default calcResults;
