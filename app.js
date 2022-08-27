//Promise:
// fetch("https://www.breakingbadapi.com/api/")
//      .then((response) =>{
//        return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
const api = "https://www.breakingbadapi.com/api/characters/"

async function getData() {
  const response = await fetch(api);
  const data = await response.json();
  printData(data);

// const print = data.map(m => m.name)
//   console.log(print);

//   data.map(function(actor) {
//        console.log(actor.name);
//   })

//   document.querySelector("#content h1").innerHTML = data[0].name;
//   document.querySelector("#content h4").innerHTML = data[0].birthday;
//   document.querySelector("#content img").src = data[0].img;

//   document.querySelector("#actor").innerHTML = 
//   `
//     <select name="" id="">
//         ${
//             data.map(actor => `<option>${actor.name}</option>`)
//         }
//     </select>
   
//   `
  
}
getData();

function printData(data) {
     const header = document.querySelector("#header");
     const content = document.querySelector("#content");

    //  header.innerHTML += `
    //                       <select class="form-control>
    //                         <option>PPlease select</option>
    //                         ${data.map(character => `<option>${character.name}</option>`)}
    //                       </select>`
    header.innerHTML += 
    `<select class="form-control" onchange="getCharacter(this.value)>
       <option>Please select</option>
       ${data.map(character => `<option>${character.name}</option>`)}
    </select>`
                          
}
printData();

