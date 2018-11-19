export default class Utils {
  static formatDate(dateIn, dateOut) {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const dIn = new Date(dateIn);
    const yIn = dIn.getFullYear();
    const mIn = monthNames[dIn.getMonth()];

    if (!dateOut || dateOut === '0001-01-01T00:00:00Z') {
      return `${yIn} ${mIn} - present`;
    }

    const dOut = new Date(dateOut);
    return `${yIn} ${mIn} - ${dOut.getFullYear()} ${
      monthNames[dOut.getMonth()]
    }`;
  }
}
