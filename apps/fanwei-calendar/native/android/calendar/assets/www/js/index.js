/**
 * Created by Administrator on 14-7-15.
 */
new Calendar({
     //   日历组件容器的id
     containerId:"container",
     //   点击一个日期，执行的响应函数，可省
     selectDate:function(data){
         var year=data.year;
         var month=data.month;
         var date=data.date;
       	 var tim = year+'/'+month+'/'+date;
       	 $('table td.notCurMon').on('mousedown',function(Event){if (1 === Event.button) Event.preventDefault()})
       	 
       	 $('table td').css('background','white');
       	 $('table td.today').css('background','white').css('color','#017afd');
       	  $('table td:contains('+date+')').css('background','#017afd').css('border-radius','50%').css('color','#333');
       	 $('table td.notCurMon:contains('+date+')').css('background','white').css('color','#BCB8B9');
       	 $('a.um-list-item').remove();
       	 $('div.um-process').append('<a href="#" class="um-list-item"><div class="um-list-item-inner"><div class="um-list-item-body"><p class="f14   ml15"><span data-bind="text:loc"></span>&nbsp;<span data-bind="text:msg"></span></p><p class="um-gray um-text-overflow2 f14 mt5 ml15" data-bind="text: time"></p></div></div> </a>');
       	 jiazai(tim);
     }
});
jiazai();
function jiazai(nnn) {
	var now;
	if(!nnn){
		now = new Date();
	}else{
		now = new Date(nnn);
	}
	var time=now.format('yyyy年MM月dd日');
	 time1=new Date((now.getTime()+3600*24*1000)).format('yyyy年MM月dd日');
	  time2=new Date((now.getTime()+2*3600*24*1000)).format('yyyy年MM月dd日');
	   time3=new Date((now.getTime()+3*3600*24*1000)).format('yyyy年MM月dd日');  
	   time4=new Date((now.getTime()+4*3600*24*1000)).format('yyyy年MM月dd日');   
	var Day=now.getDay();
	var Day1=(Day+1)%7;
	var Day2=(Day+2)%7;
	var Day3=(Day+3)%7;
	var Day4=(Day+4)%7;
	function weekshift(week){
		switch(week){
		case 0:
		week='星期日'; break;
		case 1:
		week='星期一'; break;
		case 2:
		week='星期二'; break;
		case 3:
		week='星期三'; break;
		case 4:
		week='星期四'; break;
		case 5:
		week='星期五'; break;
		case 6:
		week='星期六'; break;
		 default:
		 week=''
	}
	return week;
}
Day=weekshift(Day);
Day1=weekshift(Day1);
Day2=weekshift(Day2);
Day3=weekshift(Day3);
Day4=weekshift(Day4);
	var data = [{
		"loc" : time,
		"msg" : Day,
		"time" : "当天无日程安排"
	}, {
		"loc" : time1,
		"msg" : Day1,
		"time" : "当天无日程安排"
	}, {
		"loc" : time2,
		"msg" : Day2,
		"time" : "当天无日程安排"
	}, {
		"loc" : time3,
		"msg" : Day3,
		"time" :"当天无日程安排"
	}, {
		"loc" : time4,
		"msg" : Day4,
		"time" : "当天无日程安排"
	}];
	var ViewModel = function() {
	};
	var viewModel = new ViewModel();
	viewModel.data = ko.observableArray(data);
	ko.applyBindings(viewModel);
};

