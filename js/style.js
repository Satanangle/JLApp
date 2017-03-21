$(function(){
    var audio=document.getElementsByTagName('audio')[0];
    
    // 音乐开关
    $('.music').click(function(){
        if(audio.paused){
            audio.play();
            $(this).attr('class','music muc')
        }else{
            audio.pause();
            $(this).attr('class','music')
        }
        
    });

    
     
})

    