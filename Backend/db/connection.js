const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    if (connection.STATES.connecting) {
      console.log(
        `\nMongoDB Connecting to DB :: db/index.js ${connection.connection.host}`
      );
    }

    if (connection.STATES.connected) {
      console.log("____DB Connected____");
    }

    if (connection.STATES.disconnected) {
      console.log(
        ` \n  MongoDB DisConnected to DB :: db/index.js ${connection.connection.host}`
      );
    }
    // console.log(connectionInstance.connection.host);
  } catch (error) {
    console.log(` MONGODB CONNECTION ERROR FAILED :: db/index.js :: ${error}`);

    // curr process ko terminate karo
    process.exit(1);
  }
};

module.exports = { connectDB };
