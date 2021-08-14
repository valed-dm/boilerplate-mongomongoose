require("dotenv").config();
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: String,
  country: String,
  occupation: String,
  favoriteFoods: Array
});

const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = done => {
  const dm_valed = new Person({
    name: "Dmitrii Valedinskii",
    age: 52,
    favoriteFoods: ["Seafood", "Pasta", "Grill"]
  });
  dm_valed.save((err, data) => {
    err ? done(err) : done(null, data);
  });
};

const arrayOfPeople = [
  { name: "Timothy Hicks", age: 25, favoriteFoods: ["Chips"] },
  { name: "Warren Curtis", age: 35, favoriteFoods: ["Burgers"] },
  { name: "Matthew Pool", age: 45, favoriteFoods: ["Pizza"] },
  { name: "Richard Neal", age: 55, favoriteFoods: ["Pasta"] }
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    err ? done(err) : done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    err ? done(err) : done(null, data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    err ? done(err) : done(null, data);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId }, (err, data) => {
    err ? done(err) : done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById({ _id: personId }, (err, data) => {
    err ? done(err) : data.favoriteFoods.push(foodToAdd);
    data.save((err, data) => {
      err ? done(err) : done(null, data);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = done => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = done => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};
/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
