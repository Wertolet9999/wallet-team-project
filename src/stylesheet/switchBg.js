export const switchBg = name => {
  switch (name) {
    case 'Main expenses':
      return '#fed057';
    case 'Products':
      return '#FFD8D0';
    case 'Car':
      return '#fd9498';
    case 'Self care':
      return '#C5BAFF';
    case 'Child care':
      return '#6E78E8';
    case 'Household products':
      return '#4A56E2';
    case 'Education':
      return '#81E1FF';
    case 'Leisure':
      return '#24cca7';
    case 'Entertainment':
      return '#ff6596';
    case 'Other expenses':
      return '#00AD84';
    default:
      return '#4A56E2';
  }
};
