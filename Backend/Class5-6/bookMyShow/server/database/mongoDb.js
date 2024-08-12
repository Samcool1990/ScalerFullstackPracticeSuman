import mongoose from "mongoose"

const connectToDB = async() => {
    try {
        const {connection} = await mongoose.connect(
             'mongodb+srv://samcool909:fUnup6iwif5Yf7ES@cluster0.2g75khr.mongodb.net/Full_stack_book_my_show_db?retryWrites=true&w=majority&appName=Cluster0'
        )
        if (connection) {
            console.log(`Connected to database: ${connection.host}`);
        }
    } catch(e) {
        console.log('Error connecting');
    }
}

export default connectToDB;