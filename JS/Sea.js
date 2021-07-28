var data = [
    {"name":"Nope","id":"Error"},
    {"name":"01-鯨生-張玲翎","id":"張玲翎  鯨生  版畫  18x12cm"},
    {"name":"02-大海的守護者-邱語婕","id":"邱語婕  大海的守護者  版畫  18x12cm<br>我就是那隻章魚，別怕！<br>讓我來守護你吧！"},
    {"name":"03-逃跑燈籠魚-林玟佑","id":"林玟佑 逃跑燈籠魚  版畫  12x18cm<br>拍打上岸的浪花響起自由的聲音。"},
    {"name":"04-魚兒-吳紫郡","id":"吳紫郡  魚兒  版畫  12x18cm<br>相信海，海就會幫你。"},
    {"name":"05-鯨彩-張又心","id":"張又心  鯨彩  版畫  18x12cm<br>活得像大海一樣精采～"},
    {"name":"06-奇鯨-蔡佩真","id":"蔡佩真  奇鯨  版畫  12x18cm<br>整個海洋彷彿因鯨魚而變得幻彩。"},
    {"name":"07-悠悠-陳姵鴒","id":"陳姵鴒  悠悠  版畫  12x18cm<br>咘嚕咘嚕 Blue Blue"},
    {"name":"08-它是魚！-李丹紜","id":"李丹紜  它是魚！  版畫  18x12cm<br>聽說再這樣捕魚下去2048年<br>就沒有魚能吃了"},
    {"name":"09-窒息-徐若筑","id":"徐若筑  窒息  版畫  18x12cm<br>我們正逐漸剝奪海洋的呼吸聲。"},
    

    {"name":"11-網-張霈晴","id":"張霈晴  網  版畫  18x12cm<br>自由？自遊？迷惘。"},
    {"name":"12-海洋的人-洪梓恩","id":"洪梓恩  海洋的人  版畫  18x12cm"},
    {"name":"13-大水母-王羽彤","id":"王羽彤  大水母  版畫  18x12cm<br>七彩的海洋，側著水母輕輕流動。"},
    {"name":"14-遨遊-童育湞","id":"童育湞  遨遊  版畫  18x12cm<br>一起擁抱海水，享受浪花。"},
    {"name":"15-好餓-林俐伃","id":"林俐伃  好餓  版畫  12x18cm<br>魚永遠不知道自己有多好吃。"},
    {"name":"16-Jellyfish-賴郁棻","id":"賴郁棻  Jellyfish  版畫  12x18cm<br>想像水母般，透明，空靈，柔軟。"},
    {"name":"17-鯨天-陳姵君","id":"陳姵君  鯨天  版畫  12x18cm<br>「鯨」天的海洋依舊美麗動人。"},
    
    {"name":"19-沉重-廖珮琪","id":"廖珮琪  沉重  版畫  12x18cm<br>不要再亂丟垃圾了，給牠們一個乾淨的家園。"},
    {"name":"20-水-吳春曉","id":"吳春曉 水  版畫  18x12cm<br>「水」也帶不走我身上的豔麗。"},

    {"name":"21-謝孟倫-尋找","id":"謝孟倫  尋找  版畫  12x18cm<br>我只願面朝大海，春暖花開。"},
    {"name":"22-纏-沈郁潔","id":"沈郁潔 纏  版畫  18x12cm<br>妄想遊上天空，卻被現實纏上。"},
    {"name":"23-海-邱玟甄","id":"邱玟甄  海  版畫  12x18cm"},
    {"name":"24-呱呱-張惠雯","id":"張惠雯  呱呱  版畫  12x18cm<br>想要乾淨的海洋。"},
    
    {"name":"26-海洋-邱琦雁","id":"邱琦雁  海洋  版畫  18x12cm<br>魚兒魚兒水中游，游來游去樂憂憂。"},
    {"name":"27-蔡佩璇-Ocean","id":"蔡佩璇  Ocean  版畫  18x12cm<br>心安理得，海闊天空。"},
    {"name":"28-海生物-盧玢諭","id":"盧玢諭  海生物  版畫  12x18cm<br>生物：地球百分之七十是海洋。"},
    {"name":"29-眠-葉佩其","id":"葉佩其  眠  版畫  18x12cm<br>請再給我一口你的氣息，讓我得以呼吸。"},
    {"name":"30-鯨-梁家綺","id":"梁家綺  鯨  版畫  12x18cm<br>看看海洋吧！你會發現它有多可愛。"},

    {"name":"31-西巴依-陳家惇","id":"陳家惇  西巴依shake it  版畫  18x12cm"},
    {"name":"32-海洋悲歌-王韜鈞","id":"王韜鈞  海洋悲歌  版畫  18x12cm"},
    {"name":"33-Into the Ocean-藍湘君","id":"藍湘君 Into the Ocean  版畫  18x12cm"},
    {"name":"34-海龜-黃泰雄","id":"黃泰雄  海龜  版畫  12x18cm<br>海洋生物很可愛，海洋讚！"},
    {"name":"35-水中游魚-林育谷","id":"林育谷  水中游魚  版畫  12x18cm<br>記住當人生的道路陡峭時，要保持沉著。"}
]

$(document).ready(function() {
    $(".sideBar img").click(function()
    {
        //alert(data[0].name);
        //alert("Hi");
        //parseInt(string, radix);
        var x = this.getAttribute("id");
        var n = parseInt(x, 10);
        var y = ".jpg";
        var z = "../IMAGE/Result/Sea/作品/";
        x = data[n].name; 
        //alert(data[n].name);
        $(".frame img").attr("src", z+x+y);

        //var o = document.getElementById("fTXT").innerHTML;
        document.getElementById("fTXT").innerHTML = data[n].id;
        //var o = document.getElementById("fTXT").innerHTML;
        //alert(o);
    });
});