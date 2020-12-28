let screen=document.getElementById("display");
console.log(screen);
buttons=document.querySelectorAll("button");

screenValue='';


for(var item of buttons)
{
  item.addEventListener("click",function(){
    console.log(this.innerText)
    buttonText=this.innerText;
    if(buttonText=="C")
    {screenValue="";}

    else if(buttonText=="=")
    {screenValue=eval(screenValue);}

    else if(buttonText=="B")
    {
      if(p>=0&&p<=9)
      screenValue=Math.floor(screenValue/10);
    else
      screenValue=p;}



    else{
      p=screenValue;
      screenValue+=buttonText;
    }

    $("#display").attr("value",screenValue);
  })
}
