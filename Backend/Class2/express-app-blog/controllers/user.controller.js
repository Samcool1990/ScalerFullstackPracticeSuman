import fs from 'fs';


export const getAlluser = (req,res) => {
    try{
        const userData = fs.readFileSync('mocks/user.mock.json');
        res.status(200).send(JSON.parse(userData))
    }catch(e){
        res.status(500).send(e.message);
    }

};

export const getuserById = (req,res) => {
    try{
        const userId = req.params.userId
        const userData = fs.readFileSync('mocks/user.mock.json');
        const userDataById = JSON.parse(userData).find(user => user.id == userId);
        res.status(200).send(userDataById);
    }catch(e){
        res.status(500).send(e.message);
    }

};


export const deleteuserById = (req,res) => {
    try{
        const userId = req.params.userId
        const userData = JSON.parse(fs.readFileSync('mocks/user.mock.json'));
        const userIndexDataById = userData.findIndex(user => user.id == userId);
        
        userData.splice(userIndexDataById,1);
        fs.writeFileSync('mocks/user.mock.json',JSON.stringify(userData));
        res.status(200).send('user Deleted');
    }catch(e){
        res.status(500).send(e.message);
    }

};

export const Createuser = (req,res) => {
    try {
        const newuserData = req.body;
        let userData = JSON.parse(fs.readFileSync('mocks/user.mock.json'));
        userData = [...userData, newuserData];
        fs.writeFileSync('mocks/user.mock.json', JSON.stringify(userData));
        res.status(200).send("user created successfully!");
    } catch(e) {
        res.status(500).send(e.message);
    }

};



export const updateuserById = (req, res) => {
    try {
        const newuserData = req.body;
        const userId = req.params.userId;
        let userData = JSON.parse(fs.readFileSync('mocks/user.mock.json'));
        const userIndexDataById = userData.findIndex(user => user.id == userId);
        userData[userIndexDataById] = {  ...userData[userIndexDataById], ...newuserData };
        fs.writeFileSync('mocks/user.mock.json', JSON.stringify(userData));
        res.status(200).send("user updated successfully!");
    } catch(e) {
        res.status(500).send(e.message);
    }
}