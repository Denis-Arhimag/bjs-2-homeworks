function compareArrays(arr1, arr2) {
    return arr1.toString() === arr2.toString();
    // const compareArray = (a, b) => a.length === b.length && a.every((n, i) => n === b[i]);
    // return compareArray; 
    
    // Но почему то этот вариант у меня не сработал. Что именно я не так написал ? 
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0) {
        return 0;
      } else if (gender != "мужской" && gender != "женский") {
        return 0;
      } else {
        const adults = users.filter (person => person.gender === gender);
        const amount = adults.reduce ((total, person) => total + person.age, 0);
        return amount / adults.length
      }
}