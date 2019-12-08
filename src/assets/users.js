const MongoClient = require("mongodb").MongoClient;
const mongodb = require("mongodb");
const url =
  "mongodb+srv://atlas:antantayarik322@users1-5hw5p.mongodb.net/test?retryWrites=true&w=majority";
const fs = require("fs");

const addUser = () => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let usersCount =
      parseInt(fs.readFileSync("./src/assets/count.txt", "utf8")) + 1;
    let dbo = db.db("users1").collection("users");
    let myobj = {
      _id: usersCount,
      login: "yaroslav" + usersCount,
      pass: "password" + usersCount
    };
    dbo.insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 user inserted");
    });
    fs.writeFileSync("./src/assets/count.txt", usersCount);
    db.close();
  });
};

const delUser = userId => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("users1").collection("users");
    let delId = { _id: userId };
    if (dbo.findOne(delId)) {
      dbo.deleteOne(delId, function(err, res) {
        if (err) throw err;
        console.log("1 user deleted");
      });
    } else {
      console.log("This user is missing");
    }
    db.close();
  });
};

const findUser = userId => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("users1").collection("users");
    dbo.findOne({ _id: userId }, function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
  });
};

const count = () => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("users1").collection("users");
    dbo.find({}).toArray((err, res) => {
      if (err) throw err;
      console.log(res.length);
    });
    db.close();
  });
};

const findAll = () => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("users1").collection("users");
    let qwerty = dbo
      .find({})
      .sort({ _id: 1 })
      .toArray((err, res) => {
        if (err) throw err;
        console.log(res);
      });
    // .map(value => console.log(value));
    console.log(qwerty);
    db.close();
  });
};

const delAll = () => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("users1").collection("users");
    dbo.drop(function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
    });
    fs.writeFileSync("./src/assets/count.txt", "0");
    db.close();
  });
};

module.exports = {
  addUser: addUser,
  delUser: delUser,
  findUser: findUser,
  count: count,
  findAll: findAll,
  delAll: delAll
};
