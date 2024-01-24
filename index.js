// ist card triangle
let serial=0
document.getElementById("tri-btn").addEventListener("click" , function(){
    serial +=1;
    const triangle=document.getElementById("triangle").innerText;
    const base=document.getElementById("base-tri").value;
    const height=document.getElementById("height-tri").value;
    if(base == " " || height == "" || base<=0 ||height<=0){
        return alert ("please inter any valid number")}
     const areaTriangle=0.5* parseInt(base) * parseInt(height);
     const container=document.getElementById("table-container")
     const tr= document.createElement("tr");
     tr.innerHTML=`
     <td>${serial}</td>
    <td>${triangle}</td>
    <td>${areaTriangle}</td>
    <th><button class="btn btn-active btn-accent">convert to m2</button></th>
                  
     `
container.appendChild(tr);

})

// second card rectangle
 
document.getElementById("rec-btn").addEventListener("click", function() {
    serial+=1;
    const rectangle= document.getElementById("rectangle").innerText;
    const width= document.getElementById("width-rec").value;
    const length=document.getElementById("length-rec").value;
    if(width ==" "|| length==" "|| width<=0||length<=0){
        return alert ("please enter any valid number")}
        const areaRectangle =width*length
        const container=document.getElementById("table-container")
        const tr=document.createElement("tr");
        tr.innerHTML=`
        <td>${serial}</td>
    <td>${rectangle}</td>
    <td>${areaRectangle}</td>
    <th><button class="btn btn-active btn-accent">convert to m2</button></th>
                  
     `
     container.appendChild(tr)
})
 
// 3rd card parallelogram

document.getElementById("para-btn").addEventListener("click", function(){
    serial+=1;
    const gm=getData("parallelogram","base-para","height-para")
    const area= 0.5*parseInt(gm.cardValue1)*parseInt(gm.cardValue2);
     displayData(gm.cardName,area)
    
})

// fourth card rhombus


document.getElementById("rhom-btn").addEventListener("click", function(){
    serial+=1;
   
        const gm=getData("rhombus","diagonal1-rhom","diagonal2-rhom")
    const area= 0.5*parseInt(gm.cardValue1)*parseInt(gm.cardValue2);
     displayData(gm.cardName,area)
    
  
})
// card five pentagoan

document.getElementById("penta-btn").addEventListener("click", function(){
    serial+=1;
    const gm=getData("pentagon","p-penta","p-penta")
const area= 0.5*parseInt(gm.cardValue1)*parseInt(gm.cardValue2);
 displayData(gm.cardName,area)
 

})

// cared six ellipse 

document.getElementById("ellip-btn").addEventListener("click", function(){
    serial+=1;
    
const gm=getData("ellipse","axis1-ellip","axis2-ellip")
const area= Math.PI*parseInt(gm.cardValue1)*parseInt(gm.cardValue2)
 displayData(gm.cardName,area)
})
// common function displayData

function displayData(nameOfCard, area) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${nameOfCard}</td>
      <td>${area}</td>
     
      <th><button class="btn btn-active btn-accent">convert to m2</button></th>
     `;
    container.appendChild(tr);
 
  }

  function getData(id1, id2, id3) {
    // get the data from htm using id
    const cardName = document.getElementById(id1).innerText;
    const cardValue1 = document.getElementById(id2).innerText;
    const cardValue2 = document.getElementById(id3).innerText;
  
    const gm = {
        cardName:cardName ,
        cardValue1: cardValue1,
        cardValue2: cardValue2,
    };
    return gm;
  }
  
  

