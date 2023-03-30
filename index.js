var num1 = "",num2="",operator="";
var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");

for(var i = 0;i<buttons.length;i++)
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

    document.addEventListener('keypress', (event) => {
        var value = event.key;
        // if(value == 'Backspace')
        // alert("This is not ");
        console.log(value);
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
        }else if(value == '='||value == 'Enter')
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
        else if(value == 'Backspace'||value=='delete'||value=='Delete'){
            if(num1==''&&operator=='')
            num2="";
            if(num1=='')
            {
                if(operator!='')
                operator="";
            }else{
                num1="";
            }
            // console.log(num2);
            display.innerText=num2+operator+num1;
        }else if(value=='1'||value=='2'||value=='3'||value=='4'||value=='5'||value=='6'||value=='7'||value=='8'||value=='9'||value=='0'){
            num1+=value;
            display.innerText=num2+operator+num1;
        }
    },false);

    // document.addEventListener('keypress',(event)=>{
    //     var value = event.key;
    //     if(value=='Backspace')
    //     {
    //         if(num1==''&&operator=='')
    //         num2="";
    //         if(num1=='')
    //         {
    //             if(operator!='')
    //             operator="";
    //         }else{
    //             num1="";
    //         }
    //         // console.log(num2);
    //         display.innerText=num2+operator+num1;
    //     }
    // })
