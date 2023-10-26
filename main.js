
function submit() {
    var player_1_name = document.getElementById("input1").value;
    var player_2_name = document.getElementById("input2").value;

    localStorage.setItem("input_1", player_1_name);
    localStorage.setItem("input_2", player_2_name);

    console.log(player_1_name, player_2_name);
}