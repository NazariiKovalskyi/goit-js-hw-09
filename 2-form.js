import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},t=document.querySelector(".feedback-form"),s="feedback-form-state";function l(){const a=localStorage.getItem(s);if(a){const m=JSON.parse(a);e.email=m.email||"",e.message=m.message||"",t.elements.email.value=e.email,t.elements.message.value=e.message}}l();t.addEventListener("input",a=>{e[a.target.name]=a.target.value,localStorage.setItem(s,JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(s),e.email="",e.message="",t.reset()});
//# sourceMappingURL=2-form.js.map
