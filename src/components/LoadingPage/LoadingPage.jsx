import React, { useEffect } from 'react'
import './LoadingPage.css'
// import './function'

const LoadingPage = () => {
  // useEffect(() => {
  //   let loadingpage = document.querySelector("#loadingpage");
  //   setTimeout(() => {
  //     loadingpage?.classNameList.add("displaynone");
  //   }, 500);
  // }, []);

  useEffect(() => {
    //Main JS
    const wrapper = document.querySelector(".bar-wrapper");
    const bar = document.querySelector(".bar");
    const progress = document.querySelector(".bar-progress");

    //Loading percentage
    let perc = 0;

    const generate = () => {
      //Generating an ID so the flake can be removed later
      let id = "id" + Date.now(); //i.e. "id1606322064360"

      //Creating flake to be added to DOM
      const flake = document.createElement("i");
      flake.classList.add("flake");
      flake.classList.add("far");
      flake.classList.add("fa-snowflake");
      flake.classList.add(id);

      //Random positioning and animation duration
      flake.style.left = Math.random() * 100 + "%";
      flake.style.animationDuration = Math.floor(Math.random() * 5) + 1 + "s";

      //Adding flake to DOM
      wrapper.appendChild(flake);

      //Change progress color to black if snow reaches text
      if (perc > 49) {
        progress.style.color = "#75e1ff";
      }

      //Update height of bar, and progress status
      if (perc < 100) {
        perc++;
        progress.innerText = perc + "%";
        bar.style.height = perc + "%";
      }

      //Remove flake from DOM after 5 seconds
      setTimeout(function () {
        let flakeToRemove = document.querySelector(`.${id}`);
        flakeToRemove.remove();
      }, 5000);
    };

    //Run every 2s
    setInterval(generate, 200);

    //User can click progress bar to reset loading bar
    progress.addEventListener("click", () => {
      perc = 0;
      progress.style.color = "white";
    });

  })
  return (
    <div id='loadingpage' >


      <div className="loader" >
        <div className="bar-wrapper">
          <div className="bar">
            <i className="fas fa-snowman"></i>
            <i className="fas fa-igloo"></i>
          </div>
          <span className="bar-progress">0%</span>
        </div>
      </div>
    </div >
  )
}

export default LoadingPage