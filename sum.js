
function run() {
  let quest = document.getElementById("question").innerHTML;

  let option1 = document.getElementById("option1");
  let option2 = document.getElementById("option2");
  let option3 = document.getElementById("option3");
  let option4 = document.getElementById("option4");

  let data = quest.split("+");
  let first = +data[0];
  let second = +data[1];

  let f = first + second;
  
  console.log(f, +option1.innerHTML, +option2.innerHTML, +option3.innerHTML, +option4.innerHTML, quest);

  if (+option1.innerHTML === f) {
    option1.click();
    setTimeout(() => {
    	run();
    }, 300);
  } else if (+option2.innerHTML === f) {
    option2.click();
    setTimeout(() => {
    	run();
    }, 300);
  } else if (+option3.innerHTML === f) {
    option3.click();
    setTimeout(() => {
    	run();
    }, 300);
  } else if (+option4.innerHTML === f) {
    option4.click();
    setTimeout(() => {
    	run();
    }, 300);
  }
}

run();
