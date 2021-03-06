function getRandomWisdom() {
    var randomInt = getRandomInt(wisdom.length);
    return wisdom[randomInt];
}

var wisdom = [
    {
        "text": "Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.",
        "author": "<a href='https://en.wikipedia.org/wiki/Douglas_Hofstadter'>Douglas Hofstadter</a>",
        "submittedBy": ""
    },
    {
        "text": "If it's a good idea, go ahead and do it. It is much easier to apologise than it is to get permission.",
        "author": "<a href='https://en.wikipedia.org/wiki/Grace_Hopper'>Grace Hopper</a>",
        "submittedBy": ""
    },
    {
        "text": "Those who plan do better than those who do not plan, even though they rarely stick to their plan.",
        "author": "<a href='https://en.wikipedia.org/wiki/Winston_Churchill'>Winston Churchill</a>",
        "submittedBy": ""
    },
    {
        "text": "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.",
        "author": "<a href='https://en.wikipedia.org/wiki/Ellen_Ullman'>Ellen Ullman</a>",
        "submittedBy": ""
    },
    {
        "text": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "author": "<a href='https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)'>Martin Fowler</a>",
        "submittedBy": ""
    },
    {
        "text": "All information belongs to everybody all the time. It should be available. It should be accessible to the child, to the woman, to the man, to the old person, to the semiliterate, to the presidents of universities, to everyone. It should be open.",
        "author": "<a href='https://en.wikipedia.org/wiki/Maya_Angelou'>Maya Angelou</a>",
        "submittedBy": ""
    },
    {
        "text": "If I had more time, I would have written a shorter letter.",
        "author": "<a href='https://en.wikipedia.org/wiki/Cicero'>Cicero</a>",
        "submittedBy": ""
    },
    {
        "text": "Know how to learn. Then, want to learn.",
        "author": "<a href='https://en.wikipedia.org/wiki/Katherine_Johnson'>Katherine Johnson</a>",
        "submittedBy": ""
    },
    {
        "text": "I love deadlines. I like the whooshing sound they make as they fly by.",
        "author": "<a href='https://en.wikipedia.org/wiki/Douglas_Adams'>Douglas Adams</a>",
        "submittedBy": ""
    },
    {
        "text": "(on the Open University) ... a great independent university which does not insult any man or any woman whatever their background by offering them the second best, nothing but the best is good enough.",
        "author": "<a href='https://en.wikipedia.org/wiki/Jennie_Lee,_Baroness_Lee_of_Asheridge'> Jennie Lee, Baroness Lee of Asheridge</a>",
        "submittedBy": ""
    },
    {
        "text": "Get your facts first, then you can distort them as you please",
        "author": "<a href='https://en.wikipedia.org/wiki/Mark_Twain'>Mark Twain</a>",
        "submittedBy": ""
    },
    {
        "text": "Science is knowledge which we understand so well that we can teach it to a computer; and if we don't fully understand something, it is an art to deal with it.",
        "author": "<a href='https://en.wikipedia.org/wiki/Donald_Knuth'>Donald Knuth</a>",
        "submittedBy": ""
    },
    {
        "text": "To me programming is more than an important practical art. It is also a gigantic undertaking in the foundations of knowledge.",
        "author": "<a href='https://en.wikipedia.org/wiki/Grace_Hopper'>Grace Hopper</a>",
        "submittedBy": ""
    },
    {
        "text": "I have a hunch that the unknown sequences of DNA will decode into copyright notices and patent protections.",
        "author": "<a href='https://en.wikipedia.org/wiki/Donald_Knuth'>Donald Knuth</a>",
        "submittedBy": ""
    },
    {
        "text": "Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand.",
        "author": "<a href='https://en.wikipedia.org/wiki/Ada_Lovelace'>Ada Lovelace</a>",
        "submittedBy": ""
    },
    {
        "text": "(on his early computers) My programming language was solder.",
        "author": "<a href='https://en.wikipedia.org/wiki/Terry_Pratchett'>Terry Pratchett</a>",
        "submittedBy": ""
    },
    {
        "text": "Courage calls to courage everywhere, and its voice cannot be denied.",
        "author": "<a href='https://en.wikipedia.org/wiki/Millicent_Fawcett'>Millicent Fawcett</a>",
        "submittedBy": ""
    }, 
    {
        "text": "On two occasions I have been asked, 'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?' I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.",
        "author": "<a href='https://en.wikipedia.org/wiki/Charles_Babbage'>Charles Babbage</a>",
        "submittedBy": ""
    },
    {
        "text": "The most damaging phrase in the language is: 'It's always been done that way.'",
        "author": "<a href='https://en.wikipedia.org/wiki/Grace_Hopper'>Grace Hopper</a>",
        "submittedBy": ""
    },
    {
        "text": "The entire history of software engineering is that of the rise in levels of abstraction.'",
        "author": "<a href='https://en.wikipedia.org/wiki/Grady_Booch'>Grady Booch</a>",
        "submittedBy": ""
    },
    {
        "text": "Computing is too important to be left to men.",
        "author": "<a href='https://en.wikipedia.org/wiki/Karen_Sp&auml;rck_Jones'>Karen Sp&auml;rck Jones</a>",
        "submittedBy": ""
    },
    {
        "text": "The function of good software is to make the complex appear to be simple.",
        "author": "<a href='https://en.wikipedia.org/wiki/Grady_Booch'>Grady Booch</a>",
        "submittedBy": ""
    },
    {
        "text": "(on the impact of software on society) ... there is an interaction between the context and the programming task itself ... You don't need a fundamental philosophical discussion every time you put finger to keyboard, but as computing is spreading so far into people's lives, you need to think about these things.",
        "author": "<a href='https://en.wikipedia.org/wiki/Karen_Sp&auml;rck_Jones'>Karen Sp&auml;rck Jones</a>",
        "submittedBy": ""
    },
    {
        "text": "I liked the idea that a piece of information is really defined only by what it's related to, and how it's related. There really is little else to meaning. The structure is everything.",
        "author": "<a href='https://en.wikipedia.org/wiki/Tim_Berners-Lee'>Tim Berners-Lee</a>",
        "submittedBy": ""
    },
    {
        "text": "Machines take me by surprise with great frequency.",
        "author": "<a href='https://en.wikipedia.org/wiki/Alan_Turing'>Alan Turing</a>",
        "submittedBy": ""
    },
    {
        "text": "(on coming up with the term 'software engineering') It was an ongoing joke for a long time. They liked to kid me about my radical ideas. It was a memorable day when one of the most respected hardware gurus explained to everyone in a meeting that he agreed with me that the process of building software should also be considered an engineering discipline, just like with hardware. Not because of his acceptance of the new 'term' per se, but because we had earned his and the acceptance of the others in the room as being in an engineering field in its own right.",
        "author": "<a href='https://en.wikipedia.org/wiki/Margaret_Hamilton_(software_engineer)'>Margaret Hamilton</a>",
        "submittedBy": ""
    },
    {
        "text": "A witty saying proves nothing.",
        "author": "<a href='https://en.wikipedia.org/wiki/Voltaire'>Voltaire</a>",
        "submittedBy": ""
    },
    {
        "text": "You're thinking too much with your <span style='font-style:italic'>eyeballs</span>, and not enough with your <span style='font-style:italic'>mind hole</span>.",
        "author": "<a href='https://en.wikipedia.org/wiki/Jake_the_Dog'>Jake the Dog</a> - <a href='https://en.wikipedia.org/wiki/Adventure_Time'><span style='font-style:italic'>Adventure Time</span></a>",
        "submittedBy": ""
    },
    {
        // Facebook group TMA score posts getting you down? It's OK! :)
        "text": "Who knows himself a braggart, let him fear this, for it will come to pass that every braggart shall be found an ass.",
        "author": "<a href='https://en.wikipedia.org/wiki/William_Shakespeare'>William Shakespeare</a> - <a href='https://en.wikipedia.org/wiki/All%27s_Well_That_Ends_Well'><span style='font-style:italic'>All's Well that Ends Well</span></a>",
        "submittedBy": ""
    },
    {
        "text": "The best thing about a Boolean is, even if you are wrong, you are only off by a bit.",
        "author": "Anonymous",
        "submittedBy": ""
    },
    {
        "text": "Weeks of coding can save you hours of planning.",
        "author": "Anonymous",
        "submittedBy": ""
    },
    {
        "text": "Roses are red, Violets are blue, Unexpected { on line 32",
        "author": "Anonymous",
        "submittedBy": ""
    },
    {
        "text": "Do or do not, there is no //TODO",
        "author": "Anonymous (with apologies to <a href='https://en.wikipedia.org/wiki/Yoda'>Yoda</a>)",
        "submittedBy": ""
    },
];
