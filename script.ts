 const nacionalP :number =5;
 const juniorP:number = 7;
 const messiP:number=1;
 const equipoNacional :string ="nacional";
 const equipoJunior:string = "junior";
 const jugadorEstrella:string="Messi";

 function jugar (equipo1:string,equipo2:string,jugador:string){
    let motivo:string=''
    if (equipo1>equipo2) {
        motivo= `porque juega ${jugador}`
        console.log(`${equipo1 } ganó ${motivo}`)}
    if (equipo1== equipo2) {console.log(`${equipo1 } y ${equipo2} empataron `)}
    if (equipo1<equipo2) {console.log(`${equipo2 } ganó `)}
 }

 jugar(equipoNacional,equipoJunior,jugadorEstrella)