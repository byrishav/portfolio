
const words=[
'Java Developer',
'Building Enterprise Software Solutions',
'Healthcare ERP Developer'
];
let i=0,j=0,del=false;
const t=document.getElementById('typing');
setInterval(()=>{
if(!del){
t.textContent=words[i].slice(0,++j);
if(j===words[i].length)del=true;
}else{
t.textContent=words[i].slice(0,--j);
if(j===0){del=false;i=(i+1)%words.length;}
}
},90);

document.querySelectorAll('.slider').forEach(slider => {

    const slides = slider.querySelector('.slides');
    const images = slider.querySelectorAll('img');

    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');

    let index = 0;

    function showSlide() {
        slides.style.transform =
            `translateX(-${index * 100}%)`;
    }

    next.addEventListener('click', () => {
        index++;

        if(index >= images.length){
            index = 0;
        }

        showSlide();
    });

    prev.addEventListener('click', () => {
        index--;

        if(index < 0){
            index = images.length - 1;
        }

        showSlide();
    });

    setInterval(() => {
        index++;

        if(index >= images.length){
            index = 0;
        }

        showSlide();
    },4000);

});
