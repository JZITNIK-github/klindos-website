import { useState, useEffect } from "react";
import "./styles.css";
import url from "../../config/backend";
import { Link, useParams } from "react-router-dom";

export interface Change {
  id: number;
  title: string;
  content: string;
  commits: Array<String>;
  date: string;
}

function Body() {
  const [content, setContent] = useState(<></>);
  const { branch } = useParams();
  useEffect(() => {
    fetch(url + "/changelog")
      .then((res) => res.json())
      .then((res) => {
        const jsx = res[branch || ""];
        if (!jsx || jsx.length == 0) return setContent(<h1>Nebyly nalezeny žádné změny!</h1>)
        jsx.reverse();
        const data = jsx.map((change: Change) => {
          return (
            <Link key={change.id} to={change.id.toString()} style={{ color: "black" }}>
              <div className="post">
                <h1>{change.title}</h1>
                <p>{change.content?.toString().replace(/<[^>]+>/g, ' ').split(" ", 100).join(" ") + "..."}</p>
              </div>
            </Link>
          );
        });
        setContent(data)
      })
      .catch((_) => {
        setContent(<>Error</>);
      });
  }, [branch]);
  return (
    <div className="bodyp">
      <div className="prispevky">
        <h1>Changelog | {branch}</h1>
        <p>Zde vidíte všechny změny které se dějí v KLIND OS.</p>
      </div>
      <div>{content}</div>
    </div>
  );
}
export default Body;
