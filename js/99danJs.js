// 구구단 출력하기
function gugudan(value){
    let i = value;
    let text =""
    let prt =document.querySelector('.print')
        for(let j = 1; j <= 9; j++) {
            text += i +" X "+j +" = "+ i*j +"<br>";
        }
    prt.innerHTML=text;
}
