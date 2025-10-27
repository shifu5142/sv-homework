"use strict";
//1
const button1=document.querySelector('.link1');
const button2=document.querySelector('.link2');
const bigDiv=document.querySelector('.big-div')
let timer;
 button1.addEventListener('click',(e)=> {
  e.preventDefault()
   const promise = new Promise((resolve, reject) => {
    timer = setTimeout(() => { 
      bigDiv.style.backgroundColor = '#007bff';
      bigDiv.style.transition='all 0.3s'
      bigDiv.querySelector('p').style.color='#fff'
      resolve('Background color has changed');
    }, 2000);

    
    button2.addEventListener('click', () => {
      clearTimeout(timer);
      reject('Background color change has been canceled');
    }, { once: true }); 
  });

  promise
    .then((data) => console.log(data))
    .catch((err) => console.error(err)) 
})
//2
const timeClock=document.querySelector('.clock')
const timerCount=function(sec){
  timeClock.textContent=sec;
  const data= new Promise((_,reject)=>{   
   const timer=setInterval(() => {
    sec--
      timeClock.textContent=sec
      if(sec<=0){
      
      reject('The timer has end')
      alert('The timer has end')
      clearInterval(timer)
    }
    }, 1000); 
});
  data
    .then((data) => console.log(data))
    .catch((err) => console.error(err)) 
}
timerCount(10)
//3
const customIndexOf =function (string,char) {
  const promise=new Promise((resolve,reject)=>{
    for(let i=0;i<=string.length;i++){
      if(string[i]==char)
        resolve(`the index of the char is ${[i]}`)
      
    }
    reject(`There isnt any ${char} in the string`)
  })
  promise.then((data)=>console.log(data)).catch((err)=>console.log(err))
}
customIndexOf('hello','o')
//4
const tableBody=document.querySelector('tbody')
tableBody.innerHTML='';
const getUsers=async function () {
  try{
    let data=   await ( fetch('https://jsonplaceholder.typicode.com/users'))
    data=await data.json();
    console.log(data);
  const dataName=data.map((value)=>value.name )
  let dataAdress=data.map((value)=>value.address.city)
  console.log(dataName);
  console.log(dataAdress);
  data.forEach(item => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;

        const addressCell = document.createElement("td");
        addressCell.textContent = item.address.city;

        row.appendChild(nameCell);
        row.appendChild(addressCell);

        tableBody.appendChild(row);
      });
}
catch(err){
  console.error(err);
}
  }
  
getUsers()