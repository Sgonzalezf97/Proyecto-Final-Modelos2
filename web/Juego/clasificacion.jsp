<%@page import="logica.LogicaGuardado"%>
<html>
    <head>
        <title style="color: white">Mejor Puntaje</title>
        <link rel="stylesheet" type="text/css" href="estiloPuntaje.css" media="screen">
    </head>
    <body>
        <%
            String puntaje = request.getParameter("puntaje");
            String tabla = request.getParameter("tabla");
            LogicaGuardado lg = new LogicaGuardado(tabla);
        %>
        <ul>

            <%
                if (lg.analizarPuntaje(Integer.parseInt(puntaje))) {
            %>
            <form action="verificar.jsp" method="post">
                <input type="hidden" name="mejorPuntaje" value=<%=puntaje%> />
                <input type="hidden" name="tabla" value=<%=tabla%> />
                <table class="box" >
                    <tr>
                        <td align="center">
                            <h1>
                                ¡Nuevo Record!                              
                            </h1>
                        </td>  
                    </tr>
                    <tr>
                        <td align="center">
                            <h2>
                                Tu puntaje:  <%=puntaje%> puntos
                            </h2>
                        </td>                   
                    </tr>
                    <tr>
                        <td align="center">
                            <h2>
                                Ingresa tu nombre <input type="text" name="usuario"/>
                            </h2>
                        </td>                   
                    </tr>
                    <tr>
                        <td align="center">
                            <h2>
                                <input type="submit" value="Guardar"/>
                            </h2>
                        </td>                   
                    </tr>
                </table>

            </form>
        </ul>
        <% } else {%>
        <script type="text/javascript">
            setTimeout(window.location = '../index.jsp', 100);
        </script>
        <% }%>
    </body>
</html>
