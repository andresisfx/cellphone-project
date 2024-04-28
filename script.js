"use strict";
const nacional = 5;
const junior = 7;
function jugar(equipo1, equipo2) {
    if (equipo1 > equipo2) {
        console.log(`${equipo1} ganó `);
    }
    if (equipo1 == equipo2) {
        console.log(`${equipo1} y ${equipo2} empataron `);
    }
    if (equipo1 < equipo2) {
        console.log(`${equipo2} ganó `);
    }
}
jugar(nacional, junior);
