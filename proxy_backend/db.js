const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://elliott:FhsMaAad60eaap1r@cluster0.9svdygb.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log("elle error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
