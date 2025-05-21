import React, { useState, useEffect } from "react";
import "./AlbumPage.css";
import Dropdown from "../components/MenuSong";
import Songs from "../components/Songs";
import coverSong from "../assets/party.webp";
import coverSong2 from "../assets/login.jpg";
import audioCover from "../assets/Justin Bieber - All Around The World.mp3";
import audioCover2 from "../assets/Xxxtentacion_John_Cunningham_-_changes_54571393.mp3";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ShareModalWindow,
  ModalWindowInformation,
} from "../components/ModalWindows";

const AlbumPage = ({
  isPlaying,
  currentSong,
  currentTime,
  duration,
  toggleSongPlay,
  onLikeChange,
  audioRef,
  setSongs,
  songs,
  onSongSelect,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);
  const handleOpenModal = (modalType) => {
    setIsModalOpen(true);
    setCurrentModal(modalType);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentModal(null);
  };
  const options = [
    {
      label: "Поделиться",
      action: () => {
        handleOpenModal("share");
      },
    },
    {
      label: "Добавить в избранное",
      action: () => {
        handleOpenModal("addToFav");
      },
    },
  ];
  const [initialSongs, setInitialSongs] = useState([
    {
      id: 1,
      title: "All Around The World",
      artist: "Justin Bieber",
      audio: audioCover,
      cover: coverSong,
      liked: true,
      lyrics: "cklfadsfdfdsfdfdgf",
      producer: "ufgsdufk",
      authorLyrics: "41324",
      composer: "ewreq",
      rights: "142343",
      duration: "01:02",
      url: "https://jfgdhufdg.ru/playlist/244124",
    },
    {
      id: 2,
      title: "change",
      artist: "XXXTENTACION",
      audio: audioCover2,
      cover: coverSong2,
      liked: true,
      producer: "htfshfjh",
      authorLyrics: "24321413243",
      composer: "4321532413",
      rights: "324",
      lyrics: "32414",
      duration: "02:02",
      url: "https://jfgdhufdg.ru/playlist/fdgs41",
    },
    {
      id: 3,
      title: "Diver",
      artist: "Nico",
      audio: audioCover,
      cover: coverSong,
      liked: false,
      producer: "jkj",
      authorLyrics: "hjh",
      composer: "jikj",
      rights: "khj",
      lyrics: "cklgf",
      duration: "02:22",
      url: "https://jfgdhufdg.ru/playlist/000hkjf",
    },
    {
      id: 4,
      title: "Yet 5657 Song",
      artist: "Different Artist",
      audio: audioCover2,
      cover: coverSong2,
      liked: false,
      producer: "jk32421j",
      authorLyrics: "h32421jh",
      composer: "j3241ikj",
      rights: "k343hj",
      lyrics: "ckl3432gf",
      duration: "02:32",
      url: "https://jfgdhufdg.ru/playlist/ewkhrueige4",
    },
    {
      id: 5,
      title: "change",
      artist: "XXXTENTACION",
      audio: audioCover2,
      cover: coverSong2,
      liked: true,
      producer: "htfshfjh",
      authorLyrics: "24321413243",
      composer: "4321532413",
      rights: "324",
      lyrics: "32414",
      duration: "02:02",
      url: "https://jfgdhufdg.ru/playlist/fdgs41",
    },
    {
      id: 6,
      title: "Another Song",
      artist: "Some Artist",
      audio: audioCover,
      cover: coverSong,
      liked: false,
      producer: "jkj",
      authorLyrics: "hjh",
      composer: "jikj",
      rights: "khj",
      lyrics: "cklgf",
      duration: "02:22",
      url: "https://jfgdhufdg.ru/playlist/000hkjf",
    },
    {
      id: 7,
      title: "Yet 5657 Song",
      artist: "Different Artist",
      audio: audioCover2,
      cover: coverSong2,
      liked: false,
      producer: "jk32421j",
      authorLyrics: "h32421jh",
      composer: "j3241ikj",
      rights: "k343hj",
      lyrics: "ckl3432gf",
      duration: "02:32",
      url: "https://jfgdhufdg.ru/playlist/ewkhrueige4",
    },
  ]);

  useEffect(() => {
    setSongs(initialSongs);
  }, [setSongs, initialSongs]);

  const handleLikeChangeInternal = (songId) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === songId ? { ...song, liked: !song.liked } : song
      )
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const location = useLocation();
  const album = location.state?.album;

  useEffect(() => {
    if (!album) {
      console.error("Album data is missing in location.state");
      navigate("/");
    }
  }, [album, navigate]);
  if (!album) {
    return <div>Loading...</div>;
  }
  return (
    <div className="main-al">
      <div className="album-component">
        <div className="album-cover">
          <img
            className="main-cover-album"
            src={album.cover}
            alt="Album Cover"
          />
          <div
            className="block-menu-album"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="menu-album"></div>
          </div>
          {isHovered && (
            <div
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Dropdown options={options} />
            </div>
          )}
          {currentModal === "share" && (
            <ShareModalWindow onClose={handleCloseModal} link={album.url} />
          )}
          {currentModal === "addToFav" && (
            <ModalWindowInformation
              onClose={handleCloseModal}
              showCancelButton={false}
              confirmButtonText={"Ок"}
              onConfirm={handleCloseModal}
              message={"Выбранный альбом добавлен в Избранное"}
            />
          )}
          <div className="main-timing">1ч 24м</div>
        </div>
        <div className="album-page-info">
          <div className="album-page-tracklist">
            <h1>{album.title}</h1>
            {songs.map((song) => (
              <Songs
                key={song.id}
                song={song}
                isPlaying={isPlaying}
                currentSong={currentSong}
                currentTime={currentTime}
                toggleSongPlay={toggleSongPlay}
                onLikeChange={handleLikeChangeInternal}
                onSongSelect={onSongSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
