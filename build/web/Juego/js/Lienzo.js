var jugando;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio() {
    jugando = true;
    lienzo = $("#lienzo")[0];
    ctx = lienzo.getContext("2d");
    buffer = document.createElement("canvas");
    heroe = new Heroe();
    enemigo = [new Enemigo(), new Enemigo(), new Enemigo(), new Enemigo()];
    energia = [];
    run();
    $("#iniciar").click(function () {
        if (jugando === false)
            inicio();
    });
}

function capturaTeclado(event) {

    if (event.which === 38 || event.which === 87)
        heroe.actualizar('arriba');
    if (event.which === 40 || event.which === 83)
        heroe.actualizar('abajo');
    if (event.which === 39 || event.which === 68)
        heroe.actualizar('derecha');
    if (event.which === 37 || event.which === 65)
        heroe.actualizar('izquierda');
    if (event.which === 69) { //tecla e

        heroe.actualizar('energia');
        energia.push(new Energia(heroe.x + 160, heroe.y + 10));
        $('#disparar')[0].play();
    }
}
function aleatorio(piso, techo) {
    return Math.floor(Math.random() * (techo - piso + 1)) + piso;
}

function run() {
    
    buffer.width = lienzo.width;
    buffer.height = lienzo.height;
    contextoBuffer = buffer.getContext("2d");

    if (jugando) {
        contextoBuffer.clearRect(0, 0, buffer.width, buffer.height);

        heroe.dibujar(contextoBuffer);

        for (i = 0; i < enemigo.length; i++) {//recorre todos los enemigos
            enemigo[i].dibujar(contextoBuffer);
            enemigo[i].actualizar();

            if (heroe.colision(enemigo[i].x, enemigo[i].y, enemigo[i].xt, enemigo[i].yt)) {//colision de heroe y un enemigo
                heroe.vida -= heroe.danoRecibido;
                enemigo[i].x = 940;
                enemigo.push(new Enemigo());
                heroe.normal(4);
            }

            for (j = 0; j < energia.length; j++) {//recorre todas las energias
                energia[j].dibujar(contextoBuffer);
                energia[j].actualizar();
                if (enemigo.length !== i && energia.length !== j) {
                    if (energia[j].x > 1000 - energia[j].xt)
                        energia.splice(j, 1);
                    else {
                        if (energia[j].colision(enemigo[i].x, enemigo[i].y, enemigo[i].xt, enemigo[i].yt)) {//colision una energia y un enemigo
                            enemigo[i].poder -= energia[j].poder;
                            energia.splice(j, 1);
                            if (enemigo[i].poder < 1) {
                                heroe.puntos += 100;
                                $('#explotar')[0].play();
                                enemigo[i].muerto(contextoBuffer);

                                if (enemigo.length === 4) {
                                    enemigo[i].x = 940;
                                    enemigo[i].y = Math.floor(Math.random() * 475);
                                    enemigo[i].poder = 100;

                                } else
                                    enemigo.splice(i, 1);
                            }
                        }
                    }
                }
            }
            heroe.actualizar('');

        }
        if (heroe.vida <= 0) {//termina el juego
            heroe.vida = 0;
            jugando = false;
        }
        ctx.clearRect(0, 0, lienzo.width, lienzo.height);
        ctx.drawImage(buffer, 0, 0);
        setTimeout("run()", 20);
    } else {//ultimos procesos
        heroe.y += 40;
        contextoBuffer.clearRect(0, 0, buffer.width, buffer.height);
        contextoBuffer.fillStyle = "#000000";
        heroe.dibujar(contextoBuffer);
        contextoBuffer.font = "50px sans-serif";
        contextoBuffer.fillText("GAMEOVER", 300, 440);
        contextoBuffer.fillStyle = "#ff0000";
        contextoBuffer.font = "15px sans-serif";
        ctx.clearRect(0, 0, lienzo.width, lienzo.height);
        ctx.drawImage(buffer, 0, 0);
        setTimeout(window.location = "clasificacion.jsp?puntaje=" + heroe.puntos + "&tabla=1", 1000);

    }
}