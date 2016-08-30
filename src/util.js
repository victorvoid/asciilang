export const util = {
	removeDot: line => line[line.length-1] === '.' 
		? line.slice(0, line.indexOf(line[line.length-1])) //final text
		: /* ;^;  */ line,

	shuffle: a => {
	    let j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	},
	clean: () => {
		process.stdout.write("\u001b[2J\u001b[0;0H");
	},
	timeout: (duration = 0) => {
    	return new Promise((resolve, reject) => {
       		setTimeout(resolve, duration);
  	  	})
	}
}