function generateResponse() {
  let userName = document.getElementById("username").value;
  let userQuestion = document.getElementById("question").value;
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";

  switch (randomNumber) {
    case 0:
      eightBall = "It is certain";
      break;
    case 1:
      eightBall = "It is decidedly so";
      break;
    case 2:
      eightBall = "Reply hazy try again";
      break;
    case 3:
      eightBall = "Cannot predict now";
      break;
    case 4:
      eightBall = "Do not count on it";
      break;
    case 5:
      eightBall = "My sources say no";
      break;
    case 6:
      eightBall = "Outlook not so good";
      break;
    case 7:
      eightBall = "Signs point to yes";
      break;
    case 8:
      eightBall = "You may rely on it";
      break;
    case 9:
      eightBall = "As I see it, yes";
      break;
    case 10:
      eightBall = "Most likely";
      break;
    case 11:
      eightBall = "Outlook good";
      break;
    case 12:
      eightBall = "Yes, definitely";
      break;
    case 13:
      eightBall = "All signs point to yes";
      break;
    case 14:
      eightBall = "Without a doubt";
      break;
    case 15:
      eightBall = "Yes, absolutely";
      break;
    case 16:
      eightBall = "It is possible";
      break;
    case 17:
      eightBall = "The stars are not aligned";
      break;
    case 18:
      eightBall = "Ask again later";
      break;
    case 19:
      eightBall = "Concentrate and ask again";
      break;
    case 20:
      eightBall = "Don't bet on it";
      break;
    default:
      eightBall = "Sorry, I don't understand.";
      break;
  }

  let responseText =
    userName !== ""
      ? `Hello, ${userName}!, ${userName} asks: ${userQuestion}<br>The Magic Eight Ball's answer: ${eightBall}`
      : `Hello! ${userQuestion}<br>The Magic Eight Ball's answer: ${eightBall}`;

  document.getElementById("response").innerHTML = responseText;
}
