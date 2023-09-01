export type UserData = {
    email: string;
    password: string;
}

export type UserAuth = {
    userData: null | UserData
}

export type RootState = {
    userAuth: UserAuth
}
