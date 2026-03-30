
let paragraphs = document.querySelectorAll('#paragraphs p');
let lengthsArr = [];
for (let i = 0; i < paragraphs.length; i++) {
    let textLength = paragraphs[i].innerText.length;
    lengthsArr.push(textLength);
}
console.log("Довжини абзаців:", lengthsArr);


let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

console.log("Найменше значення:", Math.min(...arr), " , а найбільше:", Math.max(...arr));
console.log("Парних:", arr.filter(x => x % 2 === 0).length, " значень, а непарних:", arr.filter(x => x % 2 !== 0).length);
console.log("Двозначних значень:", arr.filter(x => Math.abs(x) >= 10 && Math.abs(x) <= 99).length);
console.log("Додатних:", arr.filter(x => x > 0).length, " значень, а від'ємних:", arr.filter(x => x < 0).length);

let sortedArr = arr.slice();

sortedArr.sort(function(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});

console.log("Відсортований масив:", sortedArr);
console.log("Обернений масив:", [...arr].reverse());