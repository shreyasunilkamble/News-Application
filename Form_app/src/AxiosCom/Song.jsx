// import React from 'react'

// function Song() {
//     const baseurl = "https://itunes.apple.com/search?term=Arijit+Singh&entity=song&limit=10"

//     // const[song,setSong] = useState([]);

//     // useEffect(()=>{
//     //     Axios.get(baseurl).then((response)=>{
//     //         setSong(response.data)
//     //     })
//     // })

//     fetch(baseurl).then(response => response.json()).then(data => {
//     console.log(data.results);
//   });

//   return (
//     <div>
//           {/* <h2>{song.trackName}</h2>
//           <h2>{song.artistName}</h2>
//          <h2>{song.artworkUrl100}</h2>
//          <h2>{song.previewUrl}</h2> */}

//          {data.results.forEach(song => {
//          console.log(song.trackName);
//           console.log(song.artistName);
//           console.log(song.artworkUrl100);
//            console.log(song.previewUrl);
//            })
//            }


//     </div>
//   )
// }

// export default Song

import React, { useEffect, useState } from "react";

function Song() {
  const baseurl ="https://itunes.apple.com/search?term=Arijit+Singh&entity=song&limit=10";

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setSongs(data.results);
      });
  }, []);

  return (
    <div>
      <h1>Arijit Singh Songs</h1>

      {songs.map((song) => (
        <div key={song.trackId}>
          <h2>{song.trackName}</h2>

          <h3>{song.artistName}</h3>

          <img src={song.artworkUrl100} alt={song.trackName} />

          <br />

          <audio controls>
            <source src={song.previewUrl}  type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </div>
  );
}

export default Song