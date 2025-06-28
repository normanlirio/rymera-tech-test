import { UserCredentials } from "./types"

export const getUserCredentials = (userType: string): UserCredentials => {
    const credentials: { [key: string]: UserCredentials } = {
        wholesale_customer: {
            username: 'qa-wholesale',
            password: 'Autumn@2025!'
        },
        regular_customer: {
             username: 'qa-regular',
            password: 'Autumn@2025!'
        }
    };

    return credentials[userType]
} 