import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
const PlayVideo = () => {
  return (
    <div className='play-video'>
       <video src={video1} controls autoPlay muted ></video>
       <h3>best youtube channel</h3>
       <div className="play-video-info">
        <p>12526 views &bull; 2 days ago</p>
        <div>
            <span><img src={like} alt="" />125</span>
            <span><img src={dislike} alt="" />12</span>
            <span><img src={share} alt="" />share</span>
            <span><img src={save} alt="" />save</span>

        </div>
       </div>
       <hr />
       <div className="publisher">
        <img src={jack} alt="" />
        <div>
            <p>GreetStack</p>
            <span>1M suscribers</span>
        </div>
        <button>Subscribe</button>
       </div>
       <div className="vid-description">
        <p>channel that makes learning easy</p>
        <p>subscrine grret stacj to wayvlk mk</p>
        <hr />
        <h4>123 Comments</h4>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Jack Nichoson <span>i day ago</span></h3>
                <p>a golbal computer netwcbhvs jbxihb khksxbaub</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Jack Nichoson <span>i day ago</span></h3>
                <p>a golbal computer netwcbhvs jbxihb khksxbaub</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Jack Nichoson <span>i day ago</span></h3>
                <p>a golbal computer netwcbhvs jbxihb khksxbaub</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Jack Nichoson <span>i day ago</span></h3>
                <p>a golbal computer netwcbhvs jbxihb khksxbaub</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Jack Nichoson <span>i day ago</span></h3>
                <p>a golbal computer netwcbhvs jbxihb khksxbaub</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
       </div>

    </div>
  )
}

export default PlayVideo
