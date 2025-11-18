import { Link } from "react-router-dom";

export default function Home() {
    
  return (
      <div className="home">
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

          {/*Add game here*/}
            <iframe
              src="/game.html"
              width="1024"
              height="512"
              style={{ border: "none" }}
              title="Portfolio Game"
            ></iframe>
          <canvas className="flex-container" id="myCanvas"></canvas>
          
          <h1>Hello!</h1>

          <p>
              Welcome to my 'main' page for my portfolio!
              The controls are quite simple! <span className = "whisper">Seeing how I haven't finished them yet.</span>
              To move, use the 'w', 'a', 's', and 'd' keys!
              Press Enter when your character is within a blue box to open a new page!
          </p>

          <footer>
              <div /*style='position:absolute; bottom:0px; left: 40%;'*/>
                  <h3>Credits and Resources!</h3>
                  <p>Sprites By: Shinbaloonba</p> 
                  <p>All characters are (&copy) to their respective owners</p>
              </div> 
          </footer>
      </div>
  );
}
