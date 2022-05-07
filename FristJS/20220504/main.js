var optionSelect = document.getElementById('option-select');
      
var submitBtn =document.getElementById('submit-btn');
submitBtn.addEventListener('click' , function() {
  var option = optionSelect.value;
  var currency =document.getElementById('currency').value;
  var result =document.getElementById('result');
 
  if (currency===NaN || currency===''){
      console.log("請輸入正確資料!");
      result.innerHTML= '<h4> 請輸入正確資料!</h4>';
  } 
  else if(option=='nt2us'){
    var outcome = parseFloat(currency) /30;
    result.innerHTML = 'US' + outcome.toFixed(2);
  }
  else if (option=='us2nt'){
    var outcome = parseFloat(currency)*30;
    result.innerHTML = "NT" + outcome.toFixed(2);
  }

});