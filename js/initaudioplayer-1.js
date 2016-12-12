jQuery(document).ready(function(){

    var scripts = document.getElementsByTagName("script");

    var jsFolder = "";

    for (var i= 0; i< scripts.length; i++)

    {

        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))

            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/img") + 1);

    }

    jQuery("#amazingaudioplayer-1").amazingaudioplayer({

        jsfolder:jsFolder,

        skinsfoldername:"",

        titleinbarwidthmode:"auto",

        timeformatlive:"%CURRENT% / LIVE",

        volumeimagewidth:24,

        barbackgroundimage:"",

        showtime:false,

        titleinbarwidth:80,

        showprogress:true,

        random:false,

        titleformat:"%TITLE%",

        height:400,

        loadingformat:"Loading...",

        prevnextimage:"img/prevnext-48-48-1.png",

        showinfo:false,

        imageheight:400,

        skin:"DarkBox",

        loopimage:"img/loop-24-24-0.png",

        loopimagewidth:24,

        showstop:false,

        prevnextimageheight:48,

        infoformat:"%ARTIST% %ALBUM%<br />%INFO%",

        stopotherplayers:true,

        showloading:true,

        forcefirefoxflash:false,

        showvolumebar:true,

        imagefullwidth:true,

        width:600,

        showtitleinbar:false,

        showloop:true,

        volumeimage:"img/volume-24-24-0.png",

        playpauseimagewidth:48,

        loopimageheight:24,

        tracklistitem:10,

        tracklistitemformat:"%ID%. %TITLE% <span style='position:absolute;top:0;right:0;'>%DURATION%</span>",

        prevnextimagewidth:48,

        tracklistarrowimage:"img/tracklistarrow-48-16-0.png",

        playpauseimageheight:48,

        showbackgroundimage:false,

        imagewidth:400,

        stopimage:"img/stop-24-24-0.png",

        playpauseimage:"img/playpause-48-48-1.png",

        showprevnext:true,

        backgroundimage:"",

        autoplay:false,

        volumebarpadding:23,

        progressheight:10,

        showtracklistbackgroundimage:false,

        titleinbarscroll:true,

        showtitle:true,

        defaultvolume:-1,

        tracklistarrowimageheight:16,

        heightmode:"auto",

        titleinbarformat:"%TITLE%",

        showtracklist:true,

        stopimageheight:24,

        volumeimageheight:24,

        stopimagewidth:24,

        volumebarheight:72,

        noncontinous:false,

        tracklistbackgroundimage:"",

        showbarbackgroundimage:false,

        showimage:true,

        tracklistarrowimagewidth:48,

        timeformat:"%CURRENT% / %DURATION%",

        showvolume:true,

        fullwidth:false,

        loop:1,

        preloadaudio:true

    });

});