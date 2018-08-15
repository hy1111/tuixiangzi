/**
 * Created by mayn on 2018/8/9.
 */
$(function () {

    var index=[]
    var code=null
    var status=null
    var c=0
    var arr = []
    var arr1 =[]
    var ge=null
    hu()
    function hu() {
        if($('.ipt').val()==1) {
             ge=48
             index=[]
             code=null
             status=null
             c=0
             csh(48)
             buju(48)
             arr = [2, 3, 4, 5, 8, 11, 12, 13, 14, 17, 18, 23, 24, 29, 30, 31, 32, 35, 38, 41, 44, 45, 46, 47]
             arr1 = [9, 10, 15, 16, 19, 20, 21, 22, 25, 26, 27, 28, 33, 34, 39, 40]
            zhuan(arr,arr1,48)
            $('.center span').eq(10).addClass('bb')
            $('.center span').eq(15).addClass('x')
            $('.center span').eq(20).addClass('x')
            $('.center span').eq(21).addClass('b')
            $('.center span').eq(34).addClass('b')
            document.onkeydown = function (event) {
                if (event.keyCode == 37) {
                    pan(37,1,0,48)
                } else if (event.keyCode == 38) {
                    pan(38,6,0,48)
                } else if (event.keyCode == 39) {
                    pan(39,1,1,48)
                } else if (event.keyCode == 40) {
                    pan(40,6,1,48)
                }
            }
            dianji(48)
        } else if($('.ipt').val()==2){
            ge=48
            index=[]
            code=null
            status=null
            csh(ge)
            c=0
            buju(ge)
            arr = [1,2, 3, 4,  6, 7, 10, 12, 16, 18, 19, 22, 23, 24, 25,29, 30, 35, 36, 41,42,43, 44, 45, 46, 47]
            arr1 = [8, 9,13 , 14, 15, 20, 21, 26, 27, 28, 31, 32,33, 34, 37, 38, 39,40]
            zhuan(arr,arr1,ge)
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
                    pan(37,1,0,48)
                } else if (event.keyCode == 38) {
                    pan(38,6,0,48)
                } else if (event.keyCode == 39) {
                    pan(39,1,1,48)
                } else if (event.keyCode == 40) {
                    pan(40,6,1,48)
                }
            }
            dianji(ge)
        }else if($('.ipt').val()==3){
            index=[]
            code=null
            ge=63
            csh(ge)
            status=null
            c=0
            buju(ge)
            $('.center span').css({
                'width':36+'px',
                'height':36+'px'
            })
            arr = [3, 4,5,  6,  10,13, 16, 17, 20,21, 22, 23, 27, 28, 34, 35,38, 41,42,48, 49, 53,54, 55,56,57,58,59,60]
            arr1 = [11, 12,18 , 19, 24, 25, 26, 29, 30, 31, 32, 33,36, 37, 39,40,43,44,45,46,47,50,51,52]
            zhuan(arr,arr1,ge)
            $('.center span').eq(40).addClass('bb')
            $('.center span').eq(37).addClass('x')
            $('.center span').eq(30).addClass('x')
            $('.center span').eq(44).addClass('x')
            $('.center span').eq(18).addClass('x')
            $('.center span').eq(24).addClass('b')
            $('.center span').eq(25).addClass('b')
            $('.center span').eq(31).addClass('b')
            $('.center span').eq(32).addClass('b')
            document.onkeydown = function (event) {
                var bushu =null
                if(ge==48){
                    bushu =6
                }else if(ge==63){
                    bushu =7
                } else if(ge==64){
                    bushu =8
                }
                if (event.keyCode == 37) {
                    pan(37,1,0,ge)
                } else if (event.keyCode == 38) {
                    pan(38,bushu,0,ge)
                } else if (event.keyCode == 39) {
                    pan(39,1,1,ge)
                } else if (event.keyCode == 40) {
                    pan(40,bushu,1,ge)
                }
            }
            dianji(ge)
        }else if($('.ipt').val()==4){
            index=[]
            code=null
            ge=64
            csh(ge)
            status=null
            c=0
            buju(ge)
            $('.center span').css({
                'width':31+'px',
                'height':31+'px'
            })
            arr = [2,3, 4,5, 10,13, 17,18,  21,22, 25, 30, 32,33, 38, 39, 40, 43, 47, 48,55, 56,57,58, 59, 60,61, 62,63]
            arr1 = [11, 12,19 , 20, 26, 27, 28, 29, 34, 35, 36, 37,41, 42, 44,45,46,49,50,51,52,53,54]
            zhuan(arr,arr1,ge)
            $('.center span').eq(51).addClass('bb')
            $('.center span').eq(45).addClass('x')
            $('.center span').eq(44).addClass('x')
            $('.center span').eq(35).addClass('x')
            $('.center span').eq(28).addClass('x')
            $('.center span').eq(11).addClass('b')
            $('.center span').eq(12).addClass('b')
            $('.center span').eq(20).addClass('b')
            $('.center span').eq(29).addClass('b')
            document.onkeydown = function (event) {
                var bushu=null
                if(ge==48){
                   bushu=6
                }else if(ge==63){
                    bushu=7
                }else if(ge==64){
                    bushu=8
                }
                if (event.keyCode == 37) {
                    pan(37,1,0,ge)
                } else if (event.keyCode == 38) {
                    pan(38,bushu,0,ge)
                } else if (event.keyCode == 39) {
                    pan(39,1,1,ge)
                } else if (event.keyCode == 40) {
                    pan(40,bushu,1,ge)
                }
            }
            dianji(ge)
        }
    }
    function buju(ge) {
        $('.center').empty()
        for(var i=0;i<ge;i++){
            $('.center').append('<span class="aa" data-id='+i+'>')
        }
    }
    function dianji(ge) {
        $(".icon-fanhuishangyiji").click(function () {
            for (var i = 0; i < ge; i++) {
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
            } else if($('.ipt').val()==3){
                $('.center span').eq(24).addClass('b')
                $('.center span').eq(25).addClass('b')
                $('.center span').eq(31).addClass('b')
                $('.center span').eq(32).addClass('b')
            }else if($('.ipt').val()==4){
                $('.center span').eq(11).addClass('b')
                $('.center span').eq(12).addClass('b')
                $('.center span').eq(20).addClass('b')
                $('.center span').eq(29).addClass('b')
            }
            c++
            fanhui(index,c)
        })
    }
    function pan(code,jian,bl,ge) {
        c = 0
        for (var i = 0; i < ge; i++) {
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
        } else if($('.ipt').val()==3){
            $('.center span').eq(24).addClass('b')
            $('.center span').eq(25).addClass('b')
            $('.center span').eq(31).addClass('b')
            $('.center span').eq(32).addClass('b')
        }else if($('.ipt').val()==4){
            $('.center span').eq(11).addClass('b')
            $('.center span').eq(12).addClass('b')
            $('.center span').eq(20).addClass('b')
            $('.center span').eq(29).addClass('b')
        }
        over(ge)
    }
    function fanhui(index,c) {
        var aa = index.length
        var bushu=null
        console.log(aa, c)
        for (var j = aa - c; j >= 0; j--) {
            if(ge==48){
                bushu=6
            }else if(ge==63){
                bushu=7
            }else if(ge==64){
                bushu=8
            }
            if (index[j].code == 37) {
                fanPan(1,j,0)
            } else if (index[j].code == 38) {
                fanPan(bushu,j,0)
            } else if (index[j].code == 39) {
                fanPan(1,j,1)
            } else if (index[j].code == 40) {
                fanPan(bushu,j,1)
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
    function zhuan(arr,arr1,ge) {            // 背景砖
        for (let i = 0; i < ge; i++) {
//               console.log($('.center span').eq(i).attr('data-id'))
            var aa = $('.center span').eq(i).attr('data-id')
            for (var j = 0; j < arr.length; j++) {
                if (aa == arr[j]) {
                    $('.center span').eq(i).addClass('hh')
                }
            }
        }
        for (let i = 0; i < ge; i++) {
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
    function csh(ge) {
        for (var i = 0; i < ge; i++) {
            $('.center span').eq(i).removeClass('b')
            $('.center span').eq(i).removeClass('hh')
            $('.center span').eq(i).removeClass('gg')
            $('.center span').eq(i).removeClass('bb')
            $('.center span').eq(i).removeClass('x')
            $('.center span').eq(i).removeClass('x')
        }
    }
    function over(ge) {
        var fenshu=0
        for(var f=0;f<ge;f++){
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
