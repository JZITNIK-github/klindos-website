import "./body.css"
import { Link } from "react-router-dom"

function Body() {
    return (
        <div className="bodyd">
            <div className="intro">
                <div className="image"></div>
                <div className="content">
                    <h1>Děkuji že si chcete stáhnout KLIND OS!</h1>
                    <p>Pouze pár kroků, a budete mít KLIND OS!</p>
                </div>
            </div>
            <div className="iso">
                <h1>ISO</h1>
                <p>ISO soubor si můžete nahrát na flash disk pomocí <a target="_blank" href="https://rufus.ie/">rufus</a>.<br/>Můžete taky ISO soubor přímo nahrát do virtuálního počítače jako například Virtual Box.</p>
                <div className="buttons">
                    <a href="https://www.mediafire.com/file/inkq9kos9q2bs2p/KLINDOS.iso/file" className="button">Stáhnout ISO</a>
                </div>
            </div>
            <div className="dokumentace">
                <h1>Dokumentace</h1>
                <p>Dokumentace Vám pomůže si nainstalovat KLIND OS.</p>
                <div className="buttons">
                    <Link to="https://klind-os-docs.onrender.com/"><div className="button">Zobrazit</div></Link>
                </div>
            </div>
        </div>
    )
}
export default Body;
