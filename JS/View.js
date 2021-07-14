$(document).ready(function() {
    //$(".sideBar img").mouseover(function()
    $(".sideBar img").click(function()
    {
        var x = this.getAttribute("id");
        var y = ".png";
        var z = "../IMAGE/Result/View/";
        $(".frame img").attr("src", z+x+y);
        //alert(x + y);
        /*
        if(x == "../IMAGE/Result/Heat/Draw/熱轉印三股圖文零件資產 13.png") {
        }
        else {
            $(".DrawB").attr("src", x);
        };
        */
    });
    /*
    $(".DramaS").mouseover(function()
    {
        var x = this.getAttribute("src");
        $(".DramaB").attr("src", x);
    });

    $(".WangS").mouseover(function()
    {
        var x = this.getAttribute("src");
        $(".WangB").attr("src", x);
    });
    */
});