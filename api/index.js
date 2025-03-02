const express = require('express');
const helmet  = require('helmet');
const app = express();
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const path = require("path");
const multer = require('multer');


async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

connectToDatabase();

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(express.json());
app.use(helmet());
//app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));  // CORS문제로 이미지 안 나옴 해결 완료!!
app.use(morgan('common'));


 //destination: 업로드된 파일이 저장될 디렉토리 경로를 설정하는 콜백 함수 매개변수1 Error 객체, 
// 매개변수2 업로드된   파일 객체이고, 매개변수3 콜백 함수
const storage = multer.diskStorage({
    destination:(req, file, cb) => {    
        cb(null, "public/images"); // error는 null
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name); // 업로드된 파일의 이름을 그대로 유지
    }
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploaded successfully.")
    }catch(err) {
        console.log(err);
    }
})

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute)


app.listen(8800, () => {
    console.log('backend server is running!!');
})