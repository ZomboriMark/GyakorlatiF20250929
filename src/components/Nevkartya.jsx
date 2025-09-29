import { useState } from "react"

function Nevkartya(){

    const[adatok, setAdatok] = useState({cimzett: "", szoveg: ""});

    return(
        <>
        <label htmlFor="cimzett">Címzett neve</label>
        <input type="text" name="cimzett" id="cimzett" value={adatok.cimzett} 
        onChange={(e)=> setAdatok({...adatok,cimzett: e.target.value})}/>
        <br />
        <label htmlFor="szoveg">Kártya szövege</label>
        <textarea name="szoveg" id="szoveg" value={adatok.szoveg} 
        onChange={(e)=>setAdatok({...adatok,szoveg: e.target.value})}/>

        <p>Cimzett: {adatok.cimzett}</p>
        <p>Szöveg: {adatok.szoveg}</p>
        </>
    )
}
export default Nevkartya