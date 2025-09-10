function Person(props){

    console.log(props)


    return(
        <div>
            <h1>Welcome to person</h1>
            <h1>Name:{props.name}</h1>
            <h1>Age :{props.age}</h1>
            <h1>Color:{props.favColor}</h1>
        </div>
    )
}

export default Person;

// props is a object
// jawa script ko evaluate karane ke liye {} used this