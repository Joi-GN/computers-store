"use strict";(self.webpackChunkcomputers_store=self.webpackChunkcomputers_store||[]).push([[328],{5328:(b,p,r)=>{r.r(p),r.d(p,{ProductsModule:()=>y});var a=r(6895),s=r(9541),t=r(1571);const m=[{id:1,imageURL:"https://placekitten.com/320/200",name:"Monitor 4K",price:2200,stock:10,description:"\xc0 vista no PIX"},{id:2,imageURL:"https://placekitten.com/320/200",name:"Mouse RGB",price:124,stock:10,description:"\xc0 vista no PIX"},{id:3,imageURL:"https://placekitten.com/320/200",name:"Placa de V\xeddeo 3090",price:3020,stock:0,description:"\xc0 vista no PIX"},{id:4,imageURL:"https://placekitten.com/320/200",name:"Teclado Vermelho",price:65,stock:10,description:"\xc0 vista no PIX"},{id:5,imageURL:"https://placekitten.com/320/200",name:"Teclado RGB",price:137,stock:10,description:"\xc0 vista no PIX"},{id:6,imageURL:"https://placekitten.com/320/200",name:"Processador i9 13\xba gera\xe7\xe3o",price:2300,stock:0,description:"\xc0 vista no PIX"},{id:7,imageURL:"https://placekitten.com/320/200",name:"Monitor 22' HD",price:1500,stock:10,description:"\xc0 vista no PIX"},{id:8,imageURL:"https://placekitten.com/320/200",name:"Mouse Rosa",price:48,stock:10,description:"\xc0 vista no PIX"},{id:9,imageURL:"https://placekitten.com/320/200",name:"HD 1TB",price:99,stock:10,description:"\xc0 vista no PIX"},{id:10,imageURL:"https://placekitten.com/320/200",name:"SSD 240GB",price:234,stock:10,description:"\xc0 vista no PIX"},{id:11,imageURL:"https://placekitten.com/320/200",name:"HD 500GB",price:56,stock:10,description:"\xc0 vista no PIX"},{id:12,imageURL:"https://placekitten.com/320/200",name:"Mem\xf3ria RAM 8GB",price:300,stock:10,description:"\xc0 vista no PIX"},{id:13,imageURL:"https://placekitten.com/320/200",name:"Mem\xf3ria RAM 16GB",price:580,stock:10,description:"\xc0 vista no PIX"},{id:14,imageURL:"https://placekitten.com/320/200",name:"Monitor 8K",price:4100,stock:10,description:"\xc0 vista no PIX"}];let l=(()=>{class o{constructor(){this.products=m}getAll(){return this.products}getOne(n){return this.products.find(e=>e.id==n)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var _=r(8881);let g=(()=>{class o{constructor(n){this.snackBar=n}notify(n){this.snackBar.open(n,"\u2714\ufe0f",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(_.ux))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var h=r(3705),i=r(433);let f=(()=>{class o{constructor(n,e,d,u){this.productsService=n,this.route=e,this.notificationService=d,this.cartService=u,this.productQuantity=1}ngOnInit(){const e=Number(this.route.snapshot.paramMap.get("id"));this.product=this.productsService.getOne(e)}addToCart(){const n={...this.product,quantity:this.productQuantity};this.cartService.addToCart(n),this.notificationService.notify("O produto foi adicionado ao carrinho")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(l),t.Y36(s.gz),t.Y36(g),t.Y36(h.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-details"]],decls:18,vars:12,consts:[[1,"product__container","container"],[1,"product-image__container"],["alt","",1,"product__image",3,"src"],[1,"product-details__container"],[1,"product__name"],[1,"product__price"],[1,"product__price-description"],[3,"ngClass"],[1,"product__amount"],["type","number","min","1",3,"ngModel","max","ngModelChange"],[1,"product__buy-button",3,"disabled","click"]],template:function(n,e){1&n&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h2",4),t._uU(5),t.qZA(),t.TgZ(6,"h3",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"p",6),t._uU(10),t.qZA(),t.TgZ(11,"p",7),t._uU(12),t.qZA(),t.TgZ(13,"label",8),t._uU(14," Quantidade: "),t.TgZ(15,"input",9),t.NdJ("ngModelChange",function(u){return e.productQuantity=u}),t.qZA()(),t.TgZ(16,"button",10),t.NdJ("click",function(){return e.addToCart()}),t._uU(17,"Adicionar ao carrinho"),t.qZA()()()),2&n&&(t.xp6(2),t.Q6J("src",null==e.product?null:e.product.imageURL,t.LSH),t.xp6(3),t.Oqu(null==e.product?null:e.product.name),t.xp6(2),t.Oqu(t.xi3(8,9,null==e.product?null:e.product.price,"BRL")),t.xp6(3),t.Oqu(null==e.product?null:e.product.description),t.xp6(1),t.Q6J("ngClass",0==(null==e.product?null:e.product.stock)?"product__not-available":"product__available"),t.xp6(1),t.Oqu(0==(null==e.product?null:e.product.stock)?"Esgotado":"Estoque dispon\xedvel: "+(null==e.product?null:e.product.stock)+" unidade(s)"),t.xp6(3),t.Q6J("ngModel",e.productQuantity)("max",(null==e.product?null:e.product.stock)||null),t.xp6(1),t.Q6J("disabled",0==(null==e.product?null:e.product.stock)))},dependencies:[a.mk,i.Fj,i.wV,i.JJ,i.qQ,i.Fd,i.On,a.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2rem;padding-block:5rem}.product__image[_ngcontent-%COMP%]{width:100%}.product-details__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.product__name[_ngcontent-%COMP%]{color:var(--text-color-2);font-size:1.5rem;font-weight:700}.product__price[_ngcontent-%COMP%]{color:var(--brand-color-3);font-weight:700}.product__price-description[_ngcontent-%COMP%]{color:var(--grey)}.product__not-available[_ngcontent-%COMP%], .product__available[_ngcontent-%COMP%]{font-weight:700}.product__not-available[_ngcontent-%COMP%]{color:var(--invalid)}.product__available[_ngcontent-%COMP%]{color:var(--brand-color-1)}.product__buy-button[_ngcontent-%COMP%]{background-color:var(--brand-color-1);border-radius:1rem;color:var(--text-color-light);font-size:1rem;font-weight:700;margin-top:1rem}@media screen and (min-width: 0){.product__container[_ngcontent-%COMP%]{flex-direction:column}.product-image__container[_ngcontent-%COMP%]{width:100%}}@media screen and (min-width: 768px){.product__container[_ngcontent-%COMP%]{flex-direction:row}.product-image__container[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width: 1024px){.product-image__container[_ngcontent-%COMP%]{width:60%}}"]}),o})();function P(o,c){1&o&&(t.TgZ(0,"span",14),t._uU(1,"Esgotado"),t.qZA())}function v(o,c){if(1&o&&(t.TgZ(0,"li",6)(1,"a",7),t._UZ(2,"img",8),t.TgZ(3,"h3",9),t._uU(4),t.qZA(),t.TgZ(5,"p",10),t._uU(6),t.ALo(7,"currency"),t.YNc(8,P,2,0,"span",11),t.qZA(),t.TgZ(9,"p",12),t._uU(10),t.qZA(),t.TgZ(11,"button",13),t._uU(12,"Adicionar ao carrinho"),t.qZA()()()),2&o){const n=c.$implicit;t.xp6(1),t.MGl("routerLink","/products/",n.id,""),t.xp6(1),t.Q6J("src",n.imageURL,t.LSH),t.xp6(2),t.Oqu(n.name),t.xp6(2),t.hij(" ",t.xi3(7,7,n.price,"BRL")," "),t.xp6(2),t.Q6J("ngIf",0==n.stock),t.xp6(2),t.Oqu(n.description),t.xp6(1),t.Q6J("disabled",0==n.stock)}}function C(o,c){if(1&o&&(t.TgZ(0,"ul",4),t.YNc(1,v,13,10,"li",5),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.products)}}function M(o,c){1&o&&(t.TgZ(0,"div",15)(1,"h3",16),t._uU(2,"Nenhum produto encontrado"),t.qZA()())}const k=[{path:"",component:(()=>{class o{constructor(n,e){this.productsService=n,this.route=e,this.productsFound=!0}ngOnInit(){this.route.queryParamMap.subscribe(n=>{const e=n.get("name")?.toLowerCase();this.products=this.productsService.getAll(),e?(this.products=this.products.filter(d=>d.name.toLowerCase().includes(e)),0==this.products.length&&(this.productsFound=!1)):(this.products=this.productsService.getAll(),this.productsFound=!0)})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(l),t.Y36(s.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:6,vars:2,consts:[[1,"container"],[1,"section__title"],["class","product-list",4,"ngIf","ngIfElse"],["noProductsFound",""],[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__card__link",3,"routerLink"],["alt","",1,"product-item__image",3,"src"],[1,"product-item__name"],[1,"product-item__price"],["class","product-item__stock",4,"ngIf"],[1,"product-item__price-description"],[1,"product-item__buy-button",3,"disabled"],[1,"product-item__stock"],[1,"no-products-found"],[1,"no-products-found__title"]],template:function(n,e){if(1&n&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2,"Produtos"),t.qZA(),t.YNc(3,C,2,1,"ul",2),t.YNc(4,M,3,0,"ng-template",null,3,t.W1O),t.qZA()),2&n){const d=t.MAs(5);t.xp6(3),t.Q6J("ngIf",e.productsFound)("ngIfElse",d)}},dependencies:[a.sg,a.O5,s.rH,a.H9],styles:[".product-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1.5rem}.product-list__card[_ngcontent-%COMP%]{border-radius:1rem;box-shadow:#63636333 0 2px 8px;padding:1rem}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--brand-color-3);transform:scale(1.1)}.product-list__card__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly}.product-item__image[_ngcontent-%COMP%]{width:100%}.product-item__name[_ngcontent-%COMP%]{color:var(--text-color-2);font-weight:700}.product-item__price[_ngcontent-%COMP%]{color:var(--brand-color-3);font-weight:700}.product-item__stock[_ngcontent-%COMP%]{color:var(--invalid)}.product-item__price-description[_ngcontent-%COMP%]{color:var(--grey)}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--brand-color-1);border-radius:1rem;color:var(--text-color-light);font-weight:700}.no-products-found[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:60vh;text-align:center}.no-products-found__title[_ngcontent-%COMP%]{color:var(--brand-color-1);font-weight:700}@media screen and (min-width: 0){.product-list__card[_ngcontent-%COMP%]{width:calc(50% - .75rem)}}@media screen and (min-width: 768px){.product-list__card[_ngcontent-%COMP%]{width:calc(33.3% - 1rem)}}@media screen and (min-width: 1024px){.product-list__card[_ngcontent-%COMP%]{width:calc(25% - 1.13rem)}}@media screen and (min-width: 1440px){.product-list__card[_ngcontent-%COMP%]{width:calc(20% - 1.2rem)}}"]}),o})()},{path:":id",component:f}];let O=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(k),s.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.ez,O,i.u5]}),o})()}}]);