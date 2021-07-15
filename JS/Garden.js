/*
var data = [{
    "name":"王婉容",
    "value": [
        "13",
        "A王婉容教師心得01", 
        "A王婉容教師心得02", 
        "A王婉容教師心得03", 
        "A王婉容教師心得04", 
        "B王婉容教師心得01", 
        "B王婉容教師心得02", 
        "B王婉容教師心得03", 
        "B王婉容教師心得04", 
        "B王婉容教師心得05", 
        "C王婉容教師心得資產01", 
        "C王婉容教師心得02", 
        "C王婉容教師心得03", 
        "C王婉容教師心得04"
        ]
    },
    {
    "name":"張伯宇",
    "value": [
        "4",
        "張伯宇教師心得01",
        "張伯宇教師心得02",
        "張伯宇教師心得03",
        "張伯宇教師心得04"
        ]
    },
    {
    "name":"高實珩",
    "value": [
        "5",
        "高實珩教師心得01",
        "高實珩教師心得02",
        "高實珩教師心得03",
        "高實珩教師心得04",
        "高實珩教師心得05"
        ]
    },
    {
    "name":"蔡米虹",
    "value": [
        "6",
        "蔡米虹教師心得01",
        "蔡米虹教師心得02",
        "蔡米虹教師心得03",
        "蔡米虹教師心得04",
        "蔡米虹教師心得05",
        "蔡米虹教師心得06"
        ]
    },
    {
    "name":"許舜傑",
    "value": [
        "5",
        "許舜傑教師心得01",
        "許舜傑教師心得02",
        "許舜傑教師心得03",
        "許舜傑教師心得04",
        "許舜傑教師心得05"
        ]
    }
]
*/


$(document).ready(function() {
    var startCount;
    var t;
    var lim;
    //var lll;
    var z = "../IMAGE/Garden/教師心得/";
    var s = "/";    
    var y = ".png";
    $("input").click(function()
    {
        startCount = 0;
        var x = this.getAttribute("id");
        var n = parseInt(x, 10);
        
        //var t;
        //var lim = 0;
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
        //lll = lim.toString();
        //alert(data[n].name);
        //alert(data[n].id[startCount]);
        //var nnn = data[n].name;
        //var iii = data[n][startCount].id
        $(".frame").attr("src", z+t+s+"0"+y);
        //$(".frame").attr("id", x);
        setTimeout(() => { $(".hiddenBox").attr("style", "visibility: visible;"); }, 100);
        //$(".hiddenBox").attr("style", "visibility: visible;");
        
        
        //alert(data[0].name);
        //alert("Hi");
        //parseInt(string, radix);
        //var x = this.getAttribute("value");
        //alert(x);
        //var n = parseInt(x, 10);
        //var y = ".jpg";
        //var z = "../IMAGE/Result/Sea/作品/";
        //x = data[n].name; 
        //alert(data[n].name);
        //$(".frame img").attr("src", z+x+y);

        //var o = document.getElementById("fTXT").innerHTML;
        //document.getElementById("fTXT").innerHTML = data[n].id;
        //var o = document.getElementById("fTXT").innerHTML;
        //alert(o);
    });
    
    $(".L").click(function()
    {
            //alert("Hi");
            //x = this.getAttribute("id");
            //n = parseInt(x, 10);
        //alert(lll);
        if(startCount > 0){
            startCount -= 1;
            lll = startCount.toString();
            $(".frame").attr("src", z+t+s+lll+y);
            //alert(startCount);

        }
    });

    $(".R").click(function()
    {
            //alert("Hi");
            //x = this.getAttribute("id");
            //n = parseInt(x, 10);
        //alert(lll);
        if(startCount < lim-1){
            startCount += 1;
            lll = startCount.toString();
            $(".frame").attr("src", z+t+s+lll+y);
            //alert(startCount);
        }
    });

    $(".hiddenBox").mouseleave(function()
    {
        //var classCheck = this.getAttribute("class");
        $(".hiddenBox").attr("style", "visibility: hidden;");
        //startCount = 0;
        //alert(classCheck);
        //if (classCheck != "L") {
        //    alert("Hi");
        //}
        //alert(classCheck);
        //if (classCheck != "hiddenBox") && (classCheck != "L") && (classCheck != "R") && (classCheck != "frame") {
        //    alert("Hi");
        //};
    });
});