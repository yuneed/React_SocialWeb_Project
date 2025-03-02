const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({    
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    desc: {
        type: String,
        max: 50
    },
    city: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 50
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    }
},
    {   
        timestamps: true,
        versionKey: false,
        pluralization: true
    }
);

// if (!UserSchema.options || !('pluralization' in      UserSchema.options)) {
//     console.error('Mongoose schema가 정의되어 있지 않습니다.');
//     process.exit(1); // 애플리케이션 종료
// }

if (!UserSchema) {
    console.error('스키마가 정의되지 않았습니다.');
    return;
}
if (!UserSchema.options) {
    console.error('스키마 옵션이 정의되지 않았습니다.');
    return;
}
if (!UserSchema.options.pluralization) {
    console.error('스키마 옵션 중 pluralization이 정의되지 않았습니다.');
    return;
}



module.exports = mongoose.model("User", UserSchema);