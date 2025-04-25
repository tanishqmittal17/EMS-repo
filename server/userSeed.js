import User from './models/User.js';  // Correct import statement
import connectToDatabase from './db/db.js';
import bcrypt from 'bcrypt';

const userRegister = async () => {
  await connectToDatabase();  // Connect to MongoDB
  try {
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin",
    });
    await newUser.save();
    console.log("User saved!");
  } catch (error) {
    console.log(error);
  }
};

userRegister();
