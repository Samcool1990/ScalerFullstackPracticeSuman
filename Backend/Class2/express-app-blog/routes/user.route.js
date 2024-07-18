import express from 'express';

const router = express.Router();

let users = [{id:1, username: 'user1'},
    {id:2, username: 'user2'},
    {id:3, username: 'user3'},
    {id:4, username: 'user4'},
];

router.get('/', (req,res) => {
    res.send(users)
});

router.get('/:userId', (req, res) => {
    const userId = parseInt(req.params.userId, 10); // Convert userId to a number
    const user = users.find(u => u.id === userId);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send('User not found');
    }
});

router.post('/', (req,res) => {});

router.put('/:userId', (req,res) => {});

router.delete('/:userId', (req,res) => {});

export default router;