import AppRouter from "./routers/AppRouter";
import useAudio from "./hooks/useAudio";
import { useEffect } from "react";

function App() {
  const { play, hasInteracted } = useAudio({
    src: "/media/song2.mp3",
    volume: 0.2,
    loop: true,
  });

  useEffect(() => {
    play();
  }, [hasInteracted]);

  return (
    <div>
      <div className="fondo">
        <div className="content">
          <AppRouter />
        </div>
      </div>
      <div className="sol"></div>
      <div className="nubes"></div>
      <div className="ciudad"></div>
      {/*
      <div className="bici">
        <div className="llanta llan1"></div>
        <div className="marco"></div>
        <div className="llanta llan2"></div>
      </div>
      
      */}
    </div>
  );
}

export default App;
