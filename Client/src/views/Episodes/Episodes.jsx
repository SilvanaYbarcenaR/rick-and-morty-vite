import { useEffect, useState } from "react";
import styleEpisodes from "./Episodes.module.css";
import YouTube from 'react-youtube';
import axios from "axios";
import popcorn from "../../assets/popcorn.png";
import tv from "../../assets/tv.png";
import tvGif from "../../assets/tvgif.gif";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [player, setPlayer] = useState(null);
  const [backgroundTv, setBackgroundTv] = useState("");
  const [visible, setVisible] = useState("hidden");
  const [filterClass, setFilterClass] = useState("");
  const [mute, setMute] = useState("");
  
  const getEpisodes = () => {
    axios(`http://localhost:3001/rickandmorty/episodesVideos`)
        .then(({ data }) => {
            if (data.length) {
            setEpisodes(data);
            }
        })
        .catch((error) => {
            alert('¡No hay episodios disponibles!');
        })
    }
    const onReady = (e) => {
        setPlayer(e.target);
    };
    const onPlayHandler = () => {
        player.playVideo();
    };
    const onPauseHandler = () => {
        player.pauseVideo();
    };
    const handleEpisode = (url) => {
        setVideoUrl(url).then(( ) => onPlayHandler());
    }
    const handleFilter = (url) => {
        setBackgroundTv(url);
        visible === "hidden" ? setVisible("visible") : setVisible("hidden")
    }
    const handleMute = (muteVideo) => {
        setMute(!mute);
        muteVideo ? player.mute() : player.unMute();
    }

    useEffect(() => {
      getEpisodes();
    },[])

    return (
        <div className={styleEpisodes.episodesContainer}>
            <div className={styleEpisodes.tvContainer}>
                <img src={popcorn} className={styleEpisodes.popcorn}/>
                <div className={styleEpisodes.wing}><span>LET'S ENJOY!</span></div>
                <div className={`${styleEpisodes.filterContent} ${styleEpisodes[filterClass]}`}>
                    <img src={tvGif} className={styleEpisodes.tvGif}/>
                    {videoUrl && <YouTube
                        videoId={videoUrl}
                        onReady={onReady}
                        opts={{
                            playerVars: {
                            controls: 0,
                            autoplay: 1,
                            },
                        }}
                    />}
                </div>
                
                <img src={tv} className={styleEpisodes.tv}/>
                <span className={styleEpisodes.filterText}>{mute !== "" && (mute ? "MUTED" : "")}</span>
                <div className={styleEpisodes.filterImage} style={{backgroundImage: backgroundTv, visibility: visible}}></div>
                <div className={styleEpisodes.buttonsContainer}>
                    <button onClick={onPlayHandler}>Play</button>
                    <button onClick={onPauseHandler}>Pause</button>
                </div>
                <div className={styleEpisodes.filtersContainer}>
                    <button onClick={() => handleMute(mute === "" ? true : !mute)}></button>
                    <button onClick={() => handleFilter("url('https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571119227/vhs-overlay_zpzs7x.png')")}></button>
                    <button onClick={() => handleFilter(() => setFilterClass(filterClass === "" ? "rainbow" : ""))}></button>
                    <button onClick={() => handleFilter(() => setFilterClass(filterClass === "" ? "bright" : ""))}></button>
                    <button onClick={() => handleFilter(() => setFilterClass(filterClass === "" ? "grayscale" : ""))}></button>
                </div>
                <div className={styleEpisodes.listContainer}>
                    {
                        episodes?.map(({ id, season, episode, part, url}) => {
                            return (
                                <button onClick={() => handleEpisode(url)} key={id}>
                                    S{season} E{episode} Part {part}
                                </button>
                            )
                        })
                    }
                </div> 
            </div>
        </div>
    )
}

export default Episodes;