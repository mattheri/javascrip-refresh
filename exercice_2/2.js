/*
	Écrivez une fonction qui prend en entrée un nombre entier positif et retourne sa factorielle. Utilisez une approche récursive pour résoudre cet exercice.

	n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1

	Par convention, on considère que le factoriel de 0 (0!) est égal à 1.

	Voici quelques exemples de factoriels :

	1! = 1
	2! = 2 × 1 = 2
	3! = 3 × 2 × 1 = 6
	4! = 4 × 3 × 2 × 1 = 24
	5! = 5 × 4 × 3 × 2 × 1 = 120
*/

const factorial = n => {
	// Version récursive
	// if (n === 0) return 1;
	// return n * factorial(n - 1);

	// Version itérative
	let result = 1;
	for (let i = 1; i <= n; i++) {
		result *= i;
	}
	return result;
}