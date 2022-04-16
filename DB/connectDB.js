const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/personDB`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    handleError(err);
  }
};

module.exports = connectDB;