(self.webpackChunkFEC=self.webpackChunkFEC||[]).push([[486],{2793:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>de});var a=n(4942),r=n(2982),l=n(5671),i=n(3144),s=n(7326),o=n(9340),c=n(6215),u=n(1120),m=n(7294),d=n(3379),p=n.n(d),h=n(7795),v=n.n(h),f=n(569),g=n.n(f),y=n(3565),E=n.n(y),b=n(9216),j=n.n(b),w=n(4589),R=n.n(w),x=n(9324),k={};k.styleTagTransform=R(),k.setAttributes=E(),k.insert=g().bind(null,"head"),k.domAPI=v(),k.insertStyleElement=j(),p()(x.Z,k),x.Z&&x.Z.locals&&x.Z.locals;var Z=n(3253),S=n.n(Z),C=n(6897),N={};N.styleTagTransform=R(),N.setAttributes=E(),N.insert=g().bind(null,"head"),N.domAPI=v(),N.insertStyleElement=j(),p()(C.Z,N),C.Z&&C.Z.locals&&C.Z.locals;var A=n(6134),z={};z.styleTagTransform=R(),z.setAttributes=E(),z.insert=g().bind(null,"head"),z.domAPI=v(),z.insertStyleElement=j(),p()(A.Z,z),A.Z&&A.Z.locals&&A.Z.locals;var O=n(1320),P={};P.styleTagTransform=R(),P.setAttributes=E(),P.insert=g().bind(null,"head"),P.domAPI=v(),P.insertStyleElement=j(),p()(O.Z,P),O.Z&&O.Z.locals&&O.Z.locals;var I=n(1871);var _=function(e){(0,o.Z)(s,e);var t,n,a=(t=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.Z)(t);if(n){var r=(0,u.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function s(e){return(0,l.Z)(this,s),a.call(this,e)}return(0,i.Z)(s,[{key:"render",value:function(){var e=this.props.averageRating;return e>=0?m.createElement("div",null,(0,r.Z)(Array(5)).map((function(t,n){var a=n+1;return m.createElement(I.QJe,{className:"star",color:a<=e?"#ffc107":"#e4e5e9",size:15,key:n})}))):null}}]),s}(m.Component);const B=_;var T=n(284),F=n(381);const M=function(e){var t=e.review,n=e.onHelpulButtonClick;return m.createElement("div",{className:"review_list"},m.createElement("div",{className:"reviewer_name"},m.createElement("span",null,m.createElement(B,{averageRating:t.rating})),m.createElement("span",null,t.reviewer_name," "),m.createElement("span",null,F(t.date).format("MM/DD/YYYY")," ")),m.createElement("h4",null,t.summary),m.createElement("p",null,t.body),t.recommend&&m.createElement("p",null,"I recommend this product"),null!==t.response&&m.createElement("div",null,"review.response:",t.response),m.createElement("div",{className:"reviewer_helpful"},m.createElement(T.Z,{helpfulness:t.helpfulness,id:t.review_id,onHelpulButtonClick:n}),m.createElement("p",{className:"separator"},"|"),m.createElement("button",{className:"report-button"},"Report")))};var D=n(4925),H=(n(3935),n(954)),W={};W.styleTagTransform=R(),W.setAttributes=E(),W.insert=g().bind(null,"head"),W.domAPI=v(),W.insertStyleElement=j(),p()(H.Z,W),H.Z&&H.Z.locals&&H.Z.locals;var Y=n(4777),L={};L.styleTagTransform=R(),L.setAttributes=E(),L.insert=g().bind(null,"head"),L.domAPI=v(),L.insertStyleElement=j(),p()(Y.Z,L),Y.Z&&Y.Z.locals&&Y.Z.locals;var Q=function(e){(0,o.Z)(d,e);var t,n,a=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.Z)(t);if(n){var r=(0,u.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function d(e){var t;return(0,l.Z)(this,d),(t=a.call(this,e)).state={rating:null,hover:null},t.handleSetStarClick=t.handleSetStarClick.bind((0,s.Z)(t)),t}return(0,i.Z)(d,[{key:"handleSetStarClick",value:function(e){e.preventDefault(),this.setState({rating:e.target.value}),this.props.getRating(1*e.target.value)}},{key:"render",value:function(){var e=this;return m.createElement("div",null,(0,r.Z)(Array(5)).map((function(t,n){var a=n+1;return m.createElement("label",{key:n},m.createElement("input",{className:"star_radio",type:"radio",name:"rating",value:a,onClick:e.handleSetStarClick,onChange:function(){return e.setState({rating:a})}}),m.createElement(I.QJe,{className:"star",color:a<=(e.state.hover||e.state.rating)?"#ffc107":"#e4e5e9",size:20,onMouseEnter:function(){return e.setState({hover:a})},onMouseLeave:function(){return e.setState({hover:null})}}))})))}}]),d}(m.Component);const q=Q;var U=["isEmailInvalid","hasEmptyNicknameError","hasEmptyEmailError"];function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=function(e){(0,o.Z)(d,e);var t,n,r=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.Z)(t);if(n){var r=(0,u.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function d(e){var t;return(0,l.Z)(this,d),(t=r.call(this,e)).state={isEmailInvalid:!1,hasEmptyNicknameError:!1,hasEmptyEmailError:!1,product_id:e.productId,rating:0,summary:"",body:"",recommend:!0,name:"",email:"",characteristics:{}},t.getRating=t.getRating.bind((0,s.Z)(t)),t.handleSubmitReview=t.handleSubmitReview.bind((0,s.Z)(t)),t.handleChange=t.handleChange.bind((0,s.Z)(t)),t}return(0,i.Z)(d,[{key:"getRating",value:function(e){this.setState({rating:e})}},{key:"handleChange",value:function(e){var t=this.props.characteristics;t.Size&&e.target.name===t.Size.id.toString()||t.Width&&e.target.name===t.Width.id.toString()||t.Comfort&&e.target.name===t.Comfort.id.toString()||t.Quality&&e.target.name===t.Quality.id.toString()||t.Length&&e.target.name===t.Length.id.toString()||t.Fit&&e.target.name===t.Fit.id.toString()?this.setState({characteristics:J(J({},this.state.characteristics),{},(0,a.Z)({},e.target.name,Number(e.target.value)))}):"recommend"===e.target.name?this.setState((0,a.Z)({},e.target.name,"yes"===e.target.value)):this.setState((0,a.Z)({},e.target.name,e.target.value))}},{key:"handleSubmitReview",value:function(e){e.preventDefault();var t=this.state,n=t.name,a=t.email;0===a.length&&this.setState({hasEmptyEmailError:!0}),0===n.length&&this.setState({hasEmptyNicknameError:!0});var r=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;a.match(r)||this.setState({isEmailInvalid:!0});var l=this.state,i=(l.isEmailInvalid,l.hasEmptyNicknameError,l.hasEmptyEmailError,(0,D.Z)(l,U));n.length>0&&a.length>0&&a.match(r)&&(console.log(i),this.props.AddReview(i),this.props.handleCloseAddReviewsForm(e))}},{key:"render",value:function(){var e=this.props.characteristics,t=this.props.handleCloseAddReviewsForm,n=this.state,a=n.summary,r=n.body,l=n.name,i=n.email,s=n.isEmailInvalid,o=n.hasEmptyNicknameError,c=n.hasEmptyEmailError,u=e.Size?"".concat(e.Size.id):"size",d=e.Width?"".concat(e.Width.id):"width",p=e.Comfort?"".concat(e.Comfort.id):"comfort",h=e.Quality?"".concat(e.Quality.id):"quality",v=e.Length?"".concat(e.Length.id):"length",f=e.Fit?"".concat(e.Fit.id):"fit";return m.createElement("form",{onSubmit:this.handleSubmitReview},m.createElement("div",{className:"modal-review"},m.createElement("h4",null,"Write Your Review "),m.createElement("button",{className:"close-btn",onClick:t},"x")),o||c&&m.createElement("h4",null,"You must enter the following:"),m.createElement("div",null,m.createElement("p",null,"Overall rating"),m.createElement(q,{getRating:this.getRating})),m.createElement("div",{onChange:this.handleChange},m.createElement("p",null,"Do you recommend this product?"),m.createElement("input",{type:"radio",value:"yes",name:"recommend",defaultChecked:!0})," Yes",m.createElement("input",{type:"radio",value:"no",name:"recommend"})," No"),m.createElement("div",{onChange:this.handleChange},m.createElement("p",null,"Characteristics"),e.Size&&m.createElement("div",null,m.createElement("p",null,"Size"),m.createElement("input",{type:"radio",value:"1",name:u})," A size too small",m.createElement("input",{type:"radio",value:"2",name:u})," ½ a size too small",m.createElement("input",{type:"radio",value:"3",name:u})," Perfect",m.createElement("input",{type:"radio",value:"4",name:u})," ½ a size too big",m.createElement("input",{type:"radio",value:"5",name:u})," A size too wide",m.createElement("input",{type:"radio",value:"0",name:u,defaultChecked:!0})," none"),e.Width&&m.createElement("div",null,m.createElement("p",null,"Width"),m.createElement("input",{type:"radio",value:"1",name:d})," Too narrow",m.createElement("input",{type:"radio",value:"2",name:d})," Slightly narrow",m.createElement("input",{type:"radio",value:"3",name:d})," Perfect",m.createElement("input",{type:"radio",value:"4",name:d})," Slightly wide",m.createElement("input",{type:"radio",value:"5",name:d})," Too wide",m.createElement("input",{type:"radio",value:"0",name:d,defaultChecked:!0})," none"),e.Comfort&&m.createElement("div",null,m.createElement("p",null,"Comfort"),m.createElement("input",{type:"radio",value:"1",name:p})," Uncomfortable",m.createElement("input",{type:"radio",value:"2",name:p})," Slightly uncomfortable",m.createElement("input",{type:"radio",value:"3",name:p})," Ok",m.createElement("input",{type:"radio",value:"4",name:p})," Comfortable",m.createElement("input",{type:"radio",value:"5",name:p})," Perfect",m.createElement("input",{type:"radio",value:"0",name:p,defaultChecked:!0})," none"),e.Quality&&m.createElement("div",null,m.createElement("p",null,"Quality"),m.createElement("input",{type:"radio",value:"1",name:h})," Poor",m.createElement("input",{type:"radio",value:"2",name:h})," Below average",m.createElement("input",{type:"radio",value:"3",name:h})," What I expected",m.createElement("input",{type:"radio",value:"4",name:h})," Pretty great",m.createElement("input",{type:"radio",value:"5",name:h})," Perfect",m.createElement("input",{type:"radio",value:"0",name:h,defaultChecked:!0})," none"),e.Length&&m.createElement("div",null,m.createElement("p",null,"Length"),m.createElement("input",{type:"radio",value:"1",name:v})," Runs Short",m.createElement("input",{type:"radio",value:"2",name:v})," Runs slightly short",m.createElement("input",{type:"radio",value:"3",name:v})," Perfect",m.createElement("input",{type:"radio",value:"4",name:v})," Runs slightly long",m.createElement("input",{type:"radio",value:"5",name:v})," Runs long",m.createElement("input",{type:"radio",value:"0",name:v,defaultChecked:!0})," none"),e.Fit&&m.createElement("div",null,m.createElement("p",null,"Fit"),m.createElement("input",{type:"radio",value:"1",name:f})," Runs tight",m.createElement("input",{type:"radio",value:"2",name:f})," Runs slightly tight",m.createElement("input",{type:"radio",value:"3",name:f})," Perfect",m.createElement("input",{type:"radio",value:"4",name:f})," Runs slightly long",m.createElement("input",{type:"radio",value:"5",name:f})," Runs long",m.createElement("input",{type:"radio",value:"0",name:f,defaultChecked:!0})," none")),m.createElement("div",null,m.createElement("p",null,"Add a headline"),m.createElement("textarea",{name:"summary",value:a,onChange:this.handleChange,placeholder:"what's most important to know?",rows:1,cols:50})),m.createElement("div",null,m.createElement("p",null,"Add a written review "),m.createElement("textarea",{name:"body",value:r,onChange:this.handleChange,placeholder:"what did you like or dislike? what did you use this product for?",rows:5,cols:50})),m.createElement("div",null,o&&m.createElement("span",null,"You must enter a nickname!"),m.createElement("p",null,"your nickname(mandatory):"),m.createElement("textarea",{name:"name",type:"text",value:l,onChange:this.handleChange,placeholder:"Example: user123",rows:1,cols:50})),m.createElement("div",null,!c&&s&&m.createElement("h4",null,"Please enter a valid email"),c&&m.createElement("span",null,"You must enter a email!"),m.createElement("p",null,"your email(mandatory):"),m.createElement("textarea",{name:"email",type:"text",value:i,onChange:this.handleChange,placeholder:"Example: example@gmail.com",rows:1,cols:50})),m.createElement("button",{className:"submit_btn"},"Submit"))}}]),d}(m.Component);const G=$;var K=function(e){(0,o.Z)(r,e);var t,n,a=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.Z)(t);if(n){var r=(0,u.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function r(e){var t;return(0,l.Z)(this,r),(t=a.call(this,e)).state={productId:e.productId,showAddReviewsForm:!1},t.handMoreReviewsClick=t.handMoreReviewsClick.bind((0,s.Z)(t)),t.handleCloseAddReviewsForm=t.handleCloseAddReviewsForm.bind((0,s.Z)(t)),t}return(0,i.Z)(r,[{key:"handMoreReviewsClick",value:function(e){e.preventDefault(),this.props.getNextPageReviews()}},{key:"handleCloseAddReviewsForm",value:function(e){e.preventDefault(),this.setState({showAddReviewsForm:!this.state.showAddReviewsForm})}},{key:"render",value:function(){var e=this.props,t=e.reviews,n=e.productId,a=e.characteristics,r=e.AddReview,l=e.totalNumberRating,i=e.showMoreReviewsButton,s=e.onHelpulButtonClick,o=this.state.showAddReviewsForm;return m.createElement("div",{className:"reviews_section"},m.createElement("h4",null,l," reviews, sorted by relevance"),m.createElement("div",null,t.map((function(e,t){return m.createElement(M,{review:e,key:e.review_id,onHelpulButtonClick:s})}))),m.createElement("div",{className:"addReviews"},i&&m.createElement("button",{onClick:this.handMoreReviewsClick,className:"review_btn"},"MORE REVIEWS"),m.createElement("button",{onClick:this.handleCloseAddReviewsForm,className:"review_btn"},"ADD A REVIEW  +"),m.createElement(S(),{isOpen:o,ariaHideApp:!1},m.createElement(G,{handleCloseAddReviewsForm:this.handleCloseAddReviewsForm,productId:n,characteristics:a,AddReview:r}))))}}]),r}(m.Component);const X=K;var ee=n(3219),te={};te.styleTagTransform=R(),te.setAttributes=E(),te.insert=g().bind(null,"head"),te.domAPI=v(),te.insertStyleElement=j(),p()(ee.Z,te),ee.Z&&ee.Z.locals&&ee.Z.locals;var ne=n(2985),ae={};ae.styleTagTransform=R(),ae.setAttributes=E(),ae.insert=g().bind(null,"head"),ae.domAPI=v(),ae.insertStyleElement=j(),p()(ne.Z,ae),ne.Z&&ne.Z.locals&&ne.Z.locals;var re=n(4069);const le=function(e){var t=e.rating;return e.averageRating,e.totalNumberRating,m.createElement("div",null,m.createElement("div",null,m.createElement("a",{href:"#",className:"starlevel"},t.level," star   "),m.createElement("progress",{className:"progress",max:"100",value:t.percentRating}),m.createElement("span",{className:"starnumber"},m.createElement(re.Z,{displayType:"text",value:t.percentRating,decimalScale:0,isNumericString:!0}),"%")))},ie=function(e){e.meta;var t=e.ratingArray,n=e.averageRating,a=e.totalNumberRating,r=e.percentRecommend;return m.createElement(m.Fragment,null,m.createElement("div",{className:"avg-rating"},m.createElement("h2",null,m.createElement(re.Z,{displayType:"text",value:n,decimalScale:1,isNumericString:!0})),m.createElement("span",{className:"avg-star"},m.createElement(B,{averageRating:n}))),t.length>0&&t.map((function(e){return m.createElement(le,{rating:e,averageRating:n,totalNumberRating:a,key:e.level})})),m.createElement("div",null,m.createElement(re.Z,{displayType:"text",value:r,decimalScale:0,isNumericString:!0}),m.createElement("span",null,"% reviews recommend this product")))};var se=n(9669),oe=n.n(se);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=function(e){(0,o.Z)(d,e);var t,n,a=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.Z)(t);if(n){var r=(0,u.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function d(e){var t;return(0,l.Z)(this,d),(t=a.call(this,e)).state={reviews:[],meta:{},showMoreReviewsButton:!0,averageRating:0,totalNumberRating:0,percentRecommend:0,ratingArray:[],numStarReviewsToRender:[],page:1},t.calcRating=t.calcRating.bind((0,s.Z)(t)),t.AddReview=t.AddReview.bind((0,s.Z)(t)),t.getNextPageReviews=t.getNextPageReviews.bind((0,s.Z)(t)),t.getMeta=t.getMeta.bind((0,s.Z)(t)),t.onHelpulButtonClick=t.onHelpulButtonClick.bind((0,s.Z)(t)),t}return(0,i.Z)(d,[{key:"getMeta",value:function(e){var t=this;oe().get("/reviews/meta/?product_id=".concat(e)).then((function(e){t.setState({meta:e.data},(function(){return t.calcRating(t.state.meta)}))})).catch((function(e){console.log("error")}))}},{key:"componentDidMount",value:function(){var e=this;oe().get("/reviews/?product_id=".concat(this.props.productId),{params:{count:2,page:this.state.page}}).then((function(t){e.setState({reviews:t.data.results})})).catch((function(e){console.log("error")})),this.getMeta(this.props.productId)}},{key:"AddReview",value:function(e){var t=this,n=this.props.productId;oe().post("/reviews",e).then((function(e){t.getMeta(n)})).catch((function(e){console.log("err from add review:",e)}))}},{key:"getNextPageReviews",value:function(){var e=this,t=this.state.page+1;this.setState({page:t}),oe().get("/reviews/?product_id=".concat(this.props.productId),{params:{count:2,page:t}}).then((function(t){e.setState({reviews:0===e.state.reviews.length?t.data.results:[].concat((0,r.Z)(e.state.reviews),(0,r.Z)(t.data.results))},(function(){e.state.reviews.length>=e.state.totalNumberRating&&e.setState({showMoreReviewsButton:!1})}))})).catch((function(e){console.log("error")}))}},{key:"calcRating",value:function(e){if(void 0!==e.ratings){var t=e.ratings,n=0,a=0;for(var r in t)n+=Number(t[r]),a+=Number(t[r])*Number(r);var l=parseFloat(a/n).toFixed(1);this.setState({averageRating:l}),this.setState({totalNumberRating:n}),(n<=2||this.state.reviews.length>=n)&&this.setState({showMoreReviewsButton:!1});for(var i=[],s=5;s>=1;s--){var o={level:s,numberRating:t[s]?Number(t[s]):0,percentRating:t[s]?100*Number(t[s])/n:0};i.push(o)}this.setState({ratingArray:i});var c=e.recommended,u=Number(c.true)+Number(c.false)>0?100*Number(c.true)/(Number(c.true)+Number(c.false)):0;this.setState({percentRecommend:u})}}},{key:"onHelpulButtonClick",value:function(e){var t=this,n=this.state,a=n.reviews;n.helpfulButtonClick,this.setState({helpfulButtonClick:!0}),oe().put("/reviews/".concat(e,"/helpful")).then((function(n){var r=a.map((function(t){return t.review_id===e?ue(ue({},t),{},{helpfulness:t.helpfulness+1}):t}));t.setState({reviews:r})})).catch((function(e){console.log("error in updating helpful button:",e)}))}},{key:"render",value:function(){var e=this.props.productId,t=this.state,n=t.reviews,a=t.showMoreReviewsButton,r=t.meta,l=t.averageRating,i=t.ratingArray,s=t.totalNumberRating,o=t.percentRecommend;return m.createElement("div",{id:"ratings-and-reviews",className:"ratings-and-reviews"},m.createElement("h4",null,"RATINGS AND REVIEWS"),m.createElement("div",{className:"box"},m.createElement("div",{className:"rating_box"},m.createElement(ie,{productId:e,meta:r,averageRating:l,ratingArray:i,totalNumberRating:s,percentRecommend:o})),m.createElement("div",{className:"reviewlist_box"},m.createElement(X,{productId:e,reviews:n,showMoreReviewsButton:a,characteristics:r.characteristics,AddReview:this.AddReview,totalNumberRating:s,getNextPageReviews:this.getNextPageReviews,onHelpulButtonClick:this.onHelpulButtonClick}))))}}]),d}(m.Component);const de=me},284:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var a=n(885),r=n(7294),l=n(3379),i=n.n(l),s=n(7795),o=n.n(s),c=n(569),u=n.n(c),m=n(3565),d=n.n(m),p=n(9216),h=n.n(p),v=n(4589),f=n.n(v),g=n(2390),y={};y.styleTagTransform=f(),y.setAttributes=d(),y.insert=u().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=h(),i()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;const E=function(e){var t=e.helpfulness,n=e.id,l=e.onHelpulButtonClick,i=(0,r.useState)(!1),s=(0,a.Z)(i,2),o=s[0],c=s[1];return r.createElement("div",{"data-testid":"helpful-button",className:"helpful-button"},r.createElement("p",{"data-testid":"helpful-title"},"Helpful?"),r.createElement("button",{"data-testid":"helpful-yes-button",onClick:function(){o||(l(n),c(!0))}},"Yes"),r.createElement("p",{"data-testid":"helpful-count"},"(",t,")"))}},3219:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(8081),r=n.n(a),l=n(3645),i=n.n(l)()(r());i.push([e.id,"h2{color:#888;width:60px;height:30px;font-size:30px}.avg-star{width:120px;height:30px;line-height:90px}.avg-rating{display:flex;flex-direction:row}\n",""]);const s=i},2985:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(8081),r=n.n(a),l=n(3645),i=n.n(l)()(r());i.push([e.id,".starlevel{color:#888;display:inline-block;width:60px;height:30px;text-align:center}.starnumber{color:#888;display:inline-block;width:60px;height:30px;text-align:center}.starlevel:hover{color:blue}\n",""]);const s=i},9324:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(8081),r=n.n(a),l=n(3645),i=n.n(l)()(r());i.push([e.id,".box{width:1000px;height:500px}.rating_box{float:left;width:350px;height:500px}.reviewlist_box{float:left;width:650px;height:500px}\n",""]);const s=i},6897:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(8081),r=n.n(a),l=n(3645),i=n.n(l)()(r());i.push([e.id,".addReviews{margin-top:20px}.review_btn{height:40px;margin-right:20px}\n",""]);const s=i},6134:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(8081),r=n.n(a),l=n(3645),i=n.n(l)()(r());i.push([e.id,".review_list{padding:10px 0;border-bottom:1px solid #888}.reviewer_name{font-size:12px}.reviewer_helpful{display:flex;font-size:12px;color:gray}.reviewer_helpful .report-button{border:none;padding:0;text-decoration:underline;background-color:transparent;font-size:12px;color:gray}.reviewer_helpful .separator{margin:10px 10px}\n",""]);const s=i},4777:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(8081),r=n.n(a),l=n(3645),i=n.n(l)()(r());i.push([e.id,'.star_radio[type="radio"]{display:none}.star{cursor:pointer;transition:color 200ms}\n',""]);const s=i},954:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(8081),r=n.n(a),l=n(3645),i=n.n(l)()(r());i.push([e.id,".modal-review{display:flex;justify-content:center;align-items:center}.modal-review .close-btn{position:absolute;top:10px;right:10px}.submit_btn{height:40px;width:100px;text-align:center}\n",""]);const s=i},2390:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(8081),r=n.n(a),l=n(3645),i=n.n(l)()(r());i.push([e.id,".helpful-button{display:flex;align-items:center;font-size:12px;color:gray}.helpful-button button{border:none;padding:0;text-decoration:underline;background-color:transparent;margin:0 5px;font-size:12px;color:gray}\n",""]);const s=i},1320:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(8081),r=n.n(a),l=n(3645),i=n.n(l)()(r());i.push([e.id,"",""]);const s=i},6700:(e,t,n)=>{var a={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":2775,"./bg.js":2775,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":7093,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":7093,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":238,"./ru.js":238,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":9822,"./vi.js":9822,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function r(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id=6700}}]);