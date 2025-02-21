function evaluatePostfix(expression) {
    let values = {
        a: 3,
        b: 5,
        c: 2,
        d: 8
    };
    
    let stack = [];
    
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        
        if (/[a-z]/.test(char)) {
            stack.push(values[char]);
        } 
        
        else if ("+-*".includes(char)) {
            let b = stack.pop(); 
            let a = stack.pop(); 

            switch (char) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
            }
        }
        console.log(stack)
    }

    return stack.pop();
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    console.clear()

    const formData = new FormData(event.target)
    const expression = formData.get('expression')

    if (expression) {
        const result = evaluatePostfix(expression);

        const h2Element = document.querySelector('h2[name="display"]')
        h2Element.textContent = `The result equals ${result}`
        console.log("The result equals:", result);
    } else {
        console.log("input can't be empty")
    }
})