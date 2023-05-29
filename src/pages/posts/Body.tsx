import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import "./body.css"
import url from "../../config/backend"
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
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
        fetch(url)
        .then(res => res.json())
        .then(response => {
            var response = JSON.parse(response)
            response.reverse();
            var full = response.map((element: (string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined)[]) => {
                return (
                    <a href={"?"+element[0]?.toString()} style={{"color": "black"}}>
                        <div className="post">
                            <h1>{element[1]}</h1>
                            <p>{element[2]?.toString().replace(/<[^>]+>/g,'').split(" ", 100).join(" ")+"..."}</p>
                        </div>
                    </a>
                )
            })
            ReactDOM.render(full,document.querySelector(".content"));
        })
        .catch(() =>{
            ReactDOM.render((<h1>Nastala chyba při kontaktování serveru.</h1>),document.querySelector(".content"))
        })
    }
    else {
        var full: JSX.Element;
        var pup = false;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, false ); // false for synchronous request
        xmlHttp.send( null );
        fetch(url)
        .then(res=>res.json())
        .then(response=>{
            var id = prop[0]
            for (var i = 0; i < response.length; i++) {
                if (response[i][0] === id) {
                    pup = true
                    full = (
                        <div className="pst">
                            <h1 className="tit">{response[i][1]}</h1>
                            <div className="conts" dangerouslySetInnerHTML={{__html:response[i][2]}}></div>
                        </div>
                    )
                    break
                }
            }
            if (!pup) {
                full = <h1>Tento příspěvek neexistuje</h1>
            }
            ReactDOM.render(full,document.querySelector(".content"));
        })
        .catch(() =>{
            ReactDOM.render((<h1>Nastala chyba při kontaktování serveru.</h1>),document.querySelector(".content"))
        })
    }
    return (
        <div className="bodyp">
            <div className="prispevky">
                <h1>Blog</h1>
            </div>
            <div className="content">
                Načítání
            </div>
        </div>
    )
}
export default Body;