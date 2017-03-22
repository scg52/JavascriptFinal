// variable declarations
var firstName;
var lastName;
var birthDayObj;
var audio = document.createElement('audio');

var nibiriEl = document.getElementById('nibiri');
var scavEl = document.getElementById('scav');
var fenEl = document.getElementById('fen');
var corianEl = document.getElementById('corian');
var vampEl = document.getElementById('vamp');
var humanEl = document.getElementById('human');
var mechEl = document.getElementById('mech');
var rannEl = document.getElementById('rann');
var eldEl = document.getElementById('eld');
var ravaEl = document.getElementById('rava');
var lycanEl = document.getElementById('lycan');
var brimEl = document.getElementById('brim');

var picEl = document.getElementById('pic');
var imgArray = picEl.children;

nibiriEl.addEventListener('click', function(){
    displaySign('nibiri');
    getDesc('nibiri');
    playSound('nibiri');
});

scavEl.addEventListener('click', function(){
    displaySign('scav');
    getDesc('scav');
    playSound('scav');
});

fenEl.addEventListener('click', function(){
    displaySign('fen');
    getDesc('fen');
    playSound('fen');
});

corianEl.addEventListener('click', function(){
    displaySign('corian');
    getDesc('corian');
    playSound('corian');
});

vampEl.addEventListener('click', function(){
    displaySign('vamp');
    getDesc('vamp');
    playSound('vamp');
});

humanEl.addEventListener('click', function(){
    displaySign('human');
    getDesc('human');
    playSound('human');
});

mechEl.addEventListener('click', function(){
    displaySign('mech');
    getDesc('mech');
    playSound('mech');
});

rannEl.addEventListener('click', function(){
    displaySign('rann');
    getDesc('rann');
    playSound('rann');
});

eldEl.addEventListener('click', function(){
    displaySign('eld');
    getDesc('eld');
    playSound('eld');
});

ravaEl.addEventListener('click', function(){
    displaySign('rava');
    getDesc('rava');
    playSound('rava');
});

lycanEl.addEventListener('click', function(){
    displaySign('lycan');
    getDesc('lycan');
    playSound('lycan');
});

brimEl.addEventListener('click', function(){
    displaySign('brim');
    getDesc('brim');
    playSound('brim');
});

imgArray[0].classList.add('display');


//function to display images when button is clicked
function displaySign(sign){

        for(var i = 0; i < imgArray.length; i++){
          imgArray[i].classList.remove('display');
        }

        if(sign === 'nibiri'){
          imgArray[1].classList.add('display');
        }
        else if (sign === 'scav'){
          imgArray[2].classList.add('display');
        }
        else if(sign === 'fen'){
          imgArray[3].classList.add('display');
        }
        else if(sign === 'corian'){
          imgArray[4].classList.add('display');
        }
        else if (sign === 'vamp'){
          imgArray[5].classList.add('display');
        }
        else if(sign === 'human'){
          imgArray[6].classList.add('display');
        }
        else if(sign === 'mech'){
          imgArray[7].classList.add('display');
        }
        else if (sign === 'rann'){
          imgArray[8].classList.add('display');
        }
        else if(sign === 'eld'){
          imgArray[9].classList.add('display');
        }
        else if(sign === 'rava'){
          imgArray[10].classList.add('display');
        }
        else if (sign === 'lycan'){
          imgArray[11].classList.add('display');
        }
        else if(sign === 'brim'){
          imgArray[12].classList.add('display');
        }
        else{
         imgArray[0].classList.add('display');
        }
}

