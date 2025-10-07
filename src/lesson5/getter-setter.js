const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
        city: 'Berlin',
        zip: '10115'
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        const [first, last] = value.split(' ');
        this.firstName = first;
        this.lastName = last || '';
    },


    get fullAddress() {
        return `${this.address.city}, ${this.address.zip}`;
    },

    set fullAddress(value) {
        const [city, zip] = value.split(',').map((s) => s.trim());
        this.address.city = city;
        this.address.zip = zip;
    },


    summary() {
        return `👤 ${this.fullName}, ${this.age} років, проживає у ${this.fullAddress}`;
    }
};

console.log('Початкове summary:');
console.log(user.summary());

// Використовуємо сетери
user.fullName = 'Lee Cooper';
user.fullAddress = 'Boston, 20095';

// Оновлені дані
console.log('\nПісля змін:');
console.log(user.summary());
