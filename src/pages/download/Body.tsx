import "./body.css"

function Body() {
    return (
        <div className="bodyd">
            <div className="intro">
                <div className="image"></div>
                <div className="content">
                    <h1>Děkujeme že chcete jít k nám!</h1>
                    <p>Pouze pár kroků, a dostanete se do KLIND OS!</p>
                </div>
            </div>
            <div className="iso">
                <h1>ISO</h1>
                <p>ISO soubor je konečně tu! Nyní si můžete nainstalovat KLIND OS na Váš počítač nebo na VM.</p>
                <div className="buttons">
                    <a href="https://www.mediafire.com/file/inkq9kos9q2bs2p/KLINDOS.iso/file" className="button">Stáhnout ISO</a>
                </div>
            </div>
            
        </div>
    )
}
export default Body;