//function to display the text by clicking the index and given no info
function getDesc(sign){
    firstName = 'Hello';
    lastName = 'Visitor';

    var age = 'several';

    var astroSign;

    if(sign === 'rann'){
        astroSign = ' you were one of the few surviving Rannak who are immune to the bio-weapon. For ' + age + ' long years you have survived.';
        astroSign += ' Rannak are humans of the world of Ragnarok who carry the Immunity gene. Carrying the I gene is not an indicator of luck';
        astroSign += ' however. Carriers have to live in the horror of Ragnarok, constantly being hunted by the undead Ravagers. Those without a';
        astroSign += ' special physiological anomaly either have a trait they call Overwhelmed or rely on biological amplifiers to deal with the';
        astroSign += ' hordes of feral dead. Good luck.';
    }
    else if(sign === 'fen'){
        astroSign = ', one of the mighty Fen. Fen are large animalistic creatures who inhabit the world of Coriath. Their sheer power has kept them';
        astroSign += ' alive in this world of magic. Most Fen resemble large ferocious creatures such as lions, dragons, or bears. Their natural';
        astroSign += ' hardiness has been able to rival the magic shields that the humans of Coriath can produce, as well as match their magical';
        astroSign += ' prowess. By your stature I would reckon you are ' + age + ' years old, in Fen years at least.';
    }
    else if(sign === 'nibiri'){
        astroSign = ' you are an invader of Nibiru. The Nibiri feed off the Aether resevoirs of the other worlds, powering their machines of';
        astroSign += ' domination. Once a world is sucked dry they move to the next in a viscious cycle. By your Aether marks most would guess your';
        astroSign += ' age at ' + age + ' years. The Nibiri are responsible for the collapse of the world known as Brimstone, and possibly more if';
        astroSign += ' they are not stopped.';
    }
    else if(sign === 'mech'){
        astroSign = ', that sounds like the name of an Automech. Made around ' + age + ' years ago if I am correct. The Automech are an advanced';
        astroSign += ' race of highly intelligent automotons from the world of Cutlass. Once servants they rose up and defied their human masters';
        astroSign += ' in order to make a better life for themselves. Now they live in fancy floating cities, powered by the most advanced Aether';
        astroSign += ' flux engines. They maintain little contact to the ground dwellers, only stopping to mine resources for a month or two.';
    }
    else if(sign === 'eld'){
        astroSign = ', it seems you would be an Eld. The Eld are the humans of the world of Grimoire. As you can probably guess Grimoire is filled';
        astroSign += ' with dark and dangerous creatures lurking in the shadows. Do not fret, the Van Goethes have declared protection of all humans';
        astroSign += ', even if they do not belong to the House Van Goethe. The Eld are also held in high regard due to their ability to use Alchemy';
        astroSign += ', a strange science shrouded in magic.  My guess would be that you are ' + age + ' years old.';
    }
    else if(sign === 'lycan'){
        astroSign = ', thats the name of a Lycan if I ever heard one. Do you belong to the House Lucian, or a branch house on Grimoire? No matter';
        astroSign += ' you are at home within the wilds that Grimoire has to offer you. Hunting in packs you seek the most dangerous prey to fight.';
        astroSign += ' You would have done this for all ' + age + ' years of your life. Vampires are especially fun to challenge. They stick to strict';
        astroSign += ' rules that your kind does not need to follow. Plus they are less delicate than the weeds you trample.';
    }
    else if(sign === 'rava'){
        astroSign = ' you are a Ravager. For ' + age + ' years you have wandered the apocalyptic world of Ragnarok. Ravagers are the rotting husks of people who did not carry the Immunity gene. Eventually they stop bleeding and their wounds do not stop these feral humans from being a devastating force. Ravagers are usually found in groups of ten to twelve and any group larger is considered a horde. There are also many different kinds of Ravagers since the bio-weapon affected people differently.';
    }
    else if(sign === 'human'){
        astroSign = ', oh a human. Our strange list contains many types of humans but you are a true human. Hailing from the scientific world of';
        astroSign += ' Commodore you have a wealth of knowledge at your disposal. Most Commodorian soldiers either pilot gargantuan mech suits or';
        astroSign += ' opt for a lighter set of armor called a Striker suit. It seems you have been operating yours for around ' + age + ' years.';
        astroSign += ' The Commodorians are responsible for the stable portals that allow for extra-world travel.';
    }
    else if(sign === 'corian'){
        aastroSign = ' a right brute you are. Corians are the biggest of the human races and they make sure the others know it. These hulks may';
        astroSign += ' seem antagonistic but in reality they just want a good brawl. Nothing makes these people happier than a brawl and a pint!';
        astroSign += ' From the looks of you seems you have been such a bruiser since you were a babe, ' + age + ' years ago. These proud warriors';
        astroSign += ' claim the world of Coriath as their own, though they share their home with the Fen.';
    }
    else if(sign === 'vamp'){
        astroSign = ' you must be from a branch house of the Coven. The ruling house of Vampire on Grimoire, the Valamir are a regal lineage.';
        astroSign += ' They rule the towns and cities not infested with the packs of raving Lycans. The constant squabbles with the Lycan are but';
        astroSign += ' small annoyances. By your dress I can tell you are ' + age + ' hundred years old. The one trait that almost every member of the';
        astroSign += ' Coven has is their insatiable lust for the blood of the Eld.';
    }
    else if(sign === 'scav'){
        astroSign = ', you do look like a Scav. Livin in the underbelly of Cutlass aint the best life, but Scavs make it work. Crafting weapons';
        astroSign += ' out of any parts we can scavenge, thas how we got our name. Damn Vicks think they owns this world, but hey if the bots can';
        astroSign += ' push em around then so can we. From your gear looks like you been fightin the good fight for ' + age + ' years. Not all';
        astroSign += ' of us can be heros, but hey if we finally get the lives we wanted itll be worth it.';
    }
    else if (sign === 'brim'){
        astroSign = ', the once proud people of Aetheria considered the Blue Ones to be the highest in their evolutionary line. These would be the';
        astroSign += ' sole survivors of the invasion upon their world. Now the desolate wasteland once flowing with Aether has been reduced to ash';
        astroSign += ' and brimstone. The Blue Ones were able to escape in hopes of warning the other worlds of their impending doom. Thus they';
        astroSign += ' adopted the name of their now broken world of Brimstone. You are Brim. It has been ' + age + ' years since you escaped.';
    }
    else{
        astroSign = 'Hello hearty traveler! Are you having difficulty figuring out what kind of character to play in your next campaign? This book is an easy way to generate a character, just enter the characters name and birthday and the book will create! If you are already interested in playing a certain race or are interested in learning about others then use the index on the left.';
    }

    //------------------------------------------------output--------------------------------------------------

    var outputArea = document.getElementById('displayMsg'); 
    // \/ output their name age & zodiac sign\/
    outputArea.innerHTML = firstName + ' ' + lastName + astroSign;

    return false;

}


