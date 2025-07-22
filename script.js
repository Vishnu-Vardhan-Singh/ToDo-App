let container2 = document.querySelector(".container2");
let adbtn = document.querySelector(".addBtn");
let dlbtn = document.querySelector(".delBtn");
let progress = document.querySelector("progress");
let stat = document.getElementById('status')
let maxLength;
let count = 0;
// let getArr = JSON.parse(window.localStorage.getItem("vishnu")) || [];

window.addEventListener('load', () => {
    let arrget = JSON.parse(localStorage.getItem('vishnu'))
    if (arrget) {
        arrget.forEach(() => { addtask() })
        let bubu = document.querySelectorAll(".checkbox")
        let chk = Array.from(bubu)
        let inpbit = document.querySelectorAll('.input');
        let labu = Array.from(inpbit);

        labu.forEach((val, ind) => {
            val.value = arrget[ind].input;
            val.title = arrget[ind].input == "" ? val.placeholder : arrget[ind].input;
            if (arrget[ind].ckboxval == true) {
                chk[ind].checked = arrget[ind].ckboxval
                val.style.textDecoration = 'line-through'
                count++
                progress.value = count;
                stat.firstElementChild.innerText = count
            }
            else {
                chk[ind].checked = arrget[ind].ckboxval
                val.style.textDecoration = 'none'
            }

        })
    }
})

adbtn.addEventListener("click", () => {
    addtask()
    let inpbit = document.querySelectorAll('.input')
    let ckbox = document.querySelectorAll('.checkbox')
    let ckarr = Array.from(ckbox);
    let inparr = Array.from(inpbit).map((val, ind) => { return { input: val.value, ckboxval: ckarr[ind].checked } })
    localStorage.setItem('vishnu', JSON.stringify(inparr))
    // let inpbit = document.querySelectorAll('.input')
    // let inparr = Array.from(inpbit).map((val) => { return { input: val.value, ckboxval: false } })
    // localStorage.setItem('vishnu', JSON.stringify(inparr))
})

dlbtn.addEventListener("click", () => {
    removetask()
    updatemax()

})


function addtask() {
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
    inputvalue(text)
    clickact(checkbox, text)
    clickout(checkbox)
    updatevalue(checkbox, text)
}

function removetask() {
    if (container2.lastElementChild.firstElementChild.checked == true) {
        count = count - 1;
        progress.value = count;
        stat.firstElementChild.innerText = progress.value
    }
    if (container2.lastElementChild.classList.contains("container3")) {
        container2.lastElementChild.remove();
        let getArr = JSON.parse(localStorage.getItem("vishnu"))
        getArr.pop({})
        window.localStorage.setItem("vishnu", JSON.stringify(getArr))
    }
}

function updatemax() {
    maxLength = container2.getElementsByClassName("container3");
    progress.max = maxLength.length;
    stat.lastElementChild.innerText = `${maxLength.length}`
}

function inputvalue(text) {
    text.addEventListener("change", function (e) {
        text.title = e.target.value;
        let inpbit = document.querySelectorAll('.input')
        let ckbox = document.querySelectorAll('.checkbox')
        let ckarr = Array.from(ckbox);
        let inparr = Array.from(inpbit).map((val, ind) => { return { input: val.value, ckboxval: ckarr[ind].checked } })
        localStorage.setItem('vishnu', JSON.stringify(inparr))
    });
}

function updatevalue(checkbox, text) {
    checkbox.addEventListener("click", function () {
        if (checkbox.checked == true) {
            count = count + 1;
            progress.value = count;
            text.style.textDecoration = 'line-through'
            stat.firstElementChild.innerText = count
            let inpbit = document.querySelectorAll('.input')
            let ckbox = document.querySelectorAll('.checkbox')
            let inparr = Array.from(inpbit).map((val) => { return { input: val.value, ckboxval: false } })
            inparr = Array.from(ckbox).map((val, ind) => { return { input: inparr[ind].input, ckboxval: val.checked } })
            localStorage.setItem('vishnu', JSON.stringify(inparr))

        } else {
            count = count - 1;
            progress.value = count;
            text.style.textDecoration = 'none'
            stat.firstElementChild.innerText = progress.value
            let inpbit = document.querySelectorAll('.input')
            let ckbox = document.querySelectorAll('.checkbox')
            let inparr = Array.from(inpbit).map((val) => { return { input: val.value, ckboxval: false } })
            inparr = Array.from(ckbox).map((val, ind) => { return { input: inparr[ind].input, ckboxval: val.checked } })
            localStorage.setItem('vishnu', JSON.stringify(inparr))
        }
    });
}

function clickact(ckbox, txt) {
    ckbox.addEventListener("mouseover", () => {
        if (txt.value == "") {
            ckbox.disabled = true;
            alert('Please enter your task before selecting the checkbox.')
        }
    })
}
function clickout(ckbox) {
    ckbox.addEventListener("mouseout", () => {
        if (ckbox.disabled == true) {
            ckbox.disabled = false;
        }
    })

}

