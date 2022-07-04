// const maleNames = {
//     'A': ['Aaron','Abner', 'Adam', "Adler"],
//     'B': ['Blaise', 'Brady', 'Brogan'],
//     'C': ['Cade', 'Cecil', 'Chad'],
//     'D': ['Dawson', 'Dominic', 'Donovan'],
//     'E': ['Eric', 'Ethan', 'Elijah'],
//     'F': ['Fabio','Fahim', 'Felip'],
//     'G': ['Gabriel', 'Gage', 'Galen'],
//     'H': ['Hadrian', 'Hall', 'Hamish'],
//     'I': ['Ian', 'Ignacio', 'Inigo'],
//     'J': ['Jack', 'Jafar', 'Jason'],
//     'K': ['Keegan', 'Kermit', 'Kipling'],
//     'L': ['Lawson', 'Lincoln', 'Luke'],
//     'M': ['Mark', 'Martin', 'Maxim'],
//     'N': ['Neelam', 'Nestor', 'Noor'],
//     'O': ['Olaf', 'Omar', 'Ozzy'],
//     'P': ['Pablo', 'Parker', 'Peter'],
//     'Q': ['Quincy', 'Quinlan', 'Quinn'],
//     'R': ['Rahim', 'Raphael', 'Rhys'],
//     'S': ['Sherwin', 'Solomon', 'Stewart'],
//     'T': ['Thomas', 'Thor', 'Tobias'],
//     'U': ['Ulric', 'Ulysses', 'Umberto'],
//     'V': ['Vance', 'Viggo', 'Vincent'],
//     'W': ['Waldo', 'Weston', 'Willard'],
//     'X': ['Xander', 'Xavier', 'Xenon'],
//     'Y': ['Yasir', 'Yule', 'Yuri'],
//     'Z': ['Zachary', 'Zane', 'Zion']
// }

// const femaleNames = {
//     'A': ['Abigail','Adeline', 'Addison'],
//     'B': ['Bailey', 'Banks', 'Barbara'],
//     'C': ['Camila', 'Caroline', 'Celia'],
//     'D': ['Daisy', 'Dakotah', 'Danielle'],
//     'E': ['Effie', 'Eliana', 'Ella'],
//     'F': ['Fara','Fiona', 'Flo'],
//     'G': ['Gabrielle', 'Georgia', 'Gillian'],
//     'H': ['Hadlee', 'Harriett', 'Holly'],
//     'I': ['Iris', 'Isabella', 'Isla'],
//     'J': ['Jane', 'Jemma', 'Josephine'],
//     'K': ['Katie', 'Kaylee', 'Kelly'],
//     'L': ['Lila', 'Lola', 'Luna'],
//     'M': ['Macie', 'Mamie', 'Marissa'],
//     'N': ['Nancy', 'Nicole', 'Nora'],
//     'O': ['Olivia', 'Olive', 'Ophelia'],
//     'P': ['Patricia', 'Penelope', 'Phoebe'],
//     'Q': ['Quincy', 'Quinn', 'Quinne'],
//     'R': ['Rachel', 'Regan', 'Rosalie'],
//     'S': ['Sailor', 'Sloane', 'Stella'],
//     'T': ['Tatum', 'Tessa', 'Tyra'],
//     'U': ['Uma', 'Ulysses', 'Umberto'],
//     'V': ['Vera', 'Victoria', 'Virginia'],
//     'W': ['Wanda', 'Wilma', 'Whitney'],
//     'X': ['Xenia', 'Xaviera', 'Xenona'],
//     'Y': ['Yael', 'Yulya', 'Yvette'],
//     'Z': ['Zara', 'Zelda', 'Zoey']
// }

// const surnames = {
//     'A': ['Aalders','Acorn', 'Addice'],
//     'B': ['Baalam', 'Badkin', 'Balston'],
//     'C': ['Canvin', 'Canyer', 'Canyers'],
//     'D': ['Dain', 'Dacombe', 'Dacre'],
//     'E': ['Easman', 'Edelstone', 'Eadis'],
//     'F': ['Fancote','Farbrace', 'Fannen'],
//     'G': ['Gallop', 'Gawltrey', 'Gayton'],
//     'H': ['Hagerstone', 'Hale', 'Hancut'],
//     'I': ['Iddyson', 'Ilman', 'Iron'],
//     'J': ['Jelfe', 'Jarrad', 'Jeffcott'],
//     'K': ['Keere', 'Karlin', 'Keem'],
//     'L': ['Lamcraft', 'Lanyon', 'Larlee'],
//     'M': ['Maeers', 'Maidmant', 'Marklo'],
//     'N': ['Naggs', 'Nevill', 'Nock'],
//     'O': ['Obank', 'Orgle', 'Ossiter'],
//     'P': ['Park', 'Pawlett', 'Peed'],
//     'Q': ['Quartermain', 'Quipp', 'Quest'],
//     'R': ['Rastall', 'Ravan', 'Raynish'],
//     'S': ['Sansone', 'Sanum', 'Sawing'],
//     'T': ['Tallentyre', 'Tather', 'Tedds'],
//     'U': ['Ubank', 'Ullathorne', 'Upshall'],
//     'V': ['Vaux', 'Vernel', 'Vinal'],
//     'W': ['Walsforn', 'Warnock', 'Warth'],
//     'X': ['Xmas', 'Xavieram', 'Xeny'],
//     'Y': ['Yearker', 'Yopp', 'Yarkar'],
//     'Z': ['Zerbe', 'Zealand', 'Zogg']
// }

// const generateIndex = (limit) => Math.floor(Math.random() * limit)

// const generateName = (firstNameLetter, lastNameLetter, namesArray) => {
//     const names = namesArray[firstNameLetter];
//     const firstNameIndex = generateIndex(names.length);
//     const firstName = names[firstNameIndex];
//     const lastNames = surnames[lastNameLetter];
//     const lastNameIndex = generateIndex(lastNames.length);
//     const lastName = lastNames[lastNameIndex];
//     return {
//         firstName,
//         lastName
//     }
// }

// const init = (firstNameLetter, lastNameLetter, gender) => {
//     console.log(String(userName))
    // const isRightArgs = typeof firstNameLetter === "string" && typeof lastNameLetter === "string" && typeof gender === "string";
    // if (isRightArgs) {
    //     return alert ('Please, enter letters')
    // }

//     if (gender === "male") {
//         return generateName(firstNameLetter.toUpperCase(), lastNameLetter.toUpperCase(), maleNames);
//     } 
//     if (gender === "female") {
//         return generateName(firstNameLetter.toUpperCase(), lastNameLetter.toUpperCase(), femaleNames);
//     }

//     return alert("wrong gender");
// }

// const userName = prompt('Please, enter first letter your name');
// const userSurname = prompt('Please, enter first letter your surname');
// const userGender = prompt('Please, enter your gender');

// console.log(init(userName, userSurname, userGender));
