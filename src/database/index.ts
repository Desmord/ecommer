import mongoose from "mongoose";

const connectionURL = `mongodb+srv://mikolajchojnacki:0CuGZajFO1wHfmAg@cluster0.j386qfw.mongodb.net/`;

const connectToDB = async () => {
    mongoose.connect(connectionURL)
        .then(() => { console.log(`Connected successfully`) })
        .catch((error) => { console.log(`Error from DB connection: ${error}`) })
}

export default connectToDB
