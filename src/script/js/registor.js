// 表单验证
! function() {
    // 表单验证
    $(function() {
        $("#regform").validate({
            rules: {
                mobileNo: {
                    required: true,
                    digits: true,
                    maxlength: 11,
                    minlength: 11,
                    remote: { //将mobileNo的值传给后端，后端返回的结果必须是true或者false的字符串。
                        type: 'post',
                        url: 'http://10.31.164.23/lefengwang/php/registor.php'
                    }
                },
                yzm: {
                    required: true,
                    eq: $(".inyzm").html()
                },
                passwd: {
                    required: true,
                    maxlength: 20,
                    minlength: 8,
                },
                passwd1: {
                    required: true,
                    equalTo: '#passwd'
                },
            },
            messages: {
                mobileNo: {
                    required: "请输入手机号",
                    digits: "手机号格式有误",
                    maxlength: "手机号长度不符",
                    minlength: "手机号长度不符",
                    remote: '手机号已被注册'
                },
                yzm: {
                    required: "请输入验证码",
                    eq: "请输入正确的验证码"
                },
                passwd: {
                    required: "请输入密码",
                    maxlength: "长度不得大于20位",
                    minlength: "长度不得小于8位",
                },
                passwd1: {
                    required: "请再次输入密码",
                    equalTo: '两次密码不一致'
                },
            }
        })
    })
    $.validator.setDefaults({
        /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
        success: function(label) {
            label.addClass('valid');
        }
    });
    // 自定义方法判断验证码是否正确
    $.validator.addMethod("eq", function(value, element, code) {
        //value=输入框的值，code=验证码
        if (value == code) {
            //true则执行校验成功后的执行函数
            return true
        } else {
            //false则执行messages
            return false
        }
    });


}();

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