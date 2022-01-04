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
let equalsButton = document.querySelector("#Equals")
let preValue = document.querySelector(".PreviousValue")
let curValue = document.querySelector(".CurrentValue")
let Model = document.getElementById("model")
const stack = new Stack() ;
const stack2 = new Stack() ;

numbersButtons.forEach(button => {
    button.addEventListener('click', () =>{
        if( button.textContent == ".") { if( curValue.textContent.indexOf(".") > -1 || curValue.textContent == "") { curValue.textContent = curValue.textContent}
                                             else { curValue.textContent += button.textContent}}
                                    else { if(preValue.textContent.indexOf("=") > -1) {} 
                                    else {curValue.textContent += button.textContent}}
        
    })
    
})


operationsButtons.forEach(button =>{
    button.addEventListener('click', () => {
       
        if(curValue.textContent == "" ) { if( preValue.textContent.endsWith("+") || preValue.textContent.endsWith("-") || preValue.textContent.endsWith("*" ) || preValue.textContent.endsWith("÷")) 
                                            { curValue.textContent = curValue.textContent}
                                        else {preValue.textContent += button.textContent }}
            else {  preValue.textContent = preValue.textContent + curValue.textContent + button.textContent
                stack.push(curValue.textContent);
                stack.push(button.textContent)
                curValue.textContent = ""}

    })
})

clearButton.addEventListener('click', () => {
    curValue.textContent = ""
    preValue.textContent = ''
    while(stack.size() !== 0) { stack.pop();}
    while(stack2.size() !== 0) { stack2.pop();}
    
})

let a=0
let b=0
equalsButton.addEventListener('click', () => 
{  if(preValue.textContent.endsWith('=') || preValue.textContent == "") { }
 else {preValue.textContent += curValue.textContent 
    stack.push(curValue.textContent)
    curValue.textContent = ""}
    if( preValue.textContent.indexOf ("=") >-1 || preValue.textContent == "") {preValue.textContent += curValue.textContent 
                                                curValue.textContent = ""}
                                                else {preValue.textContent += curValue.textContent + equalsButton.textContent }
    
 while ( stack.size() !==0) { stack2.push(stack.pop());}
 
 
 while ( stack2.size() >0) { 
    
     b=a;  
     a=stack2.pop(); 
     if ( a == "*" ) { stack.pop() ; let c = stack2.pop() ;  stack.push(parseFloat(b)*parseFloat(c)); c=0;}
      else {if  ( a == "÷" )  { stack.pop(); let c = stack2.pop() ;  stack.push(parseFloat(b)/parseFloat(c)); c=0;}  
        else {stack.push(a)}
    }
}
while (stack.size() > 0) { stack2.push(stack.pop());}
b=0;
a=0;

while (stack2.size() > 0 )
 { b=a;
a=stack2.pop();
if(a=="+") { let c = stack2.pop(); stack.push(parseFloat(b)+parseFloat(c)); c=0;}
if(a=="-") { let c = stack2.pop(); stack.push(parseFloat(b)-parseFloat(c)); c=0;}
}
curValue.textContent = stack.pop();
    
     
}
)

Model.addEventListener('click', () => {
    alert ("Molel No - X2022")
})
