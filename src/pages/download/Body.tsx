import "./body.css"
import { Link } from "react-router-dom";

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
            <div className="verejnyserver">
                <h1>Veřejný server</h1>
                <p>Na KLIND OS se můžete jednoduše připojit na této adrese: <a href="https://klind-os-demo-server.onrender.com/">klind-os-demo-server.onrender.com</a></p>
                <p style={{"color":"red"}}>Omlouváme se ale server je dočasně pozastaven.</p>
            </div>
            <div className="client">
                <h1>Client</h1>
                <p>Stáhněte si program aby jste mohli otevřít KLIND OS v aplikaci.<br/>Samozřejmě to jde i v prohlížeči</p>
                <p>Tento odkaz Vás přesměruje na dokumentaci KLIND OS Client</p>
                <div className="buttons">
                    <a href="https://github.com/JZITNIK-github/KLIND-OS-Client" download="KLINDOS-client.zip"><div className="button">Zobrazit</div></a>
                </div>
            </div>
            <div className="server">
                <h1>Server</h1>
                <p>Chcete si hostovat KLIND OS na svém serveru? Můžete!</p>
                <div className="box">
                    <h2>Možnosti stažení na server.</h2>
                    <p>Jsou 2 možnosti stažení na server. První je že si pomocí příkazu jednoduše stáhnete KLIND OS na raspberry pi. Tím pádem bude fungovat raspberry pi jako server. Druhá možnost je, že si stáhnete KLIND OS jako soubory a ty nahrajete na nějaký hosting. Druhá varianta může mít méně výhod.</p>
                    <h3>Raspberry Pi</h3>
                    <p>Pro stažení na Raspberry Pi spusťte následující příkazy:</p>
                    <p className="popisad">Aktualizovat Raspberry Pi</p>
                    <code className="language-sh">sudo apt update && sudo apt upgrade -y</code>
                    <p className="popisad">Nainstalovat KLIND OS</p>
                    <code className="language-sh">sudo wget https://klindos.jzitnik.is-a.dev/rpi-install/scripts/klindos-install.sh && sudo bash klindos-install.sh && sudo rm klindos-install.sh</code>
                    <p className="popisad">Vyberte že chcete nainstalovat KLIND OS</p>
                    <code className="language-text">Chcete opravdu nainstalovat KLIND OS server (verze) na toto zařízení? y/N</code>
                    <code className="language-text dva">y</code>
                    <p className="popisad">A je to! Nyní máte stažený KLIND OS Server na raspberry pi.</p>
                    <p className="popisad">Nyní můžete pokračovat na <Link to="/manual-rpi">manuál</Link>.</p>
                    <h3>Ostatní zařízení</h3>
                    <p>Toto je složitější instalace. Stáhne se Vám .zip soubor ve kterém jsou všechny soubory z KLIND OS. Jednoduše si soubory nahrajte na jakýkoliv http server. PHP není potřeba!</p>
                    <div className="buttons">
                        <a href="https://github.com/JZITNIK-github/KLIND-OS-Demo-Server"><div className="button">Stáhnout nejnovější</div></a>
                        <a href="https://e1.pcloud.link/publink/show?code=kZjF4pZiu3upXqC6zmb5xT0Mn5qiFY9NAqy" target={"_blank"}><div className="button">Ostatní verze</div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Body;