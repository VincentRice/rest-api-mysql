export interface User {
    id?: string; // Making id optional since it might be generated when creating a new user
    username: string;
    email: string;
    password: string;
}

export interface UnitUser extends User {}

export interface Users {
    [key: string]: UnitUser;
}

/*export interface User {
    username : string,
    email : string,
    password : string
}

export interface UnitUser extends User {
 
}

export interface Users {
    [key : string] : UnitUser


}*/
