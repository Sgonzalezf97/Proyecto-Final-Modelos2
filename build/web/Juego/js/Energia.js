function Energia(xe, ye) {
    this.img;
    this.poder;
    this.x = xe;
    this.y = ye;
    this.xt;
    this.yt;
    this.movimiento = 3;

    this.img = $("#rayoDerN")[0];

    this.poder = 25;
    this.xt = 40;
    this.yt = 20;

    this.dibujar = function (ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }
    this.actualizar = function () {
        this.x += this.movimiento;
    }
    this.colision = function (x, y, xt, yt) {
        if (this.x < x + xt && this.x > x - this.xt && this.y < y + yt && this.y > y - this.yt)
            return true;
        else
            return false;
    }
   
}