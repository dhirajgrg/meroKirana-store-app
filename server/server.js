//CORE MODULES
import 'dotenv/config';

//CUSTOM MODULES
import app from './src/app.js';
import connectDB from './src/config/db-config.js';

//INITIALIZE  SERVER
function initserver() {
  try {
    connectDB();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`✅ server listening on port : ${PORT}`);
    });
  } catch (error) {
    console.log(`❌ couldn't start server : ${error.message}`);
  }
}

//START SERVER
initserver();
