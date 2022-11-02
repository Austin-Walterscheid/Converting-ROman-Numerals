function romanNumerals (num) {
    var lookup = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
}

console.log(romanNumerals(99))