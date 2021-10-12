<%@page import="datos.Sentencias"%>
<%@page import="datos.Conexion"%>
<html>
    <head>
        <%
            String tabla = request.getParameter("tabla");
            String usuario = request.getParameter("usuario");
            String puntaje = request.getParameter("mejorPuntaje");
            Conexion cn = new Conexion();
            Sentencias sn = new Sentencias();
            sn.setCn(cn.getCn());
            sn.cambiarPuntaje(usuario, Integer.parseInt(puntaje), tabla);
            cn.cerrarConexion();
        %>
    </head>
    <body>
        <script type="text/javascript">alert("Puntaje Guardado");
            setTimeout(window.location = '../index.jsp', 100);
        </script>        
    </body>
</html>

