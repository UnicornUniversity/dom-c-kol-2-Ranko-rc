/**
assignmentsBSDE Homework assignment 2

Zadání :

Vytvořte v programovacím jazyce JavaScript program vycházející s Vašeho řešení domácího úkolu 1, který bude převádět číslo z jedné číselné soustavy do druhé. 
Sami si zvolte, mezi jakými číselnými soustavami budete čísla převádět. 
Program bude obsahovat minimálně jednu funkci, která jako vstupní argument bude obsahovat číslo, které má být převedeno. 
Návratová hodnota této funkce bude zase obsahovat převedené číslo v požadované číselné soustavě.
 */

/**
 * Funkce pro převod čísla z desítkové (decimální) soustavy do binární (dvojkové) soustavy.
 * Využívá metodu postupného dělení základem (2).
 *
 * @param {number} decimalNumber - Desítkové číslo (celé číslo >= 0), které má být převedeno.
 * @returns {string} - Převedené číslo v binární soustavě jako řetězec.
 */


function manualDecimalToBinary(decimalNumber) {
    // Kontrola platnosti vstupu
    if (typeof decimalNumber !== 'number' || decimalNumber < 0 || !Number.isInteger(decimalNumber)) {
        return "Chyba: Vstup musí být nezáporné celé číslo.";
    }


    // Speciální případ pro 0
    if (decimalNumber === 0) {
        return "0";
    }


    let binaryResult = "";
    let tempNumber = decimalNumber;


    // Hlavní algoritmus: Postupné dělení číslem 2 a sbírání zbytků
    while (tempNumber > 0) {
        // 1. Zjistíme zbytek po dělení číslem 2 (bude 0 nebo 1)
        let remainder = tempNumber % 2;


        // 2. Přidáme zbytek na začátek výsledného řetězce (protože zbytky sbíráme odzadu)
        binaryResult = remainder.toString() + binaryResult;


        // 3. Celé číslo vydělíme 2 a zaokrouhlíme dolů pro další iteraci
        tempNumber = Math.floor(tempNumber / 2);
    }

    return binaryResult;
}

// --- PŘÍKLADY POUŽITÍ ---

console.log("--- Převod z Desítkové do Dvojkové (Manuální) ---");

let dec1 = 42;
let binResult1 = manualDecimalToBinary(dec1);
console.log(`Číslo ${dec1} (desítková) je ${binResult1} (dvojkové).`); 
// Očekává: 101010
/*
42 / 2 = 21, zbytek 0
21 / 2 = 10, zbytek 1
10 / 2 = 5, zbytek 0
5 / 2 = 2, zbytek 1
2 / 2 = 1, zbytek 0
1 / 2 = 0, zbytek 1
Výsledek odzadu: 101010
*/



let dec2 = 13;
let binResult2 = manualDecimalToBinary(dec2);
console.log(`Číslo ${dec2} (desítková) je ${binResult2} (dvojkové).`);
// Očekává: 1101


let dec3 = 0;
let binResult3 = manualDecimalToBinary(dec3);
console.log(`Číslo ${dec3} (desítková) je ${binResult3} (dvojkové).`);
// Očekává: 0