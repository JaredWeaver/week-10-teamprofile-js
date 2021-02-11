


const email = name => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(name)) {
        return true;
  }
    console.error(' Please enter a correct email address.');
        return false;
}

const numbersOnly = name => {
    if (isNaN(name)) {
        console.error(' Please enter a number.');
        return false;
    }
        return true;
}

const notEmpty = name => {
    if (name === '') {
        console.error(' Please enter a valid response to continue.')
        return false;
    }
        return true;
}

module.exports = {
    email,
    numbersOnly,
    notEmpty
}