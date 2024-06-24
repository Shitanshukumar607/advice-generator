const getData = async (num) => {
    try{
        const response = await fetch(`https://api.adviceslip.com/advice/${num}`)
        const data = await response.json()
        editDOM(data)
    }
    catch (error){
        console.log(error);
        document.querySelector(".advice").textContent = `Couldnt get data from the API try again :(`
    }
}

function getAdvice(){
    let x = Math.floor(Math.random() * 200)
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
