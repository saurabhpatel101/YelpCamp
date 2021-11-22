const mongoose = require('mongoose');
const cities = require('./cities');
const {places,descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');

const uri = "mongodb+srv://saurabh01:solution28@cluster0.4rrtc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",() => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random()*array.length)];
const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i = 0;i<300;i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            //YOUR USER ID
            author:'61063a0da4128804740d54cb',
            location:`${cities[random1000].city}, ${cities[random1000].states}`,
            title:`${sample(descriptors)} ${sample(places)}`,
            // image:'https://source.unsplash.com/collection/483251',
            description:'This is description',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images:[
                {
                    url: 'https://res.cloudinary.com/dxnrkaddu/image/upload/v1628078146/YelpCamp/ow7hnw3jmeodwkkgdrvw.jpg',
                    filename: 'YelpCamp/ow7hnw3jmeodwkkgdrvw'
                }
            ]
                  
        })
        await camp.save();
    }
   
}

seedDB().then(() =>{
    mongoose.connection.close();
})