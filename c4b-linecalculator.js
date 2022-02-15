<script>

  function calculate() {
    var myBox1 = document.getElementById('box1').value; 
    var myBox2 = document.getElementById('box2').value;
    var myBox3 = document.getElementById('box3').value;
    var myBox4 = document.getElementById('box4').value;
    var myBox5 = document.getElementById('box5').value;

    var myTier1 = document.getElementById('tier1').value; 
    var myQuant1 = document.getElementById('quant1').value;
    var myLicense1 = document.getElementById('license1').value;
    var myChannel1 = document.getElementById('channel1').value;
    var myBrand1 = document.getElementById('brand1').value;

    var myTier2 = document.getElementById('tier2').value; 
    var myQuant2 = document.getElementById('quant2').value;
    var myLicense2 = document.getElementById('license2').value;
    var myChannel2 = document.getElementById('channel2').value;
    var myBrand2 = document.getElementById('brand2').value;
    
    var myTier3 = document.getElementById('tier3').value; 
    var myQuant3 = document.getElementById('quant3').value;
    var myLicense3 = document.getElementById('license3').value;
    var myChannel3 = document.getElementById('channel3').value;
    var myBrand3 = document.getElementById('brand3').value;
    
    var myTier4 = document.getElementById('tier4').value; 
    var myQuant4 = document.getElementById('quant4').value;
    var myLicense4 = document.getElementById('license4').value;
    var myChannel4 = document.getElementById('channel4').value;
    var myBrand4 = document.getElementById('brand4').value;
    
    var myTier5 = document.getElementById('tier5').value; 
    var myQuant5 = document.getElementById('quant5').value;
    var myLicense5 = document.getElementById('license5').value;
    var myChannel5 = document.getElementById('channel5').value;
    var myBrand5 = document.getElementById('brand5').value;
    
    var result = document.getElementById('result'); 
    var result1 = document.getElementById('result1'); 
    var result2 = document.getElementById('result2'); 
    var result3 = document.getElementById('result3'); 
    var result4 = document.getElementById('result4'); 
    var result5 = document.getElementById('result5');

    var result10 = document.getElementById('result10'); 
    var result11 = document.getElementById('result11'); 
    var result12 = document.getElementById('result12'); 
    var result13 = document.getElementById('result13'); 
    var result14 = document.getElementById('result14'); 
    var result15 = document.getElementById('result15');
    
    var result20 = document.getElementById('result20'); 
    var result21 = document.getElementById('result21'); 
    var result22 = document.getElementById('result22'); 
    var result23 = document.getElementById('result23'); 
    var result24 = document.getElementById('result24'); 
    var result25 = document.getElementById('result25');

    var result30 = document.getElementById('result30'); 
    var result31 = document.getElementById('result31'); 
    var result32 = document.getElementById('result32'); 
    var result33 = document.getElementById('result33'); 
    var result34 = document.getElementById('result34'); 
    var result35 = document.getElementById('result35');
    
    var result40 = document.getElementById('result40'); 
    var result41 = document.getElementById('result41'); 
    var result42 = document.getElementById('result42'); 
    var result43 = document.getElementById('result43'); 
    var result44 = document.getElementById('result44'); 
    var result45 = document.getElementById('result45');
    
    var result50 = document.getElementById('result50'); 
    var result51 = document.getElementById('result51'); 
    var result52 = document.getElementById('result52'); 
    var result53 = document.getElementById('result53'); 
    var result54 = document.getElementById('result54'); 
    var result55 = document.getElementById('result55');
   

    var myResult = myBox1 * myBox2;
    var myResult1 = myBox2;
    var myResult2 = (myBox1 * .5) * myBox3;
    var myResult3 = (myBox1 * .5) * myBox4;
    var myResult4 = (myBox1 * .5) * myBox5;
    var myResult5 = myResult + myResult2 + (myResult1 * (myResult3 + myResult4));

    var myResult10 = myTier1 * myQuant1;
    var myResult11 = myQuant1;
    var myResult12 = (myTier1 * .5) * myLicense1;
    var myResult13 = (myTier1 * .5) * myChannel1;
    var myResult14 = (myTier1 * .5) * myBrand1;
    var myResult15 = myResult10 + myResult12 + (myResult11 * (myResult13 + myResult14));
    
    var myResult20 = myTier2 * myQuant2;
    var myResult21 = myQuant2;
    var myResult22 = (myTier2 * .5) * myLicense2;
    var myResult23 = (myTier2 * .5) * myChannel2;
    var myResult24 = (myTier2 * .5) * myBrand2;
    var myResult25 = myResult20 + myResult22 + (myResult21 * (myResult23 + myResult24));

    var myResult30 = myTier3 * myQuant3;
    var myResult31 = myQuant3;
    var myResult32 = (myTier3 * .5) * myLicense3;
    var myResult33 = (myTier3 * .5) * myChannel3;
    var myResult34 = (myTier3 * .5) * myBrand3;
    var myResult35 = myResult30 + myResult32 + (myResult31 * (myResult33 + myResult34));
    
    var myResult40 = myTier4 * myQuant4;
    var myResult41 = myQuant4;
    var myResult42 = (myTier4 * .5) * myLicense4;
    var myResult43 = (myTier4 * .5) * myChannel4;
    var myResult44 = (myTier4 * .5) * myBrand4;
    var myResult45 = myResult40 + myResult42 + (myResult41 * (myResult43 + myResult44));
    
    var myResult50 = myTier5 * myQuant5;
    var myResult51 = myQuant5;
    var myResult52 = (myTier5 * .5) * myLicense5;
    var myResult53 = (myTier5 * .5) * myChannel5;
    var myResult54 = (myTier5 * .5) * myBrand5;
    var myResult55 = myResult50 + myResult52 + (myResult51 * (myResult53 + myResult54));
   
    result.value = myResult;
    result2.value = myResult2;
    result3.value = myResult3;
    result4.value = myResult4;
    result5.value = myResult5;

    result10.value = myResult10;
    result12.value = myResult12;
    result13.value = myResult13;
    result14.value = myResult14;
    result15.value = myResult15;   

    result20.value = myResult20;
    result22.value = myResult22;
    result23.value = myResult23;
    result24.value = myResult24;
    result25.value = myResult25;

    result30.value = myResult30;
    result32.value = myResult32;
    result33.value = myResult33;
    result34.value = myResult34;
    result35.value = myResult35;
    
    result40.value = myResult40;
    result42.value = myResult42;
    result43.value = myResult43;
    result44.value = myResult44;
    result45.value = myResult45;
    
    result50.value = myResult50;
    result52.value = myResult52;
    result53.value = myResult53;
    result54.value = myResult54;
    result55.value = myResult55;


// Format line total

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

var result6 = document.getElementById("result5").value;
var result7 = document.getElementById('formattedresult');

var result16 = document.getElementById("result15").value;
var result17 = document.getElementById('formattedresult10');

var result26 = document.getElementById("result25").value;
var result27 = document.getElementById('formattedresult20');

var result36 = document.getElementById("result35").value;
var result37 = document.getElementById('formattedresult30');

var result46 = document.getElementById("result45").value;
var result47 = document.getElementById('formattedresult40');

var result56 = document.getElementById("result55").value;
var result57 = document.getElementById('formattedresult50');

// Format Custom Price

// Format Totals

var formattedresult = formatter.format(result6);
  console.log(formattedresult);
result7.value = formattedresult;

var formattedresult10 = formatter.format(result16);
  console.log(formattedresult10);
result17.value = formattedresult10;

var formattedresult20 = formatter.format(result26);
  console.log(formattedresult20);
result27.value = formattedresult20;

var formattedresult30 = formatter.format(result36);
  console.log(formattedresult30);
result37.value = formattedresult30;

var formattedresult40 = formatter.format(result46);
  console.log(formattedresult40);
result47.value = formattedresult40;

var formattedresult50 = formatter.format(result56);
  console.log(formattedresult50);
result57.value = formattedresult50;

// Total everything up for selection cost

    var total = document.getElementById('total'); 
    var myTotal = myResult5 + myResult15 + myResult25 + myResult35 + myResult45 + myResult55;
    total.value = myTotal;
    
    var total1 = document.getElementById("total").value;
		var total2 = document.getElementById('formattedtotal');

    var formattedtotal = formatter.format(total1);
      console.log(formattedtotal);
    total2.value = formattedtotal;
    
// Budget calculation


}
  </script>