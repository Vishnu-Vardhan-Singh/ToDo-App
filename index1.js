let container2 = document.querySelector(".container2");
let adbtn = document.querySelector(".addBtn");
let dlbtn = document.querySelector(".delBtn");
let progress = document.querySelector("progress");
let maxLength;
let count = 0;
function updatemax() {
  maxLength = container2.getElementsByClassName("container3");
  progress.max = maxLength.length;
}
function updatevalue(checkbox) {
  checkbox.addEventListener("click", function () {
    if (checkbox.checked == true) {
      count = count + 1;
      progress.value = count;
    } else {
      count = count - 1;
      progress.value = count;
    }
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
  text.setAttribute("title", "");
  text.setAttribute("value", "");

  div.append(checkbox);
  div.append(text);

  updatemax();
  updatevalue(checkbox);
});

dlbtn.addEventListener("click", () => {
  if (container2.lastElementChild.firstElementChild.checked == true) {
    count = count - 1;
    progress.value = count;
  }
  if (container2.lastElementChild.classList.contains("container3")) {
    container2.lastElementChild.remove();
  }
  updatemax();
});

