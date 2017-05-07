
	//实例化一个数组，用于存放图片路径
var arr=new Array;
arr[0]="images/banner1.jpg";
arr[1]="images/banner2.jpg";
arr[2]="images/banner3.jpg";
var count=0;
//切换图片功能
function autoPlayer()
{
	if(arr.length==count)
	count=0;
	
	document.getElementById("banner1").src=arr[count];
	
	for(j=0;j<=2;j++){
		btn=document.getElementById("btn"+j);
		
		if(j==count){
			btn.style.color="#09f";
	    }else{
	    	btn.style.color="";
	    }
	    
	}
	count++;
}

var Timer=setInterval(autoPlayer,2000);

//清除定时器对象
function clearTimer()
{
	clearInterval(Timer);

}
//鼠标悬停时指定播放的图片
function showbannerbyid(num)
{
	clearTimer();
	var index=parseInt(num);
	document.getElementById("banner1").src=arr[index-1];
	count=index;
	
	for(j=0;j<=2;j++){
		btn=document.getElementById("btn"+j);
		if(j==index-1){
			btn.style.color="#09f";
	    }else{
	    	btn.style.color="";
	    }
	    
	}
}
//鼠标离开恢复自动播放
function btnMouseOut()
{
	Timer=setInterval(autoPlayer,2000);
}

