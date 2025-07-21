//class 11

// let text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem perferendis nisi repellat totam beatae laboriosam veritatis repudiandae, eius vero animi illo culpa optio, placeat ad officiis, labore maiores sapiente eum!";

// text = text.toLocaleLowerCase()
// let makeUpper = true
// let result = ""
// for (let i=0; i<text.length; i++ ){
//     let char = text[i];
//     if(makeUpper && char >= "a" && char <= "z"){
//         result = result + char.toLocaleUpperCase();
//         makeUpper = false;
//     }
//     else{
//         result = result + char;
//     }
//     if(char === " "){
//         makeUpper = true;
//     }
// }
// console.log(result)




let str = "*******";
for(let i = 0; i<7; i++){
    document.write("<h1>" + str + "</h1>")
    str = str.slice(0 , str.length -1)
}