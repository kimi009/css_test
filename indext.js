const fn1 = function () {
	console.log(11);
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(1);
			resolve(1);
		}, 10);
	});
};

const fn2 = function () {
	console.log(22);
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(2);
			resolve(2);
		}, 4000);
	});
};

const fn3 = function () {
	console.log(33);
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(3);
			resolve(3);
		}, 30);
	});
};

const test = () => {
	let fns = [fn1, fn2, fn3];
	let i = 0;
	const next = async (fn) => {
		await fn();
		if (i < fns.length - 1) {
			i += 1;
			await next(fns[i]);
		}
	};
	next(fns[i]);
};

test();
