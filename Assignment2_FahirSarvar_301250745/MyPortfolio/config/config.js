const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  // Replace with YOUR MongoDB Atlas connection string (database name: Portfolio)
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://movistof_db_user:JsWrK6jiZK5gi1fA@cluster0.n9hflba.mongodb.net/Portfolio",
};
export default config;
