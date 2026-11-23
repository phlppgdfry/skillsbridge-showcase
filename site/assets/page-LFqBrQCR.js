import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c,u as l}from"./index-CJU_aTUJ.js";function u(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var d=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,f=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,p={};function m(e,t){return((t||p).jsx?f:d).test(e)}var h=/[ \t\n\f\r]/g;function g(e){return typeof e==`object`?e.type===`text`&&_(e.value):_(e)}function _(e){return e.replace(h,``)===``}var v=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};v.prototype.normal={},v.prototype.property={},v.prototype.space=void 0;function y(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new v(n,r,t)}function b(e){return e.toLowerCase()}var x=class{constructor(e,t){this.attribute=t,this.property=e}};x.prototype.attribute=``,x.prototype.booleanish=!1,x.prototype.boolean=!1,x.prototype.commaOrSpaceSeparated=!1,x.prototype.commaSeparated=!1,x.prototype.defined=!1,x.prototype.mustUseProperty=!1,x.prototype.number=!1,x.prototype.overloadedBoolean=!1,x.prototype.property=``,x.prototype.spaceSeparated=!1,x.prototype.space=void 0;var S=r({boolean:()=>w,booleanish:()=>T,commaOrSpaceSeparated:()=>A,commaSeparated:()=>k,number:()=>D,overloadedBoolean:()=>E,spaceSeparated:()=>O}),C=0,w=j(),T=j(),E=j(),D=j(),O=j(),k=j(),A=j();function j(){return 2**++C}var M=Object.keys(S),N=class extends x{constructor(e,t,n,r){let i=-1;if(super(e,t),ee(this,`space`,r),typeof n==`number`)for(;++i<M.length;){let e=M[i];ee(this,M[i],(n&S[e])===S[e])}}};N.prototype.defined=!0;function ee(e,t,n){n&&(e[t]=n)}function P(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new N(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[b(r)]=r,n[b(a.attribute)]=r}return new v(t,n,e.space)}var F=P({properties:{ariaActiveDescendant:null,ariaAtomic:T,ariaAutoComplete:null,ariaBusy:T,ariaChecked:T,ariaColCount:D,ariaColIndex:D,ariaColSpan:D,ariaControls:O,ariaCurrent:null,ariaDescribedBy:O,ariaDetails:null,ariaDisabled:T,ariaDropEffect:O,ariaErrorMessage:null,ariaExpanded:T,ariaFlowTo:O,ariaGrabbed:T,ariaHasPopup:null,ariaHidden:T,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:O,ariaLevel:D,ariaLive:null,ariaModal:T,ariaMultiLine:T,ariaMultiSelectable:T,ariaOrientation:null,ariaOwns:O,ariaPlaceholder:null,ariaPosInSet:D,ariaPressed:T,ariaReadOnly:T,ariaRelevant:null,ariaRequired:T,ariaRoleDescription:O,ariaRowCount:D,ariaRowIndex:D,ariaRowSpan:D,ariaSelected:T,ariaSetSize:D,ariaSort:null,ariaValueMax:D,ariaValueMin:D,ariaValueNow:D,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function te(e,t){return t in e?e[t]:t}function ne(e,t){return te(e,t.toLowerCase())}var re=P({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:k,acceptCharset:O,accessKey:O,action:null,allow:null,allowFullScreen:w,allowPaymentRequest:w,allowUserMedia:w,alpha:w,alt:null,as:null,async:w,autoCapitalize:null,autoComplete:O,autoFocus:w,autoPlay:w,blocking:O,capture:null,charSet:null,checked:w,cite:null,className:O,closedBy:null,colorSpace:null,cols:D,colSpan:D,command:null,commandFor:null,content:null,contentEditable:T,controls:w,controlsList:O,coords:D|k,crossOrigin:null,data:null,dateTime:null,decoding:null,default:w,defer:w,dir:null,dirName:null,disabled:w,download:E,draggable:T,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:w,formTarget:null,headers:O,height:D,hidden:E,high:D,href:null,hrefLang:null,htmlFor:O,httpEquiv:O,id:null,imageSizes:null,imageSrcSet:null,inert:w,inputMode:null,integrity:null,is:null,isMap:w,itemId:null,itemProp:O,itemRef:O,itemScope:w,itemType:O,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:w,low:D,manifest:null,max:null,maxLength:D,media:null,method:null,min:null,minLength:D,multiple:w,muted:w,name:null,nonce:null,noModule:w,noValidate:w,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:w,optimum:D,pattern:null,ping:O,placeholder:null,playsInline:w,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:w,referrerPolicy:null,rel:O,required:w,reversed:w,rows:D,rowSpan:D,sandbox:O,scope:null,scoped:w,seamless:w,selected:w,shadowRootClonable:w,shadowRootCustomElementRegistry:w,shadowRootDelegatesFocus:w,shadowRootMode:null,shadowRootSerializable:w,shape:null,size:D,sizes:null,slot:null,span:D,spellCheck:T,src:null,srcDoc:null,srcLang:null,srcSet:null,start:D,step:null,style:null,tabIndex:D,target:null,title:null,translate:null,type:null,typeMustMatch:w,useMap:null,value:T,width:D,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:O,axis:null,background:null,bgColor:null,border:D,borderColor:null,bottomMargin:D,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:w,declare:w,event:null,face:null,frame:null,frameBorder:null,hSpace:D,leftMargin:D,link:null,longDesc:null,lowSrc:null,marginHeight:D,marginWidth:D,noResize:w,noHref:w,noShade:w,noWrap:w,object:null,profile:null,prompt:null,rev:null,rightMargin:D,rules:null,scheme:null,scrolling:T,standby:null,summary:null,text:null,topMargin:D,valueType:null,version:null,vAlign:null,vLink:null,vSpace:D,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:w,disablePictureInPicture:w,disableRemotePlayback:w,exportParts:k,part:O,prefix:null,property:null,results:D,security:null,unselectable:null},space:`html`,transform:ne}),ie=P({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,maskType:`mask-type`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:A,accentHeight:D,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:D,amplitude:D,arabicForm:null,ascent:D,attributeName:null,attributeType:null,azimuth:D,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:D,by:null,calcMode:null,capHeight:D,className:O,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:D,diffuseConstant:D,direction:null,display:null,dur:null,divisor:D,dominantBaseline:null,download:w,dx:null,dy:null,edgeMode:null,editable:null,elevation:D,enableBackground:null,end:null,event:null,exponent:D,externalResourcesRequired:null,fill:null,fillOpacity:D,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:k,g2:k,glyphName:k,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:D,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:D,horizOriginX:D,horizOriginY:D,id:null,ideographic:D,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:D,k:D,k1:D,k2:D,k3:D,k4:D,kernelMatrix:A,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:D,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:D,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:D,overlineThickness:D,paintOrder:null,panose1:null,path:null,pathLength:D,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:O,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:D,pointsAtY:D,pointsAtZ:D,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:A,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:A,rev:A,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:A,requiredFeatures:A,requiredFonts:A,requiredFormats:A,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:D,specularExponent:D,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:D,strikethroughThickness:D,string:null,stroke:null,strokeDashArray:A,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:D,strokeOpacity:D,strokeWidth:null,style:null,surfaceScale:D,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:A,tabIndex:D,tableValues:null,target:null,targetX:D,targetY:D,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:A,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:D,underlineThickness:D,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:D,values:null,vAlphabetic:D,vMathematical:D,vectorEffect:null,vHanging:D,vIdeographic:D,version:null,vertAdvY:D,vertOriginX:D,vertOriginY:D,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:D,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:te}),ae=P({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),oe=P({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:ne}),se=P({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),ce={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},le=/[A-Z]/g,ue=/-[a-z]/g,de=/^data[-\w.:]+$/i;function fe(e,t){let n=b(t),r=t,i=x;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&de.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(ue,me);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!ue.test(e)){let n=e.replace(le,pe);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=N}return new i(r,t)}function pe(e){return`-`+e.toLowerCase()}function me(e){return e.charAt(1).toUpperCase()}var he=y([F,re,ae,oe,se],`html`),ge=y([F,ie,ae,oe,se],`svg`);function _e(e){return e.join(` `).trim()}var ve=/\/\*(?:[^*]|\*(?!\/))*\*\//g,ye=/\n/g,be=/^\s*/,xe=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Se=/^:\s*/,Ce=/^((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|url\((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|[^)]*)\)|[^};])+)/,we=/^[;\s]*/,Te=`
`,Ee=`/`,De=`*`,Oe=``,ke=`comment`,Ae=`declaration`;function je(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var n=1,r=1;function i(e){var t=e.match(ye);t&&(n+=t.length);var i=e.lastIndexOf(Te);r=~i?e.length-i:r+e.length}function a(){var e={line:n,column:r};return function(t){return t.position=new o(e),l(),t}}function o(e){this.start=e,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function s(i){var a=Error(t.source+`:`+n+`:`+r+`: `+i);if(a.reason=i,a.filename=t.source,a.line=n,a.column=r,a.source=e,!t.silent)throw a}function c(t){var n=t.exec(e);if(n){var r=n[0];return i(r),e=e.slice(r.length),n}}function l(){c(be)}function u(e){for(var t;t=d();)e.push(t);return e}function d(){var t=a();if(Ee==e.charAt(0)&&De==e.charAt(1)){for(var n=2;Oe!=e.charAt(n)&&(De!=e.charAt(n)||Ee!=e.charAt(n+1));)++n;if(n+=2,Oe===e.charAt(n-1))return s(`End of comment missing`);var o=e.slice(2,n-2);return r+=2,i(o),e=e.slice(n),r+=2,t({type:ke,comment:o})}}function f(){var e=a(),t=c(xe);if(t){if(d(),!c(Se))return s(`property missing ':'`);var n=c(Ce),r=e({type:Ae,property:t[0].replace(ve,Oe).trim(),value:n?n[0].replace(ve,Oe).trim():Oe});return c(we),r}}function p(){var e=[];u(e);for(var t;t=f();)e.push(t),u(e);return e}return l(),p()}function Me(e,t){let n=null;if(!e||typeof e!=`string`)return n;let r=je(e),i=typeof t==`function`;return r.forEach(e=>{if(e.type!==`declaration`)return;let{property:r,value:a}=e;i?t(r,a,e):a&&(n??={},n[r]=a)}),n}var Ne=Fe(`end`),Pe=Fe(`start`);function Fe(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function Ie(e){let t=Pe(e),n=Ne(e);if(t&&n)return{start:t,end:n}}function Le(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?ze(e.position):`start`in e||`end`in e?ze(e):`line`in e||`column`in e?Re(e):``}function Re(e){return Be(e&&e.line)+`:`+Be(e&&e.column)}function ze(e){return Re(e&&e.start)+`-`+Re(e&&e.end)}function Be(e){return e&&typeof e==`number`?e:1}var I=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=Le(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};I.prototype.file=``,I.prototype.name=``,I.prototype.reason=``,I.prototype.message=``,I.prototype.stack=``,I.prototype.column=void 0,I.prototype.line=void 0,I.prototype.ancestors=void 0,I.prototype.cause=void 0,I.prototype.fatal=void 0,I.prototype.place=void 0,I.prototype.ruleId=void 0,I.prototype.source=void 0;var Ve={}.hasOwnProperty,He=new Map,Ue=/[A-Z]/g,We=/-([a-z])/g,Ge=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),Ke=new Set([`td`,`th`]),qe=`https://github.com/syntax-tree/hast-util-to-jsx-runtime`;function Je(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=at(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=it(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?ge:he,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=Ye(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Ye(e,t,n){if(t.type===`element`)return Xe(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return Ze(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return $e(e,t,n);if(t.type===`mdxjsEsm`)return Qe(e,t);if(t.type===`root`)return et(e,t,n);if(t.type===`text`)return tt(e,t)}function Xe(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=ge,e.schema=i),e.ancestors.push(t);let a=dt(e,t.tagName,!1),o=ot(e,t),s=ct(e,t);return Ge.has(t.tagName)&&(s=s.filter(function(e){return typeof e!=`string`||!g(e)})),nt(e,o,a,t),rt(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Ze(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}ft(e,t.position)}function Qe(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ft(e,t.position)}function $e(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=ge,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:dt(e,t.name,!0),o=st(e,t),s=ct(e,t);return nt(e,o,a,t),rt(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function et(e,t,n){let r={};return rt(r,ct(e,t)),e.create(t,e.Fragment,r,n)}function tt(e,t){return t.value}function nt(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function rt(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function it(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function at(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=Pe(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function ot(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&Ve.call(t.properties,i)){let a=lt(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&Ke.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function st(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`){if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else ft(e,t.position)}else{let{name:i}=r,a;if(r.value&&typeof r.value==`object`){if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else ft(e,t.position)}else a=r.value===null||r.value;n[i]=a}return n}function ct(e,t){let n=[],r=-1,i=e.passKeys?new Map:He;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=Ye(e,a,o);s!==void 0&&n.push(s)}return n}function lt(e,t,n){if(n==null||typeof n==`number`&&Number.isNaN(n))return;let r=fe(e.schema,t);return Array.isArray(n)&&(n=r.commaSeparated?u(n):_e(n)),r.property===`style`?[`style`,typeof n==`object`?e.stylePropertyNameCase===`dom`?n:pt(n):ut(e,String(n))]:[e.elementAttributeNameCase===`react`&&r.space?ce[r.property]||r.property:r.attribute,n]}function ut(e,t){let n={};try{Me(t,function(t,r){if(t&&r){let i=t;i.slice(0,2)!==`--`&&(i=i.toLowerCase(),e.stylePropertyNameCase===`dom`&&(i.slice(0,4)===`-ms-`&&(i=i.slice(1)),i=i.replace(We,gt))),n[i]=r}})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new I("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=qe+`#cannot-parse-style-attribute`,r}return n}function dt(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=m(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=m(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return Ve.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);ft(e)}function ft(e,t){let n=new I("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=qe+`#cannot-handle-mdx-estrees-without-createevaluater`,n}function pt(e){let t={},n;for(n in e)Ve.call(e,n)&&(t[mt(n)]=e[n]);return t}function mt(e){if(e.slice(0,2)===`--`)return e;let t=e.replace(Ue,ht);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function ht(e){return`-`+e.toLowerCase()}function gt(e,t){return t.toUpperCase()}var _t={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},vt={};function yt(e,t){let n=t||vt;return bt(e,typeof n.includeImageAlt!=`boolean`||n.includeImageAlt,typeof n.includeHtml!=`boolean`||n.includeHtml)}function bt(e,t,n){if(St(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return xt(e.children,t,n)}return Array.isArray(e)?xt(e,t,n):``}function xt(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=bt(e[i],t,n);return r.join(``)}function St(e){return!!(e&&typeof e==`object`)}var Ct=document.createElement(`i`);function wt(e){let t=`&`+e+`;`;Ct.innerHTML=t;let n=Ct.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`?!1:n!==t&&n}function L(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function R(e,t){return e.length>0?(L(e,e.length,0,t),e):t}var Tt={}.hasOwnProperty;function Et(e){let t={},n=-1;for(;++n<e.length;)Dt(t,e[n]);return t}function Dt(e,t){let n;for(n in t){let r=(Tt.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){Tt.call(r,a)||(r[a]=[]);let e=i[a];Ot(r[a],Array.isArray(e)?e:e?[e]:[])}}}function Ot(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);L(e,0,0,r)}function kt(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}function z(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var B=G(/[A-Za-z]/),V=G(/[\dA-Za-z]/),At=G(/[#-'*+\--9=?A-Z^-~]/);function jt(e){return e!==null&&(e<32||e===127)}var Mt=G(/\d/),Nt=G(/[\dA-Fa-f]/),Pt=G(/[!-/:-@[-`{-~]/);function H(e){return e!==null&&e<-2}function U(e){return e!==null&&(e<0||e===32)}function W(e){return e===-2||e===-1||e===32}var Ft=G(/\p{P}|\p{S}/u),It=G(/\s/);function G(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Lt(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&V(e.charCodeAt(n+1))&&V(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function K(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return W(r)?(e.enter(n),s(r)):t(r)}function s(r){return W(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}function Rt(e,t,n,r,i,a){let o=0;return s;function s(t){return a>0&&W(t)?(e.enter(r),c(t)):l(t)}function c(t){return W(t)&&o<a?(e.consume(t),o++,c):(e.exit(r),l(t))}function l(e){return o>=i?t(e):n(e)}}var zt={tokenize:Bt};function Bt(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null)e.consume(n);else return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),K(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null)e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);else return H(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var Vt=class{constructor(){this.index=new Map,this.map=[]}add(e,t,n){Ht(this,e,t,n,!1)}addBefore(e,t,n){Ht(this,e,t,n,!0)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0,this.index.clear()}};function Ht(e,t,n,r,i){if(n===0&&r.length===0)return;let a=e.index.get(t);if(a){a[1]+=n,i?(r.push(...a[2]),a[2]=r):a[2].push(...r);return}let o=[t,n,r];e.map.push(o),e.index.set(t,o)}var Ut={tokenize:Gt},Wt={tokenize:Kt};function Gt(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;let c=new Vt;return c.add(a+1,0,t.events.slice(n)),c.add(n,s-n,[]),c.consume(t.events),l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!(!i.currentConstruct||i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Wt,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(Wt,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null)i&&v(),_(0),e.consume(n);else return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null)g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);else return H(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;let l=new Vt;l.add(a+1,0,t.events.slice(n)),l.add(n,e-n,[]),l.consume(t.events)}}function _(r){let i=n.length;for(;i-->r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Kt(e,t,n){return K(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function q(e){if(e===null||U(e)||It(e))return 1;if(Ft(e))return 2}function qt(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var Jt={name:`attention`,resolveAll:Yt,tokenize:Xt};function Yt(e,t){let n=-1,r;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){let i=n;for(;i--;)if(e[i][0]===`exit`&&e[i][1].type===`attentionSequence`&&e[i][1]._open&&t.sliceSerialize(e[i][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[i][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;let a=e[i][1].end.offset-e[i][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1,o={...e[i][1].end},s={...e[n][1].start};Zt(o,-a),Zt(s,a);let c={type:a>1?`strongSequence`:`emphasisSequence`,start:o,end:{...e[i][1].end}},l={type:a>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:s},u={type:a>1?`strongText`:`emphasisText`,start:{...e[i][1].end},end:{...e[n][1].start}},d={type:a>1?`strong`:`emphasis`,start:{...c.start},end:{...l.end}};e[i][1].end={...c.start},e[n][1].start={...l.end},r=[],e[i][1].end.offset-e[i][1].start.offset&&(r=R(r,[[`enter`,e[i][1],t],[`exit`,e[i][1],t]])),r=R(r,[[`enter`,d,t],[`enter`,c,t],[`exit`,c,t],[`enter`,u,t]]),r=R(r,qt(t.parser.constructs.insideSpan.null,e.slice(i+1,n),t)),r=R(r,[[`exit`,u,t],[`enter`,l,t],[`exit`,l,t],[`exit`,d,t]]);let f=0;e[n][1].end.offset-e[n][1].start.offset&&(f=2,r=R(r,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])),L(e,i-1,n-i+3,r),n=i+r.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function Xt(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=q(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=q(o),u=!l||l===2&&i||n.includes(o)&&o!==42&&o!==95,d=!i||i===2&&l||n.includes(r)&&r!==42&&r!==95;return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function Zt(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var Qt={name:`autolink`,tokenize:$t};function $t(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return B(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||V(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||V(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||jt(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):At(t)?(e.consume(t),l):n(t)}function u(e){return V(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||V(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var en={partial:!0,tokenize:tn};function tn(e,t,n){return r;function r(t){return W(t)?K(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||H(e)?t(e):n(e)}}var nn={continuation:{tokenize:an},exit:on,name:`blockQuote`,tokenize:rn};function rn(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return W(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function an(e,t,n){let r=this;return i;function i(t){return W(t)?K(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(nn,t,n)(r)}}function on(e){e.exit(`blockQuote`)}var sn={name:`characterEscape`,tokenize:cn};function cn(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return Pt(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var ln={name:`characterReference`,tokenize:un};function un(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=V,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=Nt,u):(e.enter(`characterReferenceValue`),a=7,o=Mt,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===V&&!wt(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var dn={partial:!0,tokenize:fn};function fn(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var pn={concrete:!0,name:`codeFenced`,tokenize:mn};function mn(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),W(t)?K(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||H(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(dn,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||H(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):W(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),K(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||H(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||H(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&W(t)?K(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||H(t)?e.check(dn,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||H(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),W(t)?K(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),W(t)?K(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||H(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}var hn={name:`codeIndented`,tokenize:_n},gn={partial:!0,tokenize:vn};function _n(e,t,n){return r;function r(t){return e.enter(`codeIndented`),Rt(e,i,n,`linePrefix`,4,4)(t)}function i(t){return t===null?o(t):H(t)?e.attempt(gn,i,o)(t):(e.enter(`codeFlowValue`),a(t))}function a(t){return t===null||H(t)?(e.exit(`codeFlowValue`),i(t)):(e.consume(t),a)}function o(n){return e.exit(`codeIndented`),t(n)}}function vn(e,t,n){let r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):H(o)?(e.enter(`lineEnding`),e.consume(o),e.exit(`lineEnding`),i):Rt(e,t,a,`linePrefix`,4,4)(o)}function a(e){return H(e)?i(e):n(e)}}var yn={name:`codeText`,previous:xn,resolve:bn,tokenize:Sn};function bn(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function xn(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function Sn(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):H(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||H(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var Cn=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&wn(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),wn(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),wn(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0)){if(e<this.left.length){let t=this.left.splice(e,1/0);wn(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);wn(this.left,t.reverse())}}}};function wn(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Tn(e){let t={},n=-1,r,i,a,o,s,c,l,u=new Cn(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,En(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(o[1].type!==`linePrefix`&&o[1].type!==`listItemIndent`)break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return L(e,0,1/0,u.slice(0)),!l}function En(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var Dn={resolve:kn,tokenize:An},On={partial:!0,tokenize:jn};function kn(e){return Tn(e),e}function An(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):H(t)?e.check(On,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function jn(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),K(e,a,`linePrefix`)}function a(i){if(i===null||H(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function Mn(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||jt(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||H(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||U(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||jt(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function Nn(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):H(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||H(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!W(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function Pn(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):H(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),K(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||H(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function Fn(e,t){let n;return r;function r(i){return H(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):W(i)?K(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}var In={name:`definition`,tokenize:Rn},Ln={partial:!0,tokenize:zn};function Rn(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return Nn.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=z(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return U(t)?Fn(e,l)(t):l(t)}function l(t){return Mn(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(Ln,d,d)(t)}function d(t){return W(t)?K(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||H(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function zn(e,t,n){return r;function r(t){return U(t)?Fn(e,i)(t):n(t)}function i(t){return Pn(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return W(t)?K(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||H(e)?t(e):n(e)}}var Bn={name:`hardBreakEscape`,tokenize:Vn};function Vn(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return H(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var Hn={name:`headingAtx`,resolve:Un,tokenize:Wn};function Un(e,t){let n=e.length-2,r=3;if(e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r){let i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`};L(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])}return e}function Wn(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||U(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||H(n)?(e.exit(`atxHeading`),t(n)):W(n)?K(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||U(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var Gn=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Kn=[`pre`,`script`,`style`,`textarea`],qn={concrete:!0,name:`htmlFlow`,resolveTo:Yn,tokenize:Xn},Jn={partial:!0,tokenize:Zn};function Yn(e){let t=e.length;for(;t--&&(e[t][0]!==`enter`||e[t][1].type!==`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Xn(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:F):B(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):B(a)?(e.consume(a),i=4,r.interrupt?t:F):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:F):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:O:m):n(i)}function h(t){return B(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||U(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&Kn.includes(l)?(i=1,r.interrupt?t(s):O(s)):Gn.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):O(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||V(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:O):n(i)}function v(t){return W(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||B(t)?(e.consume(t),b):W(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||V(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):W(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):W(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||H(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||U(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||W(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),D):n(t)}function D(t){return t===null||H(t)?O(t):W(t)?(e.consume(t),D):n(t)}function O(t){return t===45&&i===2?(e.consume(t),M):t===60&&i===1?(e.consume(t),N):t===62&&i===4?(e.consume(t),te):t===63&&i===3?(e.consume(t),F):t===93&&i===5?(e.consume(t),P):H(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(Jn,ne,k)(t)):t===null||H(t)?(e.exit(`htmlFlowData`),k(t)):(e.consume(t),O)}function k(t){return e.check(dn,A,ne)(t)}function A(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),j}function j(t){return t===null||H(t)?k(t):(e.enter(`htmlFlowData`),O(t))}function M(t){return t===45?(e.consume(t),F):O(t)}function N(t){return t===47?(e.consume(t),o=``,ee):O(t)}function ee(t){if(t===62){let n=o.toLowerCase();return Kn.includes(n)?(e.consume(t),te):O(t)}return B(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),ee):O(t)}function P(t){return t===93?(e.consume(t),F):O(t)}function F(t){return t===62?(e.consume(t),te):t===45&&i===2?(e.consume(t),F):O(t)}function te(t){return t===null||H(t)?(e.exit(`htmlFlowData`),ne(t)):(e.consume(t),te)}function ne(n){return e.exit(`htmlFlow`),t(n)}}function Zn(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(en,t,n)}}var Qn={name:`htmlText`,tokenize:$n};function $n(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):B(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):B(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):H(t)?(o=d,N(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?M(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):H(t)?(o=h,N(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?M(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?M(t):H(t)?(o=v,N(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):H(t)?(o=y,N(t)):(e.consume(t),y)}function b(e){return e===62?M(e):y(e)}function x(t){return B(t)?(e.consume(t),S):n(t)}function S(t){return t===45||V(t)?(e.consume(t),S):C(t)}function C(t){return H(t)?(o=C,N(t)):W(t)?(e.consume(t),C):M(t)}function w(t){return t===45||V(t)?(e.consume(t),w):t===47||t===62||U(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),M):t===58||t===95||B(t)?(e.consume(t),E):H(t)?(o=T,N(t)):W(t)?(e.consume(t),T):M(t)}function E(t){return t===45||t===46||t===58||t===95||V(t)?(e.consume(t),E):D(t)}function D(t){return t===61?(e.consume(t),O):H(t)?(o=D,N(t)):W(t)?(e.consume(t),D):T(t)}function O(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,k):H(t)?(o=O,N(t)):W(t)?(e.consume(t),O):(e.consume(t),A)}function k(t){return t===i?(e.consume(t),i=void 0,j):t===null?n(t):H(t)?(o=k,N(t)):(e.consume(t),k)}function A(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||U(t)?T(t):(e.consume(t),A)}function j(e){return e===47||e===62||U(e)?T(e):n(e)}function M(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function N(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ee}function ee(t){return W(t)?K(e,P,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):P(t)}function P(t){return e.enter(`htmlTextData`),o(t)}}var er={name:`labelEnd`,resolveAll:ir,resolveTo:ar,tokenize:or},tr={tokenize:sr},nr={tokenize:cr},rr={tokenize:lr};function ir(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&L(e,0,e.length,n),e}function ar(e,t){let n=e.length,r=0,i,a,o;for(;n--;){let t=e[n][1];if(i){if(t.type===`link`||t.type===`labelLink`&&t._inactive)break;e[n][0]===`enter`&&t.type===`labelLink`&&(t._inactive=!0)}else if(a){if(e[n][0]===`enter`&&(t.type===`labelImage`||t.type===`labelLink`)&&!t._balanced&&(i=n,t.type!==`labelLink`)){r=2;break}}else t.type===`labelEnd`&&(a=n)}let s={type:e[i][1].type===`labelLink`?`link`:`image`,start:{...e[i][1].start},end:{...e[e.length-1][1].end}},c={type:`label`,start:{...e[i][1].start},end:{...e[a][1].end}},l={type:`labelText`,start:{...e[i+r+2][1].end},end:{...e[a-2][1].start}};return o=[[`enter`,s,t],[`enter`,c,t]],o=R(o,e.slice(i+1,i+r+3)),o=R(o,[[`enter`,l,t]]),o=R(o,qt(t.parser.constructs.insideSpan.null,e.slice(i+r+4,a-3),t)),o=R(o,[[`exit`,l,t],e[a-2],e[a-1],[`exit`,c,t]]),o=R(o,e.slice(a+1)),o=R(o,[[`exit`,s,t]]),L(e,i,e.length,o),e}function or(e,t,n){let r=this,i=r._labelStarts,a,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();a=i[i.length-1]}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(z(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(tr,u,o?u:d)(t):t===91?e.attempt(nr,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(rr,u,d)(t)}function u(e){return i.pop(),t(e)}function d(e){return a._balanced=!0,n(e)}}function sr(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return U(t)?Fn(e,a)(t):a(t)}function a(t){return t===41?u(t):Mn(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return U(t)?Fn(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?Pn(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return U(t)?Fn(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function cr(e,t,n){let r=this;return i;function i(t){return Nn.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(z(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function lr(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var ur={name:`labelStartImage`,resolveAll:er.resolveAll,tokenize:dr};function dr(e,t,n){let r=this,i;return a;function a(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),o}function o(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),i=e.exit(`labelImage`),s):n(t)}function s(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(e))}}var fr={name:`labelStartLink`,resolveAll:er.resolveAll,tokenize:pr};function pr(e,t,n){let r=this,i;return a;function a(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),i=e.exit(`labelLink`),o}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(e))}}var mr={name:`lineEnding`,tokenize:hr};function hr(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),K(e,t,`linePrefix`)}}var gr={name:`thematicBreak`,tokenize:_r};function _r(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||H(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),W(t)?K(e,s,`whitespace`)(t):s(t))}}var J={continuation:{tokenize:xr},exit:Cr,name:`list`,tokenize:br},vr={partial:!0,tokenize:wr},yr={partial:!0,tokenize:Sr};function br(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:Mt(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(gr,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return Mt(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(en,r.interrupt?n:u,e.attempt(vr,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return W(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function xr(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(en,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,K(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!W(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(yr,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,K(e,e.attempt(J,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function Sr(e,t,n){let r=this;return K(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function Cr(e){e.exit(this.containerState.type)}function wr(e,t,n){let r=this;return K(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!W(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var Tr={name:`setextUnderline`,resolveTo:Er,tokenize:Dr};function Er(e,t){let n=new Vt,r=e.length,i,a,o;for(;r--;)if(e[r][0]===`enter`){if(e[r][1].type===`content`){i=r;break}e[r][1].type===`paragraph`&&(a=r)}else e[r][1].type===`content`&&n.add(r,1,[]),!o&&e[r][1].type===`definition`&&(o=r);let s={type:`setextHeading`,start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[a][1].type=`setextHeadingText`,o?(n.add(a,0,[[`enter`,s,t]]),n.add(o+1,0,[[`exit`,e[i][1],t]]),e[i][1].end={...e[o][1].end}):e[i][1]=s,n.add(e.length,0,[[`exit`,s,t]]),n.consume(e),e}function Dr(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),W(t)?K(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||H(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var Or={tokenize:kr};function kr(e){let t=this,n=e.attempt(en,r,e.attempt(this.parser.constructs.flowInitial,i,K(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Dn,i)),`linePrefix`)));return n;function r(r){if(r===null)e.consume(r);else return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null)e.consume(r);else return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var Ar={resolveAll:Pr()},jr=Nr(`string`),Mr=Nr(`text`);function Nr(e){return{resolveAll:Pr(e===`text`?Fr:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null)t.consume(e);else return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function Pr(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):t[r]&&t[r][1].type===`data`||(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function Fr(e,t){let n=new Vt,r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type===`lineEnding`)&&e[r-1][1].type===`data`){let i=e[r-1][1],a=t.sliceStream(i),o=a.length,s=-1,c=0,l;for(;o--;){let e=a[o];if(typeof e==`string`){for(s=e.length;e.charCodeAt(s-1)===32;)c++,s--;if(s)break;s=-1}else if(e===-2)l=!0,c++;else if(e!==-1){o++;break}}if(t._contentTypeTextTrailing&&r===e.length&&(c=0),c){let a={type:r===e.length||l||c<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:o?s:i.start._bufferIndex+s,_index:i.start._index+o,line:i.end.line,column:i.end.column-c,offset:i.end.offset-c},end:{...i.end}};i.end={...a.start},i.start.offset===i.end.offset?Object.assign(i,a):n.add(r,0,[[`enter`,a,t],[`exit`,a,t]])}r++}return n.consume(e),e}var Ir=r({attentionMarkers:()=>Wr,contentInitial:()=>Rr,disable:()=>Gr,document:()=>Lr,flow:()=>Br,flowInitial:()=>zr,insideSpan:()=>Ur,string:()=>Vr,text:()=>Hr}),Lr={42:J,43:J,45:J,48:J,49:J,50:J,51:J,52:J,53:J,54:J,55:J,56:J,57:J,62:nn},Rr={91:In},zr={[-2]:hn,[-1]:hn,32:hn},Br={35:Hn,42:gr,45:[Tr,gr],60:qn,61:Tr,95:gr,96:pn,126:pn},Vr={38:ln,92:sn},Hr={[-5]:mr,[-4]:mr,[-3]:mr,33:ur,38:ln,42:Jt,60:[Qt,Qn],91:fr,92:[Bn,sn],93:er,95:Jt,96:yn},Ur={null:[Jt,Ar]},Wr={null:[42,95]},Gr={null:[]};function Kr(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:C(x),check:C(S),consume:v,enter:y,exit:b,interrupt:C(S,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=R(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=qt(a,l.events,l),l.events):[]}function f(e,t){return Jr(p(e),t)}function p(e){return qr(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,E()}function g(){for(;r._index<o.length;){let e=o[r._index];if(typeof e==`string`){let t=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===t&&r._bufferIndex<e.length;)_(e.charCodeAt(r._bufferIndex))}else _(e)}}function _(e){u=u(e)}function v(e){H(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&L(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function qr(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function Jr(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function Yr(e){let t={constructs:Et([Ir,...(e||{}).extensions||[]]),content:n(zt),defined:[],document:n(Ut),flow:n(Or),lazy:{},string:n(jr),text:n(Mr)};return t;function n(e){return n;function n(n){return Kr(t,e,n)}}}function Xr(e){for(;!Tn(e););return e}var Zr=/[\0\t\n\r]/g;function Qr(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i));let s=[],c=0;for(t=``,n&&=(i.charCodeAt(0)===65279&&c++,void 0);c<i.length;){Zr.lastIndex=c;let n=Zr.exec(i),a=n&&n.index!==void 0?n.index:i.length,o=i.charCodeAt(a);if(!n){t=i.slice(c);break}if(o===10&&c===a&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),c<a&&(s.push(i.slice(c,a)),e+=a-c),o){case 0:s.push(65533),e++;break;case 9:{let t=Math.ceil(e/4)*4;for(s.push(-2);e++<t;)s.push(-1);break}case 10:s.push(-4),e=1;break;default:r=!0,e=1}c=a+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var $r=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ei(e){return e.replace($r,ti)}function ti(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return kt(n.slice(t?2:1),t?16:10)}return wt(n)||e}var ni={}.hasOwnProperty;function ri(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),ii(n)(Xr(Yr(n).document().write(Qr()(e,t,!0))))}function ii(e){let t={afterExit:[],beforeEnter:[],transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:o(be),autolinkProtocol:E,autolinkEmail:E,atxHeading:o(ge),blockQuote:o(de),characterEscape:E,characterReference:E,codeFenced:o(fe),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(fe,s),codeText:o(pe,s),codeTextData:E,data:E,codeFlowValue:E,definition:o(me),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(he),hardBreakEscape:o(_e),hardBreakTrailing:o(_e),htmlFlow:o(ve,s),htmlFlowData:E,htmlText:o(ve,s),htmlTextData:E,image:o(ye),label:s,link:o(be),listItem:o(Se),listItemValue:p,listOrdered:o(xe,f),listUnordered:o(xe),paragraph:o(Ce),reference:ie,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(ge),strong:o(we),thematicBreak:o(Ee)},exit:{atxHeading:l(),atxHeadingSequence:S,autolink:l(),autolinkEmail:ue,autolinkProtocol:le,blockQuote:l(),characterEscapeValue:D,characterReferenceMarkerHexadecimal:oe,characterReferenceMarkerNumeric:oe,characterReferenceValue:se,characterReference:ce,codeFenced:l(_),codeFencedFence:g,codeFencedFenceInfo:m,codeFencedFenceMeta:h,codeFlowValue:D,codeIndented:l(v),codeText:l(M),codeTextData:D,data:D,definition:l(),definitionDestinationString:x,definitionLabelString:y,definitionTitleString:b,emphasis:l(),hardBreakEscape:l(k),hardBreakTrailing:l(k),htmlFlow:l(A),htmlFlowData:D,htmlText:l(j),htmlTextData:D,image:l(ee),label:F,labelText:P,lineEnding:O,link:l(N),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:ae,resourceDestinationString:te,resourceTitleString:ne,resource:re,setextHeading:l(T),setextHeadingLineSequence:w,setextHeadingText:C,strong:l(),thematicBreak:l()}};ai(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[],position:void 0},o={stack:[r],tokenStack:[],config:t,enter:c,exit:u,buffer:s,resume:d,data:n},l=[],f=[],p=-1;for(;++p<e.length;)f.push(e[p]),(e[p][1].type===`listOrdered`||e[p][1].type===`listUnordered`)&&(e[p][0]===`enter`?l.push(f.length-1):a(f,l.pop()));for(e=f,p=-1;++p<e.length;){let n=t[e[p][0]];e[p][0]===`enter`&&t.beforeEnter.length>0&&i(t.beforeEnter,{...o,sliceSerialize:e[p][2].sliceSerialize},e[p][1]),ni.call(n,e[p][1].type)&&n[e[p][1].type].call({...o,sliceSerialize:e[p][2].sliceSerialize},e[p][1]),e[p][0]===`exit`&&t.afterExit.length>0&&i(t.afterExit,{...o,sliceSerialize:e[p][2].sliceSerialize},e[p][1])}if(o.tokenStack.length>0){let e=o.tokenStack[o.tokenStack.length-1];(e[1]||si).call(o,void 0,e[0])}for(r.position={start:Y(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:Y(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},p=-1;++p<t.transforms.length;)r=t.transforms[p](r)||r;return r}function i(e,t,n){let r=-1;for(;++r<e.length;)e[r].call(t,n)}function a(e,t){let n=e.length-1,r=t-1,i=-1,a=!1,o,s,c,l,u=[];for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let n=r;for(s=void 0;n--;){let t=e[n];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=n}else if(t[1].type!==`linePrefix`&&t[1].type!==`blockQuotePrefix`&&t[1].type!==`blockQuotePrefixWhitespace`&&t[1].type!==`blockQuoteMarker`&&t[1].type!==`listItemIndent`)break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),u.push({at:s||r,event:[`exit`,o,t[2]]})}if(t[1].type===`listItemPrefix`){let e={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=e,u.push({at:r,event:[`enter`,e,t[2]]}),c=void 0,l=!0}}}let d=e.splice(t),f=0;for(r=-1;++r<d.length;){for(;f<u.length&&u[f].at===t+r;)e.push(u[f++].event);e.push(d[r])}e[t][1]._spread=a}function o(e,t){return n;function n(n){c.call(this,e(n),n),t&&t.call(this,n)}}function s(){this.stack.push({type:`fragment`,children:[]})}function c(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:Y(t.start),end:void 0}}function l(e){return t;function t(t){e&&e.call(this,t),u.call(this,t)}}function u(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(!r)throw Error("Cannot close `"+e.type+"` ("+Le({start:e.start,end:e.end})+`): it’s not open`);r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||si).call(this,e,r[0])),n.position.end=Y(e.end)}function d(){return yt(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function p(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function h(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function g(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function v(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function y(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=z(this.sliceSerialize(e)).toLowerCase()}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function x(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function S(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function C(){this.data.setextHeadingSlurpLineEnding=!0}function w(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function T(){this.data.setextHeadingSlurpLineEnding=void 0}function E(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];n&&n.type===`text`||(n=Te(),n.position={start:Y(e.start),end:void 0},t.push(n)),this.stack.push(n)}function D(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=Y(e.end)}function O(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=Y(e.end),this.data.atHardBreak=void 0}else!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(E.call(this,e),D.call(this,e))}function k(){this.data.atHardBreak=!0}function A(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function j(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function M(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function N(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function ee(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function P(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=ei(t),n.identifier=z(t).toLowerCase()}function F(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function te(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function ne(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function re(){this.data.inReference=void 0}function ie(){this.data.referenceType=`collapsed`}function ae(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=z(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function oe(e){this.data.characterReferenceType=e.type}function se(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=kt(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=wt(t);let i=this.stack[this.stack.length-1];i.value+=r}function ce(e){let t=this.stack.pop();t.position.end=Y(e.end)}function le(e){D.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function ue(e){D.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function de(){return{type:`blockquote`,children:[],position:void 0}}function fe(){return{type:`code`,lang:null,meta:null,value:``,position:void 0}}function pe(){return{type:`inlineCode`,value:``,position:void 0}}function me(){return{type:`definition`,identifier:``,label:null,title:null,url:``,position:void 0}}function he(){return{type:`emphasis`,children:[],position:void 0}}function ge(){return{type:`heading`,depth:0,children:[],position:void 0}}function _e(){return{type:`break`,position:void 0}}function ve(){return{type:`html`,value:``,position:void 0}}function ye(){return{type:`image`,title:null,url:``,alt:null,position:void 0}}function be(){return{type:`link`,title:null,url:``,children:[],position:void 0}}function xe(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[],position:void 0}}function Se(e){return{type:`listItem`,spread:e._spread,checked:null,children:[],position:void 0}}function Ce(){return{type:`paragraph`,children:[],position:void 0}}function we(){return{type:`strong`,children:[],position:void 0}}function Te(){return{type:`text`,value:``,position:void 0}}function Ee(){return{type:`thematicBreak`,position:void 0}}}function Y(e){return{line:e.line,column:e.column,offset:e.offset}}function ai(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?ai(e,r):oi(e,r)}}function oi(e,t){let n;for(n in t)if(ni.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`afterExit`:case`beforeEnter`:{let r=t[n];r&&e[n].push(r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function si(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+Le({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Le({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+Le({start:t.start,end:t.end})+`) is still open`)}function ci(e){let t=this;t.parser=n;function n(n){return ri(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}function li(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function ui(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function di(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function fi(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function pi(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function mi(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=Lt(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function hi(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function gi(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function _i(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function vi(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return _i(e,t);let i={src:Lt(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function yi(e,t){let n={src:Lt(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function bi(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function xi(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return _i(e,t);let i={href:Lt(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Si(e,t){let n={href:Lt(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ci(e,t,n){let r=e.all(t),i=n?wi(n):Ti(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function wi(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Ti(n[r])}return t}function Ti(e){return e.spread??e.children.length>1}function Ei(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function Di(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Oi(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function ki(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ai(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Pe(t.children[1]),o=Ne(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function ji(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Mi(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var Ni=9,Pi=32;function Fi(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(Ii(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(Ii(t.slice(i),i>0,!1)),a.join(``)}function Ii(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===Ni||t===Pi;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===Ni||t===Pi;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function Li(e,t){let n={type:`text`,value:Fi(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Ri(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var zi={blockquote:li,break:ui,code:di,delete:fi,emphasis:pi,footnoteReference:mi,heading:hi,html:gi,imageReference:vi,image:yi,inlineCode:bi,linkReference:xi,link:Si,listItem:Ci,list:Ei,paragraph:Di,root:Oi,strong:ki,table:Ai,tableCell:Mi,tableRow:ji,text:Li,thematicBreak:Ri,toml:Bi,yaml:Bi,definition:Bi,footnoteDefinition:Bi};function Bi(){}var{defineProperty:Vi}=Object,Hi=typeof self==`object`?self:globalThis,Ui=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new Hi[e](t)},Wi=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o){let i=r(t),a=r(n);i===`__proto__`?Vi(e,i,{value:a,configurable:!0,enumerable:!0,writable:!0}):e[i]=a}return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(typeof Hi[e]==`function`?Ui(e,t):Error(t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}case`-0`:return-0}return n(Ui(a,o),i)};return r},Gi=e=>Wi(new Map,e)(0),Ki=``,{toString:qi}={},{keys:Ji,is:Yi}=Object,Xi=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=qi.call(e).slice(8,-1);switch(n){case`Array`:return[1,Ki];case`Object`:return[2,Ki];case`Date`:return[3,Ki];case`RegExp`:return[4,Ki];case`Map`:return[5,Ki];case`Set`:return[6,Ki];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:e instanceof Error?[7,e.name||`Error`]:[2,n]},Zi=([e,t])=>e===0&&(t===`function`||t===`symbol`),Qi=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=o=>{if(n.has(o))return n.get(o);let[s,c]=Xi(o);switch(s){case 0:{let t=o;switch(c){case`bigint`:s=8,t=o.toString();break;case`number`:if(!o&&Yi(o,-0))return r.push([`-0`])-1;break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+c);t=null;break;case`undefined`:return i([-1],o)}return i([s,t],o)}case 1:{if(c){let e=o;return c===`DataView`?e=new Uint8Array(o.buffer):c===`ArrayBuffer`&&(e=new Uint8Array(o)),i([c,[...e]],o)}let e=[],t=i([s,e],o);for(let t of o)e.push(a(t));return t}case 2:{if(c)switch(c){case`BigInt`:return i([c,o.toString()],o);case`Boolean`:case`Number`:case`String`:return i([c,o.valueOf()],o)}if(t&&`toJSON`in o)return a(o.toJSON());let n=[],r=i([s,n],o);for(let t of Ji(o))(e||!Zi(Xi(o[t])))&&n.push([a(t),a(o[t])]);return r}case 3:return i([s,isNaN(o.getTime())?Ki:o.toISOString()],o);case 4:{let{source:e,flags:t}=o;return i([s,{source:e,flags:t}],o)}case 5:{let t=[],n=i([s,t],o);for(let[n,r]of o)(e||!(Zi(Xi(n))||Zi(Xi(r))))&&t.push([a(n),a(r)]);return n}case 6:{let t=[],n=i([s,t],o);for(let n of o)(e||!Zi(Xi(n)))&&t.push(a(n));return n}}let{message:l}=o;return i([s,{name:c,message:l}],o)};return a},$i=(e,{json:t,lossy:n}={})=>{let r=[];return Qi(!(t||n),!!t,new Map,r)(e),r},ea=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?Gi($i(e,t)):structuredClone(e):(e,t)=>Gi($i(e,t));function ta(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function na(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function ra(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||ta,r=e.options.footnoteBackLabel||na,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=Lt(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...ea(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var ia=(function(e){if(e==null)return la;if(typeof e==`function`)return ca(e);if(typeof e==`object`)return Array.isArray(e)?aa(e):oa(e);if(typeof e==`string`)return sa(e);throw Error(`Expected function, string, or object as test`)});function aa(e){let t=[],n=-1;for(;++n<e.length;)t[n]=ia(e[n]);return ca(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function oa(e){let t=e;return ca(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function sa(e){return ca(t);function t(t){return t&&t.type===e}}function ca(e){return t;function t(t,n,r){return!!(ua(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function la(){return!0}function ua(e){return typeof e==`object`&&!!e&&`type`in e}function da(e){return e}var fa=[],pa=`skip`;function ma(e,t,n,r){if(!e||typeof e!=`object`)throw Error("Unexpected value `"+e+"` for `tree`, expected node");let i=!0,a,o,s,c;if(typeof n==`function`||n&&typeof n==`object`?(a=t,o=n,r&&(i=!1)):(o=t,n&&(i=!1)),typeof o==`function`)s=o;else if(o&&typeof o==`object`){if(o.enter!==null&&o.enter!==void 0){if(typeof o.enter==`function`)s=o.enter;else throw Error("Unexpected value `"+o.enter+"` for `visitors.enter`, expected optional visitor")}if(typeof o.exit==`function`)c=o.exit;else throw Error("Unexpected value `"+o.exit+"` for `visitors.exit`, expected visitor (pass a visitor directly if you only want an enter visitor)")}else throw Error("Unexpected value `"+o+"` for `enter` or `visitors`, expected visitor or object with visitors");let l=ia(a),u=i?1:-1;d(e,void 0,[])();function d(e,t,n){let r=e&&typeof e==`object`?e:{};if(typeof r.type==`string`){let t=typeof r.tagName==`string`?r.tagName:typeof r.name==`string`?r.name:void 0;Object.defineProperty(o,"name",{value:`node (`+da(e.type+(t?`<`+t+`>`:``))+`)`})}return o;function o(){let r=!a||l(e,t,n[n.length-1]||void 0),o=fa;if(s&&r&&(o=ha(s(e,n,t)),o[0]===!1))return o;if(`children`in e&&e.children){let t=e;if(t.children&&o[0]!==`skip`){let e=(i?-1:t.children.length)+u,r=[...n,t];for(;e>-1&&e<t.children.length;){let n=t.children[e],i=d(n,e,r)();if(i[0]===!1)return i;e=typeof i[1]==`number`?i[1]:e+u}}}if(c&&r){let r=ha(c(e,n,t));if(r[0]===`skip`)throw Error("Unexpected value `"+r[0]+"` from `exit`, expected `CONTINUE`, `EXIT`, index, or nothing");if(r[0]===!1||typeof r[1]==`number`)return r}return o}}}function ha(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?fa:[e]}function ga(e,t,n,r){let i,a,o;typeof n==`function`||n&&typeof n==`object`?(i=t,a=n,o=r):(a=t,o=n),typeof a==`function`?ma(e,i,va(a),o):ma(e,i,_a(a),o)}function _a(e){return!e||typeof e!=`object`?e:{enter:typeof e.enter==`function`?va(e.enter):e.enter,exit:typeof e.exit==`function`?va(e.exit):e.exit}}function va(e){return t;function t(t,n,r){return e(t,r,n[n.length-1])}}var ya={}.hasOwnProperty,ba={};function xa(e,t){let n=t||ba,r=new Map,i=new Map,a={all:s,applyData:Ca,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...zi,...n.handlers},one:o,options:n,patch:Sa,wrap:Ta};return ga(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(ya.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=ea(n);return r.children=a.all(e),r}return ea(e)}return(a.options.unknownHandler||wa)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=Ea(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=Ea(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function Sa(e,t){e.position&&(t.position=Ie(e))}function Ca(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,ea(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function wa(e,t){let n=t.data||{},r=`value`in t&&!(ya.call(n,`hProperties`)||ya.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ta(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function Ea(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Da(e,t){let n=xa(e,t),r=n.one(e,void 0),i=ra(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function Oa(e,t){return e&&`run`in e?async function(n,r){let i=Da(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Da(n,{file:r,...e||t})}}function ka(e){if(e)throw e}var Aa=t(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function ja(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Ma(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a)r(a);else{for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?Na(s,i)(...o):r(null,...o)}}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function Na(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var X={basename:Pa,dirname:Fa,extname:Ia,join:La,sep:`/`};function Pa(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);Ba(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function Fa(e){if(Ba(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function Ia(e){Ba(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}}else n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function La(...e){let t=-1,n;for(;++t<e.length;)Ba(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:Ra(n)}function Ra(e){Ba(e);let t=e.codePointAt(0)===47,n=za(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function za(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(i!==o-1&&a!==1){if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1}i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function Ba(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var Va={cwd:Ha};function Ha(){return`/`}function Ua(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function Wa(e){if(typeof e==`string`)e=new URL(e);else if(!Ua(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return Ga(e)}function Ga(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var Ka=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],qa=class{constructor(e){let t;t=e?Ua(e)?{path:e}:typeof e==`string`||Za(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:Va.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<Ka.length;){let e=Ka[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)Ka.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?X.basename(this.path):void 0}set basename(e){Ya(e,`basename`),Ja(e,`basename`),this.path=X.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?X.dirname(this.path):void 0}set dirname(e){Xa(this.basename,`dirname`),this.path=X.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?X.extname(this.path):void 0}set extname(e){if(Ja(e,`extname`),Xa(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=X.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){Ua(e)&&(e=Wa(e)),Ya(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?X.basename(this.path,this.extname):void 0}set stem(e){Ya(e,`stem`),Ja(e,`stem`),this.path=X.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new I(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function Ja(e,t){if(e&&e.includes(X.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+X.sep+"`")}function Ya(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function Xa(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function Za(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Qa=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),$a=l(Aa(),1),eo={}.hasOwnProperty,to=new class e extends Qa{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Ma()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,$a.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(io(`data`,this.frozen),this.namespace[e]=t,this):eo.call(this.namespace,e)&&this.namespace[e]||void 0:e?(io(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=so(e),n=this.parser||this.Parser;return no(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),no(`process`,this.parser||this.Parser),ro(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=so(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);lo(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),no(`processSync`,this.parser||this.Parser),ro(`processSync`,this.compiler||this.Compiler),this.process(e,r),oo(`processSync`,`process`,t),n;function r(e,r){t=!0,ka(e),n=r}}run(e,t,n){ao(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=so(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),oo(`runSync`,`run`,n),r;function i(e,t){ka(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=so(t),r=this.compiler||this.Compiler;return ro(`stringify`,r),ao(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(io(`use`,this.frozen),e!=null){if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`")}return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`){if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e)}else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,$a.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null){if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];ja(o)&&ja(r)&&(r=(0,$a.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function no(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function ro(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function io(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ao(e){if(!ja(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function oo(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function so(e){return co(e)?e:new qa(e)}function co(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function lo(e){return typeof e==`string`||uo(e)}function uo(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Z=e(),fo=s(),po=[],mo={allowDangerousHtml:!0},ho=/^(https?|ircs?|mailto|xmpp)$/i,go=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`className`,id:`remove-classname`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function _o(e){let t=vo(e),n=yo(e);return bo(t.runSync(t.parse(n),n),e)}function vo(e){let t=e.rehypePlugins||po,n=e.remarkPlugins||po,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...mo}:mo;return to().use(ci).use(n).use(Oa,r).use(t)}function yo(e){let t=e.children||``,n=new qa;return typeof t==`string`?n.value=t:``+t,n}function bo(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||xo;for(let e of go)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return ga(e,l),Je(e,{Fragment:Z.Fragment,components:i,ignoreInvalidStyle:!0,jsx:Z.jsx,jsxs:Z.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in _t)if(Object.hasOwn(_t,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=_t[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function xo(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||ho.test(e.slice(0,t))?e:``}function So(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function Co(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}function wo(e,t,n){let r=ia((n||{}).ignore||[]),i=To(t),a=-1;for(;++a<i.length;)ma(e,o);function o(e,t,n){if(e.type===`text`&&typeof n==`number`)return s(e,t,n);if(r(e,n,t[t.length-1]))return pa}function s(e,t,n){let r=t[t.length-1],o=i[a][0],s=i[a][1],c=0,l=!1,u=[];o.lastIndex=0;let d=o.exec(e.value);for(;d;){let n=d.index,r={index:d.index,input:d.input,stack:[...t,e]},i=s(...d,r);if(typeof i==`string`&&(i=i.length>0?{type:`text`,value:i}:void 0),i===!1)o.lastIndex=n+1;else{if(c!==n&&f({type:`text`,value:e.value.slice(c,n)}),Array.isArray(i))for(let e of i)f(e);else i&&f(i);c=n+d[0].length,l=!0}if(!o.global)break;d=o.exec(e.value)}return l?(c<e.value.length&&f({type:`text`,value:e.value.slice(c)}),r.children.splice(n,1,...u)):u=[e],n+u.length;function f(e){let t=u[u.length-1];t&&t.type===`text`&&e.type===`text`?t.value+=e.value:u.push(e)}}}function To(e){if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let t=[],n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([Eo(e[0]),Do(e[1])])}return t}function Eo(e){return typeof e==`string`?new RegExp(Co(e),`g`):e}function Do(e){return typeof e==`function`?e:function(){return e}}var Oo=`phrasing`,ko=[`autolink`,`link`,`image`,`label`];function Ao(){return{transforms:[Ro],enter:{literalAutolink:Mo,literalAutolinkEmail:No,literalAutolinkHttp:No,literalAutolinkWww:No},exit:{literalAutolink:Lo,literalAutolinkEmail:Io,literalAutolinkHttp:Po,literalAutolinkWww:Fo}}}function jo(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:Oo,notInConstruct:ko},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:Oo,notInConstruct:ko},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:Oo,notInConstruct:ko}]}}function Mo(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function No(e){this.config.enter.autolinkProtocol.call(this,e)}function Po(e){this.config.exit.autolinkProtocol.call(this,e)}function Fo(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function Io(e){this.config.exit.autolinkEmail.call(this,e)}function Lo(e){this.exit(e)}function Ro(e){wo(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,zo],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Bo]],{ignore:[`link`,`linkReference`]})}function zo(e,t,n,r,i){let a=``;if(!Uo(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!Vo(n)))return!1;let o=Ho(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function Bo(e,t,n,r){return!Uo(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function Vo(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Ho(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=So(e,`(`),a=So(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function Uo(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||It(n)||Ft(n))&&(!t||n!==47)}$o.peek=Qo;function Wo(){this.buffer()}function Go(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function Ko(){this.buffer()}function qo(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function Jo(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=z(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Yo(e){this.exit(e)}function Xo(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=z(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Zo(e){this.exit(e)}function Qo(){return`[`}function $o(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function es(){return{enter:{gfmFootnoteCallString:Wo,gfmFootnoteCall:Go,gfmFootnoteDefinitionLabelString:Ko,gfmFootnoteDefinition:qo},exit:{gfmFootnoteCallString:Jo,gfmFootnoteCall:Yo,gfmFootnoteDefinitionLabelString:Xo,gfmFootnoteDefinition:Zo}}}function ts(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:$o},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?rs:ns))),s(),o}}function ns(e,t,n){return t===0?e:rs(e,t,n)}function rs(e,t,n){return(n?``:`    `)+e}var is=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`];ls.attention=us,ls.peek=ds;function as(){return{canContainEols:[`delete`],enter:{strikethrough:ss},exit:{strikethrough:cs}}}function os(){return{handlers:{delete:ls},unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:is}]}}function ss(e){this.enter({type:`delete`,children:[],position:void 0},e)}function cs(e){this.exit(e)}function ls(e,t,n,r){let i=n.createTracker(r),a=n.stack.includes(`strikethrough`)?`~`:`~~`,o=n.enter(`strikethrough`),s=i.move(a);return s+=n.containerPhrasing(e,{...i.current(),before:s,after:`~`}),s+=i.move(a),o(),s}function us(){return{construct:`strikethrough`,markers:[`~`],sizes:[2,1]}}function ds(){return`~`}function fs(e){return e.length}function ps(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||fs,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=ms(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=hs(r[d]);else{let e=hs(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u],r=n.fillRows===!1?Math.max(1,o[u===1?0:u].length):l;d=-1;let i=[];for(;++d<r;){let o=e[d]||``,s=``,l=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];if(n===114)s=` `.repeat(e);else if(n===99){let t=e/2;e%2?(s=` `.repeat(t+.5),l=` `.repeat(t-.5)):(s=` `.repeat(t),l=s)}else l=` `.repeat(e)}n.delimiterStart!==!1&&!d&&i.push(`|`),n.padding===!1||n.alignDelimiters===!1&&o===``||n.delimiterStart===!1&&!d||i.push(` `),n.alignDelimiters!==!1&&i.push(s),i.push(o),n.alignDelimiters!==!1&&i.push(l),n.padding!==!1&&i.push(` `),(n.delimiterEnd!==!1||d!==r-1)&&i.push(`|`)}m.push(n.delimiterEnd===!1?i.join(``).replace(/ +$/,``):i.join(``))}return m.join(`
`)}function ms(e){return e==null?``:String(e)}function hs(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}var gs=ia([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`]);function _s(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),vs);return i(),o}function vs(e,t,n){return`>`+(n?``:` `)+e}function ys(e,t){return bs(e,t.inConstruct,!0)&&!bs(e,t.notInConstruct,!1)}function bs(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function xs(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;){let e=n.unsafe[i];if(e.character===`
`&&!e.before&&!e.after&&ys(n.stack,e))return/[\t ]/.test(r.before)?``:` `}return`\\
`}function Ss(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function Cs(e,t){return!(t.options.fences!==!1||!e.value||e.lang||!/[^\n\r ]/.test(e.value)||/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(e.value))}function ws(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Ts(e,t,n,r){let i=ws(n),a=e.value||``;if(Cs(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,Es);return e(),t}let o=n.createTracker(r),s=i.repeat(Math.max(Ss(a,i)+1,3)),c=n.enter(`codeFenced`),l=i==="`"?`GraveAccent`:`Tilde`,u=o.move(s);if(e.lang){let t=n.enter(`codeFencedLang${l}`);u+=o.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...o.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${l}`);u+=o.move(` `),u+=o.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...o.current()})),t()}return u+=o.move(`
`),a&&(u+=o.move(a+`
`)),u+=o.move(s),c(),u}function Es(e,t,n){return(n?``:`    `)+e}function Ds(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Os(e,t,n,r){let i=Ds(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}function ks(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function As(e){let t=e.codePointAt(0);return t===void 0?``:String.fromCodePoint(t)}function js(e){let t=e.codePointAt(e.length-2);return t!==void 0&&t>65535?e.slice(-2):e.slice(-1)}function Ms(e){return`&#x`+e.toString(16).toUpperCase()+`;`}function Ns(e,t,n){let r=q(e),i=q(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}function Ps(e){if(e.charCodeAt(0)!==60)return;let t=e.charCodeAt(1);if(t===33){let t=e.charCodeAt(2);return t===45?2:t===91?5:B(t)?4:void 0}if(t===63)return 3;let n=t===47,r=n?2:1,i=r,a=e.charCodeAt(i);if(!B(a))return;for(;a===45||V(a);)a=e.charCodeAt(++i);let o=e.slice(r,i).toLowerCase();return!n&&a!==47&&Kn.includes(o)?1:Gn.includes(o)?6:7}var Fs=new Map([[`*`,!1],[`_`,!0]]);function Is(e,t,n){let r=new Set;for(let i of e){let e=n.get(i);if(e&&i.attention&&t.some(e=>e.attention===i.attention))for(let t of e.tokens)r.add(t.attention)}let i=[];for(let t of e)t.attention&&r.delete(t.attention)&&i.push(t.attention);return i.reverse(),i}function Ls(e,t,n){let r=[],i=new Map,a=new Map,o=0;for(;o<e.length;){if(!e[o].attention){o++;continue}let s=e[o].value.charAt(0),c=Fs.get(s),l=o+1;for(;l<e.length&&e[l].attention&&e[l].value.charAt(0)===s;)l++;let u=o?e[o-1].value:t,d=q(u.charCodeAt(u.length-1)),f=q((l<e.length?e[l].value:n).charCodeAt(0)),p=!f||f===2&&!!d,m=!d||d===2&&!!f,h={tokens:e.slice(o,l),markers:[],start:0,end:0,open:c?p&&(!!d||!m):p,close:c?m&&(!!f||!p):m,split:c!==void 0};for(let e of h.tokens){i.set(e,[...h.tokens]),a.set(e,h);let t=e.value.length;for(;t--;)h.markers.push(e)}h.end=h.markers.length,r.push(h),o=l}for(Bs(r,i),o=-1;++o<e.length;){let t=i.get(e[o]);if(t)return{attention:Is(e,t,a),index:o}}}function Rs(e,t){let n=e[t?0:e.length-1];if(!n||n.attention)return;let r=t?As(n.value):js(n.value),i=Ms(r.codePointAt(0));if(t)n.value=i+n.value.slice(r.length);else{let e=n.value.slice(0,n.value.length-r.length),t=0;for(;e.charCodeAt(e.length-1-t)===92;)t++;t%2&&(e+=`\\`),n.value=e+i}}function zs(e,t,n,r,i){for(let a of n.attention){let o=t.get(a)||a.sequences[0];for(let s of a.sequences){if(s===o)continue;let c=new Map(t);c.set(a,s);let l=Ws(e,c,r,i),u=Ls(l,r,i);if(!u||u.index>n.index)return{chosen:c,mistake:u,tokens:l}}}}function Bs(e,t){let n=new Map;for(let r of e){let e=r.tokens[0].value.charAt(0),i=n.get(e);i||(i=[],n.set(e,i));let a=r.close?i.length:0;for(;a--&&r.start<r.end;){let e=i[a],n=e.end-e.start,o=r.end-r.start;if(r.split?(e.close||r.open)&&o%3&&!((n+o)%3):n!==e.markers.length||n!==o)continue;let s=r.split?n>1&&o>1?2:1:o,c=e.markers.slice(e.end-s,e.end),l=r.markers.slice(r.start,r.start+s),u=c[0],d=l[0];if(u===c[s-1]&&u.value.length===s&&d===l[s-1]&&d.value.length===s&&u.attention===d.attention)t.delete(u),t.delete(d);else{let e=[...new Set([...c,...l])];for(let n of e){let r=t.get(n);r&&r.push(...e)}}e.end-=s,r.start+=s,e.start===e.end&&i.splice(a,1),a=i.length}r.open&&r.start<r.end&&i.push(r)}}function Vs(e,t,n){if(t.length===0)throw Error("Cannot serialize `"+e+"` as attention without markers, expected one or more markers");if(n.length===0)throw Error("Cannot serialize `"+e+"` as attention without sizes, expected one or more sizes");for(let t of n)if(!Number.isSafeInteger(t)||t<1)throw Error("Cannot serialize `"+e+"` as attention with `"+t+"` as size, expected positive integer");let r=[];for(let i of t){if(i.length!==1)throw Error("Cannot serialize `"+e+"` as attention with `"+i+"` as marker, expected a single ascii character");if(!Pt(i.charCodeAt(0)))throw Error("Cannot serialize `"+e+"` as attention with `"+i+"` as marker, expected ascii punctuation");for(let e of n)r.push(i.repeat(e))}return r}function Hs(e,t,n){let r=t.indexStack,i=e.children||[],a=[],o=-1,s=n.before;r.push(-1);let c=t.createTracker(n);for(;++o<i.length;){let l=i[o],u;if(r[r.length-1]=o,o+1<i.length){let n=t.handle.handlers[i[o+1].type];n&&n.peek&&(n=n.peek),u=n?As(n(i[o+1],e,t,{before:``,after:``,...c.current()})):``}else u=n.after;let d=a[a.length-1];typeof d==`string`&&(s===`\r`||s===`
`)&&l.type===`html`&&Ps(l.value)!==7&&(a[a.length-1]=d.replace(/(\r?\n|\r)$/,` `),s=` `,c=t.createTracker(n),c.move(Gs(a,n.before,n.after)));let f=t.handle.handlers[l.type];if(f&&f.attention){let e=Us(l,f.attention,t,c);a.push(e),s=js(e.sequences[0])}else{let n=t.handle(l,e,t,{...c.current(),after:u,before:s});if(!n)continue;c.move(n),a.push(n),s=js(n)}}return r.pop(),a}function Us(e,t,n,r){let{construct:i,markers:a,sizes:o}=t(e,n),s=Vs(e.type,a,o),c=s[0],l=n.enter(i);r.move(c);let u=Hs(e,n,{...r.current(),before:c,after:c});return r.move(Gs(u,c,c)),r.move(c),l(),{children:u,sequences:s}}function Ws(e,t,n,r){let i=[],a,o=js(n),s=-1;for(;++s<e.length;){let n=e[s];if(typeof n==`string`){let e={value:n,attention:void 0};a&&a===As(n)&&Rs([e],!0),a=void 0,i.push(e),e.value&&(o=js(e.value));continue}let c=t.get(n)||n.sequences[0],l=c.charAt(0),u=e[s+1],d=o,f=As(u===void 0?r:typeof u==`string`?u:t.get(u)||u.sequences[0]),p=Ws(n.children,t,c,c),m=p.length>0?p[0].value:``,h=Ns(d.charCodeAt(d.length-1),m.charCodeAt(0),l);h.inside&&Rs(p,!0);let g=p.length>0?js(p[p.length-1].value):``,_=Ns(f.charCodeAt(0),g.charCodeAt(g.length-1),l);_.inside&&Rs(p,!1),h.outside&&d!==`
`&&d!==`\r`&&Rs(i,!1),_.outside&&(a=f),i.push({value:c,attention:n},...p,{value:c,attention:n}),o=c.charAt(c.length-1)}return i}function Gs(e,t,n){let r=new Map,i=Ws(e,r,t,n),a=i,o=Ls(a,t,n);for(;o;){let s=zs(e,r,o,t,n);if(!s){a=i;break}r=s.chosen,a=s.tokens,o=s.mistake}let s=``;for(let e of a)s+=e.value;return s}Ks.attention=qs,Ks.peek=Js;function Ks(e,t,n,r){let i=n.enter(`phrasing`),a=Gs([Us(e,qs,n,n.createTracker(r))],r.before,r.after);return i(),a}function qs(e,t){return{construct:`emphasis`,markers:ks(t)===`*`?[`*`,`_`]:[`_`,`*`],sizes:[1]}}function Js(e,t,n){return n.options.emphasis||`*`}function Ys(e,t){let n=!1;return ga(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&yt(e)&&(t.options.setext||n))}function Xs(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(Ys(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()}),u=l.charCodeAt(0);return(u===9||u===32)&&(l=Ms(u)+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}Zs.peek=Qs;function Zs(e){return e.value||``}function Qs(){return`<`}$s.peek=ec;function $s(e,t,n,r){let i=Ds(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function ec(){return`!`}tc.peek=nc;function tc(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=u.filter(function(e){return e!==`phrasing`}),o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function nc(){return`!`}rc.peek=ic;function rc(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^\n\r ]/.test(r)&&(/^[\n\r ]/.test(r)&&/[\n\r ]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e);if(!e.atBreak)continue;let i;for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function ic(){return"`"}function ac(e,t){let n=yt(e);return!(t.options.resourceLink||!e.url||e.title||!e.children||e.children.length!==1||e.children[0].type!==`text`||n!==e.url&&`mailto:`+n!==e.url||!/^[a-z][+\-.a-z]+:/i.test(e.url)||/[\0- <>\u007F]/.test(e.url))}oc.peek=sc;function oc(e,t,n,r){let i=Ds(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r);if(ac(e,n)){let t=n.stack;n.stack=t.filter(function(e){return e!==`phrasing`});let r=n.enter(`autolink`),i=o.move(`<`);return i+=o.move(n.containerPhrasing(e,{before:i,after:`>`,...o.current()})),i+=o.move(`>`),r(),n.stack=t,i}let s=n.enter(`link`),c=n.enter(`label`),l=o.move(`[`),u=n.containerPhrasing(e,{before:l,after:`](`,...o.current()});l+=o.move(u),c(),l+=o.move(`](`);let d=/[\0- \u007F]/.test(e.url),f=r.before.charAt(r.before.length-1),p=e.title||void 0;if(!p&&!d&&(f===`
`||f===`\r`)){let e=0;for(;e<u.length&&u.charCodeAt(e)!==93;)e+=u.charCodeAt(e)===92?2:1;u.charCodeAt(e+1)===58&&(p=``)}return!e.url&&typeof p==`string`||d?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:typeof p==`string`?` `:`)`,...o.current()}))),c(),typeof p==`string`&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(p,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function sc(e,t,n){return ac(e,n)?`<`:`[`}cc.peek=lc;function cc(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=u.filter(function(e){return e!==`phrasing`}),o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function lc(){return`[`}function uc(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function dc(e){let t=uc(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function fc(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function pc(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function mc(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?fc(n):uc(n),s=e.ordered?o===`.`?`)`:`.`:dc(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if(o!==`*`&&o!==`-`||!t||t.children&&t.children[0]||n.stack[n.stack.length-1]!==`list`||n.stack[n.stack.length-2]!==`listItem`||n.stack[n.stack.length-3]!==`list`||n.stack[n.stack.length-4]!==`listItem`||n.indexStack[n.indexStack.length-1]!==0||n.indexStack[n.indexStack.length-2]!==0||n.indexStack[n.indexStack.length-3]!==0||(c=!0),pc(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function hc(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function gc(e,t,n,r){let i=hc(n),a=n.bulletCurrent||uc(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}function _c(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}function vc(e,t,n,r){if(!e.children.some(function(e){return gs(e)}))return n.containerFlow(e,r);let i=n.enter(`phrasing`),a=n.containerPhrasing(e,r);return i(),a}function yc(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}bc.attention=xc,bc.peek=Sc;function bc(e,t,n,r){let i=n.enter(`phrasing`),a=Gs([Us(e,xc,n,n.createTracker(r))],r.before,r.after);return i(),a}function xc(e,t){return{construct:`strong`,markers:yc(t)===`*`?[`*`,`_`]:[`_`,`*`],sizes:[2]}}function Sc(e,t,n){return n.options.strong||`*`}function Cc(e,t,n,r){let i=t?t.children:[],a=n.indexStack[n.indexStack.length-1];return n.safe(e.value,{...r,afterNode:i[a+1],beforeNode:i[a-1]})}function wc(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Tc(e,t,n){let r=(pc(n)+(n.options.ruleSpaces?` `:``)).repeat(wc(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Ec={blockquote:_s,break:xs,code:Ts,definition:Os,emphasis:Ks,hardBreak:xs,heading:Xs,html:Zs,image:$s,imageReference:tc,inlineCode:rc,link:oc,linkReference:cc,list:mc,listItem:gc,paragraph:_c,root:vc,strong:bc,text:Cc,thematicBreak:Tc};function Dc(){return{enter:{table:Oc,tableData:Mc,tableHeader:Mc,tableRow:Ac},exit:{codeText:Nc,table:kc,tableData:jc,tableHeader:jc,tableRow:jc}}}function Oc(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[],position:void 0},e),this.data.inTable=!0}function kc(e){this.exit(e),this.data.inTable=void 0}function Ac(e){this.enter({type:`tableRow`,children:[],position:void 0},e)}function jc(e){this.exit(e)}function Mc(e){this.enter({type:`tableCell`,children:[],position:void 0},e)}function Nc(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Pc));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function Pc(e,t){return t===`|`?t:e}function Fc(e){let{tableCellPadding:t,tablePipeAlign:n,stringLength:r}=e||{},i=t?` `:`|`;return{handlers:{inlineCode:d,table:a,tableCell:s,tableRow:o},join:[Ic],unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}]};function a(e,t,n,r){let i=l(e,n,r),a=i[0];if(a){let t=e.align?e.align.length:0,n=-1;if(!t)for(;++n<i.length;)i[n].length>t&&(t=i[n].length);for(;a.length<t;)a.push(``)}return c(i,e.align)}function o(e,t,n,r){let i=c([u(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function s(e,t,n,r){let a=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:i,after:i});return o(),a(),s}function c(e,i){return ps(e,{align:i,alignDelimiters:n,fillRows:!1,padding:t,stringLength:r})}function l(e,t,n){let{children:r}=e,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=u(r[i],t,n);return o(),a}function u(e,t,n){let{children:r}=e,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=s(r[i],e,t,n);return o(),a}function d(e,t,n){let r=Ec.inlineCode(e,t,n);if(!n.stack.includes(`tableCell`))return r;let i=[],a=0,o=r.indexOf(`|`);for(;o!==-1;){let e=o;for(;e>a&&r.charCodeAt(e-1)===92;)e--;i.push(r.slice(a,o)),(o-e)%2==0&&i.push(`\\`),a=o,o=r.indexOf(`|`,o+1)}return i.push(r.slice(a)),i.join(``)}}function Ic(e,t,n,r){if(e.type===`table`&&n.type===`listItem`&&n.spread===!1&&(t.type===`definition`||t.type===`heading`&&Lc(t,r)||t.type===`paragraph`||t.type===`table`))return 1}function Lc(e,t){let n=!1;return ga(e,function(e){if(e.type===`break`||`value`in e&&/\r?\n|\r/.test(e.value))return n=!0,!1}),!!((!e.depth||e.depth<3)&&yt(e)&&(t.options.setext||n))}function Rc(){return{exit:{taskListCheckValueChecked:Bc,taskListCheckValueUnchecked:Bc,paragraph:Vc}}}function zc(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:Hc}}}function Bc(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function Vc(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function Hc(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=Ec.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}function Uc(){return[Ao(),es(),as(),Dc(),Rc()]}function Wc(e){return{extensions:[jo(),ts(e),os(),Fc(e),zc()]}}var Gc={tokenize:rl,partial:!0},Kc={tokenize:il,partial:!0},qc={tokenize:al,partial:!0},Jc={tokenize:ol,partial:!0},Yc={tokenize:sl,partial:!0},Xc={name:`wwwAutolink`,tokenize:tl,previous:cl},Zc={name:`protocolAutolink`,tokenize:nl,previous:ll},Q={name:`emailAutolink`,tokenize:el,previous:ul},$={};function Qc(){return{text:$}}for(var $c=48;$c<123;)$[$c]=Q,$c++,$c===58?$c=65:$c===91&&($c=97);$[43]=Q,$[45]=Q,$[46]=Q,$[95]=Q,$[72]=[Q,Zc],$[104]=[Q,Zc],$[87]=[Q,Xc],$[119]=[Q,Xc];function el(e,t,n){let r=this,i,a;return o;function o(t){return!dl(t)||!ul.call(r,r.previous)||fl(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return dl(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(Yc,u,l)(t):t===45||t===95||V(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&B(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function tl(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!cl.call(r,r.previous)||fl(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(Gc,e.attempt(Kc,e.attempt(qc,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function nl(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&ll.call(r,r.previous)&&!fl(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(B(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||jt(t)||U(t)||It(t)||Ft(t)?n(t):e.attempt(Kc,e.attempt(qc,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function rl(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function il(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(Jc,c,s)(t):t===null||U(t)||It(t)||t!==45&&Ft(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function al(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(Jc,t,a)(o):o===null||U(o)||It(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function ol(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||U(o)||It(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||U(e)||It(e)?t(e):r(e)}function a(e){return B(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):B(t)?(e.consume(t),o):n(t)}}function sl(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return V(e)?n(e):t(e)}}function cl(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||U(e)}function ll(e){return!B(e)}function ul(e){return!(e===47||dl(e))}function dl(e){return e===43||e===45||e===46||e===95||V(e)}function fl(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var pl={tokenize:xl,partial:!0};function ml(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:vl,continuation:{tokenize:yl},exit:bl}},text:{91:{name:`gfmFootnoteCall`,tokenize:_l},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:hl,resolveTo:gl}}}}function hl(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=z(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function gl(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function _l(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||U(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(z(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return U(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function vl(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||U(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=z(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return U(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),K(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function yl(e,t,n){return e.check(en,t,e.attempt(pl,t,n))}function bl(e){e.exit(`gfmFootnoteDefinition`)}function xl(e,t,n){let r=this;return K(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}function Sl(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&L(o,o.length,0,qt(s,e.slice(r+1,n),t)),L(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),L(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=q(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=q(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var Cl=class{constructor(){this.map=[],this.index=new Map}add(e,t,n){wl(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0,this.index.clear()}};function wl(e,t,n,r){if(n===0&&r.length===0)return;let i=e.index.get(t);if(i){i[1]+=n,i[2].push(...r);return}let a=[t,n,r];e.map.push(a),e.index.set(t,a)}function Tl(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}function El(){return{flow:{null:{name:`table`,tokenize:Dl,resolveAll:Ol}}}}function Dl(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let{type:e}=r.events[t][1];if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?S:c;return a===S&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124||(o=!0,a+=1),u(e)}function u(t){return t===null?n(t):H(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):W(t)?K(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||U(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,W(t)?K(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),h):x(t)}function h(t){return W(t)?K(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||H(t)?b(t):x(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):x(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return W(t)?K(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||H(n)?!o||i!==a?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function S(t){return e.enter(`tableRow`),C(t)}function C(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),C):n===null||H(n)?(e.exit(`tableRow`),t(n)):W(n)?K(e,C,`whitespace`)(n):(e.enter(`data`),w(n))}function w(t){return t===null||t===124||U(t)?(e.exit(`data`),C(t)):(e.consume(t),t===92?T:w)}function T(t){return t===92||t===124?(e.consume(t),w):w(t)}}function Ol(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new Cl;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(Al(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=kl(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=kl(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=kl(f,t,o,i,n,d)):(o[0]=o[1],d=kl(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&Al(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=Tl(t.events,n))}return e}function kl(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},jl(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=jl(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=jl(t.events,n[2]),a=jl(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},jl(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function Al(e,t,n,r,i){let a=[],o=jl(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function jl(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var Ml={name:`tasklistCheck`,tokenize:Pl};function Nl(){return{text:{91:Ml}}}function Pl(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return U(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return H(r)?t(r):W(r)?e.check({tokenize:Fl},t,n)(r):n(r)}}function Fl(e,t,n){return K(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}function Il(e){return Et([Qc(),ml(),Sl(e),El(),Nl()])}var Ll={};function Rl(e){let t=this,n=e||Ll,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(Il(n)),a.push(Uc()),o.push(Wc(n))}var zl={"architecture/api-specification.yaml":`openapi: 3.0.3
info:
  title: SkillsBridge Local Demo and Reference API
  version: 1.1.0
  description: Local teaching prototype. Synthetic data only. HttpOnly session
    cookie is issued automatically; roles are openly selectable teaching
    controls, not authentication. Logical time in milliseconds. Sessions
    ephemeral.
servers:
  - url: http://localhost:3000
paths:
  /api/taxonomy:
    get:
      description: Read one fixed ESCO reference. Default fixture is offline. live
        attempts a bounded external read, caches for 60s and reports fallback
        explicitly. No input text, URL or employee data accepted.
      responses:
        "200":
          description: Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  mode:
                    type: string
                    enum:
                      - fixture
                      - live
                      - cached
                      - fallback
                  provider:
                    type: string
                    enum:
                      - European Commission ESCO
                  uri:
                    type: string
                    enum:
                      - http://data.europa.eu/esco/skill/744442ac-c157-4350-8be0-ce454df4f5c5
                  label:
                    type: string
                    minLength: 1
                    maxLength: 200
                  language:
                    type: string
                    enum:
                      - en
                  requestedVersion:
                    type: string
                    enum:
                      - v1.2.0
                  effectiveVersionConfirmed:
                    type: boolean
                    enum:
                      - false
                  retrievedAt:
                    type: string
                    format: date-time
                    pattern: ^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:\\.\\d+)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)))$
                  checkedAt:
                    nullable: true
                    type: string
                    format: date-time
                    pattern: ^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:\\.\\d+)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)))$
                  sourceUrl:
                    type: string
                    enum:
                      - https://ec.europa.eu/esco/api/resource/skill?uri=http%3A%2F%2Fdata.europa.eu%2Fesco%2Fskill%2F744442ac-c157-4350-8be0-ce454df4f5c5&language=en&selectedVersion=v1.2.0
                  reason:
                    nullable: true
                    type: string
                  mappingStatus:
                    type: string
                    enum:
                      - reference-only
                required:
                  - mode
                  - provider
                  - uri
                  - label
                  - language
                  - requestedVersion
                  - effectiveVersionConfirmed
                  - retrievedAt
                  - checkedAt
                  - sourceUrl
                  - reason
                  - mappingStatus
                additionalProperties: false
        "400": &a1
          description: Consistent simulator error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
        "403": &a2
          description: Consistent simulator error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
        "404": &a3
          description: Consistent simulator error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
        "409": &a4
          description: Consistent simulator error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
        "413": &a5
          description: Consistent simulator error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
        "429": &a6
          description: Consistent simulator error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
        "500": &a7
          description: Consistent simulator error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
        "503": &a8
          description: Consistent simulator error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
      parameters:
        - name: mode
          in: query
          schema:
            type: string
            enum:
              - fixture
              - live
            default: fixture
  /api/state:
    get:
      description: Read the current isolated demo session; sets sb_session cookie.
      responses:
        "200":
          description: Success
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/State"
        "400": *a1
        "403": *a2
        "404": *a3
        "409": *a4
        "413": *a5
        "429": *a6
        "500": *a7
        "503": *a8
  /api/commands:
    post:
      description: Execute a strict typed command. run creates fixture evidence;
        approve/reject require current revision. role deliberately changes demo
        role. advance drives logical retry eligibility.
      parameters:
        - name: Origin
          in: header
          required: true
          schema:
            type: string
          description: Must match server origin. Required for all mutations.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/Command"
      responses:
        "200":
          description: Updated session state
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/State"
        "400": *a1
        "403": *a2
        "404": *a3
        "409": *a4
        "413": *a5
        "429": *a6
        "500": *a7
        "503": *a8
  /api/simulations/run:
    post:
      description: Import named deterministic fixture.
      parameters:
        - name: Origin
          in: header
          required: true
          schema:
            type: string
          description: Must match server origin. Required for all mutations.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              additionalProperties: false
              required:
                - scenario
              properties:
                scenario:
                  type: string
                  enum:
                    - happy
                    - duplicate
                    - rate-limit
                    - missing-identity
                    - low-confidence
                    - unavailable
                    - taxonomy
                    - unauthorized
                    - stale
      responses:
        "200":
          description: Updated session state
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/State"
        "400": *a1
        "403": *a2
        "404": *a3
        "409": *a4
        "413": *a5
        "429": *a6
        "500": *a7
        "503": *a8
  /api/simulations/reset:
    post:
      description: Admin clears the current demo session.
      parameters:
        - name: Origin
          in: header
          required: true
          schema:
            type: string
          description: Must match server origin. Required for all mutations.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              additionalProperties: false
      responses:
        "200":
          description: Updated session state
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/State"
        "400": *a1
        "403": *a2
        "404": *a3
        "409": *a4
        "413": *a5
        "429": *a6
        "500": *a7
        "503": *a8
  /api/sync:
    post:
      description: Admin synchronizes eligible approved revisions.
      parameters:
        - name: Origin
          in: header
          required: true
          schema:
            type: string
          description: Must match server origin. Required for all mutations.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              additionalProperties: false
      responses:
        "200":
          description: Updated session state
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/State"
        "400": *a1
        "403": *a2
        "404": *a3
        "409": *a4
        "413": *a5
        "429": *a6
        "500": *a7
        "503": *a8
  /api/events:
    get:
      description: Selected fictional source events.
      responses:
        "200":
          description: Success
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Event"
        "400": *a1
        "403": *a2
        "404": *a3
        "409": *a4
        "413": *a5
        "429": *a6
        "500": *a7
        "503": *a8
  /api/skill-suggestions:
    get:
      description: Current skill suggestions.
      responses:
        "200":
          description: Success
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Suggestion"
        "400": *a1
        "403": *a2
        "404": *a3
        "409": *a4
        "413": *a5
        "429": *a6
        "500": *a7
        "503": *a8
  /api/sync-runs:
    get:
      description: Attempt history.
      responses:
        "200":
          description: Success
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    suggestion:
                      type: string
                    status:
                      type: number
                    attempt:
                      type: number
                    at:
                      type: number
                    nextRetry:
                      nullable: true
                      type: number
                  required:
                    - suggestion
                    - status
                    - attempt
                    - at
                    - nextRetry
                  additionalProperties: false
        "400": *a1
        "403": *a2
        "404": *a3
        "409": *a4
        "413": *a5
        "429": *a6
        "500": *a7
        "503": *a8
  /api/integrations:
    get:
      description: Two simulated integrations.
      responses:
        "200":
          description: Success
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  required:
                    - id
                    - name
                    - simulated
                  properties:
                    id:
                      type: string
                    name:
                      type: string
                    simulated:
                      type: boolean
                      enum:
                        - true
                    status:
                      type: string
                      enum:
                        - available
                        - unavailable
                        - rate-limited
        "400": *a1
        "403": *a2
        "404": *a3
        "409": *a4
        "413": *a5
        "429": *a6
        "500": *a7
        "503": *a8
  /api/metrics:
    get:
      description: Snapshot measures; ratio values are null for empty denominators.
      responses:
        "200":
          description: Success
          content:
            application/json:
              schema:
                type: object
                additionalProperties: false
                required:
                  - received
                  - unique
                  - duplicatesPrevented
                  - pendingReview
                  - writes
                  - syncSuccessRate
                  - acceptanceRate
                  - rejectionRate
                  - mappingFailureRate
                  - recoveryRate
                  - evidenceCoverage
                  - reviewRequiredRate
                  - reviewed
                  - attempts
                properties:
                  received:
                    type: number
                    nullable: false
                  unique:
                    type: number
                    nullable: false
                  duplicatesPrevented:
                    type: number
                    nullable: false
                  pendingReview:
                    type: number
                    nullable: false
                  writes:
                    type: number
                    nullable: false
                  syncSuccessRate:
                    type: number
                    nullable: true
                  acceptanceRate:
                    type: number
                    nullable: true
                  rejectionRate:
                    type: number
                    nullable: true
                  mappingFailureRate:
                    type: number
                    nullable: true
                  recoveryRate:
                    type: number
                    nullable: true
                  evidenceCoverage:
                    type: number
                    nullable: true
                  reviewRequiredRate:
                    type: number
                    nullable: true
                  reviewed:
                    type: number
                    nullable: false
                  attempts:
                    type: number
                    nullable: false
        "400": *a1
        "403": *a2
        "404": *a3
        "409": *a4
        "413": *a5
        "429": *a6
        "500": *a7
        "503": *a8
