import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const scripts = [
            '/game/utils.js',
            '/game/classes/CollisionBlock.js',
            '/game/classes/Sprite.js',
            '/game/classes/Player.js',
            '/game/classes/LinkZone.js',
            '/game/data/collisions.js',
            '/game/SonicPortfolioStage.js',
            '/game/script.js'
        ];
    

    // Create and append scripts to the body
    const addedScripts = scripts.map(src => {
      const s = document.createElement('script');
      s.src = src;
      s.async = false; // Important: keeps order
      document.body.appendChild(s);
      return s;
    });

    // Cleanup if Home unmounts
    return () => {
      addedScripts.forEach(s => document.body.removeChild(s));
    };
  }, []);


  return (
    <div className="home">
      <nav>
            <ul>
                <li><a href = "./Home.jsx">Home</a></li>
                <li><a href = "./About.jsx">About</a>
                    <ul class = "dropdown">
                        <li><a href = "#">Skills</a></li>
                        <li><a href = "#">Contact</a></li>
                    </ul>
                </li>
                <li>
                    <a href = "./Projects.jsx">Projects</a>
                    <ul class="dropdown">
                        <li><a href ="#">Past Projects</a></li>
                        <li><a href ="#">Current Projects</a></li>

                    </ul>
                </li>
                <li><a href = "">Contact</a></li>
            </ul>
        </nav>

        <canvas class = "flex-container" id ="myCanvas"></canvas>
        
        

    </div>
    
  );
}
