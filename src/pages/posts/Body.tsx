import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState, useEffect} from "react";
import "./body.css"
import url from "../../config/backend"
import {Link} from "react-router-dom"
function Body() {
    var [content, setContent] = useState(<h1>Načítání...</h1>)
    useEffect(() => {
      fetch(url + "/blog")
      .then(res => res.json())
      .then(response => {
          response.reverse();
          var full = response.map((element: (any)[]) => {
              return (
                  <Link to={element[0]?.toString() || "about:blank"} style={{ "color": "black" }}>
                      <div className="post">
                          <h1>{element[1]}</h1>
                          <p>{element[2]?.toString().replace(/<[^>]+>/g, ' ').split(" ", 100).join(" ").trim() + "..."}</p>
                      </div>
                  </Link>
              )
          })
          setContent(full,);
      })
      .catch((e) => {
        console.log(e)
          setContent(<h1>nastala chyba při kontaktování serveru.</h1>)
      })
    }, [])
    return (
        <div className="bodyp">
            <div className="prispevky">
                <Link to="/posts"><h1>Blog</h1></Link>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    )
}
export default Body;
