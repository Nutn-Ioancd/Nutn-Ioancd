$(document).ready(function() {
    //$(".coverB img").click(function()
    $(".coverA img").mouseover(function()
    {
        //alert("Hi");
        //var numberOfListItem = $("li").length;
        //var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        //$("H1").text($("li").eq(randomChildNumber).text());
        $(".coverH img").attr("src", "../IMAGE/Program/入口/海味封面.png");
        $(".bLink").attr("href", "ProgramTemple.html");
    });
    $(".coverB img").mouseover(function()
    {
        //alert("Hi");
        //var numberOfListItem = $("li").length;
        //var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        //$("H1").text($("li").eq(randomChildNumber).text());
        $(".coverH img").attr("src", "../IMAGE/Program/入口/沿海封面.png");
        $(".bLink").attr("href", "ProgramSalt.html");
    });
});