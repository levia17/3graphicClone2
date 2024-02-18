const container_element = document.querySelectorAll('.container_element');
const container_text = document.querySelectorAll('.container_text');


function hover(){
    document.onmousemove = (e) => {
        const x = e.clientX*10/window.innerWidth + '%';
        const y = e.clientY*10/window.innerWidth + '%';

        container_element.forEach((element)=>{
            element.style.transform = `translate(${x}, ${y})`;
            // element.style.transform = `translateY(${y})`;
        })

        container_text.forEach((text)=>{
            text.style.transform = `translate(${x}, ${y})`;
            // text.style.transform = `translateY(${y})`;
        })

        console.log('hi!');


    }
}


export default hover;