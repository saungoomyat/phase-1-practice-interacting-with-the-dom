let start = 0
const counter = document.getElementById('counter')
const incre = document.getElementById('plus')
const decre = document.getElementById('minus')
const pause = document.getElementById('pause')
const like = document.getElementById('heart')
const comment = document.getElementById('list')

let time = true

setInterval(function() {
    if (time) {
        counter.innerText++
    }
}, 1000)

pause.addEventListener('click', () =>{
    if (time) {
        time = false
        pause.innerText = 'Continue'
    } else {
        time = true
        pause.innerText = 'Pause'
    }
})

incre.addEventListener('click', () =>{
    if (time) {
        counter.innerHTML = start++
    }
});
decre.addEventListener('click', () =>{
   if (time) {
        counter.innerHTML = start--
    }
}); 

like.addEventListener('click', () =>{
    if (time) {
         comment.innerHTML = 'Liked at '+ start
     }
 }); 

