//El usuario ingresa las filas y columnas
var fil = prompt("Ingrese la cantidad de filas");

var col = prompt("Ingrese la cantidad de columnas");


//Verifica que las filas y columnas no sean mayor a 5
if(fil > 5 || col > 5){
	alert("Las filas y columnas deben ser menor 6");
	document.location("../html/index2.html");
}

//Genera las dimensiones de la matriz con filas y columnas ingresadas por el usuario
var matriz = new Array(fil);
for (i = 0; i < fil;i++){
matriz[i]=new Array(col);
}

var matriz1 = new Array(col);
for (i = 0; i < col;i++){
matriz1[i]=new Array(fil);
}


//Muestra en una tabla la matriz normal
document.write("<article>");


document.write("<h2>Matriz</h2>");

document.write("<table id='mat'>");


//Genera los valores para las filas y columnas de la matriz normal
for (i = 0; i<fil; i++){

	document.write("<tr>");

	for (j = 0; j<col; j++){

	document.write("<td>");

	matriz[i][j] = Math.floor(Math.random() * 100); //Genera numeros al azar

	document.write("<br>" + matriz[i][j] );

	matriz1[j][i] = matriz[i][j];

	document.write("</td>");

	}

	document.write("</tr>");
}

document.write("</table>");

document.write("</article>");




//Muestra en una tabla la matriz transpuesta

document.write("<article>");

document.write("<h2>Matriz transpuesta</h2>");

document.write("<table id='trans'>");

//Genera los valores para las filas y columnas de la matriz transpuesta

    for (i = 0; i<col; i++){

	document.write("<tr>");

	for (j = 0; j<fil; j++){

	document.write("<td>");

	document.write("<br>" + matriz1[i][j]);

	document.write("</td>");

	}

	document.write("</tr>");
}

document.write("</table>");

document.write("</article>");
