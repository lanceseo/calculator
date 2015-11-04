//var input = "";
//var num1 = "";
//var num2 = "";
//var oper = "";
//var result = 0;
//var num1flag = true;
//var num2flag = true;
//
//$(document).ready(function(){
//    $("button").on("click", function() {
//
//        var input = $(this).text();
//
//        if (!(isNaN(parseInt(input))) && num1flag) {
//            num1 += input;
//            console.log("num1: ", num1);
//            $("#display_area").text(num1);
//        }
//        else if ((isNaN(parseInt(input))) && !(input == "=")){
//            oper = input;
//            num1flag = false;
//            console.log("oper: ", oper);
//            $("#display_area").text(oper);
//        }
//        else if (!(isNaN(parseInt(input))) && (num2flag)) {
//            num2 += input;
//            console.log("num2: ", num2);
//            $("#display_area").text(num2);
//        }
//        else if ((isNaN(parseInt(input))) && (input == "=")) {
//            num2flag = false;
//            calcIt();
//        }
//
//        function calcIt() {
//                switch (oper) {
//                    case '+':
//                        result = (parseInt(num1) + parseInt(num2));
//                        break;
//                    case '-':
//                        result = (parseInt(num1) - parseInt(num2));
//                        break;
//                    case 'X':
//                        result = (parseInt(num1) * parseInt(num2));
//                        break;
//                    case '/':
//                        result = (parseInt(num1) / parseInt(num2));
//                        break;
//                    default:
//                        break;
//                }
//                result = result.toString();
//                console.log("result: ", result);
//                $("#display_area").text(result);
//        }
//
//    });
//
//});


// 4th OPS
var input = "";
var num1 = "";
var num2 = "";
var oper = "";
var result = 0;
var num1flag = true;
var num2flag = true;

$(document).ready(function(){
    $("button").on("click", function() {

        var input = $(this).text();

        if (!(isNaN(parseInt(input))) && num1flag) {
            num1 += input;
            console.log("num1: ", num1);
            $("#display_area").text(num1);
        }
        else if (input == "+" || input == "-" || input == "/" || input == "X") {
            oper = input;
            num1flag = false;
            console.log("oper: ", oper);
            $("#display_area").text(oper);
        }
        else if (!(isNaN(parseInt(input))) && (num2flag)) {
            num2 += input;
            console.log("num2: ", num2);
            $("#display_area").text(num2);
        }
        else if ((isNaN(parseInt(input))) && (input == "=")) {
            num2flag = false;
            calcIt();
        }
        else if (input == "AC" || input == "C") {
            clearAll();
        }

        function calcIt() {
            switch (oper) {
                case '+':
                    result = (parseInt(num1) + parseInt(num2));
                    break;
                case '-':
                    result = (parseInt(num1) - parseInt(num2));
                    break;
                case 'X':
                    result = (parseInt(num1) * parseInt(num2));
                    break;
                case '/':
                    result = (parseInt(num1) / parseInt(num2));
                    break;
                default:
                    break;
            }
            result = result.toString();
            console.log("result: ", result);
            $("#display_area").text(result);
        }

        function clearAll() {
            input = "";
            num1 = "";
            num2 = "";
            oper = "";
            result = 0;
            num1flag = true;
            num2flag = true;
            $("#display_area").text("0");
        }

    });

});



/*
// 2nd OPS
var input1, input2 = "";
var inputClass = "";
var numQueue, operQueue = [];

function check1() {
    inputClass = $(this).attr("class");

    switch (inputClass) {
        case 'nums':
            input1 += $(this).text();
            break;
        case 'oper':
            input1 = "0";
            input2 = $(this).text();
            break;
        case 'dot':
            input1 = "0.";
            break;
        default:
            break;
    }

}

function checkFirst() {

}
*/


/*
// 3rd OPS
var numArray, operArray = [];
var allArray = [];
var nObj = {};
var numHolder = "";
var operHolder = "";
var firstInput = true;
var thisInput = "";
var thisInputValue = "";

if (firstInput) {

    switch (thisInput) {
        case 'num':
            numHolder = thisInputValue;
            break;
        //case 'oper':
        //    numHolder = "0";
        //    operHolder = thisInputValue;
        //    break;
        default:
            break;
    }

    firstInput = false;
}

else {

    switch (thisInput) {
        case 'num':
            numHolder += thisInputValue;
            break;
        case 'oper':
            numArray.push(numHolder);
            operArray.push(operHolder);
            numberHolder = "";
            operHolder = "";
            break;
        default:
            break;
    }

}

function calculate(a,b) {
    numArray.push(numHolder);

    for (i=0, j=0; i<numArray.length, j<operArray.length; i++, j++) {
        allArray[i] += numArray[i] + operArray[j];
    }
}

nObj = {
    runCalc: calculate(a,b),
    backfire: allArray
}*/
