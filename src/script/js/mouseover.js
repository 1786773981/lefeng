(function() {
    //我的订单hover
    var $myh = $("#Chead_myh");
    var $myhome = $(".Chead-myhome");
    $myh.hover(function() {
        $myhome.show();
    }, function() {
        $myhome.hide();
    });
    $myhome.hover(function() {
        $myhome.show();
    }, function() {
        $myhome.hide();
    });

    //快速导航hover
    var $fastnav = $("#Chead_fastnav");
    var $floatmenu = $(".Chead-floatmenu");
    $fastnav.hover(function() {
        $floatmenu.show();
    }, function() {
        $floatmenu.hide();
    });
    $floatmenu.hover(function() {
        $floatmenu.show();
    }, function() {
        $floatmenu.hide();
    });

    //手机乐蜂hover
    var $app = $(".Chead-app");
    var $appdown = $(".Chead-appDown");
    $app.on("mouseover", function() {
        $appdown.show();
    });
    $appdown.hover(function() {
        $appdown.show();
    }, function() {
        $appdown.hide();
    });

    // 商品分类hover
    var $Chead_menu_btn = $(".Cnav-menu-btn,.active");
    var $float_list = $(".float-list");
    $Chead_menu_btn.hover(function() {
        $float_list.show();
    }, function() {
        $float_list.hide();
    });



    //选择地区
    var $Btn = $(".areaSellBtn b");
    var $TipsBk = $(".regionalTipsBk");
    var $TipsBox = $(".regionalTipBox");
    var $Taba = $(".rtTable a");

    // 点击浮层里的地区时关闭浮层并赋值给$Btn
    $Taba.on("click", function() {
        // 将选择点击的地区存入cookie
        $.cookie('site', $(this).text(), { expires: 7 });
        // 将cookie的值存入$Btn
        $Btn.html($.cookie("site"));
        // 浮层隐藏
        $TipsBk.hide();
        $TipsBox.hide();
    })

    // 如果cookie存在则不需要重新选择地区
    if ($.cookie("site")) {
        $TipsBk.hide();
        $TipsBox.hide();
        $Btn.html($.cookie("site"));
    }
    // 点击$Btn打开浮层
    $Btn.on("click", function() {
        $TipsBk.show();
        $TipsBox.show();
    })
})()