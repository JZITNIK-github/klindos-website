import "./body.css";
import { Link } from "react-router-dom";

function Body() {
    return (
        <div className="body">
            <div className="intro">
                <div className="background"></div>
                <div className="content">
                    <h1>KLIND OS</h1>
                    <p>Operační systém pro Vás.</p>
                    <div className="buttons">
                        <Link to="/download"><div className="button">Stáhnout</div></Link>
                        <a href="#about"><div className="button">Více info</div></a>
                    </div>
                </div>
            </div>
            <section className="onas" id="about">
                <h1>O KLIND OS</h1>
                <p>
                    KLIND OS je Arch Linux distribuce. Grafické rozhraní je napsané v JavaScriptu, HTML a CSS.
                </p>
            </section>
            <section className="nejakachyba">
                <h1>Nějaká chybka?</h1>
                <p>
                    Chyby opravujeme rychle! Nahlašte chybu na <a href="/report">klindos.jzitnik.is-a.dev/report</a>.
                </p>
            </section>
            <section className="opensource">
                <h1>Kompletně OpenSource</h1>
                <p>
                    KLIND OS je plně opensource. Můžete se podívat na kód a přispívat do kódu na <a href="https://github.com/JZITNIK-github/KLIND-OS">Githubu</a>.
                </p>
            </section>
            <section className="vyhody">
                <h1>Výhody</h1>
                <div className="vyhodyDiv">
                    <div className="vyhoda">
                        <i className='bx bx-code-alt'></i>
                        <span className="title">Žádné programování</span>
                        <span className="popis">Všechno je naprogramované za vás. Jednoduše si stáhnete a jedete.</span>
                    </div>
                    <div className="vyhoda">
                        <i className='bx bx-cart'></i>
                        <span className="title">Vše zdarma.</span>
                        <span className="popis">Za KLIND OS nezaplatíte ani korunu!</span>
                    </div>
                    <div className="vyhoda">
                        <i className='bx bx-cog'></i>
                        <span className="title">Kompletně upravitelné</span>
                        <span className="popis">Jednoduše si stáhněte nebo vytvořte CSS strukturu a nahrajte ji do KLIND OS.</span>
                    </div>
                </div>
            </section>
            <section className="procklindos">
                <h1>Proč zrovna KLIND OS?</h1>
                <p>
                    No, moc výhod oproti Windowsu nebo Linuxu tu nejsou. Ale je to zajímavý koncept vytvořit gui v JavaScriptu. KLIND OS je rychlý protože je vytvořený v... ehm... electronu. 
                </p>
            </section>
            <section className="funkce">
                <h1>Hlavní funkce KLIND OS</h1>
                <p>
                    1. Správce souborů<br/>
                    2. Plně funkční prohlížeč<br />
                    3. Vlastní úprava pomocí .css souboru<br />
                    4. Vkládání scriptu pomocí .js souboru<br />
                    5. Vytvoření kopie vašeho počítače a potom nahrání na jiný počítač<br />
                    6. Přihlášení pomocí rozpoznání obličeje<br />
                    7. Základní aplikace: poznámky, kalkulačka, prohlížeč, stopky, terminál, přehrávač hudby, budík, rekordér, prohlížeč obrázků a spoustu další.<br />
                </p>
            </section>
            <section className="vytvarejte">
                <h1>Vytvářejte vlastní aplikace pro KLIND OS</h1>
                <p>Jednoduše vytvářejte aplikace pro KLIND OS díky KLIND OS api. Nikdy to nebylo jednodužší!</p>
                <div className="buttons">
                    <Link to="/vytvarejte-aplikace"><div className="button">Zobrazit</div></Link>
                </div>
            </section>
            <section className="pripojseknam">
                <h1>Připoj se k nám!</h1>
                <Link to="/download"><div className="button">Stáhnout</div></Link>
            </section>
        </div>
    )
}
export default Body;