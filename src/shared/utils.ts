import { VNode } from 'vue';

export function cssUnit(unit: string | number) {
  if (typeof unit === 'number') {
    return (unit || 0) + 'px';
  }
  return unit || '';
}

export function isBool(v: any): v is boolean {
  return typeof v === 'boolean';
}

export function isUndefined(v: any): v is undefined {
  return typeof v === 'undefined';
}

export function isString(v: any): v is string {
  return typeof v === 'string';
}

export function addClass(str: string, newClass: string | string[]) {
  const arr = Array.isArray(newClass) ? newClass : [newClass];
  const classes = new Set(str.split(' '));
  arr.forEach((c) => {
    !classes.has(c) && classes.add(c);
  });

  return Array.from(classes).join(' ');
}

export function removeClass(str: string, removeClass: string) {
  const classes = str.split(' ');
  return classes.filter((c) => c !== removeClass).join(' ');
}
