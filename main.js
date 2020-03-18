
var showSum = function(){

    var num1 = document.getElementsByTagName("input")[0].value;

    var num2 = document.getElementsByTagName("input")[1].value;

    var result = parseInt(num2) / parseInt(num1);

    result.toFixed(5)

    document.getElementsByTagName("input")[2].value=result.toFixed(4) * 100 +"%";

}
