"use strict";
const nacionalP = 5;
const juniorP = 7;
const messiP = 1;
const equipoNacional = "nacional";
const equipoJunior = "junior";
const jugadorEstrella = "Messi";
function jugar(equipo1, equipo2, jugador) {
    let motivo = '';
    if (equipo1 > equipo2) {
        motivo = `porque juega ${jugador}`;
        console.log(`${equipo1} ganó ${motivo}`);
    }
    if (equipo1 == equipo2) {
        console.log(`${equipo1} y ${equipo2} empataron `);
    }
    if (equipo1 < equipo2) {
        console.log(`${equipo2} ganó `);
    }
}
jugar(equipoNacional, equipoJunior, jugadorEstrella);
