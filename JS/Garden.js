$(document).ready(function() {
    var startCount;
    var t;
    var lim;
    var z = "../IMAGE/Garden/教師心得/";
    var s = "/";    
    var y = ".png";
    $("input").click(function()
    {
        startCount = 0;
        var x = this.getAttribute("id");
        var n = parseInt(x, 10);
        if(x == 0){
            t ="王婉容";
            lim = 13;
        }
        else if(x == 1){
            t ="張伯宇";
            lim = 4;
        }
        else if(x == 2){
            t = "高實珩";
            lim = 5;
        }
        else if(x == 3){
            t = "蔡米虹";
            lim = 6;
        }
        else if(x == 4){
            t = "許舜傑";
            lim = 5;
        }
        else{
            t = "王婉容";
            lim = 13;
        }
        $(".frame").attr("src", z+t+s+"0"+y);
        setTimeout(() => { $(".hiddenBox").attr("style", "display:block;"); }, 100);
    });
    $(".hiddenBox").mouseleave(function()
    {
        $(".hiddenBox").attr("style", "display:none;");
    });
    $(".L").click(function()
    {
        if(startCount > 0){
            startCount -= 1;
            lll = startCount.toString();
            $(".frame").attr("src", z+t+s+lll+y);
        }
    });
    $(".R").click(function()
    {
        if(startCount < lim-1){
            startCount += 1;
            lll = startCount.toString();
            $(".frame").attr("src", z+t+s+lll+y);
        }
    });
    
    $(".hBox").mouseleave(function()
    {
        $(".hBox").attr("style", "display:none;");
    });

    $(".A").click(function()
    {
        $(".AI").attr("style", "max-width: 85vw; position: absolute; left: 11vw; top: 55vw; display: block;");
    });

    $(".B").click(function()
    {
        $(".BI").attr("style", "max-width: 85vw; position: absolute; left: 11vw; top: 55vw; display: block;");
    });

    $(".C").click(function()
    {
        $(".CI").attr("style", "max-width: 85vw; position: absolute; left: 11vw; top: 88vw; display: block;");
    });
    $(".D").click(function()
    {
        $(".DI").attr("style", "max-width: 85vw; position: absolute; left: 11vw; top: 90vw; display: block;");
    });

    $(".E").click(function()
    {
        $(".EI").attr("style", "max-width: 85vw; position: absolute; left: 11vw; top: 120vw; display: block;");
    });

    $(".F").click(function()
    {
        $(".FI").attr("style", "max-width: 85vw; position: absolute; left: 11vw; top: 120vw; display: block;");
    });

    $(".G").click(function()
    {
        $(".GI").attr("style", "max-width: 85vw; position: absolute; left: 11vw; top: 155vw; display: block;");
    });

    $(".H").click(function()
    {
        $(".HI").attr("style", "max-width: 85vw; position: absolute; left: 11vw; top: 155vw; display: block;");
    });

    $(".I").click(function()
    {
        $(".II").attr("style", "max-width: 85vw; position: absolute; left: 11vw; top: 188vw; display: block;");
    });

    $(".J").click(function()
    {
        $(".JI").attr("style", "max-width: 85vw; position: absolute; left: 11vw; top: 188vw; display: block;");
    });
});