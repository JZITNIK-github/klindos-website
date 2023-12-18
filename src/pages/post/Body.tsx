import { useState, useEffect } from "react";
import "./body.css"
import url from "../../config/backend"
import { useParams, Link } from "react-router-dom"
function Body() {
    var [content, setContent] = useState(<h1>Načítání...</h1>)
    var { id } = useParams();

    useEffect(() => {
      var full: JSX.Element;
      var pup = false;
      fetch(url + "/blog")
          .then(res => res.json())
          .then(response => {
              response = JSON.parse(response)
              for (var i = 0; i < response.length; i++) {
                  if (response[i][0] === id) {
                      pup = true
                      full = (
                          <div className="pst">
                              <h1 className="tit">{response[i][1]}</h1>
                              <div className="conts" dangerouslySetInnerHTML={{ __html: response[i][2] }}></div>
                          </div>
                      )
                      break
                  }
              }
              if (!pup) {
                  full = <h1>Tento příspěvek neexistuje</h1>
              }
              setContent(full)
          })
          .catch(() => {
              setContent(<h1>Nastala chyba při kontaktování serveru.</h1>)
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
