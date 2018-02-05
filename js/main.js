$(document).ready( function () {
    var anim = true;
    ajaxOpenDir();

    $('.box').on('click', 'input', function(){
        var dir = $(this).val();
        ajaxOpenDir(dir);
    });

    $('.box').on('click', 'label', function(){

        var dir = $(this).prev();
        dir = $(dir).val();
        ajaxOpenDir(dir);
    });

    $(document).on('change', '.sel', function () {
        fontSizeAnim(anim);
    });
    $(document).on('change', '.anim', function () {
        var animElem = $('.anim').val();
        anim = (animElem == 0) ? false : true;
    });

    function ajaxOpenDir(dir) {
        if (dir == undefined){
            var dir = '';
        }
        $.ajax({
            type: "POST",
            url: 'php/obr.php',
            data: {
                dir: dir
            },
            success: function(data){

                $('.box').text('');
                $('.box').append(data);
                fontSizeAnim(0);
                if(anim == 0) {
                    $('.box-elem').show();
                } else $('.box-elem').slideDown(800);
            }
        });
    }
    function fontSizeAnim(animat) {
        var sel = $('.sel').val();
        if (animat == 1) {
            if (sel == 1) {
                $(".box").animate({ fontSize: '15px' });
                $(".elem, .elem-info, .elem-size").animate({ height: '20px' });
            } else if (sel == 2) {
                $(".box").animate({ fontSize: '25px' });
                $(".elem, .elem-info, .elem-size").animate({ height: '30px' });
            } else if (sel == 3) {
                $(".box").animate({ fontSize: '35px' });
                $(".elem").animate({ width: '30% !important' });
                $(".elem, .elem-info, .elem-size").animate({ height: '45px' });
            }
        } else if(animat == 0) {
            if (sel == 1) {
                $(".box").css( 'fontSize', '15px' );
                $(".elem, .elem-info, .elem-size").css( 'height', '20px' );
            } else if (sel == 2) {
                $(".box").css( 'fontSize', '25px' );
                $(".elem, .elem-info, .elem-size").css( 'height', '30px' );
            } else if (sel == 3) {
                $(".box").css( 'fontSize', '35px' );
                $(".elem").css( 'width', '30% !important' );
                $(".elem, .elem-info, .elem-size").css( 'height', '45px' );
            }
        }
    }
});


