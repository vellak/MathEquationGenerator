
function GenerateNumbers() {
    console.log("Hello");

    //returns a number between -25 and 25, but not 0
    function getNumber() {

        // generates the number and remaps from 0 => 1 to -1 => 1
        let n = (Math.random() * 2) - 1;
        // multiplies value to get -25=>25
        n *= 25;
        // removes decimal points to get integer values
        n.toFixed(0);

        // checks for 0 value
        if (Math.abs(n) < 1){
            // if 0 then redo the calculation
            n = getNumber();
        }
            return n;
    }
    let a = $("td");
    $.each(a, function () {
        $(this).html(getNumber().toFixed(0) + " " + getNumber().toFixed(0));
    })


    // EQUATION TYPES
    // Ax + Bx = c
    // Ax + B = Cx

    //A(Dx + E) + B = Cx
    //A(Dx + E) + B = Cx


}