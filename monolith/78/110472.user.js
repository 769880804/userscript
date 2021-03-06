// ==UserScript==
// @name          Firefox  discreet transparency edit
// @namespace     http://userstyles.org
// @description	  > Transparent Tabbar
// @author        Satoz/redchampion
// @homepage      http://userstyles.org/styles/45524
// @run-at        document-start
// ==/UserScript==
tabs.tabbrowser-tabs#tabbrowser#tabs{

	 background-color: transparent!important;
	}


.tabbrowser-tab, .tabs-newtab-button {

	 background: transparent!important;
	 color: #ffffff!important;
	 text-shadow: #000000 0px 0px 2px !important;
	 border: none !important;
	}


	
.tabbrowser-tab:not([pinned="true"]){

	 margin-left: 2px !important;
	 margin-right: 2px !important;
         color: #ffffff !important;
	}

.tabbrowser-tab[selected="true"]{
	 background: transparent !important;
	 color: #ffffff !important;
         text-shadow: #ffffff 0px 0px 2px !important;
         font-weight: bolder !important;
	-moz-box-shadow: inset 0px 0px 10px 0px #e3e3e3
	}
	
.tabbrowser-tab:hover{
	background: transparent !important;
	color: #FFFFFF !important;
	text-shadow: #ffffff 0px 0px 2px !important;
	-moz-box-shadow: inset 0px 0px 10px 0px #e3e3e3
	}


#TabsToolbar, #browser-bottombox, #status-bar, #status-bar > *, #nav-bar, #PersonalToolbar, #addon-bar {
 
	 background: transparent !important;
	 color: #ffffff !important;
	-moz-appearance: none !important;
	 border: #000000 !important;
	}
	

searchbar#searchbar textbox{

     background: transparent !important;
     border-style: none!important;
     color: #ffffff!important;
     text-shadow: none 0px 0px 2px !important
    }

textbox#urlbar{
     
     background: transparent !important;
     border-style: none!important;
     color: #ffffff !important;
     text-shadow: none 0px 0px 2px !important
    }

stack#page-proxy-stack{

     background-color: transparent!important;
     border-style: none!important;
    }

image#page-proxy-favicon{

     background-color: transparent!important;
     border-style: none!important;
    }

box.unknownIdentity#identity-box{

     background-color: transparent!important;
     border-style: none!important;
    }

#webdeveloper-toolbar{

     background-color: transparent!important;
     border-style: none!important;
     color:#FFFFFF!important;
    }
	

#PersonalToolbar{

	 background-color: transparent!important;
	 color: #e3e3e3!important;
	}



.chromeclass-directories *, #bookmarksPanel * {
         color: #000000 !important;
         text-shadow: #FFFFFF 0px 0px 2px !important;    
}





#personal-bookmarks{

	 background-color: transparent!important;
	}
	

#TabsToolbar, #browser-bottombox, #status-bar, #status-bar > *, #nav-bar, #PersonalToolbar, #addon-bar {
 
	 background: transparent !important;
	 color: #ffffff !important;
	-moz-appearance: none !important;
	 border: #000000 !important;
	}
	



}




#appmenu-button {
padding: 1px 10px 1px 9px !important;
background: transparent !important;
-moz-border-radius: 0px 0px 4px 4px !important;
border-top: 0px !important;
margin-top: 1px !important;
}



#appmenu-button[open="true"] {
-moz-border-radius: 0px !important;
} 