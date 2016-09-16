function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var result = arr.reduce(function(prev, curr){
        return prev + curr;
    });
    
    console.log(result);
}