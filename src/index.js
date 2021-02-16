module.exports = function reverse(n) {

    var splitedArray = String(n).split("");
            
            if (splitedArray.length == 3) {
                if (splitedArray[2] == 0)
                    return splitedArray.splice(0, 2).reverse().join("");
            }


            if (splitedArray.length == 4) {
                if (splitedArray[0] != 0)
                    return splitedArray.splice(1, 3).reverse().join("");
            }

            if (splitedArray[0] > 0) {
                return splitedArray.reverse().join("");
            }

}
