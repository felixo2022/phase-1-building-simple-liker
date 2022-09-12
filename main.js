// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const notice= document.querySelector('#modal')
notice.className= 'hidden'
let likeGlyph = document.querySelectorAll('.like-glyph')

likeGlyph.forEach.apply(addEventListener('click', function(event) {
  event.preventDefault()
  alert('♥')
  alert('❤️')




  if (event.target.innerHTML=== EMPTY_HEART) {
    mimicServerCall()
    .then(() => {
      event.target.innerHTML = FULL_HEART
      event.target.classList.add('activated-heart')
    })
    .catch( () =>{
      notice.classList.remove('hidden')
      setTimeout(()=>notice.classList.add('hidden'), 3000)
    }
    )
  }
  else{
    event.target.innerHTML = EMPTY_HEART
    event.target.classList.remove('activated-heart')
  }
  
}))




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
