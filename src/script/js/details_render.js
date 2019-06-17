(function() {


    // 详情页渲染


    var $sid = window.location.search.substring(1); //地址栏传id给后端
    var $htitle = $("head title"); //获取页面title
    var $title = $(".bigProduct-c>dl>dd i"); //获取商品title
    var $imgurl = $(".dity-pic img"); //获取图片地址
    var $price = $(".price"); //获取现价
    var $oprice = $(".marketPrice-s"); //获取原价
    var $hua = $(".pollen-text b"); //“花粉”
    var $bf = $(".bf img"); //获取大图的图片地址
    $.ajax({
        url: "http://10.31.164.23/lefengwang/php/details_render.php",
        data: { sid: $sid },
        dataType: 'json',
        success: function(d) {
            $htitle.html(d.title);
            $title.html(d.title);
            $imgurl.attr("src", d.imgurl);
            $bf.attr("src", d.imgurl);
            $price.html(d.price);
            $oprice.html('￥' + d.orderprice);
            $hua.html(parseInt((d.price) / 10) + '个')
        }
    })


    var $dity_m = $(".dity-m"); //获取减号"-"
    var $dity_p = $(".dity-p"); //获取加号"+"
    var $dity_input = $(".dity-input"); //获取商品数量
    var $dnum = 1;

    $dity_input.on("input", function() {
        // 输入框内容改变时获取里面的值并计算“花粉”
        $dnum = $(".dity-input").val();
        $hua.html(parseInt($price.html() * $dnum / 10) + '个'); //计算“花粉”数量
    })

    // 点击+号时输入框内值++
    $dity_p.on("click", function() {
        $dnum++;
        $dity_input.val($dnum);
        $hua.html(parseInt($price.html() * $dnum / 10) + '个'); //计算“花粉”数量
    });

    // 点击-号时输入框内值--
    $dity_m.on("click", function() {
        if ($dnum > 1) {
            $dnum--;
            $dity_input.val($dnum);
            $hua.html(parseInt($price.html() * $dnum / 10) + '个'); //计算“花粉”数量
        }
    });


})()