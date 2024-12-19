const qoute = document.getElementById("qoute")
const author = document.getElementById("author")
const button = document.querySelector('button')
const myBtn = document.getElementById("btn")

const api_url = " https://quotes-api-self.vercel.app/quote";

async function getQoute(url) {
    const response = await fetch(url);
    let data = await response.json();
    
        qoute.innerHTML = data.quote;
        author.innerHTML = data.author;
   
}

button.addEventListener('click',()=>{
    document.querySelector('#qoute').style .display = "block";
    document.querySelector('#author').style .display = "block";
    getQoute(api_url);
})


myBtn.onclick = function () {
    qoute.select();
    document.execCommand("copy");
};
   