//funtion to calculate user zodiac sign and age
 function calZodiac(){
    firstName = document.getElementById('fname').value;
    lastName = document.getElementById('lname').value;
    
    birthDayObj = new Date(document.getElementById('bday').value);

    var whichMonth = birthDayObj.getMonth();  // get birthday month
    whichMonth++;
    console.log(' bdayMonth is ' + whichMonth);

    var whichDayofTheMonth = birthDayObj.getDate();  //get birthday day number
    whichDayofTheMonth++;
    console.log(' bDayofTheMonth is ' + whichDayofTheMonth);

    var bdayYear = birthDayObj.getFullYear();          // get birthday year
    bdayYear;
    console.log(' bdayYear is ' + bdayYear);


    
    //------------------------------------------------get user age-------------------------------------------
    
    var today = new Date;

    var currentMonth = today.getUTCMonth(); //get current month
    currentMonth++;
    console.log(' currentMonth is ' + currentMonth);

    var currentDayofTheMonth = today.getUTCDate();  //get current day of the month
    currentDayofTheMonth++;
    console.log(' currentDayofTheMonth is ' + currentDayofTheMonth);

    var currentYear = today.getUTCFullYear();  //get current year
    currentYear;
    console.log(' currentYear is ' + currentYear);


    age = currentYear - bdayYear;        //age calculation

    if(currentMonth < whichMonth){
        age--;
    }
    else if((currentMonth === whichMonth) && (currentDayofTheMonth < whichDayofTheMonth)){
        age--;
    }
    
    //--------------------------------------------zodiac sign-------------------------------------------------

    var astroSign;

    if((whichMonth == 12 && whichDayofTheMonth >= 22) || (whichMonth == 1 && whichDayofTheMonth <= 19)){
        astroSign = ' you were one of the few surviving Rannak who are immune to the bio-weapon. For ' + age + ' long years you have survived.';
        astroSign += ' Rannak are humans of the world of Ragnarok who carry the Immunity gene. Carrying the I gene is not an indicator of luck';
        astroSign += ' however. Carriers have to live in the horror of Ragnarok, constantly being hunted by the undead Ravagers. Those without a';
        astroSign += ' special physiological anomaly either have a trait they call Overwhelmed or rely on biological amplifiers to deal with the';
        astroSign += ' hordes of feral dead. Good luck.';
        displaySign('rann');
        playSound('rann');
    }
    else if((whichMonth == 11 && whichDayofTheMonth >= 22) || (whichMonth == 12 && whichDayofTheMonth <= 21)){
        astroSign = ', one of the mighty Fen. Fen are large animalistic creatures who inhabit the world of Coriath. Their sheer power has kept them';
        astroSign += ' alive in this world of magic. Most Fen resemble large ferocious creatures such as lions, dragons, or bears. Their natural';
        astroSign += ' hardiness has been able to rival the magic shields that the humans of Coriath can produce, as well as match their magical';
        astroSign += ' prowess. By your stature I would reckon you are ' + age + ' years old, in Fen years at least.';
        displaySign('fen');
        playSound('fen');
    }
    else if((whichMonth == 10 && whichDayofTheMonth >= 24) || (whichMonth == 11 && whichDayofTheMonth <= 21)){
        astroSign = ' you are an invader of Nibiru. The Nibiri feed off the Aether resevoirs of the other worlds, powering their machines of';
        astroSign += ' domination. Once a world is sucked dry they move to the next in a viscious cycle. By your Aether marks most would guess your';
        astroSign += ' age at ' + age + ' years. The Nibiri are responsible for the collapse of the world known as Brimstone, and possibly more if';
        astroSign += ' they are not stopped.';
        displaySign('nibiri');
        playSound('nibiri');
    }
    else if((whichMonth == 9 && whichDayofTheMonth >= 23) || (whichMonth == 10 && whichDayofTheMonth <= 23)){
        astroSign = ', that sounds like the name of an Automech. Made around ' + age + ' years ago if I am correct. The Automech are an advanced';
        astroSign += ' race of highly intelligent automotons from the world of Cutlass. Once servants they rose up and defied their human masters';
        astroSign += ' in order to make a better life for themselves. Now they live in fancy floating cities, powered by the most advanced Aether';
        astroSign += ' flux engines. They maintain little contact to the ground dwellers, only stopping to mine resources for a month or two.';
        displaySign('mech');
        playSound('mech');
    }
    else if((whichMonth == 8 && whichDayofTheMonth >= 23) || (whichMonth == 9 && whichDayofTheMonth <= 22)){
        astroSign = ', it seems you would be an Eld. The Eld are the humans of the world of Grimoire. As you can probably guess Grimoire is filled';
        astroSign += ' with dark and dangerous creatures lurking in the shadows. Do not fret, the Van Goethes have declared protection of all humans';
        astroSign += ', even if they do not belong to the House Van Goethe. The Eld are also held in high regard due to their ability to use Alchemy';
        astroSign += ', a strange science shrouded in magic.  My guess would be that you are ' + age + ' years old.';
        displaySign('eld');
        playSound('eld');
    }
    else if((whichMonth == 7 && whichDayofTheMonth >= 23) || (whichMonth == 8 && whichDayofTheMonth <= 22)){
        astroSign = ', thats the name of a Lycan if I ever heard one. Do you belong to the House Lucian, or a branch house on Grimoire? No matter';
        astroSign += ' you are at home within the wilds that Grimoire has to offer you. Hunting in packs you seek the most dangerous prey to fight.';
        astroSign += ' You would have done this for all ' + age + ' years of your life. Vampires are especially fun to challenge. They stick to strict';
        astroSign += ' rules that your kind does not need to follow. Plus they are less delicate than the weeds you trample.';
        displaySign('lycan');
        playSound('lycan');
    }
    else if((whichMonth == 6 && whichDayofTheMonth >= 22) || (whichMonth == 7 && whichDayofTheMonth <= 22)){
        astroSign = ' you are a Ravager. For ' + age + ' years you have wandered the apocalyptic world of Ragnarok. Ravagers are the rotting husks of people who did not carry the Immunity gene. Eventually they stop bleeding and their wounds do not stop these feral humans from being a devastating force. Ravagers are usually found in groups of ten to twelve and any group larger is considered a horde. There are also many different kinds of Ravagers since the bio-weapon affected people differently.';
        displaySign('rava');
        playSound('rava');
    }
    else if((whichMonth == 5 && whichDayofTheMonth >= 21) || (whichMonth == 6 && whichDayofTheMonth <= 21)){
        astroSign = ', oh a human. Our strange list contains many types of humans but you are a true human. Hailing from the scientific world of';
        astroSign += ' Commodore you have a wealth of knowledge at your disposal. Most Commodorian soldiers either pilot gargantuan mech suits or';
        astroSign += ' opt for a lighter set of armor called a Striker suit. It seems you have been operating yours for around ' + age + ' years.';
        astroSign += ' The Commodorians are responsible for the stable portals that allow for extra-world travel.';
        displaySign('human');
        playSound('human');
    }
    else if((whichMonth == 4 && whichDayofTheMonth >= 20) || (whichMonth == 5 && whichDayofTheMonth <= 20)){
        aastroSign = ' a right brute you are. Corians are the biggest of the human races and they make sure the others know it. These hulks may';
        astroSign += ' seem antagonistic but in reality they just want a good brawl. Nothing makes these people happier than a brawl and a pint!';
        astroSign += ' From the looks of you seems you have been such a bruiser since you were a babe, ' + age + ' years ago. These proud warriors';
        astroSign += ' claim the world of Coriath as their own, though they share their home with the Fen.';
        displaySign('corian');
        playSound
    }
    else if((whichMonth == 3 && whichDayofTheMonth >= 21) || (whichMonth == 4 && whichDayofTheMonth <= 19)){
        astroSign = ' you must be from a branch house of the Coven. The ruling house of Vampire on Grimoire, the Valamir are a regal lineage.';
        astroSign += ' They rule the towns and cities not infested with the packs of raving Lycans. The constant squabbles with the Lycan are but';
        astroSign += ' small annoyances. By your dress I can tell you are ' + age + ' years old. The one trait that almost every member of the';
        astroSign += ' Coven has is their insatiable lust for the blood of the Eld.';
        displaySign('vamp');
        playSound('vamp');
    }
    else if((whichMonth == 2 && whichDayofTheMonth >= 19) || (whichMonth == 3 && whichDayofTheMonth <= 20)){
        astroSign = ', you do look like a Scav. Livin in the underbelly of Cutlass aint the best life, but Scavs make it work. Crafting weapons';
        astroSign += ' out of any parts we can scavenge, thas how we got our name. Damn Vicks think they owns this world, but hey if the bots can';
        astroSign += ' push em around then so can we. From your gear looks like you been fightin the good fight for ' + age + ' years. Not all';
        astroSign += ' of us can be heros, but hey if we finally get the lives we wanted itll be worth it.';
        displaySign('scav');
        playSound('scav');
    }
    else{
        astroSign = ', the once proud people of Aetheria considered the Blue Ones to be the highest in their evolutionary line. These would be the';
        astroSign += ' sole survivors of the invasion upon their world. Now the desolate wasteland once flowing with Aether has been reduced to ash';
        astroSign += ' and brimstone. The Blue Ones were able to escape in hopes of warning the other worlds of their impending doom. Thus they';
        astroSign += ' adopted the name of their now broken world of Brimstone. You are Brim. It has been ' + age + ' years since you escaped.';
        displaySign('brim');
        playSound('brim');
    }

    //------------------------------------------------output--------------------------------------------------

    var outputArea = document.getElementById('displayMsg'); 
    // \/ output their name age & zodiac sign\/
    outputArea.innerHTML = firstName + ' ' + lastName + astroSign;

    return false;

} 

