var audioAutoPlayChromeExtension = {
    play: function() {
      var audios = document.getElementsByTagName('audio');
      audios = Array.from(audios);
      audioAutoPlayChromeExtension.play_continuously(audios);
    },
    play_continuously: function(audios) {
      var audio = audios.shift();
      if(audio){
        audio.onended = function(){
          audioAutoPlayChromeExtension.play_continuously(audios);
        };
        audio.play();
      } else {
        if(audioAutoPlayChromeExtensionRepeat) {
          audioAutoPlayChromeExtension.play();
        }
      }
    }
};
audioAutoPlayChromeExtension.play();
