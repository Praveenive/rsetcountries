let container = document.createElement("div");
container.setAttribute("class","container");
let row = document.createElement("div");
row.setAttribute("class" ,"row");
container.append(row);


var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));


function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=
        `<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
         <div class="card h-100">
   <div><h1 id="title" class="text-center">${data1[i].name}</h1></div>
   <img class="card-img-top"  src="${data1[i].flag}"  alt="card image cap"></img>
  <div class="card-body">
  <h5 class="card-title">
    <p class="card-text">Capital:${data1[i].capital}
     <p class="card-text">Region:${data1[i].region}</p>
     <p class="card-text">Country Code: ${data1[i].alpha3Code}</p></p>
    <button type="button" class="btn btn-primary" onclick="getdata()">Click for whether</button>
  </h5></div>
</div></div>`
    }
    
    document.body.append(container);
}

async function getdata(){
  let lat = await fetch("https://restcountries.com/v2/all");
  let long=lat.json();

  for(let j=0;j<long.length;j++)
  try{
    whetherdata(long[i].latlong[0],long[i].latlong[1]);
  }
  catch(error){console.log(error)}
}

async function whetherdata(lat,lon){
  try{
    if(lat===undefined)
       console.log(lat,lon);
       let res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fa4973b1fa1ca717811b9566c55321ec`);
    let res3=await res2.json();
    console.log(`${res3.main.temp}`);
    }
    catch(error){
      console.log(error);
    }
}