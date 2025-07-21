let container2 = document.querySelector(".container2");
let adbtn = document.querySelector(".addBtn");
let dlbtn = document.querySelector(".delBtn");
let progress = document.querySelector("progress");
let stat = document.getElementById('status')
let maxLength;
let count = 0;

function updatemax() {
  maxLength = container2.getElementsByClassName("container3");
  progress.max = maxLength.length;
  stat.lastElementChild.innerText = `${maxLength.length}`
}

function updatevalue(checkbox,text) {
  checkbox.addEventListener("click", function () {
    if (checkbox.checked == true) {
      count = count + 1;
      progress.value = count;
      text.style.textDecoration = 'line-through'
      stat.firstElementChild.innerText = count
    } else {
      count = count - 1;
      progress.value = count;
      text.style.textDecoration = 'none'
      stat.firstElementChild.innerText = progress.value
    }
  });
}

function inputvalue(text) {
  text.addEventListener("input", function (e) {
    text.title = e.target.value;
  });
}

adbtn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.classList.add("container3");
  container2.append(div);

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("task1", "checkbox");

  let text = document.createElement("input");
  text.setAttribute("type", "text");
  text.setAttribute("placeholder", "Add Task...");
  text.classList.add("input");
  text.setAttribute("title", text.placeholder);
  text.setAttribute("value", "");
  
  stat.style.display = 'inline-block'

  div.append(checkbox);
  div.append(text);

  updatemax();
  updatevalue(checkbox,text);
  inputvalue(text);
  
});

dlbtn.addEventListener("click", () => {
  if (container2.lastElementChild.firstElementChild.checked == true) {
    count = count - 1;
    progress.value = count;
    stat.firstElementChild.innerText = progress.value
  }
  if (container2.lastElementChild.classList.contains("container3")) {
    container2.lastElementChild.remove();
  }
  if(container2.lastElementChild.classList.contains("container3")==false){
    stat.style.display = 'none'
  }
  updatemax();
});
