// Number Guessing Game - Runs in browser console

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGuessingGame(maxAttempts = 5, min = 1, max = 50) {
  const secretNumber = getRandomNumber(min, max);
  let attempts = 0;
  let guessedCorrectly = false;

  console.clear();
  console.log(`Welcome to the Number Guessing Game! 🎲`);
  console.log(`I'm thinking of a number between ${min} and ${max}.`);
  console.log(`You have ${maxAttempts} attempts to guess it correctly. Good luck!\n`);

  while (attempts < maxAttempts && !guessedCorrectly) {
    let guess = prompt(`Attempt ${attempts + 1}: Enter your guess (between ${min} and ${max}):`);

    guess = Number(guess);

    if (isNaN(guess) || guess < min || guess > max) {
      console.log(`Invalid input. Please enter a number between ${min} and ${max}.`);
      continue;
    }

    attempts++;

    if (guess === secretNumber) {
      console.log(`🎉 Congratulations! You guessed the number ${secretNumber} correctly in ${attempts} attempt(s)!`);
      guessedCorrectly = true;
    } else if (guess < secretNumber) {
      console.log(`Too low! Try a higher number.`);
    } else {
      console.log(`Too high! Try a lower number.`);
    }
  }

  if (!guessedCorrectly) {
    console.log(`\nGame over! You used all ${maxAttempts} attempts.`);
    console.log(`The number I was thinking of was: ${secretNumber}`);
  }
  console.log(`\nThank you for playing!`);
}

// Automatically start the game when script loads
startGuessingGame();