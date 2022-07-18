

function math(a, b) {

    let multiplication = a * b;
    console.log(a + ' x ' + b + ' = ' + multiplication);

    let division = (arguments[1] / arguments[0]);
    console.log(a + ' / ' + b + ' = ' + division);

}


math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);
