function processData(input) {
    //Enter your code here
    const computeTotalCost = function(inputData){
        var totalCost = 0;
        const inputArray      = inputData.split('\n');
        const cost            = parseFloat(inputArray[0]);
        const tipPercentage   = parseInt(inputArray[1]);
        const taxPercentage   = parseInt(inputArray[2]);
        
        const computeTip = function (inputTipPercentage) {
            var totalTip = 0;
            totalTip = ((cost * inputTipPercentage) / 100);
            return totalTip;
        }
        
        const computeTax = function (inputTaxPercentage) {
            var totalTax = 0;
            totalTax = ((cost * inputTaxPercentage) / 100);
            return totalTax;
        }
        
        totalCost = cost + computeTip(tipPercentage) + computeTax(taxPercentage);
        return `The total meal cost is ${totalCost} dollars.`;
    };    

    console.log(computeTotalCost(input));  
} 
// test case 0 
processData(`12.00
             20
             8`
            );
/* test case 1
15.50
15
10
*/