import{hT as d,hU as f,hV as i,hW as l,U as m}from"./index-B6FTDkqq.js";function y(s){const t=s.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function j(s,t){const e={};for(const n of t){const{parentObjectId:a,parentGlobalId:o,attachmentInfos:r}=n;for(const c of r){const{id:u}=c,p=d(f(`${s.path}/${a}/attachments/${u}`)),h=i.fromJSON(c);h.set({url:p,parentObjectId:a,parentGlobalId:o}),e[a]?e[a].push(h):e[a]=[h]}}return e}function b(s,t,e){let n={query:l({...s.query,f:"json",...y(t)})};return e&&(n={...e,...n,query:{...e.query,...n.query}}),m(s.path+"/queryAttachments",n).then(a=>a.data.attachmentGroups)}async function q(s,t,e){const{objectIds:n}=t,a=[];for(const o of n)a.push(m(s.path+"/"+o+"/attachments",e));return Promise.all(a).then(o=>n.map((r,c)=>({parentObjectId:r,attachmentInfos:o[c].data.attachmentInfos})))}export{b as executeAttachmentQuery,q as fetchAttachments,j as processAttachmentQueryResult};