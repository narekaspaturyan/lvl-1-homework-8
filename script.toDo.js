/////

let clear = document.getElementById("clearAll")
clear.addEventListener('click', function () {
    let node = document.getElementById('cont')
    node.innerHTML = ''
})


let addition = document.getElementById("btn");

addition.addEventListener("click", addVal)

function addVal() {
    let val = document.getElementById("inp").value
    if (val === "") {
        alert("Your list is empty")
        return;
    }

    let outerDiv = document.createElement('div')
    outerDiv.classList.add('outerDiv')

    let elem = document.createElement("div")
    elem.classList.add('div')
    elem.id = "done"
    elem.textContent = val
    document.getElementById("inp").value = ""

    let cont = document.getElementById('cont');
    cont.insertBefore(outerDiv, cont.firstChild);
    outerDiv.insertBefore(elem, outerDiv.firstChild);

    let btnX = document.createElement('button');
    btnX.classList.add('btn');
    btnX.classList.add('btn3');
    btnX.id = "btnX";
    btnX.textContent = '\u00D7';
    outerDiv.appendChild(btnX);

    let xClick = document.getElementById('btnX');
    xClick.addEventListener("click", function () {
        outerDiv.style.display = "none"
    })

    let check = true;
    let done = document.getElementById("done");

    done.addEventListener("click", function () {
        if (check === true) {
            outerDiv.style.backgroundColor = "chartreuse"
            elem.style.textDecoration = "line-through"
            check = false
        } else {
            outerDiv.style.backgroundColor = "white"
            elem.style.textDecoration = "none"
            check = true
        }
    })

}

let enterArrow = document.getElementById("body")
enterArrow.addEventListener('keydown', el => {

    if (el.which === 13) {
        let val = document.getElementById("inp").value
        if (val === "") {
            alert("Your list is empty")
            return;
        }

        let outerDiv = document.createElement('div');
        outerDiv.classList.add('outerDiv');

        let elem = document.createElement("div");
        elem.classList.add('div');
        elem.id = "done";
        elem.textContent = val;
        document.getElementById("inp").value = "";

        let cont = document.getElementById('cont');
        cont.insertBefore(outerDiv, cont.firstChild);
        outerDiv.insertBefore(elem, outerDiv.firstChild);

        let btnX = document.createElement('button');
        btnX.id = "btnX";
        btnX.classList.add('btn');
        btnX.classList.add('btn3');
        btnX.textContent = '\u00D7';
        outerDiv.appendChild(btnX);

        let xClick = document.getElementById('btnX')
        xClick.addEventListener("click", function () {
            outerDiv.style.display = "none"
        })

        let check = true;

        let done = document.getElementById("done")
        done.addEventListener("click", function () {
            if (check === true) {
                outerDiv.style.backgroundColor = "chartreuse"
                elem.style.textDecoration = "line-through"
                check = false
            } else {
                outerDiv.style.backgroundColor = "white"
                elem.style.textDecoration = "none"
                check = true
            }
        })
    }
})