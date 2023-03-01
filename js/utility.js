function inputFieldActive(btnId, inputFieldId){
    document.getElementById(btnId).addEventListener("click",function(){
        document.getElementById(inputFieldId).style.display = "flex" ;
    })
}

function getInputValue(inputId){
    const inputValueString = document.getElementById(inputId).value;
    console.log(inputValueString);
    return inputValueString ;
}

function getElementText(elementId){
    const elementText = document.getElementById(elementId).innerText
    return elementText ;
}

function setValueInElement(elementFieldId, value){
    document.getElementById(elementFieldId).innerText = value;
}

function calculation(inputValue1, inputValue2, formulaExtraValue){
    if(formulaExtraValue == false || formulaExtraValue == undefined){
        // Convert string to number by add (+)with string and multiple ;
        const multiplicationTow = +inputValue1 * +inputValue2 ; 
        if(!Number.isInteger(multiplicationTow)){
            return multiplicationTow.toFixed(2);
        }
        return multiplicationTow ;
    }else{
        // Convert string to number by add (+)with string and multiple ;
        const multiplicationThree = +inputValue1 * +inputValue2 * +formulaExtraValue; 
        if(!Number.isInteger(multiplicationThree)){
            return multiplicationThree.toFixed(2);
        }
        return multiplicationThree ;
    }
    
}