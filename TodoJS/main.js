var submitBtn=document.getElementById('submit-btn');
var result = document.getElementById('result');
submitBtn.addEventListener('click' , function(e){
    var todoinput = document.getElementById('todo-input').value;
    console.log(todoinput);
    if (todoinput !==''){
        var todo = document.createElement('LI');
        todo.innerHTML = todoinput + '<button>X</button>';
        result.appendChild(todo);
        document.getElementById('todo-input').value='';
    }else{
        alert('請輸入值');
    }
});

result.addEventListener('click' , function(e) {
    console.log(e.target.parentNode.parentNode);
   e.target.parentNode.parentNode.removeChild(e.target.parentNode);
});
