$(document).ready(function() {

	$('#btnSubmit').click(function(){
		//$('#msg').addClass('hidden');

	});
	// function ligaBTN(){ // abilita botões
	// 	$('#btnadd').prop('disabled',false);
	// 	$('#btnrmv').prop('disabled',false);
	// 	$('#btnval').prop('disabled', false);
 //        $('#btnpos').prop('disabled', false);	
	// }

	// function desligaBTN(){ // desabilita botões
	// 	$('#btnadd').prop('disabled',true);
	// 	$('#btnrmv').prop('disabled',true);
	// 	$('#btnval').prop('disabled', true);
 //        $('#btnpos').prop('disabled', true);
	// }

	// //funçoes que atualizam mo campo de Detalhes
	// function atualizaTamanho(tamanho){ 
	// 	$('#tamanho').html(" "+tamanho+" "); 

	// }
	// function atualizaElementos(nElementos){ 
	// 	$('#nelementos').html(" "+nElementos+" ");

	// }

	// ligaBTN();
	// var divID = 0; //para  a posição do elementos (não foi utilizado)
	// var elementos = 0;

	// // função do botão tamanho
	// $('#btntam').click(function(){
		
	// 	var tamanho = $('#funfa').val();
	// 	if((/^\d+$/.test(tamanho))){ // verifica se tamanho é nº inteiros
	// 		if(tamanho<101 && tamanho!=0){ //restrição de valores para o tamanho da lista (não deixar o usuário criar lista pequenas ou enormes) (*)
	// 			lista = new ListaSeq(tamanho); //cria uma lista
	// 			atualizaTamanho(tamanho);
	// 			for (var i = 0; i < tamanho; i++) {
	// 				$('#apresentacao').append('<div id="caixa'+divID+'" class="caixautil animate float-left" style="position: static;"><div class="caixa float-left"><input type="text" value="0" disabled></div></div>'); //cria uma nova caixa para a simulação
	// 			}
	// 			ligaBTN();
	// 			$('#btntam').prop('disabled', true); // desliga o botão para que o usuário não tente colocar mais valores no tamanho
	// 		}
	// 		else{
	// 			alert("Lista muito grande ou muito pequena.\n"); //(*)
	// 		}
	// 	}
	// 	else{
	// 		alert("Digite um número inteiro.\n");
	// 	}
	// }); // acaba aqui a do botão tamanho


	// //função do botão adicionar 
	// $('#btnadd').click(function(){
	// 	// verifica se valor e posição são nº inteiros
	// 	if(/^\d+$/.test($('#valor').val())){  
	// 		if(/^\d+$/.test($('#posicao').val())){ 
	// 			var  pos = $('#posicao').val();
	// 			// condições para NÃO inserção na caixinha
	// 			if( parseInt(tamanho.innerText) == elementos || pos >parseInt(tamanho.innerText)+1 || pos<=0 || (pos - 1) > elementos ){ 
	// 				alert("Número não pode ser adicionado!");
	// 			}

	// 			//adiciona o valor na caixinha na posição indicada(insere uma nova caixinha) e remove a última caixinha; 
	// 			else{
	// 				$(".caixautil").eq(pos - 1).before('<div id="caixa" class="caixautil animate float-left" style="position: static;"><div class="caixa float-left"><input type="text" value="'+$('#valor').val()+'" disabled></div></div>');
	// 				$(".caixautil").last().remove(); 
	// 				elementos++;
	// 				atualizaElementos(elementos);
	// 			}
	// 		}
	// 		else{
	// 			alert("Digite uma posição válida!");	
	// 		}
	// 	}
	// 	else{
	// 			alert("Digite um número inteiro!");
	// 		}
	// 	$('#btnadd').prop('disabled',false);  // liga botão
	// 	$('#btnrmv').prop('disabled',false);

	// }); 

	
	// //função da remover
	// $('#btnrmv').click(function(){

	// 	if(/^\d+$/.test($('#posicao').val())){ 
	// 		var  pos = $('#posicao').val();
	// 		if((pos-1) < 0 ||  (pos-1) >= elementos){ 
	// 			alert("Posição inválida. Escolha outra!");
	// 		}
	// 		else{
	// 		//console.log("posição: "+(pos-1)+ "  "+ $(".caixautil").length);
	// 		// remove uma caixinha a partir da posição ; adiciona no fim uma nova caixinha
	// 		$(".caixautil").eq(pos - 1).remove();
	// 		$('#apresentacao').append('<div id="caixa'+divID+'" class="caixautil animate float-left" style="position: static;"><div class="caixa float-left"><input type="text" value="0" disabled></div></div>');
	// 		elementos--;
	// 		atualizaElementos(elementos);
	// 	}

	// 	}
	// 	else{
	// 		alert("Digite um número inteiro!");
	// 	}
	// }); 


	// //busca por posição
	// $('#btnpos').click(function(){
	// 	desligaBTN(); // desabilita botões(usuário)

	// 	if(/^\d+$/.test($('#posicao').val())){ 
	// 		var  pos = $('#posicao').val();
	// 		if((pos-1) < 0 ||  (pos-1) >= elementos){
	// 			alert("Posição inválida!");
	// 		}
	// 		else{
	// 				//animação - destaque na caixinha
	// 			$('.animate').css({"opacity": 0.3});
 //          		$(".caixautil").eq(pos - 1).addClass("shadow border-2 rounded");
 //           		$(".caixautil").eq(pos - 1).animate({opacity: 1}, 1500);
	// 		}

	// 	}
	// 	else{
	// 		alert("Digite um número inteiro");
	// 	}
	// });


	
	// //busca por valor
	// $('#btnval').click(function(){
	// 	desligaBTN();

	// 	var achou = false; //registra se número foi encontrado ou não
	// 	if(/^\d+$/.test($('#valor').val())){ 
	// 		var  valor = $('#valor').val();
	// 		var qtde  = $(".caixautil").length;

	// 		for(var i = 0; i<elementos; i++){
			
	// 				if(valor == ($('.caixautil > div > input').eq(i).val() ) ){ // verifica se o valor é igual ao valor da caixinha
	// 					$('.animate').css({"opacity": 0.3});
 //              			$(".caixautil").eq(i).addClass("shadow border-2 rounded");
 //               			$(".caixautil").eq(i).animate({opacity: 1}, 1500);
 //               			achou = true; //registrado
	// 					break;
	// 				}
	// 		} 
	// 		if(achou == false){
	// 			alert("Número não encontrado na lista.");
	// 		}
	// 	} 
	// 	else{
	// 		alert("Digite um número inteiro.");
	// 	}
	// }); 

	// // encerra a animação de busca por posição e por valor	
	// $('#posicao').focus(function(){
 //        $('.caixautil').removeClass("shadow border-2 rounded");
 //        $('.animate').css({"opacity": 1});
 //        ligaBTN();
 //    });

 //    $('#valor').focus(function(){
 //        $('.caixautil').removeClass("shadow border-2 rounded");
 //        $('.animate').css({"opacity": 1});
 //        ligaBTN();
 //    });

}); // acaba aqui a do documento