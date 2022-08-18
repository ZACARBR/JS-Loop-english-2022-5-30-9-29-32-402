var max = 9;

for(var x = 1; x <= max; x++){
    var line = '';
    for(var i = 1; i <= x; i++){
        product = x * i;
        line = line + x + "*" + i + "=" + product + " ";
    }
    console.log(line)
}