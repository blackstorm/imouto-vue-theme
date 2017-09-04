export const sniff = {
  strLength(str, min, max) {
    if (typeof str === 'string') {
      var l = str.length;
      if (l >= min && l <= max) {
        return true;
      }
      return false;
    }
    return false;
  },
  isURL(str) {
    if (!str) {
      return false;
    }
    return !!str.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g);
  },
  isMail(str) {
    if (!str) {
      return false;
    }
    var re = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/;
    return re.test(str);
  }
};
