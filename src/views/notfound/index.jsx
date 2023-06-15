import React, { memo, useEffect } from "react";
import { NotFoundStyled } from "./styled";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const NotFound = memo(() => {
  const navigate = useNavigate();
  useEffect(() => {
    const stackContainer = document.querySelector(".stack-container");
    const cardNodes = document.querySelectorAll(".card-container");
    const perspecNodes = document.querySelectorAll(".perspec");
    const perspec = document.querySelector(".perspec");
    const card = document.querySelector(".card");
    const goToBackEl = document.querySelector(".goToBack");

    goToBackEl.onclick = function () {
      navigate(-1);
    };

    let counter = stackContainer.children.length;

    //function to generate random number
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //after tilt animation, fire the explode animation
    card.addEventListener("animationend", function () {
      perspecNodes.forEach(function (elem, index) {
        elem.classList.add("explode");
      });
    });

    //after explode animation do a bunch of stuff
    perspec.addEventListener("animationend", function (e) {
      if (e.animationName === "explode") {
        cardNodes.forEach(function (elem, index) {
          //add hover animation class
          elem.classList.add("pokeup");

          //add event listner to throw card on click
          elem.addEventListener("click", function () {
            let updown = [800, -800];
            let randomY = updown[Math.floor(Math.random() * updown.length)];
            let randomX = Math.floor(Math.random() * 1000) - 1000;
            elem.style.transform = `translate(${randomX}px, ${randomY}px) rotate(-540deg)`;
            elem.style.transition = "transform 1s ease, opacity 2s";
            elem.style.opacity = "0";
            counter--;
            if (counter === 0) {
              stackContainer.style.width = "0";
              stackContainer.style.height = "0";
            }
          });

          //generate random number of lines of code between 4 and 10 and add to each card
          let numLines = randomIntFromInterval(5, 10);

          //loop through the lines and add them to the DOM
          for (let index = 0; index < numLines; index++) {
            let lineLength = randomIntFromInterval(25, 97);
            var node = document.createElement("li");
            node.classList.add("node-" + index);
            elem
              .querySelector(".code ul")
              .appendChild(node)
              .setAttribute("style", "--linelength: " + lineLength + "%;");

            //draw lines of code 1 by 1
            if (index === 0) {
              elem
                .querySelector(".code ul .node-" + index)
                .classList.add("writeLine");
            } else {
              elem
                .querySelector(".code ul .node-" + (index - 1))
                .addEventListener("animationend", function (e) {
                  elem
                    .querySelector(".code ul .node-" + index)
                    .classList.add("writeLine");
                });
            }
          }
        });
      }
    });
  }, [navigate]);
  return (
    <NotFoundStyled>
      <div className="container">
        <div className="error">
          <h1>404</h1>
          <h2>错误</h2>
          <p style={{ textAlign: "center" }}>您的网页丢失了, 请返回主页!</p>

          <Button
            variant="contained"
            className="goToBack"
            size="samll"
            sx={{ width: "30px" }}
          >
            返回
          </Button>
        </div>
        <div className="stack-container">
          <div className="card-container">
            <div
              className="perspec"
              style={{
                "--spreaddist": "125px",
                "--scaledist": ".75",
                "--vertdist": "-25px",
              }}
            >
              <div className="card">
                <div className="writing">
                  <div className="topbar">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                  </div>
                  <div className="code">
                    <ul></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div
              className="perspec"
              style={{
                "--spreaddist": "100px",
                "--scaledist": ".8",
                "--vertdist": "-20px",
              }}
            >
              <div className="card">
                <div className="writing">
                  <div className="topbar">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                  </div>
                  <div className="code">
                    <ul></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div
              className="perspec"
              style={{
                "--spreaddist": "75px",
                "--scaledist": ".85",
                "--vertdist": "-15px",
              }}
            >
              <div className="card">
                <div className="writing">
                  <div className="topbar">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                  </div>
                  <div className="code">
                    <ul></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div
              className="perspec"
              style={{
                "--spreaddist": "50px",
                "--scaledist": ".9",
                "--vertdist": "-10px",
              }}
            >
              <div className="card">
                <div className="writing">
                  <div className="topbar">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                  </div>
                  <div className="code">
                    <ul></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div
              className="perspec"
              style={{
                "--spreaddist": "25px",
                "--scaledist": ".95",
                "--vertdist": "-5px",
              }}
            >
              <div className="card">
                <div className="writing">
                  <div className="topbar">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                  </div>
                  <div className="code">
                    <ul></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div
              className="perspec"
              style={{
                "--spreaddist": "0",
                "--scaledist": "1",
                "--vertdist": "0",
              }}
            >
              <div className="card">
                <div className="writing">
                  <div className="topbar">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                  </div>
                  <div className="code">
                    <ul></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NotFoundStyled>
  );
});

export default NotFound;
