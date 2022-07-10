const jokel = document.getElementById('joke');
const joker = document.getElementById('get_joke');
joker.addEventListener('click' , genjoke);
genjoke();
async function genjoke(){
    const jokeres =await fetch('https://icanhazdadjoke.com/' , {headers:{"Accept":'application/json'}})
    const joke = await jokeres.json()
    jokel.innerHTML=joke.joke
}

