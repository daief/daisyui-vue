export function cssUnit(unit: string | number) {
  if (typeof unit === 'number' && Number.isFinite(unit)) {
    return unit + 'px';
  }
  return unit || '';
}

export function isBool(v: any): boolean {
  return typeof v === 'boolean';
}

export function isUndefined(v: any): boolean {
  return typeof v === 'undefined';
}
