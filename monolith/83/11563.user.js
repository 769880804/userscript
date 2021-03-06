﻿// ==UserScript==
// @name           Calculador de Vuelo OGame
// @versions       V3.0 es
// @description    Calcula el tiempo de vuelo de las naves de ogame.
// @include        http://ogame*.de/game/overview.php*
// @include        http://*.gfsrv.net/game/*overview*
// @include        http://*/game/overview.php*
// @include        http://*/game/index.php?page=overview*
// ==/UserScript==
// Traducido y Modificado para Ogame.com.es por Cibort
// Este Script es legal en ogame.com.es: http://board.ogame.com.es/thread.php?threadid=593198

/*
 *     
 *
 * FÓRMULAS USADAS:
 *
 * Tiempo de Vuelo:
 * - A tus propias Coordenadas:
 * (10 + (35.000 / porcentagem) * Raiz((1.000.005) / velocidade))
 *
 * - AL mismo Sistema Solar:
 * (10 + (35.000 / porcentagem) * Raiz((1.000.000 + (Planetas * 5000)) / velocidade))
 * 
 * - A la misma Galaxia:
 * (10 + (35.000 / porcentagem) * Raiz((2.700.000 + (Sistemas * 95000)) / velocidade))
 * 
 * - A otras Galaxias:
 * (10 + (35.000 / porcentagem) * Raiz((Galaxias * 20.000.000) / velocidade))
 *
 *  
 *
 */



/* --------- CONFIGURACOES PESSOAIS --------- */ 

// Texto que aparecera no botao 
var calcTextoBotao  = 'Mostrar Calculador';

// Cor de fundo do calculador
var calcCorFundo = '#081424';

// Cor da borda do calculador;
var calcCorBorda = '#344566';

// Posicao do Calculador (em pixels)
var calcPosTop  = 100;
var calcPosLeft = 0;

// Tamanho do Calculador
var calcTamanho = '260 px';

// Iniciar visivel
var calcVisivel = false;


/* --------- FIM DAS CONFIGURACOES  --------- */




/* ------------- FUNCOES ------------- */

function CriarBotaoCalculador ()
{
	var botao = '';

	botao += '<p><input type="button" value="'+ calcTextoBotao +'" onClick="';
        botao += 'var obj = document.getElementById(\'calculador_transferir\');';
	botao += 'if (obj.style.display == \'none\')';
        botao += '  obj.style.display = \'block\';';
	botao += 'else';
	botao += '  obj.style.display = \'none\';"';
	botao += '></p>';

	return botao;
}

