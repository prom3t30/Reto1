function aleatorio() {
    let x = 5;
    let y = 4;
    //var aleatorio = 0;

    const MAX = 10;
    const MIN = 0;
    /*la funcion floor  realiza un redindeamiento  al número convirtiendo un valor decimal a entero */
    let aleatorio = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN);
    console.log(aleatorio);

    if (aleatorio < 5) {
        let rest = x - y;
        console.log(rest);
    } else {
        let mult = x * y;
        console.log(mult);
    }

}

function validarMes() {
    const MAX = 12;
    const MIN = 1;
    /*la funcion floor  realiza un redindeamiento  al número convirtiendo un valor decimal a entero */
    let alt = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN);
    console.log("Mes aleatorio " + alt);

    if (alt == 1 || alt == 3 || alt == 5 || alt == 7 || alt == 8 || alt == 10 || alt == 12) {
        console.log("El mes aleatorio tiene 31 días");
    } else if (alt == 2) {
        console.log("El mes aleatorio tiene 29 días");
    } else {
        console.log("El mes aleatorio tiene 30 días");
    }

}