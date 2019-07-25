// JavaScript generators are just ways to make iterators. 
// They use the yield keyword to yield execution control back to the 
// calling function and can then resume execution once the next() function 
// is called again. Once the generator runs out of values to return, it returns 
// a value of undefined, and a done value of true, letting you know that 
// there are no more values. This makes more sense if you can see a simple example.

// define generator function with *
function* foo() {
  yield 'a';
  yield 'b';
  yield 'c';
}

function basicGeneratorUseCase()
{
  const foogee = foo();
  console.log('test1 getting the first value');
  console.log(foogee.next());
  // { value: 'a', done: false }

  console.log('test1: getting the next value');
  console.log(foogee.next());
  // { value: 'b', done: false }

  console.log('test1: getting the next value');
  console.log(foogee.next());
  // { value: 'c', done: false }

  console.log('test1: getting the next value');
  console.log(foogee.next());
  // { value: undefined, done: true }
}


// Practical use of a generators
// function* dateGenerator(startDate = new Date()) {
function* dateGenerator() {
  let currentDate = startDate = new Date()
  while (true) {
    yield currentDate;
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

function practicalUseCase() {
  console.log('Next 5 Days');
  const dates = dateGenerator();
  for(let i = 0; i < 5; i++){
    console.log(dates.next().value.toDateString());
  }
}

// https://swizec.com/blog/finally-a-practical-use-case-for-javascript-generators/swizec/9036
const UserRegex = new RegExp(/@(\w+)/, "g");
function* getUsernames(string) {
  let match = null;
  console.log("->getUsernames")
  do {
      match = UserRegex.exec(string);
      // console.log(match)
      if (match) {
          yield match;
      }
  } while (match);
  console.log("<-getUsernames")
}

function practicalUseCase2() {
  const string = "this is a test with @abcx and @monkey3, maybe @skyrocket3"
  console.log("Extract data from:", "'" + string + "'")
  for (const username of getUsernames(string)) {
    console.log(username[0],username[1])
  }
}

function main() {
  basicGeneratorUseCase()
  console.log()
  practicalUseCase();
  console.log()
  practicalUseCase2();
}





main()