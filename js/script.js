const API_LINK = "https://jsonplaceholder.typicode.com/photos";
const postPost = document.querySelector(".grow");

async function  fetchData(api) {
    let data  = await fetch(api)
    data
    .json()
    .then(res => createCard(res))
    .catch(err => console.log(err))
}
fetchData(API_LINK)

    function createCard(data) {
        data.forEach(el => {
            let card = document.createElement("div");
            card.className = "col-3";
            card.innerHTML = `
                <div class = "read-card"">
                    <p class = "wrap">${el.title}</p>
                    <img src=${el.thumbnailUrl} alt="abc">
                    <img src=${el.thumbnailUrl} alt="abc">
                    <a href="single.html"> <button>${el.id}</button></a>
                   
                </div>
            `;
            postPost.appendChild(card);
        });
    }
