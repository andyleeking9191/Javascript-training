/*
The spread syntax is used to take iterables such as arrays or strings
and place each item/element and place them as arguments.
*/

const foodList = ['apples', 'oranges', 'peaches', 'bannanas'];


function displayItems(item1, item2, item3, item4) {
    console.log(`${item1} in stock`)
    console.log(`${item2} in stock`)
    console.log(`${item3} in stock`)
    console.log(`${item4} in stock`)
}

displayItems(...foodList);

