window.onload=function(){

	/*头部-微信的选项卡*/
	var wx=$(".tb-wx");
	var wxyc=$(".wxyc");
	for(var i=0;i<wx.length;i++){
		wx[i].index=i;
	wx[i].onmouseover=function(){
        wxyc[this.index].style.display="block";
    }
    wx[i].onmouseout=function(){
        wxyc[this.index].style.display="none";
    }
	}
     
     /*头部-手机映泰选项卡*/
    var sjyt=$(".tb-sjyt");
    var sjyc=$(".sjyc");
    for(var i=0;i<sjyt.length;i++){
    	sjyt[i].index=i;
    	sjyt[i].onmouseover=function(){
    		sjyc[this.index].style.display="block";
    	}
    	sjyt[i].onmouseout=function(){
    		sjyc[this.index].style.display="none";
    	}
    }
        
        /*头部-我的银泰*/
    var wdyt=$(".tb-wdyt");
    var wdytyc=$(".wdytyc");
   for(var i=0;i<wdyt.length;i++){
        wdyt[i].index=i;
        wdyt[i].onmouseover=function(){
        	wdytyc[this.index].style.display="block"
        }
        wdyt[i].onmouseout=function(){
        	wdytyc[this.index].style.display="none"
        }
    }
    
    /*搜索框-购物袋选项卡*/
    var gwd=$(".bb");
    var syc=$(".ssk-yct");
   for(var i=0;i<gwd.length;i++){
       gwd[i].index=i;
       gwd[i].onmouseover=function(){
       	syc[this.index].style.display="block";
       }
        gwd[i].onmouseout=function(){
       	syc[this.index].style.display="none";
       }
    }
   
    /*导航选项卡 第一个*/
    var dhq=$(".dh-z1");
    var dhycq=$(".dh-yc1");
    for(var i=0;i<dhq.length;i++){
    	dhq[i].index=i;
    	dhq[i].onmouseover=function(){
    		dhycq[this.index].style.display="block"
    	}
    	dhq[i].onmouseout=function(){
    		dhycq[this.index].style.display="none"
    	}
    }
      /*  第二个*/
     var dhw=$(".dh-z2");
    var dhycw=$(".dh-yc2");
    for(var i=0;i<dhw.length;i++){
    	dhw[i].index=i;
    	dhw[i].onmouseover=function(){
    		dhycw[this.index].style.display="block"
    	}
    	dhw[i].onmouseout=function(){
    		dhycw[this.index].style.display="none"
    	}
    }

     /*  第三个*/
     var dhe=$(".dh-z3");
    var dhyce=$(".dh-yc3");
    for(var i=0;i<dhe.length;i++){
    	dhe[i].index=i;
    	dhe[i].onmouseover=function(){
    		dhyce[this.index].style.display="block"
    	}
    	dhe[i].onmouseout=function(){
    		dhyce[this.index].style.display="none"
    	}
    }


     /*  第四个*/
     var dhr=$(".dh-z4");
    var dhycr=$(".dh-yc4");
    for(var i=0;i<dhr.length;i++){
    	dhr[i].index=i;
    	dhr[i].onmouseover=function(){
    		dhycr[this.index].style.display="block"
    	}
    	dhr[i].onmouseout=function(){
    		dhycr[this.index].style.display="none"
    	}
    }


  /*  第四个*/
     var dht=$(".dh-z5");
    var dhyct=$(".dh-yc5");
    for(var i=0;i<dht.length;i++){
    	dht[i].index=i;
    	dht[i].onmouseover=function(){
    		dhyct[this.index].style.display="block"
    	}
    	dht[i].onmouseout=function(){
    		dhyct[this.index].style.display="none"
    	}
    }

   /* banner*/
 var win=$(".banner_middle")[0];
 var as=$("a",win);
 var lis=$("li",$(".point")[0]);
 var btni=$(".btnI")[0];
 var btnd=$(".btnD")[0];

 var num=0;
 as[0].style.zIndex=10;
 var tosp=setInterval(lunbor,2000);
 win.onmouseover=function(){
 	clearInterval(tosp);
      btni.style.display="block";
        btnd.style.display="block";
 }
 win.onmouseout=function(){
 	tosp=setInterval(lunbor,2000);
     btni.style.display="none";
        btnd.style.display="none";
 }


 var flag=true;
 btni.onclick=function(){
 	if(flag){
 		flag=false;
 			mover();
 		
 	}
 	
 }
 btnd.onclick=function(){
 	if(flag){
 		flag=false;
 	lunbor();
 	}
 	
 }
 function lunbor(){
 	num++;
 	if(num==as.length){
         num=0;
 	}
	 	
 	for(var i=0;i<as.length;i++){
 	 animate(as[i],{opacity:0})
 	 lis[i].className="";
 	}
 	animate(as[num],{opacity:1},function(){
 		flag=true;
 	});
 	lis[num].className="point_hot";
 }
 function mover(){
 	num--;
 	if(num<0){
         num=as.length-1;
 	}
	 	
 	for(var i=0;i<as.length;i++){
 	 animate(as[i],{opacity:0})
 	 lis[i].className="";
 	}
 	animate(as[num],{opacity:1},function(){
 		flag=true;
 	});
 	lis[num].className="point_hot";
 }
  

        /*小方块选项卡*/
   for(var i=0;i<lis.length;i++){
      lis[i].index=i;
   	 lis[i].onmouseover=function(){
   	 	for(var j=0;j<as.length;j++){
   	 	  animate(as[j],{opacity:0})
   	 	  lis[j].className="";
   	 	}
   	 	animate(as[this.index],{opacity:1},function(){
            flag=true;
        })
   	 	lis[this.index].className="point_hot"
        num=this.index;
   	 }
   }

/*   banner侧导航 选项卡*/
var cdha=$(".cdhk1");
var cdyc=$(".cd-y1");
for(var i=0;i<cdha.length;i++){
    cdha[i].index=i;
    cdha[i].onmouseover=function(){
        cdyc[this.index].style.display="block";
    }
    cdha[i].onmouseout=function(){
        cdyc[this.index].style.display="none";
    }
}

/*banner下商品 动画边框*/
var  xsp=$(".xsp-t1");
var  bk1=$(".bian-border1");
var  bk2=$(".bian-border2");
var  bk3=$(".bian-border3");
var  bk4=$(".bian-border4");
for(var i=0;i<xsp.length;i++){
xsp[i].index=i;
xsp[i].onmouseover=function(){
    animate(bk1[this.index],{width:222});
    animate(bk2[this.index],{height:0});
    animate(bk3[this.index],{width:0});
    animate(bk4[this.index],{height:263})
}
xsp[i].onmouseout=function(){
    animate(bk1[this.index],{width:0});
    animate(bk2[this.index],{height:264});
    animate(bk3[this.index],{width:223});
    animate(bk4[this.index],{height:0});
}
}

var skxk=$(".sk-xk"); 
var xxk=$(".xxk-dk");
for(var i=0;i<skxk.length;i++){
skxk[i].index=i;
skxk[i].onmouseover=function(){
  for(var j=0;j<xxk.length;j++){
    xxk[j].style.display="none";
  }
    xxk[this.index].style.display="block";
}


}


            /*遮罩*/
var xsp=$(".xsp-t2");
var xxkzz=$(".xxk-zz");
for(var i=0;i<xsp.length;i++){
  xsp[i].index=i;
  xsp[i].onmouseover=function(){
  xxkzz[this.index].style.display="block";
  }
  xsp[i].onmouseout=function(){
    xxkzz[this.index].style.display="none";
  }
}


/*银泰百货遮罩*/
var zgtkz=$(".zgtk-tp1");
var zgtkq=$(".zgtkq-zz");
for(var i=0;i<zgtkz.length;i++){
  zgtkz[i].index=i;
  zgtkz[i].onmouseover=function(){
    zgtkq[this.index].style.display="block";

  }
   zgtkz[i].onmouseout=function(){
    zgtkq[this.index].style.display="none";
    
  }
}


var zgtka=$(".zgtk-tp2");
var zgtke=$(".zgtkq-zz1");
for(var i=0;i<zgtka.length;i++){
  zgtka[i].index=i;
  zgtka[i].onmouseover=function(){
    zgtke[this.index].style.display="block";

  }
   zgtka[i].onmouseout=function(){
    zgtke[this.index].style.display="none";
    
  }
}

/*银泰百货选项卡*/
var tkzz=$(".zgtk-z1");
var tkyc=$(".zgtk-yc");
for(var i=0;i<tkzz.length;i++){
  tkzz[i].index=i;
  tkzz[i].onmouseover=function(){
    for(var j=0;j<tkyc.length;j++){
      tkyc[j].style.display="none"
    }
    tkyc[this.index].style.display="block";

  }
}




var  zgtk=$(".zgtk-dt");
var  bk5=$(".bian-border5");
var  bk6=$(".bian-border6");
var  bk7=$(".bian-border7");
var  bk8=$(".bian-border8");
for(var i=0;i<zgtk.length;i++){
zgtk[i].index=i;
zgtk[i].onmouseover=function(){
    animate(bk5[this.index],{width:200});
    animate(bk6[this.index],{height:0});
    animate(bk7[this.index],{width:0});
    animate(bk8[this.index],{height:250})
}
zgtk[i].onmouseout=function(){
    animate(bk5[this.index],{width:0});
    animate(bk6[this.index],{height:252});
    animate(bk7[this.index],{width:200});
    animate(bk8[this.index],{height:0});
}
}



/*精装明品logo轮播*/
  var mingleft=$(".mingleft");
  var mingbtnl=$(".ming-btnl")[0];
  var mingbtnr=$(".ming-btnr")[0];
  var mingwidths=parseInt(getStyle(mingleft[0],"width"));
  var mingnum=0;
  var mingnext=0;
  for(i=0;i<mingleft.length;i++){
    if(i==0){
      continue;
    }
    mingleft[i].style.left=mingwidths+"px";
  }
  var FLAG1=true;
  mingbtnr.onclick=function(){
    if(FLAG1){
      FLAG1=false;
      MOVEL1();
    }
  }
  mingbtnl.onclick=function(){
    if(FLAG1){
      FLAG1=false;
      MOVER1();
    }
  }
  function MOVEL1(){
    mingnext++;
    if(mingnext==mingleft.length){
      mingnext=0;
    }
    mingleft[mingnext].style.left=mingwidths+"px";
    animate(mingleft[mingnum],{left:-mingwidths},function(){FLAG1=true});
    animate(mingleft[mingnext],{left:0},function(){FLAG1=true});
    mingnum=mingnext;
  }
  function MOVER1(){
    mingnext--;
    if(mingnext<0){
      mingnext=mingleft.length-1;
    }
    mingleft[mingnext].style.left=-mingwidths+"px";
    animate(mingleft[mingnum],{left:mingwidths},function(){FLAG1=true});
    animate(mingleft[mingnext],{left:0},function(){FLAG1=true});
    mingnum=mingnext;
  }



/*精装明品展示图轮播*/
var nin=$(".ming-center")[0];

var aas=$("a",nin);
var zli=$("li",$(".pointt")[0]);
var zbtnL=$(".btnL",nin)[0];
var zbtnR=$(".btnR",nin)[0];
var widths=parseInt(getStyle(aas[0],"width"));
var znum=0;
var znext=0;

for(var i=0;i<aas.length;i++){
  if(i==0){
    continue;
  }
  aas[i].style.left=widths+"px";
}
nin.onmouseover=function(){
  animate(zbtnL,{left:357})
  animate(zbtnR,{left:0})
}
nin.onmouseout=function(){
  animate(zbtnL,{left:390})
  animate(zbtnR,{left:-32})
}
  for(var i=0;i<zli.length;i++){
  zli[i].index=i;
  zli[i].onclick=function(){
    if(znum==this.index){
      return;
    }
    aas[this.index].style.left=widths+"px";
    zli[znum].className="";
    zli[this.index].className="pointt_hot";
    animate(aas[znum],{left:-widths});
    animate(aas[this.index],{left:0});
    znext=this.index;
    znum=this.index;
  }
}

var flag=true;
zbtnL.onclick=function(){
  if(flag){
    flag=false;
     moveRR();
  }
}
zbtnR.onclick=function(){
  if(flag){
    flag=false;
    moveL()
  }
}
function moveL(){
  znext++;
  if(znext==aas.length){
    znext=0;
  }
  aas[znext].style.left=widths+"px";
  zli[znum].className="";
  zli[znext].className="pointt_hot";
  animate(aas[znum],{left:-widths},function(){
    flag=true;
  });
  animate(aas[znext],{left:0},function(){
    flag=true;
  })
  znum=znext;
}
function moveRR(){
  znext--;
  if(znext<0){
    znext=aas.length-1;
  }
  aas[znext].style.left=-widths+"px";
  zli[znum].className="";
  zli[znext].className="pointt_hot";
  animate(aas[znum],{left:widths});
  animate(aas[znext],{left:0},function(){
    flag=true;
  })
  znum=znext;
}



var  ring=$(".ring-t1");
var  bk9=$(".bian-border9");
var  bk10=$(".bian-border10");
var  bk11=$(".bian-border11");
var  bk12=$(".bian-border12");
for(var i=0;i<zgtk.length;i++){
ring[i].index=i;
ring[i].onmouseover=function(){
    animate(bk9[this.index],{width:271});
    animate(bk10[this.index],{height:0});
    animate(bk11[this.index],{width:0});
    animate(bk12[this.index],{height:181})
}
ring[i].onmouseout=function(){
    animate(bk9[this.index],{width:0});
    animate(bk10[this.index],{height:182});
    animate(bk11[this.index],{width:272});
    animate(bk12[this.index],{height:0});
}
}





/*精品女装展示区*/

  var mingalefta=$(".mingalefta");
  var mingabtnl=$(".minga-btnl")[0];
  var mingabtnr=$(".minga-btnr")[0];
  var mingawidths=parseInt(getStyle(mingalefta[0],"width"));
  var minganum=0;
  var minganext=0;
  for(i=0;i<mingalefta.length;i++){
    if(i==0){
      continue;
    }
    mingalefta[i].style.left=mingawidths+"px";
  }
  var flaga=true;
  mingabtnr.onclick=function(){
    if(flaga){
      flaga=false;
      movera();
    }
  }
  mingabtnl.onclick=function(){
    if(flaga){
      flaga=false;
      moverz();
    }
  }
  function movera(){
    minganext++;
    if(minganext==mingalefta.length){
      minganext=0;
    }
    mingalefta[minganext].style.left=mingawidths+"px";
    animate(mingalefta[minganum],{left:-mingawidths},function(){flaga=true});
    animate(mingalefta[minganext],{left:0},function(){flaga=true});
    minganum=minganext;
  }
  function moverz(){
    minganext--;
    if(minganext<0){
      minganext=mingalefta.length-1;
    }
    mingalefta[minganext].style.left=-mingawidths+"px";
    animate(mingalefta[minganum],{left:mingawidths},function(){flaga=true});
    animate(mingalefta[minganext],{left:0},function(){flaga=true});
    minganum=minganext;
  }




/*精品男装展示区*/

  var mingblefta=$(".mingblefta");
  var mingbbtnl=$(".mingb-btnl")[0];
  var mingbbtnr=$(".mingb-btnr")[0];
  var mingbwidths=parseInt(getStyle(mingblefta[0],"width"));
  var mingbnum=0;
  var mingbnext=0;
  for(i=0;i<mingblefta.length;i++){
    if(i==0){
      continue;
    }
    mingblefta[i].style.left=mingbwidths+"px";
  }
  var flagb=true;
  mingbbtnr.onclick=function(){
    if(flagb){
      flagb=false;
      moverb();
    }
  }
  mingbbtnl.onclick=function(){
    if(flagb){
      flagb=false;
      moverx();
    }
  }
  function moverb(){
    mingbnext++;
    if(mingbnext==mingblefta.length){
      mingbnext=0;
    }
    mingblefta[mingbnext].style.left=mingbwidths+"px";
    animate(mingblefta[mingbnum],{left:-mingbwidths},function(){flagb=true});
    animate(mingblefta[mingbnext],{left:0},function(){flagb=true});
    mingbnum=mingbnext;
  }
  function moverx(){
    mingbnext--;
    if(mingbnext<0){
      mingbnext=mingblefta.length-1;
    }
    mingblefta[mingbnext].style.left=-mingbwidths+"px";
    animate(mingblefta[mingbnum],{left:mingbwidths},function(){flagb=true});
    animate(mingblefta[mingbnext],{left:0},function(){flagb=true});
    mingbnum=mingbnext;
  }

var  rina=$(".ring-t2");
var  bk13=$(".bian-border13");
var  bk14=$(".bian-border14");
var  bk15=$(".bian-border15");
var  bk16=$(".bian-border16");
for(var i=0;i<rina.length;i++){
rina[i].index=i;
rina[i].onmouseover=function(){
    animate(bk13[this.index],{width:271});
    animate(bk14[this.index],{height:0});
    animate(bk15[this.index],{width:0});
    animate(bk16[this.index],{height:181})
}
rina[i].onmouseout=function(){
    animate(bk13[this.index],{width:0});
    animate(bk14[this.index],{height:182});
    animate(bk15[this.index],{width:272});
    animate(bk16[this.index],{height:0});
}
}








/*时尚鞋靴展示区*/

  var mingdleft=$(".mingdleft");
  var mingcbtnl=$(".mingc-btnl")[0];
  var mingcbtnr=$(".mingc-btnr")[0];
  var mingdwidths=parseInt(getStyle(mingdleft[0],"width"));
  var mingdnum=0;
  var mingdnext=0;
  for(i=0;i<mingdleft.length;i++){
    if(i==0){
      continue;
    }
    mingdleft[i].style.left=mingdwidths+"px";
  }
  var flagc=true;
  mingcbtnr.onclick=function(){
    if(flagc){
      flagc=false;
      moverd();
    }
  }
  mingcbtnl.onclick=function(){
    if(flagc){
      flagc=false;
      moverg();
    }
  }
  function moverd(){
    mingdnext++;
    if(mingdnext==mingdleft.length){
      mingdnext=0;
    }
    mingdleft[mingdnext].style.left=mingdwidths+"px";
    animate(mingdleft[mingdnum],{left:-mingdwidths},function(){flagc=true});
    animate(mingdleft[mingdnext],{left:0},function(){flagc=true});
    mingdnum=mingdnext;
  }
  function moverg(){
    mingdnext--;
    if(mingdnext<0){
      mingdnext=mingdleft.length-1;
    }
    mingdleft[mingdnext].style.left=-mingdwidths+"px";
    animate(mingdleft[mingdnum],{left:mingdwidths},function(){flagc=true});
    animate(mingdleft[mingdnext],{left:0},function(){flagc=true});
    mingdnum=mingdnext;
  }




/*时尚鞋靴展示图轮播*/
var wia=$(".mingc-center")[0];

var aaa=$("a",wia);
var lia=$("li",$(".cpointt")[0]);
var abtnL=$(".cbtnL",wia)[0];
var abtnR=$(".cbtnR",wia)[0];
var widths=parseInt(getStyle(aaa[0],"width"));
var znum=0;
var znext=0;

for(var i=0;i<aaa.length;i++){
  if(i==0){
    continue;
  }
  aaa[i].style.left=widths+"px";
}
wia.onmouseover=function(){
  animate(abtnL,{left:357})
  animate(abtnR,{left:0})
}
wia.onmouseout=function(){
  animate(abtnL,{left:390})
  animate(abtnR,{left:-32})
}
  for(var i=0;i<lia.length;i++){
  lia[i].index=i;
  lia[i].onclick=function(){
    if(znum==this.index){
      return;
    }
    aaa[this.index].style.left=widths+"px";
    lia[znum].className="";
    lia[this.index].className="cpointt_hot";
    animate(aaa[znum],{left:-widths});
    animate(aaa[this.index],{left:0});
    znext=this.index;
    znum=this.index;
  }
}

var flaa=true;
abtnL.onclick=function(){
  if(flaa){
    flaa=false;
     moveRa();
  }
}
abtnR.onclick=function(){
  if(flaa){
    flaa=false;
    moveLa()
  }
}
function moveLa(){
  znext++;
  if(znext==aaa.length){
    znext=0;
  }
  aaa[znext].style.left=widths+"px";
  lia[znum].className="";
  lia[znext].className="cpointt_hot";
  animate(aaa[znum],{left:-widths},function(){
    flaa=true;
  });
  animate(aaa[znext],{left:0},function(){
    flaa=true;
  })
  znum=znext;
}
function moveRa(){
  znext--;
  if(znext<0){
    znext=aaa.length-1;
  }
  aaa[znext].style.left=-widths+"px";
  lia[znum].className="";
  lia[znext].className="cpointt_hot";
  animate(aaa[znum],{left:widths});
  animate(aaa[znext],{left:0},function(){
    flaa=true;
  })
  znum=znext;
}








var  rinaa=$(".ring-t3");
var  bk17=$(".bian-border17");
var  bk18=$(".bian-border18");
var  bk19=$(".bian-border19");
var  bk20=$(".bian-border20");
for(var i=0;i<rinaa.length;i++){
rinaa[i].index=i;
rinaa[i].onmouseover=function(){
    animate(bk17[this.index],{width:271});
    animate(bk18[this.index],{height:0});
    animate(bk19[this.index],{width:0});
    animate(bk20[this.index],{height:181})
}
rinaa[i].onmouseout=function(){
    animate(bk17[this.index],{width:0});
    animate(bk18[this.index],{height:182});
    animate(bk19[this.index],{width:272});
    animate(bk20[this.index],{height:0});
}
}






/*精品男装展示区*/

  var mingblefta=$(".mingblefta");
  var mingbbtnl=$(".mingb-btnl")[0];
  var mingbbtnr=$(".mingb-btnr")[0];
  var mingbwidths=parseInt(getStyle(mingblefta[0],"width"));
  var mingbnum=0;
  var mingbnext=0;
  for(i=0;i<mingblefta.length;i++){
    if(i==0){
      continue;
    }
    mingblefta[i].style.left=mingbwidths+"px";
  }
  var flagb=true;
  mingbbtnr.onclick=function(){
    if(flagb){
      flagb=false;
      moverb();
    }
  }
  mingbbtnl.onclick=function(){
    if(flagb){
      flagb=false;
      moverx();
    }
  }
  function moverb(){
    mingbnext++;
    if(mingbnext==mingblefta.length){
      mingbnext=0;
    }
    mingblefta[mingbnext].style.left=mingbwidths+"px";
    animate(mingblefta[mingbnum],{left:-mingbwidths},function(){flagb=true});
    animate(mingblefta[mingbnext],{left:0},function(){flagb=true});
    mingbnum=mingbnext;
  }
  function moverx(){
    mingbnext--;
    if(mingbnext<0){
      mingbnext=mingblefta.length-1;
    }
    mingblefta[mingbnext].style.left=-mingbwidths+"px";
    animate(mingblefta[mingbnum],{left:mingbwidths},function(){flagb=true});
    animate(mingblefta[mingbnext],{left:0},function(){flagb=true});
    mingbnum=mingbnext;
  }

var  rina=$(".ring-t2");
var  bk13=$(".bian-border13");
var  bk14=$(".bian-border14");
var  bk15=$(".bian-border15");
var  bk16=$(".bian-border16");
for(var i=0;i<rina.length;i++){
rina[i].index=i;
rina[i].onmouseover=function(){
    animate(bk13[this.index],{width:271});
    animate(bk14[this.index],{height:0});
    animate(bk15[this.index],{width:0});
    animate(bk16[this.index],{height:181})
}
rina[i].onmouseout=function(){
    animate(bk13[this.index],{width:0});
    animate(bk14[this.index],{height:182});
    animate(bk15[this.index],{width:272});
    animate(bk16[this.index],{height:0});
}
}








/*时尚鞋靴展示区*/

  var mingcleft=$(".mingcleft");
  var mingccbtnl=$(".mingc-btnl")[0];
  var mingccbtnr=$(".mingc-btnr")[0];
  var mingcwidths=parseInt(getStyle(mingcleft[0],"width"));
  var mingcnum=0;
  var mingcnext=0;
  for(i=0;i<mingcleft.length;i++){
    if(i==0){
      continue;
    }
    mingcleft[i].style.left=mingcwidths+"px";
  }
  var flagc=true;
  mingccbtnr.onclick=function(){
    if(flagc){
      flagc=false;
      movercc();
    }
  }
  mingccbtnl.onclick=function(){
    if(flagc){
      flagc=false;
      moverjc();
    }
  }
  function movercc(){
    mingcnext++;
    if(mingcnext==mingcleft.length){
      mingcnext=0;
    }
    mingcleft[mingcnext].style.left=mingcwidths+"px";
    animate(mingcleft[mingcnum],{left:-mingcwidths},function(){flagc=true});
    animate(mingcleft[mingcnext],{left:0},function(){flagc=true});
    mingcnum=mingcnext;
  }
  function moverjc(){
    mingcnext--;
    if(mingcnext<0){
      mingcnext=mingcleft.length-1;
    }
    mingcleft[mingcnext].style.left=-mingcwidths+"px";
    animate(mingcleft[mingcnum],{left:mingcwidths},function(){flagc=true});
    animate(mingcleft[mingcnext],{left:0},function(){flagc=true});
    mingcnum=mingcnext;
  }




/*时尚鞋靴展示图轮播*/
var wia=$(".mingc-center")[0];

var aaa=$("a",wia);
var lia=$("li",$(".cpointt")[0]);
var abtnL=$(".cbtnL",wia)[0];
var abtnR=$(".cbtnR",wia)[0];
var widths=parseInt(getStyle(aaa[0],"width"));
var znum=0;
var znext=0;

for(var i=0;i<aaa.length;i++){
  if(i==0){
    continue;
  }
  aaa[i].style.left=widths+"px";
}
wia.onmouseover=function(){
  animate(abtnL,{left:357})
  animate(abtnR,{left:0})
}
wia.onmouseout=function(){
  animate(abtnL,{left:390})
  animate(abtnR,{left:-32})
}
  for(var i=0;i<lia.length;i++){
  lia[i].index=i;
  lia[i].onclick=function(){
    if(znum==this.index){
      return;
    }
    aaa[this.index].style.left=widths+"px";
    lia[znum].className="";
    lia[this.index].className="cpointt_hot";
    animate(aaa[znum],{left:-widths});
    animate(aaa[this.index],{left:0});
    znext=this.index;
    znum=this.index;
  }
}

var flaa=true;
abtnL.onclick=function(){
  if(flaa){
    flaa=false;
     moveRa();
  }
}
abtnR.onclick=function(){
  if(flaa){
    flaa=false;
    moveLa()
  }
}
function moveLa(){
  znext++;
  if(znext==aaa.length){
    znext=0;
  }
  aaa[znext].style.left=widths+"px";
  lia[znum].className="";
  lia[znext].className="cpointt_hot";
  animate(aaa[znum],{left:-widths},function(){
    flaa=true;
  });
  animate(aaa[znext],{left:0},function(){
    flaa=true;
  })
  znum=znext;
}
function moveRa(){
  znext--;
  if(znext<0){
    znext=aaa.length-1;
  }
  aaa[znext].style.left=-widths+"px";
  lia[znum].className="";
  lia[znext].className="cpointt_hot";
  animate(aaa[znum],{left:widths});
  animate(aaa[znext],{left:0},function(){
    flaa=true;
  })
  znum=znext;
}








var  rinaa=$(".ring-t3");
var  bk17=$(".bian-border17");
var  bk18=$(".bian-border18");
var  bk19=$(".bian-border19");
var  bk20=$(".bian-border20");
for(var i=0;i<rinaa.length;i++){
rinaa[i].index=i;
rinaa[i].onmouseover=function(){
    animate(bk17[this.index],{width:271});
    animate(bk18[this.index],{height:0});
    animate(bk19[this.index],{width:0});
    animate(bk20[this.index],{height:181})
}
rinaa[i].onmouseout=function(){
    animate(bk17[this.index],{width:0});
    animate(bk18[this.index],{height:182});
    animate(bk19[this.index],{width:272});
    animate(bk20[this.index],{height:0});
}
}








/*潮流箱包展示区*/

  var mingdleft=$(".mingdleft");
  var mingddbtnl=$(".mingd-btnl")[0];
  var mingddbtnr=$(".mingd-btnr")[0];
  var mingdwidths=parseInt(getStyle(mingdleft[0],"width"));
  var mingdnum=0;
  var mingdnext=0;
  for(i=0;i<mingdleft.length;i++){
    if(i==0){
      continue;
    }
    mingdleft[i].style.left=mingdwidths+"px";
  }
  var flagd=true;
  mingddbtnr.onclick=function(){
    if(flagd){
      flagd=false;
      moverdd();
    }
  }
  mingddbtnl.onclick=function(){
    if(flagd){
      flagd=false;
      movergd();
    }
  }
  function moverdd(){
    mingdnext++;
    if(mingdnext==mingdleft.length){
      mingdnext=0;
    }
    mingdleft[mingdnext].style.left=mingdwidths+"px";
    animate(mingdleft[mingdnum],{left:-mingdwidths},function(){flagd=true});
    animate(mingdleft[mingdnext],{left:0},function(){flagd=true});
    mingdnum=mingdnext;
  }
  function movergd(){
    mingdnext--;
    if(mingdnext<0){
      mingdnext=mingdleft.length-1;
    }
    mingdleft[mingdnext].style.left=-mingdwidths+"px";
    animate(mingdleft[mingdnum],{left:mingdwidths},function(){flagd=true});
    animate(mingdleft[mingdnext],{left:0},function(){flagd=true});
    mingdnum=mingdnext;
  }




/*潮流箱包展示图轮播*/
var wib=$(".mingd-center")[0];

var aab=$("a",wib);
var lib=$("li",$(".dpointt")[0]);
var dbtnL=$(".dbtnL",wib)[0];
var dbtnR=$(".dbtnR",wib)[0];
var widthsa=parseInt(getStyle(aab[0],"width"));
var aanum=0;
var aanext=0;

for(var i=0;i<aab.length;i++){
  if(i==0){
    continue;
  }
  aab[i].style.left=widthsa+"px";
}
wib.onmouseover=function(){
  animate(dbtnL,{left:357})
  animate(dbtnR,{left:0})
}
wib.onmouseout=function(){
  animate(dbtnL,{left:390})
  animate(dbtnR,{left:-32})
}
  for(var i=0;i<lib.length;i++){
  lib[i].index=i;
  lib[i].onclick=function(){
    if(aanum==this.index){
      return;
    }
    aab[this.index].style.left=widthsa+"px";
    lib[aanum].className="";
    lib[this.index].className="dpointt_hot";
    animate(aab[aanum],{left:-widthsa});
    animate(aab[this.index],{left:0});
    aanext=this.index;
    aanum=this.index;
  }
}

var flaa=true;
dbtnL.onclick=function(){
  if(flaa){
    flaa=false;
     moveRb();
  }
}
dbtnR.onclick=function(){
  if(flaa){
    flaa=false;
    moveLb()
  }
}
function moveLb(){
  aanext++;
  if(aanext==aab.length){
    aanext=0;
  }
  aab[aanext].style.left=widthsa+"px";
  lib[aanum].className="";
  lib[aanext].className="dpointt_hot";
  animate(aab[aanum],{left:-widthsa},function(){
    flaa=true;
  });
  animate(aab[aanext],{left:0},function(){
    flaa=true;
  })
  aanum=aanext;
}
function moveRb(){
  aanext--;
  if(aanext<0){
    aanext=aab.length-1;
  }
  aab[aanext].style.left=-widthsa+"px";
  lib[aanum].className="";
  lib[aanext].className="dpointt_hot";
  animate(aab[aanum],{left:widthsa});
  animate(aab[aanext],{left:0},function(){
    flaa=true;
  })
  aanum=aanext;
}








var  rinab=$(".ring-t4");
var  bk21=$(".bian-border21");
var  bk22=$(".bian-border22");
var  bk23=$(".bian-border23");
var  bk24=$(".bian-border24");
for(var i=0;i<rinab.length;i++){
rinab[i].index=i;
rinab[i].onmouseover=function(){
    animate(bk21[this.index],{width:271});
    animate(bk22[this.index],{height:0});
    animate(bk23[this.index],{width:0});
    animate(bk24[this.index],{height:181})
}
rinab[i].onmouseout=function(){
    animate(bk21[this.index],{width:0});
    animate(bk22[this.index],{height:182});
    animate(bk23[this.index],{width:272});
    animate(bk24[this.index],{height:0});
}
}






/*美容护肤展示区*/

  var mingeleft=$(".mingeleft");
  var mingeebtnl=$(".minge-btnl")[0];
  var mingeebtnr=$(".minge-btnr")[0];
  var mingewidths=parseInt(getStyle(mingeleft[0],"width"));
  var mingenum=0;
  var mingenext=0;
  for(i=0;i<mingeleft.length;i++){
    if(i==0){
      continue;
    }
    mingeleft[i].style.left=mingewidths+"px";
  }
  var flage=true;
  mingeebtnr.onclick=function(){
    if(flage){
      flage=false;
      moveree();
    }
  }
  mingeebtnl.onclick=function(){
    if(flage){
      flage=false;
      moverhe();
    }
  }
  function moveree(){
    mingenext++;
    if(mingenext==mingeleft.length){
      mingenext=0;
    }
    mingeleft[mingenext].style.left=mingewidths+"px";
    animate(mingeleft[mingenum],{left:-mingewidths},function(){flage=true});
    animate(mingeleft[mingenext],{left:0},function(){flage=true});
    mingenum=mingenext;
  }
  function moverhe(){
    mingenext--;
    if(mingenext<0){
      mingenext=mingeleft.length-1;
    }
    mingeleft[mingenext].style.left=-mingewidths+"px";
    animate(mingeleft[mingenum],{left:mingewidths},function(){flage=true});
    animate(mingeleft[mingenext],{left:0},function(){flage=true});
    mingenum=mingenext;
  }




/*潮流箱包展示图轮播*/
var wie=$(".minge-center")[0];

var aae=$("a",wie);
var lie=$("li",$(".epointt")[0]);
var ebtnL=$(".ebtnL",wie)[0];
var ebtnR=$(".ebtnR",wie)[0];
var widthse=parseInt(getStyle(aae[0],"width"));
var aenum=0;
var aenext=0;

for(var i=0;i<aae.length;i++){
  if(i==0){
    continue;
  }
  aae[i].style.left=widthse+"px";
}
wie.onmouseover=function(){
  animate(ebtnL,{left:357})
  animate(ebtnR,{left:0})
}
wie.onmouseout=function(){
  animate(ebtnL,{left:390})
  animate(ebtnR,{left:-32})
}
  for(var i=0;i<lie.length;i++){
  lie[i].index=i;
  lie[i].onclick=function(){
    if(aenum==this.index){
      return;
    }
    aae[this.index].style.left=widthse+"px";
    lie[aenum].className="";
    lie[this.index].className="epointt_hot";
    animate(aae[aenum],{left:-widthse});
    animate(aae[this.index],{left:0});
    aenext=this.index;
    aenum=this.index;
  }
}

var flaa=true;
ebtnL.onclick=function(){
  if(flaa){
    flaa=false;
     moveRe();
  }
}
ebtnR.onclick=function(){
  if(flaa){
    flaa=false;
    moveLe()
  }
}
function moveLe(){
  aenext++;
  if(aenext==aae.length){
    aenext=0;
  }
  aae[aenext].style.left=widthse+"px";
  lie[aenum].className="";
  lie[aenext].className="epointt_hot";
  animate(aae[aenum],{left:-widthse},function(){
    flaa=true;
  });
  animate(aae[aenext],{left:0},function(){
    flaa=true;
  })
  aenum=aenext;
}
function moveRe(){
  aenext--;
  if(aenext<0){
    aenext=aae.length-1;
  }
  aae[aenext].style.left=-widthse+"px";
  lie[aenum].className="";
  lie[aenext].className="epointt_hot";
  animate(aae[aenum],{left:widthse});
  animate(aae[aenext],{left:0},function(){
    flaa=true;
  })
  aenum=aenext;
}




/*运动户外展示区*/

  var mingfleft=$(".mingfleft");
  var mingfbtnl=$(".mingf-btnl")[0];
  var mingfbtnr=$(".mingf-btnr")[0];
  var mingfwidths=parseInt(getStyle(mingfleft[0],"width"));
  var mingfnum=0;
  var mingfnext=0;
  for(i=0;i<mingfleft.length;i++){
    if(i==0){
      continue;
    }
    mingfleft[i].style.left=mingfwidths+"px";
  }
  var flagf=true;
  mingfbtnr.onclick=function(){
    if(flagf){
      flagf=false;
      moverf();
    }
  }
  mingfbtnl.onclick=function(){
    if(flagf){
      flagf=false;
      moverk();
    }
  }
  function moverf(){
    mingfnext++;
    if(mingfnext==mingfleft.length){
      mingfnext=0;
    }
    mingfleft[mingfnext].style.left=mingfwidths+"px";
    animate(mingfleft[mingfnum],{left:-mingfwidths},function(){flagf=true});
    animate(mingfleft[mingfnext],{left:0},function(){flagf=true});
    mingfnum=mingfnext;
  }
  function moverk(){
    mingfnext--;
    if(mingfnext<0){
      mingfnext=mingfleft.length-1;
    }
    mingfleft[mingfnext].style.left=-mingfwidths+"px";
    animate(mingfleft[mingfnum],{left:mingfwidths},function(){flagf=true});
    animate(mingfleft[mingfnext],{left:0},function(){flagf=true});
    mingfnum=mingfnext;
  }




/*运动户外展示图轮播*/
var wif=$(".mingf-center")[0];

var aaf=$("a",wif);
var lif=$("li",$(".fpointt")[0]);
var fbtnL=$(".fbtnL",wif)[0];
var fbtnR=$(".fbtnR",wif)[0];
var widthsf=parseInt(getStyle(aaf[0],"width"));
var fenum=0;
var fenext=0;

for(var i=0;i<aaf.length;i++){
  if(i==0){
    continue;
  }
  aaf[i].style.left=widthsf+"px";
}
wif.onmouseover=function(){
  animate(fbtnL,{left:357})
  animate(fbtnR,{left:0})
}
wif.onmouseout=function(){
  animate(fbtnL,{left:390})
  animate(fbtnR,{left:-32})
}
  for(var i=0;i<lif.length;i++){
  lif[i].index=i;
  lif[i].onclick=function(){
    if(fenum==this.index){
      return;
    }
    aaf[this.index].style.left=widthsf+"px";
    lif[fenum].className="";
    lif[this.index].className="fpointt_hot";
    animate(aaf[fenum],{left:-widthsf});
    animate(aaf[this.index],{left:0});
    fenext=this.index;
    fenum=this.index;
  }
}

var flaf=true;
fbtnL.onclick=function(){
  if(flaf){
    flaf=false;
     moveRf();
  }
}
fbtnR.onclick=function(){
  if(flaf){
    flaf=false;
    moveLf()
  }
}
function moveLf(){
  fenext++;
  if(fenext==aaf.length){
    fenext=0;
  }
  aaf[fenext].style.left=widthsf+"px";
  lif[fenum].className="";
  lif[fenext].className="fpointt_hot";
  animate(aaf[fenum],{left:-widthsf},function(){
    flaf=true;
  });
  animate(aaf[fenext],{left:0},function(){
    flaf=true;
  })
  fenum=fenext;
}
function moveRf(){
  fenext--;
  if(fenext<0){
    fenext=aaf.length-1;
  }
  aaf[fenext].style.left=-widthsf+"px";
  lif[fenum].className="";
  lif[fenext].className="fpointt_hot";
  animate(aaf[fenum],{left:widthsf});
  animate(aaf[fenext],{left:0},function(){
    flaf=true;
  })
  fenum=fenext;
}






/*内衣配饰展示区*/

  var minggleft=$(".minggleft");
  var minggbtnl=$(".mingg-btnl")[0];
  var minggbtnr=$(".mingg-btnr")[0];
  var minggwidths=parseInt(getStyle(minggleft[0],"width"));
  var minggnum=0;
  var minggnext=0;
  for(i=0;i<minggleft.length;i++){
    if(i==0){
      continue;
    }
    minggleft[i].style.left=minggwidths+"px";
  }
  var flagg=true;
  minggbtnr.onclick=function(){
    if(flagg){
      flagg=false;
      moverg();
    }
  }
  minggbtnl.onclick=function(){
    if(flagg){
      flagg=false;
      moveru();
    }
  }
  function moverg(){
    minggnext++;
    if(minggnext==minggleft.length){
      minggnext=0;
    }
    minggleft[minggnext].style.left=minggwidths+"px";
    animate(minggleft[minggnum],{left:-minggwidths},function(){flagg=true});
    animate(minggleft[minggnext],{left:0},function(){flagg=true});
    minggnum=minggnext;
  }
  function moveru(){
    minggnext--;
    if(minggnext<0){
      minggnext=minggleft.length-1;
    }
    minggleft[minggnext].style.left=-minggwidths+"px";
    animate(minggleft[minggnum],{left:minggwidths},function(){flagg=true});
    animate(minggleft[minggnext],{left:0},function(){flagg=true});
    minggnum=minggnext;
  }




/*运动户外展示图轮播*/
var wig=$(".mingg-center")[0];

var aag=$("a",wig);
var lig=$("li",$(".gpointt")[0]);
var gbtnL=$(".gbtnL",wig)[0];
var gbtnR=$(".gbtnR",wig)[0];
var widthsg=parseInt(getStyle(aag[0],"width"));
var genum=0;
var genext=0;

for(var i=0;i<aag.length;i++){
  if(i==0){
    continue;
  }
  aag[i].style.left=widthsg+"px";
}
wig.onmouseover=function(){
  animate(gbtnL,{left:357})
  animate(gbtnR,{left:0})
}
wig.onmouseout=function(){
  animate(gbtnL,{left:390})
  animate(gbtnR,{left:-32})
}
  for(var i=0;i<lig.length;i++){
  lig[i].index=i;
  lig[i].onclick=function(){
    if(genum==this.index){
      return;
    }
    aag[this.index].style.left=widthsg+"px";
    lig[genum].className="";
    lig[this.index].className="gpointt_hot";
    animate(aag[genum],{left:-widthsg});
    animate(aag[this.index],{left:0});
    genext=this.index;
    genum=this.index;
  }
}

var flag=true;
gbtnL.onclick=function(){
  if(flag){
    flag=false;
     moveRg();
  }
}
gbtnR.onclick=function(){
  if(flag){
    flag=false;
    moveLg()
  }
}
function moveLg(){
  genext++;
  if(genext==aag.length){
    genext=0;
  }
  aag[genext].style.left=widthsg+"px";
  lig[genum].className="";
  lig[genext].className="gpointt_hot";
  animate(aag[genum],{left:-widthsg},function(){
    flag=true;
  });
  animate(aag[genext],{left:0},function(){
    flag=true;
  })
  genum=genext;
}
function moveRg(){
  genext--;
  if(genext<0){
    genext=aag.length-1;
  }
  aag[genext].style.left=-widthsg+"px";
  lig[genum].className="";
  lig[genext].className="gpointt_hot";
  animate(aag[genum],{left:widthsg});
  animate(aag[genext],{left:0},function(){
    flag=true;
  })
  genum=genext;
}








/*内衣配饰展示区*/

  var minglleft=$(".minglleft");
  var minglbtnl=$(".mingl-btnl")[0];
  var minglbtnr=$(".mingl-btnr")[0];
  var minglwidths=parseInt(getStyle(minglleft[0],"width"));
  var minglnum=0;
  var minglnext=0;
  for(i=0;i<minglleft.length;i++){
    if(i==0){
      continue;
    }
    minglleft[i].style.left=minglwidths+"px";
  }
  var flagl=true;
  minglbtnr.onclick=function(){
    if(flagl){
      flagl=false;
      moverh();
    }
  }
  minglbtnl.onclick=function(){
    if(flagl){
      flagl=false;
      moverj();
    }
  }
  function moverh(){
    minglnext++;
    if(minglnext==minglleft.length){
      minglnext=0;
    }
    minglleft[minglnext].style.left=minglwidths+"px";
    animate(minglleft[minglnum],{left:-minglwidths},function(){flagl=true});
    animate(minglleft[minglnext],{left:0},function(){flagl=true});
    minglnum=minglnext;
  }
  function moverj(){
    minglnext--;
    if(minglnext<0){
      minglnext=minglleft.length-1;
    }
    minglleft[minglnext].style.left=-minglwidths+"px";
    animate(minglleft[minglnum],{left:minglwidths},function(){flagl=true});
    animate(minglleft[minglnext],{left:0},function(){flagl=true});
    minglnum=minglnext;
  }










//14.按需加载和楼层跳转
  var floor=$(".floor");
  var ARR=[];
  for(var I=0;I<floor.length;I++){
    ARR.push(floor[I].offsetTop);
  }
  var HEIGHTS=document.documentElement.clientHeight;

  
  var fflag=true;
  var LIS=$("li",$(".jump")[0]);
  var divs=$("div",$(".jump")[0]);
  for(var I=0;I<divs.length;I++){
    LIS[I].ff=I;
    LIS[I].onclick=function(){
    fflag=false;
    for(var j=0;j<divs.length;j++){
     divs[j].style.display="none";
    }
    divs[this.ff].style.display="block";

    animate(document.body,{scrollTop:ARR[this.ff]},function(){fflag=true;});
    animate(document.documentElement,{scrollTop:ARR[this.ff]},function(){fflag=true;});

    }
    LIS[I].onmouseover=function(){
     divs[this.ff].style.display="block";
     
   }
    LIS[I].onmouseout=function(){
  
     divs[this.ff].style.display="none";
   }
    
  

  }

  
 
    

  var sflag=true;
  window.onscroll=function(){
  var OBJ=document.body.scrollTop?document.body:document.documentElement;
  var scrolltop=OBJ.scrollTop;
  for(var i=0;i<floor.length;i++){
    if(scrolltop+HEIGHTS>=ARR[i]+100){
      var imgs=$("img",floor[i]);
      for(var j=0;j<imgs.length;j++){
     /*   imgs[j].src=imgs[j].getAttribute("imgpath");*/
      }
    }
  }


//顶部搜索框
  var jump=$(".jump")[0];
  if(scrolltop>=HEIGHTS){
    if(sflag){
    sflag=false;
    jump.style.display="block"
    }
  }else{
    if(!sflag){
    sflag=true;
    jump.style.display="none"
    }
  }



  //按钮
  if(!fflag){
    return;
  }
  for (var i = 0; i < floor.length; i++) {
    if (scrolltop+HEIGHTS>=ARR[i]+200) {
      for(var j=0;j<LIS.length;j++){
/*     LIS[j].style.background="#ccc";*/
        divs[j].style.display="none";
      }
     /* LIS[i].style.background="red";*/
      divs[i].style.display="block";
    }
   }
   }




}