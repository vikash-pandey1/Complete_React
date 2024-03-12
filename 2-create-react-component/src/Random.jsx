

function Random(){
    let no = Math.round(Math.random()*10)+1;
    return <h1 style={{'backgroundColor':'blue '}}>Random no is: {no} </h1>
}

export default Random