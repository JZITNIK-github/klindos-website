import { useState, useEffect } from "react";
import "./styles.css";
import url from "../../config/backend";
import { Link } from "react-router-dom";
type Subtitles = {
  main: string;
  test: string;
};
const subtitles: Subtitles = {
  main: "Doporučený branch. Tento branch je plně testovaný a je určený pro normální uživatele.",
  test: "Tento branch je doporučený pro vývojáře. Tento branch se používá na testování KLIND OS. Pokud chcete všechny novinky jako první, tento branch je pro Vás.",
}
function Body() {
  const [content, setContent] = useState(<></>);
  useEffect(() => {
    fetch(url + "/branches/getAll")
      .then((res) => res.json())
      .then((res) => {
        function capitalizeFirstLetter(str: string) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        }
        const jsx = res.map((branch: string) => {
          return (
            <Link key={branch} to={branch} style={{ color: "black" }}>
              <div className="post">
                <h1>{capitalizeFirstLetter(branch)}</h1>
                <p>{Object.keys(subtitles).includes(branch) ? subtitles[branch] : "(bez popisku)"}</p>
              </div>
            </Link>
          );
        });
        setContent(jsx);
      })
      .catch(() => {setContent(<>Error</>)});
  }, []);
  return (
    <div className="bodyp">
      <div className="prispevky">
        <h1>Changelog</h1>
        <p>Zde vidíte všechny změny které se dějí v KLIND OS.</p>
        <br />
        <h2>Branch</h2>
        <p>Zde si vyberte branch</p>
      </div>
      <div>{content}</div>
    </div>
  );
}
export default Body;
