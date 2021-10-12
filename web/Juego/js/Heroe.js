function Heroe() {
    this.x = 55;
    this.y = 397;
    this.img = $("#abDerN")[0];
    this.sprite = 0;
    this.vida = 100;
    this.puntos = 0;
    this.proceso = 0;
    this.danoRecibido = 4;
    this.poderAtaque = 10;

    this.dibujar = function (ctx) {
        ctx.drawImage(this.img, this.x, this.y);
        ctx.save();
        ctx.fillStyle = "White";
        ctx.font = "20px sans-serif";
        ctx.font = "25px sans-serif";
        ctx.fillText("Puntos: " + this.puntos, 10, 570);
        ctx.fillText("Vida: " + this.vida, 10, 590);
        ctx.restore();
    }

    this.actualizar = function (accion) {

        if (accion == "arriba" && this.y > 5) {
            this.normal(0);
            this.sprite = 0;

            this.y -= 10;
        }

        if (accion == "abajo" && this.y < 450) {
            this.y += 10;
            this.sprite = 2;
            this.normal(1);
            this.sprite = 1;
        }

        if (accion == "izquierda" && this.x > 10) {
            this.sprite = 3;
            this.x -= 10;
            this.normal(3);
        }

        if (accion == "derecha" && this.x < 910) {
            this.sprite = 2;
            this.x += 10;
            this.normal(2);
        }

        if (accion == "energia") {
            this.normal(5);
        }
    }

    this.colision = function (x, y, xt, yt) {
        if (this.x < x + xt && this.x > x - 60 && this.y < y + yt && this.y > y - 80)
            return true;
        else
            return false;
    }

    this.normal = function (sprite) {//imagenes 
        imgN = [$("#arrDerN")[0], $("#abDerN")[0], $("#derN")[0]
                    , $("#izqN")[0], $("#golpeN")[0], $("#ataqueDerN")[0], $("#muertoN")[0]]
        this.img = imgN[sprite];
    }

}

