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
        </div>
    )


}