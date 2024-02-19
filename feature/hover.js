const container_element = document.querySelectorAll('.container_element');
const container_text = document.querySelectorAll('.container_text');

const vx = 0.1 + '%';
const vy = 0.1 + '%';


function hover(){
    document.onmousemove = (e) => {
        const x = e.pageX*20/window.innerWidth + '%';
        const y = e.pageY*20/window.innerWidth + '%';

        container_element.forEach((element)=>{
            element.style.transform = `translate(${x}, ${y})`;
            element.style.transition = `transform 1s ease-out`;
        })

        

        container_text.forEach((text)=>{
            text.style.transform = `translate(${x}, ${y})`;
            text.style.transition = `transform 1s ease-out`;

        })

    }
}

function move(xAim, yAim){

}


export default hover;