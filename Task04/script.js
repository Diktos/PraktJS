let tableDivs = document.querySelectorAll('.table');


for (let i = 0; i < tableDivs.length; i++) {
    let cells = tableDivs[i].querySelectorAll('td');

    for (let j = 1; j < cells.length; j += 2) {
        cells[j].classList.add('selected');
    }
}