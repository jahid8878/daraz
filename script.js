

    let img = document.getElementById("banar-img");
    let allImg = [ "image/banner.jpg", "image/banner2.jpg", "image/banner3.jpg", "image/banner4.jpg", "image/banner5.jpg", "image/banner6.jpg", "image/banner7.jpg"];
    let count = 0;
	 
   function previus (){
	 count--;
	 
    if(count>=allImg.length){
      count = 6;		
	  img.src = allImg[count];}
	else{
	  img.src = allImg[count];}}; 
	  
	function next (){
	 count++;
	 
    if(count>=allImg.length){
      count = 0;		
	  img.src = allImg[count];}
	else{
	  img.src = allImg[count];}}; 
	    
  //singup work		
   let name = document.getElementById("name");
   let singout = document.getElementById("singout");
   
   let fName = prompt(" Inter your name:");
   let nameGet = fName.toUpperCase();
	
    if(nameGet==null || nameGet==""){
	name.innerHTML = "Login"
	singout.innerHTML = "Sign Up"}
	else{
	name.innerHTML = nameGet
	singout.innerHTML = "Sign Out"}
	
	
	//time function start here
	
	let day = document.getElementById("day");
	let ghonta = document.getElementById("ghonta");
	let minute = document.getElementById("minute");
	let secend = document.getElementById("secend");
	let op = document.getElementById("op");
	
	function time(){
	let d = new Date();
	
	let dayy = d.getDay();
	let g = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();
		 
	
	if (dayy<10){
	 day.innerHTML = `${"0"+dayy}`;}
	else{
	 day.innerHTML = `${+dayy}`;}
	
	if (g<10){
     ghonta.innerHTML = `${"0"+g}`;}
	else{
	 ghonta.innerHTML = `${g}`;}
	 
    if (m<10){
     minute.innerHTML = `${"0"+m}`;}
	else{
	 minute.innerHTML = `${m}`;}
	 
	 if (s<10){
     secend.innerHTML = `${"0"+s}`;}
	else{
	 secend.innerHTML = `${s}`;} }
	 
	 setInterval(time, 1000);
	 

	  