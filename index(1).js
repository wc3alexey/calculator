function calculator(string) {

    const data = string.split(' ');
    const num1 = convertToArabic(data[0]);
    const action = data[1];
    const num2 = convertToArabic(data[2]);

    if (num1 > 10 || num2 > 10) {
        throw Error;
    }

    if ((isNaN(+data[0]) && !isNaN(+data[2])) || (!isNaN(+data[0]) && isNaN(+data[2]))) {
        throw Error;
    }
    if (data.length!==3 || num1 === '' || num2 === '') {
        throw Error
    }
    let result = Math.floor(operation(+num1, +num2, action));

    if (isNaN(+data[0]) && isNaN(+data[2])) {
        result = convertToRumic(result)
    }

    return result.toString()
}
const operation = (a, b, act) => {
    if (a === 0 || b === 0) {
        throw Error;
    }
    if (act === '+') {
        return a + b;

    } else if (act === '-') {

        return a - b;

    } else if (act === '*') {
        return a * b;

    } else if (act === '/') {
        if (b===0) {
            throw Error;
        }
        return a / b;
    }
    else {
        throw  Error;
    }
};

const convertToArabic = num => {

    const rum = {
        "I":1, "II":2, "III":3, "IV":4, "V":5, "VI":6, "VII":7, "VIII":8, "IX":9, "X":10,
    };
    if (rum.hasOwnProperty(num)) {
        return rum[num]
    }
    return num;
};


const convertToRumic = num => {
    if (num < 1) {
        return '';
    }
    let arab = {
        1:"I", 2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8:"VIII", 9:"IX", 10:"X",
       };
    if (arab.hasOwnProperty(num)) {

        return arab[num]
    }

    return num;
};

