const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'TEST@TEST.com',
    address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA',
    },
};
const handler = {
    get: function (target, property) {
        console.log(123, target, 456, property);

        if (property === 'email') {
            console.log('My name is email');
        }
        return property in target ? target[property] : 'Not found';
    },
    set: function (target, property, value) {
        console.log(target, property, value);
    },
};
const futuredata = fetch('https://jsonplaceholder.typicode.com/todos/1');
futuredata.then(data => console.log(data));

const proxy = new Proxy(user, handler);
proxy.email;
proxy.firstName;
