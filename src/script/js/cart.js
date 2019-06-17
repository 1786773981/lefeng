! function() {
    // 获取元素
    var $Cshop = $(".Chead-shopping");
    var $shopplist = $(".shopping-list");
    var $noshop = $(".shopping-list-pro.noshop");
    var $haveshop = $(".shopping-list-pro.haveshop");

    $Cshop.hover(function() {
        $shopplist.show();
        $noshop.show();
    }, function() {
        $shopplist.hide();
        $noshop.hide();
    })





}()