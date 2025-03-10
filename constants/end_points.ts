export const domain =
    'https://dummyjson.com';
export const path = '/users';

export const getUsers = (): string =>
    `${domain}${path}`;
