// 验证码
! function() {

    // 获取元素点击切换验证码
    var $yzm = $(".inyzm");
    var $changeyzm = $("#changeYzm");

    // 即刻调用
    checkCode();
    $yzm.html(checkCode())

    // 点击框刷新验证码
    $yzm.on("click", function() {
        checkCode();
        $yzm.html(checkCode())
    })

    // 点击“看不清？换一张”刷新验证码
    $changeyzm.on("click", function() {
        checkCode();
        $yzm.html(checkCode())
    })

    // 随机生成四位验证码
    function checkCode() { //验证码
        var arr = new Array(0, 0, 0, 0);
        return arr.map(function(value) {
            return String.fromCharCode(codeRandom());
        }).join('');

        function codeRandom() { //随机生成0-9,a-z,A-Z
            var num = parseInt(Math.random() * 75) + 48;
            if (num <= 57 || (65 <= num && num <= 90) || 97 <= num) {
                return num;
            } else {
                return codeRandom();
            }
        }
    }
}()


// 登录
! function() {
    var $loginform = $("#loginform");
    var $phonenum = $("#loginName");
    var $passwd = $("#passwd");
    var $yzm = $("#yzm");
    var $inyzm = $(".inyzm");
    var $submit = $("#formSubmit");

    $submit.on("click", function() {
        if ($yzm.val() == $inyzm.html()) {
            $.ajax({
                url: "http://10.31.164.23/lefengwang/php/login.php",
                type: "post",
                data: {
                    // 传手机号与密码给后端
                    phonenum: $phonenum.val(),
                    passwd: $passwd.val()
                },
                success: function(d) {
                    if (d) {
                        // 如果匹配则存入cookie
                        $.cookie('phonenum', $phonenum.val(), { expires: 7 });
                        location.href = "http://10.31.164.23/lefengwang/src/html/oindex.html";
                    } else if (!d) {
                        if ($phonenum.val() == "" || $passwd.val() == "") {
                            alert("用户名或密码不可为空");
                            $passwd.val("");
                            return false;
                        } else {
                            alert("用户名或密码错误");
                            $passwd.val("");
                            return false;
                        }
                    }
                }
            })
        } else if ($yzm.val() != $inyzm.html()) {
            $("#yzmErrorPic").show();
            return false;
        }
    })
}()