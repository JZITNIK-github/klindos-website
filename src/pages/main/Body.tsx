import "./body.css";
import { Link } from "react-router-dom";

function Body() {
    return (
        <div className="body">
            <div className="error">
              <span>Moje osobní webová stránka nefunguje! Více info zde: </span>
              <a href="https://jzitnik.betteruptime.com/">https://jzitnik.betteruptime.com/</a> 
            </div>
            <div className="intro">
                <div className="background"></div>
                <div className="content">
                    <h1>KLIND OS</h1>
                    <p>Arch Linux distribuce</p>
                    <div className="buttons">
                        <Link to="/download"><div className="button">Stáhnout</div></Link>
                        <a href="https://klind-os-docs.onrender.com/"><div className="button">Dokumentace</div></a>
                    </div>
                </div>
            </div>
            <section className="onas" id="about">
                <h1>O KLIND OS</h1>
                <p>
                    KLIND OS je Arch Linux distribuce. Grafické rozhraní je napsané v JavaScriptu, HTML a CSS. KLIND OS myslí na vaše soukromí. KLIND OS nesbírá žádné data o vašem systému.
                </p>
            </section>
            <section className="nejakachyba">
                <h1>Nějaká chyba?</h1>
                <p>
                    Chyby opravuji rychle! Nahlašte chybu na <a href="/report">klindos.jzitnik.is-a.dev/report</a>.
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
                        <span className="popis">Všechno je připravené na jednoduchou instalaci.</span>
                    </div>
                    <div className="vyhoda">
                        <i className='bx bx-cart'></i>
                        <span className="title">Vše zdarma.</span>
                        <span className="popis">Za KLIND OS nezaplatíte ani korunu! Celý operační systém je opensource a můžete si stáhnou kód přímo z Githubu.</span>
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
                    No, moc výhod oproti Windowsu nebo Linuxu tu nejsou. Ale je to zajímavý koncept vytvořit GUI v JavaScriptu. KLIND OS je pomalý. Proč? Electron
                </p>
            </section>
            <section className="funkce">
                <h1>Výhody a funkce KLIND OS</h1>
                <p>
                    1. Správce souborů<br/>
                    2. Podpora externích disků (experimentální)<br/>
                    3. Podpora tiskáren (experimentální)<br/>
                    4. Plně funkční prohlížeč<br />
                    5. Vlastní úprava pomocí .css souboru<br />
                    6. Instalace vlastních aplikací pomocí .kapk souborů<br />
                    7. Vytvoření kopie vašeho počítače a potom nahrání na jiný počítač<br />
                    8. Přihlášení pomocí rozpoznání obličeje<br />
                    9. Základní aplikace: poznámky, kalkulačka, prohlížeč, stopky, terminál, přehrávač hudby, budík, rekordér, prohlížeč obrázků a spoustu další.<br />
                    10. Celý kód je opensource. Žádné trackery a žádný bloatware od velkých korporátů.<br />
                    11. Kompletně bez reklam<br />
                    12. Bezpečné Linuxové jádro<br />
                </p>
            </section>
            <section className="vytvarejte">
                <h1>Vytvářejte vlastní aplikace pro KLIND OS</h1>
                <p>Vytvořte si vlastní aplikaci pro KLIND OS a vykompilujte ji do .kapk souboru.</p>
                <div className="buttons">
                    <Link to="/vytvarejte-aplikace"><div className="button">Zobrazit</div></Link>
                </div>
            </section>
            <section className="pripojseknam">
                <h1>Stáhněte si KLIND OS!</h1>
                <Link to="/download"><div className="button">Stáhnout</div></Link>
            </section>
        </div>
    )
}
export default Body;
