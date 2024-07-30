const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ttchanell", { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>
    console.log("sucess ---s")
).catch((err) => console.error("Error connecting to MongoDB ----:", err));

// Here found warning then using below code 
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/ttchanell")
//   .then(() => console.log("MongoDB connected--------s"))
//   .catch((err) => console.error("Error connecting to MongoDB:-------f",err));

// Define playlist schema ()

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// Create playlist model
const Playlist = new mongoose.model("Playlist", playlistSchema);
// const Playlist(class is here Playlist) = new mongoose.model("Playlist (Playlist p capital and sigular create when run =
//  playlists)", playlistSchema);

// cretae doucment or insert

const createDocument = async () => {
    try {
        const five = new Playlist({
            name: "five",
            ctype: "five dev",
            videos: 80,
            author: "authorised",
            active: true,
        })
        const six = new Playlist({
            name: "six",
            ctype: "six dev",
            videos: 50,
            author: "authorised",
            active: true,
        })
        const seven = new Playlist({
            name: "seven",
            ctype: "seven dev",
            videos: 155,
            author: "authorised",
            active: true,
        })

        const result = await Playlist.insertMany([five, six, seven]);
        console.log(result)

    } catch (error) {
        console.log(error, "show error")
    }
}
// createDocument();

const getDocument = async () => {
    try {
        const result = await Playlist.updateOne({ name: "two" }, { $set: { name: "nine" } })
        console.log(result);
    } catch (error) {
        console.log(error, "Here found error");
    }
};

// getDocument();

const updateDocument = async (_id) => {
    try {
        const result = await Playlist.findByIdAndUpdate({ _id }, { $set: { name: "six in" } }, { useFindAndMidify: false, new: true });
        console.log(result);
    } catch (error) {
        console.log(error, "Here found error");
    }
};
updateDocument("65fc033bc516427a0b4e6dc0");


// const updateDocument = async (_id) => {
//     try {
//         const result = await Playlist.updateOne({_id},{$set : {name : "six in"}},{useFindAndMidify:false,new : true});
//         console.log(result);
//     } catch (error) {
//         console.log(error, "Here found error");
//     }
// };

//updateDocument("65fc033bc516427a0b4e6dc0"); 



const deleteDocument = async (_id) => {
    try {
        // const result = await Playlist.deleteOne({ _id });
        //     const result = await Playlist.deleteMany({_id});
        const result = await Playlist.findByIdAndDelete({ _id });

        console.log(result);
    } catch (error) {
        console.log(error, "Here found error");
    }
};
deleteDocument("65fc021946d88aebca6760d8");













































































