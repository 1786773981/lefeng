(function() {

    //楼梯效果
    var $louti = $(".louti");
    var $loutinav = $(".louti div");
    var $louceng = $(".louceng");
    var $last = $(".last");

    // 滚动条距离到达500时侧边栏出现
    $(window).on("scroll", function() {
            var $top = $(window).scrollTop();
            if ($top >= 500) {
                $louti.show();
            } else {
                $louti.hide();
            }
            if ($top >= 3000) {
                $loutinav.removeAttr('id');
            }
            $louceng.each(function(index, element) {
                var loucengtop = $(element).offset().top + $(element).outerHeight() / 2;


                if (loucengtop > $top) {
                    $loutinav.not('.last').removeAttr('id'); //移出楼梯导航上面所有的类
                    $loutinav.not('.last').eq(index).attr('id', 'fl-active'); //楼层对应的楼梯导航添加类。
                    return false; //(有一个楼梯满足立刻终止循环) 
                }
            });
        })
        //点击侧边栏导航获取对应楼层的TOP值赋值给滚动条
    $loutinav.not(".last").on("click", function() {
            $(this).attr("id", "fl-active").siblings("div").removeAttr("id");
            var $top = $louceng.eq($loutinav.index($(this))).offset().top;
            $('html,body').animate({
                scrollTop: $top
            })
        })
        // 点击回到顶部
    $last.on("click", function() {
        $('html,body').animate({
            scrollTop: 0
        })
    })


})();


! function() {

    // 轮播图效果
    var $banner = $("#banner");
    var $li = $("#banner>ul>li");
    var $pic = $(".pic li");
    var $left = $(".left");
    var $right = $(".right");
    var timer = null;
    var num = 0;
    //鼠标移入移出箭头显示隐藏
    $banner.hover(function() {
        $(".left,.right").show().stop().animate({ opacity: 1 });
        clearInterval(timer);
    }, function() {
        $(".left,.right").stop().animate({ opacity: 0 }).hide();
        timer = setInterval(function() {
            right()
        }, 5000)
    });
    //点击切换图片圆点添加active
    $pic.on("click", function() {
        num = $(this).index();
        $(this).addClass('banner_active').siblings().removeClass('banner_active');
        $li.eq($(this).index()).stop().animate({ opacity: 1 }).show().siblings().stop().animate({ opacity: 0 }).hide();
    });
    //右键头事件
    function right() {
        if (num < $pic.length) {
            num++; //点击时num++再存入eq()
            if (num == $pic.length) {
                num = 0
            }
            //当前eq存放num通过eq方法查找对应操作元素
            $pic.eq(num).addClass('banner_active').siblings().removeClass('banner_active');
            $li.eq(num).stop().animate({ opacity: 1 }).show().siblings().stop().animate({ opacity: 0 }).hide();
        }
    }
    $right.on("click", function() {
        right()
    });
    //左箭头事件
    $left.on("click", function() {
        if (num >= 0) {
            num--; //点击时num++再存入eq()
            if (num < 0) {
                num = $pic.length - 1
            }
            //当前eq存放num通过eq方法查找对应操作元素
            $pic.eq(num).addClass('banner_active').siblings().removeClass('banner_active');
            $li.eq(num).stop().animate({ opacity: 1 }).show().siblings().stop().animate({ opacity: 0 }).hide();
        }
    });
    timer = setInterval(function() {
        right();
    }, 5000)
}()