;
! function() {

    // 面部护肤渲染
    var cnt1 = $(".content.content-3 .cnt_m");
    $.ajax({
        url: "http://10.31.164.23/lefengwang/php/skincare.php",
        dataType: 'json',
        success: function(d) {
            var str = "";
            for (var i = 0; i < d.length; i++) {
                str += `
                <div class="pro-list pro-list-">
                <dl>
                        <dt class="pro-pic">
                            <a href="details.html?${d[i].sid}" target="_blank">
                                <img class="lazy" src="http://5b0988e595225.cdn.sohucs.com/images/20171107/c843f4117f26404eaa36ca210a85ee5a.gif" data-original="${d[i].imgurl}"  title="${d[i].imgtitle} width="250" height="253">
                            </a>
                        </dt>
                        <dd class="pro-nam">
                            <!-- <b> 1.9折/ </b> -->
                            <a href="details.html?${d[i].sid}" target="_blank" title="${d[i].title}">${d[i].title}</a>
                            <i></i>
                        </dd>
                        <dd class="pro-pri">
                            <span><b>¥</b>${d[i].price}</span>
                            <b> ¥${d[i].orderprice}</b>
                            <a class="joinCar add-to-cart hide" href="javascript:;">
                                加入购物车                        </a>
                        </dd>
                        <div class="wrap"></div>
                </dl> 
                </div> `;

                $(function() { //和拼接的元素放在一起。
                    $("img.lazy").lazyload({
                        effect: "fadeIn" //图片显示方式
                    });
                });
            };
            $(cnt1).append(str);

        }
    })

}()


! function() {

    // 彩妆香水渲染
    var cnt2 = $(".content.content-4 .cnt_m");
    $.ajax({
        url: "http://10.31.164.23/lefengwang/php/cosmetics.php",
        dataType: 'json',
        success: function(d) {
            var str = "";
            for (var i = 0; i < d.length; i++) {
                str += `
                <div class="pro-list pro-list-">
                <dl>
                        <dt class="pro-pic">
                            <a href="details.html?${d[i].sid}" target="_blank">
                            <img class="lazy" src="http://5b0988e595225.cdn.sohucs.com/images/20171107/c843f4117f26404eaa36ca210a85ee5a.gif" data-original="${d[i].imgurl}"  title="${d[i].imgtitle}" width="250" height="253">
                            </a>
                        </dt>
                        <dd class="pro-nam">
                            <!-- <b> 1.9折/ </b> -->
                            <a href="details.html?${d[i].sid}" target="_blank" title="${d[i].title}">${d[i].title}</a>
                            <i></i>
                        </dd>
                        <dd class="pro-pri">
                            <span><b>¥</b>${d[i].price}</span>
                            <b> ¥${d[i].orderprice}</b>
                            <a class="joinCar add-to-cart hide" href="javascript:;">
                                加入购物车                        </a>
                        </dd>
                        <div class="wrap"></div>
                </dl> 
                </div> `;
            };
            $(cnt2).append(str);
            $(function() { //和拼接的元素放在一起。
                $("img.lazy").lazyload({
                    effect: "fadeIn" //图片显示方式
                });
            });
        }
    })
}()


! function() {

    // 身体洗护渲染
    var cnt3 = $(".content.content-5 .cnt_m");
    $.ajax({
        url: "http://10.31.164.23/lefengwang/php/wash.php",
        dataType: 'json',
        success: function(d) {
            var str = "";
            for (var i = 0; i < d.length; i++) {
                str += `
            <div class="pro-list pro-list-">
            <dl>
                    <dt class="pro-pic">
                        <a href="details.html?${d[i].sid}" target="_blank">
                        <img class="lazy" src="http://5b0988e595225.cdn.sohucs.com/images/20171107/c843f4117f26404eaa36ca210a85ee5a.gif" data-original="${d[i].imgurl}"  title="${d[i].imgtitle}" width="250" height="253">
                        </a>
                    </dt>
                    <dd class="pro-nam">
                        <!-- <b> 1.9折/ </b> -->
                        <a href="details.html?${d[i].sid}" target="_blank" title="${d[i].title}">${d[i].title}</a>
                        <i></i>
                    </dd>
                    <dd class="pro-pri">
                        <span><b>¥</b>${d[i].price}</span>
                        <b> ¥${d[i].orderprice}</b>
                        <a class="joinCar add-to-cart hide" href="javascript:;">
                            加入购物车                        </a>
                    </dd>
                    <div class="wrap"></div>
            </dl> 
            </div> `;
            };
            $(cnt3).append(str);
            $(function() { //和拼接的元素放在一起。
                $("img.lazy").lazyload({
                    effect: "fadeIn" //图片显示方式
                });
            });
        }
    })

}()