// Random color set ;
const cards = document.getElementsByClassName("card");
for(let card of cards){
    
    card.addEventListener('mouseover', function(){
        // alert("hello")
        let randomColor = Math.floor(Math.random()*16777215).toString(16) 
        this.style.backgroundColor = "#"+ randomColor ;
    })
}


// this function Distribute the necessary variables together as a parameter;
function cardsInterActivities(name, editorBtn, inputFieldId, checkItn, inputId1, inputId2, varField1, varField2, CalculateBtnId, formulaExtraValue){
    // inputField Activation;
    inputFieldActive(editorBtn, inputFieldId);

    // This function for set variable in card variable field from input field;
    function setCardVar(){
        const inputValue1 = getInputValue(inputId1);
        const inputValue2 = getInputValue(inputId2);

        // This condition for validation wither input have or not;
        if(inputValue1 == "" || inputValue2 == ""){
            alert(
                "Something is missing in your inputs, Check it again...! :("
            )
            return false ;
        }else if(inputValue1 < 0 || inputValue2 < 0){
            alert(
                "Negative Values are not allowed."
            )
        }
        setValueInElement(varField1, inputValue1);
        setValueInElement(varField2, inputValue2);

        document.getElementById(inputFieldId).style.display = "none" ;

    }
    // set variable in card text with check button;
    document.getElementById(checkItn).addEventListener('click', setCardVar);

    // Collect the result and push them into result Field;
    document.getElementById(CalculateBtnId).addEventListener('click', function(){
        // card Variable set reused ;
        setCardVar();

        /* formulaValue will receive formulas fixed number value 
        than it will push on "calculation" function argument for calculation; */
        const formulaValue = formulaExtraValue ;
        // ------->
        const cardName = getElementText(name);
        const inputValue1 = getInputValue(inputId1);
        const inputValue2 = getInputValue(inputId2);
        // validation;
        if(inputValue1 == "" || inputValue2 == ""){
            return false ;
        }
        const result = calculation(inputValue1, inputValue2, formulaValue) ;
        
        // add new value 
        displayResultData (cardName, result) ;

        // call serial function of result field ;
        resultsSerial() ;
    });
}


// triangle;
const triangleHalf = 0.5 ; //According To Formula;
cardsInterActivities("name-triangle", "triangle-Edit", "triangle-inputField", "triangle-checkBtn", "triangle-Input1", "triangle-Input2", "triangle-Var1", "triangle-Var2", "triangleBtn", triangleHalf );
// ------------->

// rectangle
cardsInterActivities("name-rectangle", "rectangle-Edit", "rectangle-inputField", "rectangle-checkBtn", "rectangle-Input1", "rectangle-Input2", "rectangle-Var1", "rectangle-Var2", "rectangleBtn");
// ------------->

// parallelogram
cardsInterActivities("name-parallelogram", "parallelogram-Edit", "parallelogram-inputField", "parallelogram-checkBtn", "parallelogram-Input1", "parallelogram-Input2", "parallelogram-Var1", "parallelogram-Var2", "parallelogramBtn");
// ------------->

// rhombus
const rhombusHalf = 0.5 ; //According To Formula;
cardsInterActivities( "name-rhombus", "rhombus-Edit", "rhombus-inputField", "rhombus-checkBtn", "rhombus-Input1", "rhombus-Input2", "rhombus-Var1", "rhombus-Var2", "rhombusBtn", rhombusHalf );
// ------------->

// pentagon
const pentagonHalf = 0.5 ; //According To Formula;
cardsInterActivities("name-pentagon", "pentagon-Edit", "pentagon-inputField", "pentagon-checkBtn", "pentagon-Input1", "pentagon-Input2", "pentagon-Var1", "pentagon-Var2", "pentagonBtn", pentagonHalf );
// ------------->

// ellipse
const pi = 3.1415 ; //According To Formula;
cardsInterActivities("name-ellipse", "ellipse-Edit", "ellipse-inputField", "ellipse-checkBtn", "ellipse-Input1", "ellipse-Input2", "ellipse-Var1", "ellipse-Var2", "ellipseBtn", pi );
// ------------->


/*
function resultCreate(CalculateBtnId, inputId1, inputId2, formulaExtraValue){
    document.getElementById(CalculateBtnId).addEventListener('click', function(){
        const inputValue1 = getInputValue(inputId1);
        const inputValue2 = getInputValue(inputId2);
        const formulaValue = formulaExtraValue ;
        const result = calculation(inputValue1, inputValue2, formulaValue) ;
        const name = getElementText("name-triangle");
        displayResultData (name, result) ;
    });
}
const triangleHalf = 0.5 ;
resultCreate("triangleBtn", "triangle-Input1", "triangle-Input2", triangleHalf) ;
*/



// Create Update result data in result field ;
function displayResultData (name, result){
    const resultContainer = document.getElementById("result-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class= "serial">1</td>
    <td> ${name} </td>
    <td> <span>${result}</span> cm<sup>2</sup></td>
    <td><button class="convertBtn">Convert to m<sup>2</sup></button></td>
    <td><i class="fa-regular fa-trash-can removeCart" target = "remove"></i></td>
    ` ;
    resultContainer.appendChild(tr) ;
}


document.getElementById("result-container").addEventListener('click', function(event){
    const meterTarget = event.target.getAttribute("class");
    const removeTarget = event.target.getAttribute("target");
    if(meterTarget == "convertBtn"){
        const cm = event.target.parentNode.parentNode.children[2].children[0].innerText ;
        const meter = (+cm / 100) ;
        event.target.parentNode.parentNode.children[2].innerHTML = `<span>${meter}</span> m<sup>2</sup>` ;
        event.target.innerText = "Converted" ;
        event.target.setAttribute("class", "converted") ;
    }else if(removeTarget == "remove"){
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
        resultsSerial()
    }
})



// resultFieldSerial;
function resultsSerial(){
    let serialNo = 0
    const serialNoFiled = document.getElementsByClassName("serial");
    for(let i = 0; i < serialNoFiled.length; i ++){
        serialNo += 1 ;
        serialNoFiled[i].innerText = serialNo ;
    }
}