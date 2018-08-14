/**
 * Created by mayn on 2018/8/9.
 */
$(function () {
    for(var i=0;i<48;i++){
        $('.center').append('<span class="aa" data-id='+i+'>')
    }
    var index=[]
    var code=null
    var status=null
    var c=0
    var arr = []
    var arr1 =[]
    hu()
    function csh() {
        for (var i = 0; i < 48; i++) {
            $('.center span').eq(i).removeClass('b')
            $('.center span').eq(i).removeClass('hh')
            $('.center span').eq(i).removeClass('gg')
            $('.center span').eq(i).removeClass('bb')
            $('.center span').eq(i).removeClass('x')
        }
    }
    function dianji() {
        $(".icon-fanhuishangyiji").click(function () {
            for (var i = 0; i < 48; i++) {
                if ($('.center span').eq(i).attr('class').indexOf("bb") != -1 || $('.center span').eq(i).attr('class').indexOf("x") != -1) {
                    $('.center span').eq(i).removeClass('b')
                }
            }
            if($('.ipt').val()==1){
                $('.center span').eq(21).addClass('b')
                $('.center span').eq(34).addClass('b')
            }else if($('.ipt').val()==2){
                $('.center span').eq(31).addClass('b')
                $('.center span').eq(37).addClass('b')
                $('.center span').eq(38).addClass('b')
                $('.center span').eq(40).addClass('b')
            }
            c++
            fanhui(index,c)
        })
    }
    function hu() {
        csh()
        if($('.ipt').val()==1) {
             index=[]
             code=null
             status=null
             c=0
             arr = [2, 3, 4, 5, 8, 11, 12, 13, 14, 17, 18, 23, 24, 29, 30, 31, 32, 35, 38, 41, 44, 45, 46, 47]
             arr1 = [9, 10, , 15, 16, 19, 20, 21, 22, 25, 26, 27, 28, 33, 34, 39, 40]
            zhuan(arr,arr1)
            $('.center span').eq(10).addClass('bb')
            $('.center span').eq(15).addClass('x')
            $('.center span').eq(20).addClass('x')
            $('.center span').eq(21).addClass('b')
            $('.center span').eq(34).addClass('b')
            document.onkeydown = function (event) {
                if (event.keyCode == 37) {
                    pan(37,1,0)
                } else if (event.keyCode == 38) {
                    pan(38,6,0)
                } else if (event.keyCode == 39) {
                    pan(39,1,1)
                } else if (event.keyCode == 40) {
                    pan(40,6,1)
                }
            }
            dianji()
        } else if($('.ipt').val()==2){
            index=[]
            code=null
            status=null
            c=0
            arr = [1,2, 3, 4,  6, 7, 10, 12, 16, 18, 19, 22, 23, 24, 25,29, 30, 35, 36, 41,42,43, 44, 45, 46, 47]
            arr1 = [8, 9,13 , 14, 15, 20, 21, 26, 27, 28, 31, 32,33, 34, 37, 38, 39,40]
            zhuan(arr,arr1)
            $('.center span').eq(13).addClass('bb')
            $('.center span').eq(14).addClass('x')
            $('.center span').eq(20).addClass('x')
            $('.center span').eq(27).addClass('x')
            $('.center span').eq(32).addClass('x')
            $('.center span').eq(31).addClass('b')
            $('.center span').eq(37).addClass('b')
            $('.center span').eq(38).addClass('b')
            $('.center span').eq(40).addClass('b')
            document.onkeydown = function (event) {
                if (event.keyCode == 37) {
                    pan(37,1,0)
                } else if (event.keyCode == 38) {
                    pan(38,6,0)
                } else if (event.keyCode == 39) {
                    pan(39,1,1)
                } else if (event.keyCode == 40) {
                    pan(40,6,1)
                }
            }
            dianji()
        }
    }
    function pan(code,jian,bl) {
        c = 0
        for (var i = 0; i < 48; i++) {
            if(bl==0){
                if ($('.center span').eq(i).attr('class').indexOf("bb") > 0) {
                    if ($('.center span').eq(i - jian).attr('class').indexOf("hh") == -1 && $('.center span').eq(i - jian).attr('class').indexOf("x") == -1) {
                        $('.center span').eq(i).removeClass('bb')
                        $('.center span').eq(i - jian).addClass('bb')
                        jicode(code,0,i)
                    }
                    if ($('.center span').eq(i - jian).attr('class').indexOf("x") != -1 && $('.center span').eq(i - (2*jian)).attr('class').indexOf("hh") == -1) {
                        if ($('.center span').eq(i - jian).attr('class').indexOf("x") != -1 && $('.center span').eq(i - (2*jian)).attr('class').indexOf("x") != -1) {
                        } else {
                            $('.center span').eq(i).removeClass('bb')
                            $('.center span').eq(i - jian).addClass('bb')
                            $('.center span').eq(i - jian).removeClass('x')
                            $('.center span').eq(i - (2*jian)).addClass('x')
                            jicode(code,1,i)
                        }
                    }
                    if ($('.center span').eq(i - jian).attr('class').indexOf("b") != -1) {
                        $('.center span').eq(i - jian).removeClass('b')
                        $('.center span').eq(i - jian).addClass('bb')
                        // jicode(code,2,i)
                    }
                    break;
                }
            }else{
                if ($('.center span').eq(i).attr('class').indexOf("bb") > 0) {
                    if ($('.center span').eq(i + jian).attr('class').indexOf("hh") == -1 && $('.center span').eq(i + jian).attr('class').indexOf("x") == -1) {
                        $('.center span').eq(i).removeClass('bb')
                        $('.center span').eq(i + jian).addClass('bb')
                        jicode(code,0,i)
                    }
                    if ($('.center span').eq(i + jian).attr('class').indexOf("x") != -1 && $('.center span').eq(i + (2*jian)).attr('class').indexOf("hh") == -1) {
                        if ($('.center span').eq(i + jian).attr('class').indexOf("x") != -1 && $('.center span').eq(i + (2*jian)).attr('class').indexOf("x") != -1) {
                        } else {
                            $('.center span').eq(i).removeClass('bb')
                            $('.center span').eq(i + jian).addClass('bb')
                            $('.center span').eq(i + jian).removeClass('x')
                            $('.center span').eq(i + (2*jian)).addClass('x')
                            jicode(code,1,i)
                        }
                    }
                    if ($('.center span').eq(i + jian).attr('class').indexOf("b") != -1) {
                        $('.center span').eq(i + jian).removeClass('b')
                        $('.center span').eq(i + jian).addClass('bb')
                        // jicode(code,2,i)
                    }
                    break;
                }
            }
        }
        if($('.ipt').val()==1){
            $('.center span').eq(21).addClass('b')
            $('.center span').eq(34).addClass('b')
        }else if($('.ipt').val()==2){
            $('.center span').eq(31).addClass('b')
            $('.center span').eq(37).addClass('b')
            $('.center span').eq(38).addClass('b')
            $('.center span').eq(40).addClass('b')
        }
        over()
    }
    function fanhui(index,c) {
        var aa = index.length
        console.log(aa, c)
        for (var j = aa - c; j >= 0; j--) {
            if (index[j].code == 37) {
                fanPan(1,j,0)
            } else if (index[j].code == 38) {
                fanPan(6,j,0)
            } else if (index[j].code == 39) {
                fanPan(1,j,1)
            } else if (index[j].code == 40) {
                fanPan(6,j,1)
            }
            break;
        }
    }
    function fanPan(jian,j,bl) {                         //返回判断
        if(bl==0){
            if (index[j].status == 0) {
                $('.center span').eq(index[j].i).addClass('bb').siblings().removeClass('bb')
            } else if (index[j].status == 1) {
                $('.center span').eq(index[j].i).addClass('bb').siblings().removeClass('bb')
                $('.center span').eq(index[j].i - (jian*2)).removeClass('x')
                $('.center span').eq(index[j].i - jian).addClass('x')
            } else if (index[j].status == 2) {
                $('.center span').eq(index[j].i + jian).removeClass('b')
                $('.center span').eq(index[j].i + jian).addClass('bb').siblings().removeClass('bb')
            }
        }else{
            if (index[j].status == 0) {
                $('.center span').eq(index[j].i).addClass('bb').siblings().removeClass('bb')
            } else if (index[j].status == 1) {
                $('.center span').eq(index[j].i).addClass('bb').siblings().removeClass('bb')
                $('.center span').eq(index[j].i + (jian*2)).removeClass('x')
                $('.center span').eq(index[j].i + jian).addClass('x')
            } else if (index[j].status == 2) {
                $('.center span').eq(index[j].i + jian).removeClass('b')
                $('.center span').eq(index[j].i + jian).addClass('bb').siblings().removeClass('bb')
            }
        }
    }
    function zhuan(arr,arr1) {            // 背景砖
        for (let i = 0; i < 48; i++) {
//               console.log($('.center span').eq(i).attr('data-id'))
            var aa = $('.center span').eq(i).attr('data-id')
            for (var j = 0; j < arr.length; j++) {
                if (aa == arr[j]) {
                    $('.center span').eq(i).addClass('hh')
                }
            }
        }
        for (let i = 0; i < 48; i++) {
            var aa = $('.center span').eq(i).attr('data-id')
            for (var j = 0; j < arr1.length; j++) {
                if (aa == arr1[j]) {
                    $('.center span').eq(i).addClass('gg')
                }
            }
        }
    }
    function jicode(code,status,i) {         //记录步数坐标
        code = code;
        status = status
        index.push({i, code, status});
    }
    function csh() {
        for (var i = 0; i < 48; i++) {
            $('.center span').eq(i).removeClass('b')
            $('.center span').eq(i).removeClass('hh')
            $('.center span').eq(i).removeClass('gg')
            $('.center span').eq(i).removeClass('bb')
            $('.center span').eq(i).removeClass('x')
        }
    }
    function over() {
        var fenshu=0
        for(var f=0;f<48;f++){
            if ($('.center span').eq(f).attr('class').indexOf("x") != -1 && $('.center span').eq(f).attr('class').indexOf("b") != -1){
                fenshu =fenshu+1
                console.log(f,fenshu)
            }
        }
        if( $('.ipt').val()==1){
            if(fenshu==2){
                alert('恭喜过关，开始第二关')
                $('.ipt').val(Number($('.ipt').val())+1)
                hu()
            }
        }else if( $('.ipt').val()==2){
            if(fenshu==4){
                alert('恭喜过关')
                // $('.ipt').val(Number($('.ipt').val())+1)
                // hu()
            }
        }
    }
    $(".icon-07jiantouxiangyoufill").click(function () {
        $('.ipt').val(Number($('.ipt').val())+1)
        hu()
    })
    $(".icon-07jiantouxiangzuofill").click(function () {
        $('.ipt').val(Number($('.ipt').val())-1)
        hu()
    })
    $(".icon-huanyipi").click(function () {
        hu()
    })
})
