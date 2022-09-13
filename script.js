if (4 == 5) {
    console.log('ok!');
} else {
    console.log('Error!');
}


// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('ok!')
// }

// (num === 50) ? console.log('ok!') : console.log('Error!');

const num = 50;

switch (num) {
    case 49:
        console.log('Неверно!');
        break;
    case 100:
        console.log('Неверно!');
        break;
    case '50':
        console.log('Правда!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}