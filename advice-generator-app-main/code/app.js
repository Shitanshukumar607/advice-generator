const getData = async (num) => {
    try{
        const response = await fetch(`https://api.adviceslip.com/advice/${num}`)
        const data = await response.json()
        console.log(data);
        editDOM(data)
    }
    catch (error){
        console.log(error);
        alert('There was an error fetching the data try again lol.')
    }
}

function getAdvice(){
    let x = Math.floor(Math.random() * 200)
    console.log(x);
    getData(x)
}

const editDOM = (data) =>{
    document.querySelector(".adviceNo").textContent = `ADVICE #${data.slip.id}`
    document.querySelector(".advice").textContent = `"${data.slip.advice}"`
}

getAdvice()

document.querySelector("#roll").addEventListener("click",()=>{
    getAdvice()
})