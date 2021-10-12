<%@page import="datos.Sentencias"%>
<%@page import="datos.Conexion"%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Avengers</title>
        <link rel="stylesheet" type="text/css" href="estilo.css" media="screen">
        <script language="JavaScript1.2" src="js/jquery-1.11.0.min.js"></script>
        <script language="JavaScript1.2" src="js/Lienzo.js"></script>
        <script language="JavaScript1.2" src="js/Heroe.js"></script>
        <script language="JavaScript1.2" src="js/Energia.js"></script>      
        <script language="JavaScript1.2" src="js/Enemigo.js"></script>
        <%
            Conexion cn = new Conexion();
            Sentencias sn = new Sentencias();
            sn.setCn(cn.getCn());
            String user = sn.puntajesActuales("1")[0];
            String puntaje = sn.puntajesActuales("1")[1];
            cn.cerrarConexion();
        %>
    </head>
    <body>
        <audio id="audJugando" autoplay loop >
            <source src="sonidos/Jugando.ogg" type="audio/ogg">
            <source src="sonidos/Jugando.wav" type="audio/wav">
            Tu navegador no es compatible
        </audio>
        <audio id="disparar" accesskey>
            <source src="sonidos/Disparo.ogg" type="audio/ogg">
            <source src="sonidos/Disparo.wav" type="audio/wav">
            Tu navegador no es compatible
        </audio>
        <audio id="explotar" accesskey>
            <source src="sonidos/Explosion.ogg" type="audio/ogg">
            <source src="sonidos/Explosion.wav" type="audio/wav">
            Tu navegador no es compatible
        </audio>

        <table align="center">
            <tr>
                <td align="center">
                    <h1>Mejor Puntaje: <%=user%> <%=puntaje%> puntos</h1>
                </td>
            </tr>
            <tr>
                <td align="center">
                    <canvas id="lienzo"  width="1000" height="590" style="background-image: url(fondos/FondoJuego.jpg)">
                        Tu navegador no es compatible
                    </canvas>     
                </td>                   
            </tr>
            <tr>
                <td align="center">
                    <a href="../index.jsp"><input type = "button" value = "Regresar"/></a> 
                </td>
            </tr>
        </table>
        <img id="arrDerN" src="imagenes/arrDerN.png"/><img id="abDerN" src="imagenes/abDerN.png"/>
        <img id="derN" src="imagenes/derN.png"/><img id="izqN" src="imagenes/izqN.png"/>
        <img id="golpeN" src="imagenes/golpeN.png"/><img id="ataqueDerN" src="imagenes/ataqueDerN.png"/>
        <img id="muertoN" src="imagenes/muertoN.png"/><img id="rayoDerN" src="imagenes/rayoDerN.png"/>
        <img id="rayoE" src="imagenes/rayoE.png"/><img id="enemMuerto" src="imagenes/enemMuerto.png"/>


    </body>
    <script>
        var jugando = document.getElementById("audJugando");
        jugando.volume = 0.07;
        var disparo = document.getElementById("disparar");
        disparo.volume = 0.07;
        var explota = document.getElementById("explotar");
        explota.volume = 0.07;
    </script>  
</html>
