
for (var x=1; x <= 100; x++){
    if( x % 3 && x % 5 ) {
        document.write(x);
    } else {
        if( x % 3 == 0 &&  x % 5 == 0 ) {
            document.write("Múltiple de ambos");
        }
        else if( x % 5 == 0 ) {
            document.write("Múltiple de 5");
        }
        else if( x % 3 == 0 ) {
            document.write("Múltiple de 3")
        }
    }
    document.write('<br>');
}