let btn= document.getElementById("btn1");
btn.addEventListener("click",submit);

function submit(){
    console.log("hello");
    let div=document.createElement("div");
    document.body.appendChild(div);
    //div.style.backgroundColor="blue";
    div.style.display="flex";
    div.style.gap="3vw";
    div.style.border="2px solid black";
    div.style.width="50%";
    div.style.minHeight="10vh";
    div.style.marginInline="26vw"
    div.style.marginBlock="4vh";
    div.style.justifyContent="space-between";
    div.style.alignItems="center";
    div.style.paddingInline="1vw";
    let divi=div.classList;
    divi.add("divi");

    let input=document.createElement("div");
    let btn2= document.createElement("button");
    let btn3=document.createElement("button");

    div.appendChild(input);
    input.style.width="80%";
    input.style.minHeight="6vh";
    input.style.border="2px solid black";
    input.style.fontSize="2vmax";
    input.style.color="black";
    input.style.fontWeight="600";
    let inpu=input.classList;
    inpu.add("inpus");
   // console.log("inpu");
   // console.log(input);

    div.appendChild(btn2);
    btn2.style.border="2px solid black";
    btn2.style.backgroundColor="green";
    btn2.style.color="white";
    btn2.style.paddingInline="2vw";
    btn2.style.paddingBlock="1vw";
    btn2.style.fontSize="1.2vmax";
    btn2.innerText="Edit";
    btn2.style.borderBottomLeftRadius="4px";
    btn2.style.borderTopRightRadius="4px";
    btn2.style.borderBottomLeftRadius="4px";
    btn2.style.borderTopRightRadius="4px";

    div.appendChild(btn3);
    btn3.style.border="2px solid black";
    btn3.style.backgroundColor="red";
    btn3.style.color="white";
    btn3.style.paddingInline="2vw";
    btn3.style.paddingBlock="1vw";
    btn3.style.fontSize="1.2vmax";
    btn3.innerText="Delete";
    btn3.style.borderBottomLeftRadius="4px";
    btn3.style.borderTopRightRadius="4px";
    btn3.style.borderBottomLeftRadius="4px";
    btn3.style.borderTopRightRadius="4px";

    let inputfiled=document.querySelector(".input1").value;
   // console.log(inputfiled);
    input.textContent=inputfiled;


    btn2.addEventListener("click",function update(){
        let submitbtn=document.getElementById("btn1");
        submitbtn.innerText="Edit";
        
     //   edit();
       submitbtn.addEventListener("click",edit);
    });

    btn3.addEventListener("click", function deletes(){
        let del= document.querySelector(".divi");
        del.remove();
    })
}

function edit(){
    let submitbtn=document.getElementById("btn1");
    if(submitbtn.value=="Edit"){
    let inputfiled=document.querySelector(".input1").value;
    let divinput=document.querySelector(".inpus");
    divinput.innerText=inputfiled;
    }
    else{
     //let submitbtn=document.getElementById("btn1");
      submitbtn.innerText="Submit";
}
}

