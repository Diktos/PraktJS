document.body.style.fontFamily = "Arial";

let pElements = document.querySelectorAll('p');

pElements[0].style.color = "orange";
pElements[0].style.backgroundColor = "yellow";
pElements[0].style.fontSize = "16px";
pElements[0].style.padding = "5px";
pElements[0].style.textAlign = "center";

pElements[1].style.color = "blue";
pElements[1].style.backgroundColor = "lightblue";
pElements[1].style.fontSize = "14px";
pElements[1].style.padding = "5px";
pElements[1].style.textAlign = "right";

pElements[2].style.color = "red";
pElements[2].style.backgroundColor = "lightcoral";
pElements[2].style.fontSize = "12px";
pElements[2].style.padding = "5px";
pElements[2].style.textAlign = "left";

let table1 = document.querySelector('#task1-table');
for (let r = 0; r < table1.rows.length; r++) {
    for (let c = 0; c < table1.rows[r].cells.length; c++) {
        if ((r + c) % 2 === 0) {
            table1.rows[r].cells[c].classList.add('selected');
        }
    }
}