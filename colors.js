var link = {
  setColor: function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //    alist[i].style.color= color;
    //     i+=1;
    //     }
    //
    $("a").css('color', color);
    // 모든 웹페이지를 제이쿼리로 컨트롤함.


    }
  }

var body = {
  setColor: function(color){
    // document.querySelector('body').style.color= color
    $('body').css('color', color);
    },
  setBackgroundColor: function(color){
    //document.querySelector('body').style.backgroundColor= color
$('body').css('backgroundColor', color);
    }
  }


function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    body.setBackgroundColor('black');
    body.setColor('white');
    self.value = 'day';
    link.setColor('powderblue');
  }
  else {
    body.setBackgroundColor('white');
    body.setColor('black');
    self.value = 'night';
    link.setColor('blue');
  }
}
