//beep tone as a function so that I can use it as a call back in settimeout
const beep = () => process.stdout.write("\x07");
//array of the command line args passed
const secondsToBeepArr = process.argv.slice(2);
// user inputs are all strings, convert to number
const validated = secondsToBeepArr.filter((input) => {
  const inputAsNumber = Number(input)
  return !Number.isNaN(inputAsNumber) && inputAsNumber >= 0;
});

//achievable without class, but practicing using classes
class Beeps {

  constructor(tone, delay) {
    this.tone = tone
    this.delay = delay
  }

  ring() {
    setTimeout(this.tone, this.delay); // to ring at a delay 
  }
};

validated.forEach((second) => {
  new Beeps(beep, (second * 1000)).ring();
});