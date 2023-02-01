const form = document.getElementById('form')
const campos = document.querySelectorAll('.required')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkinput();
})

function checkinput() {  

    campos.forEach((input, index,) => {
        const spans = document.querySelectorAll('.infor-obrigatorio')
    
        if (input.value !== '') {
            input.classList.add('aprovado'); 
            spans[index].style.display = 'none';     
        
        } else {
            input.classList.add('obrigatorio')
            spans[index].style.display = 'block';
        }
        })
}


// function checkinput() {  

//     campos.forEach((input, index,) => {
//         const spans = document.querySelectorAll('.infor-obrigatorio')
    
//         if (input.value !== '') {
//             input.style.border = '2px solid #3CCC87';   
//             spans[index].style.display = 'none';     
        
//         } else {
//             input.style.border = '2px solid #F52E2E';
//             spans[index].style.display = 'block';
//         }
//         })
// }
