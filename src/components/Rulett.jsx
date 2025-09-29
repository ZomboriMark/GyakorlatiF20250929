import { useState } from "react";

function Rulett(){
const max = 10;
const szam = 4;
const szamok = [];
for (let i=1; i<=max;i++) szamok.push(i);

const [tipp, setTipp] = useState(0);
    return(
        <>
        {szamok.map((e,i)=> <button key={i} disabled={tipp == szam} onClick={()=>setTipp(e)}>{e}</button>)}
        <p>Tipped: {tipp} {
            tipp !== 0 ?
            (szam == tipp ? "Talált" : "Nem talált") :
            "Tippelj"
        }
        </p>
        </>
    )
}
export default Rulett