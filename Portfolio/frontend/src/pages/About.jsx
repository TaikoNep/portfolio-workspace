import { Link } from "react-router-dom";
import ChaosEmerald from "../functions/ChaosEmerald";

export default function About() {

    return(
        <div className="about">

            <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to= "/about">About</Link>
                      <ul className = "dropdown">
                          
                      </ul>
                  </li>
                  <li>
                      <Link to= "/projects">Projects</Link>
                      <ul className="dropdown">

                      </ul>
                  </li>
                  
              </ul>
          </nav>

          <h1>About Me</h1>
            <ChaosEmerald 
                type="blue"
                src="/images/emeralds/emerald_blue.png"
                alt="Blue Chaos Emerald"
                color="blue"
            />


            <p>Hello! </p>

            <img src= "./img/pfp.png" alt="Avatar"/>

            <h2>Education</h2>

            <h2>Likes:</h2>

            <h2>Dislikes:</h2>

            <p>Testing About file. Test test</p>
        </div>
    );


}