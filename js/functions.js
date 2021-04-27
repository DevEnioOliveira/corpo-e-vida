$(document).ready(function(){
    $('#carousel').carousel({
        interval:3000,
        transition: 2000
    })
})

/**
 * galeria carrousel
 */

 showSlides(slideIndex);

 // Next/previous controls
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 // Thumbnail image controls
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("demo");
   var captionText = document.getElementById("caption");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
   captionText.innerHTML = dots[slideIndex-1].alt;
 }

 $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


  // galeria fitdance

  $(document).ready(function () {

    //hide all descriptions
    $('.description').hide();
  
    function showFullHeight() {
  
       $('.gallery li').each(function() {
  
         $(this).find('.btn').click(function(e){
  
         console.log('Botão clicado');
        
        e.preventDefault();
  
        
         $('.description').slideUp('normal');
  
        
        if($(this).next().is(':hidden') == true) {
          
          
          $(this).addClass('on');
            
         
          $(this).next().slideDown('normal');
  
  
  
         } 
            
       }); //click
      });//each
    }//function
  
  
    //load the function when the doc is ready		
    showFullHeight();
    
  });


  // SEÇÃO HORARIOS 


  //fitdance
function fitdanceIn(e) {
  e.style.backgroundColor = '	#DEB887'
  
  let fitdance = document.querySelector('#fitdance');
  fitdance.style.height = '10px'
  fitdance.innerHTML= 'Prof Paty Rodrígues';
  fitdance.style.textShadow = '1px 1px 1px black'
  
}

function fitdanceOut(e) {
  e.style.backgroundColor = 'white'
  let fitdance = document.querySelector('#fitdance');
  fitdance.innerHTML= 'FITDANCE'
}



function fitdance2In(e) {
  e.style.backgroundColor = '	#DEB887'
  
  let fitdance = document.querySelector('#fitdance2');
  fitdance.style.height = '10px'
  fitdance.innerHTML= 'Prof Paty Rodrígues';
  fitdance.style.textShadow = '1px 1px 1px black'
  
}

function fitdance2Out(e) {
  e.style.backgroundColor = 'white'
  let fitdance = document.querySelector('#fitdance2');
  fitdance.innerHTML= 'FITDANCE'
}


//funcional

function funcionalIn(e) {
  e.style.backgroundColor = '	#aE2887'
  
  let fitdance = document.querySelector('#funcional');
  fitdance.style.height = '10px'
  fitdance.innerHTML= 'Prof Fábio';
  fitdance.style.textShadow = '1px 1px 1px black'
  
}

function funcionalOut(e) {
  e.style.backgroundColor = 'white'
  let fitdance = document.querySelector('#funcional');
  fitdance.innerHTML= 'FITDANCE'
}
