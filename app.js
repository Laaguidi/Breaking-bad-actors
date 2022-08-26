//Promise:
// fetch("https://www.breakingbadapi.com/api/")
//      .then((response) =>{
//        return response.json();
// })
// .then((data) => {
//     console.log(data);
// })

async function getInfos() {
  const response = await fetch("https://www.breakingbadapi.com/api/characters");
  const data = await response.json();
  console.log(data);
}
getInfos();