import e from"isomorphic-unfetch";import{createClient as t}from"@supabase/supabase-js";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},s.apply(this,arguments)}class r{constructor(e){this.version=void 0,this.basePath=void 0,this.defaultVersion="v1/",this.defaultBaseURL="https://api.spotbase.io/",this.authToken=void 0,this.version=e&&e.version&&e.version+"/"||this.defaultVersion,this.basePath=e&&e.basePath&&e.basePath+"/"+this.version||this.defaultBaseURL+this.version}request(t,r,o){const i=this.basePath+t;let n={"Content-type":"application/json"};r&&(n=s({},n,{Authorization:"Bearer "+this.getAuthToken()}));const a=s({},o,{headers:n});return e(i,a).then(e=>{if(e.ok)return e.json();throw new Error(e.statusText)})}setAuthToken(e){e&&(this.authToken=e)}getAuthToken(){return this.authToken}}let o="project/PROJECT/addon/cms/TOKEN/",i=t("https://yijpzmbtxcpgpswkvyfd.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpanB6bWJ0eGNwZ3Bzd2t2eWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwOTAyNTgsImV4cCI6MjAwOTY2NjI1OH0.I66q9wcZlkYXTMN1RKB_hLorD71jWq2ehaNxjA31Imk"),n="project/PROJECT/";class a extends r{}var c;c=a,[class extends r{async getCMSConfig(e,t){if(!t||!e)return Promise.resolve({});const s=o.replace("PROJECT",e).replace("TOKEN",t);return await this.request(s+"config")}async patchCMSConfig(e,t,s){if(!t||!e)return Promise.resolve("400");const r=o.replace("PROJECT",e).replace("TOKEN",t);return this.request(r+"config",!0,{method:"PATCH",body:JSON.stringify(s)})}async getItems(e,t){if(!t||!e)return Promise.resolve({});const s=o.replace("PROJECT",e).replace("TOKEN",t);return await this.request(s+"items")}async getFields(e,t){if(!t||!e)return Promise.resolve({});const s=o.replace("PROJECT",e).replace("TOKEN",t);return await this.request(s+"fields",!0)}async getProgress(e,t){if(!t||!e)return Promise.resolve({});const s=o.replace("PROJECT",e).replace("TOKEN",t);return await this.request(s+"progress",!0)}},class extends r{async login(e,t){const{data:s,error:r}=await i.auth.signInWithPassword({email:e,password:t});s.session?this.setAuthToken(s.session.access_token):console.log(r)}async logout(){const{error:e}=await i.auth.signOut();200!=e.status&&console.log(e.message)}},class extends r{async getProjectDomains(e){if(!e)return Promise.resolve({});const t=n.replace("PROJECT",e);return await this.request(t+"domains",!0)}async patchProjectDomains(e,t){if(!e||!t)return Promise.resolve("400");const s=n.replace("PROJECT",e);return this.request(s+"domains",!0,{method:"PATCH",body:JSON.stringify(t)})}async deleteProjectDomains(e,t){if(!e||!t)return Promise.resolve("400");const s=n.replace("PROJECT",e);return this.request(s+"domains",!0,{method:"DELETE",body:JSON.stringify(t)})}}].forEach(e=>{Object.getOwnPropertyNames(e.prototype).forEach(t=>{Object.defineProperty(c.prototype,t,Object.getOwnPropertyDescriptor(e.prototype,t))})});export{a as default};
//# sourceMappingURL=index.modern.js.map