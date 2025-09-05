import{C as Lt,a as Er,b as j,c as Nt,d as ye,e as Ar,f as Tr,g as $t,h as bn,i as pn,j as Sr,M as vr,k as Ir,l as Pr,T as ct,m as Dt,n as wr,o as q,p as Or,q as Rr,t as V,R as gn,r as W}from"./createChartContainer-DlCyyI4N.js";import{w as Ca,c as S,a as Nr,s as $r,x as Dr,y as Mr,B as Br,r as ce,D as La,A as et,b as jr,P as xa,H as Fr,d as kr,e as Hr,f as Yt,g as _n,h as zr,i as Ea,j as fn,k as Ur,l as Gr,m as Xr,n as Yr,o as Aa,p as Vr,q as Wr,N as Vt,t as Ta,u as Ce,v as Wt,z as Kt,E as Kr,C as Sa,F as Zr,M as J,G as qr,I as Mt,J as va,K as Le,L as Zt,O as tt,Q as Jr,S as Qr,R as G,T as es,U as Ia,V as mn,W as qt,X as Jt,Y as Pa,Z as ts,_ as dt,$ as ns,a0 as as,a1 as rs,a2 as yn,a3 as ss,a4 as os,a5 as is,a6 as ls,a7 as xe,a8 as Bt,a9 as cs,aa as ds,ab as us}from"./renderKpiChart-WJ6CjSgQ.js";import{H as wa}from"./hideControlsConfig-O9ieGQoS.js";import{g as hs,d as Qt,D as en,e as bs,S as de}from"./showControlsConfig-BkXgCfWc.js";import{C as tn,K as ps,k as xt,f as gs,g as _s,M as fs,a as ms,b as E,A as Cn}from"./index-bx5UDdu9.js";import{s as D,i as jt,a as Oa,e as Ra,L as ys}from"./Legend-Duf6jDAd.js";import{c as Ln}from"./toFinite-BIy35DfP.js";import{i as xn}from"./inRange-DGXLyEz7.js";import{i as ut,b as Ie,r as F,a as Pe,f as Cs,c as nn,S as En}from"./isArray-CB37-zr1.js";import"./_commonjsHelpers-CE1G-McA.js";import"./iframe-FpZ5geXM.js";import"./preload-helper-D9Z9MdNV.js";function Ls(t){var e=0,n=t.children,a=n&&n.length;if(!a)e=1;else for(;--a>=0;)e+=n[a].value;t.value=e}function xs(){return this.eachAfter(Ls)}function Es(t,e){let n=-1;for(const a of this)t.call(e,a,++n,this);return this}function As(t,e){for(var n=this,a=[n],s,r,l=-1;n=a.pop();)if(t.call(e,n,++l,this),s=n.children)for(r=s.length-1;r>=0;--r)a.push(s[r]);return this}function Ts(t,e){for(var n=this,a=[n],s=[],r,l,o,c=-1;n=a.pop();)if(s.push(n),r=n.children)for(l=0,o=r.length;l<o;++l)a.push(r[l]);for(;n=s.pop();)t.call(e,n,++c,this);return this}function Ss(t,e){let n=-1;for(const a of this)if(t.call(e,a,++n,this))return a}function vs(t){return this.eachAfter(function(e){for(var n=+t(e.data)||0,a=e.children,s=a&&a.length;--s>=0;)n+=a[s].value;e.value=n})}function Is(t){return this.eachBefore(function(e){e.children&&e.children.sort(t)})}function Ps(t){for(var e=this,n=ws(e,t),a=[e];e!==n;)e=e.parent,a.push(e);for(var s=a.length;t!==n;)a.splice(s,0,t),t=t.parent;return a}function ws(t,e){if(t===e)return t;var n=t.ancestors(),a=e.ancestors(),s=null;for(t=n.pop(),e=a.pop();t===e;)s=t,t=n.pop(),e=a.pop();return s}function Os(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e}function Rs(){return Array.from(this)}function Ns(){var t=[];return this.eachBefore(function(e){e.children||t.push(e)}),t}function $s(){var t=this,e=[];return t.each(function(n){n!==t&&e.push({source:n.parent,target:n})}),e}function*Ds(){var t=this,e,n=[t],a,s,r;do for(e=n.reverse(),n=[];t=e.pop();)if(yield t,a=t.children)for(s=0,r=a.length;s<r;++s)n.push(a[s]);while(n.length)}function an(t,e){t instanceof Map?(t=[void 0,t],e===void 0&&(e=js)):e===void 0&&(e=Bs);for(var n=new Ee(t),a,s=[n],r,l,o,c;a=s.pop();)if((l=e(a.data))&&(c=(l=Array.from(l)).length))for(a.children=l,o=c-1;o>=0;--o)s.push(r=l[o]=new Ee(l[o])),r.parent=a,r.depth=a.depth+1;return n.eachBefore(ks)}function Ms(){return an(this).eachBefore(Fs)}function Bs(t){return t.children}function js(t){return Array.isArray(t)?t[1]:null}function Fs(t){t.data.value!==void 0&&(t.value=t.data.value),t.data=t.data.data}function ks(t){var e=0;do t.height=e;while((t=t.parent)&&t.height<++e)}function Ee(t){this.data=t,this.depth=this.height=0,this.parent=null}Ee.prototype=an.prototype={constructor:Ee,count:xs,each:Es,eachAfter:Ts,eachBefore:As,find:Ss,sum:vs,sort:Is,path:Ps,ancestors:Os,descendants:Rs,leaves:Ns,links:$s,copy:Ms,[Symbol.iterator]:Ds};function Hs(t,e){return t.parent===e.parent?1:2}function Et(t){var e=t.children;return e?e[0]:t.t}function At(t){var e=t.children;return e?e[e.length-1]:t.t}function zs(t,e,n){var a=n/(e.i-t.i);e.c-=a,e.s+=n,t.c+=a,e.z+=n,e.m+=n}function Us(t){for(var e=0,n=0,a=t.children,s=a.length,r;--s>=0;)r=a[s],r.z+=e,r.m+=e,e+=r.s+(n+=r.c)}function Gs(t,e,n){return t.a.parent===e.parent?t.a:n}function We(t,e){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=e}We.prototype=Object.create(Ee.prototype);function Xs(t){for(var e=new We(t,0),n,a=[e],s,r,l,o;n=a.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),l=o-1;l>=0;--l)a.push(s=n.children[l]=new We(r[l],l)),s.parent=n;return(e.parent=new We(null,0)).children=[e],e}function Ys(){var t=Hs,e=1,n=1,a=null;function s(i){var d=Xs(i);if(d.eachAfter(r),d.parent.m=-d.z,d.eachBefore(l),a)i.eachBefore(c);else{var b=i,u=i,h=i;i.eachBefore(function(f){f.x<b.x&&(b=f),f.x>u.x&&(u=f),f.depth>h.depth&&(h=f)});var p=b===u?1:t(b,u)/2,m=p-b.x,T=e/(u.x+p+m),_=n/(h.depth||1);i.eachBefore(function(f){f.x=(f.x+m)*T,f.y=f.depth*_})}return i}function r(i){var d=i.children,b=i.parent.children,u=i.i?b[i.i-1]:null;if(d){Us(i);var h=(d[0].z+d[d.length-1].z)/2;u?(i.z=u.z+t(i._,u._),i.m=i.z-h):i.z=h}else u&&(i.z=u.z+t(i._,u._));i.parent.A=o(i,u,i.parent.A||b[0])}function l(i){i._.x=i.z+i.parent.m,i.m+=i.parent.m}function o(i,d,b){if(d){for(var u=i,h=i,p=d,m=u.parent.children[0],T=u.m,_=h.m,f=p.m,A=m.m,x;p=At(p),u=Et(u),p&&u;)m=Et(m),h=At(h),h.a=i,x=p.z+f-u.z-T+t(p._,u._),x>0&&(zs(Gs(p,i,b),i,x),T+=x,_+=x),f+=p.m,T+=u.m,A+=m.m,_+=h.m;p&&!At(h)&&(h.t=p,h.m+=f-_),u&&!Et(m)&&(m.t=u,m.m+=T-A,b=i)}return b}function c(i){i.x*=e,i.y=i.depth*n}return s.separation=function(i){return arguments.length?(t=i,s):t},s.size=function(i){return arguments.length?(a=!1,e=+i[0],n=+i[1],s):a?null:[e,n]},s.nodeSize=function(i){return arguments.length?(a=!0,e=+i[0],n=+i[1],s):a?[e,n]:null},s}const An=Math.abs,v=Math.atan2,Z=Math.cos,Vs=Math.max,Tt=Math.min,$=Math.sin,ie=Math.sqrt,w=1e-12,Ae=Math.PI,nt=Ae/2,Ke=2*Ae;function Ws(t){return t>1?0:t<-1?Ae:Math.acos(t)}function Tn(t){return t>=1?nt:t<=-1?-nt:Math.asin(t)}function Ks(t){return t.innerRadius}function Zs(t){return t.outerRadius}function qs(t){return t.startAngle}function Js(t){return t.endAngle}function Qs(t){return t&&t.padAngle}function eo(t,e,n,a,s,r,l,o){var c=n-t,i=a-e,d=l-s,b=o-r,u=b*c-d*i;if(!(u*u<w))return u=(d*(e-r)-b*(t-s))/u,[t+u*c,e+u*i]}function De(t,e,n,a,s,r,l){var o=t-n,c=e-a,i=(l?r:-r)/ie(o*o+c*c),d=i*c,b=-i*o,u=t+d,h=e+b,p=n+d,m=a+b,T=(u+p)/2,_=(h+m)/2,f=p-u,A=m-h,x=f*f+A*A,I=s-r,P=u*m-p*h,H=(A<0?-1:1)*ie(Vs(0,I*I*x-P*P)),z=(P*A-f*H)/x,U=(-P*f-A*H)/x,N=(P*A+f*H)/x,O=(-P*f+A*H)/x,R=z-T,g=U-_,y=N-T,K=O-_;return R*R+g*g>y*y+K*K&&(z=N,U=O),{cx:z,cy:U,x01:-d,y01:-b,x11:z*(s/I-1),y11:U*(s/I-1)}}function to(){var t=Ks,e=Zs,n=S(0),a=null,s=qs,r=Js,l=Qs,o=null,c=Ca(i);function i(){var d,b,u=+t.apply(this,arguments),h=+e.apply(this,arguments),p=s.apply(this,arguments)-nt,m=r.apply(this,arguments)-nt,T=An(m-p),_=m>p;if(o||(o=d=c()),h<u&&(b=h,h=u,u=b),!(h>w))o.moveTo(0,0);else if(T>Ke-w)o.moveTo(h*Z(p),h*$(p)),o.arc(0,0,h,p,m,!_),u>w&&(o.moveTo(u*Z(m),u*$(m)),o.arc(0,0,u,m,p,_));else{var f=p,A=m,x=p,I=m,P=T,H=T,z=l.apply(this,arguments)/2,U=z>w&&(a?+a.apply(this,arguments):ie(u*u+h*h)),N=Tt(An(h-u)/2,+n.apply(this,arguments)),O=N,R=N,g,y;if(U>w){var K=Tn(U/u*$(z)),we=Tn(U/h*$(z));(P-=K*2)>w?(K*=_?1:-1,x+=K,I-=K):(P=0,x=I=(p+m)/2),(H-=we*2)>w?(we*=_?1:-1,f+=we,A-=we):(H=0,f=A=(p+m)/2)}var ae=h*Z(f),re=h*$(f),Oe=u*Z(I),Re=u*$(I);if(N>w){var Ne=h*Z(A),$e=h*$(A),gt=u*Z(x),_t=u*$(x),M;if(T<Ae)if(M=eo(ae,re,gt,_t,Ne,$e,Oe,Re)){var ft=ae-M[0],mt=re-M[1],yt=Ne-M[0],Ct=$e-M[1],un=1/$(Ws((ft*yt+mt*Ct)/(ie(ft*ft+mt*mt)*ie(yt*yt+Ct*Ct)))/2),hn=ie(M[0]*M[0]+M[1]*M[1]);O=Tt(N,(u-hn)/(un-1)),R=Tt(N,(h-hn)/(un+1))}else O=R=0}H>w?R>w?(g=De(gt,_t,ae,re,h,R,_),y=De(Ne,$e,Oe,Re,h,R,_),o.moveTo(g.cx+g.x01,g.cy+g.y01),R<N?o.arc(g.cx,g.cy,R,v(g.y01,g.x01),v(y.y01,y.x01),!_):(o.arc(g.cx,g.cy,R,v(g.y01,g.x01),v(g.y11,g.x11),!_),o.arc(0,0,h,v(g.cy+g.y11,g.cx+g.x11),v(y.cy+y.y11,y.cx+y.x11),!_),o.arc(y.cx,y.cy,R,v(y.y11,y.x11),v(y.y01,y.x01),!_))):(o.moveTo(ae,re),o.arc(0,0,h,f,A,!_)):o.moveTo(ae,re),!(u>w)||!(P>w)?o.lineTo(Oe,Re):O>w?(g=De(Oe,Re,Ne,$e,u,-O,_),y=De(ae,re,gt,_t,u,-O,_),o.lineTo(g.cx+g.x01,g.cy+g.y01),O<N?o.arc(g.cx,g.cy,O,v(g.y01,g.x01),v(y.y01,y.x01),!_):(o.arc(g.cx,g.cy,O,v(g.y01,g.x01),v(g.y11,g.x11),!_),o.arc(0,0,u,v(g.cy+g.y11,g.cx+g.x11),v(y.cy+y.y11,y.cx+y.x11),_),o.arc(y.cx,y.cy,O,v(y.y11,y.x11),v(y.y01,y.x01),!_))):o.arc(0,0,u,I,x,_)}if(o.closePath(),d)return o=null,d+""||null}return i.centroid=function(){var d=(+t.apply(this,arguments)+ +e.apply(this,arguments))/2,b=(+s.apply(this,arguments)+ +r.apply(this,arguments))/2-Ae/2;return[Z(b)*d,$(b)*d]},i.innerRadius=function(d){return arguments.length?(t=typeof d=="function"?d:S(+d),i):t},i.outerRadius=function(d){return arguments.length?(e=typeof d=="function"?d:S(+d),i):e},i.cornerRadius=function(d){return arguments.length?(n=typeof d=="function"?d:S(+d),i):n},i.padRadius=function(d){return arguments.length?(a=d==null?null:typeof d=="function"?d:S(+d),i):a},i.startAngle=function(d){return arguments.length?(s=typeof d=="function"?d:S(+d),i):s},i.endAngle=function(d){return arguments.length?(r=typeof d=="function"?d:S(+d),i):r},i.padAngle=function(d){return arguments.length?(l=typeof d=="function"?d:S(+d),i):l},i.context=function(d){return arguments.length?(o=d??null,i):o},i}function no(t,e){return e<t?-1:e>t?1:e>=t?0:NaN}function ao(t){return t}function ro(){var t=ao,e=no,n=null,a=S(0),s=S(Ke),r=S(0);function l(o){var c,i=(o=Nr(o)).length,d,b,u=0,h=new Array(i),p=new Array(i),m=+a.apply(this,arguments),T=Math.min(Ke,Math.max(-Ke,s.apply(this,arguments)-m)),_,f=Math.min(Math.abs(T)/i,r.apply(this,arguments)),A=f*(T<0?-1:1),x;for(c=0;c<i;++c)(x=p[h[c]=c]=+t(o[c],c,o))>0&&(u+=x);for(e!=null?h.sort(function(I,P){return e(p[I],p[P])}):n!=null&&h.sort(function(I,P){return n(o[I],o[P])}),c=0,b=u?(T-i*A)/u:0;c<i;++c,m=_)d=h[c],x=p[d],_=m+(x>0?x*b:0)+A,p[d]={data:o[d],index:c,value:x,startAngle:m,endAngle:_,padAngle:f};return p}return l.value=function(o){return arguments.length?(t=typeof o=="function"?o:S(+o),l):t},l.sortValues=function(o){return arguments.length?(e=o,n=null,l):e},l.sort=function(o){return arguments.length?(n=o,e=null,l):n},l.startAngle=function(o){return arguments.length?(a=typeof o=="function"?o:S(+o),l):a},l.endAngle=function(o){return arguments.length?(s=typeof o=="function"?o:S(+o),l):s},l.padAngle=function(o){return arguments.length?(r=typeof o=="function"?o:S(+o),l):r},l}class Na{constructor(e,n){this._context=e,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(e,n){switch(e=+e,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+e)/2,this._y0,this._x0,n,e,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,e,this._y0,e,n);break}}this._x0=e,this._y0=n}}function so(t){return new Na(t,!0)}function oo(t){return new Na(t,!1)}function io(t){return t.source}function lo(t){return t.target}function $a(t){let e=io,n=lo,a=Dr,s=Mr,r=null,l=null,o=Ca(c);function c(){let i;const d=$r.call(arguments),b=e.apply(this,d),u=n.apply(this,d);if(r==null&&(l=t(i=o())),l.lineStart(),d[0]=b,l.point(+a.apply(this,d),+s.apply(this,d)),d[0]=u,l.point(+a.apply(this,d),+s.apply(this,d)),l.lineEnd(),i)return l=null,i+""||null}return c.source=function(i){return arguments.length?(e=i,c):e},c.target=function(i){return arguments.length?(n=i,c):n},c.x=function(i){return arguments.length?(a=typeof i=="function"?i:S(+i),c):a},c.y=function(i){return arguments.length?(s=typeof i=="function"?i:S(+i),c):s},c.context=function(i){return arguments.length?(i==null?r=l=null:l=t(r=i),c):r},c}function co(){return $a(so)}function uo(){return $a(oo)}class ho extends Br{constructor({onUpdate:e,onSelect:n,selection:a}){super({onUpdate:e,selection:a}),this._onSelect=n}handleSelectionClick(e,n){this._selectedIndexList.findIndex(s=>n.data.index===s)===-1?this._selectedIndexList=[...this._selectedIndexList,n.data.index]:this._selectedIndexList=this._selectedIndexList.filter(s=>n.data.index!==s),this._updateSelection(),this._onSelect?.(this._selectedIndexList)}}const Da=t=>{switch(t){case"success":return"var(--color-success-icon)";case"fail":return"var(--color-error-icon)";case"none":return"var(--color-icon-default)"}},Sn=4,Ze=12.5,bo=(t,e,n)=>e<=0?0:t%e*n,po=(t,e,n)=>e<=0?0:Math.floor(t/e)*n;class go{set data(e){this._data=e,this.render()}constructor({chart:e,data:n,colorCallback:a,onDotClicked:s}){this._chart=e,this._data=n,this._color=a??Da,this._onDotClicked=s;const r=this._chart.root;this._circles=r.append("g").attr("transform",`translate(${this._chart.innerMargin.left+Sn},${this._chart.innerMargin.top+Ze*2})`)}destroy(){this.clear(),this._circles.node()?.remove()}clear(){this._circles.selectAll("circle").on("click",null).remove()}render(){const e=this._chart.clientWidth(),n=Ze*2+Sn,a=Math.floor(e/n);this.clear(),this._data&&this._circles.selectAll(Lt).data(this._data).join(Lt).attr("class",Lt).attr("tabindex",(s,r)=>r+1).attr("id",(s,r)=>r).attr("fill",s=>this._color(s.status)).attr("r",Ze).attr("cx",(s,r)=>bo(r,a,n)).attr("cy",(s,r)=>po(r,a,n)).on("click",(s,r)=>{this._onDotClicked?.call(this._chart,r)})}}const rn=12,Ma=(t,e)=>{const[n,a]=e.centroid(t),r=t.startAngle>.5*Math.PI&&t.startAngle<1.5*Math.PI&&t.endAngle<1.5*Math.PI?rn:0;return`translate(${n}, ${a+r})`},vn=4,at=({arcData:t,fromArc:e,toArc:n})=>{const[a,s]=e.centroid(t),[r,l]=n.centroid(t),o=r-a,c=l-s,i=Math.sqrt(o*o+c*c),d=o/i,b=c/i,u=r-d*vn,h=l-b*vn;return[u,h]},_o=.1,fo=t=>{const e=2*Math.PI*_o,n=(t+e)%(2*Math.PI);return xn(n,0,e)||xn(t,Math.PI-e,Math.PI+e)},Ba=(t,e)=>{const n=(t+e)/2,a=fo(n),r=n<Math.PI?"start":"end";return a?"middle":r},mo=(t,e)=>(e-t)/(2*Math.PI)*100,ja=2*Math.PI*.05,sn=(t,e)=>{const n=mo(t.startAngle,t.endAngle);return e(n,t.data)??""},yo=(t,e,n,a)=>{const s=t.append("g").attr("class",Er).style("opacity",r=>r.endAngle-r.startAngle<ja?0:1);return s.append("line").attr("fill","none").attr("stroke-width",1).attr("x1",r=>n.centroid(r)[0]).attr("y1",r=>n.centroid(r)[1]).attr("x2",r=>at({arcData:r,fromArc:n,toArc:e})[0]).attr("y2",r=>at({arcData:r,fromArc:n,toArc:e})[1]),s.append("text").style("font-size",`${rn}px`).style("font-family",La).style("font-weight",400).text(r=>sn(r,a)).attr("transform",r=>Ma(r,e)).attr("text-anchor",r=>Ba(r.startAngle,r.endAngle)),s},Co=(t,e,n,a)=>{const s=r=>r.endAngle-r.startAngle<ja;return t.select("text").text(r=>sn(r,a)).transition().duration(et).attr("transform",r=>Ma(r,e)).attr("text-anchor",r=>Ba(r.startAngle,r.endAngle)),t.select("line").transition().duration(et).style("opacity",r=>s(r)?1:0).attr("x1",r=>n.centroid(r)[0]).attr("y1",r=>n.centroid(r)[1]).attr("x2",r=>at({arcData:r,fromArc:n,toArc:e})[0]).attr("y2",r=>at({arcData:r,fromArc:n,toArc:e})[1]),t},Lo=({elements:t,labelArcGenerator:e,borderArcGenerator:n,labelFormatCallback:a})=>{t.join(s=>yo(s,e,n,a),s=>Co(s,e,n,a),s=>ce(s))},Fa=8,ka=40,xo=16,Ha=.5,za=(t,e="")=>{const n=t.width<t.height,a=Math.min(t.width,t.height),{width:s,height:r}=hs(e,rn),o=e!==""?ka+(n?s:r):0;return(a-o-xo)/2},St=(t,e)=>to().innerRadius(t).outerRadius(e),Ua=({area:t,maxLabel:e,hasHoverIncrease:n=!1,hasDonutHole:a=!1})=>{const s=a?Ha:0,r=za(t,e),l=n?Fa:0,o=r*s-l,c=jr(o,0,r),i=r+l,d=i+ka;return{pieArc:St(c,i),borderArc:St(i,i),labelArc:St(i,d)}},Eo=(t,e)=>{const n=l=>{l.transition("focusin").duration(Fr).attr("d",e)},a=D(t),s=D(xa),r=s.size()===1&&a.datum()===s.datum();n(a.select("path")),r&&n(s.select("path"))},In=(t,e)=>{if(t.target instanceof Element)switch(t.type){case"mouseenter":case"mouseleave":Eo(t.target,e);break;default:j(!1,"Trying to handle an unsupported event type.")}},Ao=(t,e,n,a,s,r,l,o,c)=>{const i=t.append("g").attr("class",Nt).attr("tabindex",0).on("mouseenter",h=>{const p=Ua({area:n,hasHoverIncrease:!0,hasDonutHole:a,maxLabel:l}).pieArc;In(h,p)}).on("mouseleave",h=>In(h,e)).on("focusin",function(){const h=D(this);h.select("path").interrupt("focusin");const p=h.clone(!0);p.attr("id",kr),p.attr("class",ye(Nt,Ar)),p.attr("tabindex",-1),p.raise()}).on("focusout",()=>{r.select(xa).remove()});(!!o||!!c)&&Hr({selection:i,callback:(h,p)=>{o?.callback(h.data),c?.handleSelectionClick(p,h)},ariaLabel:o?.tooltip});const b=jt(s.colors),u=i.append("path").attr("class",h=>ye(!b&&s.colors[h.index],c?.hasSelection()&&Oa(c.isSelected(h.data.index)))).attr("d",e).attr("stroke","rgba(0, 0, 0, 0.25)");return jt(s.colors)&&u.attr("fill",(h,p)=>s.colors[p]),i},To=(t,e,n,a)=>{const s=jt(n.colors),r=t.select("path").attr("class",l=>ye(!s&&n.colors[l.index],a?.hasSelection()&&Oa(a.isSelected(l.data.index)))).attr("fill",l=>s?n.colors[l.index]:"");return r.transition().duration(et).attr("d",e),r},So=t=>{Yt(t),ce(t,{delay:0,duration:et/2})},vo=({elements:t,arcGenerator:e,area:n,hasDonutHole:a,legend:s,action:r,selector:l,parent:o,maxLabel:c})=>{t.join(i=>Ao(i,e,n,a,s,o,c,r,l),i=>To(i,e,s,l),i=>So(i))},Pn=20,Io=4,Po=20,wn=12,wo=50,On=t=>t+Io,Oo=({centerLabels:t,area:e,className:n,group:a})=>{const l=(za(e)*Ha-Fa)*2,o=(c,i)=>a.append("text").attr("class",n).text(Ra({label:c,maxWidth:l,fontSize:i})).attr("text-anchor","middle").style("font-family",La).attr("font-size",`${i}px`).attr("line-height",`${On(i)}px`);o(t.label,Po).attr("fill","var(--color-foreground)").attr("dy",`-${Pn/2}px`),t.subLabel&&o(t.subLabel,wn).attr("fill","var(--color-foreground-disable)").attr("dy",`${On(wn)/2+Pn/2}px`),a.style("opacity",l>wo?1:0)};class Ro{constructor({centerLabels:e,chart:n,container:a,pieArcAction:s,labelFormatCallback:r,selector:l}){this._legendProps={type:"ordinal",labels:[],colors:[]},this._chart=n,this._centerLabels=e,this._pieArcAction=s,this._labelFormatCallback=r,this._selector=l;const o=a??this._chart.root;this._pieLabels=this._labelFormatCallback?o.append("g"):void 0,this._pie=o.append("g"),this._pieCenterLabels=o.append("g").attr("class",Tr)}get legendProps(){return this._legendProps}destroy(){this.clear(),this._pie.remove(),this._pieCenterLabels.remove(),this._pieLabels?.remove()}update(e){this._centerLabels=e}clear(){const e=this._pie.selectAll($t);Yt(e),e.remove(),this._pieLabels?.selectAll(bn)?.remove(),this._pieLabels?.selectAll(pn)?.remove()}render({area:e}){const n=_n(this._chart);if(n.values.length===0)return;this._centerPie(e);const a=this._getSortedDataWithMeta(n),s=ro().value(b=>b.dataPoint.y.valueOf())(a),r=s.reduce((b,u)=>{const h=this._labelFormatCallback?sn(u,this._labelFormatCallback):"";return h.length>b.length?h:b},""),{pieArc:l,labelArc:o,borderArc:c}=Ua({area:e,maxLabel:r,hasDonutHole:this._centerLabels!==void 0});this._updateLegendProps(s,n),this._renderCenterLabels(e);const i=this._pie.selectAll($t).data(s),d=this._pieLabels?.selectAll(bn).data(s);vo({elements:i,arcGenerator:l,area:e,hasDonutHole:this._centerLabels!==void 0,legend:this._legendProps,action:this._pieArcAction,parent:this._pie,selector:this._selector,maxLabel:r}),d&&this._labelFormatCallback&&Lo({elements:d,labelArcGenerator:o,borderArcGenerator:c,labelFormatCallback:this._labelFormatCallback})}bake(e){this.render(e)}_renderCenterLabels(e){this._pieCenterLabels.selectAll(pn).remove(),this._centerLabels&&Oo({area:e,centerLabels:this._centerLabels,className:Ir,group:this._pieCenterLabels})}_centerPie(e){const n={x:e.left+e.width/2,y:e.top+e.height/2};this._pie.attr("transform",`translate(${n.x}, ${n.y})`),this._pieCenterLabels.attr("transform",`translate(${n.x}, ${n.y})`),this._pieLabels?.attr("transform",`translate(${n.x}, ${n.y})`)}_getSortedDataWithMeta(e){return e.values.map((n,a)=>({dataPoint:n,index:a,meta:e.meta?.[a]})).sort((n,a)=>a.dataPoint.y.valueOf()-n.dataPoint.y.valueOf())}_getArcColor(e){const n=_n(this._chart),a=this._getSortedDataWithMeta(n);j(n.values.length>0,"Expected to have data.");const s=a.map(l=>l.meta),r=e>=0&&e<s.length?s[e]:void 0;return n.color({meta:r,dataIndex:e})}_updateLegendProps(e,n){this._legendProps={type:"ordinal",labels:[],colors:[],selector:this._selector};const a=[];if(n.values.length>0&&n.color!==zr){e.forEach(s=>{const r=s.index;this._legendProps.labels[r]=s.data.dataPoint.x.toString(),this._legendProps.colors[r]=this._getArcColor(r),a[r]=s.data.index}),this._legendProps.indexes=a;return}e.forEach(s=>{const r=s.index;this._legendProps.labels[r]=s.data.dataPoint.x.toString(),this._legendProps.colors[r]=`${Sr}${r%vr}`,a[r]=s.data.index}),this._legendProps.indexes=a}}const No=(t=[],e=[])=>{j(t.length===e?.length,"Expected the number of labels to match the number of values.");const n=e.map(a=>a.toString());return t.map((a,s)=>({x:n[s],y:a}))};let $o=class extends Ea{constructor(e){super(e),this.hideHoverLine=()=>{this._hoverLine?.hide()},this._highlightSelection=()=>{this.hideHoverLine();const a=this._selector?.selectionRange;this._barRenderer.highlightRange(a)};const n=this.instance.root;if(n.attr("class",Pr),this._rendererType="bar",this._xAxis=new fn({chart:this.instance,scaleOptions:e.scaleX,position:e.scaleX?.position??"bottom",type:e.scaleX?.type??"band"}),this._yAxis=new fn({chart:this.instance,scaleOptions:e.scaleY,position:e.scaleY?.position??"left",type:e.scaleY?.type??"linear"}),this.instance.xAxis=this._xAxis.axis,this.instance.yAxis=this._yAxis.axis,j(this.instance.xAxis?.type==="band","Expected the x-axis to be ordinal."),this._barRenderer=new Ur({chart:this.instance,yAccessor:this._yAxis.accessor,xAccessor:this._xAxis.accessor,maximumBarWidth:e.maximumBarWidth}),this._hoverLine=new Gr({chart:this.instance,isDataIndexSelected:this._isDataIndexSelected,xAccessor:this._xAxis.accessor,yAccessor:this._yAxis.accessor,showDataPoint:!1,tooltipFormatter:e.tooltipFormatter}),e.isSelectionEnabled){const a=this._xAxis.scale().bandwidth;this._selector=new Xr({container:n,chartInstance:this.instance,accessor:this.xAxis.accessor,onUpdate:this._highlightSelection,onSelect:e.onSelect,bandwidth:a,limit:e.selectionLimit,canSelect:e.canSelect}),this._selector.setSelection(e.selection??[])}this.update({data:e.data,labels:e.labels,selection:e.selection,meta:e.meta,color:e.color,alt:e.alt})}destroy(){this._yAxis.destroy(),this._xAxis.destroy(),this._hoverLine?.destroy(),this._barRenderer.destroy(),super.destroy()}get xAxis(){return this._xAxis}get yAxis(){return this._yAxis}update(e){super.update(e),this.hideHoverLine();const n=this._dataValues();if(!n||n.length===0){this._clearElements();return}this._xAxis.update(),this._yAxis.update(),this._render(),this.setSelection(e.selection??[])}_mapDataToValues({data:e,labels:n}){return No(e,n)}get _componentType(){return tn.BarChart}_resizeContent(){super._resizeContent(),this._xAxis.reset(),this._yAxis.reset(),this._render()}_renderContent(){this._barRenderer.render()}_clearElements(){this.instance.data=[],this._barRenderer.clear(),this.hideHoverLine()}};const rt=["success","fail","none"],Ga=t=>{switch(t){case"success":return"Success";case"fail":return"Failed";case"none":return"None";default:return"None"}},Do=t=>{const e=`Status - ${Ga(t.status)}`,n=[{cells:[{text:String(t.metaData),role:"primary"}]}];return ct(n,e)},Mo=t=>{const e=t.querySelector(`${Dt}:last-child`);if(!e)return 0;const n=Yr(e?.attributes.getNamedItem("cy")?.value,"Expected dot cy to have a value"),a=parseInt(n),s=Ze*2;return a+s*2};let Bo=class{constructor({container:e,data:n,autoLegend:a,tooltipFormatter:s,colorCallback:r,dotClickCallback:l}){this._legendProps={type:"ordinal",labels:[],colors:[]},this._onTooltipShow=o=>{const c=o.reference;if(!(c instanceof SVGElement))throw Error("Invalid dot chart tooltip target");const i=D(c).datum();o.setContent(this._tooltipFormatter(i))},this.instance=Aa({clientContainer:e,onResize:this._resizeContent.bind(this),className:wr}),this._autoLegendProperties=a??void 0,this._color=r??Da,this._onDotClick=l,this._data=n,this._tooltipFormatter=s??Do,this._dotRenderer=new go({chart:this.instance,data:n,colorCallback:this._color,onDotClicked:this._onDotClick}),this._tooltip=Qt(this.instance.container,{...en,onShow:this._onTooltipShow,target:`${Dt}`,delay:0,duration:0,animation:"none",arrow:!0}),this._keyHandler=new ps({element:this.instance.container,eventType:"keydown",events:[xt(["ArrowLeft","ArrowUp"],()=>this._moveDot("left")),xt(["ArrowRight","ArrowDown"],()=>this._moveDot("right")),xt(["Enter","Space"],()=>this._clickDot())]})}destroy(){this._keyHandler.destroy(),this._dotRenderer?.destroy(),this._legend?.destroy(),this._tooltip.destroy(),this.instance.container.remove()}update(){this._tooltip.disable(),this._dotRenderer.render(),this._tooltip.enable(),this._autoLegendProperties&&this._updateLegend();const e=Mo(this.instance.container);this.instance.parent.attr("height",`${e}px`)}_renderContent(e){this._dotRenderer.data=e}_updateLegend(){this._updateLegendProps();const e=this._legendProps;if(e.position=this._autoLegendProperties?.position,!this._legend){const n=Vr(this.instance.container,e);this._legend=new ys({container:n,properties:e})}this._legend.update(e)}_clickDot(){const e=this._data,n=this._currentDataIndex;if(n===void 0)return;const a=e[n];this._onDotClick?.(a)}_moveDot(e){const a=this._data.length,s=e==="left"?-1:1,r=e==="left"?a:-1,c=(((this._currentDataIndex??r)+s)%a+a)%a;this._currentDataIndex=c;const i=this.instance.container.querySelectorAll(Dt)[c];this._isSvgElement(i)&&i.focus()}_resizeContent(){this.update()}_isSvgElement(e){return e instanceof SVGElement}_processData(){const e=this._autoLegendProperties?.labelFormatter??Ga;this._legendProps.labels=rt.map(e),this._legendProps.colors=rt.map(this._color)}_updateLegendProps(){this._legendProps={type:"ordinal",labels:[],colors:[]},this._processData()}};const jo="milestone-kpi",Rn="milestone-content",Nn="milestone-content-text",$n="milestone-sub-content-text",vt="milestone-content-column",Dn="milestone-content-row",Fo="milestone-title",ko="milestone-content-wrapper",Mn="milestone",Ho="milestone-divider",zo="milestone-subtitle-label",Uo="milestone-subtitle",Ft=14,Me=7,Go=10,Xo=4,Bn=Ft+Go+Xo,Yo=t=>t.toString();class Vo{constructor({container:e,value:n,range:a,milestones:s,format:r}){this._renderLabel=i=>{const d=this._valueFormatter(i),b=this._getProgressPercentage(i),u=this._getLabelAnchor(i);this._group.append("text").attr("x",b).attr("y",Bn).attr("text-anchor",u).attr("fill","var(--color-foreground-de-emp)").attr("class","text").text(d)},this._range=a,this._valueFormatter=r??Yo;const l=s.every(i=>i>=a.start&&i<=a.end);j(l,"Milestones must be within range"),this._group=D(e).append("svg").attr("width",`calc(100% - ${Me*2}px)`).attr("height",Bn+2).attr("overflow","visible").append("g").attr("transform",`translate(${Me}, 0)`),this._renderBarBackground(),this._renderRangeLabels();const o=this._renderProgressBarIndicator();this._renderMilestoneIndicators(s);const c=this._renderProgressCircleIndicator();this._progressIndicator={bar:o,circle:c},this.update(n)}destroy(){this._group.remove()}update(e){const n=e>=this._range.start&&e<=this._range.end;j(n,"Value must be within range");const a=this._getProgressPercentage(e);this._progressIndicator.bar.attr("width",a),this._progressIndicator.circle.attr("cx",a)}_getProgressPercentage(e){const n=this._range.end-this._range.start;return`${e/n*100}%`}_renderBarBase(){return this._group.append("rect").attr("x",0).attr("y",0).attr("width",0).attr("height",Ft)}_renderBarBackground(){this._renderBarBase().attr("width","100%").attr("fill","var(--color-background-secondary)")}_renderProgressBarIndicator(){return this._renderBarBase().attr("fill","var(--color-primary-lighter)")}_renderProgressCircleIndicator(){return this._group.append("circle").attr("cx",0).attr("cy",Me).attr("r",Me).attr("fill","var(--color-info-icon)")}_renderRangeLabels(){[this._range.start,this._range.end].forEach(this._renderLabel)}_renderMilestoneIndicators(e){e.forEach(n=>{this._renderLabel(n);const a=this._getProgressPercentage(n);this._group.append("rect").attr("x",a).attr("y",0).attr("width",1).attr("height",Ft).attr("fill","var(--color-background)")})}_getLabelAnchor(e){return e===this._range.start?"start":e===this._range.end?"end":"middle"}}const jn=10;class se{constructor(e){const{container:n,title:a,subtitle:s}=e,r="milestone"in e,l=r?this._renderContentBar(e.primary):this._renderContentBase(e.primary,e.secondary),o=ye(ko,r&&Mn),c=this._renderTitle(a,s);this._container=q`
            <div class=${jo}>
                <div class=${o}>
                    ${c}
                    ${l}
                </div>
            </div>
        `,this._milestoneBar=r?new Vo({container:this._container,...e.milestone}):void 0,n.append(this._container)}destroy(){this._milestoneBar?.destroy(),this._container.remove()}_renderTitle(e,n){const a=q`
            <div class="${vt}">
                <span class=${Fo}>${e}</span>
            </div>
        `;return n&&a.append(this._renderSubtitle(n)),a}_renderSubtitle(e){const n=q`
            <div class="${Uo}">
                <span class="${zo}">${e.label}</span>
            </div>
        `;if(e?.icon){const a=e.icon.cloneNode(!0);D(a).attr("width",jn).attr("height",jn),n.prepend(a)}return n}_renderContentBar({value:e,label:n}){const a=ye(Dn,Mn);return q`
            <div class=${a}>
                <span class=${Rn}><b>${e}</b></span>
                <span class=${Rn}>${n}</span>
            </div>
        `}_renderContentBase(e,n){const a=n?q`
                <div class=${Ho}></div>
                <div class=${vt}>
                    <span class=${Nn}>${n.value}</span>
                    <span class=${$n}>${n.label}</span>
                </div>`:void 0;return q`
            <div class=${Dn}>
                <div class=${vt}>
                    <span class=${Nn}>${e.value}</span>
                    <span class=${$n}>${e.label}</span>
                </div>
                ${a}
            </div>
        `}}const Wo=(t=[],e=[])=>{j(t.length===e.length,"Expected the number of labels to match the number of values.");const n=e.map(a=>a.toString());return t.map((a,s)=>({x:n[s],y:a}))};let Ko=class extends Ea{constructor({onSelect:e,...n}){super({...n,scaleX:{display:!1},scaleY:{display:!1}}),this._onCenterTooltipShow=s=>{if(!this._centerLabels)return!1;const r=this._centerLabels.subLabel!=null?`${this._centerLabels.subLabel}: ${this._centerLabels.label}`:this._centerLabels.label;s.setContent(r)},this._onTooltipShow=s=>{const r=s.reference;if(!r.classList.contains(Nt))throw Error("Invalid pie chart tooltip target.");const o=D(r).datum().data,c=this._tooltipSchemaBuilder(o)??[],i=ct(c);s.setContent(i)},this._autoLegendProperties=n.legendProperties?void 0:n.autoLegend,this.instance.root.attr("class",Or),n.isSelectionEnabled&&(this._selector=new ho({onSelect:e,onUpdate:()=>this._render(),selection:n.selection})),this._pieMaker=new Ro({chart:this.instance,centerLabels:n.centerLabels,pieArcAction:n.pieArcAction,labelFormatCallback:n.labelFormatCallback,selector:this._selector}),this._tooltipSchemaBuilder=n.tooltipSchemaBuilder??this._defaultTooltipFormatter,this._tooltip=this._createTooltipDelegate(`${$t}`,this._onTooltipShow),this._centerTooltip=this._createTooltipDelegate(`${Rr}`,this._onCenterTooltipShow),this.update({data:n.data,labels:n.labels,color:n.color,centerLabels:n.centerLabels})}destroy(){this._tooltip.destroy(),this._centerTooltip.destroy(),this._pieMaker.destroy(),super.destroy()}update(e){if(this._clearFocus(),this._tooltip.disable(),super.update(e),this._dataValues().length===0){this._pieMaker.clear();return}this._centerLabels=e.centerLabels,this._pieMaker.update(e.centerLabels),this._render(),this._tooltip.enable()}_mapDataToValues({data:e,labels:n}){return Wo(e,n)}get _componentType(){return tn.PieChart}_resizeContent(){super._resizeContent(),this._pieMaker.clear(),this._render()}_renderContent(){const e=this.instance.innerMargin,n={left:e.left,top:e.top,width:this.instance.clientWidth(),height:this.instance.clientHeight()};this._pieMaker.bake({area:n}),this._autoLegendProperties&&this._updateLegend({...this._pieMaker.legendProps,position:this._autoLegendProperties.position})}_createTooltipDelegate(e,n){return Qt(this.instance.container,{...en,onShow:n,target:e,delay:0,duration:0,animation:"none",arrow:!1})}_defaultTooltipFormatter(e){return[{cells:[{text:e.dataPoint.x.toString(),role:"secondary"}]},{cells:[{text:e.dataPoint.y.toString(),role:"primary"}]}]}_clearFocus(){const e=document.activeElement;this.instance.root.node()?.contains(e)&&e?.blur&&e.blur()}};const Zo="ap-tree",Xa="ap-tree-node-group",qe=V(Xa),Ya="ap-tree-node-label",kt=V(Ya),Va="ap-tree-node-sub-label-1",Te=V(Va),Wa="ap-tree-node-sub-label-2",st=V(Wa),Ka="ap-tree-node-sub-label-3",ot=V(Ka),Za="ap-tree-node-percentage-circle",qa=V(Za),Ja="ap-tree-node-percentage-label",qo=V(Ja),Qa="ap-tree-node-percentage",er=V(Qa),on=Wr(Vt),Jo={horizontal:[150,500],vertical:[300,200]};class Qo{constructor(){this._layout=Ta,this.transformCoordinates=e=>({x:this._isHorizontal?e.y:e.x,y:this._isHorizontal?e.x:e.y})}get nodeSize(){return Jo[this._layout]}get linkGenerator(){const e=this._isHorizontal?co:uo,n=a=>X.transformCoordinates(a);return e().x(a=>n(a).x).y(a=>n(a).y)}get edgeSourceTransform(){return this._isHorizontal?Wt-Ce:Ce}set layout(e){this._layout=e}get _isHorizontal(){return this._layout==="horizontal"}}const X=new Qo;function it(t,e){return Kt(`${t.id}-${e.id}`,Kr)}function lt(t){return Kt(t.id,Vt)}const ei=(t,e)=>{const n=t.getAttribute(on);return e?.find(s=>lt(s.data)===n)??null},ti=(t,e)=>ei(t,e?.nodes),Q=(t,e)=>t.transition("enter").delay(e.delay).duration(e.duration).attr("opacity",1),Ht=t=>t.source.data.isHighlighted&&t.target.data.isHighlighted?Sa:Zr,Fn=t=>{const e=Object.assign({},t.source),n=Object.assign({},t.target);return e.y+=X.edgeSourceTransform,n.y-=Ce+J,X.linkGenerator({source:e,target:n})};function ni(t,e){t.join(n=>{const a=n.append("path").attr("fill","none").attr("stroke",Ht).attr("stroke-width",qr).attr("d",Fn).attr("marker-end",s=>`url(#${it(s.source.data,s.target.data)})`).attr("opacity",0);return Q(a,e.enter),a},n=>(n.transition("update").delay(e.update.delay).duration(e.update.duration).attr("stroke",Ht).attr("d",Fn),n),n=>ce(n,e.exit))}function ai(t,e){t.join(n=>{const a=n.append("marker").attr("id",s=>it(s.source.data,s.target.data)).attr("refX",0).attr("refY",J/2).attr("markerWidth",J).attr("markerHeight",J).attr("markerUnits","userSpaceOnUse").attr("orient","auto").attr("opacity",0);return a.append("path").attr("fill",Ht).attr("d",`M 0 0 L ${J} ${J/2} L 0 ${J} z`),Q(a,e.enter),a},n=>n.attr("id",a=>it(a.source.data,a.target.data)),n=>ce(n,e.exit))}const ri=({selection:t,filter:{filter:e,selector:n}})=>t.filter((a,s,r)=>{const l=D(r[s]).select(n).size()===0;return e(a)&&l}),si=4,_e=t=>t/si,fe=t=>_e(t)+Ce,ht=t=>(j(typeof t=="number"&&t>=-100&&t<=100,"Expected percentage to be between -100 and 100"),{percentage:t/100,label:`${Math.round(t)}%`}),tr=t=>`${Mt*(1-ht(t.data.display??0).percentage)}px`,kn=15,nr=(t,e)=>{const n=Le/2,s=t.filter(r=>typeof r.data.display=="number").append("g").attr("class",Qa).attr("opacity",0);s.append("circle").attr("class",Za).attr("fill",va).attr("stroke",Sa).attr("stroke-width",4).attr("stroke-dashoffset",`${Mt}px`).attr("stroke-dasharray",`${Mt}px`).attr("r",`${Le}px`).attr("cx",-Zt).attr("cy",0).attr("transform",`rotate(-90, ${n}, ${n})`),s.append("text").attr("class",Ja).attr("text-anchor","middle").attr("font-size",`${kn}px`).attr("font-weight","600").attr("x",0).attr("y",fe(kn)).text(r=>ht(r.data.display??0).label),Q(s,e).select(qa).attr("stroke-dashoffset",tr)},Je=(t,e)=>t.append("text").attr("font-size",e==="sub-label"?`${G}px`:`${tt}px`).attr("font-weight",e==="sub-label"?Qr:Jr),ar=(t,e)=>{const n=t.filter(l=>l.data.subLabels!==void 0),a=Je(n,"sub-label").attr("class",Va).attr("opacity",0),s=Je(n,"sub-label").attr("class",Wa).attr("opacity",0),r=Je(n,"sub-label").attr("class",Ka).attr("opacity",0);Q(a,e),Q(s,e),Q(r,e)};function oi(t,e){const n=({filter:a,renderer:s})=>{const r=ri({selection:t,filter:a});r.size()>0&&s(r,e)};n({renderer:nr,filter:{filter:a=>typeof a.data.display=="number",selector:er}}),n({renderer:ar,filter:{filter:a=>a.data.subLabels!==void 0,selector:Te}})}const Hn=t=>t.data.isHighlighted?es:va,ii=({filters:t,phaseInfo:e,selection:n})=>{t.forEach(({filter:a,selector:s})=>{const r=n.filter(a).selectAll(s);ce(r,e)})};function li(t,e){ii({selection:t,phaseInfo:e,filters:[{filter:n=>typeof n.data.display!="number",selector:er},{filter:n=>!(n.data.display instanceof SVGSVGElement),selector:"svg"},{filter:n=>n.data.subLabels===void 0,selector:Te},{filter:n=>n.data.subLabels===void 0,selector:st},{filter:n=>n.data.subLabels===void 0,selector:ot}]})}const ci=t=>{const e=Le*2;t.filter(n=>n.data.display instanceof SVGSVGElement).append(n=>n.data.display).attr("width",e).attr("height",e).attr("x",`${-Le}`).attr("y",`${Zt}`)},zn=4,di=12,ui=t=>t.type==="transition"?{label:t.transition.select(kt),subLabel1:t.transition.select(Te),subLabel2:t.transition.select(st),subLabel3:t.transition.select(ot)}:{label:t.selection.select(kt),subLabel1:t.selection.select(Te),subLabel2:t.selection.select(st),subLabel3:t.selection.select(ot)},rr=t=>{const{label:e,subLabel1:n,subLabel2:a,subLabel3:s}=ui(t);e.attr("y",r=>fe(tt)-(r.data.subLabels?_e(tt)+di:0)),n.attr("y",fe(G)+_e(G)),a.attr("y",fe(G)+_e(G)*5+zn),s.attr("y",fe(G)+_e(G)*8+zn*2),[e,n,a,s].forEach(r=>{r.attr("x",l=>l.data.display!==void 0?Ia:0)})},It=t=>{const e=t.subLabels??[];return{atIndex:n=>n>=e.length?"":e[n]}},Be=(t,e)=>({fontSize:e?G:tt,maxWidth:t?mn:mn+Ia}),je=(t,e)=>Ra({label:t,...e}),sr=t=>{t.select(kt).text(e=>je(e.data.label,Be(e.data.display!==void 0,!1))),t.select(Te).text(e=>je(It(e.data).atIndex(0),Be(e.data.display!==void 0,!0))),t.select(st).text(e=>je(It(e.data).atIndex(1),Be(e.data.display!==void 0,!0))),t.select(ot).text(e=>je(It(e.data).atIndex(2),Be(e.data.display!==void 0,!0)))},hi=(t,e)=>{Je(t,"label").attr("class",Ya),ar(t,e),sr(t),rr({type:"selection",selection:t})},Un=t=>{const e=X.transformCoordinates(t);return`translate(${e.x}, ${e.y-Ce})`};function bi({nodesSelection:t,phases:e}){t.join(n=>{const a=n.append("g").attr("class",Xa).attr(on,s=>lt(s.data)).attr("transform",Un).attr("tabindex",0).attr("opacity",0);return a.append("rect").attr("fill",Hn).attr("width",`${Wt}px`).attr("height",`${qt}px`).attr("x",Jt).attr("rx",`${Le+Zt}px`),ci(a),nr(a,e.enter),hi(a,e.enter),Q(a,e.enter),a},n=>(n.call(a=>{oi(a,e.update);const s=a.transition("update").delay(e.update.delay).duration(e.update.duration);s.attr("transform",Un).attr("fill",Hn),sr(s.selection()),rr({type:"transition",transition:s}),s.select(qa).attr("stroke-dashoffset",tr),s.select(qo).text(r=>ht(r.data.display??0).label),li(a,e.exit)}),n),n=>ce(n,e.exit))}const pi=(t,e)=>({cells:[{text:t,role:e?"secondary":"primary"}]}),gi=t=>{const n=`${typeof t.display=="number"?`${ht(t.display).label} `:""}${t.label}`,a=t.subLabels?.map(s=>pi(s,!0))??[];return ct(a,n)},_i=dt.left-Jt,fi=Jt+Wt+dt.right,mi=qt/2+dt.top,yi=qt/2+dt.bottom;function Ci(t){return t.length===0?Pa:t.map(X.transformCoordinates).reduce(({minX:n,maxX:a,minY:s,maxY:r},l)=>({minX:Math.min(n,l.x-_i),maxX:Math.max(a,l.x+fi),minY:Math.min(s,l.y-mi),maxY:Math.max(r,l.y+yi)}),ts)}function Li(t){return t?Ci(t.nodes):Pa}function xi(t){const n=gs(t,qe)?.dataset?.nodeId;return n==null?null:{id:n,..._s(t)}}let Ei=class{constructor(e,{tree:n,messageMapper:a,layout:s,onSelect:r,renderTooltip:l,padding:o}){this._selection=[],this.center=()=>this._zoomer.center(),this.zoomIn=()=>this._zoomer.zoomIn(),this.zoomOut=()=>this._zoomer.zoomOut(),this._onTooltipShow=c=>{const i=c.reference;if(!(i instanceof SVGElement))throw Error("Invalid tooltip target");D(i).call(d=>{const u=d.datum().data,h=this._renderTooltip(u);c.setContent(h)})},this._onSelect=({id:c,isCtrlKeyPressed:i,isToggle:d})=>{const b=this._tree?.nodes.find(({data:u})=>lt(u)===c);j(b!==void 0,`Did not find node with the id ${c}`),this._onSelectCallback?.({element:b,isCtrlKeyPressed:i,isToggle:d},this._selection)},X.layout=s??Ta,this._renderTooltip=l??gi,this._instance=Aa({clientContainer:e,className:Zo,scaleX:{display:!1},scaleY:{display:!1}}),this._zoomGroup=this._instance.root.append("g"),this._messageHandler=new fs(this._instance.container,a),this._zoomer=new ns(this._instance.container,{padding:o,zoomGroup:this._zoomGroup,transformCoordinates:X.transformCoordinates,getFocusableElement:c=>ti(c,this._tree)}),this._edges=this._zoomGroup.append("g"),this._nodes=this._zoomGroup.append("g"),this._defs=this._instance.parent.append("defs"),this._tooltip=Qt(this._instance.container,{...en,onShow:this._onTooltipShow,target:`${qe}`}),r&&(this._selectionManager=new as({viewport:this._instance.container,callBack:this._onSelect,eventMapper:xi}),this._onSelectCallback=r),this.update({newTree:n})}destroy(){this._messageHandler.destroy(),this._zoomer.destroy(),this._tooltip.destroy(),Yt(this._instance.parent),this._selectionManager?.destroy(),this._instance.container.remove()}update({newTree:e,alt:n}){rs(this._instance,n);const a=e&&e.children.length>0;this._messageHandler.update(a?void 0:ms.NoData,tn.TreeChart),a&&(gn.Instance.measure(this._instance.container,"layout",()=>{const s=an(e),r=Ys().nodeSize(X.nodeSize)(s);this._tree={nodes:r.descendants(),edges:r.links()}}),gn.Instance.measure(this._instance.container,"render",()=>{this._render()}),this._zoomer.update({bounds:Li(this._tree)}),this._zoomer.center(yn().exit))}updateSelection(e){this._selection=e,this._instance.container.querySelectorAll(`${qe}`).forEach(a=>{const s=a.getAttribute(on),r=e.some(({id:o})=>Kt(o,Vt)===s),l=D(a);r?ss(l)?.attr("x",`${os}`).attr("y",`${is}`):ls(l)})}_render(){const e=this._tree?.edges??[],n=this._tree?.nodes??[],a=c=>{const i="source"in c,d=i?it(c.source.data,c.target.data):lt(c.data),u=(i?c.target.data:c.data).isHighlighted?"-highlighted":"";return`${d}${u}`},s=this._edges.selectAll("path").data(e,c=>a(c)),r=this._nodes.selectAll(qe).data(n,c=>{const i=a(c),d=c.data.display instanceof SVGSVGElement?"-icon":"";return`${i}${d}`}),l=this._defs.selectAll("marker").data(e,c=>a(c)),o=yn();ai(l,o),ni(s,o),bi({nodesSelection:r,phases:o})}};const Ai={rngSeed:{name:"RNG seed"},dataCount:{name:"Data count"},lineCount:{name:"Line count"},barsCount:{name:"Bars count"},scatterCount:{name:"Scatter count"},compare:{name:"Use custom compare tooltip"},showXAxis:{name:"Show x-axis"},showYAxis:{name:"Show y-axis"},axisXLabel:{name:"Label of x-axis"},axisYLabel:{name:"Label of y-axis"},positionXAxis:{name:"Position of x-axis",options:["bottom","top"],control:{type:"inline-radio"}},positionYAxis:{name:"Position of y-axis",options:["left","right"],control:{type:"inline-radio"}},isSelectionEnabled:{name:"Allow selections"},selectionLimit:{name:"Selection limit"},color:{name:"Color",control:{type:"color"}},legendLabel:{name:"Legend label"},hasAutoLegend:{name:"Has auto legend"},forceUpdate:{name:"Use update loop (2s)"},hasTimeScale:{name:"Use time scale"},hasPathAnimation:{name:"Has path animation"},treeLayout:{name:"Tree layout",options:["vertical","horizontal"],control:{type:"inline-radio"}},hasLinearScale:{name:"Use linear scale"},allowNegativeValues:{name:"Allow negative values"},hasCenterLabels:{name:"Has center labels"},thresholdDataType:{name:"Threshold data type",options:[xe.Line,xe.Area],control:{type:"inline-radio"}},thresholdLineCount:{name:"Threshold line count"},thresholdLineColor:{name:"Threshold line color"},hasPieLabels:{name:"Has labels"},legendPosition:{name:"Legend position",options:["top","bottom","left","right"],control:{type:"inline-radio"}}},Y=(t=30,e=100,n=1e3,a)=>{a&&E.seed(a);const s=Array.from({length:t},()=>E.number.int({min:e,max:n})),r=Array.from({length:t},()=>E.word.sample({strategy:"longest"})),l=Array.from({length:t},(c,i)=>({color:Bt(a,i)})),o=Bt(a);return{data:s,labels:r,meta:l,color:o}},Ti=t=>t?-1e3:100,Si=1e3;let Gn=0;const vi=(t,e)=>{const n=({meta:o})=>o?.color??"#000",{data:a,labels:s,meta:r}=Y(e.dataCount,-5e3,5e3,e.rngSeed),l=new $o({container:t,isSelectionEnabled:e.isSelectionEnabled,selectionLimit:e.selectionLimit,color:n,scaleX:{type:"band",display:e.showXAxis,position:e.positionXAxis,label:e.axisXLabel},scaleY:{display:e.showYAxis,position:e.positionYAxis,label:e.axisYLabel},alt:"This is a bar chart with demo data.",messageMapper:()=>"No data available",canSelect:o=>o!==a.length-1});if(l.update({data:a,labels:s,meta:r,color:n}),clearInterval(Gn),e.forceUpdate){let o=!1;Gn=window.setInterval(()=>{o=!o;const c=o?10:0,i=Y(e.dataCount+c,Ti(e.allowNegativeValues),Si,e.rngSeed);l.update({data:i.data,labels:i.labels,meta:i.meta,color:n})},1e3)}},Ii=(t=100,e)=>{e&&E.seed(e);const n=Y(t,0,1e3),a=n.data.map(l=>l),s=n.data.map((l,o)=>o);return{data:a,indices:s,color:()=>n.color}};function Xn(t,e,n=0,a=300,s=800){return{data:Y(t.dataCount,a,s,e+t.rngSeed+n).data,title:E.word.sample()}}const Pi=t=>{const e=t.barsCount,n=t.lineCount,a=t.scatterCount,s=[];for(let r=0;r<n;r++)s.push({...Xn(t,r,e,600,1e3),renderer:"line"});for(let r=0;r<e;r++)s.push({...Xn(t,r,0,t.allowNegativeValues?-300:300),renderer:"bar"});for(let r=0;r<a;r++){const l=Ii(t.dataCount,t.rngSeed+r);s.push({data:l.data,color:l.color,renderer:"scatter",title:r===0?"I'm the scatman":"Ski-bi dibby dib yo da dub dub"})}return s},wi=(t,e)=>{const n=new cs({container:t,scaleX:{type:e.hasLinearScale?"linear":"band",display:e.showXAxis,position:e.positionXAxis,label:e.axisXLabel},scaleY:{display:e.showYAxis,position:e.positionYAxis,label:e.axisYLabel},legendProperties:{hasLegend:!0,alt:"This is the chart legend."},onSelect:e.isSelectionEnabled?s=>{console.log(s)}:void 0,selectionLimit:e.selectionLimit,messageMapper:()=>"No data available"}),a=Pi(e);n.update({data:a,labels:e.hasLinearScale?bs(e.dataCount).map((s,r)=>r):Y(e.dataCount,600,1e3,e.rngSeed).labels})};function Oi(){return rt[Math.floor(Math.random()*rt.length)]}const Ri=t=>{const e=[];for(let n=0;n<t;n++){const a={status:Oi(),metaData:"foo",id:`dot-${n}`};e.push(a)}return e},Ni=(t,e)=>{const n=e.dataCount,a=Ri(n);new Bo({container:t,data:a,autoLegend:e.hasAutoLegend?{position:e.legendPosition}:void 0,tooltipFormatter:r=>{const l=document.createElement("div");l.innerText=`Status: ${r.status}`;const o=document.createElement("div");o.innerText=`ID: ${r.id}`;const c=document.createElement("div");return c.appendChild(l),c.appendChild(o),c},dotClickCallback:r=>{console.log("Clicked on",r)}}).update()},Pt=(t,e=10,n)=>{n&&E.seed(n);const a=Y(e,0,10),s=a.data.map(o=>E.datatype.boolean()?-o:o),r=a.data.map((o,c)=>new Date(Date.now()+t*c));return{data:s,labels:r,color:()=>a.color}},$i=(t,e,n,a,s)=>{const r=[],l=Array.isArray(s)?s:[s];for(let o=0;o<a;o++){const c=t===xe.Line?E.number.int({min:e,max:n}):{min:E.number.int({min:e,max:n}),max:E.number.int({min:e,max:n})},i=l[o%l.length];r.push({type:t,value:c,fillColor:i,strokeColor:i,orientation:"horizontal"})}return r},or=3600*1e3,Di=24*or,wt=(()=>{E.seed(136648);const t=E.datatype.boolean()?Di:or;return E.number.int({min:1,max:25})*t})(),Yn=(t,e,n)=>{const a=[{text:""}];n.forEach((l,o)=>{a.push({text:`Compare ${o}`,color:l,role:"secondary"})});const s={isSeparated:!0,cells:a},r=[{text:"Value"}];return t.forEach(l=>{const o=e==="x"?l.x:l.y,c=o instanceof Date?{text:o.toLocaleString(),role:"secondary",align:"right"}:{text:`${o}`,role:"secondary",align:"right"};r.push(c)}),[s,{cells:r}]};let Vn=0;const Mi=(t,e)=>{const n=Pt(wt,e.dataCount,e.rngSeed),a=Math.min(...n.data),s=Math.max(...n.data),r=$i(e.thresholdDataType??xe.Line,a,s,e.thresholdLineCount??1,e.thresholdLineColor??"red").map(b=>({...b,orientation:b.orientation})),l=new ds({container:t,data:[],isSelectionEnabled:e.isSelectionEnabled,selectionLimit:e.selectionLimit,scaleX:{type:e.hasTimeScale?"time":"linear",display:e.showXAxis,position:e.positionXAxis,label:e.axisXLabel},scaleY:{display:e.showYAxis,position:e.positionYAxis,label:e.axisYLabel,tickFormatCallback:b=>`y {${b}}`},tooltipFormatter:e.compare?{bottomTextSchema:({data:b,colors:u})=>Yn(b,"x",u),topTextSchema:({data:b,colors:u})=>Yn(b,"y",u)}:void 0,legendProperties:{type:"ordinal",labels:[e.legendLabel],colors:[e.color]},alt:"This is a line chart with demo data.",messageMapper:()=>"No data available",threshold:r}),o=[],c=[];for(let b=0;b<e.lineCount-1;b++){o.push(Pt(wt,e.dataCount,e.rngSeed+1+b).data);const u=Bt(e.rngSeed+1+b);c.push(()=>u)}const i=o.length>0?[n.data,...o]:n.data,d=c.length>0?[()=>e.color,...c]:()=>e.color;if(l.update({data:i,labels:n.labels,color:d}),clearInterval(Vn),e.forceUpdate){let b=!1;Vn=window.setInterval(()=>{b=!b;const u=b?10:0,h=Pt(wt,e.dataCount+u,e.rngSeed);l.update({data:h.data,labels:h.labels,color:()=>e.color})},2e3)}},Wn="fit-content",oe=t=>{const e=document.createElement("div");return e.style.setProperty("width","20%"),e.style.setProperty("max-width","300px"),e.style.setProperty("min-width","300px"),e.style.setProperty("height",Wn),e.style.setProperty("height",`-moz-${Wn}`),e.style.setProperty("padding","15px"),e.style.setProperty("margin-right","20px"),e.style.setProperty("box-shadow","0 4px 8px 0 rgba(0, 0, 0, 0.2)"),e.style.setProperty("background-color","var(--color-background)"),e.style.setProperty("border-radius","8px"),t.appendChild(e),e},Bi=t=>{const e=oe(t),n=oe(t),a=oe(t),s=oe(t),r=oe(t),l=oe(t);new se({container:e,title:"Receive invoice",subtitle:{label:"Receive invoice",icon:Ln({path:Cn})},type:"bar",primary:{value:"175",label:"Actions recorded"},milestone:{value:0,range:{start:0,end:200},milestones:[65]}}),new se({container:n,title:"Approve invoice",primary:{value:"3M",label:"Actions recorded"},type:"bar",milestone:{value:15,range:{start:0,end:15},milestones:[6],format(o){return o===0?"0":`${o}M`}}}),new se({container:a,title:"Approve invoice",primary:{value:"93",label:"Actions recorded"},type:"bar",milestone:{value:93,range:{start:0,end:100},milestones:[]}}),new se({container:s,title:"Request invoice",subtitle:{label:"Receive invoice",icon:Ln({path:Cn})},type:"text",primary:{value:"45M",label:"Actions"},secondary:{value:"77K",label:"Traces"}}),new se({container:r,title:"Invoice received",type:"text",primary:{value:"45K",label:"Actions"},secondary:{value:"77",label:"Traces"}}),new se({container:l,title:"Invoice received",type:"text",primary:{value:"45K",label:"Actions"}})},ji=()=>{const t=document.createElement("div");return t.style.setProperty("display","flex"),t.style.setProperty("flex-flow","row wrap"),t.style.setProperty("margin-bottom","20px"),t.style.setProperty("gap","20px"),t},Fi=t=>{const e=ji();t.appendChild(e),Bi(e)},Kn=t=>(t&&E.seed(t),{label:E.number.int({min:100,max:1e5}).toString(),subLabel:E.word.sample()}),Zn=100,qn=1e3;let Jn=0;const ki=(t,e)=>{const{data:n,labels:a,meta:s}=Y(e.dataCount,Zn,qn,e.rngSeed),r=new Ko({container:t,messageMapper:()=>"No data available",tooltipSchemaBuilder:o=>[{cells:[{text:o.dataPoint.x.toString(),role:"secondary"}]},{cells:[{text:o.dataPoint.y.toString(),role:"primary"}]},{cells:[{text:"Meta data:",role:"primary"},{text:o.meta?.color??"no data",role:"secondary"}]}],autoLegend:e.hasAutoLegend?{position:e.legendPosition}:void 0,isSelectionEnabled:e.isSelectionEnabled,onSelect:o=>{console.log("selection: ",o)},pieArcAction:{callback:o=>{console.log("Clicked on",o)},tooltip:"I will become the aria label"},labelFormatCallback:e.hasPieLabels?o=>`${o.toFixed(0)}%`:void 0}),l=e.hasCenterLabels?Kn():void 0;if(r.update({data:n,labels:a,meta:s,centerLabels:l}),clearInterval(Jn),e.forceUpdate&&e.dataCount>=2){let o=!1;Jn=window.setInterval(()=>{o=!o;const c=Y(e.dataCount,Zn,qn,e.rngSeed);c.data[0]=o?c.data[0]-200:c.data[0],c.data[1]=o?c.data[1]+200:c.data[1],o&&(c.data.splice(3,1),c.labels.splice(3,1),c.meta.splice(3,1));const i=e.hasCenterLabels?Kn(o?420:1337):void 0;r.update({data:c.data,labels:c.labels,meta:c.meta,centerLabels:i})},1e3)}};function Hi(){this.__data__=[],this.size=0}function ir(t,e){return t===e||t!==t&&e!==e}function bt(t,e){for(var n=t.length;n--;)if(ir(t[n][0],e))return n;return-1}var zi=Array.prototype,Ui=zi.splice;function Gi(t){var e=this.__data__,n=bt(e,t);if(n<0)return!1;var a=e.length-1;return n==a?e.pop():Ui.call(e,n,1),--this.size,!0}function Xi(t){var e=this.__data__,n=bt(e,t);return n<0?void 0:e[n][1]}function Yi(t){return bt(this.__data__,t)>-1}function Vi(t,e){var n=this.__data__,a=bt(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this}function k(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}k.prototype.clear=Hi;k.prototype.delete=Gi;k.prototype.get=Xi;k.prototype.has=Yi;k.prototype.set=Vi;function Wi(){this.__data__=new k,this.size=0}function Ki(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function Zi(t){return this.__data__.get(t)}function qi(t){return this.__data__.has(t)}var Ji="[object AsyncFunction]",Qi="[object Function]",el="[object GeneratorFunction]",tl="[object Proxy]";function lr(t){if(!ut(t))return!1;var e=Ie(t);return e==Qi||e==el||e==Ji||e==tl}var Ot=F["__core-js_shared__"],Qn=(function(){var t=/[^.]+$/.exec(Ot&&Ot.keys&&Ot.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""})();function nl(t){return!!Qn&&Qn in t}var al=Function.prototype,rl=al.toString;function te(t){if(t!=null){try{return rl.call(t)}catch{}try{return t+""}catch{}}return""}var sl=/[\\^$.*+?()[\]{}|]/g,ol=/^\[object .+?Constructor\]$/,il=Function.prototype,ll=Object.prototype,cl=il.toString,dl=ll.hasOwnProperty,ul=RegExp("^"+cl.call(dl).replace(sl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function hl(t){if(!ut(t)||nl(t))return!1;var e=lr(t)?ul:ol;return e.test(te(t))}function bl(t,e){return t?.[e]}function ne(t,e){var n=bl(t,e);return hl(n)?n:void 0}var Se=ne(F,"Map"),ve=ne(Object,"create");function pl(){this.__data__=ve?ve(null):{},this.size=0}function gl(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var _l="__lodash_hash_undefined__",fl=Object.prototype,ml=fl.hasOwnProperty;function yl(t){var e=this.__data__;if(ve){var n=e[t];return n===_l?void 0:n}return ml.call(e,t)?e[t]:void 0}var Cl=Object.prototype,Ll=Cl.hasOwnProperty;function xl(t){var e=this.__data__;return ve?e[t]!==void 0:Ll.call(e,t)}var El="__lodash_hash_undefined__";function Al(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ve&&e===void 0?El:e,this}function ee(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}ee.prototype.clear=pl;ee.prototype.delete=gl;ee.prototype.get=yl;ee.prototype.has=xl;ee.prototype.set=Al;function Tl(){this.size=0,this.__data__={hash:new ee,map:new(Se||k),string:new ee}}function Sl(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function pt(t,e){var n=t.__data__;return Sl(e)?n[typeof e=="string"?"string":"hash"]:n.map}function vl(t){var e=pt(this,t).delete(t);return this.size-=e?1:0,e}function Il(t){return pt(this,t).get(t)}function Pl(t){return pt(this,t).has(t)}function wl(t,e){var n=pt(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this}function ue(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}ue.prototype.clear=Tl;ue.prototype.delete=vl;ue.prototype.get=Il;ue.prototype.has=Pl;ue.prototype.set=wl;var Ol=200;function Rl(t,e){var n=this.__data__;if(n instanceof k){var a=n.__data__;if(!Se||a.length<Ol-1)return a.push([t,e]),this.size=++n.size,this;n=this.__data__=new ue(a)}return n.set(t,e),this.size=n.size,this}function he(t){var e=this.__data__=new k(t);this.size=e.size}he.prototype.clear=Wi;he.prototype.delete=Ki;he.prototype.get=Zi;he.prototype.has=qi;he.prototype.set=Rl;function Nl(t,e){for(var n=-1,a=t==null?0:t.length;++n<a&&e(t[n],n,t)!==!1;);return t}var ea=(function(){try{var t=ne(Object,"defineProperty");return t({},"",{}),t}catch{}})();function $l(t,e,n){e=="__proto__"&&ea?ea(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var Dl=Object.prototype,Ml=Dl.hasOwnProperty;function Bl(t,e,n){var a=t[e];(!(Ml.call(t,e)&&ir(a,n))||n===void 0&&!(e in t))&&$l(t,e,n)}function jl(t,e){for(var n=-1,a=Array(t);++n<t;)a[n]=e(n);return a}var Fl="[object Arguments]";function ta(t){return Pe(t)&&Ie(t)==Fl}var cr=Object.prototype,kl=cr.hasOwnProperty,Hl=cr.propertyIsEnumerable,zl=ta((function(){return arguments})())?ta:function(t){return Pe(t)&&kl.call(t,"callee")&&!Hl.call(t,"callee")};function Ul(){return!1}var dr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,na=dr&&typeof module=="object"&&module&&!module.nodeType&&module,Gl=na&&na.exports===dr,aa=Gl?F.Buffer:void 0,Xl=aa?aa.isBuffer:void 0,ur=Xl||Ul,Yl=9007199254740991,Vl=/^(?:0|[1-9]\d*)$/;function Wl(t,e){var n=typeof t;return e=e??Yl,!!e&&(n=="number"||n!="symbol"&&Vl.test(t))&&t>-1&&t%1==0&&t<e}var Kl=9007199254740991;function hr(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Kl}var Zl="[object Arguments]",ql="[object Array]",Jl="[object Boolean]",Ql="[object Date]",ec="[object Error]",tc="[object Function]",nc="[object Map]",ac="[object Number]",rc="[object Object]",sc="[object RegExp]",oc="[object Set]",ic="[object String]",lc="[object WeakMap]",cc="[object ArrayBuffer]",dc="[object DataView]",uc="[object Float32Array]",hc="[object Float64Array]",bc="[object Int8Array]",pc="[object Int16Array]",gc="[object Int32Array]",_c="[object Uint8Array]",fc="[object Uint8ClampedArray]",mc="[object Uint16Array]",yc="[object Uint32Array]",L={};L[uc]=L[hc]=L[bc]=L[pc]=L[gc]=L[_c]=L[fc]=L[mc]=L[yc]=!0;L[Zl]=L[ql]=L[cc]=L[Jl]=L[dc]=L[Ql]=L[ec]=L[tc]=L[nc]=L[ac]=L[rc]=L[sc]=L[oc]=L[ic]=L[lc]=!1;function Cc(t){return Pe(t)&&hr(t.length)&&!!L[Ie(t)]}function ln(t){return function(e){return t(e)}}var br=typeof exports=="object"&&exports&&!exports.nodeType&&exports,me=br&&typeof module=="object"&&module&&!module.nodeType&&module,Lc=me&&me.exports===br,Rt=Lc&&Cs.process,le=(function(){try{var t=me&&me.require&&me.require("util").types;return t||Rt&&Rt.binding&&Rt.binding("util")}catch{}})(),ra=le&&le.isTypedArray,xc=ra?ln(ra):Cc,Ec=Object.prototype,Ac=Ec.hasOwnProperty;function Tc(t,e){var n=nn(t),a=!n&&zl(t),s=!n&&!a&&ur(t),r=!n&&!a&&!s&&xc(t),l=n||a||s||r,o=l?jl(t.length,String):[],c=o.length;for(var i in t)Ac.call(t,i)&&!(l&&(i=="length"||s&&(i=="offset"||i=="parent")||r&&(i=="buffer"||i=="byteLength"||i=="byteOffset")||Wl(i,c)))&&o.push(i);return o}var Sc=Object.prototype;function pr(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Sc;return t===n}function gr(t,e){return function(n){return t(e(n))}}var vc=gr(Object.keys,Object),Ic=Object.prototype,Pc=Ic.hasOwnProperty;function wc(t){if(!pr(t))return vc(t);var e=[];for(var n in Object(t))Pc.call(t,n)&&n!="constructor"&&e.push(n);return e}function Oc(t){return t!=null&&hr(t.length)&&!lr(t)}function Rc(t){return Oc(t)?Tc(t):wc(t)}var _r=typeof exports=="object"&&exports&&!exports.nodeType&&exports,sa=_r&&typeof module=="object"&&module&&!module.nodeType&&module,Nc=sa&&sa.exports===_r,oa=Nc?F.Buffer:void 0;oa&&oa.allocUnsafe;function $c(t,e){return t.slice()}function Dc(t,e){for(var n=-1,a=t==null?0:t.length,s=0,r=[];++n<a;){var l=t[n];e(l,n,t)&&(r[s++]=l)}return r}function Mc(){return[]}var Bc=Object.prototype,jc=Bc.propertyIsEnumerable,ia=Object.getOwnPropertySymbols,Fc=ia?function(t){return t==null?[]:(t=Object(t),Dc(ia(t),function(e){return jc.call(t,e)}))}:Mc;function kc(t,e){for(var n=-1,a=e.length,s=t.length;++n<a;)t[s+n]=e[n];return t}var Hc=gr(Object.getPrototypeOf,Object);function zc(t,e,n){var a=e(t);return nn(t)?a:kc(a,n(t))}function Uc(t){return zc(t,Rc,Fc)}var zt=ne(F,"DataView"),Ut=ne(F,"Promise"),Gt=ne(F,"Set"),Xt=ne(F,"WeakMap"),la="[object Map]",Gc="[object Object]",ca="[object Promise]",da="[object Set]",ua="[object WeakMap]",ha="[object DataView]",Xc=te(zt),Yc=te(Se),Vc=te(Ut),Wc=te(Gt),Kc=te(Xt),B=Ie;(zt&&B(new zt(new ArrayBuffer(1)))!=ha||Se&&B(new Se)!=la||Ut&&B(Ut.resolve())!=ca||Gt&&B(new Gt)!=da||Xt&&B(new Xt)!=ua)&&(B=function(t){var e=Ie(t),n=e==Gc?t.constructor:void 0,a=n?te(n):"";if(a)switch(a){case Xc:return ha;case Yc:return la;case Vc:return ca;case Wc:return da;case Kc:return ua}return e});var Zc=Object.prototype,qc=Zc.hasOwnProperty;function Jc(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&qc.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var ba=F.Uint8Array;function cn(t){var e=new t.constructor(t.byteLength);return new ba(e).set(new ba(t)),e}function Qc(t,e){var n=cn(t.buffer);return new t.constructor(n,t.byteOffset,t.byteLength)}var ed=/\w*$/;function td(t){var e=new t.constructor(t.source,ed.exec(t));return e.lastIndex=t.lastIndex,e}var pa=En?En.prototype:void 0,ga=pa?pa.valueOf:void 0;function nd(t){return ga?Object(ga.call(t)):{}}function ad(t,e){var n=cn(t.buffer);return new t.constructor(n,t.byteOffset,t.length)}var rd="[object Boolean]",sd="[object Date]",od="[object Map]",id="[object Number]",ld="[object RegExp]",cd="[object Set]",dd="[object String]",ud="[object Symbol]",hd="[object ArrayBuffer]",bd="[object DataView]",pd="[object Float32Array]",gd="[object Float64Array]",_d="[object Int8Array]",fd="[object Int16Array]",md="[object Int32Array]",yd="[object Uint8Array]",Cd="[object Uint8ClampedArray]",Ld="[object Uint16Array]",xd="[object Uint32Array]";function Ed(t,e,n){var a=t.constructor;switch(e){case hd:return cn(t);case rd:case sd:return new a(+t);case bd:return Qc(t);case pd:case gd:case _d:case fd:case md:case yd:case Cd:case Ld:case xd:return ad(t);case od:return new a;case id:case dd:return new a(t);case ld:return td(t);case cd:return new a;case ud:return nd(t)}}var _a=Object.create,Ad=(function(){function t(){}return function(e){if(!ut(e))return{};if(_a)return _a(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}})();function Td(t){return typeof t.constructor=="function"&&!pr(t)?Ad(Hc(t)):{}}var Sd="[object Map]";function vd(t){return Pe(t)&&B(t)==Sd}var fa=le&&le.isMap,Id=fa?ln(fa):vd,Pd="[object Set]";function wd(t){return Pe(t)&&B(t)==Pd}var ma=le&&le.isSet,Od=ma?ln(ma):wd,fr="[object Arguments]",Rd="[object Array]",Nd="[object Boolean]",$d="[object Date]",Dd="[object Error]",mr="[object Function]",Md="[object GeneratorFunction]",Bd="[object Map]",jd="[object Number]",yr="[object Object]",Fd="[object RegExp]",kd="[object Set]",Hd="[object String]",zd="[object Symbol]",Ud="[object WeakMap]",Gd="[object ArrayBuffer]",Xd="[object DataView]",Yd="[object Float32Array]",Vd="[object Float64Array]",Wd="[object Int8Array]",Kd="[object Int16Array]",Zd="[object Int32Array]",qd="[object Uint8Array]",Jd="[object Uint8ClampedArray]",Qd="[object Uint16Array]",eu="[object Uint32Array]",C={};C[fr]=C[Rd]=C[Gd]=C[Xd]=C[Nd]=C[$d]=C[Yd]=C[Vd]=C[Wd]=C[Kd]=C[Zd]=C[Bd]=C[jd]=C[yr]=C[Fd]=C[kd]=C[Hd]=C[zd]=C[qd]=C[Jd]=C[Qd]=C[eu]=!0;C[Dd]=C[mr]=C[Ud]=!1;function Qe(t,e,n,a,s,r){var l;if(l!==void 0)return l;if(!ut(t))return t;var o=nn(t);if(o)l=Jc(t);else{var c=B(t),i=c==mr||c==Md;if(ur(t))return $c(t);if(c==yr||c==fr||i&&!s)l=i?{}:Td(t);else{if(!C[c])return s?t:{};l=Ed(t,c)}}r||(r=new he);var d=r.get(t);if(d)return d;r.set(t,l),Od(t)?t.forEach(function(h){l.add(Qe(h,e,n,h,t,r))}):Id(t)&&t.forEach(function(h,p){l.set(p,Qe(h,e,n,p,t,r))});var b=Uc,u=o?void 0:b(t);return Nl(u||t,function(h,p){u&&(p=h,h=t[p]),Bl(l,p,Qe(h,e,n,p,t,r))}),l}var tu=1,nu=4;function dn(t){return Qe(t,tu|nu)}const au=5;function Cr(t,e,n,a){if(e>au)return;const s=E.number.int({min:1,max:3});for(let r=0;r<s;r++){const l={label:E.word.sample(),display:r%2===0?r%3===0?Math.random()*100:0:void 0,id:E.string.uuid(),subLabels:["hottentottententententoonstelling",`Selected rate ${Math.floor(Math.random()*100)}%`,`Reference case ${Math.floor(Math.random()*1e3)}`],extraData:E.word.sample(),children:[]};t.children.push(l),n.push(dn(a)),E.number.int({min:0,max:100})<50&&Cr(l,e+1,n,a)}}const ru=q`
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.968 7.032L37.584 10.416C41.04 13.896 43.2 18.696 43.2 24C43.2 34.608 34.608 43.2 24 43.2C13.392 43.2 4.8 34.608 4.8 24C4.8 14.208 12.12 6.144 21.6 4.968V9.816C14.784 10.968 9.6 16.872 9.6 24C9.6 31.944 16.056 38.4 24 38.4C31.944 38.4 38.4 31.944 38.4 24C38.4 20.016 36.792 16.416 34.176 13.824L30.792 17.208C32.52 18.96 33.6 21.36 33.6 24C33.6 29.304 29.304 33.6 24 33.6C18.696 33.6 14.4 29.304 14.4 24C14.4 19.536 17.472 15.816 21.6 14.736V19.872C20.16 20.712 19.2 22.224 19.2 24C19.2 26.64 21.36 28.8 24 28.8C26.64 28.8 28.8 26.64 28.8 24C28.8 22.224 27.84 20.688 26.4 19.872V0H24C10.752 0 0 10.752 0 24C0 37.248 10.752 48 24 48C37.248 48 48 37.248 48 24C48 17.376 45.312 11.376 40.968 7.032Z" fill="#FA4616"/>
    </svg>
`,Lr=t=>{if(t.isHighlighted=!0,t.children.length===0)return;const e=Math.ceil(Math.random()*(t.children.length-1));Lr(t.children[e])};function su(t=1337){E.seed(t);const e={label:"Maverick buying",id:E.string.uuid(),display:ru,children:[],isHighlighted:!0,extraData:""},n=dn(e),a=[],s=e;return Cr(s,0,a,s),Lr(s),{tree:s,rootCopy:n,datasets:a}}class ou{constructor(){this._selectedElements=[]}toggleSelection({element:e,isToggle:n}){if(this._selectedElements.some(({id:s})=>s===e.data.id)&&n){this._selectedElements=this._selectedElements.filter(({id:s})=>s!==e.data.id);return}this._selectedElements=[...this._selectedElements,e.data]}get state(){return[...this._selectedElements]}}let pe,ya=0,ge=0,Fe=0;const xr=t=>{t.display=50,t.subLabels=["subLabel1","sublabel2","sublabel3"],t.children.forEach(e=>xr(e))},iu=(t,e)=>{const n=su(),a=dn(n);xr(a.tree);const s=new ou;if(pe=new Ei(t,{layout:e.treeLayout,onSelect:r=>{s.toggleSelection(r),pe.updateSelection(s.state)},messageMapper:r=>`tree chart status: ${r}`,renderTooltip:r=>{const l=[{cells:[{text:r.extraData,role:"primary"}]}];return ct(l,"Custom tooltip with meta data")}}),!e.hasPathAnimation&&pe.update({newTree:n.tree}),e.hasPathAnimation&&!e.forceUpdate?ge=window.setInterval(()=>{Fe<n.datasets.length?(pe.update({newTree:n.datasets[Fe]}),Fe+=1):clearInterval(ge)},500):ge>0&&(clearInterval(ge),ge=0,Fe=0),clearInterval(ya),e.forceUpdate&&!e.hasPathAnimation){let r=!0;ya=window.setInterval(()=>{r=!r,pe.update({newTree:r?n.tree:a.tree})},2e3)}},be={isSelectionEnabled:!0,color:"#DA3B11",legendLabel:"This represents a line",hasAutoLegend:!1,showXAxis:!0,showYAxis:!0,selectionLimit:100,axisXLabel:"X Axis",axisYLabel:"Y Axis",positionXAxis:"bottom",positionYAxis:"left",rngSeed:1337,dataCount:30,forceUpdate:!1,hasTimeScale:!0,lineCount:1,barsCount:1,scatterCount:0,compare:!1,hasPathAnimation:!1,treeLayout:"horizontal",hasLinearScale:!1,allowNegativeValues:!1,hasCenterLabels:!1,thresholdLineCount:1,thresholdLineColor:"red",hasPieLabels:!0,legendPosition:"top",thresholdDataType:xe.Line},Au={title:"Charts",argTypes:{...Ai}},ke={render:t=>{const e=W("Line chart");return Mi(e,t),e},args:be,parameters:{...de},argTypes:{hasAutoLegend:{table:{disable:!0}},barsCount:{table:{disable:!0}},hasPathAnimation:{table:{disable:!0}},treeLayout:{table:{disable:!0}},scatterCount:{table:{disable:!0}},hasLinearScale:{table:{disable:!0}},allowNegativeValues:{table:{disable:!0}},hasCenterLabels:{table:{disable:!0}},hasPieLabels:{table:{disable:!0}},legendPosition:{table:{disable:!0}}}},He={render:t=>{const e=W("Bar chart");return vi(e,t),e},args:be,parameters:{...de},argTypes:{hasAutoLegend:{table:{disable:!0}},legendLabel:{table:{disable:!0}},color:{table:{disable:!0}},lineCount:{table:{disable:!0}},barsCount:{table:{disable:!0}},scatterCount:{table:{disable:!0}},compare:{table:{disable:!0}},hasPathAnimation:{table:{disable:!0}},treeLayout:{table:{disable:!0}},hasLinearScale:{table:{disable:!0}},hasCenterLabels:{table:{disable:!0}},thresholdLineCount:{table:{disable:!0}},thresholdLineColor:{table:{disable:!0}},hasPieLabels:{table:{disable:!0}},legendPosition:{table:{disable:!0}}}},ze={render:()=>{const t=W("KPI chart");return us(t),t},parameters:{...wa}},Ue={render:()=>{const t=W("Milestone KPI chart");return Fi(t),t},parameters:{...wa}},Ge={render:t=>{const e=W("Pie chart");return ki(e,t),e},args:{...be,dataCount:6,rngSeed:1326},parameters:{...de},argTypes:{legendLabel:{table:{disable:!0}},color:{table:{disable:!0}},showXAxis:{table:{disable:!0}},showYAxis:{table:{disable:!0}},axisXLabel:{table:{disable:!0}},axisYLabel:{table:{disable:!0}},positionXAxis:{table:{disable:!0}},positionYAxis:{table:{disable:!0}},hasTimeScale:{table:{disable:!0}},lineCount:{table:{disable:!0}},barsCount:{table:{disable:!0}},hasPathAnimation:{table:{disable:!0}},treeLayout:{table:{disable:!0}},scatterCount:{table:{disable:!0}},hasLinearScale:{table:{disable:!0}},allowNegativeValues:{table:{disable:!0}},compare:{table:{disable:!0}},thresholdLineCount:{table:{disable:!0}},thresholdLineColor:{table:{disable:!0}},selectionLimit:{table:{disable:!0}}}},Xe={render:t=>{const e=W("Dot chart");return Ni(e,t),e},args:{...be,dataCount:22},argTypes:{dataCount:{table:{disable:!1}},hasAutoLegend:{table:{disable:!1}},isSelectionEnabled:{table:{disable:!0}},color:{table:{disable:!0}},legendLabel:{table:{disable:!0}},showXAxis:{table:{disable:!0}},showYAxis:{table:{disable:!0}},axisXLabel:{table:{disable:!0}},axisYLabel:{table:{disable:!0}},positionXAxis:{table:{disable:!0}},positionYAxis:{table:{disable:!0}},rngSeed:{table:{disable:!0}},hasTimeScale:{table:{disable:!0}},lineCount:{table:{disable:!0}},barsCount:{table:{disable:!0}},compare:{table:{disable:!0}},scatterCount:{table:{disable:!0}},hasLinearScale:{table:{disable:!0}},allowNegativeValues:{table:{disable:!0}},forceUpdate:{table:{disable:!0}},treeLayout:{table:{disable:!0}},hasPathAnimation:{table:{disable:!0}},hasCenterLabels:{table:{disable:!0}},thresholdLineCount:{table:{disable:!0}},thresholdLineColor:{table:{disable:!0}},hasPieLabels:{table:{disable:!0}},selectionLimit:{table:{disable:!0}}},parameters:{...de}},Ye={render:t=>{const e=W("Chart");return wi(e,t),e},args:{...be,dataCount:10,lineCount:2,barsCount:3},parameters:{...de},argTypes:{legendLabel:{table:{disable:!0}},hasAutoLegend:{table:{disable:!0}},color:{table:{disable:!0}},hasTimeScale:{table:{disable:!0}},forceUpdate:{table:{disable:!0}},compare:{table:{disable:!0}},hasPathAnimation:{table:{disable:!0}},treeLayout:{table:{disable:!0}},hasCenterLabels:{table:{disable:!0}},thresholdLineCount:{table:{disable:!0}},thresholdLineColor:{table:{disable:!0}},hasPieLabels:{table:{disable:!0}},legendPosition:{table:{disable:!0}}}},Ve={render:t=>{const e=W("Tree chart");return document.body.appendChild(e),iu(e,t),e},args:be,parameters:{...de},argTypes:{hasAutoLegend:{table:{disable:!0}},isSelectionEnabled:{table:{disable:!0}},color:{table:{disable:!0}},legendLabel:{table:{disable:!0}},showXAxis:{table:{disable:!0}},showYAxis:{table:{disable:!0}},axisXLabel:{table:{disable:!0}},axisYLabel:{table:{disable:!0}},positionXAxis:{table:{disable:!0}},positionYAxis:{table:{disable:!0}},rngSeed:{table:{disable:!0}},dataCount:{table:{disable:!0}},hasTimeScale:{table:{disable:!0}},lineCount:{table:{disable:!0}},barsCount:{table:{disable:!0}},compare:{table:{disable:!0}},scatterCount:{table:{disable:!0}},hasLinearScale:{table:{disable:!0}},allowNegativeValues:{table:{disable:!0}},hasCenterLabels:{table:{disable:!0}},thresholdLineCount:{table:{disable:!0}},thresholdLineColor:{table:{disable:!0}},hasPieLabels:{table:{disable:!0}},legendPosition:{table:{disable:!0}},selectionLimit:{table:{disable:!0}}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = createChartContainer('Line chart');
    renderLineChart(container, args);
    return container;
  },
  args: defaultChartProps,
  parameters: {
    ...SHOW_CONTROLS_CONFIG
  },
  argTypes: {
    hasAutoLegend: {
      table: {
        disable: true
      }
    },
    barsCount: {
      table: {
        disable: true
      }
    },
    hasPathAnimation: {
      table: {
        disable: true
      }
    },
    treeLayout: {
      table: {
        disable: true
      }
    },
    scatterCount: {
      table: {
        disable: true
      }
    },
    hasLinearScale: {
      table: {
        disable: true
      }
    },
    allowNegativeValues: {
      table: {
        disable: true
      }
    },
    hasCenterLabels: {
      table: {
        disable: true
      }
    },
    hasPieLabels: {
      table: {
        disable: true
      }
    },
    legendPosition: {
      table: {
        disable: true
      }
    }
  }
}`,...ke.parameters?.docs?.source}}};He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = createChartContainer('Bar chart');
    renderBarChart(container, args);
    return container;
  },
  args: defaultChartProps,
  parameters: {
    ...SHOW_CONTROLS_CONFIG
  },
  argTypes: {
    hasAutoLegend: {
      table: {
        disable: true
      }
    },
    legendLabel: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    lineCount: {
      table: {
        disable: true
      }
    },
    barsCount: {
      table: {
        disable: true
      }
    },
    scatterCount: {
      table: {
        disable: true
      }
    },
    compare: {
      table: {
        disable: true
      }
    },
    hasPathAnimation: {
      table: {
        disable: true
      }
    },
    treeLayout: {
      table: {
        disable: true
      }
    },
    hasLinearScale: {
      table: {
        disable: true
      }
    },
    hasCenterLabels: {
      table: {
        disable: true
      }
    },
    thresholdLineCount: {
      table: {
        disable: true
      }
    },
    thresholdLineColor: {
      table: {
        disable: true
      }
    },
    hasPieLabels: {
      table: {
        disable: true
      }
    },
    legendPosition: {
      table: {
        disable: true
      }
    }
  }
}`,...He.parameters?.docs?.source}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = createChartContainer('KPI chart');
    renderKpiChart(container);
    return container;
  },
  parameters: {
    ...HIDE_CONTROLS_CONFIG
  }
}`,...ze.parameters?.docs?.source}}};Ue.parameters={...Ue.parameters,docs:{...Ue.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = createChartContainer('Milestone KPI chart');
    renderMilestoneKpiChart(container);
    return container;
  },
  parameters: {
    ...HIDE_CONTROLS_CONFIG
  }
}`,...Ue.parameters?.docs?.source}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = createChartContainer('Pie chart');
    renderPieChart(container, args);
    return container;
  },
  args: {
    ...defaultChartProps,
    dataCount: 6,
    rngSeed: 1326
  },
  parameters: {
    ...SHOW_CONTROLS_CONFIG
  },
  argTypes: {
    legendLabel: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    showXAxis: {
      table: {
        disable: true
      }
    },
    showYAxis: {
      table: {
        disable: true
      }
    },
    axisXLabel: {
      table: {
        disable: true
      }
    },
    axisYLabel: {
      table: {
        disable: true
      }
    },
    positionXAxis: {
      table: {
        disable: true
      }
    },
    positionYAxis: {
      table: {
        disable: true
      }
    },
    hasTimeScale: {
      table: {
        disable: true
      }
    },
    lineCount: {
      table: {
        disable: true
      }
    },
    barsCount: {
      table: {
        disable: true
      }
    },
    hasPathAnimation: {
      table: {
        disable: true
      }
    },
    treeLayout: {
      table: {
        disable: true
      }
    },
    scatterCount: {
      table: {
        disable: true
      }
    },
    hasLinearScale: {
      table: {
        disable: true
      }
    },
    allowNegativeValues: {
      table: {
        disable: true
      }
    },
    compare: {
      table: {
        disable: true
      }
    },
    thresholdLineCount: {
      table: {
        disable: true
      }
    },
    thresholdLineColor: {
      table: {
        disable: true
      }
    },
    selectionLimit: {
      table: {
        disable: true
      }
    }
  }
}`,...Ge.parameters?.docs?.source}}};Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = createChartContainer('Dot chart');
    renderDotChart(container, args);
    return container;
  },
  args: {
    ...defaultChartProps,
    dataCount: 22
  },
  argTypes: {
    dataCount: {
      table: {
        disable: false
      }
    },
    hasAutoLegend: {
      table: {
        disable: false
      }
    },
    isSelectionEnabled: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    legendLabel: {
      table: {
        disable: true
      }
    },
    showXAxis: {
      table: {
        disable: true
      }
    },
    showYAxis: {
      table: {
        disable: true
      }
    },
    axisXLabel: {
      table: {
        disable: true
      }
    },
    axisYLabel: {
      table: {
        disable: true
      }
    },
    positionXAxis: {
      table: {
        disable: true
      }
    },
    positionYAxis: {
      table: {
        disable: true
      }
    },
    rngSeed: {
      table: {
        disable: true
      }
    },
    hasTimeScale: {
      table: {
        disable: true
      }
    },
    lineCount: {
      table: {
        disable: true
      }
    },
    barsCount: {
      table: {
        disable: true
      }
    },
    compare: {
      table: {
        disable: true
      }
    },
    scatterCount: {
      table: {
        disable: true
      }
    },
    hasLinearScale: {
      table: {
        disable: true
      }
    },
    allowNegativeValues: {
      table: {
        disable: true
      }
    },
    forceUpdate: {
      table: {
        disable: true
      }
    },
    treeLayout: {
      table: {
        disable: true
      }
    },
    hasPathAnimation: {
      table: {
        disable: true
      }
    },
    hasCenterLabels: {
      table: {
        disable: true
      }
    },
    thresholdLineCount: {
      table: {
        disable: true
      }
    },
    thresholdLineColor: {
      table: {
        disable: true
      }
    },
    hasPieLabels: {
      table: {
        disable: true
      }
    },
    selectionLimit: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    ...SHOW_CONTROLS_CONFIG
  }
}`,...Xe.parameters?.docs?.source}}};Ye.parameters={...Ye.parameters,docs:{...Ye.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = createChartContainer('Chart');
    renderChart(container, args);
    return container;
  },
  args: {
    ...defaultChartProps,
    dataCount: 10,
    lineCount: 2,
    barsCount: 3
  },
  parameters: {
    ...SHOW_CONTROLS_CONFIG
  },
  argTypes: {
    legendLabel: {
      table: {
        disable: true
      }
    },
    hasAutoLegend: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    hasTimeScale: {
      table: {
        disable: true
      }
    },
    forceUpdate: {
      table: {
        disable: true
      }
    },
    compare: {
      table: {
        disable: true
      }
    },
    hasPathAnimation: {
      table: {
        disable: true
      }
    },
    treeLayout: {
      table: {
        disable: true
      }
    },
    hasCenterLabels: {
      table: {
        disable: true
      }
    },
    thresholdLineCount: {
      table: {
        disable: true
      }
    },
    thresholdLineColor: {
      table: {
        disable: true
      }
    },
    hasPieLabels: {
      table: {
        disable: true
      }
    },
    legendPosition: {
      table: {
        disable: true
      }
    }
  }
}`,...Ye.parameters?.docs?.source}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = createChartContainer('Tree chart');
    document.body.appendChild(container);
    renderTree(container, args);
    return container;
  },
  args: defaultChartProps,
  parameters: {
    ...SHOW_CONTROLS_CONFIG
  },
  argTypes: {
    hasAutoLegend: {
      table: {
        disable: true
      }
    },
    isSelectionEnabled: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    legendLabel: {
      table: {
        disable: true
      }
    },
    showXAxis: {
      table: {
        disable: true
      }
    },
    showYAxis: {
      table: {
        disable: true
      }
    },
    axisXLabel: {
      table: {
        disable: true
      }
    },
    axisYLabel: {
      table: {
        disable: true
      }
    },
    positionXAxis: {
      table: {
        disable: true
      }
    },
    positionYAxis: {
      table: {
        disable: true
      }
    },
    rngSeed: {
      table: {
        disable: true
      }
    },
    dataCount: {
      table: {
        disable: true
      }
    },
    hasTimeScale: {
      table: {
        disable: true
      }
    },
    lineCount: {
      table: {
        disable: true
      }
    },
    barsCount: {
      table: {
        disable: true
      }
    },
    compare: {
      table: {
        disable: true
      }
    },
    scatterCount: {
      table: {
        disable: true
      }
    },
    hasLinearScale: {
      table: {
        disable: true
      }
    },
    allowNegativeValues: {
      table: {
        disable: true
      }
    },
    hasCenterLabels: {
      table: {
        disable: true
      }
    },
    thresholdLineCount: {
      table: {
        disable: true
      }
    },
    thresholdLineColor: {
      table: {
        disable: true
      }
    },
    hasPieLabels: {
      table: {
        disable: true
      }
    },
    legendPosition: {
      table: {
        disable: true
      }
    },
    selectionLimit: {
      table: {
        disable: true
      }
    }
  }
}`,...Ve.parameters?.docs?.source}}};const Tu=["LineChart","BarChart","KPIChart","MilestoneKPIChart","PieChart","DotChart","Chart","TreeChart"];export{He as BarChart,Ye as Chart,Xe as DotChart,ze as KPIChart,ke as LineChart,Ue as MilestoneKPIChart,Ge as PieChart,Ve as TreeChart,Tu as __namedExportsOrder,Au as default};
