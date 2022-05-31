// 1)Напишите функцию, которая принимает массив строк. Вернуть самую длинную строку.
function maxLength(arr){
    let maxIndex = 0;
    for(let i = 0; i<arr.length; i++){
        if (arr[i].length > arr[maxIndex].length)
            maxIndex = i;
    }
    return arr[maxIndex];
}

// 2)Напишите функцию, которая принимает строку и возвращает символ, который чаще всего 
function symbol(str){
    function charVal(char){
        this.char = char;
        this.len = 1;
    }
    let flag = false;
    let buf = [];
    buf.push(new charVal(str.charAt(0)))
    for (let i = 1; i<str.length; i++){
        for (let j = 0; j<buf.length; j++){
           
            if (str.charAt(i) == buf[j].char){
                buf[j].len++
                flag = true;
                break;
            } else
                buf.push(new charVal(str.charAt(i)));
        }
    }

    return buf.sort((a, b) => a.len > b.len? -1 : 1)[0].char;
}

//3) Замените в строке из предыдущего задания самый часто встречающийся символ на символ, 
//который введет пользователь через prompt или input

function changeChar(string, char, newChar){
    let stringRes = ""; 
    for (let i = 0; i<string.length; i++){
        if (string.charAt(i) == char){
            stringRes+=newChar;
            continue;
        }
        stringRes+=string.charAt(i);
    }
    return stringRes;
}

//4) Напишите функцию, принимающую 2 строки и возвращающую true, если строки являются 
//   анаграммами



function containsChar(string, char){
    for (let i = 0; i<string.length; i++){
        if (string.charAt(i) == char)
            return true;
        
    }
    return false;
}

function anagrams(str1, str2){
    if (str1.length != str2.length)
        return false;
    for (let i = 0; i<str1.length; i++){
        if (!containsChar(str2, str1.charAt(i)))
            return false;
    return true;
    }
}

let stringCount = 1;

function addStrings(){
    stringCount++;
    document.querySelector(".strings").innerHTML += `<label for="str${stringCount}">Строка ${stringCount}: </label>
    <input type = "text" id = "str${stringCount}">`;
}


function maxLengthString(){
    document.querySelector(".ex1res").innerHTML = "";
    let array = [];
    for (let i = 1; i<stringCount; i++){
        array.push(document.getElementById(`str${i}`).value);
    }
    stringCount = 1;
    document.querySelector(".strings").innerHTML = `<label for="str${stringCount}">Строка ${stringCount}: </label>
    <input type = "text" id = "str${stringCount}">`;
    document.querySelector(".ex1res").innerHTML += maxLength(array);
}

function replaceCharExecute(){
    let string = document.querySelector("#strex2").value;
    let newChar = document.querySelector("#charRepl").value;
    let char = symbol(string);
    document.querySelector(".res3").innerHTML = changeChar(string, char, newChar);
}

function symbolExecute(){
    let resblock = document.querySelector(".res2");
    resblock.innerHTML = "";
    let string = document.querySelector("#strex2").value;
    resblock.innerHTML = symbol(string);
    
}


function anagramsExecute(){
    let str1 = document.getElementById("str1An").value;
    let str2 = document.getElementById("str2An").value;
    document.querySelector(".res4").innerHTML = anagrams(str1, str2);
}

