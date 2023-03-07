import "./body.css"
function Body() {
    return (
        <div className="bodym">
            <div className="vyt">
                <h1>Manuál KLIND OS pro raspberry pi</h1>
                <p>Vítejte, děkujeme že jste si stáhli KLIND OS na raspberry pi.<br />
                Ukážeme si jak pracovat s KLIND OS.</p>
            </div>
            <div className="konfigurace">
                <h1>Konfigurace</h1>
                <p>
                    Na Raspberry PI je konfigurace velice jednoduchá.<br />
                    Do příkazového řádku napište: klindos-config<br />
                    Otevře se Vám program, kde si jednoduše nakonfigurujete KLIND OS.<br />
<br />
                    1 - Konfigurace ShellInKLINDOS<br />
                    ShellInKLINDOS je funkce v KLIND OS že se můžete připojit na Raspberry Pi přímo z operačního systému KLIND OS<br />
                    Můžete tuto funkci deaktivovat.<br />
                    2 - Zapnout/Vypnout KLINDOS server<br />
                    Vypne, zapne, nebo restartuje KLIND OS. Potřebujete nouzově vypnout KLIND OS? Je to jednoduché!<br />
                    3 - Konfigurace portu:<br />
                    Toto nastavení konfiguruje port na kterém běží KLIND OS server. 192.168.1.1:80 - Toto je port.<br />
                    Běžně KLIND OS používá port 80. Pokud do adresy nenapíšete žádný port, prohlížeč automaticky kontaktuje port 80.<br />
                    5 - Aktualizace KLIND OS.<br />
                    Aktualizuje KLIND OS na nejnovější verzi.<br />
                    6 - Odinstalace KLIND OS.<br />
                    Odinstaluje KLIND OS a všechny ostatní služby použity pro KLIND OS.<br />
                    7 - Pokročilá konfigurace<br />
                    Upravte si soubory KLIND OS přímo z terminálu.<br />
                    Stačí zadat název souboru nebo složka/nazevsouboru.js pro editaci. Soubor se Vám otevře v editačním programu nano.<br />
                    Nefunguje Vám editace?<br />
                    Pravděpodobně nemáte nainstalovaný program nano. Nainstalujete ho promocí příkazu: sudo apt install nano -y <br />
                </p>
            </div>
        </div>
    )
}
export default Body;