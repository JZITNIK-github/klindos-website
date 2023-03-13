#!/bin/bash
trap '' INT TSTP
setport () {
    if ( nc -zv localhost $1 2>&1 >/dev/null ); then
            echo 'Port '$1' je použitý. Prosím zadejte port na kterém chcete mít KLIND OS:'
            read newport
            setport $newport
        else
            sudo rm /klindosserver/config/port.txt
            sudo touch /klindosserver/config/port.txt
            echo $1 | sudo tee -a /klindosserver/config/port.txt
    fi
}
start (){
    echo ""
    echo ""
    echo "Vítejte v konfiguraci KLIND OS"
    echo "Možnosti:"
    echo "1 - Konfigurace ShellInKLINDOS"
    echo "2 - Zapnout/Vypnout KLINDOS server"
    echo "3 - Konfigurace portů"
    echo "4 - Pokročilá konfigurace"
    echo "5 - Aktualizace KLIND OS"
    echo "6 - Odinstalovat KLIND OS"
    echo "7 - Ukončit"
    echo ""
    echo "Vaše volba:"
    read volba
    if [[ $volba == "1" ]]
    then
        echo ""
        echo ""
        echo "Konfigurace ShellInKLINDOS"
        echo "Možnosti:"
        echo "1 - Zapnout ShellInKLINDOS"
        echo "2 - Vypnout ShellInKLINDOS"
        echo "3 - Zpět"
        echo ""
        echo "Vaše volba:"
        read volbashellin
        if [[ $volbashellin == "1" ]]
        then
            shellinklindosjezapnuty=`cat /klindosserver/filesshellinklindosconfig.js`
            if [[ $shellinklindosjezapnuty == *"false"* ]]
            then
                echo ""
                echo "Zapínám ShellInKLINDOS"
                sudo apt install shellinabox -y
                sudo mv /etc/default/shellinabox /etc/default/shellinabox.old
                sudo touch /etc/default/shellinabox
                echo "SHELLINABOX_DAEMON_START=1" | sudo tee -a /etc/default/shellinabox
                echo "SHELLINABOX_PORT=8439" | sudo tee -a /etc/default/shellinabox
                echo 'SHELLINABOX_ARGS="--no-beep"' | sudo tee -a /etc/default/shellinabox
                sudo mv /klindosserver/files/shellinklindosconfig.js /klindosserver/files/shellinklindosconfig.js.old
                sudo touch /klindosserver/files/shellinklindosconfig.js
                echo "var shellinklindosinstalled = true" | sudo tee -a /klindosserver/files/shellinklindosconfig.js
                sudo systemctl restart shellinabox
                echo ""
                echo ""
                echo "Gratulujeme! ShellInKLINDOS byl nainstalován!"
                start
            else
                echo ""
                echo ""
                echo "ShellInKLINDOS je již zapnutý"
                start
            fi
        elif [[ $volbashellin == "2" ]]
        then
            shellinklindosjezapnuty=`cat /klindosserver/files/shellinklindosconfig.js`
            if [[ $shellinklindosjezapnuty == *"true"* ]]
            then
                sudo mv /klindosserver/files/shellinklindosconfig.js /var/www/html/shellinklindosconfig.js.old
                sudo touch /klindosserver/files/shellinklindosconfig.js
                echo "var shellinklindosinstalled = false" | sudo tee -a /klindosserver/files/shellinklindosconfig.js
                sudo apt remove shellinabox -y
                echo ""
                echo ""
                echo "Gratulujeme! ShellInKLINDOS byl odinstalován!"
                start
            else
                echo ""
                echo ""
                echo "ShellInKLINDOS je již vypnutý"
                start
            fi
        elif [[ $volbashellin == "3" ]]
        then
            start
        else
            echo ""
            echo ""
            echo "Tato volba není platná!"
            start
        fi
    elif [[ $volba == "2" ]]
    then
        echo "Zapnutí / Vypnutí KLIND OS"
        echo "Možnosti:"
        echo "1 - Zapnout"
        echo "2 - Vypnout"
        echo "3 - Restartovat"
        echo "4 - Zpět"
        echo ""
        echo "Vaše volba:"
        read volbavypzap
        if [[ $volbavypzap == "1" ]]
        then
            sudo systemctl start klindos
            echo ""
            echo ""
            echo "KLINDOS byl zapnut!"
            start
        elif [[ $volbavypzap == "2" ]]
        then
            sudo systemctl stop klindos
            echo ""
            echo ""
            echo "KLINDOS byl vypnut!"
            start
        elif [[ $volbavypzap == "3" ]]
        then
            sudo systemctl restart klindos
            echo ""
            echo ""
            echo "KLINDOS byl restartován!"
            start
        elif [[ $volbavypzap == "4" ]]
        then
            start
        else
            echo ""
            echo ""
            echo "Tato volba není platná!"
            start
        fi
    elif [[ $volba == "3" ]]
    then
        echo "Konfigurace protů"
        echo "Možnosti:"
        echo "1 - Konfigurace portu pro KLINDOS"
        echo "2 - Zpět"
        echo ""
        echo "Vaše volba:"
        read volbaporty
        if [[ $volbaporty == "1" ]]
        then
            echo "Zadejte port: "
            read wead
            setport $wead
            sudo systemctl restart klindos
            echo "Port byl nastaven!"
            start
        elif [[ $volbaporty == "2" ]]
        then
            start
        else
            echo ""
            echo ""
            echo "Tato volba není platná!"
            start
        fi
    elif [[ $volba == "4" ]]
    then
        echo "Pokročilá konfigurace"
        echo "Pokud chcete zpět, napište back()"
        echo "Zadejte název souboru pro konfiguraci:"
        read fileprokonfiguraci
        if [[ $fileprokonfiguraci == "back()" ]]
        then
            start
        else
            echo "Zapínám konfiguraci souboru!"
            sudo nano "/klindosserver/files/"$fileprokonfiguraci
            echo ""
            echo ""
            echo "Konfigurace souboru byla dokončena!"
            start
        fi
    elif [[ $volba == "5" ]]
    then
        echo "Spouštím aktualizaci KLIND OS"
        sudo systemctl stop klindos
        sudo cp /klindosserver/files/shellinklindosconfig.js /klindosserver/shellinklindosconfig.js
        sudo rm -rf /klindosserver/files/*
        sudo rm -rf /klindosserver/files/.*
        sudo git clone https://github.com/JZITNIK-github/KLIND-OS-Demo-Server /klindosserver/files/
        sudo mv /klindosserver/files/shellinklindosconfig.js /klindosserver/files/shellinklindosconfig.js.old
        sudo mv /klindosserver/shellinklindosconfig.js /klindosserver/files/shellinklindosconfig.js
        sudo systemctl start klindos
        echo "Aktualizace byla dokončena!"
        start
    elif [[ $volba == "6" ]]
    then
        echo "Spuštím odinstalaci KLIND OS."
        sudo systemctl stop klindos
        sudo systemctl disable klindos
        sudo apt remove shellinabox -y
        sudo rm -rf /klindosserver
        sudo rm /etc/systemd/system/klindos.service
        sudo systemctl daemon-reload
        sudo systemctl reset-failed
        sudo rm /usr/bin/klindos-config
        echo "Odinstalace byla dokončena!"
    elif [[ $volba == "7" ]]
    then
        echo ""
        echo ""
        echo "Konfigurace byla dokončena!"
    else
        echo ""
        echo ""
        echo "Tato volba není platná!"
        start
    fi

}
start