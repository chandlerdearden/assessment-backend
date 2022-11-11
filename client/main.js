
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneBtn')   
const compOrFortuneList = document.querySelector("#compOrFortuneList")
const submitButton = document.querySelector("#submitBtn")
const editFortunesBtn = document.querySelector('#editFortunes')
const editList = document.querySelector('#editList')


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
        let h1 = document.createElement('h1')
        h1.textContent = "Edit The fortunes Here"
        editList.appendChild(h1)
        let deleteFortuneBtn = document.createElement('button')
        deleteFortuneBtn.textContent = "delete all fortunes"
        editList.appendChild(deleteFortuneBtn) 
        for(let i = 0; i < data.length; i++) {
            // console.log(data)
            let fortuneSent = document.createElement('p')
            fortuneSent.textContent = data[i]
            editList.appendChild(fortuneSent)
            let editFortuneBtn = document.createElement('button')
            editFortuneBtn.textContent = "Remove This Fortune"
            editList.appendChild(editFortuneBtn) 
            deleteFortuneBtn.addEventListener("click", deleteFortune)
        }
    })
    
    
    
}
const deleteFortune = () => {
    axios.delete("http://localhost:4000/api/fortunes/").then (res => {
        console.log(res.data)
       data = res.data
      for (let i = 0; i < data.length * 2; i ++) {
        editList.removeChild(editList.lastElementChild)
      }
        
    })
    alert('All Fortunes Have been Deleted')
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
submitButton.addEventListener('click', suggestFortune)
editFortunesBtn.addEventListener('click', editFortunes)
