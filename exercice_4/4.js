/*
	Écrivez une fonction qui prend en entrée une chaîne de caractères et retourne un objet avec la fréquence de chaque caractère. Ignorez les espaces, les caractères spéciaux et la casse (majuscules / minuscules).
*/

const countCharacters = string => {
	// Version avec reduce
	// return string.replace(/\s|\W/g, '').toLowerCase().split('').reduce((accumulator, currentValue) => {
	// 	accumulator[currentValue] ? accumulator[currentValue]++ : accumulator[currentValue] = 1;
	// 	return accumulator;
	// }, {});

	// Version avec forEach
	const result = {};
	string.replace(/\s|\W/g, '').toLowerCase().split('').forEach(character => {
		result[character] ? result[character]++ : result[character] = 1;
	});
}