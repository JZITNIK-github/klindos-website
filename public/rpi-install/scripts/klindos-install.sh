#!/bin/bash
setport () {
    if ( nc -zv localhost $1 2>&1 >/dev/null ); then
            echo 'Port '$1' je použitý. Prosím zadejte port na kterém chcete mít KLIND OS:'
            read newport
            setport $newport
        else
            echo $1 | sudo tee -a /klindosserver/config/port.txt
    fi
}
service_exists() {
    local n=$1
    if [[ $(systemctl list-units --all -t service --full --no-legend "$n.service" | sed 's/^\s*//g' | cut -f1 -d' ') == $n.service ]]; then
        return 0
    else
        return 1
    fi
}
if service_exists klindos; then
    echo "KLIND OS je již nainstalovaný!"
    exit
else
    udrzba=`curl https://klindos.jzitnik.is-a.dev/rpi-install/information/udrzba.txt`
    if [[ $udrzba == "true" ]]
    then
        echo ""
        echo "Na serveru právě probíhá údržba. Zkuste to později. Děkujeme."
        exit
    else
        trap '' INT TSTP
        version=`curl https://klindos.jzitnik.is-a.dev/rpi-install/information/version.txt`
        echo "Chcete opravdu nainstalovat KLIND OS server $version na toto zařízení? y/N"
        read installvalue
        if [[ $installvalue == "y" ]];
        then
            echo "Chcete zprovoznit službu ShellInKLINDOS? POZOR! Pokud chcete tuto službu používat musíte mít volný port 8439. (Y/n)"
            read shellvalue
            if [[ $shellvalue == "n" ]];
            then
                echo "Služba ShellInKLINDOS nebude nastavena!"
                echo "Zahajuji instalace KLIND OS Server"
            else
                echo "Zahajuji instalace KLIND OS Server"
                sudo apt install shellinabox -y
                sudo mv /etc/default/shellinabox /etc/default/shellinabox.old
                sudo touch /etc/default/shellinabox
                echo "SHELLINABOX_DAEMON_START=1" | sudo tee -a /etc/default/shellinabox
                echo "SHELLINABOX_PORT=8439" | sudo tee -a /etc/default/shellinabox
                echo 'SHELLINABOX_ARGS="--no-beep"' | sudo tee -a /etc/default/shellinabox
                sudo systemctl start shellinabox
                echo "Služba ShellInKLINDOS byla nastavena!"
                echo "Spuštím instalaci dalších programů!"
            fi
            sudo apt install python3 git netcat -y
            #create main folder
            sudo mkdir /klindosserver
            sudo mkdir /klindosserver/files
            # Add klindos files
            sudo git clone https://github.com/JZITNIK-github/KLIND-OS-Demo-Server /klindosserver/files/
            # Add config folder
            sudo mkdir /klindosserver/config/
            sudo touch /klindosserver/config/port.txt
            # Add script to start server
            sudo mkdir /klindosserver/scripts
            sudo wget https://klindos.jzitnik.is-a.dev/rpi-install/scripts/startserver.sh -P /klindosserver/scripts
            sudo wget https://klindos.jzitnik.is-a.dev/rpi-install/scripts/klindos.service -P /etc/systemd/system
            setport "80"
            if [[ $inputvaluedva == "n" ]];
            then
                echo "ShellInKLINDOS install skipping..."
            else
                sudo mv /klindosserver/files/shellinklindosconfig.js /klindosserver/files/shellinklindosconfig.js.old
                sudo touch /klindosserver/files/shellinklindosconfig.js
                echo "var shellinklindosinstalled = true" | sudo tee -a /klindosserver/files/shellinklindosconfig.js
                sudo systemctl restart shellinabox
            fi
            echo "Spuštím instalaci konfiguračního programu."
            sudo wget https://klindos.jzitnik.is-a.dev/rpi-install/scripts/config.sh -P /klindosserver/config
            sudo touch /usr/bin/klindos-config
            echo "sudo bash /klindosserver/config/config.sh" | sudo tee -a /usr/bin/klindos-config
            sudo chmod +x /usr/bin/klindos-config
            sudo systemctl start klindos
            echo "KLIND OS Server $version byl nainstalován!"
            echo "Nyní můžete v prohlížeči zadat "$(hostname -I)
        else
            echo "Instalace KLIND OS Server byla zrušena!"
        fi
    fi
fi