const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/root?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2', {

})
.then(result => console.log('connection OK'))
.catch(err => console.log(err))
