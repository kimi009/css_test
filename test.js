const addZero = (s) => {
	return s < 10 ? '0' + s : s;
};

const getDate = () => {
	let cur = new Date();
	let year = cur.getFullYear();
	let month = cur.getMonth();
	let date = cur.getDate();
	let day = cur.getDay();
	let hour = cur.getHours();
	let minute = cur.getMinutes();
	let second = cur.getSeconds();
	return { year, month, date, day, hour, minute, second };
};

const getDateFormat = (format = 'yyyy-mm-dd hh:mm:ss') => {
	let { year, month, date, hour, minute, second } = getDate();
	let [pre, aft] = format.split(' ');
	let curDate = '';
	if (pre) {
		const [y, m, d] = pre.split('-');
		if (y) {
			curDate = `${year}`;
		}
		if (m) {
			curDate = `${curDate}-${month + 1}`;
		}
		if (d) {
			curDate = `${curDate}-${date}`;
		}
	}
	if (aft) {
		const [h, m, s] = aft.split(':');

		if (h) {
			curDate = `${curDate} ${hour}`;
		}
		if (m) {
			curDate = `${curDate}:${minute}`;
		}
		if (s) {
			curDate = `${curDate}:${second}`;
		}
	}
	return curDate;
};

const getCurDate = () => {
	let ret = null;
	let { year, month, date } = getDate();
	ret = `${year}-${addZero(month + 1)}-${addZero(date)}`;

	return ret;
};

/**
 * 根据当前的月份前推或是后推几个月
 * direction: 1： 前推 ，-1：后推
 * range: 几个月
 */
const getYearMonth = (direction = -1, range = 3) => {
	let { year, month } = getDate();
	if (range == 1) {
		return `${year}-${addZero(month + 1)}`;
	}
	if (direction == -1) {
		if (month - range >= 0) {
			return `${year}-${addZero(month - range + 2)}`;
		} else {
			let diff = range - month;
			if (diff == 1) {
				return `${year}-${addZero(diff)}`;
			} else {
				return `${year - 1}-${addZero(12 - (range - month - 2))}`;
			}
		}
	} else {
		if (month + range <= 12) {
			return `${year}-${addZero(month + range)}`;
		} else {
			let diff = month + range - 12;
			return `${year + 1}-${addZero(diff)}`;
		}
	}
};

// console.log(getDateFormat('yy-mm'));
// console.log(getDateFormat('yy-mm-dd'));
// console.log(getDateFormat('yy-mm-dd hh:mm'));
// console.log(getDateFormat('yy-mm-dd hh:mm:ss'));

// console.log(getYearMonth());
// console.log(getYearMonth(-1, 4));
// console.log(getYearMonth(-1, 8));
// console.log(getYearMonth(1, 3));
console.log(getYearMonth(1, 1));
console.log(getYearMonth(1, 2));
console.log(getYearMonth(1, 3));
console.log(getYearMonth(1, 4));
console.log(getYearMonth(1, 5));
console.log(getYearMonth(1, 6));
console.log(getYearMonth(1, 7));
console.log(getYearMonth(1, 8));
console.log(getYearMonth(1, 9));
console.log(getYearMonth(1, 10));
console.log(getYearMonth(1, 11));
console.log(getYearMonth(1, 12));
console.log('----------------------')
console.log(getYearMonth(-1, 1));
console.log(getYearMonth(-1, 2));
console.log(getYearMonth(-1, 3));
console.log(getYearMonth(-1, 4));
console.log(getYearMonth(-1, 5));
console.log(getYearMonth(-1, 6));
console.log(getYearMonth(-1, 7));
console.log(getYearMonth(-1, 8));
console.log(getYearMonth(-1, 9));
console.log(getYearMonth(-1, 10));
console.log(getYearMonth(-1, 11));
console.log(getYearMonth(-1, 12));
