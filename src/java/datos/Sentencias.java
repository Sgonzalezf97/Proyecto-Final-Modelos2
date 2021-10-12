package datos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Sentencias {
    
    private Connection cn;

    public void setCn(Connection cn) {
        this.cn = cn;
    }
    
    public String[] puntajesActuales(String tabla) throws SQLException {
        String[] puntaje = new String[2];
        try {
            PreparedStatement st = cn.prepareStatement("select usuario, puntaje from juego" + tabla + " where puesto = ?");
            st.setLong(1, 1);
            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                puntaje[0] = rs.getString(1);
                puntaje[1] = rs.getString(2);
            }
            if (st != null) {
                System.out.println("consulta completa");
                st.close();
                rs.close();
            }
        } catch (Exception e) {
            System.out.println("Error al consultar la base de datos");
        } finally {
            return puntaje;
        }
    }

    public void cambiarPuntaje(String usuario, int puntaje, String tabla) throws SQLException {

        try {
            PreparedStatement st = cn.prepareStatement("update juego" + tabla + " set usuario = ?, puntaje = ? where puesto = 1");
            st.setString(1, usuario);
            st.setInt(2, puntaje);
            st.executeUpdate();
            if (st != null) {
                System.out.println("cambio exitoso");
                st.close();
            }
        } catch (Exception e) {
            System.out.println("Error al actualizar la base de datos");
        }
    }
}
