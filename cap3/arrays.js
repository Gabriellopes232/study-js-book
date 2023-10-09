const averageTempJan = 31.9;
const averageTempFeb = 35.3;
const averageTempMar = 42.4;
const averageTempApr = 52;
const averageTempMay = 60.8;

const averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 52;
averageTemp[4] = 60.8;

let daysOfWeek = new Array();
daysOfWeek = new Array(7);
daysOfWeek = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

let daysOfWeek2 = [];

let daysOfWeek3 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(daysOfWeek3.length);

for(let i = 0; i < daysOfWeek3.length; i++) {
  console.log(daysOfWeek3[i]);
}

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for(let i = 1; i < 20; i++) {
  fibonnacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for(let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

