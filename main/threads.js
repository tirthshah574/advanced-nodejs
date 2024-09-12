process.env.UV_THREADPOOL_SIZE = 4;

const crypto = require('crypto');

const start = Date.now();

function* counter() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

const count = counter();

function callHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`${count.next().value}:`, Date.now() - start);
    });
}

callHash();
callHash();
callHash();
callHash();
callHash();
callHash();