$(document).ready(function () {
    $(".info>.welcome").hide();
    $(".context>.userinfo>ul>li").hide();
    $(".context>.userinfo>.headinf").hide();
    
    setTimeout(function() {
        //$(".header").hide();
    }, 2000);
    
    $(".info>.welcome").fadeIn(2000);
    
    $(".context>.userinfo>ul>li").slideDown(2000);
    $(".context>.userinfo>.headinf").fadeIn(2500)
});