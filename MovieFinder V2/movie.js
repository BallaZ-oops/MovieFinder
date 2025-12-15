$(function() {

  // ===== Получаем id фильма из URL =====
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id")); // id приходит как строка, превращаем в число

  // ===== Массив всех фильмов =====
  // const movie — массив с 14 фильмами
  // Каждый объект фильма содержит:
  // id          — уникальный идентификатор фильма
  // title       — название фильма
  // year        — год выпуска
  // genre       — жанр фильма
  // rating      — рейтинг IMDb
  // description — краткое описание
  // poster      — путь к постеру фильма
  const movie = [
    {
      id: 1,
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi, Adventure, Drama",
      rating: 8.6,
      description: "Космическое путешествие через червоточины ради спасения человечества.",
      poster: "images/interstellar.jpg"
    },
    {
      id: 2,
      title: "Formula 1",
      year: 2023,
      genre: "Sports, Documentary",
      rating: 8.1,
      description: "Документальный фильм о мире Формулы 1 и гонках.",
      poster: "images/formula_1.jpg"
    },
    {
      id: 3,
      title: "Matrix",
      year: 1999,
      genre: "Action, Sci-Fi",
      rating: 8.7,
      description: "История о компьютерной симуляции и восстании людей против машин.",
      poster: "images/matrix.jpg"
    },
    {
      id: 4,
      title: "Dexter",
      year: 2006,
      genre: "Crime, Drama, Thriller",
      rating: 8.6,
      description: "Сериал о судебном эксперте, который скрытно наказывает преступников.",
      poster: "images/dexter.jpg"
    },
    {
      id: 5,
      title: "Gladiator",
      year: 2000,
      genre: "Action, Drama",
      rating: 8.5,
      description: "История римского генерала, ставшего гладиатором.",
      poster: "images/gladiator.jpg"
    },
    {
      id: 6,
      title: "Joker",
      year: 2019,
      genre: "Crime, Drama, Thriller",
      rating: 8.4,
      description: "Происхождение Джокера и его путь к становлению злодеем.",
      poster: "images/joker.jpg"
    },
    {
      id: 7,
      title: "Avatar",
      year: 2009,
      genre: "Sci-Fi, Adventure, Fantasy",
      rating: 7.8,
      description: "Человек посещает мир Пандоры и становится частью местной цивилизации.",
      poster: "images/avatar.jpg"
    },
    {
      id: 8,
      title: "Fight Club",
      year: 1999,
      genre: "Drama",
      rating: 8.8,
      description: "Фильм о внутренней борьбе человека с самим собой и обществом.",
      poster: "images/fight_club.jpg"
    },
    {
      id: 9,
      title: "Now You See Me 1",
      year: 2013,
      genre: "Crime, Mystery, Thriller",
      rating: 7.3,
      description: "Фокусники совершают дерзкие ограбления во время шоу.",
      poster: "images/illusion1.jpg"
    },
    {
      id: 10,
      title: "Now You See Me 2",
      year: 2016,
      genre: "Crime, Mystery, Thriller",
      rating: 6.5,
      description: "Продолжение истории о фокусниках с новыми трюками.",
      poster: "images/illusion2.jpg"
    },
    {
      id: 11,
      title: "Now You See Me 3",
      year: 2025,
      genre: "Crime, Mystery, Thriller",
      rating: 7.0,
      description: "Третья часть серии о фокусниках с новыми ограблениями и иллюзиями.",
      poster: "images/illusion3.jpg"
    },
    {
      id: 12,
      title: "Se7en",
      year: 1995,
      genre: "Crime, Drama, Mystery",
      rating: 8.6,
      description: "Детектив о двух полицейских, преследующих серийного убийцу.",
      poster: "images/se7en.jpg"
    },
    {
      id: 13,
      title: "The Dark Knight",
      year: 2008,
      genre: "Action, Crime, Drama",
      rating: 9.0,
      description: "Бэтмен против Джокера в Готэме. Фильм про справедливость и хаос.",
      poster: "images/dark_knight.jpg"
    },
    { id: 14,
     title: "Inception",
     year: 2010,
     genre: "Sci-Fi, Action",
     rating: 8.8,
     description: "Фильм о снах внутри снов, где главный герой пытается изменить подсознание и украсть секреты из чужого разума. Наполнен визуальными эффектами и глубоким сюжетом.",
     poster: "images/inception.jpg"
    },
  ];

  // ===== Находим фильм по id =====
  const currentMovie = movie.find(f => f.id === id);

  // ===== Если фильм найден, отображаем его детали =====
  if(currentMovie) {
    $("#poster").attr("src", currentMovie.poster); // Постер
    $("#title").text(currentMovie.title); // Название
    $("#meta").text(`${currentMovie.year} • ${currentMovie.genre} • ⭐ ${currentMovie.rating}`); // Год, жанр, рейтинг
    $("#description").text(currentMovie.description); // Краткое описание
  } else {
    // Если фильм не найден, показываем сообщение
    $(".movie-details").html("<h2>Фильм не найден</h2>");
  }

});
