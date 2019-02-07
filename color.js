function LinksSetColor(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
    }
}
function BodySetColor(color) {
    document.querySelector('body').style.color = color;
}
function BodySetBackgroundColor(color) {
    document.querySelector('body').style.backgroundColor = color;
}

var Body = {
    setColor: function(color) {
        $('body').css('color', color);
        // document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color) {
        $('body').css('backgroundColor', color);
        // document.querySelector('body').style.backgroundColor = color;
    }
}
var Links = {
    setColor: function(color) {
        $('a').css('color', color); //3.html 에 구글 CDN 3.x snippet: 추가하면서 넣음
        //$('a')는 웹 페이지에 있는 모든 <a> 태그를 jQuery로 제어 하겠다는 뜻

        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length) {
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');

    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}
