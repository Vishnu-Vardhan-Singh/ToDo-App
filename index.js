debugger
let tooltip = document.querySelectorAll('input[type="text"]');
let task1Radio = document.querySelectorAll('input[type="radio"]');
let progress = document.querySelector('progress');
let count = 0;
let addtask = document.querySelector("body > div.container1 > div.addDel > div.addBtn")
let deltask = document.querySelector("body > div.container1 > div.addDel > div.delBtn")
let container2 = document.querySelector(".container2")
let container3 = document.querySelector(".container2 :nth-child(4)")
let clone = container3.cloneNode(true)


console.log(container3)
addtask.addEventListener('click', () => {
    // Clone and append new container3
    let newContainer = clone.cloneNode(true);
    container2.append(newContainer);

    // Get the new inputs inside the newly added container3
    let newTooltip = newContainer.querySelector('input[type="text"]');
    let newRadio = newContainer.querySelector('input[type="radio"]');

    // Attach event listener for tooltip
    if (newTooltip) {
        newTooltip.title = newTooltip.placeholder;
        newTooltip.addEventListener('input', function () {
            newTooltip.title = (newTooltip.value == '') ? newTooltip.placeholder : newTooltip.value;
        });
    }

    // Attach event listener for radio
    if (newRadio) {
        let b = false;
        newRadio.addEventListener('click', () => {
            if (b) {
                newRadio.checked = false;
                b = false;
                progress.value = --count;
            } else {
                b = true;
                progress.value = ++count;
            }
        });
    }

    // Update progress max
    task1Radio = document.querySelectorAll('input[type="radio"]');
    progress.max = task1Radio.length;
});


deltask.addEventListener('click', () => {

    clone = document.querySelector(".container3:last-child")
    if ((container3 == clone)) {
        console.log(container3 == clone)
    } else {
        clone.remove()
        progress.value = --count;
    }


})

progress.max = task1Radio.length


for (let i = 0; i < tooltip.length; i++) {
    tooltip[i].title = tooltip[i].placeholder;
    tooltip[i].addEventListener('input', function () {
        tooltip[i].title = (tooltip[i].value == '') ? tooltip[i].placeholder : tooltip[i].value;
    });

}

for (let i = 0; i < task1Radio.length; i++) {
    let b = false
    task1Radio[i].addEventListener('click', () => {
        if (b) {
            task1Radio[i].checked = false
            b = false
            progress.value = --count;
        }
        else {
            b = true
            progress.value = ++count;
        }
    })
}



document.querySelector("body > div.container1 > div.container2 > div.container3.task3")


