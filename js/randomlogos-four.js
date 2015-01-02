function randomfirst(){
	var mylogos=new Array()
  
		mylogos[1]="./img/logo-bistri.png"
		mylogos[2]="./img/logo-kanjoya.png"
		mylogos[3]="./img/logo-softonic.png"
		mylogos[4]="./img/logo-yummly.png"
		mylogos[5]="./img/logo-cabforce.png"
		mylogos[6]="./img/logo-fullcontact.png"
       

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

    var logoOne = document.getElementById("FirstLogo")
    logoOne.innerHTML =  '<a href="' + logolinks[ry] + '"><img src="' + mylogos[ry] + '"></a>';
}

randomfirst();

function randomsecond(){
	var mylogos=new Array()
  
		mylogos[1]="./img/logo-1sync.png"
		mylogos[2]="./img/logo-beamly.png"
		mylogos[3]="./img/logo-kii.png"
		mylogos[4]="./img/logo-bitcasa.png"
		mylogos[5]="./img/logo-datadeck.png"
		mylogos[6]="./img/logo-decibel.png"
		

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
