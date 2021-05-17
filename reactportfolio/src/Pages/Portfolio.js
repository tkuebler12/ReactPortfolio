import React from "react";

function Portfolio() {
    return (
        <section className="container">
            <div className="card">
                <h5>Portfolio</h5>
                <p>
                Provided below are links to my personal GitHub account as well as to my LinkedIn account. 
                Please take a moment to look over my work in my GitHub and my prior work and skills in my LinkedIn. Thanks!
                </p>
                <p>
                    <a href="https://github.com/tkuebler12" target="_blank">GitHub Profile</a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/timothy-kuebler-453490200/" target="_blank">LinkedIn Profile</a>
                </p>
            </div>

            <div className="card">
                <h5>Project One</h5>
                <img src="./images/projectone.png" style="width:100%;height:100%;"></img>
            </div>
            <div class="card-action">
                <a href="https://github.com/tkuebler12/ProjectOne" target="_blank">GitHub Repository</a>
            </div>
            <div class="card-action">
                <a href="https://tkuebler12.github.io/ProjectOne/" target="_blank">Deployed Application</a>
            </div>

            <div className="card">
                <h5>Coding Quix</h5>
                <img src="./images/codingquiz.png" style="width:100%;height:100%;"></img>
            </div>
            <div class="card-action">
                <a href="https://github.com/tkuebler12/CodingQuiz" target="_blank">GitHub Repository</a>
            </div>
            <div class="card-action">
                <a href="https://tkuebler12.github.io/CodingQuiz/" target="_blank">Deployed Application</a>
            </div>

            <div className="card">
                <h5>Weather Dashboard</h5>
                <img src="./images/weatherdashboard.png" style="width:100%;height:100%;"></img>
            </div>
            <div class="card-action">
                <a href="https://github.com/tkuebler12/WeatherDashboard" target="_blank">GitHub Repository</a>
            </div>
            <div class="card-action">
                <a href="https://tkuebler12.github.io/WeatherDashboard/" target="_blank">Deployed Application</a>
            </div>
        </section>
    )
}

export default Portfolio;