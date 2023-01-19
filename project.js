const mongoose = require('mongoose');
const { findByIdAndRemove } = require('./script');
mongoose.set('strictQuery', false);
const person=require('./script');

mongoose.connect("mongodb://127.0.0.1/mangoodb",{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
        if(err)
        console.log(err)
        else
        console.log("connected")
    })
run()
async function run(){
    try{
        const Person=new person({name:"aya" ,age:5, favoriteFoods:["pizza","burger","burritos"]})
        await Person.save(function(err)
        {
            console.log(err)
        }
        )
        var arrayOfPeople=[{name:"amira" ,age:18, favoriteFoods:["coke"]},{name:"ahmed" ,age:25, favoriteFoods:["pizza","burritos","noodles"]}]
            await person.create(arrayOfPeople)
            var foundpeople=  await person.find({name:"amira"})
            console.log(foundpeople)
            var foundperson=  await person.find({favoriteFoods:"pizza"})
            console.log(foundperson)
            var foundbyid= await person.findById("63c8738d617b2d6c4e768981");
            console.log(foundbyid)
            await person.findByIdAndUpdate("63c8738d617b2d6c4e768981",{$push:{favoriteFoods:"lasgne"}});
            console.log(foundbyid)
            const filter = { name: 'aya' };
            const update = { age: 30 };
            let doc = await person.findOneAndUpdate(filter, update, {
            // new: true
                });
                console.log(doc)
            person.findByIdAndRemove("63c8738d617b2d6c4e768981", function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Removed User : ", docs);}
                })
                done();
                function done()
                {person.remove( {name:"amira"},function (err, result) {
                    if (err){
                        console.log(err)
                    }else{
                        console.log("Result :", result) 
                    }
                })}
                person.find({favoriteFoods:"burritos"}).sort({name:1}).limit(2).select({age:false}).exec().then ((err, data)=>{
                    if(err)
                    console.log(err)
                    else
                    console.log(data)
                }
                )
                
    }catch(e){console.log(e)}
   
}




