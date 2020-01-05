function mostrarFrases(){
	var Frases = new Array()
Frases[0]="Me encantan tus ojos cafes <3";
Frases[1]="¿Te había dicho que tu sonrisa me vuelve loco?";
Frases[2]="Amo tus mil y un expresiones";
Frases[3]="UJUUUUUUM";
Frases[4]="Hueles muy bonito, como a la felicidad";
Frases[5]="Te quiero un chingo Vivian";
Frases[6]="Escucha esta canción y despues hablame... https://spoti.fi/2rVHjFI";
Frases[7]="Me gusta verte bailar en las fiestas";
Frases[8]="Gracias por llegar a mi vida y querer quedarte en ella";
Frases[9]="Amo cuando estas ebria y me insultas jajajaja eres mi mala copa preferida";
Frases[10]="Me siento como un niño estando contigo";
Frases[11]="Amo tus pasos de baile";
Frases[12]="Besas como lo haría el amor de mi vida";
Frases[13]="Me volvió loco tu forma de ser";
Frases[14]="Me gusta que me hagas piojito";
Frases[15]="Son contados los recuerdos donde mis mejillas no me duelen de tanto sonreír";
Frases[16]="Te volviste alguien muy importante para mí, en tan poco tiempo, que por fin entendí que no importa el tiempo si no la calidad del mismo";
Frases[17]="No quiero ser tu otra mitad, quiero ser quien te quiera y te recuerde que ya estas completa";
Frases[18]="Deseo que tengas el mejor año de tu vida";
Frases[19]="Hay personas que brillan solas, y luego estas tú que iluminas a quien tocas";
Frases[20]="Eres inteligente, bonita, amable y muy fuerte";
Frases[21]="Si todo va bien, cuenta conmigo, si todo va mal... ahí estaré";
Frases[22]="Nunca fui capaz de predecir el impacto que tendrías en mi vida";
Frases[23]="Deja de leer mi mente jajaja";
Frases[24]="Te dedico esta canción https://spoti.fi/2FlKklZ";
Frases[25]="Esta canción me recuerda a ti https://spoti.fi/39IQpXy";
Frases[26]="Te amo"
Frases[27]="Aquí te pondre todos mis pensamientos cursis y lindos, revisala costantemente"

var Q = Frases.length
var numAleatorio = Math.round(Math.random()*(Q-1));
	swal('Axel dice:',Frases[numAleatorio]);
}
