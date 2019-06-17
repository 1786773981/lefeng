// 登录状态
! function() {
    var $welcome1 = $("#Chead-welcome1");
    var $welcome2 = $("#Chead-welcome2");
    var $wel1 = $(".welcome1");
    var $wel2 = $(".welcome2");
    // 如果已登录切换样式
    if ($.cookie("phonenum")) {
        $welcome1.hide();
        $welcome2.show();
        $wel1.text($.cookie("phonenum"));
    }
    $wel2.on("click", function() {
        $welcome1.show();
        $welcome2.hide();
        $.cookie('phonenum', null, { expires: -1 })
    })
}()