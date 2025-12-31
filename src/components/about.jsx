import React from 'react'
import './css/about.css'

const About = () => {
  return (
    <div id='about'>
        <h1>About</h1>
        <div id='aboutDesc'>

        <h2>Coding experience:</h2>
        <p>6 years.</p>

        <h2>Certification:</h2>
        <p><a id="fcc" href='https://freecodecamp.org/certification/thatonedude/javascript-algorithms-and-data-structures-v8' target='_blank'
        >freeCodeCamp Certificate</a> in Javascript Data Structures and Algorithms.</p>

        <hr></hr>
        <hr></hr>

        <h2>History:</h2>

        <p>
            I first started coding in Primary school, where I made my first robots with arduinos  (Std 7) using the Scratch software through a school club.
            Shortly after I adopted Python as my first programming language, where my journey truly started.
            Since then, I've expanded my skillset to web development getting into frameworks like React and runtime environments like NodeJs.
            After getting my freeCodeCamp certificate I ventured into software development, learning languages like Dart and its app development library Flutter.
            I lowkey fell in love with it and started contributing to open source projects, including one of my own called the Feature Flag service which you can view on
            Github.
        </p>
        <h2>My Areas</h2>
        <ul>
        <div id="ulCont">
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>Javascript</li>
            <li>ReactJs</li>
            <li>NodeJs</li>
            <li>PHP</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Redis</li>
            <li>Github</li>
            
        </div>
        </ul>

        </div>
    </div>
  )
}

export default About