components:
  schemas:
    Command:
      oneOf:
        - type: object
          properties:
            action:
              type: string
              enum:
                - run
            scenario:
              type: string
              enum:
                - happy
                - duplicate
                - rate-limit
                - missing-identity
                - low-confidence
                - unavailable
                - taxonomy
                - unauthorized
                - stale
          required:
            - action
            - scenario
          additionalProperties: false
        - type: object
          properties:
            action:
              type: string
              enum:
                - approve
            id:
              type: string
            revision:
              type: integer
              minimum: 0
              exclusiveMinimum: true
              maximum: 9007199254740991
          required:
            - action
            - id
            - revision
          additionalProperties: false
        - type: object
          properties:
            action:
              type: string
              enum:
                - reject
            id:
              type: string
            revision:
              type: integer
              minimum: 0
              exclusiveMinimum: true
              maximum: 9007199254740991
          required:
            - action
            - id
            - revision
          additionalProperties: false
        - type: object
          properties:
            action:
              type: string
              enum:
                - sync
          required:
            - action
          additionalProperties: false
        - type: object
          properties:
            action:
              type: string
              enum:
                - recover
          required:
            - action
          additionalProperties: false
        - type: object
          properties:
            action:
              type: string
              enum:
                - advance
            seconds:
              type: integer
              minimum: 1
              maximum: 60
          required:
            - action
            - seconds
          additionalProperties: false
        - type: object
          properties:
            action:
              type: string
              enum:
                - resolve-identity
            id:
              type: string
          required:
            - action
            - id
          additionalProperties: false
        - type: object
          properties:
            action:
              type: string
              enum:
                - role
            role:
              type: string
              enum:
                - viewer
                - reviewer
                - admin
          required:
            - action
            - role
          additionalProperties: false
        - type: object
          properties:
            action:
              type: string
              enum:
                - reset
          required:
            - action
          additionalProperties: false
    State:
      type: object
      properties:
        scenario:
          nullable: true
          type: string
          enum:
            - happy
            - duplicate
            - rate-limit
            - missing-identity
            - low-confidence
            - unavailable
            - taxonomy
            - unauthorized
            - stale
        role:
          type: string
          enum:
            - viewer
            - reviewer
            - admin
        clock:
          type: number
        deliveries:
          type: number
        duplicates:
          type: number
        events:
          type: array
          items:
            type: object
            properties:
              id:
                type: string
                minLength: 1
                maxLength: 80
              version:
                type: integer
                minimum: 0
                exclusiveMinimum: true
                maximum: 9007199254740991
              sourceUser:
                type: string
                minLength: 1
                maxLength: 80
              title:
                type: string
                minLength: 1
                maxLength: 200
              resolution:
                type: string
                minLength: 1
                maxLength: 500
              category:
                type: string
                enum:
                  - network
                  - incident
                  - unknown
            required:
              - id
              - version
              - sourceUser
              - title
              - resolution
              - category
            additionalProperties: false
        suggestions:
          type: array
          items:
            type: object
            properties:
              id:
                type: string
              eventId:
                type: string
              revision:
                type: integer
                minimum: -9007199254740991
                maximum: 9007199254740991
              employee:
                nullable: true
                type: string
              skill:
                type: string
              confidence:
                type: number
                minimum: 0
                maximum: 1
              evidence:
                type: string
              review:
                type: string
                enum:
                  - pending
                  - approved
                  - rejected
              approvedRevision:
                nullable: true
                type: number
              sync:
                type: string
                enum:
                  - pending
                  - blocked
                  - synced
                  - failed
              issue:
                nullable: true
                type: string
              attempts:
                type: integer
                minimum: -9007199254740991
                maximum: 9007199254740991
              nextRetry:
                type: number
              recovered:
                type: boolean
            required:
              - id
              - eventId
              - revision
              - employee
              - skill
              - confidence
              - evidence
              - review
              - approvedRevision
              - sync
              - issue
              - attempts
              - nextRetry
              - recovered
            additionalProperties: false
        audit:
          type: array
          items:
            type: object
            properties:
              seq:
                type: integer
                minimum: -9007199254740991
                maximum: 9007199254740991
              at:
                type: number
              type:
                type: string
              subject:
                type: string
              detail:
                type: string
              actor:
                type: string
                enum:
                  - viewer
                  - reviewer
                  - admin
            required:
              - seq
              - at
              - type
              - subject
              - detail
              - actor
            additionalProperties: false
        writes:
          type: array
          items:
            type: object
            properties:
              key:
                type: string
              employee:
                type: string
              skill:
                type: string
              revision:
                type: number
              at:
                type: number
            required:
              - key
              - employee
              - skill
              - revision
              - at
            additionalProperties: false
        runs:
          type: array
          items:
            type: object
            properties:
              suggestion:
                type: string
              status:
                type: number
              attempt:
                type: number
              at:
                type: number
              nextRetry:
                nullable: true
                type: number
            required:
              - suggestion
              - status
              - attempt
              - at
              - nextRetry
            additionalProperties: false
        destination:
          type: string
          enum:
            - available
            - unavailable
            - rate-limited
      required:
        - scenario
        - role
        - clock
        - deliveries
        - duplicates
        - events
        - suggestions
        - audit
        - writes
        - runs
        - destination
      additionalProperties: false
    Error:
      type: object
      properties:
        error:
          type: object
          properties:
            code:
              type: string
            message:
              type: string
          required:
            - code
            - message
          additionalProperties: false
      required:
        - error
      additionalProperties: false
    Event:
      type: object
      properties:
        id:
          type: string
          minLength: 1
          maxLength: 80
        version:
          type: integer
          minimum: 0
          exclusiveMinimum: true
          maximum: 9007199254740991
        sourceUser:
          type: string
          minLength: 1
          maxLength: 80
        title:
          type: string
          minLength: 1
          maxLength: 200
        resolution:
          type: string
          minLength: 1
          maxLength: 500
        category:
          type: string
          enum:
            - network
            - incident
            - unknown
      required:
        - id
        - version
        - sourceUser
        - title
        - resolution
        - category
      additionalProperties: false
    Suggestion:
      type: object
      properties:
        id:
          type: string
        eventId:
          type: string
        revision:
          type: integer
          minimum: -9007199254740991
          maximum: 9007199254740991
        employee:
          nullable: true
          type: string
        skill:
          type: string
        confidence:
          type: number
          minimum: 0
          maximum: 1
        evidence:
          type: string
        review:
          type: string
          enum:
            - pending
            - approved
            - rejected
        approvedRevision:
          nullable: true
          type: number
        sync:
          type: string
          enum:
            - pending
            - blocked
            - synced
            - failed
        issue:
          nullable: true
          type: string
        attempts:
          type: integer
          minimum: -9007199254740991
          maximum: 9007199254740991
        nextRetry:
          type: number
        recovered:
          type: boolean
      required:
        - id
        - eventId
        - revision
        - employee
        - skill
        - confidence
        - evidence
        - review
        - approvedRevision
        - sync
        - issue
        - attempts
        - nextRetry
        - recovered
      additionalProperties: false
