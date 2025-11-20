import { Link } from "react-router-dom";
import ChaosEmerald from "../functions/ChaosEmerald";

export default function Projects() {

    return(
        <div className="projects">
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

          <h1>Projects</h1>
          <ChaosEmerald 
            type="green"
            src="/images/emeralds/emerald_green.png"
            alt="Green Chaos Emerald"
            color="green"
            />

            <ChaosEmerald 
                type="red"
                src="/images/emeralds/emerald_red.png"
                alt="Red Chaos Emerald"
                color="red"
            />
            
            <ChaosEmerald 
                type="yellow"
                src="/images/emeralds/emerald_yellow.png"
                alt="Yellow Chaos Emerald"
                color="yellow"
            />

            <ChaosEmerald 
                type="white"
                src="/images/emeralds/emerald_white.png"
                alt="White Chaos Emerald"
                color="white"
            />

            <ChaosEmerald 
                type="purple"
                src="/images/emeralds/emerald_purple.png"
                alt="Purple Chaos Emerald"
                color="purple"
            />

            <ChaosEmerald 
                type="cyan"
                src="/images/emeralds/emerald_cyan.png"
                alt="Red Chaos Emerald"
                color="cyan"
            />
        </div>
    )


}