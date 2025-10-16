import gyumolcsok from './gyumolcsok.json' with { type: 'json' };
console.log(gyumolcsok);
let rendezett_gyumolcsok=[...gyumolcsok];
console.log(rendezett_gyumolcsok);
console.log("Készleten lévő gyümölcsök.");
let keszleten_gyumolcsok = rendezett_gyumolcsok.filter(g => g.keszleten).map(gyumolcsok => gyumolcsok.neve);
console.log(keszleten_gyumolcsok);
