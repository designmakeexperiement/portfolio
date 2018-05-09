//navbar transitions

$(window).scroll(function(){

	if ( $(document).scrollTop() > 550 ) {			
		$('header').addClass('fixednav');
		$('.logo').css("display","none");
	}

	else {
		$('header').removeClass('fixednav').css('opacity', '1');
		$('.logo').css("display","block");
	}
})


$("#work").click(function(e) {
	e.preventDefault();
	console.log("click!")
    $('html, body').animate({
        scrollTop: $("#worksection").offset().top -150
    }, 800);
});


//title with changing words
var nameAttribute = ["scientists", "designers", "learners"];
var nameAttribute2 = ["code", "design", "discover", "research"];
var nameCounter = 0;
var nameCounter2 = 0;
// var letterCounter = 0;

function typingAnimation(word, num) {
  return (word.substring(0, num));
}

// function typingTimer() {
//   if (nameAttribute[nameCounter].length >= letterCounter) {
//     letterCounter += 1
//   }
// // console.log(letterCounter);
//   return letterCounter;
// }

function changeName() {
  var totalLetters = nameAttribute[nameCounter].length + nameAttribute2[nameCounter2].length;
  var j = 0;
  (function typingTimer(i) {
    setTimeout( function() {
      var nameElement = document.getElementById("name");
      nameElement.innerHTML = "We are " + typingAnimation(nameAttribute[nameCounter], j) + " who " + typingAnimation(nameAttribute2[nameCounter2], (j - nameAttribute[nameCounter].length));
      j++;
      if (--i) {
        typingTimer(i);
      }
    }, 100);
  })(totalLetters + 2)
  // for (i = 0; i  <= totalLetters; i++) (function(t) {
  //   window.setTimeout(function() {
  // console.log(i);
  //     var nameElement = document.getElementById("name");
  //     nameElement.innerHTML = "We are " + typingAnimation(nameAttribute[nameCounter], i) + " who " + nameAttribute2[nameCounter2];
  //   }, t * 200)
  // })
  if (nameCounter >= (nameAttribute.length - 1)) {
    nameCounter = 0;
  } else {
    nameCounter += 1;
  }
  if (nameCounter2 >= (nameAttribute2.length - 1)) {
    nameCounter2 = 0;
  } else {
    nameCounter2 += 1;
  }
  console.log(nameAttribute2[nameCounter2])

}

// function typingSpeed() {
//   window.setInterval(typingTimer, 200)
// }

window.setInterval(changeName, 5000);
// window.setTimeout(typingSpeed, 3000);

