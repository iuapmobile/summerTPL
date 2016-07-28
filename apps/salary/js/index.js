$(function () {
    var isVerfy=false; /*定义是否验证过了*/
    $('#main').find('.btn-style').on('click', function () {
        $('.salary-verify').css('display','none');
      $('#main').find('.um-box-shadow').css('display','block');
    });
    $('.password-cancel').on('click', function () {
        $('.salary-verify').css('display','block');
        $('#main').find('.um-box-shadow').css('display','none');
        $('.password-input').val('');
    });
    $('.password-confirm').on('click', function () {
        $('.salary-verify').css('display','none');
        $('#main').find('.um-box-shadow').css('display','none');
        $('.salary-no-info').css('display','block');
        $('.password-input').val('');
        isVerfy=true;
    })
    $('.salary-detail').on('click', function () {
        if(isVerfy){
            if($('.salary-detail').hasClass('select')){
                return ;
            }else {
                $('.salary-detail').addClass('select');
                $('.salary-search').removeClass('select');
                $('.salary-detail-box').show();
                $('.salary-search-box').hide();
                $('.um-footer').hide();

            }
        }else {
            return;
        }
    });
    $('.salary-search').on('click', function () {
        if(isVerfy){
            if( $('.salary-search').hasClass('select')){
                return;
            }else {
                $('.salary-detail').removeClass('select');
                $('.salary-search').addClass('select');
                $('.salary-detail-box').hide();
                $('.salary-search-box').show();
                $('.um-footer').show();
            }
        }
    })
})

