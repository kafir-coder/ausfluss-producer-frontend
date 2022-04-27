export const chooseColor = (kind: string) => {
  switch (true) {
    case kind === 'entregue':
      return '#A6DA64';
    case kind === 'negociando':
      return '#DAAB64';
    case kind === 'negado':
      return '#DA6464';
    default:
      return '#DAAB64';
  }
};
