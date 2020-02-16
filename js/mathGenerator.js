
function GenerateNumbers() {
    console.log("Hello");

    //returns a number between 1 and 25
    function getNumber() {
        return (Math.random() * 24) + 1;
    }



    let a = $("td");
    $.each(a, function () {
        $(this).html(getNumber().toFixed(0));
    })


}