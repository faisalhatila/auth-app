import React from "react";
import { AiOutlinePause } from "react-icons/ai";
import { useStore } from "../../Hooks/useStore";
import classes from "./style.module.css";

const Token = ({ circleWidth, token, last }) => {
  const { num1, num2, img, title, id, timeLeft, percentage } = token;
  const {
    rootStore: { tokensStore },
  } = useStore();
  const radius = 30;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (percentage / 0.6)) / 100;
  React.useEffect(() => {
    const timer =
      percentage >= 0 &&
      percentage < 60 &&
      setInterval(() => {
        tokensStore.updateTime(id);
      }, 1000);
    return () => clearInterval(timer);
  }, [tokensStore]);

  return (
    <>
      <div
        className={[
          classes["token-wrapper"],
          last && classes["last-token-wrapper"],
          "d-flex",
          "align-items-center",
          "justify-content-between",
        ].join(" ")}
        data-testid={`token-${id}`}
      >
        <div className="d-flex align-items-center">
          <div className={classes["logo-wrapper"]}>
            <img alt={title} src={img} />
          </div>
          <div>
            <p className={classes["coin-title"]}>{title}</p>
            <p className={classes["auth-code"]}>{`${num1} ${num2}`}</p>
          </div>
          {/* <div>{`${num}`}</div> */}
          {/* <div>{`123 456`}</div> */}
        </div>
        <div style={{ position: "relative" }}>
          <svg
            width={circleWidth}
            height={circleWidth}
            viewBox={`0 0 ${circleWidth} ${circleWidth}`}
          >
            <circle
              cx={circleWidth / 2}
              cy={circleWidth / 2}
              strokeWidth="5px"
              r={radius}
              className={classes["circle-background"]}
              style={{
                stroke:
                  percentage / 0.6 >= 0 && percentage / 0.6 < 30
                    ? "green"
                    : percentage / 0.6 >= 30 && percentage / 0.6 < 60
                    ? "#12c2e9"
                    : percentage / 0.6 >= 60 && percentage / 0.6 < 90
                    ? "#d29736"
                    : "red",
              }}
            />
            <circle
              cx={circleWidth / 2}
              cy={circleWidth / 2}
              strokeWidth="5px"
              r={radius}
              className={classes["circle-progress"]}
              style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset,
              }}
              // transform={`rotate( -90 ${circleWidth / 2} ${circleWidth / 2})`}
              transform={`rotate( -90 ${circleWidth / 2} ${circleWidth / 2})`}
            />
            <text
              x="50%"
              y="50%"
              dy="0.3em"
              textAnchor="middle"
              className={classes["circle-text"]}
              style={{
                stroke:
                  percentage / 0.6 >= 0 && percentage / 0.6 < 30
                    ? "green"
                    : percentage / 0.6 >= 30 && percentage / 0.6 < 60
                    ? "#12c2e9"
                    : percentage / 0.6 >= 60 && percentage / 0.6 < 90
                    ? "#d29736"
                    : "red",
              }}
            >
              {Math.floor((timeLeft / 0.6) * 0.6)}
            </text>
          </svg>
          {/* <div
            style={{
              position: "absolute",
              top: `calc( 50% - 12px)`,
              left: `calc( 50% - 10px`,
            }}
            // onClick={() => setIsPlaying((ps) => !ps)}
            // onClick={() => handleClickPlay()}
          >
            <AiOutlinePause
              // onClick={() => setIsPlaying(true)}
              size={20}
              color={
                percentage / 0.6 >= 0 && percentage / 0.6 < 30
                  ? "green"
                  : percentage / 0.6 >= 30 && percentage / 0.6 < 60
                  ? "#12c2e9"
                  : percentage / 0.6 >= 60 && percentage / 0.6 < 90
                  ? "#d29736"
                  : "red"
              }
              style={{ transition: "all 0.5s ease" }}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default React.memo(Token);
