// 处理星期
function weekdays(d) {
	// 	weekday = new Array();
	// weekday[0] = "星期天";
	// weekday[1] = "星期一";
	// weekday[2] = "星期二";
	// weekday[3] = "星期三";
	// weekday[4] = "星期四";
	// weekday[5] = "星期五";
	// weekday[6] = "星期六";
	weekday = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	return weekday[d];
}
//给小于10的数字前面加上一个0
function checkTime(num) {
	return num < 10 ? "0" + num : num;
}
//显示时间，并且每500毫秒自己执行自己一次
function showTime() {
	var myDate = new Date(),
		year = myDate.getFullYear(),
		Momth = myDate.getMonth() + 1,
		day = myDate.getDate(),
		d = myDate.getDay(),
		hours = checkTime(myDate.getHours()),
		minutes = checkTime(myDate.getMinutes()),
		second = checkTime(myDate.getSeconds());

	var show_time = year + "年" + Momth + "月" + day + "日" + weekdays(d) + hours + ":" + minutes + ":" + second;
	document.getElementById('show').innerHTML = show_time;
	setTimeout(showTime, 500);
}
//显示倒计时，并且每500毫秒自己执行自己一次
function count_time() {
	var endTime = new Date("2017/1/1,00:00:00");
	// 倒计时,将剩余时间转换成毫秒,Math.celi()  向上取整的函数
	// 一天 = 24小时，一小时 = 60分钟，一分钟 = 60秒，一秒钟 = 1000毫秒
	var curTime = new Date(),
		leftTime = parseInt((endTime.getTime() - curTime.getTime()) / 1000),
		l_day = parseInt(leftTime / (24 * 60 * 60)),
		l_hours = parseInt(leftTime / (60 * 60) % 24),
		l_minutes = parseInt(leftTime / 60 % 60),
		l_seconds = parseInt(leftTime % 60);

	var show_count_time = "还剩下" + l_day + "天" + l_hours + "小时" + l_minutes + "分" + l_seconds + "秒";
	document.getElementById("count_down").innerHTML = show_count_time;

	if (leftTime < 0) {
		document.getElementById("count_down").innerHTML = "倒计时结束";
	} else {
		setTimeout(count_time, 500);
	}
}


window.onload = function() {
	//页面加载成功执行一次显示时间的函数

	//显示当前时间
	showTime();
	//显示倒计时
	count_time();

}