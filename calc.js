function calculate(val)
{
    document.querySelector('input').value+=val;
}
function equal()
{
    var result=document.querySelector('input').value;
    result=eval(result);
    document.querySelector('input').value=result;
}
function clear()
{
    var string="";
    document.querySelector('input').value=string;
}