var videoGames = ["Switch", "PS4", "XBox", "3DS"];

for (var teste = 0; teste < videoGames.length; teste++) {
  console.log(videoGames[teste]);
}

videoGames[0]; // Switch
videoGames[2]; // Xbox

// var ultimoItem = videoGames.pop();

// videoGames.push("3DS");

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

var i = 10;
while (i < 20) {
  console.log(i);
  i++;
}

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}

// For Each

var videoGamess = ["Gameboy, Atari, MegaDrive, Wii"];
videoGamess.forEach(function (teste) {
  console.log(teste);
});
