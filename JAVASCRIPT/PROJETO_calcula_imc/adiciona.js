var botao = document.querySelector("#adicionar-paciente");



botao.addEventListener("click", function(){

	event.preventDefault(); //imperde o comportamento padrao.
	var campoNome = document.querySelector("#campo-nome");
	var campoPeso = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");

	var pacienteNovo = "<tr class='paciente'>"+
						"<td class='info-nome'>"+ campoNome.value +"</td>"+
						"<td class='info-peso' >"+ campoPeso.value +"</td>"+
						"<td class='info-altura' >"+ campoAltura.value +"</td>"+
						"<td class='info-imc' ></td>"+
					"</tr>";

	var tabela = document.querySelector("table"); //outra forma para pegar elemento no html - retorna o primeiro elemento
	tabela.innerHTML = tabela.innerHTML + pacienteNovo;

	campoNome.value = "";
	campoPeso.value = "";
	campoAltura.value = "";

})


//var tabela = document.getElementsByName("table")[0];




