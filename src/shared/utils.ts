export function cssUnit(unit: string | number) {
  if (typeof unit === 'number' && Number.isFinite(unit)) {
    return unit + 'px';
  }
  return unit || '';
}
