/*  environment variables for windows settings
   mongosh  command --> 
   * mongosh for check properly installed the mongoss settings
   
   1. Show dbs =>  for show database collection;
  
  use tools => 
  db.users.insertOne()
  db.users.insertMany()
  db.users.find()
  db.users.find().count()
  db.users.find().limit(2)
  db.users.find().skip(2).limit(2)
  db.users.find().sort({age: 1}) or -1;
  db.users.find().projection({name: 1}) or 0
  db.users.find({_id: ObjectId("64c94ce0358efe6b4021135c")})
  db.users.find({name: 'john'})

  db.users.find({"friends.address.city": "Dhaka"})

  ============ 5-5 Operators ==========

  db.users.find({age: {$gt: 22}}
  db.users.find({age: {$gte: 22}}
  db.users.find({age: {$lt: 22}}
  db.users.find({age: {$lte: 22}}
  
    === comparison operators ===
  db.users.find({age: {$eq: 22}};
  db.users.find({age: {$ne: 22}};

  db.users.find({name: {$in: ["Saad", "Jarif"]}})
  db.users.find({name: {$nin: ["Saad", "Jarif"]}})

  ==== logical operators =======
  db.users.find({$and: [{name: "Saad"}, {age: 22}]})
  db.users.find({$or: [{name: "Saad"}, {age: 22}]})
  db.users.find({age: {$not: {$gt: 22}}})
  db.users.find({$and: [{name: "Saad"}, {age: {$gte:22, $lt: 30}}]})

  db.users.find({age: {$exists: true}})

  db.users.find({address: {$type: "object"}})

  db.users.find({name: {$regex: /sa/i}})
  db.users.find({name: {$regex: /^\w{4}$/}})

    ==== expression operators ======
    db.users.find({$expr: {$gt: ["$budget", "$spent"]}}) // budget jodi spent theke besi hoi 


  ====== 5-6 Updating & Deleting =======

  db.users.updateOne({name: "Saad"}, {$set: {age: 23}})

  db.users.updateMany({age: {$gt: 20}}, {$inc: {age: 2}})

  db.users.updateMany({age: {$gt: 20}}, {$inc: {age: -2}})

  db.users.updateOne({name: "Saad"}, {$mul: {age: 2}})

  db.users.updateOne({name: "Saad"}, {$mul: {age: 1/2}})

  db.users.updateMany({skills: {$exists: true}}, {$set:{"skills.1": "JS"}})

  db.users.updateMany({skills: {$exists: true}}, {$push:{"skills": "Python"}})

  db.users.updateMany({skills: {$exists: true}}, {$push:{"skills": {$each: ["React", "Angular"]}}})

  db.users.updateMany({skills: {$exists: true}}, {$pull: {skills: "React"}})

  db.users.updateMany({skills: {$exists: true}}, {$pullAll: {skills: ["Python", "Angular"]}})

  db.users.updateMany({address: {$exists: true}}, {$set: {"address.city": "khulna"}})

  db.users.updateOne({name: "Saad"}, {$rename: {age: "base"}})

  db.users.updateOne({name: "Saad"}, {$unset: {age: ""}})

  db.users.deleteOne({_id: objectId()})
*/
