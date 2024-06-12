let string = "";
let newString = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('.input').value = string;
            newString = string;
            window.localStorage.setItem("string",newString)
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('.input').value = string;
        }
        else if (e.target.innerHTML == 'M+'){
            let sign = console.log(e.target.innerHTML[1])
            newStrr = string +sign
            window.localStorage.setItem("string",newStrr)
            console.log(newStrr)
            // console.log(newStrr)
            
        } 
        
        else{
            try {
                // console.log(e.target.innerHTML);
                string = string + e.target.innerHTML;
                console.log(string)
                document.querySelector('.input').value = string;
            } catch (error) {
                document.querySelector('.input').value = 'Error';
            }
        
        }
    })
})