import React, { useState, useCallback, CSSProperties, useEffect } from "react";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";
import styles from "../index.module.css";
import { Router, useHistory } from "react-router-dom";
import useAudio from "../hooks/useAudio";
import { Howl } from "howler";
const pages = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightpink" }}>1</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightblue" }}>3</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightgreen" }}>
      2
    </animated.div>
  ),
];

export default function Load(props) {
  const sound = new Howl({
    src: ["/media/button2.mp3"],
  });
  const startGame = new Howl({
    src: ["/media/startGame2.mp3"],
    volume: 0.2,
  });
  const [index, setIndex] = useState(0);
  const onClick = useCallback(() => setIndex((state) => (state + 1) % 3), []);
  const transRef = useSpringRef();
  const history = useHistory();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  let cont = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      onClick();
      transRef.start();
      cont++;
      sound.play();

      if (cont > 3) {
        clearInterval(interval);
        startGame.play();
        history.push({
          pathname: "/level",
          search: `?_id=${props.userId}`,
          state: {
            _id: props.userId,
          },
        });
      }
    }, 1500);
  }, []);
  return (
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} />;
      })}
    </div>
  );
}
