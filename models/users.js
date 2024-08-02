const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    psn: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    conference: {
        type: String,
        required: true
    },
    record: {
        wins: {
            type: Number,
            required: true
        },
        losses: {
            type: Number,
            required: true
        }
    },
    logo: {
        type: String,
        required: true
    },
    stadium: {
        type: String,
        required: true
    },
    teamFont : {
        type: String,
        required: true
    },
    awards: {
        type: String,
        required: true
    },
    fiveStars: {
        type: Number,
        required: true
    },
    fourStars: {
        type: Number,
        required: true
    },
    threeStars: {
        type: Number,
        required: true
    },
    twoStars: {
        type: Number,
        required: true
    },
    oneStars: {
        type: Number,
        required: true
    },
    totalCommits: {
        type: Number,
        required: true
    },
    recruitingRank: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('User', userSchema);
