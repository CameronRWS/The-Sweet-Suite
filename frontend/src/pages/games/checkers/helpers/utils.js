export function returnPlayerName(playerBool) {
    return playerBool === true ? 'red' : 'black';
}

export function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

export function getRowAsInt(coordinate) {
    return parseInt(coordinate.charAt(1), 10);
}

export function getColAsInt(columns, coordinate) {
    return columns[coordinate.charAt(0)];
}

export function isOdd(n) {
    return Math.abs(n % 2) === 1;
}
