$(document).ready(function () {
    $(".info>.welcome").hide();
    $(".context>.userinfo>ul>li").hide();
    $(".context>.userinfo>.headinf").hide();
    
    setTimeout(function() {
        //$(".header").hide();
    }, 2000);
    
    $(".info>.welcome").fadeIn(2000);
    
    $(".context>.userinfo>ul>li").slideDown(2000);
    $(".context>.userinfo>.headinf").fadeIn(2500);
    $(".b0").animate({
        backgroundColor: "white";
    }, 1500)
    $(".b0").animate({
        backgroundImage: "url(https://www.grapesfromcalifornia.com/wp-content/uploads/2017/01/8-Box-of-tri-color-Grapes-1.jpg)";
    }, 2000);
});