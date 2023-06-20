// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//event listener for clicking heart 
for (let click of document.getElementsByClassName("like-glyph")) {
  click.addEventListener("click", likePost);
}

//like post function that is called from event listener
function likePost(event) {
  const heart = event.target;
  //if user clicks an empty heart it "calls server" and activates full heart
  if (heart.textContent === EMPTY_HEART) {
    mimicServerCall()
      .then(() => {
        heart.textContent = FULL_HEART;
        heart.classList.add("activated-heart");
      })
      //if server call returns an error, error message appears
      .catch((error) => {
        document.getElementById("modal-message").textContent = error;
        document.getElementById("modal").classList.remove("hidden");
        setTimeout(() => {
          document.getElementById("modal").classList.add("hidden");
        }, 3000);
      });
  //if user clicks on full heart it switches to an empty heart to remove like    
  } else {
    
    heart.textContent = EMPTY_HEART;
    heart.classList.remove("activated-heart");
  }
}


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
