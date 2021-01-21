import React from 'react';

function Tracks({ topTracks }) {
  const topTracksData = topTracks?.items ?? [];
  return (
    <div className="container tracklist">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <h1>Top tracks this month</h1>
          <p>Here's my top tracks on Spotify updated daily.</p>
          <div className="list-group">
            {topTracksData.slice(0, 5).map((track, index) => {
              const images = track?.album?.images?.[2]?.url ?? '';
              const artists = track.artists.map((_artist) => _artist.name).join(', ');
              return (
                <a href={track.external_urls.spotify} target="_blank" className="list-group-item  list-group-item-action">
                  <div className="d-flex flex-row">
                    <div className="p-2">
                      <img
                        src={images}
                        width="50"
                        className="rounded float-left"
                        alt="..."
                      />
                    </div>
                    <div className="p-2">
                      <p className="track-title">{track.name}</p>
                      <p className="track-artists">{artists}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracks;
