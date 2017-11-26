export default class Utils {
  static formatDate(dateIn, dateOut) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const dIn = new Date(dateIn);
    const yIn = dIn.getFullYear();
    const mIn = monthNames[dIn.getMonth()];

    if (dateOut) {
      const dOut = new Date(dateOut);
      const yOut = dOut.getFullYear();
      const mOut = monthNames[dOut.getMonth()];
      return `${yIn} ${mIn} - ${yOut} ${mOut}`;
    }

    return `${yIn} ${mIn} - present`;
  }
}
