class Stack {
    items = []
    push = (element) => this.items.push(element)
    pop = () => this.items.pop()
    isempty = () => this.items.length === 0
    empty = () => (this.items.length = 0)
    size = () => this.items.length
  }



let numbersButtons = document.querySelectorAll(".Numbers")
let operationsButtons= document.querySelectorAll(".Operations")
let clearButton = document.querySelector("#Clear")
let deleteButton = document.querySelector(".Delete")
let equalsButton = document.querySelector("#Equals")
let preValue = document.querySelector(".PreviousValue")
let curValue = document.querySelector(".CurrentValue")
const stack = new Stack() ;

// გამოაქვს ციფრები
numbersButtons.forEach(button => {
    button.addEventListener('click', () =>{
        if( button.textContent == ".") { if( curValue.textContent.indexOf(".") > -1 || curValue.textContent == "") { curValue.textContent = curValue.textContent}
                                             else { curValue.textContent += button.textContent}}
                                    else { curValue.textContent += button.textContent}
        
    })
})

// ოპერაციები
operationsButtons.forEach(button =>{
    button.addEventListener('click', () => {
        if(curValue.textContent == " ") { curValue.textContent = curValue.textContent}
        if(curValue.textContent == "" ) { curValue.textContent = curValue.textContent}
            else {  preValue.textContent = preValue.textContent + curValue.textContent + button.textContent
                curValue.textContent = ""}

    })
})


deleteButton.addEventListener('click', () => {
    if(curValue.textContent == "") { let P = preValue.textContent; 
                                    preValue.textContent = ""
        for ( let i = 0 ; i < P.length -1 ;  i++  ) { preValue.textContent += P[i]

    }

    }
    else { let C = curValue.textContent
                curValue.textContent = ""
        for ( let i = 0 ; i < C.length -1 ;  i++  ) { curValue.textContent += C[i]

    }}

})
//  წაშლა სულ
clearButton.addEventListener('click', () => {
    curValue.textContent = ""
    preValue.textContent = ''
    while(stack.size() !== 0) { stack.pop();}
})


equalsButton.addEventListener('click', () => 
{  preValue.textContent += curValue.textContent 
    curValue.textContent = ""
    if( preValue.textContent.endsWith ("=")) {preValue.textContent += curValue.textContent 
                                                curValue.textContent = ""}
                                                else {preValue.textContent += curValue.textContent + equalsButton.textContent }
    
    let pr = preValue.textContent;
    for ( let i=0; i<pr.length; i++) 
    { stack.push(pr[i]); 
     if ( pr[i] == '*') {let a = stack.pop(); 
                         let b = pr[i+1];
                        stack.push(a*b);
                        a=0; b=0;    } 
    if ( pr[i] == '÷') {let a = stack.pop(); 
                         let b = pr[i+1];
                        stack.push(a/b);
                        a=0; b=0;    }}

 
console.log(stack)
})

