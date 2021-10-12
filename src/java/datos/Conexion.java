package datos;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public final class Conexion {

    private static Connection cn;

    public static Connection getCn() {
        return cn;
    }

    public Conexion() {
        conectar();
    }

    public void conectar() {
        String url = "jdbc:oracle:thin:@localhost:1521:XE";
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
            cn = DriverManager.getConnection(url, "puntajes", "123");
            if (cn != null) {
                System.out.println("conectado a la base de datos");
            }
        } catch (ClassNotFoundException | SQLException ex) {
            System.out.println("Error en la conexión de la base de datos");
        }
    }

    

    public void cerrarConexion() {
        try {
            cn.close();
            System.out.println("conexion cerrada");
        } catch (Exception e) {
            System.out.println("Error cerrar la base de datos");
        }
    }
}
