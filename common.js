$(function(){
  console.log('this is jquery');
  // for(var i = 1; i < 5; i++){
  //   if(i == 1){
  //     $('li:nth-child('+i+')').css('color','red');
  //   }else if(i == 2){
  //     $('li:nth-child('+i+')').css('color','blue');
  //   }else if(i == 3){
  //     $('li:nth-child('+i+')').css('color','green');
  //   }else{
  //     $('li:nth-child('+i+')').css('color','yellow');
  //   }
  // }
  // 아래와 같은 것과 동일한 결과값을 얻을 수 있다.

  // javascript vs jQuery 표기 비교
  //let liNum = document.getElementByTagName('li');
  // liNum[0].style.color = 'red';
  //console.log(liNum);

  // $('li:nth-child(1)').css('color','red');
  // $('li:nth-child(1)').css('color','blud');
  // $('li:nth-child(1)').css('color','green');
  // $('li:nth-child(1)').css('color','yellow');
  //
  // for(var i = 0; i < 4; i++){
  //   if(i == 0){
  //     $('li:nth-child('+(i+1)+')').css('color','red');
  //   }else if(i == 1){
  //     $('li:nth-child('+(i+1)+')').css('color','blue');
  //     console.log('nth-child(2)');
  //   }else if(i == 2){
  //     $('li:nth-child('+(i+1)+')').css('color','green');
  //     console.log('nth-child(3)');
  //   }else{
  //     $('li:nth-child('+(i+1)+')').css('color','yellow');
  //     console.log('nth-child(4)');
  //   }
  // }

  // $('li p:only-child').css('color','red');
  // $('li span:only-child').css('color','red');
  //
  // $('li p:only-child,li span:only-child').css('color','darkgreen');//요소가 하나만 있을 때 선택

  /*속성 선택자*/
  $("[class=box] a").css('color','red');// 해당 속성을 갖고 있는 모든 요소를 선택
  $('ul li[title!=fourth] a').css('color','teal');// 선택한 특정태그를 제외한 모든 요소 선택
  $('[title ^= s] a').css('color','orange');// 특정 속성이 지정한 값으로 시작하는 요소 선택
  $('[title *= r] a').css('background','salmon');// 특정 속성이 지정한 값을 포함하는 요소 선택
  $('[class $= x]').css('height','25px');// 특정 속성이 지정한 값으로 끝나는 요소 선택
  $('[href $= m]').css('color','crimson');
  $('[href *= naver]').css('color','blue');
  $('[title]').css('height','30px');
  $('[href $= com]').css('color','blue');
  $('[href $= net]').css('color','yellow');
  $('[class=box][title=third] a').css('font-size','24px');
});
