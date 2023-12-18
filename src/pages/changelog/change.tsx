import { useState, useEffect } from "react";
import "./styles.css";
import url from "../../config/backend";
import { useParams, Link } from "react-router-dom";
function Body() {
  var [content, setContent] = useState(<h1>Načítání...</h1>);
  var { branch, id } = useParams();

  useEffect(() => {
    fetch(url + "/changelog")
      .then((res) => res.json())
      .then((response) => {
        const jsx = response[branch || ""];
        for (const change of jsx) {
          if (change.id == id) {
            setContent(
              <div className="pst">
                <h1 className="tit">{change.title}</h1>
                <p>Datum: {change.date}</p>
                <div className="conts" dangerouslySetInnerHTML={{ __html: change.content }}></div>
                <hr />
                <h2>Změny:</h2>
                {
                  change.commits.map((commit:string) => {
                    return (
                      <>
                        <a style={{color: "blue"}} href={commit}>{commit.replace("https://", "")}</a>
                        <br />
                      </>
                    )
                  })
                }
              </div>
            )
            break;
          }
        }
      })
      .catch(() => {
        setContent(<h1>Nastala chyba při kontaktování serveru.</h1>);
      });
  }, []);
  return (
    <div className="bodyp">
      <div className="prispevky">
        <h1>Changelog | {branch} | {id}</h1>
      </div>
      <div className="content">{content}</div>
    </div>
  );
}
export default Body;
