// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/BoxTheme/_build-generate_module":function(){define(["dojo/text!./common.css","dojo/text!./styles/default/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/BoxTheme/common.css":'@font-face {font-family: "HelveticaNeue"; src: url("fonts/helvetica_neue/helveticaneue.eot?#iefix"); src: url("fonts/helvetica_neue/helveticaneue.eot?#iefix") format("eot"), url("fonts/helvetica_neue/helveticaneue.woff2") format("woff2"), url("fonts/helvetica_neue/helveticaneue.woff") format("woff"), url("fonts/helvetica_neue/helveticaneue.ttf") format("truetype"), url("fonts/helvetica_neue/helveticaneue.svg#bHelveticaNeue") format("svg"); font-weight: normal; font-style: normal;}@font-face {font-family: \'HelveticaNeueUltraLight\'; src: url("fonts/helvetica_neue/helveticaneueultralight.eot?#iefix"); src: url("fonts/helvetica_neue/helveticaneueultralight.eot?#iefix") format(\'eot\'), url("fonts/helvetica_neue/helveticaneueultralight.woff2") format(\'woff2\'), url("fonts/helvetica_neue/helveticaneueultralight.woff") format(\'woff\'), url("fonts/helvetica_neue/helveticaneueultralight.ttf") format(\'truetype\'), url("fonts/helvetica_neue/helveticaneueultralight.svg#HelveticaNeueUltraLight") format(\'svg\'); font-weight: normal; font-style: normal;}@font-face {font-family: \'liberation_sansbold\'; src: url("fonts/liberation_sans/liberationsans-bold-webfont.eot"); src: url("fonts/liberation_sans/liberationsans-bold-webfont.eot?#iefix") format(\'embedded-opentype\'), url("fonts/liberation_sans/liberationsans-bold-webfont.woff2") format(\'woff2\'), url("fonts/liberation_sans/liberationsans-bold-webfont.woff") format(\'woff\'), url("fonts/liberation_sans/liberationsans-bold-webfont.ttf") format(\'truetype\'), url("fonts/liberation_sans/liberationsans-bold-webfont.svg#liberation_sansbold") format(\'svg\'); font-weight: normal; font-style: normal;}@font-face {font-family: \'liberation_sansregular\'; src: url("fonts/liberation_sans/liberationsans-regular-webfont.eot"); src: url("fonts/liberation_sans/liberationsans-regular-webfont.eot?#iefix") format(\'embedded-opentype\'), url("fonts/liberation_sans/liberationsans-regular-webfont.woff2") format(\'woff2\'), url("fonts/liberation_sans/liberationsans-regular-webfont.woff") format(\'woff\'), url("fonts/liberation_sans/liberationsans-regular-webfont.ttf") format(\'truetype\'), url("fonts/liberation_sans/liberationsans-regular-webfont.svg#liberation_sansregular") format(\'svg\'); font-weight: normal; font-style: normal;}.box-frame {position: relative; margin: 10px; height: auto; min-height: 100%; -webkit-transition: all 1s; -moz-transition: all 1s; -o-transition: all 1s; transition: all 1s; background-color: #ffffff; overflow: visible; clear: both;}.box-frame.collapsed {height: 30px !important; min-height: 30px; overflow: hidden;}.box-frame .title {position: relative; background-color: #efefef; padding-left: 30px; background-image: url("panels/BoxPanel/images/minus.png"); background-position: left center; background-repeat: no-repeat; cursor: pointer;}.box-frame.collapsed .title {background-image: url("panels/BoxPanel/images/plus.png");}.box-frame .title-label {font-size: 14px; line-height: 30px;}.box-frame\x3e.panel-content {position: absolute; left: 0; right: 0; height: 100%; background-color: #ffffff; overflow: hidden;}.box-panel \x3e .box-frame{margin-bottom: 30px;}.box-panel \x3e .box-frame.collapsed{margin-bottom: 0;}.panel-content {background-color: #ffffff;}body,html {font-family: \'HelveticaNeue\'; font-weight: normal;}strong {font-family: \'HelveticaNeue\';}.esriControlsBR {bottom: 10px; left: 10px; right: auto; width: auto; height: auto; text-align: left;}.jimu-rtl .esriControlsBR {bottom: 10px; right: 10px; left: auto; width: auto; height: auto; text-align: right;}.jimu-rtl .esriAttribution {position: absolute; margin: 0 5px 0; text-align: right; left: auto; right: 0px; bottom: 0;}.logo-med {position: absolute; left: 0px; bottom: 15px;}.jimu-rtl .map .logo-med {position: absolute; right: 0px; left: auto; bottom: 15px; float: none;}.jimu-widget-zoomslider {width: 25px !important; height: 51px !important; font-size: 18px; line-height: 23px; border-radius: 0px !important;}.jimu-widget-zoomslider .zoom {width: 25px; height: 25px; border-radius: 0px !important;}.jimu-widget-zoomslider .zoom-in {height: 26px;}.jimu-widget-zoomslider.vertical .zoom-in {border-bottom: 1px solid rgba(0, 0, 0, 0.2);}.jimu-widget-extent-navigate{border-radius: 0 !important;}.jimu-widget-extent-navigate .operation{width: 25px; height: 25px; font-size: 10px; line-height: 25px; border-radius: 0 !important;}.jimu-widget-homebutton,.jimu-widget-mylocation,.jimu-widget-mylocation .place-holder,.HomeButton .home {width: 25px !important; height: 25px !important; border-radius: 0px !important; background-size: 16px !important;}.jimu-widget-bookmark .add-section{margin-top: 0 !important;}.jimu-widget-bookmark .jimu-state-error{margin-top: 0 !important;}.jimu-widget-bookmark .play-section{margin-top: 10px !important;}.bookmark-list.jimu-tile-container {min-height: 80px !important;}.jimu-widget-bookmark .jimu-btn {width: 100px !important;}.jimu-symbol-chooser {width: 100% !important;}.jimu-widget-fullScreen .fullScreen {width: 25px !important; height: 25px !important; line-height: 25px !important; border-radius: 0 !important;}@media only screen and (max-width: 500px) {.jimu-widget-zoomslider {display: none;} .jimu-widget-homebutton {top: 10px !important;} .jimu-widget-mylocation {top: 40px !important;} .jimu-widget-extent-navigate{top: 74px !important;}}.jimu-widget-homebutton,.jimu-widget-extent-navigate,.jimu-widget-fullScreen.jimu-main-background,.jimu-widget-zoomslider,.jimu-widget-mylocation{background-color: transparent !important;}.jimu-widget-homebutton,.jimu-widget-fullScreen,.jimu-widget-zoomslider,.jimu-widget-mylocation,.jimu-widget-extent-navigate{border: 0;}.jimu-widget-draw .dijitSelect.draw-unit-select span{display: block; width: 105px; text-align: left; overflow: hidden; text-overflow: ellipsis;}.jimu-rtl .jimu-widget-draw .dijitSelect.draw-unit-select span{text-align: right;}',
"url:themes/BoxTheme/styles/default/style.css":".box-bgcolor {background-color: #646464;}.box-simple-panel {background-color: #ffffff;}.esriSimpleSlider {text-align: center; color: #ffffff; background-color: #646464; cursor: pointer; border-radius: 0px;}.jimu-widget-zoomslider .zoom,.jimu-widget-homebutton .HomeButton .home,.jimu-widget-mylocation .place-holder,.jimu-widget-extent-navigate .operation,.jimu-widget-mylocation .place-holder.nohttps,.jimu-widget-mylocation .place-holder.nohttps:hover,.jimu-widget-extent-navigate .operation.jimu-state-disabled,.jimu-widget-extent-navigate .operation.jimu-state-disabled:hover,.jimu-widget-fullScreen .fullScreen {background-color: #646464; opacity: 0.8;}.jimu-widget-zoomslider .zoom:hover,.jimu-widget-homebutton .HomeButton .home:hover,.jimu-widget-mylocation .place-holder:hover,.jimu-widget-extent-navigate .operation:hover,.jimu-widget-fullScreen .fullScreen:hover{background-color: #646464; opacity: 1;}.esriPopup .titlePane {background-color: #646464;}",
"*now":function(a){a(['dojo/i18n!*preload*themes/BoxTheme/nls/main*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});define([],function(){});