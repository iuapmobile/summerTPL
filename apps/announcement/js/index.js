

summerready = function(){
    // here is your code...	
    var y = $summer.offset($summer.byId('header')).h;
    var width=$summer.offset(document.getElementsByTagName("body")[0]).w;		
    var height = $summer.offset($summer.byId('main')).h;

    summer.openFrame({
        name: 'main',
        url: 'html/main.html',
        bounces: true,
        rect: {
            x: 0,
            y: y,
            w: width,
            h: height
        }
    });
}
var data=[
    {
        title:'工作时间调整',
        content:'上午：10:00-12:00 下午：13:00-19:00',
        time:'2016-07-25 14:52',
        user:'李刚',
        status:'2'
    },
    {
        title:'中秋放假安排',
        content:'中秋放假时间为15、16、17，周天正常上班，请员工做好工作调整',
        time:'2016-09-25 16:52',
        user:'李刚',
        status:'1'
    }
];
$(function () {
    function render(data){
        $('#index').find('.um-form').empty();
        for(var i=0;i<data.length;i++){
            var item=data[i];
            var text='';
            var classType='';
            if(item.status=='2'){
                text='已读';
                classType='read';
            }else if(item.status=='1'){
                text='未读';
                classType='unread';
            }
            var $li=$('<li class="notice-container"> <div class="notice-title">'+item.title+'</div> <div class="notice-detail"> <div class="notice-date">'+item.time+'</div> <div class="notice-user">'+item.user+'</div> </div> <div class="notice-content">'+item.content+'</div> <div class="notice-read '+classType+'">'+text+'</div> </li>');
            $('#index').find('.um-form').append($li);
        }
    }
     render(data);
    $('#newNotice').find('.btn-new').on('click', function () {
        var dataItem={
            title:'',
            content:'',
            time:'',
            user:'李刚',
            status:'1'
        }
        dataItem.title=$('.um-group-item').val();
        dataItem.content=$('.um-textarea').val();
        dataItem.time='2016/8/25 12:00';
        data.push(dataItem);
        console.log(data);
        render(data);
    })
});
