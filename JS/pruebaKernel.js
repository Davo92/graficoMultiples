var artistas = data.generos;
var rock = '<tr>'+
    '<th>Nombre Artista</th>'+
    '<th>Grupo</th>'+
    '<th>Género</th>'+
    '<th>Nombre de la Canción</th>'+
    '<th>Duración</th>'+
    '</tr>';

var jazz = '<tr>'+
    '<th>Nombre Artista</th>'+
    '<th>Grupo</th>'+
    '<th>Género</th>'+
    '<th>Nombre de la Canción</th>'+
    '<th>Duración</th>'+
    '</tr>';

var classical = '<tr>'+
    '<th>Nombre Artista</th>'+
    '<th>Grupo</th>'+
    '<th>Género</th>'+
    '<th>Nombre de la Canción</th>'+
    '<th>Duración</th>'+
    '</tr>';

var soul = '<tr>'+
    '<th>Nombre Artista</th>'+
    '<th>Grupo</th>'+
    '<th>Género</th>'+
    '<th>Nombre de la Canción</th>'+
    '<th>Duración</th>'+
    '</tr>';

var pop = '<tr>'+
    '<th>Nombre Artista</th>'+
    '<th>Grupo</th>'+
    '<th>Género</th>'+
    '<th>Nombre de la Canción</th>'+
    '<th>Duración</th>'+
    '</tr>';

var i = 0;
var tiempo = 0;
var tiempoTotal = 0;
var minuto = [0, 0, 0, 0, 0];
var segundo = [0, 0, 0, 0, 0];
var contador = [0, 0, 0, 0, 0];

