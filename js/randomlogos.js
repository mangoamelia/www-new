function randomfirst(){
	var mylogos=new Array()
  
		mylogos[1]="./img/lo-cabforce.png"
		mylogos[2]="./img/lo-kanjoya.png"
		mylogos[3]="./img/lo-ubervu.png"
		mylogos[4]="./img/lo-liveops.png"
		mylogos[5]="./img/lo-datavalidation.png"

	var logolinks=new Array()
 
		logolinks[1]="http://www.3scale.net/our-customers"
		logolinks[2]="http://www.3scale.net/our-customers"
		logolinks[3]="http://www.3scale.net/our-customers"
		logolinks[4]="http://www.3scale.net/our-customers"
		logolinks[5]="http://www.3scale.net/our-customers"
		
		
	var ry=Math.floor(Math.random()*mylogos.length)
	
	if (ry==0)
		ry=1

    var logoOne = document.getElementById("FirstLogo")
    logoOne.innerHTML =  '<a href="' + logolinks[ry] + '"><img src="' + mylogos[ry] + '"></a>';
}

randomfirst();

function randomsecond(){
	var mylogos=new Array()
  
		mylogos[1]="./img/lo-decibel.png"
		mylogos[2]="./img/lo-beamly.png"
		mylogos[3]="./img/lo-yummly.png"
		mylogos[4]="./img/lo-betterdoctor.png"
		mylogos[5]="./img/lo-bistri.png"
		
		
	var logolinks=new Array()
 
		logolinks[1]="http://www.3scale.net/our-customers"
		logolinks[2]="http://www.3scale.net/our-customers"
		logolinks[3]="http://www.3scale.net/our-customers"
		logolinks[4]="http://www.3scale.net/our-customers"
		logolinks[5]="http://www.3scale.net/our-customers"
		
		
	var ry=Math.floor(Math.random()*mylogos.length)
	
	if (ry==0)
		ry=1

    var logoTwo = document.getElementById("SecondLogo")
    logoTwo.innerHTML =  '<a href="' + logolinks[ry] + '"><img src="' + mylogos[ry] + '"></a>';
}

randomsecond();


function randomthird(){
	var mylogos=new Array()
  
		mylogos[1]="./img/logo-eventility.png"
		mylogos[2]="./img/logo-betterdoctor.png"
		mylogos[3]="./img/logo-indix.png"
		mylogos[4]="./img/logo-ubervu.png"
		mylogos[5]="./img/logo-pingar.png"
		mylogos[6]="./img/logo-flightstats.png"
		

	var logolinks=new Array()
 
		logolinks[1]="http://www.3scale.net/our-customers"
		logolinks[2]="http://www.3scale.net/our-customers"
		logolinks[3]="http://www.3scale.net/our-customers"
		logolinks[4]="http://www.3scale.net/our-customers"
		logolinks[5]="http://www.3scale.net/our-customers"
		logolinks[6]="http://www.3scale.net/our-customers"
		
		
	var ry=Math.floor(Math.random()*mylogos.length)
	
	if (ry==0)
		ry=1

    var logoThree = document.getElementById("ThirdLogo")
    logoThree.innerHTML =  '<a href="' + logolinks[ry] + '"><img src="' + mylogos[ry] + '"></a>';
}

randomthird();

function randomfourth(){
	var mylogos=new Array()
  
		mylogos[1]="./img/logo-mambu.png"
		mylogos[2]="./img/logo-serendip.png"
		mylogos[3]="./img/logo-mesagraph.png"
		mylogos[4]="./img/logo-kairos.png"
		mylogos[5]="./img/logo-datavalidation.png"
		

	var logolinks=new Array()
 
		logolinks[1]="http://www.3scale.net/our-customers"
		logolinks[2]="http://www.3scale.net/our-customers"
		logolinks[3]="http://www.3scale.net/our-customers"
		logolinks[4]="http://www.3scale.net/our-customers"
		logolinks[5]="http://www.3scale.net/our-customers"
		
		
	var ry=Math.floor(Math.random()*mylogos.length)
	
	if (ry==0)
		ry=1

    var logoFour = document.getElementById("FourthLogo")
    logoFour.innerHTML =  '<a href="' + logolinks[ry] + '"><img src="' + mylogos[ry] + '"></a>';
}

randomfourth();
