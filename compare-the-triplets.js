function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var arrA = [a0,a1,a2];
    var arrB = [b0,b1,b2];
    var aS = 0;
    var bS = 0;
    
    for ( var i=0 ; i < 3 ; i++ ) {
        if ( arrA[i] !== arrB[i] ) {
            if ( arrA[i] > arrB[i] ) {
                aS = aS + 1;
            } else {
                bS = bS + 1;
            }  
        }    
    }
    
    process.stdout.write( aS + ' ' + bS );
}
