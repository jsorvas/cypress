//Boucle for, while, dowhile

let tableau = [1, 2, 3, 4, 5];

// i++ = i = i + 1
// i-- = i = i - 1

let i = 0;

for (i; i <= 4; i++) {
  console.log(tableau[i]);
}

let kilo = 0;

while (kilo < 5) {
  console.log(kilo);
  kilo++;
}

kilo = 20;
do {
  console.log(kilo);
  kilo++;
} while (kilo < 25);
