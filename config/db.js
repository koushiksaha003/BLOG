import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

export default connectDB;
