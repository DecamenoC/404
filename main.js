document.addEventListener('DOMContentLoaded', function () {
    const playBtn = document.querySelector('.play-btn');
    const vinyl = document.querySelector('.vinyl');
    const audio = document.getElementById('audio404');
    let isPlaying = false;

    playBtn.addEventListener('click', function () {
        if (!isPlaying) {
            //再生
            audio.currentTime = 0;
            audio.play();
            vinyl.classList.add('spin');
            playBtn.src = "img/pause.svg";
            isPlaying = true;
        } else {
            //停止
            audio.pause();
            audio.currentTime = 0;
            vinyl.classList.remove('spin');
            playBtn.src = "img/play.svg";
            isPlaying = false;
        }
    });

    //曲の完走で状態を戻す
    audio.addEventListener('ended', function () {
        vinyl.classList.remove('spin');
        playBtn.src = "img/play.svg";
        isPlaying = false;
    });

    //LYRICボタンで歌詞展開
    const lyricBtn = document.querySelector('.lyric-wrap a');
    const lyricText = document.querySelector('.lyric-text');

    lyricBtn.addEventListener('click', function (e) {
        e.preventDefault(); // aタグのデフォルト遷移を無効化

        // display: none/blockをトグル
        if (lyricText.style.display === 'none' || lyricText.style.display === '') {
            lyricText.style.display = 'block';
        } else {
            lyricText.style.display = 'none';
        }
    });

});
