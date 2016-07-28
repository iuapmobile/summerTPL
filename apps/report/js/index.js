$(function () {
    var data = [
                {
                    img: 'img/header.jpg',
                    date: '05月03日 星期一',
                    content:' 今日工作计划：<br/>1、早上9点拜访客户A确认合同进展顺利 <br/>2、下午2点与产品团队确认新产品发布计划 <br/>3、晚上7点组织销售团队进行新产品学习研讨会 <br/>'
                },
                {
                    img: 'img/header.jpg',
                    date: '05月16日 星期一',
                    content:' 今日工作计划：<br/>1、早上9点拜访客户A确认合同进展顺利 <br/>2、下午2点与产品团队确认新产品发布计划 <br/>3、晚上7点组织销售团队进行新产品学习研讨会 <br/>'
                },
                {
                    img: 'img/header.jpg',
                    date: '06月21日 星期一',
                    content:' 今日工作计划：<br/>1、早上9点拜访客户A确认合同进展顺利 <br/>2、下午2点与产品团队确认新产品发布计划 <br/>3、晚上7点组织销售团队进行新产品学习研讨会 <br/>'
                },
                {
                    img: 'img/header.jpg',
                    date: '7月26日 星期一',
                    content:' 今日工作计划：<br/>1、早上9点拜访客户A确认合同进展顺利 <br/>2、下午2点与产品团队确认新产品发布计划 <br/>3、晚上7点组织销售团队进行新产品学习研讨会 <br/>'
                }
    ];
    function render() {
        $('#main').find('.um-form').empty();
        for (var i = 0; i < data.length; i++) {
            var $li = $(' <li class="um-list-style"> <div class="meeting-report"> <img class="meeting-photo" src="img/header.jpg" alt=""/> <div class="meeting-header"> <div class="meeting-info"> <div class="meeting-title">我的客户拜访</div> <div class="meeting-title"></div> </div> <div class="meeting-date">' + data[i].date + '</div> </div> <div class="meeting-delete">删除 </div> </div> <p class="meeting-content">' + data[i].content + ' </p> </li>');
            $('#main').find('.um-form').append($li);
        }
    }
    render();
    $('#main').find('.meeting-delete').on('click', function (e) {
        var index = $(".meeting-delete").index(this);
        $('.um-list-style').eq(index).css('display', 'none');
    });
$('.my-report').on('click', function () {
    $('.team-report').removeClass('select');
    $(this).addClass('select');
    $('.my-report-container').show();
    $('.team-report-container').hide()
});
    $('.team-report').on('click', function () {
        $('.my-report').removeClass('select');
        $(this).addClass('select');
        $('.my-report-container').hide();
        $('.team-report-container').show()
    })
})