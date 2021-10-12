package logica;

import datos.Conexion;
import datos.Sentencias;
import java.sql.SQLException;

public class LogicaGuardado {

    private final int puntajeActual;
    private final Conexion cn;
    private Sentencias sn;
    private Puntaje p;

    public LogicaGuardado(String tabla) throws SQLException {
        cn = new Conexion();
        sn= new Sentencias();
        sn.setCn(cn.getCn());
        puntajeActual = Integer.parseInt(sn.puntajesActuales(tabla)[1]);
        p = new Puntaje();
        System.out.println(".................");
    }

    public boolean analizarPuntaje(int puntaje) throws SQLException {
        if (p.plus.apply(puntaje, puntajeActual)) {
            System.out.println("11111111111");
            cn.cerrarConexion();
            return true;
        } else {
            cn.cerrarConexion();
            return false;
        }
    }
}
