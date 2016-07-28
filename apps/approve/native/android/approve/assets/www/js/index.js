$(function () {
    var approveDate=[
        {
            time: '3月13日 09:12:10',
            status: 1,
            type: '通用审批',
        },
        {
            time: '5月08日 19:39:10',
            status: 1,
            type: '出差申请',
        }
    ];

    var data = [
        {
            time: '3月12日 09:12:10',
            status: 1,
            type: '通用审批',
        },

        {
            time: '5月22日 11:15:00',
            status: 2,
            type: '合同申请',
        },
        {
            time: '6月22日 10:36:48',
            status: 0,
            type: '合同申请',
        }];
    function renderData(){
        for(var i=0;i<data.length;i++){
            var item=data[i];
            var classType='';
            var statusType='';
            if(item.status==0){
                classType='待审批';
                statusType='';
            }else if(item.status==1){
                classType='已同意';
                statusType='pass';
            }else if(item.status==2){
                classType='不通过';
                statusType='reject'
            }
            var $li=$(' <li class="p15"> <div class="item-my">我的【 <span class="item-type">'+item.type+'</span>】</div> <div class="item-date">'+item.time+'</div> <div class="item-status">'+classType+'</div> <div> <i class='+statusType+'></i> </div> </li>');
            $('#index .um-table-container:eq(0) .um-form').append($li);
        };
        for(var j=0;j<approveDate.length;j++){
            var item=data[j];
            var classType='';
            var statusType='';
            if(item.status==0){
                classType='待审批';
                statusType='';
            }else if(item.status==1){
                classType='已同意';
                statusType='pass';
            }else if(item.status==2){
                classType='不通过';
                statusType='reject'
            }
            var $li=$(' <li class="p15"> <div class="item-my">李刚【 <span class="item-type">'+item.type+'</span>】</div> <div class="item-date">'+item.time+'</div> <div class="item-status">'+classType+'</div> <div> <i class='+statusType+'></i> </div> </li>');
            $('#index .um-table-container:eq(1) .um-form').append($li);
        }
    }
    renderData();
    $("#table-nav .h64").click(function() {
        var index = $(this).index();
        var contentH = window.innerHeight - 78 - 100;
        $(this).addClass("active").siblings().removeClass("active");
        $(".um-table-container").eq(index).height(contentH).find(".um-tb-data").height(contentH - 60).end().siblings(".table-row-scroll").height(0);
    })
    $("#table-nav li").eq(0).trigger("click");
})