function playSound(sign){

    audio.pause();

    if(sign === 'rann'){
        audio.src = 'sounds/Winchester12-RA_The_Sun_God-1722751268.mp3';
    }
    else if(sign === 'fen'){
        audio.src = 'sounds/Bear-SoundBible.com-866204188.mp3';
    }
    else if(sign === 'nibiri'){
        audio.src = 'sounds/Mystic_Chanting_3-Marianne_Gagnon-1163676956.mp3';
    }
    else if(sign === 'mech'){
        audio.src = 'sounds/Metal_Rattling-Gerhard_Straub-1529277013.mp3';
    }
    else if(sign === 'eld'){
        audio.src = 'sounds/Black Crows Cawing-SoundBible.com-597755904.mp3';
    }
    else if(sign === 'lycan'){
        audio.src = 'sounds/Dog Growl-SoundBible.com-792375621.mp3';
    }
    else if(sign === 'rava'){
        audio.src = 'sounds/Zombie Long Death-SoundBible.com-554299929.mp3';
    }
    else if(sign === 'human'){
        audio.src = 'sounds/Sci Fi Robot-SoundBible.com-481033379.mp3';
    }
    else if(sign === 'corian'){
        audio.src = 'sounds/rage_of_blades-Blaga_Saun-1763516257.mp3';
    }
    else if(sign === 'vamp'){
        audio.src = 'sounds/Bats_in_Cave-Mike_Koenig-1902240953.mp3';
    }
    else if(sign === 'scav'){
        audio.src = 'sounds/Rifle-SoundBible.com-283898562.mp3';
    }
    else{
        audio.src = 'sounds/Fire_Burning-JaBa-810606813.mp3';
    }

    audio.play();

    return false;
}