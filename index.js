var num1 = "",num2="",operator="";
var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");
for(var i = 0;(operator==0);i++)
{
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value=='+'||value=='-'||value=="*"||value=='/')
        {
            // console.log(num1+" "+operator+" "+num2);
            num2 = num1;
            operator=value;
            num1 = "";
            display.innerText+=value;
        }
        else if(value =='%'){
            num1 = eval(num1/100);
            display.innerText = num1;
        }else if(value == '=')
        {
            // console.log("result " + num1 +" "+operator+" "+num2);
            num1 = eval(num2+operator+num1);
            display.innerText=num1;
            num2 = "";
            operator="";
        }
        else if(value=="sign")
        {
            num1 = (-1)*num1;
            display.innerText=num2+operator+num1;
        }
        else if(value =='ac'){
            if(num1==''&&operator=='')
            num2="";
            if(num1=='')
            {
                if(operator!='')
                // num2=="";
                // else
                operator="";
            }else{
                num1="";
            }
            // console.log(num2);
            display.innerText=num2+operator+num1;
        }else{
            num1+=value;
            display.innerText=num2+operator+num1;
        }
    })
}

var t = document;
console.log(t);