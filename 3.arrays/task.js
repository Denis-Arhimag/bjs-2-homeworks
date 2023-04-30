function compareArrays(arr1, arr2) {
    // return arr1.toString() === arr2.toString();
    return (arr1.length === arr2.length) && (arr1.every((n, i) => n === arr2[i]));
    
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