                        //// EXERCISES ES6 ARRAY METHODS /////
/*
let users =[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]

///// Exercise 1 ////

const makeToObj = (email , CompanyName) => {
    const newUsers = {
        email : email,
        CompanyName : CompanyName
    }
    return newUsers;
}

const emailAndCompanyName = users.map(u => makeToObj(u.email ,u.company.name) );
console.log(emailAndCompanyName);

///// Exercise 2 ////

const Only5Zip = users.filter(u => u.address.zipcode[0] == "5");
console.log(Only5Zip)


///// Exercise 3 ////

const Only5Zip = users.filter(u => u.address.zipcode[0] == "5").map(u => u.id);
console.log(Only5Zip)


///// Exercise 4 ////


let Cname = users.map(u => u.name.startsWith('C') ? u.name : "")
Cname = Cname.filter(c => c !== "")
console.log(Cname);



///// Exercise 5 ////

const findIfAllLive = users.every(u => u.address.city == "South Christy");
console.log(findIfAllLive)



///// Exercise 6 ////

const findSuite = users.find(u => u.address.suite == "Apt. 950");
console.log(findSuite.company.name);



///// Exercise 7 ////

const print = user => console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`)
const each = users.forEach(u => print(u));




                        //// EXERCISES AJAX & INTRO TO APIS /////

///// Exercise 1 ////

const fetch = function (isbn) {
  $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
      success: function (data) {
          console.log(data)
      },
      error: function (xhr, text, error) {
          console.log(text)
      }
  })
}


///// Exercise 2 ////

const fetch = function (queryType , queryValue) {
  $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
      success: function (data) {
          console.log(data)
      },
      error: function (xhr, text, error) {
          console.log(text)
      }
  })
}

///// Exercise 3 ////

const fetch = function (queryType , queryValue) {
  $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
      success: function (data) {
          data.items
          .forEach(b => console.log(`Title : ${b.volumeInfo.title} Author/s : ${b.volumeInfo.authors} ISBN : ${b.volumeInfo.industryIdentifiers[0].identifier} `))
      },
      error: function (xhr, text, error) {
          console.log(text)
      }
  })
}


///// Exercise 4 ////

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=cats&api_key=BCLtSJzk90RZUzhgT9Rdb0xFr27Zrswg&limit=5");
xhr.done(function(data) 
      { 
        $("div").append(`<iframe src="${data.data[0].embed_url}">`) 
      })

*/

///// Exercise 5 ////
let valueSearch = "";
const changeValue = value => valueSearch = value;
const favoriteGifs = []
const fetch = () => {
    let value = $("#gif").val();
    changeValue(value);
    show()
}

$("body").on("click", ".add", function(){
  console.log($(this).siblings("iframe").data().src)
  favoriteGifs.push($(this).siblings("iframe").data().src)
  show();
})


const show = function(){
  $.ajax({
      method: "GET",
      url: `http://api.giphy.com/v1/gifs/search?q=${valueSearch}&api_key=BCLtSJzk90RZUzhgT9Rdb0xFr27Zrswg&limit=5"`,
      success: function (data) {
        $("#thisDiv").empty();
          let dataOf5 = data.data.map(d => d.embed_url);
          dataOf5.forEach(d =>
            $("#thisDiv").append(`<span><iframe src="${d}" data-src=${d}></iframe><button class="add">Add</button></span>`)
          )
          $(".border2").empty();
          favoriteGifs.forEach(d =>
            $(".border2").append(`<iframe src="${d}" data-src=${d}></iframe><button class="add">Add</button>`)
          )
      },
      error: function (xhr, text, error) {
          console.log(text)
      }
  })
}


