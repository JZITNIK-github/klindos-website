import "./body.css"
import { useEffect } from "react";
import Prism from 'prismjs';
function Body() {
    useEffect(() => {
        Prism.highlightAll()
    },[])
    return (
        <div className="bodyv">
            <div className="intro">
                <div className="image"></div>
                <div className="content">
                    <h1>Vytvářejte aplikace.<br />Jednoduše.</h1>
                    <p>Jak vytvářet aplikace pro KLIND OS 6.1 a novější? Je to jednoduché. Zde si ukážeme vše!</p>
                </div>
            </div>
            <div className="jakvytvorim">
                <h1>Jak si vytvořím vlastní aplikace?</h1>
                <p>
                  Vše je dokumentované v <a href="https://klind-os-docs.onrender.com/vyvoj-aplikaci/">dokumentaci</a>.
                </p>
            </div>
            <div className="kde">
                <h1>Kde si mohu stáhnou aplikace?</h1>
                <p>
                    Nějaké aplikace jsou na <a href="/app-creator/" target={"_blank"}>této stránce</a> pod kolonkou příklady. Tam si stahujte "vykompilovaný" soubor, nebo-li .kapk soubor.
                </p>
            </div>
        </div>
    )
}
export default Body;
