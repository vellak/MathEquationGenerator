function GenerateNumbers() {
    //returns a number between -25 and 25, but not 0

    let tdList = $("td");
    $.each(tdList, function () {
        if ($(this).attr('class') === "simple") {
            $(this).html(GenerateString(1));
        } else if ($(this).attr('class') === "moderate") {
            $(this).html(GenerateString(2));
        }else if ($(this).attr('class') === "difficult") {
            $(this).html(GenerateString(3));
        } else if ($(this).attr('class') === "quad") {
            $(this).html(GenerateString(4));
        }
    });

    function getNumber() {
        //gen value between 0,1 | map to -1,1 | multiply by 25 and round to nearest int
        let n = Math.round(((Math.random() * 2) - 1) * 25);
        while (Math.abs(n) < 1) {
            n = getNumber();
        }
        return Math.round(n);
    }
    /**
     * @return {string}
     */
    function GenerateSymbol(symbolA, symbolB){
        let r = Math.round(Math.random());
        if (r === 1){
            return symbolA;
        }
        return symbolB;
    }
    /**
     * @return {string}
     */
    function GenerateString(number) {
        let equation = "";
        switch (number) {

            case 1:
                equation = getNumber() + "x" + GenerateSymbol(" + ", " - ") + getNumber() + " = " + getNumber() + "x";
                break;
            case 2:
                equation = getNumber() +
                    GenBrackets(
                        getNumber() + "x" +
                        GenerateSymbol(" + ", " - ") +
                        getNumber()) +
                    GenerateSymbol(" + ", " - ") +
                    getNumber() +
                    " = " +
                    getNumber() + "x";
                break;
            case 3:
                equation = getNumber() +
                    GenBrackets(
                        getNumber() + "x" +
                        GenerateSymbol(" + ", " - ") +
                        getNumber()) +
                    GenerateSymbol(" + ", " - ") +
                    getNumber() +
                    " = " +
                    getNumber() +
                    GenBrackets(
                        getNumber() + "x" +
                        GenerateSymbol(" + ", " - ") +
                        getNumber());
                break;
            case 4:
                equation = getNumber() + "x" +
                    GenBrackets(
                        getNumber() + "x" +
                        GenerateSymbol(" + ", " - ") +
                        getNumber()) +
                    GenerateSymbol(" + ", " - ") +
                    getNumber() +
                    " = " +
                    getNumber() +
                    GenBrackets(
                        getNumber() + "x" +
                        GenerateSymbol(" + ", " - ") +
                        getNumber());
                break;
            default:
                break;
        }

        return equation;
    }

    /**
     * @return {string}
     */
    function GenBrackets(input) {
        return "(" + input + ")";
    }
}