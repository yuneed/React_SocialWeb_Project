import { Users } from '../../FriendPostData';
import './rightbar.css';
import Online from '../online/Online';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {Add} from '@material-ui/icons';
import RemoveIcon from '@material-ui/icons/Remove';


export default function Rightbar({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);
    const {user:currentUser, dispatch} = useContext(AuthContext);
    const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id));

    // useEffect(() => {
    //     setFollowed(currentUser.followings.includes(user?.id))
    // }, [currentUser, user.id]);

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user._id);
                setFriends(friendList.data);
            }catch(err){
                console.log(err);
            }
        };
        getFriends();
    }, [user]);

    const handleClick = async () => {
        try {
            if(followed){
                await axios.put(`/users/${user._id}/unfollow`, {userId:currentUser._id});

                // type: 액션 유형
                dispatch({type : "UNFOLLOW", payload: user._id});
            }else{
                await axios.put(`/users/${user._id}/follow`, {
                    userId : currentUser._id
                });

                dispatch({type: "FOLLOW", payload: user._id})
            }
            setFollowed(!followed);
        }catch(err) {
            console.log(err);
        }
    }

    // 홈 페이지 부분에서의 오른쪽 생일 바 부분
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="/assets/gift.png" alt="" />
                    <span className='birthdayText'><b>Song Hye Kyo</b> and <b>3 other friends</b> have a birthday today.</span>
                </div>
                {/* 생일 부분 끝 */}

                <img className='rightbarAd' src="assets/birth.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>

                {/* 친구 리스트 시작 */}
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                    
                </ul>
            </>
        )
    }

    // 프로필 부분에서의 오른쪽 바 부분
    const ProfileRightbar = () => {
        return (
            <>
            {user.username !== currentUser.username && (
                <button className="rightbarFollowButton" onClick={handleClick}>
                    {followed ? "Unfollow" : "Follow"}
                    {followed ? <RemoveIcon/> : <Add/>}
                </button>
            )}
                <h4 className='rightbarTitle'>User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Native:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">
                            {user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}
                        </span>
                    </div>
                </div>

                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                {friends.map((friend) => (
                    <Link
                        to={"/profile/" + friend.username}
                        style={{ textDecoration: "none" }}
                    >
                    <div className="rightbarFollowing">
                        <img
                        src={
                            friend.profilePicture
                            ? PF + friend.profilePicture
                            : PF + "person/noAvatar.png"
                        }
                        alt=""
                        className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">{friend.username}</span>
                    </div>
                    </Link>
                ))}
                </div>
            </>
        );
    };

    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar/> : <HomeRightbar/> }
            </div>
        </div>
    )
}