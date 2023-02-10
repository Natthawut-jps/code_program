const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/root?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2', {

})
.then(result => console.log('connection OK'))
.catch(err => console.log(err))

let ProductSchema = new mongoose.Schema({
    name: "root",
    price: 800,
    detail: "description",
    dete_added: "10/02/2566"
})

ProductSchema.plugin(paginate)

let Product = mongoose.model('Product', ProductSchema)

mongoose.model.exports = Product

