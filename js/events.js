//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    this.addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function() {
    const key = e.key
    if (key === "g"){
      alert('You pressed G')
    }
  })
}

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
});
