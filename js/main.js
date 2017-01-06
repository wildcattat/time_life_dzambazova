
// fading in Image
$('.TanjaImage').fadeIn(1000);
// $('.Boss').hide();

// define the behaviour when clicking the start image: on a click i want the picture to move up and gets smaller, th enav menu to show up and the years to show
$('div.start').one('click', function (){
    $('img.TanjaImage').toggleClass('TanjaImageSmall');
    $("h1").animate({"font-size":"15px"});
    $('h1').addClass('animatedh1');
    $('.filters').fadeIn(1000);
    $('#year1965, #year2016').fadeIn(1000);

});


// Morphing the N into F - i couldnt figure our another way and inline styles seemed too complex so i used the opportunity to learn how to use linbraries

$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "pulse",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

var kkeys = [];
var konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ){
    $(document).unbind('keydown',arguments.callee);
    
    // Add your own easter egg here!!
        $('.Bossjumping').fadeIn();
        $('.Boss').toggleClass('Bossjumping');

   

    setInterval(function () {
        $('audio').fadeIn();
        $('.Boss').toggleClass('Bossjumping');
    }, 2000);}
    
});

$('.Boss').on('click', function(){
    $('.Bossjumping').fadeOut();
    $('.Boss').fadeOut();
});
// on click of the nav tabs, different timeline images should appear and the previous image should dissapear

$('li.green').on("click", function (){
    // hide any previous timelineimage
     $('.imagewrap').hide();
    // prevent the slider to show
    $('.MainWrap').show();  
    // display the timeline image
    $('#geowrap').show();
    // minimize the nav bar on click
    $('.filters').addClass('navMin');
    // hide  the resume button
    $('a.resumebutton').hide();


});

$('li.lightgreen').on("click", function (){
    $('.imagewrap').hide();
    $('.MainWrap').show(); 
    $('#peoplewrap').show();
    $('.filters').addClass('navMin');
    $('a.resumebutton').hide();



});

$('li.darkgreen').on("click", function (){
    $('.imagewrap').hide();
    $('.MainWrap').show();
    $('#workwrap').show();
    $('.filters').addClass('navMin');
    $('a.resumebutton').show();

});

$('li.orange').on("click", function (){
    $('.imagewrap').hide();
    $('.MainWrap').show(); 
    $('#artscraftswrap').show();
    $('.filters').addClass('navMin');
    $('a.resumebutton').hide();

});

$('li.yellow').on("click", function (){
    
    $('.MainWrap').show(); 
    $('#animalwrap').show();
    $('.filters').addClass('navMin');
    $('a.resumebutton').hide();

});

$('li.red').on("click", function (){
    
    $('.MainWrap').show(); 
    $('#publicatoinswrap').show();
    $('.filters').addClass('navMin');
    $('a.resumebutton').hide();

});

// the below is generalisation for all Timeline filters. it uses handlebars


$('.imagewrap a').on("click", function (e){
    e.preventDefault();
    
    var info = $(this).attr('data-info');

    var context = imageInfo[info];
    var source   = $("#modal-template").html();
    var template = Handlebars.compile(source);
    var htmlToInsert    = template(context);

    
    $('.imagewrap').addClass('overlay-background');
    $('.modal').html(htmlToInsert);
    $('.modal').fadeIn();
});


var imageInfo = {
    skopje: {
        src: 'img/Skopje.jpg',
        text: 'Skopje used to be a pretty subtle quiet lovely city..Until the Gang of bandits took over. As a result of their stupidity, ignorance, greed and unlimited criminal minds...',
        hyperlinkMap: 'https://drive.google.com/open?id=1d7ulIAF7jG3AQGggdo1pH7Z_asU&usp=sharing'
    },

    Vienna: {
        src: 'img/Vienna.jpg',
        text: 'Ultravox...ah, Vienna ',
        hyperlinkMap: 'https://goo.gl/maps/XqqpJYzqXwT2'
    },

    London: {
        src: 'img/London.jpg',
        text: 'Battersea Power Station forever ',
        hyperlinkMap: 'https://goo.gl/maps/XqqpJYzqXwT2'
    },
    Paris: {
        src: 'img/Paris.jpg',
        text: 'Paris, i will see you again!',
        hyperlinkMap: 'https://goo.gl/maps/XqqpJYzqXwT2'
    },
     SanFrancisco: {
        src: 'img/SanFrancisco.jpg',
        text: 'San Francisco, you city of contrasts!',
        hyperlinkMap: 'https://goo.gl/maps/XqqpJYzqXwT2'
    },

       TEDx: {
        src: 'img/TEDx.jpg',
        text: 'TEDx Sonoma 2015',
        hyperlinkMap: 'https://www.youtube.com/watch?v=pifbN446lQc'
    },
     Mama: {
        src: 'img/Mama.jpg',
        text: 'ANCHE DZAMBAZOVA, my Mom, the most humble Champion in everything',
        hyperlinkMap: 'http://www.imdb.com/name/nm1359428/'
    },

    Tato: {
        src: 'img/Tato.jpg',
        text: 'ALEKSANDAR DZAMBAZOV, my Dad, the last naive romantic...',
        hyperlinkMap: 'https://www.youtube.com/watch?v=B1KUKOECo4k'
    },

      Igor: {
        src: 'img/Igor.jpg',
        text: 'IGOR DZAMBAZOV, my brother, couldnt get more talent in one person',
        hyperlinkMap: 'http://www.imdb.com/name/nm0246081/'
    },

     Dedo: {
        src: 'img/Dedo.jpg',
        text: 'PETRE PRLICHKO, my Grandfather, the greatest actor ever',
        hyperlinkMap: 'https://mk.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D1%80%D0%B5_%D0%9F%D1%80%D0%BB%D0%B8%D1%87%D0%BA%D0%BE'
    },

    Rice: {
        src: 'img/Rice.jpg',
        text: 'RICE, Film by Alex Vargas, 2017',
        hyperlinkMap: 'http://ricethemovie.com/'
    }
    
}



// closing button for the expanded images and transparency

$('.modal').on('click', '.close', function(e){
    e.preventDefault();
    $('.modal').fadeOut();
    $('.imagewrap').removeClass('overlay-background');
    console.log('this works');
});


//make the nav menu minimize and maximize on hover.  it works but i have to figure out how to make it maximize only when hovering over the small minimized portion of it as now it maximisez when i am anywhere in teh proximity which is not what i want

$('.filters li').on('mouseenter', function(){
    $('.filters').removeClass('navMin');
    // $('.MainWrap').addClass('opacity50');
});
// console.log(imageInfo.people);
// this will be the section of Image maps - when click on different image maps in the images, they should open separately and i need an X sign to be able to minimize them. have =nt yet started that



