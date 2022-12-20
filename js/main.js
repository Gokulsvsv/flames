function myFunction() {


  //get the value
  var FN = document.getElementById("personOne").value;
  var SN =document.getElementById("personTwo").value;

  if(FN == null || FN == "" && SN == null || SN == ""){
alert ("please enter the value")
  }

  //change to single format
  var P1 =FN.toLowerCase().replace(/[^a-zA-Z]/g,'')
  var P2 =SN.toLowerCase().replace(/[^a-zA-Z]/g,'')

  // count the repeat letters 
  var P1arr = P1.split("").reduce((data,i)=>{
    data[i]=data[i] ? data[i] + 1:1;
    return data
  },{})

  var P2arr = P2.split("").reduce((data,i)=>{
    data[i]=data[i] ? data[i] + 1:1;
    return data
  },{})

var larr = undefined //larger size
var sarr = undefined // smaller size

if((new Set(FN).size)<= (new Set(SN).size)){
  larr=P2arr
  sarr=P1arr
}else{
  larr=P1arr
  sarr=P2arr
}

for(s in sarr){
  for(l in larr){
    if( l==s && sarr[s]!=0 && larr[l]!=0){
      t1=sarr[s]
      t2=larr[l]

      sarr[s] =Math.abs(t1-Math.min(t1,t2))
      larr[l] = Math.abs(t2-Math.min(t1,t2))
    }
    if(larr[l]==0){
      delete larr[l]
    }
    if(sarr[s]==0){
      delete sarr[s]
    }
  }
}

var count = Object.values(sarr).reduce((f,s)=>f+s)+Object.values(larr).reduce((f,s)=>f+s)

var flames = ['f','l','a','m','e','s']

while(flames.length > 1){
  c = count > flames.length ? count % flames.length : count 

  t = c == 0 ?flames.length-1 : c-1

  flames.splice(t,1) // splice(index,character length)

  var prev = flames.slice(0,t)
  var next = flames.slice(t,flames.length)

  flames = (next.join("")+prev.join("")).split("")
}
var F ="Friends"
var L ="Lover"
var A ="Affection"
var M = "Marriage"
var E = "Enemy"
var S = "Siblings"
var relationship = null
if (flames == 'f'){
  relationship=F
  console.log(F)
}else if(flames == 'l'){
  relationship =L
  console.log(relationship)
}else if(flames == 'a'){
  relationship =A
  console.log(relationship)
}else if(flames == 'm'){
  relationship =M
  console.log(relationship)
}else if(flames =='e'){
  relationship =E
  console.log(relationship)
}else if(flames == 's'){
  relationship =S
  console.log(relationship)
}
 

 
alert("The relationship between "+P1+" and "+P2+" is " +relationship)
console.log(flames)
  // console.log(FN,SN)
  // console.log(P1,P2)
  // console.log(P1arr,P2arr)
  // console.log('larger',larr)
  // console.log('smaller',sarr)
}