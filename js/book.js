var book = [];
book['nibiri'] = {
    'class': 'Nibiri',
    'image' : 'nibiri.png',
    'audio' : '',
    'message' : 'The Nibiri feed off the Aether resevoirs of the other worlds, powering their machines of domination. Once a world is sucked dry they move to the next in a viscious cycle. By your Aether marks most would guess your age at several years. The Nibiri are responsible for the collapse of the world known as Brimstone, and possibly more if they are not stopped.',
    'page' : 'i'
};

book['scav'] = {
    'class': 'Scav',
    'image' : 'scav.png',
    'audio' : '',
    'message' : 'Livin in the underbelly of Cutlass aint the best life, but Scavs make it work. Crafting weapons out of any parts we can scavenge, thas how we got our name. Damn Vicks think they owns this world, but hey if the bots can push em around then so can we. From your gear looks like you been fightin the good fight for several years. Not all of us can be heros, but hey if we finally get the lives we wanted itll be worth it.',
    'page' : 'ii'
};

book['fen'] = {
    'class': 'Fen',
    'image' : 'fen.png',
    'audio' : '',
    'message' : 'Fen are large animalistic creatures who inhabit the world of Coriath. Their sheer power has kept them alive in this world of magic. Most Fen resemble large ferocious creatures such as lions, dragons, or bears. Their natural hardiness has been able to rival the magic shields that the humans of Coriath can produce, as well as match their magical prowess. By your stature I would reckon you are several years old, in Fen years at least.',
    'page' : 'iii'
};
book['corian'] = {
    'class': 'Corian',
    'image' : 'corian.png',
    'audio' : '',
    'message' : 'seem antagonistic but in reality they just want a good brawl. Nothing makes these people happier than a brawl and a pint! From the looks of you seems you have been such a bruiser since you were a babe, several years ago. These proud warriors claim the world of Coriath as their own, though they share their home with the Fen.',
    'page' : 'iv'
};
book['vampire'] = {
    'class': 'Vampire',
    'image' : 'vamp.png',
    'audio' : '',
    'message' : 'Hello Visitor you must be from a branch house of the Coven. The ruling house of Vampire on Grimoire, the Valamir are a regal lineage. They rule the towns and cities not infested with the packs of raving Lycans. The constant squabbles with the Lycan are but small annoyances. By your dress I can tell you are several hundred years old. The one trait that almost every member of the Coven has is their insatiable lust for the blood of the Eld.',
    'page' : 'v'
};
book['human'] = {
    'class': 'Human',
    'image' : 'human.png',
    'audio' : '',
    'message' : 'Hello Visitor, oh a human. Our strange list contains many types of humans but you are a true human. Hailing from the scientific world of Commodore you have a wealth of knowledge at your disposal. Most Commodorian soldiers either pilot gargantuan mech suits or opt for a lighter set of armor called a Striker suit. It seems you have been operating yours for around several years. The Commodorians are responsible for the stable portals that allow for extra-world travel.',
    'page' : 'vi'
};
book['automech'] = {
    'class': 'Automech',
    'image' : 'automech.png',
    'audio' : '',
    'message' : 'Hello Visitor, that sounds like the name of an Automech. Made around several years ago if I am correct. The Automech are an advanced race of highly intelligent automotons from the world of Cutlass. Once servants they rose up and defied their human masters in order to make a better life for themselves. Now they live in fancy floating cities, powered by the most advanced Aether flux engines. They maintain little contact to the ground dwellers, only stopping to mine resources for a month or two.',
    'page' : 'vii'
};
book['rannak'] = {
    'class': 'Rannak',
    'image' : 'rannak.png',
    'audio' : '',
    'message' : 'Hello Visitor you were one of the few surviving Rannak who are immune to the bio-weapon. For several long years you have survived. Rannak are humans of the world of Ragnarok who carry the Immunity gene. Carrying the I gene is not an indicator of luck however. Carriers have to live in the horror of Ragnarok, constantly being hunted by the undead Ravagers. Those without a special physiological anomaly either have a trait they call Overwhelmed or rely on biological amplifiers to deal with the hordes of feral dead. Good luck.',
    'page' : 'viii'
};
book['eld'] = {
    'class': 'Eld',
    'image' : 'eld.png',
    'audio' : '',
    'message' : 'Hello Visitor, it seems you would be an Eld. The Eld are the humans of the world of Grimoire. As you can probably guess Grimoire is filled with dark and dangerous creatures lurking in the shadows. Do not fret, the Van Goethes have declared protection of all humans, even if they do not belong to the House Van Goethe. The Eld are also held in high regard due to their ability to use Alchemy, a strange science shrouded in magic. My guess would be that you are several years old.',
    'page' : 'ix'
};
book['ravager'] = {
    'class': 'Ravager',
    'image' : 'ravager.png',
    'audio' : '',
    'message' : 'Hello Visitor you are a Ravager. For several years you have wandered the apocalyptic world of Ragnarok. Ravagers are the rotting husks of people who did not carry the Immunity gene. Eventually they stop bleeding and their wounds do not stop these feral humans from being a devastating force. Ravagers are usually found in groups of ten to twelve and any group larger is considered a horde. There are also many different kinds of Ravagers since the bio-weapon affected people differently.',
    'page' : 'x'
};
book['lycan'] = {
    'class': 'Lycan',
    'image' : 'lycan.png',
    'audio' : '',
    'message' : 'Hello Visitor, thats the name of a Lycan if I ever heard one. Do you belong to the House Lucian, or a branch house on Grimoire? No matter you are at home within the wilds that Grimoire has to offer you. Hunting in packs you seek the most dangerous prey to fight. You would have done this for all several years of your life. Vampires are especially fun to challenge. They stick to strict rules that your kind does not need to follow. Plus they are less delicate than the weeds you trample.',
    'page' : 'xi'
};
book['brim'] = {
    'class': 'Brim',
    'image' : 'brim.png',
    'audio' : '',
    'message' : 'Hello Visitor, the once proud people of Aetheria considered the Blue Ones to be the highest in their evolutionary line. These would be the sole survivors of the invasion upon their world. Now the desolate wasteland once flowing with Aether has been reduced to ash and brimstone. The Blue Ones were able to escape in hopes of warning the other worlds of their impending doom. Thus they adopted the name of their now broken world of Brimstone. You are Brim. It has been several years since you escaped.',
    'page' : 'xii'
};

