
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneBtn')   
const compOrFortuneList = document.querySelector("#compOrFortuneList")
const submitButton = document.querySelector("#submitBtn")
const editFortunesBtn = document.querySelector('#editFortunes')
const editList = document.querySelector('#editList')
const repFortune = document.getElementById("repFortune")
const fortuneId = document.getElementById("fortuneId")
const replaceFortuneBtn = document.querySelector("#replaceFortuneBtn")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            let data = res.data;
        // console.log(data)
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = "delete"
        let complimentSent = document.createElement('p')
        complimentSent.textContent = data
        compOrFortuneList.appendChild(complimentSent)
        compOrFortuneList.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => {
        compOrFortuneList.removeChild(complimentSent)
        compOrFortuneList.removeChild(deleteBtn)
        })
    });
};

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortunes/')
    .then (res => {
        let data = res.data;
        // console.log(data)
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = "delete"
        let fortuneSent = document.createElement('p')
        fortuneSent.textContent = data
        compOrFortuneList.appendChild(fortuneSent)
        compOrFortuneList.appendChild(deleteBtn)
    
        deleteBtn.addEventListener('click', () => {
            compOrFortuneList.removeChild(fortuneSent)
            compOrFortuneList.removeChild(deleteBtn)
            })
        
    })
}

const suggestFortune = () => {
    let suggestion = []
    let inputData = document.querySelector('input')
    suggestion.push(inputData.value)
    console.log(suggestion)
    axios.post("http://localhost:4000/api/fortunes/", suggestion)
    .then(res => {
        alert(`${inputData.value} was successfully added to the fortunes list`)
        inputData.value = ''
    })
}

const editFortunes = () => {
    axios.get("http://localhost:4000/api/fortunesList/")
    .then(res => {
        let data = res.data;
        for(let i = 0; i < data.length; i++) {
            // console.log(data)
            let fortuneSent = document.createElement('p')
            fortuneSent.textContent = data[i]
            editList.appendChild(fortuneSent)
            deleteFortuneBtn.addEventListener("click", deleteFortune)
        }
    })
    
    
    let h1 = document.createElement('h1')
    editList.appendChild(h1)
    h1.textContent = "Edit The fortunes Here"
    let deleteFortuneBtn = document.createElement('button')
    deleteFortuneBtn.textContent = "delete all fortunes"
    editList.appendChild(deleteFortuneBtn) 
    
    const deleteFortune = () => {
        axios.delete("http://localhost:4000/api/fortunes/").then (res => {
            // console.log(res.data)
           data = res.data
          for (let i = 0; i < 10; i ++) {
            editList.removeChild(editList.lastElementChild)
          }
            
        })
        editList.removeChild(h1)
        editList.removeChild(deleteFortuneBtn)
        alert('All Fortunes Have been Deleted')
}




}

const putFortune = () => {
    switchFortune = repFortune.value
    id = fortuneId.value
    axios.put(`http://localhost:4000/api/fortunes/${id}`, {switchFortune}).then(res => {
        data = res.data
        console.log(data)
    })
    alert(`fortune ${id} was repalced with ${switchFortune}`)
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
submitButton.addEventListener('click', suggestFortune)
editFortunesBtn.addEventListener('click', editFortunes)
replaceFortuneBtn.addEventListener('click', putFortune)

