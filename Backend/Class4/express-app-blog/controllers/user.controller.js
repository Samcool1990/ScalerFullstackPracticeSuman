import fs from 'fs';
import User from '../model/user.model.js';


// export const getAlluser = (req,res) => {
//     try{
//         const userData = fs.readFileSync('mocks/user.mock.json');
//         res.status(200).send(JSON.parse(userData))
//     }catch(e){
//         res.status(500).send(e.message);
//     }

// };

export const getuserById = async (req,res) => {
    try{
        const userId = req.params.userId
        // const userData = fs.readFileSync('mocks/user.mock.json');
        // const userDataById = JSON.parse(userData).find(user => user.id == userId);
        const userDetails = await User.findById({userId})
        res.status(200).send(userDetails);
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
        const userData = await User.create(newuserData);
        res.status(200).send(userData);
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
        const updatedData = await User.updateOne({_id:userId },{$set: newuserData})
        res.status(200).send(updatedData);
    } catch(e) {
        res.status(500).send(e.message);
    }
}

export const deleteuserById = async (req,res) => {
    try{
        const userId = req.params.userId
        // const userData = JSON.parse(fs.readFileSync('mocks/user.mock.json'));
        // const userIndexDataById = userData.findIndex(user => user.id == userId);
        
        // userData.splice(userIndexDataById,1);
        // fs.writeFileSync('mocks/user.mock.json',JSON.stringify(userData));
        const deletedData = await User.findByIdAndDelete({_id:userId})
        res.status(200).send(deletedData);
    }catch(e){
        res.status(500).send(e.message);
    }

};