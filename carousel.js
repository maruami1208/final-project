let sbtn = document.querySelectorAll('.swt');

let poll = document.querySelectorAll('.telists .slids');

let lists = document.querySelector('.telists');
 
for (const lge of sbtn) {

    lge.addEventListener('click', function(){

        let active = document.querySelector('.telists .active');
       
        active.classList.remove('active');

        if (lge.classList[2] == 'left') {
  
            if (active.previousElementSibling  == null) {
            
                poll[poll.length - 1].classList.add('active');
            } 
            else {
           
                active.previousElementSibling.classList.add('active');
            }

           


        }else{
            
            if (active.nextElementSibling == null) {
             
                poll[0].classList.add('active');
            }
            else{
               
                active.nextElementSibling.classList.add('active');
           
            }

          


        }

     

    })
}

for (const page in Object.keys(poll)) {
   
    let span = document.createElement('span');
    
    span.classList.add('paginator')
   
    span.setAttribute('data-index', page);

    document.querySelector('.pages').appendChild(span);

    span.addEventListener('click', function(){
      
        let active = document.querySelector('.telists .active');
       
        active.classList.remove('active');
       
        poll[span.getAttribute('data-index')].classList.add('active');
    
    })

}