function CriarCalculador ()
{
	
	var dc = '';
	
	// Verifica se inicia visivel ou escondido
	var visivel = 'none';
	if (calcVisivel)
		visivel = 'block';

	// Inicia o DIV 
	dc += '<div id="calculador_transferir" style="background-color: '+ calcCorFundo +'; display: '+ visivel +';';
	dc += 'position: absolute; z-index:2; left:'+ calcPosLeft +'px; top:'+ calcPosTop +'px;">';
	dc += '<table width="'+ calcTamanho +'" style="border: 1px solid '+ calcCorBorda +'" border="1">';

	// Opcao 1
	dc += '<tr><td class="c">Calculador de Vuelo</td></tr>';
	dc += '<tr><th style="text-align: left;"> <a href="#" onClick="var obj = document.getElementById(\'PCD\'); if (obj.style.display == \'none\') obj.style.display = \'block\'; else obj.style.display = \'none\';"> 1. A tus propias Coordenadas </a></th></tr>';

	// CD
	dc += '<tr><th>';
	dc += '<table id="PCD" style="display: none" width="100%" border="0">';
	dc += '<tr><td width="80%">Porcentaje de Velocidad: </td><td><input type="text" id="pcd_porc" size="4"></td></tr>';
	dc += '<tr><td width="80%">Velocidad de la nave mas lenta: </td><td><input type="text" id="pcd_velo" size="4"></td></tr>';
	dc += '<tr><td width="80%">Tiempo de Vuelo<span id="pcd_hor"></span>:<span id="pcd_min"></span>:<span id="pcd_seg"></span></td><td>';
	dc += '<input type="button" value="Calcular" onClick="';
	dc += 'var porcentagem = document.getElementById(\'pcd_porc\').value;';
	dc += 'var velocidade = document.getElementById(\'pcd_velo\').value;';
	
	// Formula
	dc += 'var res = Math.round((10 + ((35000/porcentagem) * Math.sqrt(1000005/velocidade))));';

	// Calculo das horas
	dc += 'var hor = parseInt(res / 3600);';
	dc += 'var min = parseInt((res / 60) - (hor * 60));';
	dc += 'var seg = res - ((hor * 3600) + (min * 60));';

	dc += 'document.getElementById(\'pcd_hor\').innerHTML = hor;';
	dc += 'document.getElementById(\'pcd_min\').innerHTML = min;';
	dc += 'document.getElementById(\'pcd_seg\').innerHTML = seg;';
	dc += '"></td></tr></table>';
	dc += '</th></tr>';


 	// Opcao 2
	dc += '<tr><th style="text-align: left;"><a href="#" onClick="var obj = document.getElementById(\'MSS\'); if (obj.style.display == \'none\') obj.style.display = \'block\'; else obj.style.display = \'none\';"> 2. AL mismo Sistema Solar </a></th></tr>';
	
	// Mesmo Sistema Solar
	dc += '<tr><th>';
	dc += '<table id="MSS" style="display: none" width="100%" border="0">';
	dc += '<tr><td width="80%">Porcentaje de Velocidad:</td><td><input type="text" id="mss_porc" size="4"></td></tr>';
	dc += '<tr><td width="80%">Velocidad de la nave mas lenta:</td><td><input type="text" id="mss_velo" size="4"></td></tr>';
	dc += '<tr><td width="80%">Planetas de Distancias: </td><td><input type="text" id="mss_plan" size="4"></td></tr>';
	dc += '<tr><td width="80%">Tiempo de Vuelo: <span id="mss_hor"></span>:<span id="mss_min"></span>:<span id="mss_seg"></span></td><td>';
	dc += '<input type="button" value="Calcular" onClick="';
	dc += 'var porcentagem = document.getElementById(\'mss_porc\').value;';
	dc += 'var velocidade = document.getElementById(\'mss_velo\').value;';
	dc += 'var planetas = document.getElementById(\'mss_plan\').value;';
	
	// Formula
	dc += 'var res = Math.round((10 + ((35000/porcentagem) * Math.sqrt(((1000000+(planetas*5000))/velocidade)))));';
	

	// Calculo das horas
	dc += 'var hor = parseInt(res / 3600);';
	dc += 'var min = parseInt((res / 60) - (hor * 60));';
	dc += 'var seg = res - ((hor * 3600) + (min * 60));';

	dc += 'document.getElementById(\'mss_hor\').innerHTML = hor;';
	dc += 'document.getElementById(\'mss_min\').innerHTML = min;';
	dc += 'document.getElementById(\'mss_seg\').innerHTML = seg;';
	dc += '"></td></tr></table>';
	dc += '</th></tr>';


	// Opcao 3
	dc += '<tr><th style="text-align: left;"><a href="#" onClick="var obj = document.getElementById(\'MG\'); if (obj.style.display == \'none\') obj.style.display = \'block\'; else obj.style.display = \'none\';"> 3. A la misma Galaxia </a></th></tr>';

	// Mesma Galaxia
	dc += '<tr><th>';
	dc += '<table id="MG" style="display: none" width="100%" border="0">';
	dc += '<tr><td width="80%">Porcentaje de Velocidad: </td><td><input type="text" id="mg_porc" size="4"></td></tr>';
	dc += '<tr><td width="80%">Velocidad de la nave mas lenta: </td><td><input type="text" id="mg_velo" size="4"></td></tr>';
	dc += '<tr><td width="80%">Sistemas de Distancia: </td><td><input type="text" id="mg_sist" size="4"></td></tr>';
	dc += '<tr><td width="80%">Tiempo de Vuelo: <span id="mg_hor"></span>:<span id="mg_min"></span>:<span id="mg_seg"></span></td><td>';
	dc += '<input type="button" value="Calcular" onClick="';
	dc += 'var porcentagem = document.getElementById(\'mg_porc\').value;';
	dc += 'var velocidade = document.getElementById(\'mg_velo\').value;';
	dc += 'var sistemas = document.getElementById(\'mg_sist\').value;';

	// Formula
	dc += 'var res = Math.round((10 + ((35000/porcentagem) * Math.sqrt(((2700000+(sistemas*95000))/velocidade)))));';
	
	// Calculo das horas
	dc += 'var hor = parseInt(res / 3600);';
	dc += 'var min = parseInt((res / 60) - (hor * 60));';
	dc += 'var seg = res - ((hor * 3600) + (min * 60));';

	dc += 'document.getElementById(\'mg_hor\').innerHTML = hor;';
	dc += 'document.getElementById(\'mg_min\').innerHTML = min;';
	dc += 'document.getElementById(\'mg_seg\').innerHTML = seg;';
	dc += '"></td></tr></table>';
	dc += '</th></tr>';


	// Opcao 4
	dc += '<tr><th style="text-align: left;"><a href="#" onClick="var obj = document.getElementById(\'EG\'); if (obj.style.display == \'none\') obj.style.display = \'block\'; else obj.style.display = \'none\';"> 4. A otras Galaxias </a></th></tr>';

	// Entre Galaxias
	dc += '<tr><th>';
	dc += '<table id="EG" style="display: none" width="100%" border="0">';
	dc += '<tr><td width="80%">Porcentaje de Velocidad: </td><td><input type="text" id="eg_porc" size="4"></td></tr>';
	dc += '<tr><td width="80%">Velocidad de la nave mas lenta:  </td><td><input type="text" id="eg_velo" size="4"></td></tr>';
	dc += '<tr><td width="80%">Galaxias de Distancia: </td><td><input type="text" id="eg_gala" size="4"></td></tr>';
	dc += '<tr><td width="80%">Tiempo de Vuelo: <span id="eg_hor"></span>:<span id="eg_min"></span>:<span id="eg_seg"></span></td><td>';
	dc += '<input type="button" value="Calcular" onClick="';
	dc += 'var porcentagem = document.getElementById(\'eg_porc\').value;';
	dc += 'var velocidade = document.getElementById(\'eg_velo\').value;';
	dc += 'var galaxias = document.getElementById(\'eg_gala\').value;';

	// Formula
	dc += 'var res = Math.round((10 + ((35000/porcentagem) * Math.sqrt(((galaxias*20000000))/velocidade))));';

	// Calculo das horas
	dc += 'var hor = parseInt(res / 3600);';
	dc += 'var min = parseInt((res / 60) - (hor * 60));';
	dc += 'var seg = res - ((hor * 3600) + (min * 60));';
	
	dc += 'document.getElementById(\'eg_hor\').innerHTML = hor;';
	dc += 'document.getElementById(\'eg_min\').innerHTML = min;';
	dc += 'document.getElementById(\'eg_seg\').innerHTML = seg;';
	dc += '"></td></tr></table>';
	dc += '</th></tr>';

	// Fecha o DIV 
	dc += '</table></div>';
	
	return dc;
}

function InserirBotaoCalculador ()
{
	// Pega todos os links da pagina
	var a_links = document.getElementsByTagName('a');

	// Para cada link
	for (i in a_links)
	{
		var link = a_links[i];
	
		// Verifica se possui o attributo href	
		if (link.href)
		{
			// Se possuir, verifica se eh o link para renomear o planeta
			// Com isso identificamos um elemento para que posicionemos
			// o botao que ira mostrar o calculador e o proprio calculador
			if (link.href.indexOf('renameplanet') != -1)
			{
				// Pega o conteudo HTML do noh mais acima do link (no caso eh um table cell)
				var html = link.parentNode.innerHTML;
	
				// Adiciona o Botao que mostrarah o Calculador
				html += CriarBotaoCalculador();
				// Adiciona o Calculador
				html += CriarCalculador();
				
				// Insere no HTML
				link.parentNode.innerHTML = html;
			}
		}
	}		
}

// Executa o script 
InserirBotaoCalculador();
