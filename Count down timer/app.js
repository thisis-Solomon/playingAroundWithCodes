const week = document.getElementById('week');
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const myDate = '25 dec 2020';

const countTimer = function () {
	const myDayDate = new Date(myDate);
	const currentDate = new Date();

	const initialTime = myDayDate - currentDate;
	// 1week = 7days
	// 1day = 24hrs
	// 1hr = 60mins
	// 1min = 60s
	// 1s = 1000ms

	// 1week into ms
	const oneWeek = 7 * 24 * 60 * 60 * 1000;

	// 1day into ms
	const oneDay = 24 * 60 * 60 * 1000;

	// 1 hour into ms
	const oneHour = 60 * 60 * 1000;

	// 1 min into ms
	const oneMinute = 60 * 1000;

	const weeks = Math.floor(initialTime / oneWeek);
	const days = Math.floor((initialTime % oneWeek) / oneDay);
	const hours = Math.floor((initialTime % oneDay) / oneHour);
	const minutes = Math.floor((initialTime % oneHour) / oneMinute);
	const sec = Math.floor((initialTime % oneMinute) / 1000);

	console.log(weeks, days, hours, minutes, sec);

	week.textContent = weeks;
	day.textContent = days;
	hour.textContent = formatTime(hours);
	minute.textContent = formatTime(minutes);
	second.textContent = formatTime(sec);
};

const formatTime = function (time) {
	return time < 10 ? `0${time}` : time;
};
countTimer();

setInterval(countTimer, 1000);