import { useEffect, useState } from "react";
import useInterval from "use-interval";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const zoom = 20;

const areaWidth = 30;

const areaHeight = 30;

export default function Home() {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [food, setFood] = useState({
    top: getRandomInt(areaHeight - 1),
    left: getRandomInt(areaWidth - 1),
  });

  const [score, setScore] = useState(-1);

  const [highScore, setHighScore] = useState("");

  const [body, setbody] = useState([
    { top: 3, left: 7 },
    { top: 3, left: 6 },
    { top: 3, left: 5 },
  ]);

  const [speed, setSpeed] = useState("1");

  const WallTypes = ["box", "vertical", "horizontal"];

  const [locate, setlocate] = useState();

  const Levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = (event) => {
    setSpeed(event.target.value);
  };

  const handleChangeWall = (event) => {
    if (event.target.value === "box") {
      setlocate(box);
    } else if (event.target.value === "vertical") {
      setlocate(vertical);
    }else if (event.target.value === "horizontal") {
      setlocate(horizontal);
    }
  };

  const box = [
    { top: 0, left: 0 },
    { top: 1, left: 0 },
    { top: 2, left: 0 },
    { top: 3, left: 0 },
    { top: 4, left: 0 },
    { top: 5, left: 0 },
    { top: 6, left: 0 },
    { top: 7, left: 0 },
    { top: 8, left: 0 },
    { top: 9, left: 0 },
    { top: 10, left: 0 },
    { top: 11, left: 0 },
    { top: 12, left: 0 },
    { top: 13, left: 0 },
    { top: 14, left: 0 },
    { top: 15, left: 0 },
    { top: 16, left: 0 },
    { top: 17, left: 0 },
    { top: 18, left: 0 },
    { top: 19, left: 0 },
    { top: 20, left: 0 },
    { top: 21, left: 0 },
    { top: 22, left: 0 },
    { top: 23, left: 0 },
    { top: 24, left: 0 },
    { top: 25, left: 0 },
    { top: 26, left: 0 },
    { top: 27, left: 0 },
    { top: 28, left: 0 },
    { top: 29, left: 0 },
    { top: 0, left: 29 },
    { top: 1, left: 29 },
    { top: 2, left: 29 },
    { top: 3, left: 29 },
    { top: 4, left: 29 },
    { top: 5, left: 29 },
    { top: 6, left: 29 },
    { top: 7, left: 29 },
    { top: 8, left: 29 },
    { top: 9, left: 29 },
    { top: 10, left: 29 },
    { top: 11, left: 29 },
    { top: 12, left: 29 },
    { top: 13, left: 29 },
    { top: 14, left: 29 },
    { top: 15, left: 29 },
    { top: 16, left: 29 },
    { top: 17, left: 29 },
    { top: 18, left: 29 },
    { top: 19, left: 29 },
    { top: 20, left: 29 },
    { top: 21, left: 29 },
    { top: 22, left: 29 },
    { top: 23, left: 29 },
    { top: 24, left: 29 },
    { top: 25, left: 29 },
    { top: 26, left: 29 },
    { top: 27, left: 29 },
    { top: 28, left: 29 },
    { top: 29, left: 29 },
    { top: 0, left: 0 },
    { top: 0, left: 1 },
    { top: 0, left: 2 },
    { top: 0, left: 3 },
    { top: 0, left: 4 },
    { top: 0, left: 5 },
    { top: 0, left: 6 },
    { top: 0, left: 7 },
    { top: 0, left: 8 },
    { top: 0, left: 9 },
    { top: 0, left: 10 },
    { top: 0, left: 11 },
    { top: 0, left: 12 },
    { top: 0, left: 13 },
    { top: 0, left: 14 },
    { top: 0, left: 15 },
    { top: 0, left: 16 },
    { top: 0, left: 17 },
    { top: 0, left: 18 },
    { top: 0, left: 19 },
    { top: 0, left: 20 },
    { top: 0, left: 21 },
    { top: 0, left: 22 },
    { top: 0, left: 23 },
    { top: 0, left: 24 },
    { top: 0, left: 25 },
    { top: 0, left: 26 },
    { top: 0, left: 27 },
    { top: 0, left: 28 },
    { top: 0, left: 29 },
    { top: 29, left: 0 },
    { top: 29, left: 1 },
    { top: 29, left: 2 },
    { top: 29, left: 3 },
    { top: 29, left: 4 },
    { top: 29, left: 5 },
    { top: 29, left: 6 },
    { top: 29, left: 7 },
    { top: 29, left: 8 },
    { top: 29, left: 9 },
    { top: 29, left: 10 },
    { top: 29, left: 11 },
    { top: 29, left: 12 },
    { top: 29, left: 13 },
    { top: 29, left: 14 },
    { top: 29, left: 15 },
    { top: 29, left: 16 },
    { top: 29, left: 17 },
    { top: 29, left: 18 },
    { top: 29, left: 19 },
    { top: 29, left: 20 },
    { top: 29, left: 21 },
    { top: 29, left: 22 },
    { top: 29, left: 23 },
    { top: 29, left: 24 },
    { top: 29, left: 25 },
    { top: 29, left: 26 },
    { top: 29, left: 27 },
    { top: 29, left: 28 },
    { top: 29, left: 29 },
  ];
  
  const vertical = [
    { top: 0, left: 0 },
    { top: 0, left: 1 },
    { top: 0, left: 2 },
    { top: 0, left: 3 },
    { top: 0, left: 4 },
    { top: 0, left: 5 },
    { top: 0, left: 6 },
    { top: 0, left: 7 },
    { top: 0, left: 8 },
    { top: 0, left: 9 },
    { top: 0, left: 10 },
    { top: 0, left: 11 },
    { top: 0, left: 12 },
    { top: 0, left: 13 },
    { top: 0, left: 14 },
    { top: 0, left: 15 },
    { top: 0, left: 16 },
    { top: 0, left: 17 },
    { top: 0, left: 18 },
    { top: 0, left: 19 },
    { top: 0, left: 20 },
    { top: 0, left: 21 },
    { top: 0, left: 22 },
    { top: 0, left: 23 },
    { top: 0, left: 24 },
    { top: 0, left: 25 },
    { top: 0, left: 26 },
    { top: 0, left: 27 },
    { top: 0, left: 28 },
    { top: 0, left: 29 },
    { top: 29, left: 0 },
    { top: 29, left: 1 },
    { top: 29, left: 2 },
    { top: 29, left: 3 },
    { top: 29, left: 4 },
    { top: 29, left: 5 },
    { top: 29, left: 6 },
    { top: 29, left: 7 },
    { top: 29, left: 8 },
    { top: 29, left: 9 },
    { top: 29, left: 10 },
    { top: 29, left: 11 },
    { top: 29, left: 12 },
    { top: 29, left: 13 },
    { top: 29, left: 14 },
    { top: 29, left: 15 },
    { top: 29, left: 16 },
    { top: 29, left: 17 },
    { top: 29, left: 18 },
    { top: 29, left: 19 },
    { top: 29, left: 20 },
    { top: 29, left: 21 },
    { top: 29, left: 22 },
    { top: 29, left: 23 },
    { top: 29, left: 24 },
    { top: 29, left: 25 },
    { top: 29, left: 26 },
    { top: 29, left: 27 },
    { top: 29, left: 28 },
    { top: 29, left: 29 },
  ];
  
  const horizontal = [
    { top: 0, left: 0 },
    { top: 1, left: 0 },
    { top: 2, left: 0 },
    { top: 3, left: 0 },
    { top: 4, left: 0 },
    { top: 5, left: 0 },
    { top: 6, left: 0 },
    { top: 7, left: 0 },
    { top: 8, left: 0 },
    { top: 9, left: 0 },
    { top: 10, left: 0 },
    { top: 11, left: 0 },
    { top: 12, left: 0 },
    { top: 13, left: 0 },
    { top: 14, left: 0 },
    { top: 15, left: 0 },
    { top: 16, left: 0 },
    { top: 17, left: 0 },
    { top: 18, left: 0 },
    { top: 19, left: 0 },
    { top: 20, left: 0 },
    { top: 21, left: 0 },
    { top: 22, left: 0 },
    { top: 23, left: 0 },
    { top: 24, left: 0 },
    { top: 25, left: 0 },
    { top: 26, left: 0 },
    { top: 27, left: 0 },
    { top: 28, left: 0 },
    { top: 29, left: 0 },
    { top: 0, left: 29 },
    { top: 1, left: 29 },
    { top: 2, left: 29 },
    { top: 3, left: 29 },
    { top: 4, left: 29 },
    { top: 5, left: 29 },
    { top: 6, left: 29 },
    { top: 7, left: 29 },
    { top: 8, left: 29 },
    { top: 9, left: 29 },
    { top: 10, left: 29 },
    { top: 11, left: 29 },
    { top: 12, left: 29 },
    { top: 13, left: 29 },
    { top: 14, left: 29 },
    { top: 15, left: 29 },
    { top: 16, left: 29 },
    { top: 17, left: 29 },
    { top: 18, left: 29 },
    { top: 19, left: 29 },
    { top: 20, left: 29 },
    { top: 21, left: 29 },
    { top: 22, left: 29 },
    { top: 23, left: 29 },
    { top: 24, left: 29 },
    { top: 25, left: 29 },
    { top: 26, left: 29 },
    { top: 27, left: 29 },
    { top: 28, left: 29 },
    { top: 29, left: 29 },
  ];
  
  const [direction, setDirection] = useState("right");
  useEffect((e) => {
    generateFood();
    setHighScore(window.localStorage.getItem("Score"));
    window.addEventListener(`keydown`, (e) => {
      setDirection((prevDirection) => {
        switch (e.code) {
          case "ArrowLeft":
            if (prevDirection !== `right`) {
              return "left";
            }
            break;
          case "ArrowRight":
            if (prevDirection !== `left`) {
              return "right";
            }
            break;
          case "ArrowUp":
            if (prevDirection !== `down`) {
              return `up`;
            }
            break;
          case "ArrowDown":
            if (prevDirection !== `up`) {
              return `down`;
            }
            break;
        }
        return prevDirection;
      });
    });
  }, []);
  
  function generateFood() {
    const top = getRandomInt(areaHeight - 1);
    const left = getRandomInt(areaWidth - 1);
    for (let i = 0; i < body.length; i++) {
      if (top !== body[i].top && left !== body[i].left) {
        setFood({ top, left });
        setScore(score + 1);
      }
    }
  }
  
  useInterval(() => {
    end();
  }, 100);

  const end = () => {
    const deleteSnake = [...body];
    deleteSnake.shift();
    if (
      deleteSnake.find((e) => e.top === body[0].top && e.left === body[0].left)
    ) {
      if (score > window.localStorage.getItem("Score")) {
        window.localStorage.setItem("Score", score);
      }
      alert("Game Over");
      location.reload();
    }
  };

  function goRight() {
    const newbody = [...body];
    newbody.pop();
    let newLeft = newbody[0].left + 1;
    if (newLeft > areaWidth - 1) {
      newLeft = 0;
    }
    newbody.unshift({ ...newbody[0], left: newLeft });
    setbody(newbody);
  }

  function goDown() {
    const newbody = [...body];
    newbody.pop();
    let newTop = newbody[0].top + 1;
    if (newTop > areaHeight - 1) {
      newTop = 0;
    }
    newbody.unshift({ ...newbody[0], top: newTop });
    setbody(newbody);
  }

  function goLeft() {
    const newbody = [...body];
    newbody.pop();
    let newRight = newbody[0].left - 1;

    if (newRight < 0) {
      newRight = areaWidth - 1;
    }
    newbody.unshift({ ...newbody[0], left: newRight });
    setbody(newbody);
  }
  function goUp() {
    const newbody = [...body];
    newbody.pop();
    let newBottom = newbody[0].top - 1;
    if (newBottom < 0) {
      newBottom = areaHeight - 1;
    }
    newbody.unshift({ ...newbody[0], top: newBottom });
    setbody(newbody);
  }
  useInterval(() => {
    switch (direction) {
      case "right":
        goRight();
        break;
      case "down":
        goDown();
        break;
      case "left":
        goLeft();
        break;
      case "up":
        goUp();
        break;
    }

    if (body[0].top === food.top && body[0].left === food.left) {
      generateFood();
      setbody([...body, body[1]]);
    }

    if (
      locate &&
      locate.find((e) => e.top === body[0].top && e.left === body[0].left)
    ) {
      if (score > window.localStorage.getItem("Score")) {
        window.localStorage.setItem("Score", score);
      }
      alert("Game Over");
      location.reload();
    }
  }, 1000 / speed);

  return (
    <main className={`flex min-h-screen flex-col items-center  p-24`}>
      <div
        style={{
          display: "flex",
          width: areaWidth * zoom,
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            High score: <div style={{ fontWeight: "600" }}>{highScore}</div>
          </div>
          <div style={{ display: "flex", marginLeft: "10px" }}>
            Score: <div style={{ fontWeight: "600" }}>{score}</div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Speed</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={speed}
                label="speed"
                onChange={handleChange}
                defaultValue={1}
              >
                {Levels.map((e) => {
                  return <MenuItem value={e}>Level{e}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Wall</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Wall"
                onChange={handleChangeWall}
              >
                {WallTypes.map((e) => {
                  return <MenuItem value={e}>{e}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div
        className="relative bg-slate-300"
        style={{ width: areaWidth * zoom, height: areaHeight * zoom }}
      >
        {locate &&
          locate.map((segment) => (
            <div
              className="absolute rounded bg-slate-900"
              style={{
                top: segment.top * zoom,
                left: segment.left * zoom,
                width: zoom,
                height: zoom,
              }}
            ></div>
          ))}
        {body.map((segment) => (
          <div
            className="absolute rounded bg-slate-900"
            style={{
              top: segment.top * zoom,
              left: segment.left * zoom,
              width: zoom,
              height: zoom,
            }}
          ></div>
        ))}
        <div
          className="absolute rounded bg-slate-900"
          style={{
            top: food.top * zoom,
            left: food.left * zoom,
            width: zoom,
            height: zoom,
            background: "red",
          }}
        ></div>
      </div>
    </main>
  );
}
