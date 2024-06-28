function changebg(){
    var scrollvalue= window.scrollY;
    console.log(scrollvalue);
    var navbar= document.getElementById('navbar')
    if(scrollvalue>150){
        navbar.classList.add('bgColor');
        console.log('hiii success bg change');
    }
    else{
        navbar.classList.remove('bgColor');
        console.log('hiii failed bg change');
    }

}
window.addEventListener('scroll',changebg)


const section= document.querySelectorAll('section');
const navList= document.querySelectorAll('nav .container .collapse ul li a');
var about= document.querySelectorAll('aboutLink')

function nv(){
    console.log(about);
    let current ='';
    let a=navList;
    var scrollvalue= window.scrollY;
    console.log(a);
    if(scrollvalue >= 700){
        if(scrollvalue <=1400){
        about.classList.add("active")
        }
    }
    else{
        about.classList.remove("active");
    }
  //  const sectiontop= section.offsetTop;
   // console.log(sectiontop);
   //const sectionHeight = section.clientHeight;
   //console.log(sectionHeight);
    // if(pageYOffset >= sectiontop){
    //     current = section.getAttribute('id')
    // }
    // // console.log(current);
    // console.log(navList);

}

window.addEventListener('scroll',nv)
