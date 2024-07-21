const container = document.querySelector('.container');

for (let i = 0; i < compiled.length; i++) {
  const qna = compiled[i];
  // console.log(qna);

  if (qna.question_type === "essay_question") {
    continue;
  }

  const mcqBox = document.createElement('div');
  const questionBox = document.createElement('div');
  const answerBox = document.createElement('div');
  const explanationBox = document.createElement('div');
  mcqBox.className = 'mcq-box';
  questionBox.className = 'question-box';
  answerBox.className = 'answer-box';
  explanationBox.className = 'exp-box';

  const qc = document.createElement('div');
  const opts = document.createElement('div');
  qc.className = 'qc';
  opts.className = 'opts';

  qc.innerHTML = `<i>Q${i + 1}: </i>` + qna.question_text;
  opts.innerHTML = qna.answers.map(q => q.text).join(',');
  questionBox.appendChild(qc);
  questionBox.appendChild(opts);

  const [correctAnswer] = qna.answers.filter((q) => q.id === (qna.correct_answer[0] || qna.correct_answer));
  // console.log(correctAnswer);
  answerBox.innerHTML = correctAnswer.html || correctAnswer.text;

  const desc = qna.neutral_comments_html || qna.neutral_comments || 'No comments';
  explanationBox.innerHTML = desc;

  mcqBox.appendChild(questionBox);
  mcqBox.appendChild(answerBox);
  mcqBox.appendChild(explanationBox);

  container.appendChild(mcqBox);
}