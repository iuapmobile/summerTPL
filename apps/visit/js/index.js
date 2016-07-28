$(function () {
    $('#index').find('.meeting-filter').on('click', function () {
        $('.filter-container').show();
        $('.respond-container').hide();
        $('.meeting-search-box').hide();
        $('.um-box-shadow').show();
    });
    $('.filter-container li').on('click', function () {
        $('.filter-container').hide();
        $('.respond-container').hide();
        $('.meeting-search-box').hide();
        $('.um-box-shadow').hide();
    })
    $('.respond-container li').on('click', function () {
        $('.filter-container').hide();
        $('.respond-container').hide();
        $('.meeting-search-box').hide();
        $('.um-box-shadow').hide();
    })
    $('#index').find('.meeting-respond').on('click', function () {
        $('.filter-container').hide();
        $('.respond-container').show();
        $('.meeting-search-box').hide();
        $('.um-box-shadow').show();
    })
    $('#index').find('.meeting-search').on('click', function () {
        $('.respond-container').hide();
        $('.filter-container').hide();
        $('.meeting-classify').hide();
        $('.meeting-search-box').show();
        $('.um-box-shadow').show();

    })
    $('.um-input-cancle').on('click', function () {
        $('.meeting-search-box').hide();
        $('.meeting-classify').show();
        $('.um-box-shadow').hide();
    })
    var data = [{
        img: 'img/header.jpg',
        date: '05月03日 星期一',
        content: '今天拜访了客户A的采购部经理李四，根据他们的实验室设备需求，我详细介绍了能提供的各个实验设备的相关信息。他对设备A比较感兴趣，希望我们先把技术资料和初步报价通过云之家发给他。'
    },
        {
            img: 'img/header.jpg',
            date: '05月16日 星期一',
            content: '今天拜访了客户A的采购部经理李四，根据他们的实验室设备需求，我详细介绍了能提供的各个实验设备的相关信息。他对设备A比较感兴趣，希望我们先把技术资料和初步报价通过云之家发给他。'
        },
        {
            img: 'img/header.jpg',
            date: '06月21日 星期一',
            content: '今天拜访了客户A的采购部经理李四，根据他们的实验室设备需求，我详细介绍了能提供的各个实验设备的相关信息。他对设备A比较感兴趣，希望我们先把技术资料和初步报价通过云之家发给他。'
        },
        {
            img: 'img/header.jpg',
            date: '7月26日 星期一',
            content: '今天拜访了客户A的采购部经理李四，根据他们的实验室设备需求，我详细介绍了能提供的各个实验设备的相关信息。他对设备A比较感兴趣，希望我们先把技术资料和初步报价通过云之家发给他。'
        }];

    function render() {
        $('.meeting-total').text(data.length);
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
    })
    $('#newVisit').find('.btn-nb').on('click', function () {
        var item = {
            img: 'img/header.jpg',
            date: '',
            content: ''
        }
        var nowDate = new Date();
        var month = nowDate.getMonth() + 1;
        month = month >= 10 ? month : '0' + month;
        var xingqi = nowDate.getDay();
        var day = nowDate.getDate();
        var week = intToChinese(xingqi);
        console.log(week);
        var str = month + '月' + day + '日' + '星期' + week;
        item.date = str;
        item.content = $('.um-textarea').val();
        data.unshift(item);
        render();
        $('#newVisit').find('.um-back').click();
    })
    /*数字转换成中文*/
    function intToChinese(str) {
        str = str + '';
        var len = str.length - 1;
        var idxs = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿'];
        var num = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
        return str.replace(/([1-9]|0+)/g, function ($, $1, idx, full) {
            var pos = 0;
            if ($1[0] != '0') {
                pos = len - idx;
                if (idx == 0 && $1[0] == 1 && idxs[len - idx] == '十') {
                    return idxs[len - idx];
                }
                return num[$1[0]] + idxs[len - idx];
            } else {
                var left = len - idx;
                var right = len - idx + $1.length;
                if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
                    pos = left - left % 4;
                }
                if (pos) {
                    return idxs[pos] + num[$1[0]];
                } else if (idx + $1.length >= len) {
                    return '';
                } else {
                    return num[$1[0]]
                }
            }
        });
    }
})

