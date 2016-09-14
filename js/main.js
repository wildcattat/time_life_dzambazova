// make all images and menus i need invisible so they can Fadein later. ( i tried opacity, it doesnt work on all use cases)
$('.filters').hide();
$('#year1965').hide();
$('#year2016').hide();
$('.TanjaImage').fadeIn(1000);



// define the behaviour when clicking the start image: on a click i want the picture to move up and gets smaller, th enav menu to show up and the years to show
$('div.start').one('click', function (){
    $('img.TanjaImage').toggleClass('TanjaImageSmall');
    $("h1").animate({"font-size":"20px"});
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

// on click of the nav tabs, different timeline images should appear and the previous image should dissapear

$('li.green').on("click", function (){
    $('.MainWrap').find('img').hide();  
    $('#Geo').show();
    // to minimize the nav bar on click
    $('.filters').addClass('navMin');
    $('h1').hide();

});

$('li.lightgreen').on("click", function (){
    // With the line below i want to delete any previous image - so i want a syntax that says hide any existing image (any siblings) so to put a new one in th enext line
    $('.MainWrap').find('img').hide();
    $('#People').show();
    // minimize the nav bar
    $('.filters').addClass('navMin');
    $('h1').hide();

});

// the above will repeat from all Timeline filters

// the below is to make the nav menu minimize and maximize on hover.  it works but i have to figure out how to make it maximize only when hovering over the small minimized portion of it as now it maximisez when i am anywhere in teh proximity which is not what i want


$('.filters li').on('mouseenter', function(){
    $('.filters').removeClass('navMin');
});

// $('.filters').hover(function(){
//     $('.filters').removeClass('navMin');
// });

// this will be the section of Image maps - when click on different image maps in the images, they should open separately and i need an X sign to be able to minimize them. have =nt yet started that