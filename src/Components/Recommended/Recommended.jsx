// import React,{useEffect, useState} from 'react'
// import './Recommended.css'
// import { API_KEY, value_converter } from '../../data'
// import { Link } from 'react-router-dom'

// const Recommended = ({categoryId}) => {

//   const [apiData,setApiData]=useState([]);

//   const fetchData= async () =>{
//        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=45&videoCategoryId=${categoryId}&key=${API_KEY}`
//        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));

//   }
//   useEffect(()=>{
//       fetchData();
//   },[])

//   return (
//     <div className="recommended">
//       {apiData.map((items,index)=>{
//           return(
//             <Link to={`/video/${items.snippet.categoryId}/${items.id}`}key={index} className="side-video-list">
//             <img src={items.snippet.thumbnails.medium.url} alt="" />
//             <div className="vid-info">
//                 <h4>{items.snippet.title}</h4>
//                 <p>{items.snippet.channelTitle}</p>
//                 <p>{value_converter(items.statistics.viewCount)} views</p>
//             </div>
//           </Link>
//           )
//       })}
      
      
//     </div>
//   )
// }

// export default Recommended

import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=45&videoCategoryId=${categoryId}&key=${API_KEY}`;
    try {
      const res = await fetch(relatedVideo_url);
      const data = await res.json();

      // Check if data.items exists before setting the state
      if (data && data.items) {
        setApiData(data.items);
      } else {
        setApiData([]); // Set an empty array if items is undefined
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setApiData([]); // Set an empty array if there's an error
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className="recommended">
      {apiData.length > 0 ? (
        apiData.map((item, index) => (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} views</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No recommendations available</p>
      )}
    </div>
  );
};

export default Recommended;
