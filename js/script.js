const number1 = document.querySelector('.number1 span');
const number2 = document.querySelector('.number2 span');
let zero = 0;
let zero2 = 0;


document.querySelector('.presentation-content img').addEventListener('load', function(){

    let intersect1 = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {
            console.log(entry);
            if(entry.isIntersecting) {
                const n1Timer = setInterval(() => {
        
                    if(zero.toString().includes('1.4')) {
                        clearInterval(n1Timer);
                    } else {
                        zero += 0.1;
                        number1.innerHTML = zero.toFixed(1); 
                    }
                
                }, 100);
            }
        });
    
    }, {threshold: 0});

    let intersect2 = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                const n2Timer = setInterval(() => {
        
                    if(zero2.toString().includes('2.7')) {
                        clearInterval(n2Timer);
                    } else {
                        zero2 += 0.1;
                        number2.innerHTML = zero2.toFixed(1); 
                    }
                
                }, 100);
            }
        });
    
    }, {threshold: 0});

    intersect1.observe(number1);
    intersect2.observe(number2);

});




