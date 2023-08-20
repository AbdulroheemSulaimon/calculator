// alert


let inputElement = document.querySelector('.user-input');

function addValue(value) {
    

inputElement.value += value;
//   console.log(ans)
}

function del() {
    inputvalue = inputElement.value;
    inputElement.value = inputvalue.slice(0, -1);
}

function answer() {
    try{ inputElement.value = eval(inputElement.value);
    } catch (error) {
        inputElement.value = 'Math error';
    }
}

function cls() {
    inputElement.value = '';
}


function handleEqual(event) {
    if(event.key === 'Enter') {
        answer();
    }
}