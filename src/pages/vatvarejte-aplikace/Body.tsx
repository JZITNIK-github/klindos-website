import "./body.css"
function Body() {
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
                    Pokud si chcete vytvořit vlastní aplikaci, musíte mít znalosti s Javascipt. Poté si na <a href="http://klind-os.ml/app-creator" target={"_blank"}>této stránce</a> můžete stáhnout nějaké příklady a podle toho se to naučit, je to tam popsané. A nebo jděte na tento <a href="https://www.youtube.com/channel/UCMy58nmPgS-j06PZA7RaBhQ" target={"_blank"}>YouTube kanál</a> a tam jsou tutoriály na vytváření aplikací pro KLIND OS.
                </p>
            </div>
            <div className="kde">
                <h1>Kde si mohu stáhnout nějaké aplikace?</h1>
                <p>
                Nějaké aplikace jsou na <a href="http://klind-os.ml/app-creator" target={"_blank"}>této stránce</a> pod kolonkou příklady. Tam si stahujte "vykompilovaný" soubor, nebo-li .kapk soubor. Zatím jsme nevytvořili žádný seznam aplikací, ale na verzi 6.2 to připravujeme. Více informací bude později.
                </p>
            </div>
        </div>
    )
}
export default Body;