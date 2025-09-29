function CardHead(){
    return(
    <>
    <div style={{padding:"10px",backgroundColor:"black", color:"white"}}>
        Head
    </div>
    </>
    )
}
function CardBody(){
    return(
    <>
    <div style={{padding:"10px"}}>
        Body
    </div>
    </>
    )
}

function Card(){
    return(
        <>
        <div style={{border:"3px solid black", width: "200px"}}>
        <CardHead/>
        <CardBody/>
        </div>
        </>
    )
}
export default Card