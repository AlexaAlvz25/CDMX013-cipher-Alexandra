
//Declaramos un objeto que va a contener los métodos de "ENCODE" y "DECODE"
const cipher = {
    
    //Función que recibe dos parametros: offset (desplazamientos) y string (texto o palabra)
    encode (offset, texto) {
        
        //Convertimos el valor string a number de el parametro offset
        let numIndex = parseInt(offset);
        
        //Creamos un nuevo TypeError en caso que el usuario ingresé valores nulos
        if(offset == '' && texto == '' || offset == 0 && texto == 0 || offset == null && texto == []) {
            return new Error('Los datos ingresados deben ser validos');
        }

        //Declaramos una variable vacia que contenga los nuevos valores
        let textoFinal = '';

        //Usamos un bucle de flujo de control para iterar sobre cada una de los caracteres ingresados por el usuario y arrojar una nueva
        //Dentro del bucle utilizamos una estructura de control condicional IF-ELSE IF-ELSE para determinar la conversión de cada caracter
        for( let i = 0 ; i < texto.length ; i++ ) {

            //Extraemos el valor ASCII de la letra sobre la que se esta iterando
            let letraCodigoBase = texto.charCodeAt(i);

            //(signos de puntuación, admiración, etc y espacio en blanco)
            //no se convierten, pasan automaticamente al string vacio
            if( letraCodigoBase == 10 || letraCodigoBase >= 32 && letraCodigoBase <= 64 || letraCodigoBase >= 91 && letraCodigoBase <= 96 || letraCodigoBase >= 123 && letraCodigoBase <= 250 ) { 
                let signosPuntuacion = String.fromCharCode(letraCodigoBase);
                textoFinal += signosPuntuacion;

            //Si la letra tiene un valor entre 65 y 90 (mayusculas) tomará el valor offset para convertirla
            //en el nuevo caracter esperado, así mismo se guarda en el caracter vacio
            }else if( letraCodigoBase >= 65 && letraCodigoBase <= 90 ){ 
                //Convertimos el valor anterior al nuevo de acuerdo a los desplazamientos offset señalados
                let letraCodigoNuevo = (letraCodigoBase - 65 + numIndex) % 26 + 65;
                //El codigo arrojado, lo transformamos a un caracter legible para el usuario
                let letraFinal = String.fromCharCode(letraCodigoNuevo);
                textoFinal += letraFinal;

            //Si no cae en ninguna de las dos anteriores, entonces es una minuscula y tomará el valor offset para convertirla
            //en el nuevo caracter esperado, así mismo se guarda en el caracter vacio
            } else {
                let letraCodigoNuevo = (letraCodigoBase - 97 + numIndex) % 26 + 97;
                let letraFinal = String.fromCharCode(letraCodigoNuevo);
                textoFinal += letraFinal;
            }
        }
        
        //Devolvemos el valor final del cifrado para ser llamado en el HTML
        return textoFinal;
    },

    //Función que recibe dos parametros: offset (desplazamientos) y string (texto o palabra)
    decode (offset, texto) {

        //Convertimos el valor string a number de el parametro offset
       let numIndex = parseInt(offset);
        
        //Declaramos una variable vacia que contenga los nuevos valores
        let textoFinal2 = '';

        //Usamos un bucle de flujo de control para iterar sobre cada una de los caracteres ingresados por el usuario y arrojar una nueva
        //Dentro del bucle utilizamos una estructura de control condicional IF-ELSE IF-ELSE para determinar la conversión de cada caracter
        for( let i = 0 ; i < texto.length ; i++ ) {

            //Extraemos el valor ASCII de la letra sobre la que se esta iterando
            let letraCodigoBase = texto.charCodeAt(i);
            
            //(signos de puntuación, admiración, etc y espacio en blanco)
            //no se convierten, pasan automaticamente al string vacio
            if( letraCodigoBase == 10 || letraCodigoBase >= 32 && letraCodigoBase <= 64 || letraCodigoBase >= 91 && letraCodigoBase <= 96 || letraCodigoBase >= 123 && letraCodigoBase <= 250 ) { 
                let signosPuntuacion = String.fromCharCode(letraCodigoBase);
                textoFinal2 += signosPuntuacion;

            //Si la letra tiene un valor entre 65 y 90 (mayusculas) tomará el valor offset para convertirla
            //en el nuevo caracter esperado, así mismo se guarda en el caracter vacio
            }else if( letraCodigoBase >= 65 && letraCodigoBase <= 90 ){ 
                //Convertimos el valor anterior al nuevo de acuerdo a los desplazamientos offset señalados
                let letraCodigoNuevo = letraCodigoBase - (numIndex % 26);
                if(letraCodigoNuevo <= 64) {
                    let letraCodigoNuevo2 = letraCodigoNuevo + 26;
                    let letraFinal = String.fromCharCode(letraCodigoNuevo2);
                    textoFinal2 += letraFinal;
                }else {
                    let letraFinal = String.fromCharCode(letraCodigoNuevo);
                    textoFinal2 += letraFinal;
                }

            //Si no cae en ninguna de las dos anteriores, entonces es una minuscula y tomará el valor offset para convertirla
            //en el nuevo caracter esperado, así mismo se guarda en el caracter vacio
            } else {
                let letraCodigoNuevo = letraCodigoBase - (numIndex % 26);
                if(letraCodigoNuevo <= 96) {
                    let letraCodigoNuevo2 = letraCodigoNuevo + 26;
                    let letraFinal = String.fromCharCode(letraCodigoNuevo2);
                    textoFinal2 += letraFinal;
                }else {
                    let letraFinal = String.fromCharCode(letraCodigoNuevo);
                    textoFinal2 += letraFinal;
                }
            }
        }

        //Devolvemos el valor final del cifrado para ser llamado en el HTML
        return textoFinal2;

    }
}

export default cipher; //valor/función que ejecutará por defecto al importar el script, aún si se le llama con otro nombre. Debido a Default