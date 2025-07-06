let demo
let addbtn = document.querySelector('.addBtn')
let delbtn = document.querySelector('.delBtn')
let bar = document.getElementsByTagName('progress')
let container3 = document.getElementsByClassName('container3')
let container2 = document.querySelector(".container2")
let max = document.getElementsByClassName('max')
let min = document.getElementsByClassName('min')
let radios = document.getElementsByClassName('task1 radio');

let count = 0


addbtn.addEventListener('click', () => {

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
bar[0].value = container3.length

max[0].innerHTML = bar[0].max
min[0].innerHTML = bar[0].value


console.log(container2.lastElementChild)
console.log(container3.length)