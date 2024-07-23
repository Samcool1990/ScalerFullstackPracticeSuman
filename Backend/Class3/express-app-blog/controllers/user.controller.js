import fs from 'fs';
import user from '../model/user.model.js';


export const getAlluser = async (req,res) => {
    try{
        // const userData = fs.readFileSync('mocks/user.mock.json');
        const allusersData = await user.find({});
        res.status(200).send(allusersData);
    }catch(e){
        res.status(500).send(e.message);
    }

};

export const getuserById = async (req,res) => {
    try{
        const userId = req.params.userId
        // const userData = fs.readFileSync('mocks/user.mock.json');
        // const userDataById = JSON.parse(userData).find(user => user.id == userId);
        const userData = await user.findById(userId);
        res.status(200).send(userData);
    }catch(e){
        res.status(500).send(e.message);
    }

};


export const deleteuserById = async (req,res) => {
    try{
        const userId = req.params.userId
        // const userData = JSON.parse(fs.readFileSync('mocks/user.mock.json'));
        // const userIndexDataById = userData.findIndex(user => user.id == userId);        
        // userData.splice(userIndexDataById,1);
        // fs.writeFileSync('mocks/user.mock.json',JSON.stringify(userData));
        const data = await user.findByIdAndDelete(userId);
        res.status(200).send(data);
    }catch(e){
        res.status(500).send(e.message);
    }

};

export const Createuser = async (req,res) => {
    try {
        const newuserData = req.body;
        // let userData = JSON.parse(fs.readFileSync('mocks/user.mock.json'));
        // userData = [...userData, newuserData];
        // fs.writeFileSync('mocks/user.mock.json', JSON.stringify(userData));
        const data = await user.create(newuserData);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    }

};



export const updateuserById = async (req, res) => {
    try {
        const newuserData = req.body;
        const userId = req.params.userId;
        // let userData = JSON.parse(fs.readFileSync('mocks/user.mock.json'));
        // const userIndexDataById = userData.findIndex(user => user.id == userId);
        // userData[userIndexDataById] = {  ...userData[userIndexDataById], ...newuserData };
        // fs.writeFileSync('mocks/user.mock.json', JSON.stringify(userData));
        const data = await user.updateOne({ _id: userId }, {$set: newuserData})
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    }
}