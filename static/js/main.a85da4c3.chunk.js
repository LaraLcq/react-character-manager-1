(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(47),i=a.n(s);a(58),a(59),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(11),o=a(12),l=a(14),u=a(13),h=a(15),m=(a(60),a(16)),p=a(6),d=a(48),g=a.n(d),f=a(49),v=a(19),b=a.n(v),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,character:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"deleteSuperHeros",value:function(e){console.log("test"),b.a.delete("https://character-database.becode.xyz/characters/"+e).then(function(e){return e.json()})}},{key:"getApi",value:function(){var e=this;fetch("https://character-database.becode.xyz/characters").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,character:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"componentDidUpdate",value:function(){this.getApi()}},{key:"componentDidMount",value:function(){this.getApi()}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,r=t.isLoaded,s=t.character;return a?n.a.createElement("div",null,"Error: ",a.message):r?n.a.createElement(n.a.Fragment,null,n.a.createElement("h5",{class:"section-title h1"},"OUR TEAM"),n.a.createElement("div",{class:"row justify-content-center"},s.map(function(t){return n.a.createElement("div",{class:"col-xs-12 col-sm-6 col-md-4"},n.a.createElement("div",{class:"image-flip",onTouchStart:"this.classList.toggle('hover');"},n.a.createElement("div",{class:"mainflip"},n.a.createElement("div",{class:"frontside"},n.a.createElement("div",{class:"card"},n.a.createElement("div",{class:"card-body text-center"},n.a.createElement("p",null,n.a.createElement("img",{class:" img-fluid",src:"data:image;base64,"+t.image,onError:function(e){e.target.onerror=null,e.target.src="https://img3.cliparto.com/pic/s/256180/5361912-user-icon-handcuffs-icon.jpg"},alt:t.name})),n.a.createElement("h4",{class:"card-title"},t.name),n.a.createElement("p",{class:"card-text"},t.shortDescription)))),n.a.createElement("div",{class:"backside"},n.a.createElement("div",{class:"card"},n.a.createElement("div",{class:"card-body text-center mt-4"},n.a.createElement("h4",{class:"card-title"},t.name),n.a.createElement(g.a,{className:"card-text desc",source:t.description}),n.a.createElement("ul",{class:"list-inline"},n.a.createElement("li",{class:"list-inline-item"},n.a.createElement(p.b,{class:"social-icon text-xs-center",to:"/edit/character/"+t.id},n.a.createElement("i",{class:"fas fa-pen-fancy"})," edit")),n.a.createElement("li",{class:"list-inline-item"},n.a.createElement(p.b,{class:"social-icon text-xs-center",to:"/",onClick:function(a){window.confirm("Are you sure you wish to delete this super hero?")&&e.deleteSuperHeros(t.id)}},n.a.createElement("i",{class:"fas fa-trash-alt"})," delete")))))))))}),n.a.createElement(p.b,{to:"character/add",className:" w-100"},n.a.createElement("div",{class:"image",onTouchStart:"this.classList.toggle('hover');"},n.a.createElement("div",{class:"mainflip "},n.a.createElement("div",{class:"frontside"},n.a.createElement("div",{class:"card bg-success"},n.a.createElement("div",{class:"card-body text-center text-light align-middle"},n.a.createElement(f.a,{icon:"plus",size:"10x"}),n.a.createElement("p",null,"Add a character"))))))))):n.a.createElement("div",null,"Loading...")}}]),t}(r.Component),_=a(2),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChangeSuperHerosName=a.onChangeSuperHerosName.bind(Object(_.a)(Object(_.a)(a))),a.onChangeSuperHerosDesc=a.onChangeSuperHerosDesc.bind(Object(_.a)(Object(_.a)(a))),a.onChangeSuperHerosShortDesc=a.onChangeSuperHerosShortDesc.bind(Object(_.a)(Object(_.a)(a))),a.onChangeSuperHerosImage=a.onChangeSuperHerosImage.bind(Object(_.a)(Object(_.a)(a))),a.onSubmit=a.onSubmit.bind(Object(_.a)(Object(_.a)(a))),a.state={error:null,isLoaded:!1,super_hero_name:"",super_hero_desc:"",super_hero_short_desc:"",super_hero_image:"",file:"",imagePreviewUrl:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"onSubmit",value:function(e){var t;e.preventDefault(),t=this.state.imagePreviewUrl?this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(",")+1):this.state.super_hero_image;var a={name:this.state.super_hero_name,description:this.state.super_hero_desc,shortDescription:this.state.super_hero_short_desc,image:t};console.log("Romain ne sait pas coder"),b.a.put("https://character-database.becode.xyz/characters/"+this.props.match.params.id,a).then(function(e){return e.json()},this.props.history.push("/"))}},{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,r=e.target.files[0];a.onloadend=function(){t.setState({file:r,imagePreviewUrl:a.result})},a.readAsDataURL(r)}},{key:"componentDidMount",value:function(){var e=this;fetch("https://character-database.becode.xyz/characters/"+this.props.match.params.id).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,super_hero_name:t.name,super_hero_desc:t.description,super_hero_short_desc:t.shortDescription,super_hero_image:t.image})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"onChangeSuperHerosName",value:function(e){this.setState({super_hero_name:e.target.value})}},{key:"onChangeSuperHerosDesc",value:function(e){this.setState({super_hero_desc:e.target.value})}},{key:"onChangeSuperHerosShortDesc",value:function(e){this.setState({super_hero_short_desc:e.target.value})}},{key:"onChangeSuperHerosImage",value:function(e){this.setState({super_hero_image:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,r=t.isLoaded;if(a)return n.a.createElement("div",null,"Error: ",a.message);if(r){var s=this.state.imagePreviewUrl,i=null;if(s)i=n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{class:"preview-img",ref:"image",src:s,width:"100",height:"100"}));else i=this.state.super_hero_image?n.a.createElement("img",{class:"preview-img",ref:"image",src:"data:image/;base64,"+this.state.super_hero_image,width:"100",height:"100"}):n.a.createElement("img",{class:"preview-img",src:"https://img3.cliparto.com/pic/s/256180/5361912-user-icon-handcuffs-icon.jpg",width:"100",height:"100"});return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.b,{to:"/"},"Return to home"),n.a.createElement("h1",null,"Editing : ",this.state.super_hero_name),n.a.createElement("form",{class:"col-md-6 mx-auto",onSubmit:this.onSubmit},n.a.createElement("input",{class:"form-control",type:"text",name:"name",ref:"name",defaultValue:this.state.super_hero_name,onChange:this.onChangeSuperHerosName}),n.a.createElement("div",{class:"preview text-center"},i,n.a.createElement("div",{class:"browse-button"},n.a.createElement("i",{class:"fa fa-pencil-alt"}),n.a.createElement("input",{class:"browse-input",type:"file",name:"image",id:"UploadedFile",onChange:function(t){return e._handleImageChange(t)}})),n.a.createElement("span",{class:"Error"})),n.a.createElement("input",{class:"form-control",type:"text",ref:"shortDescription",name:"shortDescription",defaultValue:this.state.super_hero_short_desc,onChange:this.onChangeSuperHerosShortDesc}),n.a.createElement("textarea",{class:"form-control",ref:"description",name:"description",rows:"10",onChange:this.onChangeSuperHerosDesc},this.state.super_hero_desc),n.a.createElement("input",{type:"submit",class:"form-control btn btn-primary",value:"submit"})))}return n.a.createElement("div",null,"Loading... ",this.props.match.params.id)}}]),t}(r.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChangeSuperHerosName=a.onChangeSuperHerosName.bind(Object(_.a)(Object(_.a)(a))),a.onChangeSuperHerosDesc=a.onChangeSuperHerosDesc.bind(Object(_.a)(Object(_.a)(a))),a.onChangeSuperHerosShortDesc=a.onChangeSuperHerosShortDesc.bind(Object(_.a)(Object(_.a)(a))),a.onChangeSuperHerosImage=a.onChangeSuperHerosImage.bind(Object(_.a)(Object(_.a)(a))),a.onSubmit=a.onSubmit.bind(Object(_.a)(Object(_.a)(a))),a.state={error:null,isLoaded:!0,super_hero_name:"",super_hero_desc:"",super_hero_short_desc:"",super_hero_image:"",file:"",imagePreviewUrl:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.super_hero_name,description:this.state.super_hero_desc,shortDescription:this.state.super_hero_short_desc,image:this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(",")+1)};console.log("Romain ne sait pas coder"),b.a.post("https://character-database.becode.xyz/characters/",t).then(function(e){return e.json()},this.props.history.push("/"))}},{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,r=e.target.files[0];a.onloadend=function(){t.setState({file:r,imagePreviewUrl:a.result})},a.readAsDataURL(r)}},{key:"onChangeSuperHerosName",value:function(e){this.setState({super_hero_name:e.target.value})}},{key:"onChangeSuperHerosDesc",value:function(e){this.setState({super_hero_desc:e.target.value})}},{key:"onChangeSuperHerosShortDesc",value:function(e){this.setState({super_hero_short_desc:e.target.value})}},{key:"onChangeSuperHerosImage",value:function(e){this.setState({super_hero_image:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,r=t.isLoaded;if(a)return n.a.createElement("div",null,"Error: ",a.message);if(r){var s=this.state.imagePreviewUrl,i=null;if(s)i=n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{class:"preview-img",ref:"image",src:s,width:"100",height:"100"}));else i=this.state.super_hero_image?n.a.createElement("img",{class:"preview-img",ref:"image",src:"data:image/;base64,"+this.state.super_hero_image,width:"100",height:"100"}):n.a.createElement("img",{class:"preview-img",src:"https://img3.cliparto.com/pic/s/256180/5361912-user-icon-handcuffs-icon.jpg",width:"100",height:"100"});return n.a.createElement("div",null,n.a.createElement(n.a.Fragment,null,n.a.createElement(p.b,{to:"/"},"Return to home"),n.a.createElement("h1",null,"Add a new super hero"),n.a.createElement("form",{class:"col-md-6 mx-auto",onSubmit:this.onSubmit},n.a.createElement("input",{class:"form-control",type:"text",name:"name",ref:"name",defaultValue:this.state.super_hero_name,onChange:this.onChangeSuperHerosName}),n.a.createElement("div",{class:"preview text-center"},i,n.a.createElement("div",{class:"browse-button"},n.a.createElement("i",{class:"fa fa-pencil-alt"}),n.a.createElement("input",{class:"browse-input",type:"file",name:"image",id:"UploadedFile",onChange:function(t){return e._handleImageChange(t)}})),n.a.createElement("span",{class:"Error"})),n.a.createElement("input",{class:"form-control",type:"text",ref:"shortDescription",name:"shortDescription",defaultValue:this.state.super_hero_short_desc,onChange:this.onChangeSuperHerosShortDesc}),n.a.createElement("textarea",{class:"form-control",ref:"description",name:"description",rows:"10",onChange:this.onChangeSuperHerosDesc},this.state.super_hero_desc),n.a.createElement("input",{type:"submit",class:"form-control btn btn-primary",value:"submit"}))))}return n.a.createElement("div",null,"Loading... ",this.props.match.params.id)}}]),t}(r.Component),j=function(){return n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",component:E}),n.a.createElement(m.a,{exact:!0,path:"/edit/character/:id",component:S}),n.a.createElement(m.a,{exact:!0,path:"/character/add",component:w}))},y=a(21),C=a(52);y.b.add(C.a);var O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{className:"vh-50 w-100 ofc",src:"https://geeko.lesoir.be/wp-content/uploads/sites/58/2015/06/marvel.png",alt:"superheros"}),n.a.createElement("div",{className:"container"},n.a.createElement(j,null)))}}]),t}(r.Component);i.a.render(n.a.createElement(p.a,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,a){e.exports=a(168)},58:function(e,t,a){},60:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.a85da4c3.chunk.js.map