var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("C.R.E.A.M - by Wu-Tang Clan on the album Enter The Wu-Tang");
songs.unshift("Hot Like Sauce by Pretty Lights on the album Filling Up The City Skies");

for (var i = 0; i < songs.length; i++) {
  document.getElementById("song-list").innerHTML += "<p>" + songs[i].replace(">", "-").replace("@", "").replace("(", "").replace("!", "") + "</p>"
}
