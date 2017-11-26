export default class Utils {
  static formatDate(dateIn, dateOut) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const yIn = dateIn.getFullYear();
    const mIn = monthNames[dateIn.getMonth()];

    if (dateOut) {
      const yOut = dateOut.getFullYear();
      const mOut = monthNames[dateOut.getMonth()];
      return `${yIn} ${mIn} - ${yOut} ${mOut}`;
    }

    return `${yIn} ${mIn} - present`;
  }
}