`,"architecture/data-contracts.md":`# Data contracts
These are fictional SkillsBridge contracts, not authentic ServiceNow or Workday schemas. Executable definitions: lib/engine/contracts.ts. HTTP specification: api-specification.yaml.

## Source event
\`{ id, version, sourceUser, title, resolution, category }\`. ID/user strings ≤80 characters; title ≤200; resolution ≤500; version positive integer; category network/incident/unknown. Strict validation rejects unexpected fields. Retain selected fields only. Evidence text is trimmed for suggestion generation; the selected source payload preserves provenance.

## Suggestion
\`{ id, eventId, revision, employee, skill, confidence, evidence, review, approvedRevision, sync, issue, attempts, nextRetry, recovered }\`.
Review states pending/approved/rejected. Sync states pending/blocked/synced/failed. Revision equals source version. Approval must equal current revision. A pending sync state does not mean it is approved or eligible.

The category maps to a single suggested skill. Resolution containing both case-sensitive “Diagnosed” and “tested” produces .86; otherwise .34. This deliberately simple heuristic is not calibrated probability, an AI model or validated competency. A reviewer may still reject high scores or accept contextualized low scores. Both require an explicit decision.

## Destination operation
\`{ key, employee, skill, revision, at }\` records a fictional upsert. \`at\` and retry timestamps are milliseconds on a simulated clock starting at zero. No proficiency score is written.

## Audit and API errors
Audit entries contain sequence, logical time, type, subject, detail and simulated actor. Denials append an audit record without changing review state. Errors are \`{ error: { code, message } }\` with 400 validation, 403 policy/origin, 404 missing, 409 conflict, 413 oversized, 429 demo limit or 503 capacity. No stack traces returned.
`,"architecture/external-taxonomy-adapter.md":`# Genuine ESCO reference adapter

## Purpose and boundary
Inspect one official vocabulary reference during integration design. A genuine external API call demonstrates contract handling without requiring enterprise credentials. This is not a ServiceNow/Workday connector and does not validate the business proposition.

GET /api/taxonomy?mode=fixture (default) returns a recorded provider observation without network access. mode=live performs a bounded server-side request to one hard-coded Commission endpoint. No arbitrary URL, search term, event, employee ID, evidence text or credential is accepted. Unknown/duplicate query parameters return a consistent 400 error.

Provider URI: http://data.europa.eu/esco/skill/744442ac-c157-4350-8be0-ce454df4f5c5. English preferred label: “perform ICT troubleshooting”. Request selectedVersion=v1.2.0 explicitly. Because the response does not confirm the effective version, expose that uncertainty. The public overview's listed available versions and footer are not fully aligned.

## Validation and failure policy
Validate URI, className=Skill and nonempty bounded English label. Reject redirects, unexpected content types, invalid JSON, mismatched concepts and bodies exceeding 64KB. Abort the fetch after five seconds. Cache a successful response and coalesce concurrent requests. Apply a 60-second process-local cooldown after success/failure; no background retries. Hosted distributed quotas are not guaranteed by this local mechanism.

| Mode | Meaning |
|---|---|
| fixture | Recorded official reference, no live request, original retrieval timestamp |
| live | Validated provider response retrieved on this request |
| cached | Prior successful response reused; original retrieval time retained |
| fallback | Attempt failed or cooldown active; recorded reference retained with a visible reason |

Fallback must never appear as live. Endpoint errors do not mutate review or sync state. Tests use injected responses and fake time; CI makes no live ESCO calls. A separate local observation records a genuine external request.

## Mapping governance
This concept is broader than Northstar's network-specific label. Semantic equivalence, taxonomy coverage and destination crosswalk are unvalidated. Reference mode cannot approve a suggestion, resolve an unsupported destination skill or bypass human review. Destination HR-NET-01 remains fictional.

## Provenance and reuse
lib/adapters/esco-reference.json and research/esco-observation.json contain the minimal label/URI metadata, request URL, retrieval timestamp and response SHA-256. No full bulk taxonomy is redistributed. Official ESCO legal/reuse terms apply; no certification or endorsement is implied.

\`\`\`mermaid
sequenceDiagram
  actor Reviewer
  participant UI as Launch center
  participant API as Fixed reference adapter
  participant ESCO as Commission ESCO API
  Reviewer->>UI: Check live reference
  UI->>API: GET taxonomy mode=live
  API->>ESCO: Fixed URI / language / requested version
  alt Valid bounded response
    ESCO-->>API: Skill concept
    API-->>UI: live or cached + original retrieval time
  else Timeout / failure / drift
    API-->>UI: recorded fallback + explicit reason
  end
  Note over UI,API: No employee data, approval or destination mutation
\`\`\`
`,"architecture/failure-scenarios.md":`# Failure scenarios
| ID | Injection | Expected behavior / verification |
|---|---|---|
| A | Duplicate delivery | One event and suggestion; duplicate audit; at most one write |
| B | 429 | Retry-After 5s minimum; no early attempt; max three attempts then failed |
| C | Missing identity | Block review approval/sync; explicit admin resolution; renew review |
| D | Low-confidence evidence | Score .34; pending review; rejection permits no write |
| E | 503 unavailable | Retain approved work; backoff 1s/2s; restore + advance + sync delivers once |
| F | Unknown taxonomy | Flag mapping; block approval and destination update; no guessing |
| G | Viewer approval | 403, review state unchanged, denial audit with viewer actor |
| H | Evidence revision after approval | Invalidate approval; reject old review revision; re-review before sync |

Reproduce from the control-center scenario selector or governance Inject Failure. Each scenario is covered in tests/engine.test.ts. Browser tests exercise happy, outage recovery, rejection and unauthorized review. Tests do not establish real provider compatibility or durability across restarts.
`,"architecture/identity-mapping.md":`# Employee identity mapping
\`\`\`mermaid
flowchart TD
  A[Validated sourceUser] --> B{Explicit mapping exists?}
  B -- Yes --> C[Attach synthetic employee ID]
  B -- No --> D[Block approval and synchronization]
  D --> E[Admin verifies mapping outside automation]
  E --> F[Demo: map to EMP-1043]
  F --> G[Require new human review]
  C --> G
\`\`\`

Names and email similarity are not used. Missing mapping is an exception, not an invitation to guess. The demo resolution is a deliberately named synthetic action; it does not implement an enterprise identity registry. In production, the architect must validate tenant scoping, leavers, contractors, rehires, merge behavior and changes in source identities. HR owns authoritative identity; product defines the safe exception outcome; engineering selects implementation with the architect.
`,"architecture/integration-blueprint.md":`# Integration blueprint
## End-to-end flow
\`\`\`mermaid
flowchart LR
  A[Selected incident / version] --> B[Validate and deduplicate]
  B --> C[Trim evidence fields]
  C --> D[Exact employee mapping]
  D --> E[Rule-based skill suggestion]
  E --> F[Human review current revision]
  F --> G[Skills data layer: approved suggestion]
  G --> H[Destination taxonomy mapping]
  H --> I[Idempotent simulated HR write]
  I --> J[Audit and metrics]
\`\`\`

The local skills layer is the typed suggestion collection, not a separate service. Source identity maps sn-1042 → EMP-1042 and sn-1043 → EMP-1043. An unresolved identity is blocked; the admin can explicitly demonstrate resolution to EMP-1043. Network troubleshooting maps to HR-NET-01; Incident management to HR-INC-02. Unknown taxonomy remains blocked with no invented mapping.

## Synchronization semantics
Source deduplication uses event ID + monotonically increasing version. Same-version changed content is rejected; old revisions are ignored with an audit error. Destination key is employee:taxonomySkill:event:revision. Repeated sync skips successful items. Writes are an immutable operation history; a new evidence revision can create a new approved upsert to the same conceptual employee/skill. Real destination merge semantics are not implemented.

503 uses exponential delays 1s then 2s, maximum three attempts. 429 uses max(exponential delay, 5s Retry-After). Operator advances the logical clock and explicitly retries. There is no wall-clock scheduler or durable queue. Unmapped, rejected, pending, stale or exhausted records cannot write.

## Security and governance
Only synthetic records. Same-origin POST, HttpOnly SameSite cookie and session-scoped state prevent accidental cross-session mutation. Runtime responses are schema validated. Demo role selection is intentionally open and is not authentication. Audit is in memory and not tamper resistant. Production requires SSO, scoped permissions, tenant isolation, encrypted durable storage, secret management, access reviews, retention/deletion policy and privacy review. No legal compliance is asserted.

## External vocabulary reference
A user-triggered ESCO read is outside the evidence-to-write authority chain. GET /api/taxonomy defaults to a recorded reference; live mode validates a fixed concept with a five-second timeout, bounded body and manual redirect rejection. Failure is labeled fallback and does not change review or sync state. Effective provider version remains unconfirmed. See external-taxonomy-adapter.md.
`,"architecture/partner-assessment.md":`# Partner integration assessment
Decision owner: Product Owner; technical assessment: Integration Architect; approval for data access: customer system owner and Security/HR governance. These are proposed responsibilities, not actual appointed people.

| Dimension | ServiceNow source | Fictional HR destination | ESCO reference |
|---|---|---|---|
| Business job | Selected incident evidence | Approved skill update | Inspect a related vocabulary concept |
| Access | Authorized developer tenant absent | Local simulator only | Anonymous public read-only endpoint observed |
| Contract | Real Table API context researched; tenant schema unverified | Fictional strict local schema | Fixed Skill URI, English label and class verified |
| Identity | Source user to authoritative employee ID must be reconciled | Synthetic employee IDs | No employee identifier transmitted |
| Versions | Agree release, selected fields and change notice | v1 local contract; source revision bounds approval | Request selectedVersion=v1.2.0; response does not confirm effective version |
| Reliability | Validate pagination, ACL visibility, incremental cursor and limits | Three bounded command-driven attempts; local idempotency | Five-second timeout, 64KB streamed bound, redirect rejection, one request/60s per process |
| Operations | Need support owner, error budget and replay runbook | Observable attempts/audit; no durable recovery | Explicit recorded/cached/live/fallback mode |
| Mapping | Work attribution must be validated | Two fictional taxonomy mappings; unknown blocks | Related reference only; no approved crosswalk or automatic write |
| Decision | Defer external adapter until tenant access and purpose agreed | Retain for reliable offline demonstration | Implement narrow read-only reference boundary |

## ServiceNow access spike before commitment
1. Customer IT creates least-privilege credentials in an authorized non-production instance; secrets stay server-side and outside Git/chat.
2. Select only synthetic permitted records. Confirm actual incident fields, closure states, user references, pagination order and ACL effects with the owner.
3. Document source cursor semantics, deletions, rehires and changed attribution. Compare event revisions to actual provider change markers; do not infer equality.
4. Verify 429/Retry-After, expired credentials, schema changes and duplicate pages. Agree rate budget and a bounded replay policy.
5. Agree acceptance examples and the decision to stop, reduce fields or partner instead. No connector may be called complete from a static mocked payload alone.

## Destination spike
Before any real write, establish field semantics, source-of-truth ownership, upsert keys, concurrent updates, revoked approval and remote correction/retraction. A lost acknowledgement after remote commit needs provider idempotency or reconciliation. The local operation-key guarantee does not prove remote exactly-once delivery.
`,"architecture/sequence-diagrams.md":`# Interaction sequences
## Approved update
\`\`\`mermaid
sequenceDiagram
  actor Admin
  participant UI
  participant API
  participant Engine
  participant HR as HR Simulator
  Admin->>UI: Run scenario
  UI->>API: POST command(run)
  API->>Engine: Validate, ingest, map, suggest
  Engine-->>UI: Pending review + audit
  Admin->>UI: Inspect and approve current revision
  UI->>API: POST command(approve, id, revision)
  API->>Engine: Check role, mapping, revision
  Admin->>UI: Synchronize approved
  API->>Engine: Check current approval
  Engine->>HR: Apply operation key once
  HR-->>Engine: 200
  Engine-->>UI: Write, audit and metrics
\`\`\`

## Review lifecycle
\`\`\`mermaid
flowchart TD
  Suggest[Suggestion / evidence revision] --> Pending[Pending human review]
  Pending -->|Authorized / mapped / current| Approved[Approved revision]
  Pending -->|Reject| Rejected[Rejected: no write]
  Approved -->|Current approval + mappings| Sync[Eligible to synchronize]
  Approved -->|Evidence changes| Pending
  Pending -->|Viewer action| Denied[403 + audit / unchanged review]
\`\`\`

## Failure and recovery
\`\`\`mermaid
sequenceDiagram
  actor Admin
  participant Engine
  participant HR as Destination Simulator
  Admin->>Engine: Sync approved revision
  Engine->>HR: Upsert with stable operation key
  HR-->>Engine: 503 or 429 / Retry-After
  Engine->>Engine: Retain approval, log attempt, schedule eligibility
  Admin->>Engine: Restore destination
  Admin->>Engine: Advance logical clock
  Admin->>Engine: Retry sync
  Engine->>HR: Same operation key
  HR-->>Engine: 200
  Engine->>Engine: Record one successful write
  Admin->>Engine: Repeat sync
  Engine-->>Admin: No duplicate write
\`\`\`

Lost acknowledgement after a real remote commit is not modeled. The real adapter would need remote idempotency or reconciliation before retries could make the same guarantee.

## Deployment boundary
\`\`\`mermaid
flowchart LR
  Browser[Browser / session cookie] --> Local[Local Vinext / Vite server]
  Local --> Runtime[API + in-memory state]
  Source[Repository + CI configuration] --> Build[Worker-compatible build]
  Build -. Approval and deployment validation pending .-> Hosted[Proposed Sites hosting]
  Hosted -. Requires durable state and real authentication for production .-> Data[Future persistent service]
\`\`\`

No public deployment is claimed. Generated Worker build is a packaging artifact, not evidence of production service reliability.
`,"architecture/system-overview.md":`# System overview
One application hosts UI, API, domain rules and synthetic source/destination behaviors. There are no real enterprise source/destination connections, background workers or external AI calls. Phase 2 adds one optional genuine ESCO vocabulary reference, isolated from review and write authority.

\`\`\`mermaid
flowchart LR
  Employee[Employee / profile owner] --> Reviewer[Governance reviewer]
  Reviewer --> App[SkillsBridge local prototype]
  Admin[Integration administrator] --> App
  Source[ServiceNow-like simulator] --> App
  App --> HR[Workday-like destination simulator]
  App --> Docs[Product evidence library]
\`\`\`

## Components
\`\`\`mermaid
flowchart TB
  UI[Five-screen React workspace] --> API[App Router API / schema validation]
  API --> Sessions[HttpOnly cookie / bounded in-memory sessions]
  API --> Engine[Typed synchronous domain engine]
  Engine --> Ingest[Validate / normalize / exact identity]
  Ingest --> Suggest[Deterministic rule / provenance]
  Suggest --> Review[Revision-bound human review]
  Review --> Sync[Mapped idempotent destination upsert]
  Sync --> Logs[Audit / attempts / derived metrics]
\`\`\`

The engine uses synchronous transitions inside a session. This avoids interleaving in a local single process, but it is not a distributed transaction. Real integrations need a durable inbox/outbox, version checks and idempotency supported by the destination. Roles are stored server-side but freely selectable through the explicit demo role command. They test policy branching, not identity assurance.

## Phase 2 product surfaces
Decision Lab exposes the opportunity model and evidence links. Launch readiness derives three demonstration observations from session state and lists four unresolved real-pilot prerequisites. The GuidedTour component orchestrates existing typed commands; it never bypasses mandatory review. New React components are separated under components/product. The ESCO adapter is server-only logic; UI imports only the response contract and recorded metadata.
`,"delivery/acceptance-criteria.md":`# Acceptance and working agreements
Story-specific criteria are in user-stories.md; critical acceptance tests are executable in tests/engine.test.ts and tests/api.test.ts. Browser flows are in tests/e2e/demo.spec.ts.

## Definition of Ready
A story has a named persona, observable outcome, boundaries, dependencies, acceptance criteria, failure behavior and a test approach. If a partner contract is unavailable, mark it as fictional rather than accepting an invented schema.

## Definition of Done
Implemented behavior matches the contract; critical tests and typecheck pass; authored source lint and build pass; error/empty/loading states are accounted for; docs reflect limitations; no synthetic result presented as production evidence. External release additionally requires dependency review, deployment validation and authorization.

## Regression invariants
No write for pending/rejected/stale/unmapped evidence. Unauthorized review changes only audit. Duplicate source delivery does not create another suggestion. Repeated successful sync does not duplicate writes. Retry is bounded and time-eligible. Reset clears the current session only. Empty metric denominators remain unavailable.
`,"delivery/backlog.csv":`ID,Persona,Need,Value,Acceptance criteria,Dependencies,Priority,Test considerations,Status
SB-01,HR Product Owner,receive selected incident evidence,make useful work visible,Run happy fixture; strict schema accepted; one event and pending suggestion.,None,P0,Ingestion/fixture test,Implemented locally
SB-02,Integration Architect,normalize selected fields,avoid source formatting leaking into rules,Whitespace trimmed for evidence; event ID/version preserved; unexpected fields rejected.,SB-01,P0,Normalization and contract tests,Implemented locally
SB-03,Integration Architect,match an explicit employee ID,avoid wrong attribution,Known source maps EMP-1042; unknown remains null; no approval/write for unknown.,SB-01,P0,Missing identity test,Implemented locally
SB-04,Integration Administrator,resolve a blocked identity explicitly,restore safe processing,Admin maps synthetic target EMP-1043; review pending; viewer denied.,SB-03,P1,Resolution/authorization tests,Implemented locally
SB-05,Governance Reviewer,inspect skill evidence and provenance,make a reasoned decision,"Show event, revision, evidence and rule score; high/low score both pending.","SB-02,03",P0,Domain and browser happy path,Implemented locally
SB-06,Governance Reviewer,approve the revision I inspected,control which evidence authorizes updates,Mapped pending revision may approve; approvedRevision equals revision; replay of old revision fails.,SB-05,P0,Approval/stale tests,Implemented locally
SB-07,Governance Reviewer,reject weak evidence,keep unreliable claims out of HR,Reject current pending item; rejected item never writes; decision audited.,SB-05,P0,Rejection and browser tests,Implemented locally
SB-08,HR Product Owner,enforce review permissions,prevent unauthorized claims,Viewer approval/rejection returns 403; state unchanged except denial audit.,SB-06,P0,Policy/API/browser denial tests,Implemented locally
SB-09,Governance Reviewer,invalidate approval after evidence changes,avoid outdated authorization,New source revision resets review; sync blocked; old reviewer revision returns conflict.,SB-06,P0,Stale approval test,Implemented locally
SB-10,HR Operations,synchronize approved mapped skills,keep the HR record consistent,Pending/rejected/unmapped/stale do not write; approved valid item creates one operation.,"SB-06,14",P0,Happy path/API integration,Implemented locally
SB-11,Integration Architect,suppress duplicates,avoid repeat updates,Two identical deliveries yield one event/suggestion; repeated sync yields one write.,"SB-01,10",P0,Duplicate/idempotency test,Implemented locally
SB-12,Integration Administrator,respect partner rate limits,recover without overwhelming the destination,"429 schedules max(backoff,5s); no early attempt; at most three attempts.",SB-10,P0,Boundary-time retry test,Implemented locally
SB-13,Integration Administrator,recover from an outage,retain approved work,503 retains approval; restore + eligible clock + sync writes once; failure history retained.,"SB-10,12",P0,Domain and browser recovery,Implemented locally
SB-14,Skills Governance Reviewer,block unsupported taxonomy,avoid inaccurate destination semantics,Unknown category yields unmapped skill; approval/sync blocked with issue.,SB-05,P0,Taxonomy test,Implemented locally
SB-15,HR Product Owner,inspect audit and metrics,evaluate quality honestly,Ordered audit; empty denominator unavailable; 503 then 200 shows 50% attempt success.,"SB-01,10",P1,Audit/metric tests,Implemented locally
SB-16,Presenter,reset my demo session,repeat the demonstration,"Admin reset clears events, suggestions, writes, attempts, audit and metrics; other sessions unchanged.",SB-01,P1,Reset and API session isolation,Implemented locally
SB-17,Integration Administrator,persist an outbox through restarts,avoid losing approved work,Proposed: pending operations survive restart; atomic approval/outbox transition; remote idempotency reconciles lost acknowledgments.,Verified partner contracts,P0 before production,Proposed restart/fault tests,Proposed
SB-18,Security Owner,authenticate and scope enterprise roles,protect real employee data,Proposed: SSO identity maps server permissions; tenant boundary tested; user cannot self-select privileged role.,Pilot governance/access,P0 before production,Proposed auth/tenant penetration tests,Proposed
`,"delivery/phase-2-acceptance.md":`# Phase 2 acceptance and traceability
Implemented increments supplement the original 18-story core backlog; they do not silently mark the proposed outbox/SSO stories complete.

| Story | User outcome | Acceptance / test evidence | Status |
|---|---|---|---|
| SB-19 — Challenge a priority | As a hiring reviewer, inspect how assumptions affect scope | Changing weights recalculates scores; zero weights show no rank score; gated tenant access remains blocked; tests/product.test.ts | Implemented |
| SB-20 — Follow a product decision | As a hiring reviewer, understand the lifecycle in three minutes | Continue disabled until decision input, import, approval, delivery and recovery are actually exercised; exit preserves state; phase2.spec.ts | Implemented |
| SB-21 — Read a real reference safely | As an architect, inspect a public concept without employee data | Fixed URI, validated class/label, timeout/size bounds, cooldown and distinct fixture/live/cache/fallback; esco.test.ts + live observation | Implemented |
| SB-22 — Distinguish demo from launch | As an HR Product Owner, see what still blocks a pilot | Session evidence derives from audit/state; all four external prerequisites stay blocked regardless of demo success; tests/product.test.ts | Implemented |
| SB-23 — Navigate accessibly | As a keyboard/mobile reviewer, inspect evidence and decisions | Focus follows navigation; ranges labeled; tables keyboard-scroll; selected axe scans no detected violations; phase2.spec.ts | Implemented within tested scope |

Dependencies: SB-19 uses public research/explicit estimates; SB-20 relies on the existing core engine; SB-21 requires only anonymous public access and recorded fallback; SB-22 depends on documented pilot ownership; SB-23 retains the design system and tests populated states. Priority: these support portfolio inspection and do not supersede real-data pilot prerequisites.

Release criteria: all relevant local checks pass, docs and screenshots match, actual external observation has provenance, current feature commit pushed and CI status recorded honestly. Public deployment remains outside authorization. Interview/employee validation and full assistive-technology review remain unverified.
`,"delivery/pilot-rollout.md":`# Pilot rollout and stakeholder alignment
This is a proposed plan. No customer agreed it, no pilot is running and no budget is approved.

## Decision rights
| Decision | Accountable | Collaborators | Required evidence |
|---|---|---|---|
| Problem and investment scope | Product Owner | HR owner, Customer Success, employee representatives | Recent workflow observations, alternatives, willingness to pilot |
| Partner contract and architecture | Integration Architect / Engineering lead | Customer IT, Security, Product | Authorized schema/access spike, identity lifecycle and remote write semantics |
| Purpose, review and retention policy | Customer HR governance | Privacy/Security, employee representatives | Agreed use, participation, challenge/correction path and retention decision |
| Release and support handoff | Product Owner + Engineering lead | Customer Success, operator, HR owner | Acceptance results, runbook rehearsal, named on-call/escalation owners |
| Continue / change / stop | Sponsor and Product Owner | Pilot participants and operators | Baseline comparison, usefulness, burden, safety issues and costs |

Product specifies outcomes and safety boundaries; engineering owns the durable implementation and technical estimates. Resolve disagreements by documenting the affected decision, alternatives, owner and time-bounded experiment. Do not arbitrate identity policy with a feature score.

## Staged rollout
1. Discovery: interview HR, architects, employees and reviewers. Observe actual reconciliation and the decisions that consume profiles. Disconfirm the value hypothesis before committing connector work.
2. Contract spike: permitted synthetic records in an authorized tenant; verify identity, taxonomy, versions, access and idempotency/correction semantics. No real HR writes.
3. Shadow pilot: small consented IT group; suggestions reviewed without writes; compare evidence usefulness, decision time and challenge rate. Collect minimal data only after governance approval.
4. Guarded writes: allowlisted population and categories; real authenticated permissions and durable outbox; reconcile every approved update. Pilot sponsor explicitly authorizes the write stage.
5. Expand or stop: compare baseline and actual operational/review costs. Expansion requires useful updates, acceptable trust and a supportable operating model; no portfolio score substitutes for this decision.

## Acceptance and stop criteria
Any wrong-person update, unsupported claim or policy breach pauses writes and triggers reconciliation. Sustained backlog beyond agreed reviewer capacity pauses ingestion. Missing support owner, ambiguous remote correction or failing restart/tenant-boundary tests blocks rollout. Numeric capacity, error budget and benefit thresholds must be negotiated from a measured baseline, not copied from vendor customer stories.

## Communication cadence
Proposed weekly pilot review: what was learned, failed/blocked updates, queue age, employee challenges, workarounds, dependency changes and next decision. Escalation messages identify affected population and safe action without raw employee evidence. End-of-stage note records go/no-go, approver, evidence, residual risks and owner/date for the next checkpoint. None of these messages is sent automatically by the prototype.
`,"delivery/product-backlog.md":`# Prioritized backlog
Use backlog.csv for import; GitHub Issues/Projects were not created. Authentication is available; the importable backlog is the chosen local delivery artifact.

| Epic | Priority | Stories | Outcome |
|---|---|---|---|
| Evidence ingestion | P0 | SB-01,02,03 | Selected validated evidence attached safely |
| Trust and governance | P0 | SB-05,06,07,08,09,14 | No unsafe claim reaches HR |
| Safe delivery | P0 | SB-10,11,12,13 | Approved revision delivered without duplicate local writes |
| Operator workflow | P1 | SB-04,15,16 | Exceptions visible and reproducible |
| Pilot hardening | Proposed P0 before production | SB-17,18 | Durable state and authenticated tenant-scoped actions |

Order reflects prerequisites and safety; RICE compares opportunities, not all low-level tasks. Phase-two implemented behavior is verified separately in the acceptance and browser evidence; enterprise pilot work remains proposed. Backlog capacity and estimates are hypotheses, not a report of an employed team's velocity.
`,"delivery/release-plan.md":`# Release plan
## Local demonstration increment
Product framing and architecture → tested engine and API → six-screen UI → safety and browser validation → case-study evidence. Implementation is one independent, AI-assisted portfolio effort, not a claim of team sprint experience.

## Proposed pilot increments
1. Discovery/access spike: validate use case, permissions, identity and destination semantics; customer governance sign-off.
2. Small-team pilot: durable state, SSO, tenant isolation, consented/minimized data and manual rollback/reconciliation plan.
3. Reliability expansion: failure/load testing, alerting, operational ownership and support playbook.

No fixed date is promised without scope and engineering estimates. If estimates exceed budget, preserve safety and reduce source categories, population or connector breadth.

## Release status
Local source and checks are reported in validation. A private GitHub remote and hosted CI exist. The owner has authorized phase/session pushes; public visibility and deployment remain separate decisions. See the final validation report for the exact checked branch and CI. Rollback for this prototype is reset/restart; real destination rollback and deletion are not implemented.
`,"delivery/support-runbook.md":`# Operational ownership and support runbook
Proposed real-pilot runbook; simulator actions exercise only the labeled local behavior.

| Trigger | First safe action | Responsible collaboration | Resume condition |
|---|---|---|---|
| Wrong identity / employee challenge | Hold affected updates; verify source identity and prior writes | HR governance + architect | Correct attribution, reviewed correction and employee response |
| 429 / temporary outage | Retain approved work; respect eligibility; inspect retry budget | Integration operator + partner support | Provider stable and idempotency/reconciliation verified |
| Retry budget exhausted | Stop blind replay; inspect cause and affected operations | Operator + engineering | Cause resolved; explicit safe replay/reconciliation plan |
| Unsupported taxonomy | Block update; no guessed mapping | Skills governance + HR owner | Approved versioned crosswalk and renewed review |
| Changed evidence after approval | Invalidate pending authorization; inspect any prior writes | Reviewer + governance | Current revision approved; correction/retraction agreed for earlier writes |
| Credential / authorization failure | Stop the connector; no privilege escalation workaround | Security + customer IT | Least-privilege access restored and audited |
| Provider schema/version change | Quarantine invalid payloads and compare supported contract | Architect + engineering + Product | Compatibility test, migration/rollout plan and owners agreed |
| ESCO reference failure | Show recorded fallback; continue synthetic demo | Demo operator | Successful explicit live check or use clearly labeled recorded reference |

Acknowledge incidents using severity based on employee harm and affected scope, not just HTTP status. Agree actual response times and on-call responsibilities before pilot launch. Track detection, containment, reconciliation and prevention actions. The prototype has no real pager, ticket integration or tamper-resistant audit store.

Observe attempt success separately from eventual recovery; monitor queue age, mapping failures, denial events, schema errors and correction workload. Do not optimize suggestion acceptance as a proxy for accuracy. Preserve correlation ID, source/revision and operation key; restrict sensitive evidence to authorized support staff.
`,"delivery/test-strategy.md":`# Test strategy
Use behavior tests at the smallest useful boundary. Unit/domain scenarios cover normalization, identity, suggestion, authorization, revisions, deduplication and retry eligibility. API tests cover request/response schema, isolation, malformed JSON and same-origin mutations. OpenAPI structural validation checks the exported schemas. Browser tests drive actual UI/API state across happy path, outage recovery, rejection and viewer denial; mobile checks verify navigation and document access. Screenshots are artifacts, not assertions of full accessibility compliance.

Static checks: TypeScript strict mode, authored-source oxlint and build. Scaffold component library is retained; unused generated components are excluded from lint, while TypeScript checks the project. This scope is explicit rather than silently changing the starter's library code. CI runs the same checks plus Chromium tests. No remote CI result exists until published.

Meaningful exclusions: real ServiceNow/Workday contract certification, distributed fault tolerance, real authentication, load testing, screen-reader audit and real customer outcomes. These cannot be established with synthetic local fixtures.
`,"delivery/traceability-matrix.md":`# Role traceability
| Job responsibility | Product evidence | Working / validation evidence |
|---|---|---|
| Define integration vision | product/product-vision.md; product-strategy.md | Executive overview |
| Discover customer needs | problem-discovery.md; personas.md; jobs-to-be-done.md | Discovery screen; external validation explicitly pending |
| Assess opportunities and feasibility | opportunity-assessment.md; research/source-register.md | Fictional adapter scope and documented limits |
| Prioritize and manage trade-offs | prioritization.md; decision-log.md | Interactive decision disclosures |
| Translate needs into requirements | product-requirements.md; delivery/user-stories.md | Typed contracts and state machine |
| Communicate architecture | architecture/integration-blueprint.md; sequence-diagrams.md | Control-center pipeline and provenance |
| Understand enterprise APIs / models | data-contracts.md; api-specification.yaml; identity-mapping.md | Strict request validation and mapping blockers |
| Deliver and validate quality | product-backlog.md; release-plan.md; test-strategy.md | Domain/API/browser tests and CI configuration |
| Define measurable outcomes | metrics-framework.md | Event-derived metrics; business impact remains hypothetical |
| Align stakeholders | interview guide; risks-and-assumptions.md | Reviewer/admin role model; proposed pilot decision gates |

Every major component supports a job responsibility; no component proves professional employment experience or customer validation.

## Phase 2 evidence
- Opportunity judgment → Product Decision Lab, phase-2-positioning.md and tests/product.test.ts.
- Partner/engineering collaboration → partner-assessment.md, real ESCO contract and esco.test.ts.
- Rollout and stakeholder ownership → pilot-rollout.md, support-runbook.md and launch center.
- Validation and communication → guided three-minute tour, phase2.spec.ts and phase-2-results.md.
These additions strengthen inspectability; external customer validation and employment experience remain unestablished.
`,"delivery/user-stories.md":`# User stories

Stories SB-01–16 implemented locally; SB-17–18 proposed. Criteria describe observable behavior, not inferred business benefit.

## SB-01 — Receive selected incident evidence
As a HR Product Owner, I want to receive selected incident evidence, so I can make useful work visible.

- Acceptance: Run happy fixture; strict schema accepted; one event and pending suggestion.
- Dependencies: None.
- Priority: P0. Status: Implemented locally.
- Test considerations: Ingestion/fixture test.

## SB-02 — Normalize selected fields
As a Integration Architect, I want to normalize selected fields, so I can avoid source formatting leaking into rules.

- Acceptance: Whitespace trimmed for evidence; event ID/version preserved; unexpected fields rejected.
- Dependencies: SB-01.
- Priority: P0. Status: Implemented locally.
- Test considerations: Normalization and contract tests.

## SB-03 — Match an explicit employee id
As a Integration Architect, I want to match an explicit employee ID, so I can avoid wrong attribution.

- Acceptance: Known source maps EMP-1042; unknown remains null; no approval/write for unknown.
- Dependencies: SB-01.
- Priority: P0. Status: Implemented locally.
- Test considerations: Missing identity test.

## SB-04 — Resolve a blocked identity explicitly
As a Integration Administrator, I want to resolve a blocked identity explicitly, so I can restore safe processing.

- Acceptance: Admin maps synthetic target EMP-1043; review pending; viewer denied.
- Dependencies: SB-03.
- Priority: P1. Status: Implemented locally.
- Test considerations: Resolution/authorization tests.

## SB-05 — Inspect skill evidence and provenance
As a Governance Reviewer, I want to inspect skill evidence and provenance, so I can make a reasoned decision.

- Acceptance: Show event, revision, evidence and rule score; high/low score both pending.
- Dependencies: SB-02,03.
- Priority: P0. Status: Implemented locally.
- Test considerations: Domain and browser happy path.

## SB-06 — Approve the revision i inspected
As a Governance Reviewer, I want to approve the revision I inspected, so I can control which evidence authorizes updates.

- Acceptance: Mapped pending revision may approve; approvedRevision equals revision; replay of old revision fails.
- Dependencies: SB-05.
- Priority: P0. Status: Implemented locally.
- Test considerations: Approval/stale tests.

## SB-07 — Reject weak evidence
As a Governance Reviewer, I want to reject weak evidence, so I can keep unreliable claims out of HR.

- Acceptance: Reject current pending item; rejected item never writes; decision audited.
- Dependencies: SB-05.
- Priority: P0. Status: Implemented locally.
- Test considerations: Rejection and browser tests.

## SB-08 — Enforce review permissions
As a HR Product Owner, I want to enforce review permissions, so I can prevent unauthorized claims.

- Acceptance: Viewer approval/rejection returns 403; state unchanged except denial audit.
- Dependencies: SB-06.
- Priority: P0. Status: Implemented locally.
- Test considerations: Policy/API/browser denial tests.

## SB-09 — Invalidate approval after evidence changes
As a Governance Reviewer, I want to invalidate approval after evidence changes, so I can avoid outdated authorization.

- Acceptance: New source revision resets review; sync blocked; old reviewer revision returns conflict.
- Dependencies: SB-06.
- Priority: P0. Status: Implemented locally.
- Test considerations: Stale approval test.

## SB-10 — Synchronize approved mapped skills
As a HR Operations, I want to synchronize approved mapped skills, so I can keep the HR record consistent.

- Acceptance: Pending/rejected/unmapped/stale do not write; approved valid item creates one operation.
- Dependencies: SB-06,14.
- Priority: P0. Status: Implemented locally.
- Test considerations: Happy path/API integration.

## SB-11 — Suppress duplicates
As a Integration Architect, I want to suppress duplicates, so I can avoid repeat updates.

- Acceptance: Two identical deliveries yield one event/suggestion; repeated sync yields one write.
- Dependencies: SB-01,10.
- Priority: P0. Status: Implemented locally.
- Test considerations: Duplicate/idempotency test.

## SB-12 — Respect partner rate limits
As a Integration Administrator, I want to respect partner rate limits, so I can recover without overwhelming the destination.

- Acceptance: 429 schedules max(backoff,5s); no early attempt; at most three attempts.
- Dependencies: SB-10.
- Priority: P0. Status: Implemented locally.
- Test considerations: Boundary-time retry test.

## SB-13 — Recover from an outage
As a Integration Administrator, I want to recover from an outage, so I can retain approved work.

- Acceptance: 503 retains approval; restore + eligible clock + sync writes once; failure history retained.
- Dependencies: SB-10,12.
- Priority: P0. Status: Implemented locally.
- Test considerations: Domain and browser recovery.

## SB-14 — Block unsupported taxonomy
As a Skills Governance Reviewer, I want to block unsupported taxonomy, so I can avoid inaccurate destination semantics.

- Acceptance: Unknown category yields unmapped skill; approval/sync blocked with issue.
- Dependencies: SB-05.
- Priority: P0. Status: Implemented locally.
- Test considerations: Taxonomy test.

## SB-15 — Inspect audit and metrics
As a HR Product Owner, I want to inspect audit and metrics, so I can evaluate quality honestly.

- Acceptance: Ordered audit; empty denominator unavailable; 503 then 200 shows 50% attempt success.
- Dependencies: SB-01,10.
- Priority: P1. Status: Implemented locally.
- Test considerations: Audit/metric tests.

## SB-16 — Reset my demo session
As a Presenter, I want to reset my demo session, so I can repeat the demonstration.

- Acceptance: Admin reset clears events, suggestions, writes, attempts, audit and metrics; other sessions unchanged.
- Dependencies: SB-01.
- Priority: P1. Status: Implemented locally.
- Test considerations: Reset and API session isolation.

## SB-17 — Persist an outbox through restarts
As a Integration Administrator, I want to persist an outbox through restarts, so I can avoid losing approved work.

- Acceptance: Proposed: pending operations survive restart; atomic approval/outbox transition; remote idempotency reconciles lost acknowledgments.
- Dependencies: Verified partner contracts.
- Priority: P0 before production. Status: Proposed.
- Test considerations: Proposed restart/fault tests.

## SB-18 — Authenticate and scope enterprise roles
As a Security Owner, I want to authenticate and scope enterprise roles, so I can protect real employee data.

- Acceptance: Proposed: SSO identity maps server permissions; tenant boundary tested; user cannot self-select privileged role.
- Dependencies: Pilot governance/access.
- Priority: P0 before production. Status: Proposed.
- Test considerations: Proposed auth/tenant penetration tests.
`,"product/decision-log.md":`# Product decision log
All decisions belong to an independent, AI-assisted portfolio case. Inputs are public research and explicit assumptions.

## ADR-01 — Human review first

**Problem:** Operational activity can be mistaken for expertise.

**Alternatives:** Automatic approval above a score; employee-only confirmation; mandatory reviewer decision.

**Decision:** Mandatory human review for all suggestions.

**Rationale:** Useful learning about trust before automation.

**Benefits:** Visible agency and attributable decisions.

**Trade-offs:** Higher queue cost and potential reviewer inconsistency.

**Risks:** Rubber stamping or queue overload.

**Reconsider when:** Pilot shows high agreement, calibrated evidence and an agreed risk policy.

## ADR-02 — Exact identity mapping

**Problem:** Wrong attribution is more harmful than incomplete coverage.

**Alternatives:** Fuzzy names/email; verified ID table; block all records.

**Decision:** Verified source IDs only; unresolved records block.

**Rationale:** An explicit exception is safer than a confident guess.

**Benefits:** Clear safety boundary and actionable operator work.

**Trade-offs:** Reduced coverage; manual resolution.

**Risks:** Stale mappings or rehire ambiguity.

**Reconsider when:** A real identity authority and lifecycle policies are verified.

## ADR-03 — Batch before real time

**Problem:** Acceptable profile freshness is unknown.

**Alternatives:** Streaming; scheduled daily batch; explicit manual synchronization.

**Decision:** Explicit synchronization for the prototype.

**Rationale:** Makes the approval/delivery boundary observable without a scheduler.

**Benefits:** Simple, repeatable demonstration.

**Trade-offs:** No unattended production freshness guarantee.

**Risks:** Users mistake demo timing for operational latency.

**Reconsider when:** A validated time-sensitive decision justifies event-driven delivery.

## ADR-04 — Deterministic suggestions

**Problem:** No customer evidence justifies model complexity.

**Alternatives:** Paid LLM; taxonomy rules; static pre-approved examples.

**Decision:** Transparent category/keyword heuristic with mandatory review.

**Rationale:** Reproducibility and explainability fit the learning goal.

**Benefits:** No paid API, credentials or unstable outputs.

**Trade-offs:** Low semantic coverage; uncalibrated scores.

**Risks:** Visitor confuses score with accuracy.

**Reconsider when:** A governed labeled sample supports a model evaluation with utility gains.

## ADR-05 — Safety in MVP

**Problem:** Unsafe writes invalidate the core proposition.

**Alternatives:** Defer all reliability; build distributed infrastructure; implement local safeguards.

**Decision:** Local idempotency, bounded retry, role checks and stale approval protection now.

**Rationale:** A minimal safety boundary is part of value, not optional hardening.

**Benefits:** Eight reproducible failure cases.

**Trade-offs:** No durability, remote exactly-once or scale guarantee.

**Risks:** Prototype safeguards overgeneralized to production.

**Reconsider when:** A pilot requires durable storage, SSO and partner-aware retry semantics.

## ADR-06 — Ephemeral local sessions

**Problem:** Need a focused prototype without enterprise infrastructure.

**Alternatives:** Browser-only state; local server sessions; persistent database.

**Decision:** Bounded server sessions; keep publication pending authorization.

**Rationale:** Exercise real API transitions with session isolation and minimal setup.

**Benefits:** Repeatable local demonstration and clear reset.

**Trade-offs:** Restart loses state; unsuitable for multi-isolate production.

**Risks:** Accidental reliance on persistence.

**Reconsider when:** Public pilot or real user work requires persistent storage.

## ADR-07 — Demonstrate the lifecycle, not a vendor feature gap
**Problem:** Existing copy could be read as proposing missing TechWolf integration/validation functionality.
**Alternatives:** Compete on connector breadth; claim validation novelty; center the PM lifecycle.
**Decision:** Show Discovery → Assessment → Prioritization → Design → Delivery → Validation → Launch Readiness.
**Rationale and benefit:** Public references already describe integrations and employee validation; product ownership is the defensible portfolio contribution.
**Trade-off and risk:** Less “novel feature” positioning; customer demand remains unvalidated.
**Reconsider when:** Real discovery identifies a distinct underserved workflow, without assuming an incumbent lacks it.
**Evidence:** [Public context](../research/source-register.md), [positioning](phase-2-positioning.md), [adversarial review](../review/phase-2-audit.md).

## ADR-08 — Use sensitivity analysis with gates
**Problem:** A static RICE table hides uncertainty and prerequisites.
**Alternatives:** More precise-looking scores; a hypothetical ROI simulator; explicit weighted sensitivity.
**Decision:** Interactive ratings and normalized weights, with access gates overriding ranking.
**Benefit:** Hiring reviewers can challenge reasoning and inspect assumptions.
**Trade-off and risk:** Weights remain subjective; do not confuse rank changes with customer validation.
**Reconsider when:** User tests show scores distract from missing evidence; simplify to qualitative comparison.
**Evidence:** lib/product/opportunities.ts, tests/product.test.ts; [scope assessment](../review/phase-2-audit.md).

## ADR-09 — One real public reference, reliable offline core
**Problem:** Enterprise credentials are unavailable, but purely fictional contracts limit external-integration evidence.
**Alternatives:** Invent a ServiceNow connector; depend on an uncontrolled live service; one fixed ESCO reference with fallback.
**Decision:** Read-only fixed URI, validation, timeout, size bound, cooldown and explicit response modes. Preserve synthetic core workflows.
**Benefit:** Genuine contract boundary with no employee data or paid API.
**Trade-off and risk:** A taxonomy reference does not prove an enterprise connector, semantic equivalence or business demand.
**Reconsider when:** An authorized tenant and validated workflow justify a contract spike.
**Evidence:** [Adapter contract](../architecture/external-taxonomy-adapter.md), research/esco-observation.json, tests/esco.test.ts.

## ADR-10 — Make enterprise launch blockers explicit
**Problem:** Passing software checks can be mistaken for pilot readiness.
**Alternatives:** A single readiness percentage; freely checked “ready” boxes; evidence-derived demo status plus immutable pilot blockers.
**Decision:** Current-session observations cannot clear durability, identity, customer-governance or support prerequisites.
**Benefit:** Demonstrates a PM go/no-go decision and accountable collaboration.
**Trade-off and risk:** A blocked status is less promotional; owner rehearsal and real customer evidence still matter.
**Reconsider when:** Named stakeholders produce verified pilot exit evidence; update the release assessment with provenance.
**Evidence:** [Rollout/RACI](../delivery/pilot-rollout.md), [support](../delivery/support-runbook.md), tests/product.test.ts and phase-2 browser journey.
`,"product/jobs-to-be-done.md":`# Jobs-to-be-Done
1. When a new source is proposed, I want to understand which business decisions its evidence improves, so I can prioritize integration value over connector count.
2. When an incident suggests a skill, I want to see the underlying evidence and attribution, so I can decide whether the claim is fair.
3. When an employee identifier is missing, I want the update held with an actionable exception, so I can prevent attribution to the wrong person.
4. When a partner API fails temporarily, I want approved work retained with bounded retries, so I can recover without duplicate updates.
5. When a pilot ends, I want operational and review measures separated from business outcomes, so I can decide whether expansion is justified.
`,"product/metrics-framework.md":`# Metrics framework
All displayed figures are derived from the current synthetic session, never enterprise outcomes. Empty denominators display “—”. Logical time measures scenario scheduling, not wall-clock performance.

| Layer | Metric / formula | Interpretation |
|---|---|---|
| Adoption | Active integrations; setup completion; reviewers using workflow | Pilot measures proposed only; two configured simulators are not active customers |
| Quality | Attempt success = HTTP 200 attempts / all attempts | One 503 then one 200 gives 50%, despite eventual delivery |
| Quality | Duplicate prevention = count of repeated same-version deliveries suppressed | Count, not a percentage with an invented denominator |
| Quality | Mapping failure = currently unmapped suggestions / current suggestions | Resolution changes this snapshot; audit retains original failure |
| Quality | Recovery = recovered current revisions / current revisions with a failed attempt | A changed revision starts a new cohort; historical attempts remain in attempt-success metrics. Failed/exhausted current work remains in denominator |
| Quality | Processing latency | Not benchmarked; logical retry timestamps exposed; production latency unmeasured |
| Skills | Acceptance = approved current suggestions / (approved + rejected current suggestions) | Pending excluded; invalidated approvals return to pending |
| Skills | Rejection = rejected / completed current decisions | Not an AI accuracy measure |
| Skills | Evidence coverage = nonempty evidence / suggestions | Presence is not usefulness |
| Skills | Review-required = 100% when any suggestions exist | Design policy, not an adoption result |
| Business | Manual effort saved; approved-profile freshness; potential skills visibility | Hypotheses pending a consented baseline/pilot comparison |

## Reproducible examples
Reset → happy → approve → sync: 1 event, 1 write, 1 successful attempt, 100% acceptance. Reset → duplicate: 2 deliveries, 1 unique event, 1 duplicate prevented. Reset → outage → approve → sync → restore → +10s → sync: 2 attempts, 50% attempt success, 100% recovery, 1 write. Reset → weak evidence → reject → sync: 100% rejection, 0 attempts, 0 writes.

## Pilot measurement
HR owns reconciliation baseline and freshness; governance owns review time/queue age and employee challenge outcomes; engineering owns loss/duplicate/error measures; PM owns synthesis. Use a two-week baseline and four-week small-team pilot as a proposed design. Sample incident complexity and record hidden review work. Investigate any unsafe attribution immediately; pause if policy violations occur. A proposed 20% reduction in reconciliation time is a decision threshold to negotiate, not a claimed result. Do not optimize acceptance at the expense of correct rejection.
`,"product/opportunity-assessment.md":`# Opportunity assessment
Hypothesis-based assessment; ratings require customer validation.

| Opportunity | Customer value | Complexity | Risk | Scalability | Strategic alignment |
|---|---|---|---|---|---|
| A. Reliability hardening | Avoid lost/duplicate updates | Medium–high (durability/operations) | Lowers operational risk | Enables greater volume | Essential foundation |
| B. Human suggestion validation | Establish trust in uncertain claims | Medium | Reviewer burden; inconsistent decisions | Queue capacity constrains growth | Directly addresses safe enrichment |
| C. Real-time synchronization | Potentially fresher profiles | High | More coupling and failure modes | Higher cost and operational load | Weak until freshness need is verified |

## Recommendation
Focus the MVP on B with minimum safeguards from A. A alone proves delivery of potentially untrustworthy data; C optimizes latency before usefulness. B creates a testable value proposition: reviewers can inspect evidence and control updates. Exact identity, idempotency and version-bound approvals are prerequisites rather than optional score competitors.

Consider a manual assisted pilot as a cheaper alternative before building real connectors. Stop or pivot if evidence cannot support meaningful decisions or review workload exceeds value. See prioritization for explicit score assumptions.
`,"product/personas.md":`# Hypothetical personas
These are research planning artifacts, not interviewed individuals.

| Persona | Responsibilities and current workflow | Goal / pain | Desired outcome and success criterion |
|---|---|---|---|
| Maya, HR Product Owner | Owns HR profile quality; reconciles manager spreadsheets with HR | Fresh, useful profiles; uncertain evidence and inconsistent terminology | Approved updates with provenance; measure profile freshness and reconciliation time |
| Jonas, Integration Architect | Owns interfaces, identity and incident recovery; inspects batch logs | Predictable contracts; ambiguous IDs and silent failures | Every blocked item actionable; no unsafe write in fault tests |
| Alex, Employee / Skill Profile Owner | Resolves IT incidents and maintains profile manually | Fair representation and agency; activity may be attributed to the wrong person | Explain each suggestion and challenge it before use; trust assessed in interviews |
| Sam, Skills Governance Reviewer | Reviews evidence and terminology; requests manager context | Useful queue without rubber stamping; weak evidence and overload | Reasoned approval/rejection with manageable queue age and decision time |

Prototype roles model reviewer/admin/viewer actions. A separate employee self-service workflow is proposed, not implemented. An employee's rights and a reviewer's authority must be resolved in discovery before a real pilot.
`,"product/phase-2-positioning.md":`# SkillsBridge: integration lifecycle, not a feature-gap claim

## Positioning
SkillsBridge demonstrates how to take a fictional enterprise integration from discovery to a launch decision: Discovery → Opportunity Assessment → Prioritization → Integration Design → Delivery → Validation → Launch Readiness.

It is not a proposed missing feature for TechWolf. Official sources already describe operational-data inference, Workday writeback, ServiceNow integration and employee validation. The useful portfolio question is how an Associate PM would investigate requirements, make trade-offs, collaborate with engineering and decide whether an implementation is ready for a governed pilot.

## Facts versus assumptions
Verified public context: existing TechWolf integrations and validation capabilities; responsibilities in a current general Product Manager posting; ESCO linked-data concepts. Verified prototype behavior: tests and inspected source in validation records. The current posting asks for 4+ years; it does not verify that the earlier Associate vacancy is open.

Unvalidated: Northstar's need, evidence usefulness, reviewer capacity, acceptable freshness, buyer willingness, costs and business impact. Customer stories are vendor-published context, not SkillsBridge outcomes or causal proof.

## Product Decision Lab
The lab compares phase-2 investments, while the original RICE table remains the historical MVP decision. They answer different questions and should not be combined as if they were one research model.

Ratings (1–5) estimate recruiter relevance, product judgment, learning/business value, effort and technical risk. Normalized weighted score = Σ(weight × rating) / (5 × total weight) × 100; effort/risk invert using 6 − rating. A zero-weight model produces no score. Access prerequisites override ranking: an unapproved ServiceNow tenant is blocked regardless of its score. Scores express preferences, not customer evidence, ROI or implementation approval.

Evidence: lib/product/opportunities.ts; tests/product.test.ts; review/phase-2-audit.md. Change weights in the interface, inspect the selected decision, the assumption and the condition for reconsideration. The strongest next learning investment remains external discovery, not maximizing the lab score.

## Focused scope
Build the decision workbench, guided tour, launch center and one ESCO reference adapter. Retain the working source/destination simulators. Defer a business-impact calculator without baseline data and a real ServiceNow connector without an authorized tenant. Upgrade accessibility and validation as quality prerequisites, not extra product features.
`,"product/prioritization.md":`# Prioritization
RICE = Reach × Impact × Confidence / Effort. These are illustrative planning estimates, not research findings.

Reach: potentially affected events per 100 pilot incidents. Impact: ordinal 1–3 improvement to the core outcome. Confidence: subjective evidence confidence. Effort: estimated person-weeks for an experienced small team; not actual logged implementation effort.

| Opportunity | Reach | Impact | Confidence | Effort | Score |
|---|---:|---:|---:|---:|---:|
| Human validation workflow | 100 | 3 | .50 | 3 | 50 |
| Reliability improvements | 100 | 2 | .50 | 3 | 33.3 |
| Real-time synchronization | 40 | 1 | .25 | 4 | 2.5 |

Why low confidence: public documentation supports technical context, not customer demand. Reach assumes all pilot incidents enter review, while only 40 have a time-sensitive use case. Neither estimate has been measured.

Safety constraints override the ranking: basic deduplication, identity blocking and stale-approval protection ship with validation. If validation effort doubles its score falls to 25, below reliability; the smallest usable validation boundary remains necessary while scope is reduced. Re-score after interviews using observed volume, review cost and actual engineering estimates. Do not present these numbers as ROI.
`,"product/problem-discovery.md":`# Problem discovery
**Hypothesis-driven — external validation pending.** No customer interviews have occurred.

## Current workflow and pain
In fictional Northstar, an IT engineer resolves an incident; a manager may notice a skill; the employee updates an HR profile; HR manually reconciles terminology. Evidence becomes detached from the claim. Employees may be omitted or misattributed. HR lacks freshness and engineering lacks visibility into failed updates. These are plausible problems to investigate, not observed findings.

Operational efficiency alone is insufficient: inaccurate claims may influence career opportunities. The product opportunity is a controlled evidence-to-update path, with an explicit review cost.

## Discovery hypotheses and disconfirmation
| Hypothesis | Test | Disconfirming signal |
|---|---|---|
| Selected incident evidence is useful | 20 consented synthetic walkthroughs, then a governed sample pilot | Reviewers require unavailable context for most decisions |
| Explainable evidence increases trust | Compare evidence shown/hidden; ask employees to explain attribution | Confidence remains low or employees challenge source relevance |
| Safe retries reduce reconciliation | Inject failures; compare recovery with a manual baseline | Recovery increases duplicates or operator workload |
| Review load is manageable | Measure time per decision and queue age over two weeks | Review exceeds agreed capacity or queue grows continuously |
| Daily updates are fresh enough | Ask which decisions need new skills data and when | A validated workflow needs sub-hour freshness |
| Implementation is tractable | Architect reviews identity/taxonomy coverage and access | Access restrictions or mapping costs dominate expected value |

## Interview script (30 minutes)
Start with purpose, consent and an invitation to disagree. Ask about actual recent work before showing the proposal.

**HR stakeholder:** Walk through the last profile update. Who initiated it? What decision used it? What made it trustworthy? What happens when a claim is wrong? How much reconciliation time was spent? Would you sacrifice coverage for fewer errors? What would make this workflow unnecessary?

**Integration Architect:** Show the lifecycle of an incident and employee ID. Which fields can leave the source? How are leavers and rehires represented? What API/version/volume constraints apply? What is the destination upsert behavior? How do you detect lost acknowledgments? Which failures require manual intervention? What would block a pilot?

**Product Manager:** What customer segment has this problem most acutely? What existing workaround competes with us? What would you stop funding? How do you value trust versus freshness? Which evidence would reverse the MVP decision? Who buys, approves and operates it?

Close by asking for counterexamples, a walkthrough of the current alternative and permission for follow-up. Record quotes only with consent. Separate observations, interpretations and decisions. No results should be added until interviews actually occur.
`,"product/product-brief.md":`# Product brief

SkillsBridge is an independent enterprise product management and integration case study built using synthetic data and simulated enterprise integrations.

## Product lifecycle positioning
This case demonstrates discovery through launch readiness, not an unaddressed TechWolf feature. Public integration and employee-validation capabilities already exist. Phase 2 adds a Decision Lab, guided tour, launch evidence and a narrow genuine ESCO reference; source/HR destination remain fictional.

## Customer problem
Northstar Global Services is a fictional 5,000-person employer with distributed IT teams. Service-management activity contains potentially useful skills evidence, but HR profiles require manual reconciliation. Completing an incident does not establish competency. Incorrect attribution could harm employee trust and workforce decisions.

## Users and opportunity
An HR Product Owner needs trustworthy profile freshness; an Integration Architect needs explainable failure handling; an employee needs control over claims; a governance reviewer needs evidence and a manageable queue. Connect selected incident evidence to an approved skills update, preserving provenance and blocking unsafe writes.

## Objectives and MVP
Demonstrate a single source-to-destination workflow: ingest a fictional incident contract, normalize, match an explicit employee identifier, suggest one rule-based skill, require a reviewer decision, map a destination taxonomy, synchronize idempotently and expose audit/metrics. Eight failure scenarios must be reproducible. Five screens explain discovery, delivery and trade-offs alongside the working system.

Must: human review, identity blocking, version-bound approval, bounded retry and transparent simulation labels. Should: guided scenarios and accessible responsive UI. Could: downloadable case-study PDF. Out of scope: real enterprise credentials, production AI inference, SSO, multi-tenant production storage, legal compliance claims, employee assessment and automated staffing decisions.

## Risks and assumptions
Hypothesis-driven — external validation pending. No interviews have occurred. Review burden, evidence usefulness, acceptable freshness and implementation effort are unknown. A rule score is not a calibrated probability. In-memory session state is sufficient for a local demonstration but cannot establish durability or deployment readiness at enterprise scale.

## Success criteria
All critical safety tests pass; no destination write without current approval and valid identity/taxonomy; duplicate delivery causes no second write; bounded retries respect time eligibility; a visitor can reproduce happy, recovery and rejection paths. Business benefit remains a hypothesis until a consented pilot compares reconciliation time and employee trust with a baseline.
`,"product/product-requirements.md":`# Product requirements — MVP
## Problem and outcome
Fictional Northstar cannot reliably turn operational evidence into approved skills updates. Enable a governance reviewer to inspect a suggestion and permit only its current, mapped revision to reach a simulated HR destination.

## Functional requirements
| ID | Requirement | Acceptance |
|---|---|---|
| FR1 | Validate and normalize selected incident fields | Reject malformed/unexpected fields; trim evidence; preserve event/version |
| FR2 | Resolve explicit identity | Unknown source ID blocks approval and delivery; admin resolution returns to pending review |
| FR3 | Explain suggestion | Show rule score, evidence, event, revision and synthetic employee |
| FR4 | Require human decision | No automatic approval; rejected items never synchronize |
| FR5 | Enforce authority and freshness | Viewer denied with audit; changed evidence invalidates prior approval |
| FR6 | Map and deliver approved updates | Require employee, taxonomy and matching approved revision |
| FR7 | Deduplicate and recover | Source version and destination operation key unique; retries eligible only after delay, maximum three |
| FR8 | Expose state and reset | Queue, audit, attempts and derived metrics reflect session; reset clears it |

## Nonfunctional requirements and limits
Strong TypeScript typing and Zod request/state validation. Same-origin mutations and HttpOnly session cookie. Keyboard-operable native controls, responsive layout, reduced-motion support, loading/error/empty states. No external credentials or real employee data. Sessions expire after one hour idle; bounded to 100 in memory with 40 source records per demo. These are defensive prototype bounds, not capacity guarantees.

## User journey
Overview → choose scenario → ingest → inspect evidence → approve/reject → synchronize → inspect audit. Recovery adds restore destination and advance logical clock. No timer or animation implies a production service is running.

## Launch criteria
Critical tests, typecheck, authored-source lint and build pass; screenshots checked; docs match behavior. External release additionally needs authorization and a reviewed dependency risk posture. Production use requires persistence, real authentication, tenant isolation and governed partner contracts.

## Phase 2 increment
The six-screen workspace adds Launch readiness; Discovery includes a Decision Lab. A guided three-minute tour requires actual domain actions. An optional fixed ESCO reference endpoint never mutates review or destination state. See delivery/phase-2-acceptance.md and architecture/external-taxonomy-adapter.md for acceptance and failure policy. No real-data launch authorization follows from completing the tour.
`,"product/product-roadmap.md":`# Product roadmap
Dates are intentionally omitted until customer demand and staffing are established.

| Phase | Status | Scope | Exit / investment decision |
|---|---|---|---|
| 1 — MVP | Implemented locally | Ingestion, normalization, identity, suggestions, review, simulated sync, monitoring; basic idempotency, retries and audit pulled forward | Critical local checks pass and workflow can be demonstrated honestly |
| 2 — Reliability & scale | Proposed | Durable outbox, restart recovery, real SSO/tenant isolation, retry jitter/circuit breaker, alerts, data-quality feedback | Fund after a governed pilot validates usefulness and review capacity; load and fault tests required |
| 3 — Future opportunities | Proposed | Additional adapters, taxonomy versioning, configurable policy and analytics | Rank verified demand against maintenance/access cost; do not equate more adapters with value |

This implementation does not establish production-scale reliability. Phase 2 deepens basic safeguards already demonstrated in Phase 1.

## Phase 2 portfolio upgrade (implemented, distinct from production hardening)
Decision Lab, guided tour, launch-readiness surface, ESCO read-only reference/fallback and automated accessibility evidence are implemented. Durable outbox, SSO, tenant boundaries and actual ServiceNow/HR adapters remain proposed. The phrase “Phase 2” in the delivery session does not mean the roadmap's production reliability phase is complete.
`,"product/product-strategy.md":`# Product strategy
## Where to play
One fictional enterprise IT team, selected resolved incidents and one HR destination. Position the workflow as controlled enrichment of the existing record. This is not a competitive feature-gap claim.

## How to win the first learning milestone
Prove a complete, inspectable evidence-to-approved-write workflow and expose its failure boundaries. Pair product decisions with executable scenarios. A human review cost is acceptable until actual trust and workload are measured.

## Scope
**Must:** ingestion, normalization, explicit identity, deterministic suggestion, provenance, approve/reject, version-bound authorization, taxonomy blocking, safe sync, bounded retry, metrics/audit and reset.

**Should:** guided scenarios, responsive six-screen showcase, documented contracts and release evidence.

**Could:** PDF export and recorded walkthrough.

**Out of scope:** proprietary connectors, autonomous competency validation, staffing recommendations, SSO and durable multi-tenant production infrastructure.

## Learning plan
First conduct role-specific interviews, then co-design a consented pilot with HR/security/employee representatives. Compare current reconciliation with the assisted workflow. Do not start with a 5,000-employee rollout. Expand only after useful evidence, manageable review cost, safe delivery and legitimate data use are established.
`,"product/product-vision.md":`# Product vision
Make useful, evidence-backed skills data available in the enterprise tools people already use, while preserving employee agency and operational accountability.

## Principles
1. Evidence before claims: preserve source and revision; incident completion is not competency.
2. Human control: require deliberate approval; make rejection equally available.
3. Safe delivery: missing identity, taxonomy or current approval blocks a write.
4. Transparent operations: expose blocked work and retry eligibility.
5. Minimize data: selected synthetic evidence, no ticket attachments or unnecessary personal information.
6. Measure value: distinguish operational measures from unvalidated business outcomes.

The case explores common integration challenges. It neither implements TechWolf's platform nor asserts a gap in its capabilities. Long-term expansion depends on pilot evidence, not connector count.
`,"product/risks-and-assumptions.md":`# Risks and assumptions
All customer needs remain hypotheses pending external validation.

| Risk | Likelihood / impact | Owner | Mitigation / trigger |
|---|---|---|---|
| Activity mistaken for competency | High / high | PM + governance | Evidence labels, mandatory review; stop if decisions overreach evidence |
| Wrong employee attribution | Medium / high | Architect | Exact IDs; block missing mappings; verify rehire lifecycle in pilot |
| Reviewer overload | High / medium | HR owner | Measure decision time and queue age; reduce input scope before automation |
| Partner schema/access unavailable | High / high | Architect | Fictional contracts now; access spike before connector commitment |
| Changed evidence after approval | Medium / high | Engineer | Revision-bound approval and invalidation; tests protect boundary |
| Ephemeral session loses work | Certain on restart / high for real use | Engineer | Local-only demonstration; durable outbox is a production prerequisite |
| Demo role confused with SSO | Medium / high | PM | Explicit teaching-control label; no real data or access claims |
| Security advisories in scaffold | Verified / high | Engineer | Audit dependencies; assess upgrades; release status recorded in validation |
| Pilot lacks lawful purpose or employee support | Unknown / high | Customer governance | Privacy/security/employee consultation before collection; no compliance claim |
| Attractive demo masks absent demand | High / high | PM | Recruiter evidence separated from product-market validation |

Retention assumption: one-hour idle server sessions; reset clears session state; process restart clears everything. No production retention or erasure policy is implemented. Evidence use is limited to explaining synthetic skill suggestions. No compensation, hiring or performance decisions are supported.
`,"product/success-metrics.md":`# Success metrics
The operational north star for the prototype is an approved, correctly mapped revision delivered once with traceable evidence. This is a workflow invariant, not a business-value claim.

For a real pilot, assess useful approved updates per reviewer-hour alongside employee trust and unsafe-attribution incidents. Agree baseline, measurement window and stop criteria with stakeholders before collecting data. See [metrics framework](metrics-framework.md) for formulas and [risk register](risks-and-assumptions.md) for constraints.
`,"research/source-register.md":`# Source register

Accessed 2026-11-04. Public documentation establishes context, not customer validation. No proprietary tenant schemas were accessed. All prototype payloads are fictional.

| Source | Verified public fact | Limitation | Product implication |
|---|---|---|---|
| [TechWolf integrations](https://www.techwolf.ai/product/integrations) | Describes enriching existing HR systems, including Workday, with inferred skills | Vendor positioning; no independent performance validation performed | Demonstrate enrichment without replacing the HR record; do not allege a TechWolf feature gap |
| [TechWolf FAQ](https://www.techwolf.ai/frequently-asked-questions) | Describes connections across HR, work and learning systems | Marketing overview rather than a contract | Scope one work system and one fictional HR destination |
| [ServiceNow official Table API](https://github.com/ServiceNow/servicenowdocs/blob/australia/markdown/api-reference/rest-apis/c_TableAPI.md) | Table API retrieves records with filtering, selected fields and pagination | ACLs and tenant configuration affect access; not a SkillsBridge adapter | Minimize fields; prototype contract is explicitly different |
| [ServiceNow rate limits](https://github.com/ServiceNow/servicenowdocs/blob/australia/markdown/api-reference/rest-api-explorer/inbound-REST-API-rate-limiting.md) | Denied requests use HTTP 429 with Retry-After | Configured limits vary; destination simulator is fictional | Treat Retry-After as a minimum retry delay |
| [Workday integrations](https://www.workday.com/en-us/products/platform-product-extensions/integrations.html) | Public overview describes event-driven integrations and batch processing | Does not establish a writable worker-skill schema or tenant access | Use a fictional destination upsert, never claim Workday certification |
| [SAP OData integration](https://userapps.support.sap.com/sap/support/knowledge/E/2251702) | SAP describes OData APIs for external integrations | Module permissions and schema not explored in a tenant | Additional adapter remains a discovery opportunity |
| [Idempotent Receiver](https://www.enterpriseintegrationpatterns.com/patterns/messaging/IdempotentReceiver.html) | A receiver can safely handle repeated messages | Pattern alone does not establish exactly-once delivery | Deduplicate source versions and destination operation keys |
| [European Commission principles](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en) | Purpose limitation and data minimization are core principles | No legal assessment performed; inaccessible first URL replaced with indexed official overview | Synthetic IDs, selected evidence, no raw ticket dumps; no compliance claim |

## Method and uncertainties
ServiceNow reference fetched through Context7 (official ServiceNow repository); other sources checked through web search/open. Next.js route handler and Vitest documentation fetched through Context7 for implementation. Scaffold uses Vinext's Next-compatible App Router, not a production Next.js installation. Workday concepts were researched only at the public overview level; specific operations are deliberately not implemented. Research statements are bounded paraphrases. Product choices, thresholds, scenario data, RICE estimates and persona needs are design assumptions, not observed customer findings.

## Phase 2 refresh — 2026-11-04
| Source | Verified public statement | Limits / implication |
|---|---|---|
| [TechWolf ServiceNow integration](https://www.techwolf.ai/integrations/servicenow) | Publicly describes a ServiceNow integration | Overview does not reveal tenant contracts; this is an established capability, not an alleged product gap |
| [TechWolf Workday integration](https://www.techwolf.ai/integrations/workday) | Describes inference and integration into Workday Skills Cloud | Vendor assertion, no independent certification check here; never transfer the claim to SkillsBridge |
| [Worker Skill Assistant marketplace](https://marketplace.workday.com/en-US/apps/553365/techwolf-worker-skill-assistant/overview) | Describes employee review and validation of suggestions within Workday | Human validation already exists; portfolio differentiates through lifecycle reasoning, not feature novelty |
| [Workday customer story](https://www.techwolf.ai/customer-stories/workday) | Describes taxonomy governance, stakeholder workshops and integration | Vendor-published customer evidence, not independently audited and not SkillsBridge outcomes; no copied ROI targets |
| [TechWolf Product Manager role](https://careers.techwolf.ai/o/product-manager-2) | Strategy, roadmap, requirements, partner/customer engagement and engineering collaboration | Current general PM vacancy asks 4+ years; not a verified current Associate vacancy. User's target role remains a portfolio target, not a claim of qualification |
| [ESCO service overview](https://esco.ec.europa.eu/en/use-esco/use-esco-services-api/esco-web-service-api) | Concepts identified by URI; supports version selection via selectedVersion | Overview's version list differs from footer. Request v1.2.0 explicitly, record request version; do not claim provider confirmed effective version |
| [ESCO REST guide](https://ec.europa.eu/esco/api/doc/esco-api-doc.pdf) | Linked-data REST concepts and responses | Guide dated 2021; inspect actual responses and validate the narrow contract |

Context7 searches for “ESCO API” and “ESCO” returned unrelated libraries. No valid library ID was selected; official Commission documentation and real read-only calls were used instead. The ESCO concept \`http://data.europa.eu/esco/skill/744442ac-c157-4350-8be0-ce454df4f5c5\` was retrieved successfully on 2026-11-04. Its English label is “perform ICT troubleshooting”. It is a related vocabulary reference, not proof of equivalence to Northstar's “Network troubleshooting”, an approved destination mapping or an employee competency.

## Final validation recheck — 4 November 2026
The official TechWolf integrations page was read again: it explicitly describes Workday write-back and ServiceNow-derived skills. This reinforces the existing product-lifecycle positioning; it does not establish SkillsBridge customer demand, TechWolf internals or permission to use proprietary systems. [Official integration context](https://www.techwolf.ai/product/integrations). No vendor accuracy claim is adopted as a result for this prototype.
`,"showcase/executive-case-study.md":`# SkillsBridge — Designing a Reliable Enterprise Skills Integration

## Page 1 — Executive Summary

### The customer challenge
Northstar Global Services is a fictional 5,000-person employer with distributed IT teams. Its operational systems record work, while formal HR profiles depend on manual updates. A resolved network incident may contain evidence of troubleshooting. It does not establish the employee's proficiency, independent contribution or verified expertise.

### The product opportunity
Create a trustworthy path from selected operational evidence to a human-approved HR update. The case demonstrates the integration product lifecycle: discovery, assessment, prioritization, design, delivery, validation and launch readiness. Public TechWolf material already describes integrations, skills inference and employee validation; this case explores related integration challenges without claiming to reproduce its platform or identify a feature gap.

### The focused solution
SkillsBridge imports a fictional ServiceNow-like incident, normalizes selected evidence, maps an explicit employee ID and creates a deterministic skill suggestion. A human reviewer approves or rejects its current revision. Only approved, mapped evidence can synchronize to a fictional Workday-like destination. An audit trail explains every transition.

The core includes one simulated source and destination and eight failure scenarios. Phase 2 adds an interactive Decision Lab, launch center, a three-minute guided tour and one genuine read-only ESCO reference. Real enterprise source/destination connectors, production AI, durable processing and SSO are outside this increment.

### Expected value and validation status
Less reconciliation effort and fresher approved profiles are hypotheses. No interviews, enterprise deployments or measured business outcomes are claimed. Current evidence establishes local workflow behavior and the reasoning behind its scope. External discovery is the next investment decision.

SkillsBridge is an independent enterprise product management and integration case study built using synthetic data and simulated enterprise integrations.

## Page 2 — Product Discovery

### Understand the current alternative
The assumed workflow moves from incident closure to manager observation, employee self-report and manual HR reconciliation. Evidence can become detached from its claim, terminology may differ and attribution may be uncertain. These are plausible discovery hypotheses, not fabricated customer observations.

Four hypothetical personas frame the work: the HR Product Owner wants useful profile freshness; the Integration Architect wants safe contracts and recovery; the employee wants fair attribution and agency; the governance reviewer wants sufficient context without an unmanageable queue. Their needs may conflict. Faster updates are not valuable if employees distrust them.

### Compare opportunities
Three opportunities were assessed: reliability hardening, human suggestion validation and real-time synchronization. Illustrative RICE scores are 33.3, 50 and 2.5 respectively. They assume a 100-event pilot population and estimated effort, with low confidence because no customer research has occurred. Scores organize judgment; they do not establish ROI. Phase 2 adds a separate sensitivity model for portfolio upgrades, with access prerequisites overriding rank.

The MVP centers on validation with essential delivery safeguards. Reliability alone could transport untrustworthy claims more efficiently. Real-time delivery optimizes a freshness requirement that has not been established.

### Validate or invalidate the proposition
Interview stakeholders about a recent profile update, the decision it supported and the actual reconciliation effort. Ask architects about identity lifecycle, permissions and destination merge semantics. Ask employees what would make a claim unfair. Observe review time and rejection reasons in synthetic walkthroughs before a governed pilot.

The riskiest assumption is that available evidence is useful enough to justify review cost. If reviewers consistently need unavailable context, narrow the input or reconsider the opportunity rather than tuning an arbitrary score.

## Page 3 — Product Strategy

### Vision and principles
Make evidence-backed skills data useful inside existing enterprise workflows while preserving employee agency and operational accountability. Principles are evidence before claims, human control, safe synchronization, minimized data, transparent operations and measurable customer value.

### Product decisions with trade-offs
Mandatory review was selected over score-based automatic approval. It exposes uncertainty and creates a measurable learning loop, but increases queue cost. Exact identity mapping was selected over fuzzy names or email similarity. It sacrifices apparent coverage to prevent wrong attribution. Explicit batch synchronization was selected over streaming because acceptable freshness is unknown.

A deterministic category/keyword rule replaces an unnecessary language-model dependency. Its .86 and .34 scores are heuristics, not probabilities or accuracy claims. High scores still require review. A real model should be considered only after a governed sample supports evaluation of usefulness and failure costs.

### What belongs in the MVP
Source deduplication, role-based policy checks, bounded retries and stale-approval protection were pulled forward from a later reliability phase. An unsafe write would undermine the core proposition, making these prerequisites rather than optional polish.

The prototype uses ephemeral server-side sessions to keep the implementation proportionate. This creates a clear limitation: approved work does not survive restart. Durable inbox/outbox processing and enterprise authentication are prerequisites for a real pilot, not hidden work implied by the demo.

### Investment gates
Reduce source breadth before removing safety. Reconsider review policy only with observed disagreement and workload data. Expand connectors only after a verified customer decision, feasible access and an operational owner justify lifecycle cost. The launch center makes four unresolved pilot prerequisites explicit; session success cannot clear them.

## Page 4 — Integration Blueprint

### One inspectable chain of trust
Selected source event → validation and deduplication → normalization → explicit identity mapping → evidence-backed suggestion → current human approval → taxonomy mapping → idempotent destination operation → audit and metrics.

The application combines UI, typed API, domain engine and simulators in one deployable codebase. This makes its boundaries understandable without microservices or proprietary credentials. Source and HR contracts are fictional; the ESCO contract is observed. Request/state schemas are validated. The OpenAPI specification is generated from executable schemas and structurally checked.

### Approval and identity boundaries
Every suggestion preserves source ID, revision, evidence and synthetic employee. Unmapped identities or skills block approval and delivery. A changed source revision returns the suggestion to pending and clears prior approval. An old reviewer revision cannot authorize the new evidence. Viewer actions are denied and audited.

The role selector is a teaching control, not SSO. Same-origin mutations and session cookies isolate demonstrations, but do not establish production authorization or tenant security.

### Reliability behavior and limits
Duplicate source versions produce no second suggestion. Successful destination operations have stable keys. A 503 schedules exponential backoff; a 429 applies a five-second Retry-After minimum. No attempt runs before logical eligibility, and three attempts exhaust the budget. Recovery is explicit and reproducible.

A fixed ESCO API concept can be read without employee data, with validated responses and recorded fallback. It is a related vocabulary reference, not an approved HR mapping. There is no automatic scheduler, persistent queue or remote lost-acknowledgment reconciliation. Earlier synchronized history is retained when evidence changes; remote retraction is not modeled. Real adapters need durable transitions, partner-supported idempotency and a correction policy.

## Page 5 — Product Delivery

### From requirements to evidence
The core backlog contains 18 stories across ingestion, identity, trust, delivery, reliability and pilot hardening. Sixteen are implemented locally; durable outbox and enterprise SSO remain proposed. Each story has persona, outcome, business value, acceptance criteria, dependencies, priority and test considerations. Definition of Ready and Done prevent fictional contracts or unverified claims from becoming implicit promises.

The six screens support a recruiter journey: understand the problem, inspect discovery, run the integration, review exceptions and explore delivery trade-offs. The control center uses actual server state and audit events. It does not decorate the interface with fake live activity or progress delays.

### Quality validation
The domain, API, contract, product, adapter and publication checks and Chromium journeys passed in recorded validation runs. Current named test outcomes are distributed in the public evidence guide; counts are version-specific. Eight selected automated WCAG scans found no detected violations; incomplete checks still need manual review. It covers normalization, identity, review, rejection, synchronization, duplicates, time-bound retries, recovery, denied actions, stale approval, audit, metrics and reset. Browser checks exercise the real UI/API path, mobile layout and documentation access. Strict TypeScript, authored-source lint and build validation pass in the recorded local run.

Phase 2 corrected low-contrast text, accessible names and keyboard table scrolling. A real Worker call exposed a redirect-mode difference that mocks missed; after correction, the adapter returned live ESCO data. Dependency upgrades removed critical, high and moderate advisories; two low findings remain in retained scaffold tooling. No claim of full accessibility conformance, provider certification or production fault tolerance follows from these checks.

The private GitHub repository contains phase commits and a CI workflow; baseline and audit CI succeeded. Current feature CI is tracked separately. Public deployment and real enterprise access remain unverified. A pilot/RACI plan and support runbook define the next decisions.

## Page 6 — Results & Reflection

### Actual synthetic execution results
Happy path: one unique event, one approved suggestion, one successful attempt and one destination write. Duplicate scenario: two deliveries, one unique event and one duplicate suppressed. Outage scenario: one failed and one successful attempt, one destination write, 50% attempt success and 100% recovery for that one affected suggestion. Weak-evidence scenario: one rejected suggestion, zero attempts and zero writes.

These values are calculated from executed transitions and saved in simulation-results.json. Repeating successful synchronization creates no extra write. Empty denominators remain unavailable. None of these results establishes enterprise adoption, model accuracy or savings.

### What this case demonstrates
The strongest evidence is the connection between a product decision and a verified behavior: uncertainty leads to review; attribution risk leads to blocking; evidence changes lead to invalidation; outages lead to bounded, visible recovery. Documentation and tests make those trade-offs inspectable.

### What remains to learn
Customer demand, evidence usefulness, employee trust, review capacity and acceptable freshness remain unknown. Production operation additionally requires actual partner contracts, durable storage, authenticated tenant-scoped access, support ownership and governed data use. The project does not establish prior employment experience or independently validate the creator's interview performance.

### Final credibility review
An explicit publication allowlist protects private materials. Final red-team tests corrected streamed request limits and recovery metrics across evidence revisions. Evidence links distinguish published documents from private source snapshots. External reviews, client delivery and candidate mastery remain unverified; a prepared assessment is not a pass.

### Recommended next steps
Seek genuine reviews and discovery. Agree a small authorized pilot with a baseline. Fund durability and SSO before real data; expand adapters only after validated need.

The product lesson is to validate the decision that makes data worth moving, then distinguish a successful demonstration from an authorized enterprise launch.
`,"validation/limitations.md":`# Known limitations
- No customer interviews, real employee data, enterprise pilot or measured business outcomes.
- Source/destination contracts and Northstar are fictional. No TechWolf affiliation, proprietary access, Workday or ServiceNow certification.
- Deterministic keyword/category rules; scores are not calibrated probabilities, verified competencies or production AI.
- In-memory state: process restart, eviction, idle expiration or a different Worker isolate can lose the session. No durable queue, transactional outbox or restart guarantee.
- Freely selectable simulated roles demonstrate policy, not authentication. No production SSO, tenant isolation or employee self-service portal.
- Retry is command-driven on a logical clock, not an automatic scheduler; max three attempts. No jitter, circuit breaker or real Retry-After parsing.
- Successful destination writes are local operation history. Lost acknowledgments, remote rollback, real destination conflicts and deletion are not simulated.
- Taxonomy supports two predefined mappings; unknown skills block and have no taxonomy-editing UI.
- Same-version conflicting content and old source revisions are domain-tested; ingestion HTTP accepts named fixtures only, not arbitrary external webhooks.
- Browser QA covers Chromium and mobile viewport; no full assistive-technology audit or performance/load certification.
- Repository/CI/public deployment availability is reported separately; configured CI is not a successful hosted CI run.

Do not use this prototype for employment, compensation, staffing or performance decisions. Production requires governed data use, security review, actual contracts and persistence.

## Phase 2 clarification
The source and HR destination remain simulations. One genuine ESCO reference is implemented; its live observation does not verify an enterprise source/destination adapter or semantic equivalence. It is user-triggered and has an explicit recorded fallback. Process-local caching/cooldown is not a distributed quota. Requesting v1.2.0 does not establish a provider-confirmed effective version.

Automated accessibility scans found no detected violations after corrections, but incomplete checks and screen-reader/manual review remain. Browser timings are local dev observations, not production performance claims. Decision Lab estimates do not validate customer demand; launch blockers cannot be cleared by changing weights or completing demo actions.

- Public showcase preparation caps active in-memory sessions at 100 and returns an explicit 503 when full; idle sessions expire. This bounds one isolate, not global rate limiting or denial-of-service resilience. A public origin, hosted behavior, provider limits and actual traffic still require authorized verification.
`,"validation/simulation-results.json":`{
  "kind": "synthetic execution evidence",
  "results": [
    {
      "scenario": "happy",
      "metrics": {
        "received": 1,
        "unique": 1,
        "duplicatesPrevented": 0,
        "pendingReview": 0,
        "writes": 1,
        "syncSuccessRate": 100,
        "acceptanceRate": 100,
        "rejectionRate": 0,
        "mappingFailureRate": 0,
        "recoveryRate": null,
        "evidenceCoverage": 100,
        "reviewRequiredRate": 100,
        "reviewed": 1,
        "attempts": 1
      },
      "auditEvents": 6,
      "writes": [
        {
          "key": "EMP-1042:HR-NET-01:INC-0001:1",
          "employee": "EMP-1042",
          "skill": "HR-NET-01",
          "revision": 1,
          "at": 0
        }
      ],
      "attempts": [
        {
          "suggestion": "SG-001",
          "status": 200,
          "attempt": 1,
          "at": 0,
          "nextRetry": null
        }
      ]
    },
    {
      "scenario": "duplicate",
      "metrics": {
        "received": 2,
        "unique": 1,
        "duplicatesPrevented": 1,
        "pendingReview": 0,
        "writes": 1,
        "syncSuccessRate": 100,
        "acceptanceRate": 100,
        "rejectionRate": 0,
        "mappingFailureRate": 0,
        "recoveryRate": null,
        "evidenceCoverage": 100,
        "reviewRequiredRate": 100,
        "reviewed": 1,
        "attempts": 1
      },
      "auditEvents": 7,
      "writes": [
        {
          "key": "EMP-1042:HR-NET-01:INC-0001:1",
          "employee": "EMP-1042",
          "skill": "HR-NET-01",
          "revision": 1,
          "at": 0
        }
      ],
      "attempts": [
        {
          "suggestion": "SG-001",
          "status": 200,
          "attempt": 1,
          "at": 0,
          "nextRetry": null
        }
      ]
    },
    {
      "scenario": "unavailable",
      "metrics": {
        "received": 1,
        "unique": 1,
        "duplicatesPrevented": 0,
        "pendingReview": 0,
        "writes": 1,
        "syncSuccessRate": 50,
        "acceptanceRate": 100,
        "rejectionRate": 0,
        "mappingFailureRate": 0,
        "recoveryRate": 100,
        "evidenceCoverage": 100,
        "reviewRequiredRate": 100,
        "reviewed": 1,
        "attempts": 2
      },
      "auditEvents": 9,
      "writes": [
        {
          "key": "EMP-1042:HR-NET-01:INC-0001:1",
          "employee": "EMP-1042",
          "skill": "HR-NET-01",
          "revision": 1,
          "at": 10000
        }
      ],
      "attempts": [
        {
          "suggestion": "SG-001",
          "status": 503,
          "attempt": 1,
          "at": 0,
          "nextRetry": 1000
        },
        {
          "suggestion": "SG-001",
          "status": 200,
          "attempt": 2,
          "at": 10000,
          "nextRetry": null
        }
      ]
    },
    {
      "scenario": "low-confidence",
      "metrics": {
        "received": 1,
        "unique": 1,
        "duplicatesPrevented": 0,
        "pendingReview": 0,
        "writes": 0,
        "syncSuccessRate": null,
        "acceptanceRate": 0,
        "rejectionRate": 100,
        "mappingFailureRate": 0,
        "recoveryRate": null,
        "evidenceCoverage": 100,
        "reviewRequiredRate": 100,
        "reviewed": 1,
        "attempts": 0
      },
      "auditEvents": 5,
      "writes": [],
      "attempts": []
    }
  ]
}
`,"validation/external-api-check.json":`{
  "observedAt": "2026-11-04T11:58:42.264Z",
  "environment": "Local running application adapter; actual provider access",
  "request": "GET /api/taxonomy?mode=live",
  "response": {
    "mode": "live",
    "provider": "European Commission ESCO",
    "uri": "http://data.europa.eu/esco/skill/744442ac-c157-4350-8be0-ce454df4f5c5",
    "label": "perform ICT troubleshooting",
    "language": "en",
    "requestedVersion": "v1.2.0",
    "effectiveVersionConfirmed": false,
    "retrievedAt": "2026-11-04T11:58:42.234Z",
    "checkedAt": "2026-11-04T11:58:42.234Z",
    "sourceUrl": "https://ec.europa.eu/esco/api/resource/skill?uri=http%3A%2F%2Fdata.europa.eu%2Fesco%2Fskill%2F744442ac-c157-4350-8be0-ce454df4f5c5&language=en&selectedVersion=v1.2.0",
    "reason": null,
    "mappingStatus": "reference-only"
  },
  "simulatorStateUnchanged": true,
  "enterpriseIntegrationVerified": false
}
`,"validation/packaged-smoke.json":`{
  "environment": "local packaged Worker via Wrangler",
  "status": "passed",
  "checks": [
    "HTML response",
    "session cookie",
    "pending suggestion",
    "approval",
    "synchronization",
    "no repeated write",
    "offline external-reference contract",
    "loaded CSS/JS and hydrated primary action",
    "published evidence navigation",
    "anonymous test receipt and security headers",
    "private documents, raw reports and build metadata return 404",
    "390px mobile overflow and console checks"
  ],
  "destinationWrites": 1,
  "attemptCount": 1,
  "hostedDeploymentVerified": false
}
`,"showcase/evidence.md":`# Evidence you can inspect
SkillsBridge is an independent enterprise product management and integration case study built using synthetic data and simulated enterprise integrations. AI assistance contributed research synthesis, writing, implementation and tests. Project outputs do not establish professional experience or independent candidate mastery.

## What works — and what that proves
| Claim | Inspect evidence | Reproduce in the demo | Boundary |
|---|---|---|---|
| Current approval gates synchronization | [Executed automated checks](../validation/public-test-evidence.json), [API contract](../architecture/api-specification.yaml) | Import happy path → synchronize before approval → approve current revision → synchronize | Teaching roles, ephemeral state; not enterprise authentication |
| Duplicate source delivery cannot create a second local write | [Executed scenarios](../validation/simulation-results.json), [failure semantics](../architecture/failure-scenarios.md) | Select duplicate → import → approve → synchronize twice | Local operation key; no distributed exactly-once guarantee |
| A temporary outage is recoverable and visible | [Executed scenarios](../validation/simulation-results.json), [retry policy](../architecture/integration-blueprint.md) | Destination unavailable → approve/sync → restore → advance clock → sync | One failure plus one success = 50% attempt success, not enterprise uptime |
| Product priorities have explicit alternatives | [Decision log](../product/decision-log.md), [opportunity assessment](../product/opportunity-assessment.md) | Open Decision Lab and change a weight | Estimates and demand remain unvalidated; access gates override scores |
| A real external API boundary was exercised | [Actual ESCO receipt](../validation/external-api-check.json), [adapter limits](../architecture/external-taxonomy-adapter.md) | Launch readiness → optional fixed vocabulary reference | Read-only concept; not a ServiceNow/Workday connection or approved skill mapping |

## How to verify the evidence
The automated receipt is generated only after the real unit/API/contract suite exits successfully. It publishes test names, outcomes, timing, runtime, source fingerprint and commit context; no local paths, stacks, credentials or private source. A dirty-worktree flag means the checked source includes changes beyond the named parent commit. The source fingerprint identifies the actual code under test; it is not an independent or cryptographic attestation. [Read the receipt](../validation/public-test-evidence.json).

[Simulation results](../validation/simulation-results.json) are generated by executed engine transitions, not typed-in business outcomes. [Packaged app checks](../validation/packaged-smoke.json) verify HTML/API, client assets, hydrated controls and mobile navigation. A prepared local release is not a verified public deployment. The release uses a necessary session cookie to keep synthetic demonstrations separate; no analytics were added. [Current limitations](../validation/limitations.md).

## Source and privacy boundary
The development repository and history remain private. This showcase deliberately publishes reviewed product documents, synthetic contracts, observed receipts and selected media instead of private GitHub-only links. Unpublished source/history, career/outreach drafts, interview preparation and personal feedback are not part of the public distribution. No public code license or source repository is implied.

## Product and technical reading paths
**One minute:** [director brief](one-page-product-brief.md) → [MVP choice](../product/opportunity-assessment.md). **Three minutes:** return to the workspace and start the action-gated tour. **Fifteen minutes:** [requirements](../product/product-requirements.md) → [stories](../delivery/user-stories.md) → [architecture](../architecture/system-overview.md) → [identity](../architecture/identity-mapping.md) → [OpenAPI](../architecture/api-specification.yaml) → [failure cases](../architecture/failure-scenarios.md) → [metrics](../product/metrics-framework.md) → [limitations](../validation/limitations.md).

## What remains unvalidated
No customer interviews, pilot, adoption, measured ROI or external endorsement. Reviewer capacity, employee trust and actual demand remain hypotheses. Real enterprise launch needs authorized contracts, durable operations, authenticated tenancy and governed support/corrections. Candidate understanding requires a genuine conversation; generated artifacts cannot substitute for it.
`,"showcase/one-page-product-brief.md":`# SkillsBridge — the product decision in one page
## Problem
Northstar, a fictional 5,000-person enterprise, has useful work evidence in IT service activity but incomplete HR skill profiles. A resolved incident does not establish who did the work or prove competency. Incorrect attribution could undermine trust; manual reconciliation may be costly. Neither cost nor demand has been measured with customers.

## Opportunity and MVP choice
Compare reliable transport, human validation and real-time updates. Choose an evidence-to-reviewed-update workflow with minimum delivery safeguards. Faster synchronization is deferred until usefulness and acceptable freshness are understood. A manual assisted pilot is a cheaper alternative worth testing before real connectors.

## Working solution
Synthetic incident → selected-field normalization → exact identity → transparent rule suggestion → explicit current-revision approval → mapped simulated HR write → visible audit/retry history. A fixed read-only ESCO reference is genuinely external; enterprise source and destination remain fictional.

## Demonstrated evidence
The runnable demo covers approval, rejection, missing identity, duplicate delivery, 429/503 retries, stale approvals, metrics and reset. The Decision Lab exposes assumptions; launch readiness preserves unresolved pilot blockers. Current automated outcomes and reproduction steps are published in the [evidence guide](evidence.md). These are simulated execution results, not enterprise savings or AI accuracy.

## Limits and next decision
No real customer interviews, pilot, production HR integration or verified candidate mastery. Ephemeral state and openly selectable teaching roles prevent a production-security claim. Next: test the problem with real stakeholders and agree a small authorized pilot with a baseline, review-capacity limits and ownership before expanding connectors.

**Independent, AI-assisted portfolio case.** No TechWolf affiliation, employment, endorsement or vendor certification. The contribution is an inspectable product lifecycle and working prototype; personal understanding must be demonstrated separately.
`,"showcase/walkthrough-transcript.md":`# Recorded walkthrough — text alternative
The existing 180-second recording uses synthetic data and an earlier interface. It has no speech. The English caption track describes the visible steps; these are timed descriptions, not a verbatim spoken transcript. Current behavior and checks are in the [evidence guide](evidence.md). The interactive tour is available in the workspace.

| Time | Visible story and meaning |
|---|---|
| 0:00–0:30 | Fictional enterprise problem: work activity is evidence, not verified expertise. Start the product-lifecycle tour. |
| 0:30–1:00 | Compare priorities in the Decision Lab. Weighting is illustrative; real tenant access remains a gate. |
| 1:00–1:35 | Import a synthetic incident; inspect identity, evidence and pending review. Explicitly approve the current revision, then synchronize. |
| 1:35–2:25 | Demonstrate destination failure. A failed attempt remains visible; restore the simulator, advance logical time and retry without a duplicate local write. |
| 2:25–3:00 | Inspect launch readiness. Local success cannot clear real contracts, durable state, authenticated identity, governance or support prerequisites. |

No narration, music, real employee data, customer result or public deployment is implied. The recording illustrates a workflow, while the current executable demo and receipts establish what was checked in the prepared release.
`,"validation/public-test-evidence.json":`{
  "kind": "Self-verified local automated test execution; synthetic portfolio scope",
  "status": "passed",
  "checkedAt": "2026-11-23T02:16:08.360Z",
  "commit": "a1936d7716877316a33b9212d992b5971094370c",
  "workingTreeDirty": true,
  "sourceFingerprint": "509b8abba85db2958f420f2fe6bf219fc8c9d8a094d301c26619baff0a8cdfd9",
  "runtime": {
    "node": "v24.22.2",
    "platform": "darwin"
  },
  "testCount": 44,
  "cases": [
    {
      "name": "API contract: validates requests, enforces origin, returns validated states and isolates sessions",
      "status": "passed",
      "durationMs": 54.43866600000001
    },
    {
      "name": "taxonomy endpoint rejects arbitrary URLs and modes and serves a validated offline reference",
      "status": "passed",
      "durationMs": 2.2434169999999654
    },
    {
      "name": "rejects oversized chunked and multibyte bodies before full consumption without changing evidence",
      "status": "passed",
      "durationMs": 1.1005420000000186
    },
    {
      "name": "bounds anonymous session allocation and returns an explicit capacity error without sharing another session",
      "status": "passed",
      "durationMs": 12.06654199999997
    },
    {
      "name": "static public transport isolates tabs, uses the real engine, denies unauthorized action and resets",
      "status": "passed",
      "durationMs": 27.07454100000001
    },
    {
      "name": "static public transport never represents a live taxonomy request as a real connection",
      "status": "passed",
      "durationMs": 1.1299579999999878
    },
    {
      "name": "keeps approved JSON and Markdown in the library and sends unpublished source references to accessible verification evidence",
      "status": "passed",
      "durationMs": 1.3192499999999967
    },
    {
      "name": "preserves external links and fragments while rejecting unsupported schemes and network-relative links",
      "status": "passed",
      "durationMs": 0.1565000000000083
    },
    {
      "name": "exports only approved artifacts; career and feedback categories stay private even if listed",
      "status": "passed",
      "durationMs": 10.729375000000005
    },
    {
      "name": "fails closed on stale unapproved public files before rewriting the client index",
      "status": "passed",
      "durationMs": 6.315666999999991
    },
    {
      "name": "Evidence → approved synchronization normalizes evidence, maps explicit identity and preserves provenance without automatic approval",
      "status": "passed",
      "durationMs": 3.2168340000000057
    },
    {
      "name": "Evidence → approved synchronization writes once after current approval and subsequent sync is a no-op",
      "status": "passed",
      "durationMs": 0.7740419999999801
    },
    {
      "name": "Evidence → approved synchronization rejects weak evidence and never writes it",
      "status": "passed",
      "durationMs": 0.2847080000000233
    },
    {
      "name": "Evidence → approved synchronization A: duplicate events yield one suggestion and one destination write",
      "status": "passed",
      "durationMs": 0.3211250000000234
    },
    {
      "name": "Evidence → approved synchronization B: respects Retry-After, exponential backoff and a maximum of three attempts",
      "status": "passed",
      "durationMs": 0.2994170000000054
    },
    {
      "name": "Evidence → approved synchronization C: unresolved identity blocks approval and sync, explicit resolution reopens review",
      "status": "passed",
      "durationMs": 0.7032080000000178
    },
    {
      "name": "Evidence → approved synchronization D: a low score is a suggestion requiring review, never automatic competency",
      "status": "passed",
      "durationMs": 0.15379100000001245
    },
    {
      "name": "Evidence → approved synchronization E: failed work is retained and recovers once without duplicate writes",
      "status": "passed",
      "durationMs": 0.5047500000000014
    },
    {
      "name": "Evidence → approved synchronization F: unsupported taxonomy blocks both approval and writes",
      "status": "passed",
      "durationMs": 0.2520419999999888
    },
    {
      "name": "Evidence → approved synchronization G: viewer cannot approve, reject, synchronize or resolve identity, and denials are audited",
      "status": "passed",
      "durationMs": 0.4667910000000006
    },
    {
      "name": "Evidence → approved synchronization H: changed evidence invalidates approval and old reviewer revision cannot be replayed",
      "status": "passed",
      "durationMs": 0.2384580000000085
    },
    {
      "name": "Evidence → approved synchronization rejects conflicting same-version content and out-of-order source versions",
      "status": "passed",
      "durationMs": 0.19283400000000483
    },
    {
      "name": "Evidence → approved synchronization keeps ordered audit sequence and calculates empty and populated metrics from state",
      "status": "passed",
      "durationMs": 4.6432909999999765
    },
    {
      "name": "Evidence → approved synchronization resets all evidence, writes, retries and metrics in the current session",
      "status": "passed",
      "durationMs": 0.26291599999998994
    },
    {
      "name": "Evidence → approved synchronization validates bounded contracts and rejects unexpected fields",
      "status": "passed",
      "durationMs": 0.32037500000001273
    },
    {
      "name": "Evidence → approved synchronization runs deterministic stale and unauthorized injectors reproducibly",
      "status": "passed",
      "durationMs": 0.14441700000000424
    },
    {
      "name": "keeps recovery metrics scoped to the current evidence revision",
      "status": "passed",
      "durationMs": 0.19966700000000515
    },
    {
      "name": "recorded mode performs no external request and does not masquerade as live",
      "status": "passed",
      "durationMs": 3.611707999999993
    },
    {
      "name": "live contract is fixed, schema-validated, cached and coalesced; it cannot authorize a mapping",
      "status": "passed",
      "durationMs": 63.86454199999997
    },
    {
      "name": "HTTP 429 returns explicit recorded fallback and respects the cooldown",
      "status": "passed",
      "durationMs": 0.9299170000000458
    },
    {
      "name": "HTTP 503 returns explicit recorded fallback and respects the cooldown",
      "status": "passed",
      "durationMs": 0.28716600000001336
    },
    {
      "name": "rejects contract drift without changing the recorded reference",
      "status": "passed",
      "durationMs": 0.6413750000000391
    },
    {
      "name": "rejects contract drift without changing the recorded reference",
      "status": "passed",
      "durationMs": 0.33583300000003646
    },
    {
      "name": "rejects contract drift without changing the recorded reference",
      "status": "passed",
      "durationMs": 0.2156659999999988
    },
    {
      "name": "rejects invalid JSON, unexpected types, redirects and oversized responses safely",
      "status": "passed",
      "durationMs": 0.9526250000000118
    },
    {
      "name": "aborts a slow provider and uses the recorded fallback",
      "status": "passed",
      "durationMs": 2.016958000000045
    },
    {
      "name": "records reproducible scenario results from executed transitions",
      "status": "passed",
      "durationMs": 13.986874999999998
    },
    {
      "name": "OpenAPI contract is structurally valid and covers the actual API surfaces",
      "status": "passed",
      "durationMs": 95.71358399999997
    },
    {
      "name": "normalizes weights and keeps access-blocked work out of the recommended ranking",
      "status": "passed",
      "durationMs": 2.2208750000000066
    },
    {
      "name": "only observed session behavior satisfies demonstration criteria; pilot prerequisites remain independent",
      "status": "passed",
      "durationMs": 4.257333000000017
    },
    {
      "name": "normalizes the authorized origin while blocking credentials, query data and path-based or insecure publication URLs",
      "status": "passed",
      "durationMs": 1.503541999999996
    },
    {
      "name": "rejects unexpected static files, private markers and public source maps rather than trusting a hidden link",
      "status": "passed",
      "durationMs": 11.070999999999998
    },
    {
      "name": "blocks changed approved assets and a Worker configured to expose server output",
      "status": "passed",
      "durationMs": 11.368167
    },
    {
      "name": "copies only hash-reviewed named media and refuses stale or changed source output",
      "status": "passed",
      "durationMs": 11.444250000000011
    }
  ],
  "limitations": [
    "No customer validation or independent endorsement",
    "No production durability, SSO or tenant-security guarantee",
    "Unit/API/contract checks; browser and packaged-app checks reported separately"
  ]
}
`,"showcase/github-pages-demo.md":`# SkillsBridge: public demonstration scope

SkillsBridge is an independent enterprise product management and integration case study built using synthetic data and simulated enterprise integrations.

## Start with the decision
A resolved incident is evidence of activity, not proof of competency. The selected MVP prioritizes deliberate human review and reliable delivery over automated inference or connector expansion. Prioritization inputs and business benefits remain unvalidated hypotheses.

## Three-minute visit
1. Open the workspace and choose **3-minute tour**.
2. Inspect a product priority in Discovery & strategy.
3. Import an incident, inspect evidence, approve its current revision and synchronize.
4. Choose Integration failure, approve, synchronize, restore the destination and advance the retry clock. Inspect the audit trail.
5. Open Launch readiness and inspect the test receipt and pilot prerequisites.

## What this public site runs
The six-screen interface uses the same deterministic TypeScript engine as the separately tested server prototype. GitHub Pages serves static files. Commands execute in this browser tab; no server API, database, cookies, employee system or external write exists. Reloading starts a fresh session; tabs do not share state. Demo roles illustrate rules and are not authentication or an enforceable security boundary. Retry time is a manually advanced logical clock.

The optional ESCO check shows a recorded public taxonomy reference. Live requests are disabled in this distribution, including when the live-check button is selected; an explicit fallback reason is displayed. Earlier external API receipts describe a separate read-only test, not an active connection from this website. Workday and ServiceNow connections are fictional.

## Evidence and limits
- [Product decisions](../product/decision-log.md): alternatives, trade-offs and reconsideration triggers. Inputs are assumptions, not customer research.
- [Failure scenarios](../architecture/failure-scenarios.md): deterministic safeguards and operational gaps.
- [Automated test receipt](../validation/public-test-evidence.json): names and outcomes from an actual test run; self-verification, not third-party assurance.
- [Architecture](../architecture/system-overview.md): the server prototype design; the public browser edition replaces its HTTP transport with local memory.
- [Executive case study](executive-case-study.md) and [one-page brief](one-page-product-brief.md).

The private development repository, its Git history, career files, interview notes and outreach drafts are not distributed. Public source distribution contains only reviewed compiled assets, selected evidence and deployment configuration. No repository license is granted automatically.

AI-assisted analysis, writing and implementation supported this independent project. Repository output does not establish the creator's independent mastery, professional employment experience, customer validation, production reliability or measured business outcomes.

## Before a real pilot
Validate demand and employee trust; establish consent and purpose, verified identity mappings, SSO, authorization, durable storage and delivery, retention, support ownership and customer acceptance criteria. GitHub Pages cannot provide custom security response headers or enterprise access control; no sensitive data belongs here.
`},Bl=`/library?doc=showcase%2Fevidence.md`;function Vl(e,t,n){if(!e)return`#`;if(/^https?:\/\/github\.com\/phlppgdfry\/skillsbridge-enterprise-product-case(?:\/|$)/i.test(e))return Bl;if(/^(https?:|mailto:|#)/i.test(e))return e;if(/^[a-z][a-z0-9+.-]*:/i.test(e))return`#`;let r=new URL(e,`https://skillsbridge.invalid/docs/${t}`);if(r.origin!==`https://skillsbridge.invalid`)return`#`;let i=r.pathname.startsWith(`/docs/`)?r.pathname.slice(6):null;return i&&Object.hasOwn(n,i)?`/library?doc=${encodeURIComponent(i)}${r.hash}`:Bl}var Hl=zl;function Ul(){let[e,t]=(0,fo.useState)(`showcase/evidence.md`),r=Object.hasOwn(Hl,e),[s,l]=(0,fo.useState)(``);(0,fo.useEffect)(()=>{let e=()=>{let e=new URLSearchParams(location.search).get(`doc`);t(e||`showcase/evidence.md`)};return e(),window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]);let u=e=>{t(e),history.pushState({},``,a(`/library?doc=${encodeURIComponent(e)}`)),window.scrollTo(0,0)};return(0,Z.jsxs)(`div`,{className:`doc-shell`,children:[(0,Z.jsxs)(`header`,{className:`doc-header`,children:[(0,Z.jsxs)(n,{href:`/`,children:[(0,Z.jsx)(o,{size:17}),`SkillsBridge workspace`]}),(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(c,{size:17}),`Product evidence library`]}),r&&(0,Z.jsxs)(`a`,{href:a(`/documents/${e}`),target:`_blank`,rel:`noreferrer`,children:[`View source`,(0,Z.jsx)(i,{size:14})]})]}),(0,Z.jsxs)(`div`,{className:`doc-layout`,children:[(0,Z.jsxs)(`aside`,{className:`doc-nav`,children:[(0,Z.jsx)(`h2`,{children:`Explore the evidence`}),(0,Z.jsx)(`label`,{htmlFor:`doc-filter`,children:`Find a document`}),(0,Z.jsx)(`input`,{id:`doc-filter`,value:s,onChange:e=>l(e.target.value),placeholder:`Discovery, contracts, tests…`}),Object.keys(Hl).filter(e=>e.toLowerCase().includes(s.toLowerCase())).length===0&&(0,Z.jsx)(`output`,{children:`No matching documents. Try “identity”, “decisions” or “evidence”.`}),[[`showcase`,`Start here`],[`product`,`Product strategy`],[`architecture`,`Integration architecture`],[`delivery`,`Requirements & delivery`],[`validation`,`Verification results`],[`research`,`Public research`]].map(([t,n])=>{let r=Object.keys(Hl).filter(e=>e.startsWith(t+`/`)&&e.toLowerCase().includes(s.toLowerCase()));if(!r.length)return null;let i={"validation/public-test-evidence.json":`Executed automated tests`,"architecture/api-specification.yaml":`API contract (OpenAPI)`,"validation/external-api-check.json":`Observed ESCO reference`,"validation/simulation-results.json":`Executed demo scenarios`,"product/phase-2-positioning.md":`Lifecycle positioning`,"showcase/evidence.md":`Evidence guide`,"showcase/executive-case-study.md":`Executive case study`,"showcase/one-page-product-brief.md":`One-page product brief`,"showcase/walkthrough-transcript.md":`Recorded tour: text alternative`};return(0,Z.jsxs)(`details`,{open:!!s||e.startsWith(t+`/`),children:[(0,Z.jsxs)(`summary`,{children:[n,(0,Z.jsx)(`span`,{children:r.length})]}),r.map(t=>(0,Z.jsx)(`button`,{"aria-current":t===e?`page`:void 0,className:t===e?`active`:``,onClick:()=>u(t),children:i[t]??t.split(`/`).at(-1)?.replace(/\.(md|yaml|csv|json)$/,``).replaceAll(`-`,` `)},t))]},t)})]}),(0,Z.jsxs)(`article`,{className:`doc-article`,children:[(0,Z.jsx)(`p`,{className:`library-access-note`,children:`Reviewed product documents and actual verification receipts. No repository login required. Source code, private history and personal career materials are not distributed.`}),(0,Z.jsx)(`div`,{className:`eyebrow`,children:e}),r?e.endsWith(`.md`)?(0,Z.jsx)(_o,{remarkPlugins:[Rl],components:{table:Wl,a:({href:t,children:n})=>(0,Z.jsx)(`a`,{href:a(Vl(t,e,Hl)),children:n})},children:Hl[e]}):(0,Z.jsx)(`pre`,{children:Hl[e]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`h1`,{children:`Document not available in showcase`}),(0,Z.jsx)(`p`,{children:`Choose a published artifact from the evidence library.`})]})]})]})]})}function Wl({children:e}){return(0,Z.jsxs)(`section`,{className:`doc-table-scroll`,"aria-label":`Evidence table`,tabIndex:0,children:[(0,Z.jsx)(`small`,{className:`doc-table-help`,children:`Scroll horizontally to read every column. Keyboard: focus the table and use the arrow keys.`}),(0,Z.jsx)(`table`,{children:e})]})}export{Ul as default};