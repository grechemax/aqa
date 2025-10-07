const userProfile = {
    name: 'Olena',
    age: 28,
    isActive: true,
    contact: {
        email: 'olena@example.com',
        phone: '+380991112233'
    },
    address: {
        city: 'Kyiv',
        zip: '01001',
        geo: {
            lat: 50.4501,
            lng: 30.5234
        }
    },
    skills: ['JavaScript', 'HTML', 'CSS'],
    getFullGeo() {
        const geo = `Geo coordinates — latitude: ${this.address.geo.lat}, longitude: ${this.address.geo.lng}`;
        console.log(geo);
    }
};

userProfile.getFullGeo();
