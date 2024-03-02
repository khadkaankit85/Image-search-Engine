const body = document.querySelector(".body")
const queryBody = document.getElementById("inputField")
const button = document.getElementById("btn")

const fetchdata = async () => {
    // const apiKey = insert you api key to use it :)
    let query = queryBody.value || "nepal"
    let url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${apiKey}`
    let response = await fetch(url)
    let data = await response.json()
    // let photo = data.results[0]["urls"]["full"]
    for (let index = 0; index < (data.results).length; index++) {
        const photo = data.results[index]["urls"]["full"];
        body.innerHTML += `<img src=${photo} height=400 />`


    }
    // console.log(photo)
    // console.log(data)
    // body.innerHTML += `<img src=${photo} height=400/>`

}
fetchdata()
button.addEventListener("click", () => {
    body.innerHTML = `<h3 style="display:block">Search results for ${queryBody.value || "Nepal"}</h3>`
    fetchdata()
    console.log("updated page")
})
// console.log(fetchdata())
// body.innerHTML += `<div style="width=fit-content; height=fit-content" ><img src=${fetchdata()} height="100px" width="auto"/> </div>`
