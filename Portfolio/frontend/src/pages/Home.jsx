import { Link } from "react-router-dom";

export default function Home() {
    const All_EMERALDS = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "white",
        "cyan"
    ];

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
          
        <h1>Hello!</h1>


        <div className="emerald-row">
            {All_EMERALDS.map((emerald) =>{
                const isCollected = user.emeralds.includes(emerald);

                return(
                    <img
                    src={isCollected ? `/emeralds/emerald_${emerald}.png`
                            : `/emeralds/emerald_blank.png`

                    }
                    alt={emerald}
                    className="emerald-con"

                    />
                )
            })}
        </div>


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
