import mongoose from 'mongoose'


const connectToDB = async() => {
    try {
        const {connection} = await mongoose.connect(
            'mongodb+srv://samcool909:fUnup6iwif5Yf7ES@cluster0.2g75khr.mongodb.net/sclaer_learning_db_name?retryWrites=true&w=majority&appName=Cluster0'
        )
        if(connection) {
            console.log(`Connected to Database: ${connection.host}`);
        }
    }catch(e){
        console.log('Error is Conectiong DB', e.message);
    }
}


export default connectToDB;