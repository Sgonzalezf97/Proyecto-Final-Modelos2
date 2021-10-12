<html>
    <title>Avengers</title>
    <header>
        <h1 align="center"><img src="Principal/logo.png"></h1>
        <link rel="stylesheet" type="text/css" href="Principal/generalEstilo.css" media="screen">
    </header>
    <body>
        <audio id="menu" autoplay loop>
            <source src="Juego/sonidos/Menu.ogg" type="audio/ogg">
            <source src="Juego/sonidos/Menu.wav" type="audio/wav">
            Tu navegador no es compatible
        </audio>
        <section align="center" >
            <table align="center">
                <tr>
                    <td align="center">
                        <a href= "Juego/Jugando.jsp" ><input type="button" value="Jugar" ></a>
                    </td>                   
                </tr>
                <tr>
                    <td align="center">
                        <div class="popup" onclick="myFunction()"><input type="button" id="controles" value="Controles" width="100%">
                            <span class="popuptext" id="myPopup">
                                <h2>Moverse</h2>
                                <img src="Juego/fondos/teclado.png"/>
                                <h2>Disparar</h2>
                                <img src="Juego/fondos/tecla e.png"/>
                                
                            </span>
                        </div>
                    </td>                   
                </tr>

            </table>

        </section>


        <script>
            var audio = document.getElementById("menu");
            audio.volume = 0.07;

            function myFunction() {
                var popup = document.getElementById("myPopup");
                popup.classList.toggle("show");
            }
        </script>    
    </body>
</html>