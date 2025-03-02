const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {    
        userId: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            max: 500,
        },
        img: {
            type: String,
        },
        likes: {
            type: Array,
            default: [],
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

if (!PostSchema) {
    console.error('스키마가 정의되지 않았습니다.');
    return;
}
if (!PostSchema.options) {
    console.error('스키마 옵션이 정의되지 않았습니다.');
    return;
}
if (!PostSchema.options.pluralization) {
    console.error('스키마 옵션 중 pluralization이 정의되지 않았습니다.');
    return;
}



module.exports = mongoose.model("Post", PostSchema);