//Promise:
// fetch("https://www.breakingbadapi.com/api/")
//      .then((response) =>{
//        return response.json();
// })
// .then((data) => {
//     console.log(data);
// })

const api = "https://www.breakingbadapi.com/api/characters";

async function getdata() {
   try {
    const response = await fetch(api)
    const data = await response.json();
    console.log(data)
    //const v = Object.entries(data).map(m => m)
    //console.log(v)
    //data.map(m => m.name)
    printData(data)
   } catch(e){
       console.log("Error:" ,e.message)
   }
   
}

function printData(data) {
    const header = document.querySelector("#header")
    const content = document.querySelector("#content")
    header.innerHTML += 
    `<select class="form-control" onchange="getCharacter(this.value)">
       <option>Please select</option>
       ${data.map(character => `<option>${character.name}</option>`)}
    </select>`
    console.log(header);
}

async function getCharacter(name) {
  if(name !== 'please select'){
    const response = await fetch(`${api}?name=${name}`);
    const data = await response.json();
    console.log(data);
    content.innerHTML = 
    ` <h2>${data[0].name} (${data[0].nicKname})</h2>
      <h4>${data[0].portrayed}</h4>
      <img src="${data[0].img}" width="300px">
    `
  }
  
}

getdata();
  

