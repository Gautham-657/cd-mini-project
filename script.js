function convert() {
	const infix = document.getElementById("infix-expression").value;
	const postfix = infixToPostfix(infix);
	const prefix = infixToPrefix(infix);
	document.getElementById("postfix-expression").value = postfix;
	document.getElementById("prefix-expression").value = prefix;
  }
  
  function infixToPostfix(infix) {
	const precedence = {"+": 1, "-": 1, "*": 2, "/": 2, "^": 3};
	let output = [];
	let stack = [];
	for (let i = 0; i < infix.length; i++) {
	  let char = infix.charAt(i);
	  if (char.match(/[a-z0-9]/i)) {
		output.push(char);
	  } else if (char == "(") {
		stack.push(char);
	  } else if (char == ")") {
		while (stack[stack.length - 1] != "(") {
		  output.push(stack.pop());
		}
		stack.pop();
	  } else {
		while (stack.length > 0 && stack[stack.length - 1] != "(" && precedence[char] <= precedence[stack[stack.length - 1]]) {
		  output.push(stack.pop());
		}
		stack.push(char);
	  }
	}
	while (stack.length > 0) {
	  output.push(stack.pop());
	}
	return output.join("");
  }
  
  function infixToPrefix(infix) {
	infix = infix.split("").reverse().join("");
	let prefix = infixToPostfix(infix);
	prefix = prefix.split("").reverse().join("");
	return prefix;
  }
  