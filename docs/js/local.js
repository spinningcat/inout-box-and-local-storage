var inputObj = localStorage.getItem('inputObj');
inputObj = inputObj && inputObj !== '{}' ? JSON.parse(inputObj) : mkInputObj(20);
console.log('inputObj', inputObj);
objToInputs(inputObj, '#inputs');
$('.inputClass').on('input', function(){
		localStorage.setItem('input', $(this).val());
});
/*var print = function()
{
  var smt = localStorage.getItem("input");
  $('.inputClass').val(smt);
}
print();*/

function mkInputObj(n) {
	var inputObj = {}, id;
	for (var i = n; i > 0; i--) {
  		inputObj['input' + i] = '';
  }
  return inputObj;
}

function objToInputs(obj, parentSelector) {
	var parent = $(parentSelector);
  Object.keys(obj).forEach(function(key) {
  	var input = $('<input id="' + key + '">');
    input.val(obj[key]);
    parent.append(input);
    input.on('keyup', function() {
    	obj[key] = input.val();
      localStorage.setItem('inputObj', JSON.stringify(obj));
    });
  })
}
