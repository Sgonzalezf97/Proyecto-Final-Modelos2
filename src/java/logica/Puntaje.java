/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package logica;

import static io.vavr.API.Function;
import static io.vavr.API.None;
import static io.vavr.API.Some;
import io.vavr.Function1;
import io.vavr.Function2;
import static io.vavr.Lazy.val;
import java.util.function.Predicate;

/**
 *
 * @author joush
 */
public class Puntaje {
    Function1<Integer, Integer> plusOne = a -> a + 1;
    Function2<Integer, Integer, Boolean> plus = (a, b) -> a > b;
}
