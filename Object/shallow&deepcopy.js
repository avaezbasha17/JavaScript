let zoo = {
    name: "Amazing Zoo",
    location: "Melbourne, Australia",
    animals: [
        {
            species: "Lion",
            favoriteTreat: "🥩",
        },
        {
            species: "Panda",
            favoriteTreat: "🎋",
        },
    ],
};

let shallowCopy = { ...zoo }
shallowCopy.animals[0].favoriteTreat = "🍖";
console.log(zoo.animals[0].favoriteTreat);

//-------Check----------
console.log(zoo.animals === shallowCopy.animals)//true
console.log(zoo === shallowCopy);//false


//-------With DeepCopy-----
let zoo1 = {
    name: "Amazing Zoo",
    location: "Melbourne, Australia",
    animals: [
        {
            species: "Lion",
            favoriteTreat: "🥩",
        },
        {
            species: "Panda",
            favoriteTreat: "🎋",
        },
    ],
}

function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let deep_copy = deepCopy(zoo1);
console.log(deep_copy);
deep_copy.animals.push({ title: 'Marathon Runner', emoji: '🏃' })
console.log(zoo1.animals.length);
console.log(deep_copy.animals.length);