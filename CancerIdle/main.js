let version = "b0.0.1";
let player = new Object();
player.variation = 0;
player.number = 0;
function load(){
    $("#ver")[0].innerHTML = version;
    $("#variation").click(function (e) {
        player.variation += 1;
        if(player.variation >= 5){
            $("#varbox").fadeOut(1000);
            $("#splbox").fadeIn(1000);
        }
    });
    $("#split").click(function (e) {
        player.number += 1;
        if(player.number >= 5){
            $(".resourcebox").fadeIn(1000);
        }
    });
}
load();