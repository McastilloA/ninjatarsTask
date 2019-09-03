export class tokenInterface {
    grant_type?: string;
    client_id?: number;
    client_secret?: string;
    username: string;
    password: string;
}

export class tokenBearer {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
}