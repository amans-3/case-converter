const form = document.getElementsByTagName("form")[0];
const textCases_Value = document.querySelectorAll("section input[type='text']");

function camel_PascalCase(wordArr, textCase){
    let result = "";

    wordArr.forEach((word, ind) => {
        if(word.trim() === "") return;

        else if(textCase.toLowerCase() === "camelcase"){ if(ind === 0) result += `${word}`;
            else result += `${word[0].toUpperCase()}${word.toLowerCase().slice(1, word.length)}`;
        }
        else result += `${word[0].toUpperCase()}${word.toLowerCase().slice(1, word.length)}`;
    })
    return result;
}

function snake_and_KebabCase(wordArr, textCase){

    let result = "";

    wordArr.forEach(word => {
        if(word.trim() === "") return;

        else if(textCase.toLowerCase() === "snakecase") result += word.toLowerCase() + "_";
        else if(textCase.toLowerCase() === "screamingsnakecase") result += word.toUpperCase() + "_";
        else if(textCase.toLowerCase() === "kebabcase") result += word.toLowerCase() + "-";
        else result += word.toUpperCase() + "-";
    })
    
    return (result.slice(0, result.length - 1));
}

form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    form.reset();
    let textValue = Object.fromEntries(formData)?.text?.trim();

    if(textValue === "") return;
    const wordArr = textValue.split(" ");

    const casesFormat = ["camelCase", "PascalCase", "snake_case", "SCREAMING_SNAKE_CASE" , "kebab-case", "SCREAMING-KEBAB-CASE"]
    casesFormat.forEach((format, index) => {

        let elem = textCases_Value[index];

        switch(format){
            case "camelCase": elem.value = camel_PascalCase(wordArr, "camelcase");
                break;
            case "PascalCase": elem.value = camel_PascalCase(wordArr, "pascalcase");
                break;
            case "snake_case": elem.value = snake_and_KebabCase(wordArr, "snakecase");
                break;
            case "SCREAMING_SNAKE_CASE": elem.value = snake_and_KebabCase(wordArr, "screamingSnakeCase");
                break;
            case "kebab-case": elem.value = snake_and_KebabCase(wordArr, "kebabcase");
                break;
            case "SCREAMING-KEBAB-CASE": elem.value = snake_and_KebabCase(wordArr, "screamingKebabCase");
                break;
            default : "Sorry...."
        }
        elem.classList.add("border", "border-2", "border-success");
    })
}


