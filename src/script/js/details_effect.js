! function() {
    // 放大镜
    var $sf = $(".sf");
    var $bf = $(".bf");
    var $pic = $(".dity-pic");
    var $bimg = $(".bf img");

    $pic.hover(function() {
        // 获取大框与大图的宽高比例
        var $sizel = $bf.outerWidth() / $bimg.outerWidth();
        var $sizet = $bf.outerHeight() / $bimg.outerHeight();

        $sf.show();
        $bf.show();
        $pic.on("mousemove", function(ev) {
            $sf.css({
                    // 小框的宽高通过小图的宽高*比例得到
                    width: $pic.outerWidth() * $sizel,
                    height: $pic.outerHeight() * $sizet,
                })
                // 使小框可移动并限定范围
            let l = ev.pageX - $pic.offset().left - $sf.width() / 2;
            let t = ev.pageY - $pic.offset().top - $sf.height() / 2;
            if (l <= 0) {
                l = 0;
            } else if (l >= $pic.outerWidth() - $sf.outerWidth() - 2) {
                l = $pic.outerWidth() - $sf.outerWidth() - 2;
            }
            if (t <= 0) {
                t = 0;
            } else if (t >= $pic.outerHeight() - $sf.outerHeight() - 2) {
                t = $pic.outerHeight() - $sf.outerHeight() - 2;
            }

            $sf.css({
                left: l,
                top: t
            });

            //给大图赋值位置
            $bimg.css({
                // 大图的定位值为小图的定位求负并/比例
                left: -l / $sizel,
                top: -t / $sizet
            })
        })
    }, function() {
        $sf.hide();
        $bf.hide();
    })










}()