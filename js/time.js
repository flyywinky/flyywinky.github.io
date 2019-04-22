function showLocale() {
    var today;
    today = new Date();
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var str, colorhead, colorfoot;
    var yy = today.getYear();
    if (yy < 1900) yy = yy + 1900;
    var MM = today.getMonth() + 1;
    if (MM < 10) MM = '0' + MM;
    var dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    var hh = today.getHours();
    if (hh < 10) hh = '0' + hh;
    var mm = today.getMinutes();
    if (mm < 10) mm = '0' + mm;
    var ss = today.getSeconds();
    if (ss < 10) ss = '0' + ss;
    var ww = today.getDay();
    if (ww == 0) colorhead = "<font color=\"#82909a\">";
    if (ww > 0 && ww < 6) colorhead = "<font color=\"#82909a\">";
    if (ww == 6) colorhead = "<font color=\"#82909a\">";
    if (ww == 0) ww = "星期日";
    if (ww == 1) ww = "星期一";
    if (ww == 2) ww = "星期二";
    if (ww == 3) ww = "星期三";
    if (ww == 4) ww = "星期四";
    if (ww == 5) ww = "星期五";
    if (ww == 6) ww = "星期六";
    colorfoot = "</font>"
    var time0 = Date.UTC(2016, 12, 7, 17, 20, 00);
    var currenttime = Date.UTC(yy, MM, dd, hh, mm, ss, );
    var diff = currenttime - time0;
    var diffyy = Math.floor(diff / years); /*Math.floor函数是返回表示小于或等于指定数字的最大整数的数字*/
    var diffdd = Math.floor((diff / days) - diffyy * 365);
    var diffhh = Math.floor((diff - (diffyy * 365 + diffdd) * days) / hours);
    var diffmm = Math.floor((diff - (diffyy * 365 + diffdd) * days - diffhh * hours) / minutes);
    var diffss = Math.floor((diff - (diffyy * 365 + diffdd) * days - diffhh * hours - diffmm * minutes) / seconds);
    str1 =  "NOW " + colorhead  + yy + "/" + MM + "/" + dd + " " + hh + ":" + mm + ":" + ss + "  " + ww + colorfoot;
    str2 =
        "<div class=\"years\"> \
            <div class=\"numbers\">" + diffyy + "</div>years</div> \
        <div class=\"days\"> \
            <div class=\"numbers\">" + diffdd + "</div>days</div> \
        <div class=\"hours\"> \
            <div class=\"numbers\">" + diffhh + "</div>hours</div> \
        <div class=\"minutes\"> \
            <div class=\"numbers\">" + diffmm + "</div>minutes</div> \
        <div class=\"seconds\"> \
            <div class=\"numbers\">" + diffss + "</div>seconds</div> \
        </div>";
    document.getElementById("nowtime").innerHTML = str1;
    document.getElementById("timer").innerHTML = str2;
    window.setTimeout("showLocale()", 1000);

};
showLocale();