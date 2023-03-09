import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import "./body.css"
import url from "../../config/backend"
function Body() {
    var prop: any;
    try {
        prop = window.location.toString().split("?")[1].split("&")[0]
    }
    catch (e) {
        prop = false;
    }
    if (!prop || prop.length === 0) {
        function go(id:any) {
            window.location.href = "?"+id;
        }
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, false ); // false for synchronous request
        xmlHttp.send( null );
        if (xmlHttp.responseText==="none") {
            full = <h1>Žádný příspěvek nebyl vložen.</h1>
        }
        else if (xmlHttp.responseText.indexOf("Fatal error")>-1) {
            full = <h1>Aj, nastala chyba. Zkus to znovu za 5 minut.</h1>
        }
        else {
            var json = JSON.parse(xmlHttp.responseText)
            var full = json.map((element: (string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined)[]) => {
                var variableAttribute: {} = {onClick: () => {
                    go(element[0])
                }}
                return (
                    <div className="post" { ...variableAttribute}>
                        <h1>{element[1]}</h1>
                        <p>{element[2]?.toString().replace(/<[^>]+>/g,'').split(" ", 100).join(" ")+"..."}</p>
                    </div>
                )
            })
        }
    }
    else {
        var pup = false;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, false ); // false for synchronous request
        xmlHttp.send( null );
        if (xmlHttp.responseText.indexOf("Fatal error")>-1) {
            full = <h1>Aj, nastala chyba. Zkus to znovu za 5 minut.</h1>
        }
        else {
            var json = JSON.parse(xmlHttp.responseText)
            var id = prop[0]
            for (var i = 0; i < json.length; i++) {
                if (json[i][0] === id) {
                    pup = true
                    full = (
                        <div className="pst">
                            <h1 className="tit">{json[i][1]}</h1>
                            <div className="conts" dangerouslySetInnerHTML={{__html:json[i][2]}}></div>
                        </div>
                    )
                    break
                }
            }
            if (!pup) {
                full = <h1>Tento příspěvek neexistuje</h1>
            }
        }
    }
    return (
        <div className="bodyp">
            <div className="prispevky">
                <h1>Blog</h1>
            </div>
            {full}
        </div>
    )
}
export default Body;