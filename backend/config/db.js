import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://subhasishkumbhakar6:ZnujAiLviqyjdZ4R@vercel-food-delivery-we.ett5oek.mongodb.net/?retryWrites=true&w=majority&appName=vercel-food-delivery-website').then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.