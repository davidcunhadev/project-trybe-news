import { differenceInDays, parse } from 'date-fns';

export const publicationDate = (date: string) => {
  const publiDate = parse(
    date,
    'dd/MM/yyyy HH:mm:ss',
    new Date(),
  );
  const currentDate = new Date();
  const day = differenceInDays(currentDate, publiDate);

  if (day === 0) {
    return `${day + 1} dia atrás`;
  }
  if (day > 0) {
    return `${day} ${day === 1 ? 'dia' : 'dias'} atrás`;
  }
};
