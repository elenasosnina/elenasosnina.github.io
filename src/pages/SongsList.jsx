import React from "react";
import Songs from "../components/Songs.jsx";
import "./SongsList.css";

const SongsList = ({
  songs,
  isPlaying,
  currentSong,
  currentTime,
  duration,
  toggleSongPlay,
  onLikeChange,
  onSongSelect,
}) => {
  return (
    <div className="songs-list">
      <div className="every-song-in-list">
        {songs.map((song) => (
          <Songs
            key={song.id}
            song={song}
            isPlaying={isPlaying}
            currentSong={currentSong}
            currentTime={currentTime}
            toggleSongPlay={toggleSongPlay}
            onLikeChange={onLikeChange}
            onSongSelect={onSongSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default SongsList;