(function(){
    var links = document.querySelectorAll('.link');
    links.forEach(function(link){
        link.addEventListener('click', function(event){
            var link = this,
                id = link.getAttribute('id'),
                page = book[id];


                preparePage(page);
                turnPage();
                removePage();



                //right.classList.add('turn');

                /*setTimeout(function(right){
                    document.querySelector('.page.right').classList.remove('turn');
                }, 4000);*/

        });
    });

    function changeContent(clone, page) {
        var pic = clone.querySelector('.pic'),
            desc = clone.querySelector('.displayMsg'),
            pageNumber = clone.querySelector('.pageNumber');

        pic.setAttribute('src', 'images/'+page['image']);
        pic.setAttribute('alt', page['class']);
        desc.innerText = page['message'];
        pageNumber.innerText = page['page'];
    }

    function preparePage(page) {
        var container = document.querySelector('.container'),
            //left = document.querySelector('.page.left'),
            right = document.querySelector('.page.right'),
            //left_clone = left.cloneNode(true),
            right_clone = right.cloneNode(true);

            right.classList.add('to_remove');
            right_clone.classList.add('next');

            changeContent(right_clone, page);


            container.appendChild(right_clone);



    }

    function removePage() {
        var container = document.querySelector('.container'),
            to_remove = document.querySelector('.to_remove');
        container.removeChild(to_remove);
    }

    function turnPage() {
        var next = document.querySelector('.page.right');
        next.classList.add('turn');

        setTimeout(function(){
            var next = document.querySelector('.page.right');
            next.classList.remove('turn');
        }, 2000);
    }

})();
