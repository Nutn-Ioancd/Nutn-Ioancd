$(document).ready(function() {
    //$(".coverB img").click(function()
    $(".DrawS").mouseover(function()
    {
        //alert("Hi");
        var x = this.getAttribute("src");
        //alert(x);
        //alert(this.getAttribute("src"));
        if(x == "../IMAGE/Result/Heat/Draw/熱轉印三股圖文零件資產 13.png") {
            //alert("Hi");
        }
        else {
            $(".DrawB").attr("src", x);
        };
        //$(".DrawB").attr("src", x);
        //var numberOfListItem = $("li").length;
        //var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        //$("H1").text($("li").eq(randomChildNumber).text());
        //$(".coverH img").attr("src", "../IMAGE/Program/入口/海味封面.png");
        //$(".bLink").attr("href", "ProgramTemple.html");
    });

    $(".DramaS").mouseover(function()
    {
        //alert("Hi");
        var x = this.getAttribute("src");
        $(".DramaB").attr("src", x);
        //alert(x);
        //alert(this.getAttribute("src"));
        //if(x == "../IMAGE/Result/Heat/Draw/熱轉印三股圖文零件資產 13.png") {
            //alert("Hi");
        //}
        //else {
        //    $(".DramaB").attr("src", x);
        //};
        //$(".DrawB").attr("src", x);
        //var numberOfListItem = $("li").length;
        //var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        //$("H1").text($("li").eq(randomChildNumber).text());
        //$(".coverH img").attr("src", "../IMAGE/Program/入口/海味封面.png");
        //$(".bLink").attr("href", "ProgramTemple.html");
    });

    $(".WangS").mouseover(function()
    {
        //alert("Hi");
        var x = this.getAttribute("src");
        $(".WangB").attr("src", x);
        //alert(x);
        //alert(this.getAttribute("src"));
        //if(x == "../IMAGE/Result/Heat/Draw/熱轉印三股圖文零件資產 13.png") {
            //alert("Hi");
        //}
        //else {
        //    $(".DramaB").attr("src", x);
        //};
        //$(".DrawB").attr("src", x);
        //var numberOfListItem = $("li").length;
        //var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        //$("H1").text($("li").eq(randomChildNumber).text());
        //$(".coverH img").attr("src", "../IMAGE/Program/入口/海味封面.png");
        //$(".bLink").attr("href", "ProgramTemple.html");
    });
});