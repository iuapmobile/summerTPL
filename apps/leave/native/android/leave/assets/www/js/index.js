
var data = [{
    total: 2,
    type: '调休',
    status: 1,
    date: '2016/04/20-2016/04/21 '
},
    {
        total: 1,
        type: '事假',
        status: 2,
        date: '2016/05/08-2016/05/08'
    },
    {
        total: 3,
        type: '丧假',
        status: 1,
        date: '2016/05/13-2016/05/15'
    },
    {
        total: 3,
        type: '婚假',
        status: 1,
        date: '2016/06/01-2016/06/03'
    },
    {
        total: 2,
        type: '看护假',
        status: 0,
        date: '2016/07/26-2016/07/27'
    }];

$(function () {
    $('#askForLeave').find('.leave-ellipsis').on('click', function () {
        $('#askForLeave').find('.leave-ellipsis').css('display', 'none');
        $('#askForLeave').find('.leave-type-container').eq(1).css('display', 'flex');
        $('#askForLeave').find('.leave-type-marriage').css('display', 'block');
    });
    $('.leave-type-item').on('click', function (e) {
        console.log(e.target);
        var text = $(e.target).text();
        if (text == '...') {
            return
        } else if (text == '事假' || text == '调休' || text == '病假' || text == '年假') {
            $('.leave-type-item').removeClass('um-bgc-1').removeClass('um-bgc-2').removeClass('um-bgc-3').removeClass('um-bgc-4');
            $(e.target).addClass('um-bgc-1');
        } else if (text == '婚假') {
            $('.leave-type-item').removeClass('um-bgc-1').removeClass('um-bgc-2').removeClass('um-bgc-3').removeClass('um-bgc-4');
            $(e.target).addClass('um-bgc-2');
        } else if (text == '节育假' || text == '看护假' || text == '产检假') {
            $('.leave-type-item').removeClass('um-bgc-1').removeClass('um-bgc-2').removeClass('um-bgc-3').removeClass('um-bgc-4');
            $(e.target).addClass('um-bgc-3');
        } else if (text == '丧假') {
            $('.leave-type-item').removeClass('um-bgc-1').removeClass('um-bgc-2').removeClass('um-bgc-3').removeClass('um-bgc-4');
            $(e.target).addClass('um-bgc-4');
        }

    });
    function render(data,content){
        for(var i=0;i<data.length;i++){
            var item=data[i];
            var status=item.status;
            var classStatus='';/*是否显示通过图标*/
            var classType='';
            var type=item.type;
            var text='';
            if(status=='0'){
                text='等待李刚审批。。。';
                classStatus='none';
            }else if(status=='1'){
                text='审批通过';
                classStatus='pass';
            }else if(status=='2'){
                text='审批未通过';
                classStatus='reject';
            };
            if (type == '事假' || type == '调休' || type == '病假' || type == '年假') {
                classType='um-bgc-1';
            } else if (type == '婚假') {
                classType='um-bgc-2';
            } else if (type == '节育假' || type == '看护假' || type == '产检假') {
                classType='um-bgc-3';
            } else if (type == '丧假') {
                classType='um-bgc-4';
            }
            var $li=$(' <li class="p15"> <div class="item-my">共 <span class="item-long">'+item.total+'</span>天 <span class="item-type '+classType+'">'+item.type+'</span> </div> <div class="item-date">'+item.date+'</div> <div class="item-status">'+text+'</div> <div> <i class="'+classStatus+'"></i> </div> </li>');
            content.append($li);
        }
    }
    render(data,$('#main').find('.um-form'));

    var chooseDate=new Date();
    var year=chooseDate.getFullYear();
    var month=chooseDate.getMonth()+1;
    month=month>10?month:'0'+month;
    var str=year+'&ensp;'+'年'+'&ensp;'+month+'&ensp;'+'月';
    $('#statistics').find('.fiflte-date').html(str);
    /*初始化假单统计*/
    $('#statistics').find('.um-form').empty();
    var newData=getNewDate();
    render(newData,$('#statistics').find('.um-form'));
    /*点击左侧获取新的假单统计*/
    $('.filter-control-left').on('click', function () {
        month=month-1;
        if(month==0){
            month=12;
            year=year-1;
        }
        month=month>=10?month:'0'+month;
        var newStr=year+'&ensp;'+'年'+'&ensp;'+month+'&ensp;'+'月';
        $('#statistics').find('.fiflte-date').html(newStr);
        $('#statistics').find('.um-form').empty();
        var newData=getNewDate();
        render(newData,$('#statistics').find('.um-form'));

    })
    /*点击左侧获取新的假单统计*/
    $('.filter-control-right').on('click', function () {
        month=parseInt(month)+1;
        if(month==13){
            month=1;
            year=parseInt(year)+1;
        }
        month=month>=10?month:'0'+month;
        var newStr=year+'&ensp;'+'年'+'&ensp;'+month+'&ensp;'+'月';
        $('#statistics').find('.fiflte-date').html(newStr);
        $('#statistics').find('.um-form').empty();
        var newData=getNewDate();
        render(newData,$('#statistics').find('.um-form'));

    })

   function getNewDate(){
       var newDate=[];
       for(var j=0;j<data.length;j++){
           var item=data[j];
           var index=j;
           var itemYear=item.date.split('-')[0].split('/')[0];
           var itemMonth=item.date.split('-')[0].split('/')[1];
           if(itemYear==year){
               if(itemMonth==month){
                   newDate.push(data[index]);
               }
           }
       };
       return newDate;
   }
/*请假提交*/

});