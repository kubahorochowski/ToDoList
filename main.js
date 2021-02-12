//clock
const clock = () => {
  const divClock = document.querySelector("header .clock");
  const date = new Date().toLocaleDateString();
  let hours = new Date().getHours();
  hours < 10 ? hours = "0" + hours : hours;
  let minutes = new Date().getMinutes();
  minutes < 10 ? minutes = "0" + minutes : minutes;
  let seconds = new Date().getSeconds();
  seconds < 10 ? seconds = "0" + seconds : seconds;

  const checkDay = () => {
    const day = new Date().getDay();
    switch(day){
      case 1:
        return "poniedziałek";
      case 2:
        return "wtorek";
      case 3:
        return "środa";
      case 4:
        return "czwartek";
      case 5:
        return "piątek";
      case 6:
        return "sobota";
      case 7:
        return "niedziela";
    }
  }
  dayOfTheWeek = checkDay();
  divClock.textContent = `Dzisiaj jest ${dayOfTheWeek}, ${date}, godzina: ${hours}:${minutes}:${seconds}`
}
setInterval(clock, 1000);


//remove element from list
const removeTask = (e) => {
  const deleteTask = () => {
    e.target.parentNode.remove();
  }
  e.target.parentNode.childNodes[0].style.textDecoration = "line-through";
  setTimeout(deleteTask, 500)
}
// function removeTask() {
//   const deleteTask = () => {
//     this.parentNode.remove();
//   }
//   this.parentNode.childNodes[0].style.textDecoration = "line-through";
//   setTimeout(deleteTask, 1000)
// }
document.querySelectorAll("li i").forEach(listItem => listItem.addEventListener("click", removeTask));


//filter

const input = document.querySelector("input.filter");
const listItems = document.querySelectorAll("li");
const ul = document.querySelector("ul");

const searchTask = (e) => {
  const textFragment = e.target.value.toLowerCase();
  let tasks = [...listItems];
  tasks = tasks.filter(item => item.textContent.toLowerCase().includes(textFragment));
  ul.textContent = "";
  tasks.forEach(item => ul.appendChild(item));
}

input.addEventListener("input", searchTask)

//Add to list

const form = document.querySelector("form");
const inputAdd = document.querySelector("input.addTask");

const addTask = (e) => {
  e.preventDefault();
  const taskDescription = inputAdd.value;
  if(!taskDescription) return alert("Add description!")
  const newLi = document.createElement("li");
  newLi.innerHTML = `<p>${taskDescription}</p><i class="fas fa-times"></i>`
  ul.appendChild(newLi);
  inputAdd.value = "";
  newLi.addEventListener("click", removeTask);
}

form.addEventListener("submit", addTask)