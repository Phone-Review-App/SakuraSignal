function validEmail(input) {
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        .test(input); // Regex version of HTML5 spec
}

function isString(input) {
    return typeof input === "string";
}

function isNotEmpty(input) {
    return isString(input) && input.length > 0;
}

function isInteger(input) {
    return typeof input === "number" && Number.isInteger(input);
}

function validScore(input) {
    return isInteger(input) && input >= 0 && input < 11;
}

module.exports = { validEmail, isNotEmpty, isInteger, validScore }