const cardsCanvas = document.getElementById("cards");
const cardsData = [
    {
        imgSrc: 'https://picsum.photos/200/400',
        title: 'weird man',
        info: "He's a really weird dudeeee"
    },
    {
        imgSrc: 'https://picsum.photos/200/400',
        title: 'weird man',
        info: "He's a really weird dudeeee"
    },
    {
        imgSrc: 'https://picsum.photos/200/400',
        title: 'weird man',
        info: "He's a really weird dudeeee"
    },
    {
        imgSrc: 'https://picsum.photos/200/400',
        title: 'weird man',
        info: "He's a really weird dudeeee"
    },
    {
        imgSrc: 'https://picsum.photos/200/400',
        title: 'weird man',
        info: "He's a really weird dudeeee"
    }
]

for(let i=0; i<cardsData.length; i++){
    cardsCanvas.innerHTML+=`
        <div class="card">
            <img src="${cardsData[i].imgSrc}" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b>${cardsData[i].title}</b></h4>
            <p>${cardsData[i].info}</p>
            </div>
        </div>`
}