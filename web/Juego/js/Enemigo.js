function aleatorio(piso, techo) {
    return Math.floor(Math.random() * (techo - piso + 1)) + piso;
}

function Enemigo() {
    this.img = $("#rayoE")[0];
    this.poder = 100;
    this.x = 940;
    this.y = aleatorio(1, 475);
    this.xt = 60;
    this.yt = 35;
    this.movimiento = 0;
    while (this.movimiento === 0)
        this.movimiento = aleatorio(-8, -5);

    this.dibujar = function (ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }

    this.muerto = function (ctx) {
        
        ctx.drawImage($("#enemMuerto")[0], this.x, this.y);
        
    }

    this.actualizar = function () {
        this.x += this.movimiento;
        this.x = (940 + this.x) % 940;
    }
   
}


