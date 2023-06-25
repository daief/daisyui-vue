__c('btn');

['$clsUniquePrefix$btn dv-btn'];
/* - */
__c(a, 'btn');

[a, '$clsUniquePrefix$btn dv-btn'];
/* - */
__c(`btn`);

[`$clsUniquePrefix$btn dv-btn`];
/* - */
__c(`btn-${a}`);

[`$clsUniquePrefix$btn-${a} dv-btn-${a}`];
/* - */
__c('a', `b`);

['$clsUniquePrefix$a dv-a', `$clsUniquePrefix$b dv-b`];
/* - */
__c({
  a1: true,
});

[
  {
    '$clsUniquePrefix$a1 dv-a1': true,
  },
];
/* - */
__c({
  a1: true,
  [a]: false,
});

[
  {
    '$clsUniquePrefix$a1 dv-a1': true,
    [a]: false,
  },
];
/* - */
__c({
  a2: true,
});

[
  {
    '$clsUniquePrefix$a2 dv-a2': true,
  },
];
/* - */
__c({
  [`bb`]: true,
});

[
  {
    [`$clsUniquePrefix$bb dv-bb`]: true,
  },
];
/* - */
__c({
  [`bb-${a}`]: true,
});

[
  {
    [`$clsUniquePrefix$bb-${a} dv-bb-${a}`]: true,
  },
];
/* - */
__c({
  [`bb-${a}-${b}-ss`]: true,
});

[
  {
    [`$clsUniquePrefix$bb-${a}-${b}-ss dv-bb-${a}-${b}-ss`]: true,
  },
];
/* - */
__c`a`;

`$clsUniquePrefix$a dv-a`;
/* - */
__c`a-${1}`;

`$clsUniquePrefix$a-${1} dv-a-${1}`;
