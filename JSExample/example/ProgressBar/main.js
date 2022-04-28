function move(){
    var elem =document.getElementById("myBar");
    var width = 1;
  
    //則是固定延遲了某段時間之後，才去執行對應的程式碼，然後「不斷循環」。
    //也會回傳一個獨立的 timer ID
    var id = setInterval(frame ,10);
    function frame(){
        if (width>=100){
            clearInterval(id);
        }
        else{
            width++;
            elem.style.width = width+'%';
            elem.innerHTML = width+"%";
        }
    }


}