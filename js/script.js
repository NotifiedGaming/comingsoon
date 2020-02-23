let word = 'Coming Soon';
let i = 0;
let word_holder = document.getElementById("word_holder");

function animate_word() {
    word_holder.innerHTML += word.charAt(i);
    i++;
    if (i >= word.length) {
        clearInterval(interval);
    }
}

let interval = setInterval(animate_word, 150);

function frame_loaded() {
    $.ajax({url: "https://radio.gtafm.com/api/nowplaying", success: function(result){
        document.getElementById("bishbashbosh").src = result[0]['now_playing']['song']['art'];

        for (let recent_song of result[0]['song_history']) {
            document.getElementById("recent").innerHTML += `
        <div>    
            <img src="${recent_song['song']['art']}">
            <h1>${recent_song['song']['title']}</h1>
            <p>${recent_song['song']['artist']}</p>
        </div>`;
        }

    }});
}
