let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'X'){
            string += '*';
            input.value = string;
        }

        else if(e.target.innerHTML == 'Reset'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = (input.value).substring(0, input.value.length-1);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})





















// let string = '';

// let buttons = document.querySelectorAll('.button');

// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else if(e.target.innerHTML == 'Reset'){
//             string = '0';
//             document.querySelector('input').value = string;
//         }
//         else{
//             console.log(e.target)
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// })