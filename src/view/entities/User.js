
import React from 'react'

//Pravimo klasu na osnovu podataka koje dobijamo sa API i prosledimo Postman-u da bi videli sta nam treba
class User {
    constructor(userData) {
        this.id = userData.id.value;
        this.name = `${userData.name.first} ${userData.name.last}`;
        this.dob = userData.dob.date;
        this.email = userData.email;
        this.image = userData.picture.medium;
    }
}

export default User;
