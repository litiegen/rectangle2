$(function(){
  //get dom elem
  var $width = $('#width'),
  $height = $('#height'),
  $bthCal = $('#calculate'),
  $perimeter = $('#perimeter'),
  $area = $('#area');

  /**calc button click event */
  $bthCal.click(function(){
      //get value 字符串转成数字
      var w = Number($width.val()),
      h=Number($height.val());

      //calculate

      function roundFractional(x, n) {
          return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
      }

      var p = 2*roundFractional(w+h,10),
      a = roundFractional(w*h,10);

      //output
      $perimeter.val(p);
      $area.val(a);
  });
});