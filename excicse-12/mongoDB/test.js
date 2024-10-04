const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {serverSelectionTimeoutMS:2000})
    .then(async () => {
        console.log('Database connect');
        // await createUser({ name: 'user 1', email: 'user1@gmail.com' })
        // await createUser({ name: 'user 2', email: 'user2@gmail.com' })
        // await createUser({ name: 'user 3', email: 'user3@gmail.com' })
        // await createUser({ name: 'user 4', email: 'user4@gmail.com' })
        // await createUser({ name: 'user 5', email: 'user5@gmail.com' }) 
        // await createUser({ name: 'user 6', email: 'user6@gmail.com' }) 
        // await createUser({ name: 'user 7', email: 'user7@gmail.com' }) 
        // await createUser({ name: 'user 8', email: 'user8@gmail.com' }) 
        await AllUser();
    })
    .catch((e) => {
        console.log(e)
    })
    .finally(async ()=>{
        await mongoose.connection.close();
        console.log('Database connection closed');

    })


const Schema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model('User', Schema);
const createUser = async (data) => {
    const user = new User({ ...data });
    await user.save();
    console.log(`User created: ${user.name}`)
    return user;
}

const AllUser = async()=>{
    const persson = await User.find();
    console.log(persson)
}