/*
---

name: Locale.nl-NL.Date

description: Date messages for Dutch.

license: MIT-style license

authors:
  - Lennart Pilon
  - Tim Wienk

requires:
  - /Locale

provides: [Locale.nl-NL.Date]

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

	lessThanMinuteAgo: 'minder dan een minuut geleden',
	minuteAgo: 'ongeveer een minuut geleden',
	minutesAgo: '{delta} minuten geleden',
	hourAgo: 'ongeveer een uur geleden',
	hoursAgo: 'ongeveer {delta} uur geleden',
	dayAgo: 'een dag geleden',
	daysAgo: '{delta} dagen geleden',
	weekAgo: 'een week geleden',
	weeksAgo: '{delta} weken geleden',
	monthAgo: 'een maand geleden',
	monthsAgo: '{delta} maanden geleden',
	yearAgo: 'een jaar geleden',
	yearsAgo: '{delta} jaar geleden',

	lessThanMinuteUntil: 'over minder dan een minuut',
	minuteUntil: 'over ongeveer een minuut',
	minutesUntil: 'over {delta} minuten',
	hourUntil: 'over ongeveer een uur',
	hoursUntil: 'over {delta} uur',
	dayUntil: 'over ongeveer een dag',
	daysUntil: 'over {delta} dagen',
	weekUntil: 'over een week',
	weeksUntil: 'over {delta} weken',
	monthUntil: 'over een maand',
	monthsUntil: 'over {delta} maanden',
	yearUntil: 'over een jaar',
	yearsUntil: 'over {delta} jaar'

});
