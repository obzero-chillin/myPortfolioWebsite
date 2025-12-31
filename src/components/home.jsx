import "./css/home.css";
import comp from '../assets/comp.webp'

const Home=()=>{
    return(
        <>
            <header id="homeCont">
                <div id="imgCont">
                    <img src={comp} alt="" id="backgroundImg" />                    
                </div>
                <div id="hero">
                    <div id="heroItemsCont">

                        <h1 id="heroh1">
                            Hi, I'm Obonolo
                        </h1>
                        <br className="break"></br>
                        <br className="break"></br>
                        <span id="heroDesc">
                                A fullstack web and app developer in Botswana
                        </span><br></br>
                        <br></br>
                        <span id="heroHist">
                            I started my fullstack programming journey in 2020 with python as my first language.
                Since then, I've expanded my skill set to include JavaScript, React, Node.js, and more.
                I'm about building efficient and scalable web applications, programmes that solve real-world problems.
                        </span>
                    </div>
                    
                </div>

            </header>
        
        
        
        </>
    )
}

export default Home;