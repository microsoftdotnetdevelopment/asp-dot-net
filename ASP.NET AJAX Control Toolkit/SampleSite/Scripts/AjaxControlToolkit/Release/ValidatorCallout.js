﻿Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.ValidatorCalloutBehavior=function(n){Sys.Extended.UI.ValidatorCalloutBehavior.initializeBase(this,[n]);this._warningIconImageUrl=null;this._closeImageUrl=null;this._cssClass="ajax__validatorcallout";this._highlightCssClass=null;this._popupPosition=Sys.Extended.UI.ValidatorCalloutPosition.Right;this._width="200px";this._invalid=!1;this._originalValidationMethod=null;this._validationMethodOverride=null;this._elementToValidate=null;this._popupTable=null;this._errorMessageCell=null;this._calloutArrowCell=null;this._warningIconImage=null;this._closeImage=null;this._closeCellInnerDiv=null;this._popupBehavior=null;this._onShowJson=null;this._onHideJson=null;this._focusAttached=!1;this._isBuilt=!1;this._focusHandler=Function.createDelegate(this,this._onfocus);this._closeClickHandler=Function.createDelegate(this,this._oncloseClick)};Sys.Extended.UI.ValidatorCalloutBehavior.prototype={initialize:function(){var n,t;Sys.Extended.UI.ValidatorCalloutBehavior.callBaseMethod(this,"initialize");n=this.get_element();n.evaluationfunction&&(this._originalValidationMethod=Function.createDelegate(n,n.evaluationfunction),this._validationMethodOverride=Function.createDelegate(this,this._onvalidate),n.evaluationfunction=this._validationMethodOverride);t=this.get_ClientState();null!=t&&""!==t&&(this._ensureCallout(),this._highlightCssClass&&Sys.UI.DomElement.addCssClass(this._elementToValidate,this._highlightCssClass),this.show())},_ensureCallout:function(){var h,r,u,t,i;if(!this._isBuilt){var b=this.get_element(),g=this._elementToValidate=$get(b.controltovalidate),a=document.createElement("tbody"),n=document.createElement("tr"),c=document.createElement("td"),v=document.createElement("table"),k=document.createElement("tbody"),y=document.createElement("tr"),f=document.createElement("td"),e=document.createElement("td"),p=this._closeCellInnerDiv=document.createElement("div"),l=this._popupTable=document.createElement("table"),o=this._calloutArrowCell=document.createElement("td"),w=this._warningIconImage=document.createElement("img"),d=this._closeImage=document.createElement("img"),s=this._errorMessageCell=document.createElement("td");if(l.id=this.get_id()+"_popupTable",l.width=this.get_width(),l.className=this._cssClass+" ajax__validatorcallout_popup_table",n.className="ajax__validatorcallout_popup_table_row",c.className="ajax__validatorcallout_callout_cell",v.className="ajax__validatorcallout_callout_table",y.className="ajax__validatorcallout_callout_table_row",o.className=this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.BottomLeft?"ajax__validatorcallout_callout_arrow_cell_bottomleftpos":this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.BottomRight?"ajax__validatorcallout_callout_arrow_cell_bottomrightpos":this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.TopLeft?"ajax__validatorcallout_callout_arrow_cell_topleftpos":this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.TopRight?"ajax__validatorcallout_callout_arrow_cell_toprightpos":this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.Left?"ajax__validatorcallout_callout_arrow_cell_leftpos":"ajax__validatorcallout_callout_arrow_cell",f.className="ajax__validatorcallout_icon_cell",w.border=0,w.src=this.get_warningIconImageUrl(),s.className="ajax__validatorcallout_error_message_cell",s.innerHTML=this._getErrorMessage(),e.className="ajax__validatorcallout_close_button_cell",p.className="ajax__validatorcallout_innerdiv",d.src=this.get_closeImageUrl(),b.parentNode.appendChild(l),l.appendChild(a),a.appendChild(n),n.appendChild(c),c.appendChild(v),v.appendChild(k),k.appendChild(y),y.appendChild(o),n.appendChild(f),f.appendChild(w),n.appendChild(s),n.appendChild(e),p.appendChild(d),e.appendChild(p),this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.BottomLeft||this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.BottomRight?(h=document.createElement("tr"),a.insertBefore(h,n),o.colSpan=2,h.appendChild(o),n.appendChild(f),n.appendChild(s),n.appendChild(e)):this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.TopLeft||this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.TopRight?(h=document.createElement("tr"),a.appendChild(h),o.colSpan=2,h.appendChild(o),n.appendChild(f),n.appendChild(s),n.appendChild(e)):this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.Left?(n.appendChild(f),n.appendChild(s),n.appendChild(e),n.appendChild(c)):(n.appendChild(c),n.appendChild(f),n.appendChild(s),n.appendChild(e)),r=document.createElement("div"),r.className="ajax__validatorcallout_innerdiv",o.appendChild(r),this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.BottomLeft||this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.BottomRight)for(u=document.createElement("div"),u.style.width="1px",u.className="arrowpixel",r.appendChild(u),t=1;t<22;t+=2)i=document.createElement("div"),i.style.width=t.toString()+"px",r.appendChild(i);else if(this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.TopLeft||this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.TopRight){for(t=23;t>0;t-=2)i=document.createElement("div"),i.style.width=t.toString()+"px",r.appendChild(i);u=document.createElement("div");u.style.width="1px";u.className="arrowpixel";r.appendChild(u)}else for(t=14;t>0;t--)i=document.createElement("div"),i.style.width=t.toString()+"px",r.appendChild(i);this._popupBehavior=$create(Sys.Extended.UI.PopupBehavior,{parentElement:g},{},null,this._popupTable);this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.TopLeft?this._popupBehavior.set_positioningMode(Sys.Extended.UI.PositioningMode.TopLeft):this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.TopRight?this._popupBehavior.set_positioningMode(Sys.Extended.UI.PositioningMode.TopRight):this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.BottomLeft?this._popupBehavior.set_positioningMode(Sys.Extended.UI.PositioningMode.BottomLeft):this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.BottomRight?this._popupBehavior.set_positioningMode(Sys.Extended.UI.PositioningMode.BottomRight):this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.Right?this._popupBehavior.set_positioningMode(Sys.Extended.UI.PositioningMode.Right):this._popupPosition==Sys.Extended.UI.ValidatorCalloutPosition.Left?this._popupBehavior.set_positioningMode(Sys.Extended.UI.PositioningMode.Left):this._popupBehavior.set_positioningMode(Sys.Extended.UI.PositioningMode.Right);this._onShowJson&&this._popupBehavior.set_onShow(this._onShowJson);this._onHideJson&&this._popupBehavior.set_onHide(this._onHideJson);$addHandler(this._closeCellInnerDiv,"click",this._closeClickHandler);this._isBuilt=!0}},dispose:function(){this._isBuilt&&(this.hide(),this._focusAttached&&($removeHandler(this._elementToValidate,"focus",this._focusHandler),this._focusAttached=!1),$removeHandler(this._closeCellInnerDiv,"click",this._closeClickHandler),this._onShowJson=null,this._onHideJson=null,this._popupBehavior&&(this._popupBehavior.dispose(),this._popupBehavior=null),this._closeBehavior&&(this._closeBehavior.dispose(),this._closeBehavior=null),this._popupTable&&(this._popupTable.parentNode.removeChild(this._popupTable),this._popupTable=null,this._errorMessageCell=null,this._elementToValidate=null,this._calloutArrowCell=null,this._warningIconImage=null,this._closeImage=null,this._closeCellInnerDiv=null),this._isBuilt=!1);Sys.Extended.UI.ValidatorCalloutBehavior.callBaseMethod(this,"dispose")},_getErrorMessage:function(){return this.get_element().errormessage||Sys.Extended.UI.Resources.ValidatorCallout_DefaultErrorMessage},show:function(n){if(n||!this.isOpen()){if(n&&Sys.Extended.UI.ValidatorCalloutBehavior._currentCallout&&Sys.Extended.UI.ValidatorCalloutBehavior._currentCallout.hide(),Sys.Extended.UI.ValidatorCalloutBehavior._currentCallout!=null)return;Sys.Extended.UI.ValidatorCalloutBehavior._currentCallout=this;this._errorMessageCell.innerHTML=this._getErrorMessage();this._popupBehavior.show()}},hide:function(){Sys.Extended.UI.ValidatorCalloutBehavior._currentCallout==this&&(Sys.Extended.UI.ValidatorCalloutBehavior._currentCallout=null);this.isOpen()&&this._popupBehavior.hide()},_onfocus:function(){return this._originalValidationMethod(this.get_element())?(this.hide(),!0):(this._ensureCallout(),this._highlightCssClass&&Sys.UI.DomElement.addCssClass(this._elementToValidate,this._highlightCssClass),this.show(!0),!1)},_oncloseClick:function(){this.hide()},_onvalidate:function(n){return this._originalValidationMethod(n)?(this._highlightCssClass&&this._invalid&&Sys.UI.DomElement.removeCssClass(this._elementToValidate,this._highlightCssClass),this._invalid=!1,this.hide(),!0):(this._ensureCallout(),this._highlightCssClass&&Sys.UI.DomElement.addCssClass(this._elementToValidate,this._highlightCssClass),this._focusAttached||($addHandler(this._elementToValidate,"focus",this._focusHandler),this._focusAttached=!0),this.show(!1),this._invalid=!0,!1)},get_onShow:function(){return this._popupBehavior?this._popupBehavior.get_onShow():this._onShowJson},set_onShow:function(n){this._popupBehavior?this._popupBehavior.set_onShow(n):this._onShowJson=n;this.raisePropertyChanged("onShow")},onShow:function(){this._popupBehavior&&this._popupBehavior.onShow()},get_onShowBehavior:function(){return this._popupBehavior?this._popupBehavior.get_onShowBehavior():null},get_onHide:function(){return this._popupBehavior?this._popupBehavior.get_onHide():this._onHideJson},set_onHide:function(n){this._popupBehavior?this._popupBehavior.set_onHide(n):this._onHideJson=n;this.raisePropertyChanged("onHide")},onHide:function(){this._popupBehavior&&this._popupBehavior.onHide()},get_onHideBehavior:function(){return this._popupBehavior?this._popupBehavior.get_onHideBehavior():null},get_warningIconImageUrl:function(){return this._warningIconImageUrl},set_warningIconImageUrl:function(n){this._warningIconImageUrl!=n&&(this._warningIconImageUrl=n,this.get_isInitialized()&&(this._warningIconImage.src=n),this.raisePropertyChanged("warningIconImageUrl"))},get_closeImageUrl:function(){return this._closeImageUrl},set_closeImageUrl:function(n){this._closeImageUrl!=n&&(this._closeImageUrl=n,this.get_isInitialized()&&(this._closeImage.src=n),this.raisePropertyChanged("closeImageUrl"))},get_width:function(){return this._width},set_width:function(n){this._width!=n&&(this._width=n,this.get_isInitialized()&&(this._popupTable.style.width=_width),this.raisePropertyChanged("width"))},get_popupPosition:function(){return this._popupPosition},set_popupPosition:function(n){this._popupPosition!=n&&(this._popupPosition=n,this.raisePropertyChanged("popupPosition"))},get_cssClass:function(){return this._cssClass},set_cssClass:function(n){this._cssClass!=n&&(this._cssClass=n,this.raisePropertyChanged("cssClass"))},get_highlightCssClass:function(){return this._highlightCssClass},set_highlightCssClass:function(n){this._highlightCssClass!=n&&(this._highlightCssClass=n,this.raisePropertyChanged("highlightCssClass"))},isOpen:function(){return $common.getVisible(this._popupTable)},get_isOpen:function(){return Sys.Extended.Deprecated("get_isOpen()","isOpen()"),this.isOpen()}};Sys.Extended.UI.ValidatorCalloutBehavior.registerClass("Sys.Extended.UI.ValidatorCalloutBehavior",Sys.Extended.UI.BehaviorBase);Sys.Extended.UI.ValidatorCalloutPosition=function(){throw Error.invalidOperation();};Sys.Extended.UI.ValidatorCalloutPosition.prototype={Right:0,Left:1,BottomLeft:2,BottomRight:3,TopLeft:4,TopRight:5};Sys.Extended.UI.ValidatorCalloutPosition.registerEnum("Sys.Extended.UI.ValidatorCalloutPosition");