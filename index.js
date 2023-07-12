window.onload = function(){

    let rm_description = 'You wake in your bed and get up only to find that your door is locked!!'
    let rm_objects = 'You see a box at your feet.'
    let rm_exits = 'Exits: West'

    let description = document.getElementsByClassName('description');
    let objects = document.getElementsByClassName('objects');
    let exits = document.getElementsByClassName('exits');
    description[0].innerHTML = rm_description;
    objects[0].innerHTML = rm_objects;
    exits[0].innerHTML = rm_exits;
};


// const backpack = [];
// const items = [ 
//     "nail",
//     "bolts",
//     "scrap metal",
//     "9v battery",
//     "padlock"
// ];

// let data = prompt("Enter some data:");

// items.push(data);
// backpack.push(items);


// for(i=0; i < backpack.length; i++)
//     console.log('contents of backpack=', backpack[i]);








