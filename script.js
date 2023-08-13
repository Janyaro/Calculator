
 document.addEventListener('DOMContentLoaded', () => {
    let string = "";
    const buttons = document.querySelectorAll('.button');
    const scrn = document.querySelector('.input');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML === '=') {
                string = eval(string);
                scrn.value = string;
            } else if (e.target.innerHTML === 'C') {
                string = "";
                scrn.value = "";
            } else if (e.target.innerHTML === 'CE') {
                string = string.slice(0, -1);
                scrn.value = string;
            }else if (e.target.innerHTML === '%') {
                        // Calculate the percentage and update the string
                        string = (parseFloat(string) / 100).toString();
                        scrn.value = string;
                    }else if(scrn.value==null){
                     scrn.value=" "
                    }else {
                string += e.target.innerHTML;
                scrn.value = string;
            }
        });
    });
});

