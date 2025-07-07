let addbtn = document.querySelector('.addBtn')
let delbtn = document.querySelector('.delBtn')
let bar = document.getElementsByTagName('progress')
let container3 = document.getElementsByClassName('container3')
let container2 = document.querySelector(".container2")
let max = document.getElementsByClassName('max')
let min = document.getElementsByClassName('min')
let radios = document.getElementsByClassName('task1 radio');
let count = 0

// radios[0].checked =

addbtn.addEventListener('click', () => {
    document


    container2.append((container3[0].cloneNode(true)))
    bar[0].max = container3.length
    max[0].innerHTML = bar[0].max
    min[0].innerHTML = bar[0].value
})

delbtn.addEventListener('click', () => {
    if (container3.length > 1) {
        container2.lastElementChild.remove()
        // bar.value = container3.length
        bar[0].max = container3.length
        max[0].innerHTML = bar[0].max
        min[0].innerHTML = bar[0].value
    }
})

bar[0].max = container3.length

max[0].innerHTML = bar[0].max
min[0].innerHTML = bar[0].value


let b = true;

for (let i = 0; i < container3.length; i++) {
    radios[i].addEventListener('click', function () {
        if (b == true) {
            radios[i].checked = b
            b = false
            console.log(radios[i].checked)
        }
        else {
            radios[i].checked = b
            b = true
            console.log(radios[i].checked)
        }

        if (radios[i].checked == true) {
            bar[i].value = i + 1
        }
        else {
            bar[i].value = i
        }
    })
    console.log(container3.length)
}

// console.log(container2.lastElementChild)
// console.log(container3.length)

