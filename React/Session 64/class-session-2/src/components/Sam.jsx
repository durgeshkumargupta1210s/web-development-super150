export function Sam(){
// uper ki duniya
    let a = 10;
    let b = "sam";
    let c = true;
    let d = false;
    let e = null;
    let f = undefined;

    function budbakk(){
        console.log("you are budbak")
    }

    function Ankit(){
        console.log("you are not budbak")
    }
// niche ki duniya 
    return (
        <>
        <div>
            <h1>Welcome Sam Bahadur</h1>
            <h1>A: a</h1>
            <h1>A: {a}</h1>
            <h1>B: {JSON.stringify(b)}</h1>
            <h1>C: {JSON.stringify(c)}</h1>
            <h1>D: {JSON.stringify(d)}</h1>
            <h1>E: {JSON.stringify(e)}</h1>
            <h1>F: {JSON.stringify(f)}</h1>
        </div>
        <button onClick={budbakk}>Button 1</button> // used when we dont have argument
        <button onClick={()=>Ankit(10,20,30)}>Button 2</button> // used when we have some argument
        </>
    )
}

export default Sam