const path = require('path')
const quizzes = require(path.resolve(__dirname, '../.vitepress/assets/questions.json'));

function renderQuiz(quiz, options = {}) {
  return `
## ${options.number}
**${quiz.Type}** ${quiz.Question}

A. ${quiz.Options[0].TitleZh}

B. ${quiz.Options[1].TitleZh}

C. ${quiz.Options[2].TitleZh}

D. ${quiz.Options[3].TitleZh}

::: tip
${quiz.Options.reduce((result, el, index) => el.IsAnswer ? result.concat(['A', 'B', 'C', 'D'][index]) : result, []).join('、')}

${quiz.Analysis}

${quiz.Link?.length > 0 ?  quiz.Link?.map((link, index) => `* [参考资料${index + 1}](${link})`).join('\n') : ''}
:::
`
}


function renderQuizzes(quizzes) {
  return quizzes.map((quiz, index) => renderQuiz(quiz, { number: index + 1 })).join('\n')
}

function exportMarkdown(quizzes) {
  const fs = require('fs')
  const markdown = renderQuizzes(quizzes)
  console.log(markdown)
  fs.writeFileSync(path.resolve(__dirname, '../ACP/quiz.md'), markdown)
}
exportMarkdown(quizzes)