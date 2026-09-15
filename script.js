let books = [
  {
    "name": "Die Geheimnisse des Ozeans",
    "author": "Clara Meer",
    "likes": 1250,
    "liked": true,
    "price": 19.99,
    "publishedYear": 2018,
    "genre": "Fantasy",
    "comments": [
      {
        "name": "Leser123",
        "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
      },
      {
        "name": "Bookworm84",
        "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
      },
      {
        "name": "FantasyFanatic",
        "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
      },
      {
        "name": "SciFiGuru",
        "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
      },
      {
        "name": "NovelLover",
        "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
      }
    ]
  },
  {
    "name": "Der vergessene Pfad",
    "author": "Maximilian Schwarz",
    "likes": 980,
    "liked": false,
    "price": 14.50,
    "publishedYear": 2021,
    "genre": "Fantasy",
    "comments": []
  },
  {
    "name": "Die Farben des Himmels",
    "author": "Laura Blau",
    "likes": 1520,
    "liked": true,
    "price": 22.95,
    "publishedYear": 2019,
    "genre": "Romantik",
    "comments": [
      {
        "name": "LeserPeter",
        "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
      },
      {
        "name": "BookLover21",
        "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
      },
      {
        "name": "FantasyNerd",
        "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
      },
      {
        "name": "SciFiEnthusiast",
        "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
      },
      {
        "name": "ReadingAddict",
        "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
      }
    ]
  },
  {
    "name": "Das Rätsel der Zeit",
    "author": "Alexander Weiss",
    "likes": 750,
    "liked": false,
    "price": 18.00,
    "publishedYear": 2020,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "BuchKenner",
        "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
      },
      {
        "name": "LeseWurm",
        "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
      }
    ]
  },
  {
    "name": "Der letzte Wächter",
    "author": "Sabine Grün",
    "likes": 1300,
    "liked": true,
    "price": 16.75,
    "publishedYear": 2017,
    "genre": "Fantasy",
    "comments": []
  },
  {
    "name": "Im Schatten des Mondes",
    "author": "Philipp Silber",
    "likes": 890,
    "liked": false,
    "price": 12.30,
    "publishedYear": 2022,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "BücherLiebhaber",
        "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
      },
      {
        "name": "Leseratte",
        "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
      }
    ]
  },
  {
    "name": "Jenseits der Sterne",
    "author": "Oliver Schwarz",
    "likes": 1450,
    "liked": true,
    "price": 21.00,
    "publishedYear": 2015,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "Leser123",
        "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
      }
    ]
  },
  {
    "name": "Das verborgene Königreich",
    "author": "Elena Gold",
    "likes": 920,
    "liked": false,
    "price": 17.50,
    "publishedYear": 2020,
    "genre": "Fantasy",
    "comments": [
      {
        "name": "Bookworm92",
        "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
      }
    ]
  },
  {
    "name": "Liebe in Zeiten des Krieges",
    "author": "Emilia Rot",
    "likes": 1800,
    "liked": true,
    "price": 19.99,
    "publishedYear": 2016,
    "genre": "Romantik",
    "comments": [
      {
        "name": "Bibliophile23",
        "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
      },
      {
        "name": "StorySeeker",
        "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
      },
      {
        "name": "SciFiExplorer",
        "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
      }
    ]
  }
]



console.table(books);

function createBookList() {
  const bookList = document.getElementById('book-list');

  for (let index = 0; index < books.length; index++) {
    bookList.innerHTML += `
     <article class="book-card data-index=${index}">
       ${createTitle(index)}
       ${createImg(index)}
       ${createDetails(index)}
       ${createCommentSection(index)}
       ${createNewComment(index)}         
    </article>`
  };
};

function createTitle(index) {
  const bookTitle = `
    <header class="card-title">
                    <h2 id="book-title">${books[index].name}</h2>
                </header>`;
  return bookTitle;
};

function createImg(index) {
  const bookImg = `
    <section class="card-img">
                    <img src="./assets/img/sik-life-a-book.png" alt="">
                </section>`;
  return bookImg;
};

function createDetails(index) {
  const bookPrice = books[index].price;
  let likedStatus = ''
  if (books[index].liked) {
    likedStatus = 'checked'
  }

  console.log(bookPrice);
  console.log(likedStatus);
  const bookDetails = `
         <section class="book-details">
                    <div class="price-like">
                        <p class="price">${books[index].price} €</p>
                        <p class="likes">${books[index].likes}</p>
                          <div class="like-control">
                            <input type="checkbox" class="like-checkbox"${likedStatus}>
                            <img class="like-img liked-false" src="./assets/icons/icon_heart_line_bk.png" alt="icon heart like">
                            <img class="like-img liked-true" src="./assets/icons/icon_heart_red.png" alt="icon liked">
                        </div>
                    </div>

                   <table class="table">
                    <tr>
                        <th>Author:</th>
                        <td>${books[index].author}</td>
                    </tr>
                    <tr>
                        <th>Erscheinungsjahr:</th>
                        <td>${books[index].publishedYear}</td>
                    </tr>
                    <tr>
                        <th>Genre:</th>
                        <td>${books[index].genre}</td>
                    </tr>
                    
                   </table> 
                </section>
           `;
  return bookDetails;
};

function createCommentSection(index) {
  const commentSection = `
    <section class="comment-section">
                    <h3>Kommentare:</h3>
                    <div class="table-container">
                    <table class="table">
                  
                    ${createCommentsDisplay(index)}
                    </table>
                    </div>
                </section>`;
  return commentSection;
};

function createCommentsDisplay(index) {
  const comments = books[index].comments;
  let commentDisplay = '';

  for (i = 0; i < comments.length; i++) {
    commentDisplay += `
    <tr>
                            <td>[${comments[i].name}]:</td>
                            <td>${comments[i].comment}</td>
                        </tr>
`
  }
  return commentDisplay;
}

function createNewComment(index) {
  const newComment = `
                    <section class="new-comment">
                    <input type="text" class="comment-input">
                    <button class="comment-send">Send</button>
                </section>`;
  return newComment;
};

function toggleLike(index) {

  if (books[index].liked) {
    books[index].liked = false
    books[index].likes--
  }
  else {
    books[index].liked = true
    books[index].likes++
  }

  refreshLikeStatus(index);

};

function refreshLikeStatus(index) {
  const imgLike = document.getElementById('img-like');
  const imgLiked = document.getElementById('img-liked');

  if (books[index].liked) {
    imgLike.classList.add('is-hidden');
    imgLiked.classList.remove('is-hidden');
  } else {
    imgLike.classList.remove('is-hidden');
    imgLiked.classList.add('is-hidden');
  };
};
