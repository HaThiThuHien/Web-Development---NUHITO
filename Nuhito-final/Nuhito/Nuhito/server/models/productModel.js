const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    style: {
        type: String,
        trim: true,
        required: true
    },
    color: {
        type: String,
        trim: true,
        required: true
    },
    material: {
        type: String,
        trim: true,
        required: true
    },
    image1: {
        type: Object,
        required: true
    },
    image2: {
        type: Object,
        required: true
    },
    image3: {
        type: Object,
        required: true
    },
    image4: {
        type: Object,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    sold: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true //important
})

module.exports = mongoose.model("Products", productSchema)