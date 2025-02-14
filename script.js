const $ = document

const passwordInput = $.querySelector("#password");
const warningElem = $.querySelector("#warning");

passwordInput.addEventListener('keyup', event=>{

    if (event.getModifierState('CapsLock')) {
        warningElem.style.display = 'block'
    }else{
        warningElem.style.display = "none";

    }
})