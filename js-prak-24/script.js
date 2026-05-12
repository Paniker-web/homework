for (let i = 1; i < 20; i++) {
	if (i % 4 === 0) 
		console.log(i)
}

const number = +prompt("Введите число", 0)
let factorial = 1; 
for (let i = 1; i <= number; i++) {
	factorial *= i;
}
console.log(`Факториал числа ${number} равен ${factorial}`) 

const size = 8; // Размер доски 8x8

for (let i = 0; i < 8; i++) {
    let row = "";
    for (let j = 0; j < 8; j++) {
        row += (i + j) % 2 === 0 ? "# " : "  "; // в этой строчки немного чпт помого
    }
    console.log(row);
}