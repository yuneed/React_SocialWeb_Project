import { useContext, useRef, useState } from 'react';
import './share.css';
import {PermMedia, Label,Room, EmojiEmotions, Cancel} from '@material-ui/icons';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function Share() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();

    // 포토, 비디오 파일 넣는 부분..(첨부파일)
    const [file, setFile] = useState(null);
    
    const submitHandler = async (e) => {
        e.preventDefault(); // 새로고침 방지
        const newPost = {
            userId:user._id,
            desc: desc.current.value
        }
        // 선택한 파일이 존재하는지 확인하고, 존재하는 경우 
        //FormData 객체를 만들어 파일을 첨부하고 파일 이름을 생성
        if(file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file)
            newPost.img = fileName;

            console.log(newPost);
            try {
                await axios.post("/upload", data);
            }catch(err) {
                console.log(err);
            }
        }
        // 업로드한 포드트(사진)를 게시물에 업데이트 될 수 있게 ~!
        try {
            await axios.post("/posts", newPost);
            window.location.reload(); //  현재 웹 페이지를 다시 로드
        }catch(err){

        }
    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' 
                    src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" />
                    <input className='shareInput' 
                    ref={desc} placeholder={user.username + " What do you think ?"}></input>
                </div>

                {/* 밑에 line */}
                <hr className='shareHr' />  
                {/* 내가 첨부한 사진이미지 보이게끔 */}
                {file && (
                    <div className="shareImgContainer">
                        <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                        <Cancel className='shareCancelImg' onClick={() => setFile(null)} />
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText'>Photo or Video</span>

                            {/* 파일 첨부하는곳  */}
                            <input style={{display: "none"}} 
                            type="file" id='file' accept='.png, .jpeg, .jpg' 
                            onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton' type='submit'>Share</button>
                </form>
            </div>
        </div>
        
    )
}