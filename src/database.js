import mongoose from 'mongoose';

const servidor = 'localhost:27017';
const db = 'studentsDB';

let mongoLocal = `mongodb://${servidor}/${db}`;

mongoose.connect(mongoLocal, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log("Se conecto a mongo"))
    .catch(error => console.log(error))