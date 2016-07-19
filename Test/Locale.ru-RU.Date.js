/*
---

name: Locale.ru-RU.Date

description: Date messages for Dutch.

license: MIT-style license

authors:
  - Lennart Pilon
  - Tim Wienk

requires:
  - /Locale

provides: [Locale.ru-RU.Date]

...
*/

Locale.define('ru-RU', 'Date', {

	months: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
	months_abbr: ['янв', 'фев', 'мрт', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'нов', 'дек'],
	days: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
	days_abbr: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],

	// Culture's date order: DD-MM-YYYY
	dateOrder: ['date', 'month', 'year'],
	shortDate: '%d-%m-%Y',
	shortTime: '%H:%M',
	AM: 'AM',
	PM: 'PM',

	// Date.Extras
	ordinal: 'e',

	lessThanMinuteAgo: 'менее чем минуту назад',
	minuteAgo: 'около минуты назад',
	minutesAgo: '{delta} минут назад',
	hourAgo: 'около часа назад',
	hoursAgo: 'примерно {delta} часов назад',
	dayAgo: 'один день назад',
	daysAgo: '{delta} дней назад',
	weekAgo: 'неделю назад',
	weeksAgo: '{delta} weken geleden',
	monthAgo: 'недель назад',
	monthsAgo: '{delta} месяцев назад',
	yearAgo: 'год назад',
	yearsAgo: '{delta} лет тому назад',

	lessThanMinuteUntil: 'менее чем за минуту',
	minuteUntil: 'в течение примерно одной минуты',
	minutesUntil: 'на {delta} минут',
	hourUntil: 'в течение примерно часа',
	hoursUntil: 'на {delta} часов',
	dayUntil: 'в течение одного дня',
	daysUntil: 'на {delta} дней',
	weekUntil: 'около недели',
	weeksUntil: 'на {delta} недель',
	monthUntil: 'около месяца',
	monthsUntil: 'на {delta} месяцев',
	yearUntil: 'в течение года',
	yearsUntil: 'на {delta} года'
});
