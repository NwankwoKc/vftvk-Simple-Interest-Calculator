let p;
let r;
let y;
let calcualte;
let sp = document.getElementById("span");
function compute()
{
    let ps = document.getElementById("principal");
    p = document.getElementById("principal").value;
    console.log(p);
    r = document.getElementById("rate").value;
    console.log(r);
    y = document.getElementById("years").value;
    console.log(y);
    let yr = new Date().getFullYear() + parseInt(y);
    console.log(yr);
    if(p===""){
        alert("please input a price")
        ps.focus()
    }else{
        calcualte = (p,r,y)=>{
            return (p*r*y/100)
        }
    }
    let result = (calcualte(p,r,y));
    let arr = ["If you deposite " + p,"at an interest rate of " + r,"you will recieve an amount of " + result + " interest" , "in the year " + yr];
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        let para = document.createElement('p');
        para.innerHTML = arr[i];
        console.log(para);
        res.appendChild(para);
    }
    
}
let updateRate = ()=>{
    var rateval = document.getElementById("rate").value;
    console.log(rateval);
    document.getElementById("rate_val").innerText=rateval;
}