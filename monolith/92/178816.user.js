// ==UserScript==
// @name       Missives IDEO Chrome kimsufi
// @namespace  http://ks3302760.kimsufi.com
// @version    0.1
// @description  Permet l'utilisation de chrome pour l'envoi de missives
// @match      http://ks3302760.kimsufi.com/missives.php5?m=new*
// @copyright  2012+, Ethaniael@gmail.com
// ==/UserScript==

document.body.innerHTML= document.body.innerHTML.replace(/<textarea name=\"texte\" rows=\"4\" cols=\"40\" style=\"width: 100%; height: 550pxpx\">Votre texte<\/textarea>/g,"<div><input type=\"hidden\" id=\"texte\" name=\"texte\" value=\"Votre texte\" style=\"display:none\" \/><input type=\"hidden\" id=\"texte___Config\" value=\"SmileyPath=http:\/\/ks3302760.kimsufi.com\/\/ideov23\/site\/smileys\/elfe\/&amp;SkinPath=http:\/\/ks3302760.kimsufi.com\/\/ideov23\/skins\/aqua\/editeur\/&amp;EditorAreaCSS=http:\/\/ks3302760.kimsufi.com\/various\/textcss.php&amp;Langages=druide#Druidique#10000#elfe_ancien#Elfe antique#10000#elfe#Elfique#10000#humain#Humain#10000#orc#Orc#10000#runes_ancien#Runes anciennes#10000#runes#Runes modernes#10000&amp;Signature=vide&amp;PiomName=L\'Alcamandrelle&amp;PiomImageURL=http:\/\/ks3302760.kimsufi.com\/\/writables\/pioms\/joueurs\/17282.png\" style=\"display:none\" \/><iframe id=\"texte___Frame\" src=\"http:\/\/ks3302760.kimsufi.com\/various\/fckeditor\/editor\/fckeditor.html?InstanceName=texte&amp;Toolbar=Default\" width=\"100%\" height=\"550px\" frameborder=\"0\" scrolling=\"no\"><\/iframe><\/div>");