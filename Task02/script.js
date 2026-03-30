let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil.
Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;

console.log("Символи за індексами:", text[12] + text[6] + text[18] + text[25]);
console.log("Нижній регістр:", text.toLowerCase());

let inPositions = [];
let pos = -1;
do {
    pos = text.indexOf("in", pos + 1);

    if (pos !== -1) {
        inPositions.push(pos);
    }
} while (pos !== -1);
console.log("Позиції 'in':", inPositions);

console.log("Масив слів:", text.split(" "));
console.log("Інвертований рядок:", text.split("").reverse().join(""));

function ucFirst(txt) {
    let newTxt = txt[0].toUpperCase() + txt.slice(1);
    return newTxt;
}
console.log(ucFirst('some text'));