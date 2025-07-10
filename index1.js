let container2 = document.querySelector(".container2");
let adbtn = document.querySelector(".addBtn");
let dlbtn = document.querySelector(".delBtn");
let progress = document.querySelector("progress");

adbtn.addEventListener("click", () => {
    console.log('working')
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
});

//    <!-- <div class="container3">
//                 <input type="checkbox" class="task1 checkbox">
//                 <input type="text" placeholder="Add Task..." class='input' title="" value=''>
//             </div> -->
