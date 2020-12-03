const quizData = [
	{
		question: 'When did Zambia got his independent? ',
		a: 1223,
		b: 1990,
		c: 1964,
		d: 1977,
		correct: 'c',
	},
	{
		question: 'Who was the first President of Zambia?',
		a: 'Chiluba',
		b: 'Kaunda',
		c: 'Mwanawasa',
		d: 'Sata',
		correct: 'b',
	},
	{
		question: 'What is the Capital city of Zambia? ',
		a: 'Lusaka',
		b: 'Kabwe',
		c: 'Kitwe',
		d: 'Ndola',
		correct: 'a',
	},
	{
		question: 'How many Provices do we have in Zambia',
		a: 8,
		b: 9,
		c: 12,
		d: 10,
		correct: 'd',
	},
	{
		question: 'Zambia is a ____ country?',
		a: 'landlocked',
		b: 'Christain',
		c: 'Beautiful',
		d: 'developed',
		correct: 'a',
	},
];

let currentQuestion = 0;
let score = 0;
let answer = undefined;

const question = document.getElementById('question');
const option_a = document.getElementById('option_a');
const option_b = document.getElementById('option_b');
const option_c = document.getElementById('option_c');
const option_d = document.getElementById('option_d');
const answers = document.querySelectorAll('.answer');
const submit = document.getElementById('submit');
const quiz = document.getElementById('quiz');

console.log(quiz);
displayQuestion();

function displayQuestion() {
	unSelected();
	const currentQuiz = quizData[currentQuestion];

	question.textContent = currentQuiz.question;
	option_a.textContent = currentQuiz.a;
	option_b.textContent = currentQuiz.b;
	option_c.textContent = currentQuiz.c;
	option_d.textContent = currentQuiz.d;
}
function getSelected() {
	let answer = undefined;

	answers.forEach(item => {
		if (item.checked) {
			answer = item.id;
		}
	});

	return answer;
}

function unSelected() {
	answers.forEach(item => {
		item.checked = false;
	});
}

submit.addEventListener('click', () => {
	const answer = getSelected();

	console.log(answer);
	if (answer) {
		if (answer === quizData[currentQuestion].correct) {
			score++;
		}
		currentQuestion++;
		if (currentQuestion < quizData.length) {
			displayQuestion();
		} else {
			const totalQuestions = quizData.length;
			const percentage = (score / totalQuestions) * 100;
			let comment;

			if (percentage > 75) {
				comment = 'excellent';
			} else if (percentage > 39 && percentage < 50) {
				comment = 'good attepmt';
			} else if (percentage > 51 && percentage < 60) {
				comment = 'very good';
			} else if (percentage > 61 && percentage < 75) {
				comment = 'keep it up';
			} else {
				comment = 'Below avarage, but you can do better';
			}

			quiz.innerHTML = `
			<h2>
				You have: Answered: ${score} correct 
				Out of ${totalQuestions} total question.
				your score is: ${percentage}%
				comment: ${comment}
			</h2>

			<button onclick = "location.reload()">Play again</button>
			`;
		}
	}
});
