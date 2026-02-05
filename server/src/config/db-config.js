//===========================================
import dns from 'node:dns'
// Set Node's DNS servers to Google's Public DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);
//========================================
import mongoose from 'mongoose';
// import'dotenv/config'

const mongo_uri = process.env.MONGO_URI.replace(
  '<db_password>',
  process.env.DB_PASSWORD,
);

async function connectDB() {
  try {
    await mongoose.connect(mongo_uri);
    console.log(`✅ DB connects successfully !!!`);
  } catch (error) {
    console.log(`❌ fail to connect db : ${error.message}`);
    process.exit();
  }
}

export default connectDB;
