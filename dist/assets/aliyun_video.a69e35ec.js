import{a as w,N as n,an as x,cw as f,bX as k,aI as v,bk as _,_ as F,ar as j,bq as L,n as O,o as S,c as W,e as c,R as A}from"./index.acf3a792.js";import{a as C}from"./useUtil.6e613986.js";import{O as I}from"./icon.0b7e78dd.js";import{A as N,V as P}from"./video_box.10149c8d.js";import{H as R,a as z}from"./hls.d324070d.js";import"./api.b7d8626c.js";import"./index.01cbc5a3.js";import"./index.ab718934.js";import"./Layout.f1f06452.js";import"./EncodingSelect.69db8ed5.js";import"./index.c1c923d8.js";import"./FolderTree.7ee9cda3.js";const Q=()=>{const{replace:h,pathname:m}=w(),{proxyLink:u}=C();let i=n.objs.filter(e=>e.type===I.VIDEO);i.length===0&&(i=[n.obj]);let o,s={id:m(),container:"#video-player",title:n.obj.name,volume:.5,autoplay:x("video_autoplay"),autoSize:!1,autoMini:!0,loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[],whitelist:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,t){const r=new R;r.loadSource(t),r.attachMedia(e),e.src||(e.src=t)}},lang:["en","zh-cn","zh-tw"].includes(f().toLowerCase())?f().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const l=n.related.find(e=>{for(const t of[".srt",".ass",".vtt"])if(e.name.endsWith(t))return!0;return!1}),d=n.related.find(e=>{for(const t of[".xml"])if(e.name.endsWith(t))return!0;return!1});l&&(s.subtitle={url:u(l,!0),type:k(l.name)}),d&&(s.plugins=[z({danmuku:u(d,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})]);const[B,y]=v(()=>_.post("/fs/other",{path:m(),password:F(),method:"video_preview"}));j(async()=>{const e=await y();L(e,t=>{const r=t.video_preview_play_info.live_transcoding_task_list.filter(a=>a.url);if(r.length===0){O.error("No transcoding video found");return}s.url=r[r.length-1].url,s.quality=r.map((a,p)=>({html:a.template_id,url:a.url,default:p===r.length-1})),o=new N(s),o.on("video:ended",()=>{if(!g())return;const a=i.findIndex(p=>p.name===n.obj.name);a<i.length-1&&h(i[a+1].name)}),l&&o.on("video:play",a=>{o.subtitle.url=u(l,!0)})})}),S(()=>{o==null||o.destroy()});const[g,b]=W();return c(P,{onAutoNextChange:b,get children(){return c(A,{w:"$full",h:"60vh",id:"video-player"})}})};export{Q as default};
