var myFavBook = {
       
       title: "Enciclopedia of Mordern Bodybuilding",
       author: "Arnold Schwarzenegger",
       year: 1990, 
       description: "This book shows you the life of Arnold Schwarzenegger as a bodybuilder, his mindset the principles of bodybuilding and more",

}

var myFavMovie = {

       title: "Venom: Let It Be Carnage",
       director: "Andy Serkis",
       year: 2021,
       description: "Eddie Brock struggles to adjust to his new life as the host of the alien symbiote Venom, which grants him super-human abilities in order to be a lethal vigilante. Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",

}
var roleName = ["Teresa Mendoza", "Pote Galvez", "James", "Camila Vargas", "Epifanio Vargas"];
var actorsName = ["Alice Braga", "Hemky Madera", "Peter Gadiot", "Veronica Falcon", "Joaquim de Almeida"];


var directors = ["M.A. Fortin", "Joshua John Miller"];
var myFavTvSeries =  {
     
       title: "Queen of the South",
       directors,
       year: 2016,
       description: "It's a TV Series based on a girl who becomes one of the most powerful drug dealers. She is shown in the beginning of the movies as a money counter in Culiacan until she found his boyfriend Guero, which was a drug dealer. They fell in love but shortly after he dies and she is oblied to run in order to save her life. She gets caught and sent to mexico where she became a slave to one of theh most powerful female drug dealers in Mexico. Fast forward, after years, she became creates a narcotic empire and she's one of the most fearful in the industry",
       actors: ["roleName", roleName[0], roleName[1], roleName[2], roleName[3], roleName[4], "actorsName",  actorsName[0], actorsName[1], actorsName[2], actorsName[3], actorsName[4]],
       seasons: {seasons: 5, episodes: 52, startYear: 2016, endYear: 2021,}
       
}

var myFavs = {
       book: myFavBook,
       movie: myFavMovie,
       series: myFavTvSeries,
}

for(let episodes = 0; episodes < 11; episodes = episodes + 1) {
       console.log("This is the episode", episodes , "of my favourite last season tv series");
}

console.log(myFavBook.title);
console.log(myFavTvSeries.seasons.endYear);


