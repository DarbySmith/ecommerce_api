// basic user with properties username, email, password
export interface User {
    username: string,
    email: string,
    password: string
}

// extends User to add id property
export interface UnitUser extends User {
    id: string
}

// collection of user objects with dynamic keys as strings and values of UnitUser
export interface Users {
    [key : string] : UnitUser
}