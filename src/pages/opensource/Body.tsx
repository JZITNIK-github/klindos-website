import "./body.css";
import { Link } from "react-router-dom";

function Body() {
    return (
        <div className="bodyo">
            <div className="intro">
                <div className="background"></div>
                <div className="content">
                    <h1>KLIND OS je opensource</h1>
                    <p>KLIND OS je opensource. Také příjmáme pull requesty!</p>
                    <div className="buttons">
                        <a href="#where"><div className="button">Více info</div></a>
                    </div>
                </div>
            </div>
            <section className="where" id="where">
                <h1>Kde je kód uchován?</h1>
                <p>
                    KLIND OS má veškerý kód na <a href="https://github.com/JZITNIK-github/KLIND-OS">Githubu</a>. Taky si můžete postavit KLIND OS přímo ze zdrojového kódu a nebo můžete přispět do kódu pomocí pull requestů.
                </p>
            </section>
        </div>
    )
}
export default Body;
