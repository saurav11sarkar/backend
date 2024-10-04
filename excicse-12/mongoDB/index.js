const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: [3, 'minimun 3 chars'],
        maxlength: [10, 'maxmun 10 chars'],
    },
    lastname: String,
    email: String,
    age: Number,
    bio: String,
    single: Boolean
})

const Person = mongoose.model('Person', personSchema)

mongoose.connect('mongodb://localhost:27017/mon-demo')
    .then(async () => {
        console.log('Mongodb connected');
        // const person = new Person({
        //     firstname: 'saurav',
        //     lastname: 'sarkar',
        //     email: 'sarkar@gmail.com',
        //     age: 24,
        //     bio: 'I am  a developer',
        //     single: true,
        // });

        // full kaj shesh seve kra lagbes
        // await person.save();

        const person = new Person({
            firstname: 'user1'
        })
        await person.save()

        // const people = await Person.find({firstname: 'saurav'})
        // console.log(people)

        console.log('parson created');

    }).catch((e) => {
        console.log(e)
    }).finally(() => {
        mongoose.connection.close()
    })