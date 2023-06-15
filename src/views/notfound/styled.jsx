import styled from "styled-components";

export const NotFoundStyled = styled.div`
  body,
  html {
    padding: 0;
    margin: 0;
    font-family: "Quicksand", sans-serif;
    font-weight: 400;
    overflow: hidden;
  }

  .writing {
    width: 320px;
    height: 200px;
    background-color: #3f3f3f;
    border: 1px solid #bbbbbb;
    border-radius: 6px 6px 4px 4px;
    position: relative;
  }

  .writing .topbar {
    position: absolute;
    width: 100%;
    height: 12px;
    background-color: #f1f1f1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .writing .topbar div {
    height: 6px;
    width: 6px;
    border-radius: 50%;
    margin: 3px;
    float: left;
  }

  .writing .topbar div.green {
    background-color: #60d060;
  }
  .writing .topbar div.red {
    background-color: red;
  }
  .writing .topbar div.yellow {
    background-color: #e6c015;
  }

  .writing .code {
    padding: 15px;
  }

  .writing .code ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .writing .code ul li {
    background-color: #9e9e9e;
    width: 0;
    height: 7px;
    border-radius: 6px;
    margin: 10px 0;
  }

  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    -webkit-transition: -webkit-transform 0.5s;
    transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
    transition: transform 0.5s, -webkit-transform 0.5s;
  }

  .goToBack {
    height: 20px;
  }
  .stack-container {
    position: relative;
    width: 420px;
    height: 210px;
    -webkit-transition: width 1s, height 1s;
    transition: width 1s, height 1s;
  }

  .pokeup {
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .pokeup:hover {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
  }

  .error {
    width: 400px;
    padding: 40px;
    text-align: center;
  }

  .error h1 {
    font-size: 125px;
    padding: 0;
    margin: 0;
    font-weight: 700;
  }

  .error h2 {
    margin: -30px 0 0 0;
    padding: 0px;
    font-size: 47px;
    letter-spacing: 12px;
  }

  .perspec {
    -webkit-perspective: 1000px;
    perspective: 1000px;
  }

  .writeLine {
    -webkit-animation: writeLine 0.4s linear forwards;
    animation: writeLine 0.4s linear forwards;
  }

  .explode {
    -webkit-animation: explode 0.5s ease-in-out forwards;
    animation: explode 0.5s ease-in-out forwards;
  }

  .card {
    -webkit-animation: tiltcard 0.5s ease-in-out 1s forwards;
    animation: tiltcard 0.5s ease-in-out 1s forwards;
    position: absolute;
  }

  @-webkit-keyframes tiltcard {
    0% {
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }

    100% {
      -webkit-transform: rotateY(-30deg);
      transform: rotateY(-30deg);
    }
  }

  @keyframes tiltcard {
    0% {
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }

    100% {
      -webkit-transform: rotateY(-30deg);
      transform: rotateY(-30deg);
    }
  }

  @-webkit-keyframes explode {
    0% {
      -webkit-transform: translate(0, 0) scale(1);
      transform: translate(0, 0) scale(1);
    }

    100% {
      -webkit-transform: translate(var(--spreaddist), var(--vertdist))
        scale(var(--scaledist));
      transform: translate(var(--spreaddist), var(--vertdist))
        scale(var(--scaledist));
    }
  }

  @keyframes explode {
    0% {
      -webkit-transform: translate(0, 0) scale(1);
      transform: translate(0, 0) scale(1);
    }

    100% {
      -webkit-transform: translate(var(--spreaddist), var(--vertdist))
        scale(var(--scaledist));
      transform: translate(var(--spreaddist), var(--vertdist))
        scale(var(--scaledist));
    }
  }

  @-webkit-keyframes writeLine {
    0% {
      width: 0;
    }

    100% {
      width: var(--linelength);
    }
  }

  @keyframes writeLine {
    0% {
      width: 0;
    }

    100% {
      width: var(--linelength);
    }
  }

  @media screen and (max-width: 1000px) {
    .container {
      -webkit-transform: scale(0.85);
      transform: scale(0.85);
    }
  }

  @media screen and (max-width: 850px) {
    .container {
      -webkit-transform: scale(0.75);
      transform: scale(0.75);
    }
  }

  @media screen and (max-width: 775px) {
    .container {
      -ms-flex-wrap: wrap-reverse;
      flex-wrap: wrap-reverse;
      -webkit-box-align: inherit;
      -ms-flex-align: inherit;
      align-items: inherit;
    }
  }

  @media screen and (max-width: 370px) {
    .container {
      -webkit-transform: scale(0.6);
      transform: scale(0.6);
    }
  }
`;
