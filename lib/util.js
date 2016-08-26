let utils = {
	removeDot: (line) => line[line.length-1] === '.' 
		? line.slice(0, line.indexOf(line[line.length-1])) //final text
		: /* ;^;  */ line,

	shuffle: (a) => {
	    var j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
}

module.exports = utils;