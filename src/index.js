module.exports = function toReadable (number) {
   if (number.toString().split('').length === 3) {
   let a = number.toString().split('');
   let word = [
   ['',' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'],
   [' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'],
   ['','',' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'],
   ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'],
   ];
      return word[3][a[0]] + (a[1] == 1 ? word[1][a[2]] : word[2][a[1]] + word[0][a[2]]);
    };
   if (number.toString().split('').length === 2) {
      let a = number.toString().split('');
      let word = [
      ['',' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'],
      ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
      ];
         return (a[0] == 1 ? word[1][a[1]] : word[2][a[0]] + word[0][a[1]]);
       };
   if (number.toString().split('').length === 1) {
      let a = number.toString().split('');
      let word = [
      ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      ];
      return word[0][a[0]];
   };
}
