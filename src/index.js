module.exports = function toReadable(number) {
    let firstClass = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let secondClass = [
        "zero",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) {
        return firstClass[number];
    }
    if (number < 100) {
        let separation = Math.floor(number / 10);
        return (
            secondClass[separation] + (number % 10 === 0 ? "" : ` ${toReadable(number % 10)}`)
        );
    }
    let hundred = Math.floor(number / 100);
    return (
        toReadable(hundred) +" hundred" + (number % 100 === 0 ? "" : ` ${toReadable(number % 100)}`)
    );
};