while(i < artistas.length){
    tiempo = artistas[i].duracion;
    switch (artistas[i].genero) { //se usa para realizar diferentes acciones basadas en diferentes condiciones
        case "Rock" : 
            stadistics.Rock.durSong++; //hace referencia al incremento en el numero de nuestras estadisticas

            var splitTime = tiempo.split('.');
            minuto[0] += parseInt(splitTime[0]);
            segundo[0] += parseInt(splitTime[1]);				
            contador[0] += 1;
            
            if(contador[0] == 3) {
                calcularDuracion(0);
                console.log(minuto[0] + "rock");
                console.info("typeof(minuto[0])", typeof(minuto[0]));
            }
            tiempo += parseFloat( minuto[0] ); // convertir en string en numero, y poder operar con ellos
            $("#tablaRock").html(function () {
                {
                    rock+= '<tr>'+
                        '<td>'+artistas[i].nombre +'</td>'+
                        '<td>'+artistas[i].grupo +'</td>'+
                        '<td>'+artistas[i].genero +'</td>'+
                        '<td>'+artistas[i].cancion +'</td>'+
                        '<td>'+artistas[i].duracion + "min" + 
                        '</td>'+
                        '</tr>';
                }
                $("#tablaRock").html(rock);
                $("#totalRock").html("<strong>" + minuto[0] + "</strong>" + " minutos, és la media de tiempo del género Rock ");
                
            });
            break;
        case "Jazz" :
            tiempoTotal = 0;
            stadistics.Jazz.durSong++;

            var splitTime = tiempo.split('.');
            minuto[1] += parseInt(splitTime[0]);
            segundo[1] += parseInt(splitTime[1]);				
            contador[1] += 1;
            if(contador[1] == artistas[i].genero.length - 1) {
                calcularDuracion(1);
                console.log(minuto[1]);
            }

            tiempo += parseFloat( minuto[1] );
            $("#tablaJazz").html(function () {
                {
                    jazz+= '<tr>'+
                        '<td>'+artistas[i].nombre +'</td>'+
                        '<td>'+artistas[i].grupo +'</td>'+
                        '<td>'+artistas[i].genero +'</td>'+
                        '<td>'+artistas[i].cancion +'</td>'+
                        '<td>'+artistas[i].duracion + "min" + '</td>'+
                        '</tr>';
                }
                $("#tablaJazz").html(jazz);
                $("#totalJazz").html("<strong>" + minuto[1] + "</strong>" + " minutos, és la media de tiempo del género Jazz ")
            });
            break;
        case "Classical": 
            stadistics.Classical.durSong++;

            var splitTime = tiempo.split('.');
            minuto[2] += parseInt(splitTime[0]);
            segundo[2] += parseInt(splitTime[1]);				
            contador[2] += 1;
            if(contador[2] == 3) {
                calcularDuracion(2);

                console.log(minuto[2]);
            }

            tiempo += parseFloat( minuto[2] );
            $("#tablaClassical").html(function () {
                {
                    classical+= '<tr>'+
                        '<td>'+artistas[i].nombre +'</td>'+
                        '<td>'+artistas[i].grupo +'</td>'+
                        '<td>'+artistas[i].genero +'</td>'+
                        '<td>'+artistas[i].cancion +'</td>'+
                        '<td>'+artistas[i].duracion + "min" + '</td>'+
                        '</tr>';
                }
                $("#tablaClassical").html(classical);
                $("#totalClassical").html("<strong>" + minuto[2] + "</strong>" + "  minutos, és la media de tiempo del género Clássico ");
            });
            break;
        case "Soul": 
            stadistics.Soul.durSong++;

            var splitTime = tiempo.split('.');
            minuto[3] += parseInt(splitTime[0]);
            segundo[3] += parseInt(splitTime[1]);				
            contador[3] += 1;
            if(contador[3] == 3) {
                calcularDuracion(3);

                console.log(minuto[3]);
            }
            tiempo += parseFloat( minuto[3] );
            $("#tablaSoul").html(function () {
                {
                    soul+= '<tr>'+
                        '<td>'+artistas[i].nombre +'</td>'+
                        '<td>'+artistas[i].grupo +'</td>'+
                        '<td>'+artistas[i].genero +'</td>'+
                        '<td>'+artistas[i].cancion +'</td>'+
                        '<td>'+artistas[i].duracion + "min" + '</td>'+
                        '</tr>';
                }
                $("#tablaSoul").html(soul);
                $("#totalSoul").html("<strong>" + minuto[3] + "</strong>" + "  minutos, és la media de tiempo del género Soul ");
            });
            break;
        case "Pop": 
            stadistics.Pop.durSong++;

            var splitTime = tiempo.split('.');
            minuto[4] += parseInt(splitTime[0]);
            segundo[4] += parseInt(splitTime[1]);				
            contador[4] += 1;
            if(contador[4] == 3) {
                calcularDuracion(4);
            }
            tiempo += parseFloat( minuto[4] );
            $("#tablaPop").html(function () {
                {
                    pop+= '<tr>'+
                        '<td>'+artistas[i].nombre +'</td>'+
                        '<td>'+artistas[i].grupo +'</td>'+
                        '<td>'+artistas[i].genero +'</td>'+
                        '<td>'+artistas[i].cancion +'</td>'+
                        '<td>'+artistas[i].duracion + "min" + '</td>'+
                        '</tr>';
                }
                $("#tablaPop").html(pop);
                $("#totalPop").html("<strong>" + minuto[4] + "</strong>" + "  minutos, és la media de tiempo del género Pop ");
            });
    }
    i++;
}

// funcion para calcular la duración total
function calcularDuracion(i) {
    minuto[i] = minuto[i] + (Math.floor(segundo[i] / 60));
    segundo[i] = segundo[i]%60;
    minuto[i] += segundo[i] / 100;
    minuto[i] /= artistas[i].genero.length -1;
    minuto[i] = minuto[i].toFixed(2);
    minuto[i] = parseFloat(minuto[i]);
    console.log(minuto[i] + "numminutos" + artistas[i].genero.length + "artistas generos");
    
}

//Referéncia al código de la libreria Chart.js
var pieData = [
    {
        value: (minuto[0]),
        color:"#0b82e7",
        highlight: "#0c62ab",
        label: "Rock"},
    {
        value: (minuto[1]),
        color: "#e3e860",
        highlight: "#a9ad47",
        label: "Jazz"
    },
    {
        value: (minuto[2]),
        color: "#eb5d82",
        highlight: "#b74865",
        label: "Classical"
    },
    {
        value: (minuto[3]),
        color: "#5ae85a",
        highlight: "#42a642",
        label: "Soul"
    },
    {
        value: (minuto[4]),
        color: "#e965db",
        highlight: "#a6429b",
        label: "Pop"
    }
];

var ctx2 = document.getElementById("chart-area2").getContext("2d");
var ctx = document.getElementById("chart-area").getContext("2d");

window.myPie = new Chart(ctx2).Doughnut(pieData);
window.myPie = new Chart(ctx).Pie(pieData);