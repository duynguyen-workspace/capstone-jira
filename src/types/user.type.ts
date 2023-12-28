export interface CurrentUser {
    email: string;
    password: string;
    name: string;
    phoneNumber: string;
    accessToken: string;
}

export interface LoginRequestBody {
    email: string;
    password: string;
}
