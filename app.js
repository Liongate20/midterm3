const games = [
    {
        img: "https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        minimg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png",
        price: "$19.99",
        name: "God of War",
        description:
            "Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform: "playstation",
    },
    {
        img: "https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        minimg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-%20Xbox_logo_%282019%29.svg.png",
        price: "$14.99",
        name: "Killer Instinct",
        description:
            "Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform: "xbox",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        minimg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1024px-Nintendo_Switch_Logo.svg.png",
        price: "$49.99",
        name: "Donkey Kong Country: Tropical Freeze",
        description:
            "A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform: "switch",
    },
    {
        img: "https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        minimg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png",
        price: "$19.99",
        name: "God of War",
        description:
            "Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform: "playstation",
    },
    {
        img: "https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        minimg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-%20Xbox_logo_%282019%29.svg.png",
        price: "$14.99",
        name: "Killer Instinct",
        description:
            "Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform: "xbox",
    },
];

document.getElementById("test1").innerHTML = games.map(
    (game, index) =>
        `<div class="product" data-toggle="modal" data-target="#myModal" onclick="myFunction('${encodeURIComponent(
            JSON.stringify(game)
        )}')">
    <img src=${game.minimg} class="plat">
        <div>
        <img src=${game.img} class="prdImg"  height="200">
        </div>
        <div>${game.price}</div>
      </div>`
);

var element = document.getElementById("test1").children;

games.map((d, index) => (element[index].className = `product ${d.platform}`));

function myFunction(game) {
    var ob = JSON.parse(decodeURIComponent(game));
    document.getElementById(
        "data"
    ).innerHTML = `<div style="text-align:center"  data-toggle="modal" data-target="#myModal" > 
          <img src=${ob.img}  >
        <h3 style="font-weight:bold;">${ob.name}</h3>
        <div style="font-weight:600;">${ob.price}</div>
        <p style="font-weight:600;">${ob.description}</p>
        <div style="color:${
        ob.platform === "playstation"
            ? "blue"
            : ob.platform === "xbox"
                ? "green"
                : "red"
    };">${ob.platform}</div>
      </div>`;
}
