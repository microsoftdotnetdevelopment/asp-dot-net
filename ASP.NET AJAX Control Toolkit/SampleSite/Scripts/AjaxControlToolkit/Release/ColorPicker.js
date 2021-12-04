﻿Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.ColorPickerBehavior=function(n){Sys.Extended.UI.ColorPickerBehavior.initializeBase(this,[n]);this._textbox=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(n);this._button=null;this._sample=null;this._cssClass="ajax__colorPicker";this._popupPosition=Sys.Extended.UI.PositioningMode.BottomLeft;this._selectedColor=null;this._enabled=!0;this._selectedColorChanging=!1;this._popupMouseDown=!1;this._isOpen=!1;this._blur=new Sys.Extended.UI.DeferredOperation(1,this,this._doBlur);this._popupBehavior=null;this._container=null;this._popupDiv=null;this._colorsTable=null;this._colorsBody=null;this._button$delegates={click:Function.createDelegate(this,this._button_onclick),keypress:Function.createDelegate(this,this._button_onkeypress),blur:Function.createDelegate(this,this._button_onblur)};this._element$delegates={change:Function.createDelegate(this,this._element_onchange),keypress:Function.createDelegate(this,this._element_onkeypress),click:Function.createDelegate(this,this._element_onclick),focus:Function.createDelegate(this,this._element_onfocus),blur:Function.createDelegate(this,this._element_onblur)};this._popup$delegates={mousedown:Function.createDelegate(this,this._popup_onmousedown),mouseup:Function.createDelegate(this,this._popup_onmouseup),drag:Function.createDelegate(this,this._popup_onevent),dragstart:Function.createDelegate(this,this._popup_onevent),select:Function.createDelegate(this,this._popup_onevent)};this._cell$delegates={mouseover:Function.createDelegate(this,this._cell_onmouseover),mouseout:Function.createDelegate(this,this._cell_onmouseout),click:Function.createDelegate(this,this._cell_onclick)}};Sys.Extended.UI.ColorPickerBehavior.prototype={initialize:function(){var t,n;Sys.Extended.UI.ColorPickerBehavior.callBaseMethod(this,"initialize");Sys.Extended.UI.ColorPickerBehavior._colorRegex||(Sys.Extended.UI.ColorPickerBehavior._colorRegex=new RegExp("^[A-Fa-f0-9]{6}$"));t=this.get_element();$addHandlers(t,this._element$delegates);this._button&&$addHandlers(this._button,this._button$delegates);n=this.get_selectedColor();n&&this.set_selectedColor(n);this._restoreSample()},dispose:function(){var n,i,t,r;if(this._sample=null,this._button&&($clearHandlers(this._button),this._button=null),this._popupBehavior&&(this._popupBehavior.dispose(),this._popupBehavior=null),this._container&&(this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=null),this._popupDiv&&($clearHandlers(this._popupDiv),this._popupDiv=null),this._colorsBody){for(n=0;n<this._colorsBody.rows.length;n++)for(i=this._colorsBody.rows[n],t=0;t<i.cells.length;t++)$clearHandlers(i.cells[t].firstChild);this._colorsBody=null}this._colorsTable=null;r=this.get_element();r&&$clearHandlers(r);Sys.Extended.UI.ColorPickerBehavior.callBaseMethod(this,"dispose")},get_button:function(){return this._button},set_button:function(n){this._button!==n&&(this._button&&this.get_isInitialized()&&$common.removeHandlers(this._button,this._button$delegates),this._button=n,this._button&&this.get_isInitialized()&&$addHandlers(this._button,this._button$delegates),this.raisePropertyChanged("button"))},get_sample:function(){return this._sample},set_sample:function(n){this._sample!==n&&(this._sample=n,this.raisePropertyChanged("sample"))},get_selectedColor:function(){if(this._selectedColor===null){var n=this._textbox.get_Value();this._validate(n)&&(this._selectedColor=n)}return this._selectedColor},set_selectedColor:function(n){this._selectedColor!==n&&this._validate(n)&&(this._selectedColor=n,this._selectedColorChanging=!0,n!==this._textbox.get_Value()&&this._textbox.set_Value(n),this._showSample(n),this._selectedColorChanging=!1,this.raisePropertyChanged("selectedColor"))},get_enabled:function(){return this._enabled},set_enabled:function(n){this._enabled!==n&&(this._enabled=n,this.raisePropertyChanged("enabled"))},get_popupPosition:function(){return this._popupPosition},set_popupPosition:function(n){this._popupPosition!==n&&(this._popupPosition=n,this.raisePropertyChanged("popupPosition"))},add_colorSelectionChanged:function(n){this.get_events().addHandler("colorSelectionChanged",n)},remove_colorSelectionChanged:function(n){this.get_events().removeHandler("colorSelectionChanged",n)},raise_colorSelectionChanged:function(){var n=this.get_events().getHandler("colorSelectionChanged");n&&n(this,Sys.EventArgs.Empty)},raiseColorSelectionChanged:function(){Sys.Extended.Deprecated("raiseColorSelectionChanged","raise_colorSelectionChanged");this.raise_colorSelectionChanged()},add_showing:function(n){this.get_events().addHandler("showing",n)},remove_showing:function(n){this.get_events().removeHandler("showing",n)},raise_showing:function(n){var t=this.get_events().getHandler("showing");t&&t(this,n)},raiseShowing:function(n){Sys.Extended.Deprecated("raiseShowing","raise_showing");this.raise_showing(n)},add_shown:function(n){this.get_events().addHandler("shown",n)},remove_shown:function(n){this.get_events().removeHandler("shown",n)},raise_shown:function(){var n=this.get_events().getHandler("shown");n&&n(this,Sys.EventArgs.Empty)},raiseShown:function(){Sys.Extended.Deprecated("raiseShown","raise_shown");this.raise_shown()},add_hiding:function(n){this.get_events().addHandler("hiding",n)},remove_hiding:function(n){this.get_events().removeHandler("hiding",n)},raise_hiding:function(n){var t=this.get_events().getHandler("hiding");t&&t(this,n)},raiseHiding:function(n){Sys.Extended.Deprecated("raiseHiding","raise_hiding");this.raise_hiding(n)},add_hidden:function(n){this.get_events().addHandler("hidden",n)},remove_hidden:function(n){this.get_events().removeHandler("hidden",n)},raise_hidden:function(){var n=this.get_events().getHandler("hidden");n&&n(this,Sys.EventArgs.Empty)},raiseHidden:function(){Sys.Extended.Deprecated("raiseHidden","raise_hidden");this.raise_hidden()},show:function(){if(this._ensureColorPicker(),!this._isOpen){var n=new Sys.CancelEventArgs;if(this.raiseShowing(n),n.get_cancel())return;this._isOpen=!0;this._popupBehavior.show();this.raiseShown()}},hide:function(){if(this._isOpen){var n=new Sys.CancelEventArgs;if(this.raiseHiding(n),n.get_cancel())return;this._container&&this._popupBehavior.hide();this._isOpen=!1;this.raiseHidden();this._popupMouseDown=!1}},_focus:function(){this._button?this._button.focus():this.get_element().focus()},_doBlur:function(n){n||Sys.Browser.agent!==Sys.Browser.Opera?(this._popupMouseDown||this.hide(),this._popupMouseDown=!1):this._blur.post(!0)},_buildColorPicker:function(){var t=this.get_element(),n=this.get_id();this._container=$common.createElementFromTemplate({nodeName:"div",properties:{id:n+"_container"},cssClasses:[this._cssClass]},t.parentNode);this._popupDiv=$common.createElementFromTemplate({nodeName:"div",events:this._popup$delegates,properties:{id:n+"_popupDiv"},cssClasses:["ajax__colorPicker_container"],visible:!1},this._container)},_buildColors:function(){var e=this.get_id(),n,i,o,r,u,s,t,f,h,c;for(this._colorsTable=$common.createElementFromTemplate({nodeName:"table",properties:{id:e+"_colorsTable",style:{margin:"auto"}}},this._popupDiv),this._colorsBody=$common.createElementFromTemplate({nodeName:"tbody",properties:{id:e+"_colorsBody"}},this._colorsTable),n=["00","99","33","66","FF","CC"],r=n.length,u=0;u<r;u++)for(s=$common.createElementFromTemplate({nodeName:"tr"},this._colorsBody),t=0;t<r;t++)for(t===3&&(s=$common.createElementFromTemplate({nodeName:"tr"},this._colorsBody)),f=0;f<r;f++)i=n[u]+n[t]+n[f],o="#"+i,h=$common.createElementFromTemplate({nodeName:"td"},s),c=$common.createElementFromTemplate({nodeName:"div",properties:{id:e+"_color_"+i,color:i,title:o,style:{backgroundColor:o},innerHTML:"&nbsp;"},events:this._cell$delegates},h)},_ensureColorPicker:function(){if(!this._container){var n=this.get_element();this._buildColorPicker();this._buildColors();this._popupBehavior=new $create(Sys.Extended.UI.PopupBehavior,{parentElement:n},{},{},this._popupDiv);this._popupBehavior.set_positioningMode(this._popupPosition)}},_showSample:function(n){if(this._sample){var t="";n&&(t="#"+n);this._sample.style.backgroundColor=t}},_restoreSample:function(){this._showSample(this._selectedColor)},_validate:function(n){return n&&Sys.Extended.UI.ColorPickerBehavior._colorRegex.test(n)},_element_onfocus:function(){this._enabled&&(this._button||(this.show(),this._popupMouseDown=!1))},_element_onblur:function(){this._enabled&&(this._button||this._doBlur())},_element_onchange:function(){if(!this._selectedColorChanging){var n=this._textbox.get_Value();(this._validate(n)||n==="")&&(this._selectedColor=n,this._restoreSample())}},_element_onkeypress:function(n){this._enabled&&(this._button||n.charCode!==Sys.UI.Key.esc||(n.stopPropagation(),n.preventDefault(),this.hide()))},_element_onclick:function(){this._enabled&&(this._button||(this.show(),this._popupMouseDown=!1))},_popup_onevent:function(n){n.stopPropagation();n.preventDefault()},_popup_onmousedown:function(){this._popupMouseDown=!0},_popup_onmouseup:function(){Sys.Browser.agent===Sys.Browser.Opera&&this._blur.get_isPending()&&this._blur.cancel();this._popupMouseDown=!1;this._focus()},_cell_onmouseover:function(n){n.stopPropagation();var t=n.target;this._showSample(t.color)},_cell_onmouseout:function(n){n.stopPropagation();this._restoreSample()},_cell_onclick:function(n){if(n.stopPropagation(),n.preventDefault(),this._enabled){var t=n.target;this.set_selectedColor(t.color);this._blur.post(!0);this.raise_colorSelectionChanged()}},_button_onclick:function(n){(n.preventDefault(),n.stopPropagation(),this._enabled)&&(this._isOpen?this.hide():this.show(),this._focus(),this._popupMouseDown=!1)},_button_onblur:function(){this._enabled&&(this._popupMouseDown||this.hide(),this._popupMouseDown=!1)},_button_onkeypress:function(n){this._enabled&&(n.charCode===Sys.UI.Key.esc&&(n.stopPropagation(),n.preventDefault(),this.hide()),this._popupMouseDown=!1)}};Sys.Extended.UI.ColorPickerBehavior.registerClass("Sys.Extended.UI.ColorPickerBehavior",Sys.Extended.UI.BehaviorBase);