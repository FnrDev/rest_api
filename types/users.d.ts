export interface User {
    name: string;
    id: string;
    role: 'Owner' | 'Admin' | 'User';
    isAdmin: boolean;
}