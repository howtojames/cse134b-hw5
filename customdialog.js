export function customAlert(){
    this.dialogBox = function (message){
        var backgroundcolor = document.getElementById("background");
        var dialog = document.getElementById("box");
        var vbody = document.getElementById("body");
        var bValue = document.getElementById("bodyValue");
        backgroundcolor.style.display = "block";
        dialog.style.display = "block";
    
        bValue.innerHTML = message;
    }

    this.ok = function (){
        var backgroundcolor = document.getElementById("background");
        var dialog = document.getElementById("box");
        backgroundcolor.style.display = "none";
        dialog.style.display = "none";
    }
}

export function customConfirm(){

    this.dialogBox2 = function (message3){
        var backgroundcolor = document.getElementById("background2");
        var dialog = document.getElementById("box2");
        var vbody = document.getElementById("body2");
        var bValue2 = document.getElementById("bodyValue2");
        backgroundcolor.style.display = "block";
        dialog.style.display = "block";
    
        bValue2.innerHTML = message3;
    }

    this.cancel = function() {
        var backgroundcolor = document.getElementById("background2");
        var dialog = document.getElementById("box2");
        backgroundcolor.style.display = "none";
        dialog.style.display = "none";

        var rValue = document.getElementById("confirmReturnValue");
        var f = false;
        rValue.innerHTML = `The value returned by the custom confirm method is : ${f}`
    }
    this.ok  = function() {
        var backgroundcolor = document.getElementById("background2");
        var dialog = document.getElementById("box2");
        backgroundcolor.style.display = "none";
        dialog.style.display = "none";

        var rValue = document.getElementById("confirmReturnValue");
        var t = true;
        rValue.innerHTML = `The value returned by the custom confirm method is : ${t}`
    }
}

export function customPrompt(){

    this.dialogBox3 = function (message3){
        var backgroundcolor = document.getElementById("background3");
        var dialog = document.getElementById("box3");
        var vbody = document.getElementById("body3");
        var bValue2 = document.getElementById("bodyValue3");
        
        backgroundcolor.style.display = "block";
        dialog.style.display = "block";

        bValue2.innerHTML = message3;
    }

    this.cancel = function() {
        var backgroundcolor = document.getElementById("background3");
        var dialog = document.getElementById("box3");
        backgroundcolor.style.display = "none";
        dialog.style.display = "none";

        var rValue2 = document.getElementById("promptReturnValue");
        
        rValue2.innerHTML = `User didn't enter anything`;
    }
    this.ok  = function() {
        var backgroundcolor = document.getElementById("background3");
        var dialog = document.getElementById("box3");
        backgroundcolor.style.display = "none";
        dialog.style.display = "none"; 

        /*get value only when you click ok*/
        var pInput = document.getElementById("promptInput");
        var pInputValue = pInput.value;
        const cleanedInput = DOMPurify.sanitize(pInputValue);

        var rValue2 = document.getElementById("promptReturnValue");
       

        if(pInputValue == "")
            rValue2.innerHTML = `User didn't enter anything`;
        else
            rValue2.innerHTML =`Welcome ${cleanedInput}!`;
    }
}

