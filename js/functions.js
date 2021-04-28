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
   var slides = document.getelementsByClassName("mySlides");
   var dots = document.getelementsByClassName("demo");
   var captionText = document.getelementById("caption");
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


  // SeÇÃO HORARIOS 


  //fitdance 30

 function fitdance30() {
  let elements = document.getElementsByClassName('fitdance30')
  for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener('mouseover', function() {
      this.style.backgroundColor = '#c86784'
      this.innerHTML = 'Prof Paty Rodrigues'
    })
 
    elements[i].addEventListener('mouseout', function() {
      this.style.backgroundColor = 'white'
      this.innerHTML = 'FIT DANCE 30'
    })
  }
 }

 //fitdance

 function fitdance() {
  let elements = document.getElementsByClassName('fitdance')
  for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener('mouseover', function() {
      this.style.backgroundColor = '#B03B0E'
      this.innerHTML = 'Prof Paty Rodrigues'
    })
 
    elements[i].addEventListener('mouseout', function() {
      this.style.backgroundColor = 'white'
      this.innerHTML = 'FIT DANCE'
    })
  }
 }

 //JUMP
 function jump() {
  let elements = document.getElementsByClassName('jump')
  for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener('mouseover', function() {
      this.style.backgroundColor = '#97977F'
      this.innerHTML = 'Prof Paty Rodrigues'
    })
 
    elements[i].addEventListener('mouseout', function() {
      this.style.backgroundColor = 'white'
      this.innerHTML = 'JUMP'
    })
  }
 }


 //funcional
function funcional() {
  let elements = document.getElementsByClassName('funcional')
  for(let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function() {
      this.style.backgroundColor = '#57FAA4'
      this.innerHTML = 'Prof Fábio'
    })

    elements[i].addEventListener('mouseout', function() {
      this.style.backgroundColor = 'white'
      this.innerHTML = 'FUNCIONAL'
    })
  }
}

//funcional kids

function funcionalKids() {
  let elements = document.getElementsByClassName('funcionalKids')
  for(let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function() {
      this.style.backgroundColor = '#FAF557'
      this.innerHTML = 'Prof Fábio'
    })

    elements[i].addEventListener('mouseout', function() {
      this.style.backgroundColor = 'white'
      this.innerHTML = 'FUNCIONAL KIDS'
    })
  }
}

//RPM

function rpm() {
  let elements = document.getElementsByClassName('rpm')
  for(let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function() {
      this.style.backgroundColor = '#4FADFC'
      this.innerHTML = 'Prof Paloma'
    })

    elements[i].addEventListener('mouseout', function() {
      this.style.backgroundColor = 'white'
      this.innerHTML = 'RPM'
    })
  }
}

//GAP
function gap() {
  let elements = document.getElementsByClassName('gap')
  for(let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function() {
      this.style.backgroundColor = '#857F97'
      this.innerHTML = 'Prof Paloma'
    })

    elements[i].addEventListener('mouseout', function() {
      this.style.backgroundColor = 'white'
      this.innerHTML = 'GAP'
    })
  }
}