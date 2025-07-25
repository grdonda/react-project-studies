export function commonUtilsTime(tempo: string): number {
  const [horas='0', minutos='0', segundos='0'] = tempo.split(':');

  const horasNum = Number(horas);
  const minutosNum = Number(minutos);
  const segundosNum = Number(segundos);

  const horasEmSegundos = horasNum * 3600;
  const minutosEmSegundos = minutosNum * 60;
  return horasEmSegundos + minutosEmSegundos + segundosNum;
}