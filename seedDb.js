console.clear()
const mongoose = require("mongoose");

const Suggestion = require("./Model/schemaSuggestion.js");
const wordSeed = require("./suggestions.json");
require("dotenv").config();

const seedFunc = async () => {
  try {
    const data = await Suggestion.create(wordSeed); //takes an array wordSeed is an array file
    
    await console.log(`${data.length} records created`);

    await mongoose.disconnect();
    console.log("mongo disconnected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

mongoose
  .connect(process.env.MONGODB_URI, {//????
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connected");
    mongoose.connection.db.dropDatabase(); //will empty database
  })
  .then(() => {
    seedFunc();
  })
  .catch((err) => console.log(`MongoDB Error: ${err}`));
