const user = {
    123: {
        firstName: 'Steve',
        lastName: 'Jobs'
    },
    124: {
        firstName : 'Steve',
        lastName : 'Wozniak'
    }
};

const updatedUser = {...user};

updatedUser[123].lastName = 'Wozniak';
console.log(user[123].lastName);