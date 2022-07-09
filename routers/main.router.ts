import { Router } from 'express';
const mainRouter = Router();
import { User } from '../types/users';

mainRouter.get('/', async (req, res) => {
    const users = [
        {
            name: 'Fnr',
            id: '1',
            isAdmin: true
        },
        {
            name: "Joe",
            id: '2',
            isAdmin: false
        },
        {
            name: "Ali",
            id: '3',
            isAdmin: false
        }
    ] as User[];

    const updateAdminStats = users.map(
        (user) => user.id === '2' ? { ...user, isAdmin: true } : user
    );

    res.send(updateAdminStats);
})

export default mainRouter;