function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var arrDL = [];
    var arrDR = [];
    a.forEach(function(arr, index){
        arrDL.push(arr[index]);
    });
    a.forEach(function(arr, index){
        arrDR.push(arr.reverse()[index]);
    });
    var dL = arrDL.reduce(function(p,c){
        return p + c;
    });
    var dR = arrDR.reduce(function(p,c){
        return p + c;
    });
    var result = dL - dR;
    console.log(Math.abs(result));
}