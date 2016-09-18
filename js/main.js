
// make all images and menus i need invisible so they can Fadein later. ( i tried opacity, it doesnt work on all use cases)
// $('.filters').hide();
// $('#year1965').hide();
// $('#year2016').hide();
$('.TanjaImage').fadeIn(1000);
$('.Boss').hide();

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

    setInterval(function () {
        $('.Boss').toggleClass('Bossjumping');
        $('.Bossjumping').fadeIn();
    }, 2000);}
});

$('.Boss').on('click', function(){
    $('.Bossjumping').fadeOut();
    $('.Boss').fadeOut();
});
// on click of the nav tabs, different timeline images should appear and the previous image should dissapear

$('li.green').on("click", function (){
    $('.imagewrap').hide();
    // the line below is to avoid th eslider showing
    $('.MainWrap').show();  
    $('#geowrap').show();
    // to minimize the nav bar on click
    $('.filters').addClass('navMin');
    // $('p.resumebutton').hide();
    $('a.resumebutton').hide();


});

$('li.lightgreen').on("click", function (){
    // With the line below i want to delete any previous image - so i want a syntax that says hide any existing image (any siblings) so to put a new one in th enext line
    $('.MainWrap').find('img').hide();
    $('.MainWrap').show(); 
    $('#People').show();
    // minimize the nav bar
    $('.filters').addClass('navMin');
    $('a.resumebutton').hide();



});

$('li.darkgreen').on("click", function (){
    // With the line below i want to delete any previous image - so i want a syntax that says hide any existing image (any siblings) so to put a new one in th enext line
    $('.imagewrap').hide();
    // $('.MainWrap').find('img').hide();
    $('.MainWrap').show(); 
    $('#workwrap').show();
    // minimize the nav bar
    $('.filters').addClass('navMin');
    // $('h1').hide();
    $('a.resumebutton').show();

});

$('li.orange').on("click", function (){
    // With the line below i want to delete any previous image - so i want a syntax that says hide any existing image (any siblings) so to put a new one in th enext line
    // $('.MainWrap').find('img').hide();
    $('.MainWrap').show(); 
    $('#ArtsCrafts').show();
    // minimize the nav bar
    $('.filters').addClass('navMin');
    // $('h1').hide();
    $('a.resumebutton').show();

});

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

// the above will repeat from all Timeline filters


$('.modal').on('click', '.close', function(e){
    e.preventDefault();
    $('.modal').fadeOut();
    // $('.modal').html(htmlToHide);
    console.log('this works');
});

// the below is to make the nav menu minimize and maximize on hover.  it works but i have to figure out how to make it maximize only when hovering over the small minimized portion of it as now it maximisez when i am anywhere in teh proximity which is not what i want

$('.filters li').on('mouseenter', function(){
    $('.filters').removeClass('navMin');
    // $('.MainWrap').addClass('opacity50');
});


var imageInfo = {
    skopje: {
        src: 'img/Skopje.jpg',
        text: 'Skopje used to be a pretty subtle quiet lovely city..Until the Gang of bandits took over. As a result of their stupidity, ignorance, greed and unlimited criminal minds...',
        address: 'https://goo.gl/maps/XqqpJYzqXwT2'
    },
    
    Vienna: {
        src: 'img/Vienna.jpg',
        text: 'Ultravox...ah, Vienna '
    },

    London: {
        src: 'img/London.jpg',
        text: 'Battersea Power Station forever '
    },
    Paris: {
        src: 'img/Paris.jpg',
        text: 'Paris, i will see you again!'
    },
     SanFrancisco: {
        src: 'img/SanFrancisco.jpg',
        text: 'San Francisco, you city of contrasts!'
    }
}


// console.log(geographyInfo.people);
// this will be the section of Image maps - when click on different image maps in the images, they should open separately and i need an X sign to be able to minimize them. have =nt yet started that



