$(document).ready( function () {

    q();
    $('.box').on('click', 'input', function(){
        var dir = $(this).val();
        q(dir);
    });
    $('.box').on('click', 'label', function(){

        var dir = $(this).prev();
        dir = $(dir).val();
        q(dir);
    });

    $(document).on('change', '.sel', function () {
        b();
    });

    function q(a) {
        if (a == undefined){
            var a = '';
        }
        $.ajax({
            type: "POST",
            url: 'php/obr.php',
            data: {
                dir: a
            },
            success: function(data){
                $('.box').text('');
                $('.box').append(data);
                b(1);
                $('.box-elem').slideDown(800);

            }
        });
    }
    function b(a) {
        var sel = $('.sel').val();
        if (a == undefined) {
            if (sel == 1) {
                $(".box").animate({
                    fontSize: '15px'
                });
                $(".elem, .elem-info, .elem-size").animate({
                    height: '20px'
                });
            } else if (sel == 2) {
                $(".box").animate({
                    fontSize: '25px'
                });
                $(".elem, .elem-info, .elem-size").animate({
                    height: '30px'
                });
            } else if (sel == 3) {
                $(".box").animate({
                    fontSize: '35px'
                });
                $(".elem").animate({
                    width: '30% !important'
                });
                $(".elem, .elem-info, .elem-size").animate({
                    height: '45px'
                });
            }
        }
        else {
            if (sel == 1) {
                $(".box").css(
                    'fontSize', '15px'
                );
                $(".elem, .elem-info, .elem-size").css(
                    'height', '20px'
                );
            } else if (sel == 2) {
                $(".box").css(
                    'fontSize', '25px'
                );
                $(".elem, .elem-info, .elem-size").css(
                    'height', '30px'
                );
            } else if (sel == 3) {
                $(".box").css(
                    'fontSize', '35px'
                );
                $(".elem").css(
                    'width', '30% !important'
                );
                $(".elem, .elem-info, .elem-size").css(
                    'height', '45px'
                );
            }
        }
    }
});


