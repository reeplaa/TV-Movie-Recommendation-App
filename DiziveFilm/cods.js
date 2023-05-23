var diziOneriler = {
    "Aksiyon": ["Breaking Bad", "Prison Break", "The Mandalorian","Moon Knight","The Last Kingdom","Game of Thrones","Vikings","The Boys","The Flash","Snowpiercer"],
    "Komedi": ["Friends", "The Office", "Brooklyn Nine-Nine","Seinfeld","The Simpsons","South Park","Modern Family","Shameless","How i Met Your Mother","The Big Bang Theory"],
    "Drama": ["Sherlock", "Stranger Things", "Black Mirror","Cobra Kai","Chernobyl","Dark","Fringe","Suits","Sense8","House of Cards","Fargo","Quenn's Gambit",]
};

var filmOneriler = {
    "Aksiyon": ["Inception","Lord of Rings: The Return of the King","Dark Knight","Lord of Rings: The Fellowship of the Ship","Lord of Rings: The Two Towers","V For Vandetta","Gladiator","Braveheart","Pirates of The Carribbean: The Curse of The Black Pearl","The Dark Knight: Rises","Blood Diamond","Scarface","Batman Begins","Kill Bill Vol.1","The Avengers","Pirates of The Caribbean: Dead Man's Chest","300","Iron Man","Nefes: Vatan Sağolsun","Sin City","Pirates of The Caribbean: At World's End","The Hobbit: An Unexpected Journey","Apocalypto","Taken"],
    "Komedi": ["The Hangover", "Anchorman", "Superbad","Best in Show","Anger Management","Meet The Parents","Forgetting Sarah Marshall","50 First Date","Bruce Almighty","Mrs. Doubtfire","You Don't Mess with the Zohan","Paul","Meet the Fockers","White Chicks","Get Him to the Greek","Little Man","Click","The Waterboy","I Now Pronounce You Chuck & Larry",""],
    "Drama": ["The Shawshank Redemption", "The Godfather", "Forrest Gump",""]
};

function turuDegisti() {
    var turuSelect = document.getElementById("turu");
    var kategoriDiv = document.getElementById("kategoriDiv");

    if (turuSelect.value === "Dizi") {
        kategoriDiv.style.display = "block";
    } else {
        kategoriDiv.style.display = "none";
    }
}

function oneriGoster() {
    var turuSelect = document.getElementById("turu");
    var turu = turuSelect.value;
    var kategoriSelect = document.getElementById("kategori");
    var kategori = kategoriSelect.value;
    var resultDiv = document.getElementById("result");

    // Kontrol yap
    if (turu === "") {
        resultDiv.innerHTML = "Lütfen Dizi veya Film seçin.";
        resultDiv.style.display = "block";
        return;
    }

    // Kategori kontrolü
    if (turu === "Dizi" && kategori === "") {
        kategori = "Aksiyon";
    } else if (turu === "Film" && kategori === "") {
        kategori = "Aksiyon";
    }

    // Öneri verilerinden rastgele bir öneri al
    var secilenOneriler = (turu === "Dizi") ? diziOneriler[kategori] : filmOneriler[kategori];
    var secilenOneri = secilenOneriler[Math.floor(Math.random() * secilenOneriler.length)];

    // Sonucu ekrana yazdır
    var turuStr = (turu === "Dizi") ? "Dizi" : "Film";
    resultDiv.innerHTML = turuStr + " kategorisi için önerilenler:\n\n" + secilenOneri;
    resultDiv.style.display = "block";
}
//AlperDağdelen