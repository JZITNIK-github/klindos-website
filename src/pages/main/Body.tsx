import "./body.css";
import { Link } from "react-router-dom";

function Body() {
    return (
        <div className="body">
            <div className="intro">
                <div className="background"></div>
                <div className="content">
                    <h1>KLIND OS</h1>
                    <p>Operační systém v prohlížeči.</p>
                    <div className="buttons">
                        <Link to="/download"><div className="button">Stáhnout</div></Link>
                        <a href="#about"><div className="button">Více info</div></a>
                    </div>
                </div>
            </div>
            <section className="onas" id="about">
                <h1>O nás</h1>
                <p>
                    KLIND OS je operační systém postavený na JavaScriptu, HTML, CSS a PHP. Je nenáročný a můžete si ho spustit na jakémkoli počítači. KLIND OS funguje už 3 roky. Za tu dobu jsme udělali hodně pokroků jak v optimalizaci, tak i ve funkčnosti. Máme super podporu která Vám ráda pomůže s jakýmkoli problémem.
                </p>
            </section>
            <section className="nejakachyba">
                <h1>Nějaká chybka?</h1>
                <p>
                    Chyby opravujeme rychle! Nahlašte chybu na <a href="http://report.klind-os.ml">report.klind-os.ml</a>
                </p>
            </section>
            <section className="opensource">
                <h1>Kompletně OpenSource</h1>
                <p>
                    Víte co znamená OpenSource? OpenSource znamená že máte přístup ke kódu programu. (velice zjednodušeně) A to u nás můžete. Náš kód je plně OpenSource.
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
                    KLIND OS je opensource operační systém, který si můžete nainstalovat na svůj server a poté otevřít v prohlížeči Google Chrome nebo Brave. KLIND OS má často nové aktualizace a už 3 roky vycházejí pravidelně aktualizace. KLIND OS je velikostně malý operační systém. Je zároveň nenáročný na prohlížeč.
                </p>
            </section>
            <section className="funkce">
                <h1>Hlavní funkce KLIND OS</h1>
                <p>
                    1. Vlastní úprava pomocí .css souboru<br />
                    2. Vkládání scriptu pomocí .js souboru<br />
                    3. Vytvoření kopie vašeho počítače a potom nahrání na jiný<br />
                    4. Přihlášení pomocí rozpoznání obličeje<br />
                    5. Základní aplikace: poznámky, kalkulačka, prohlížeč, stopky, terminál, přehrávač hudby, budík, rekordér, prohlížeč obrázků a spoustu další.<br />
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