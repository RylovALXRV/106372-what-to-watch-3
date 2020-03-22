import {DEFAULT_GENRE} from "../const";

const filmFeature = {
  TITLES: [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`,
    `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`,
    `Revenant`, `Johnny English`],
  POSTERS: [`fantastic-beasts-the-crimes-of-grindelwald.jpg`, `bohemian-rhapsody.jpg`,
    `macbeth.jpg`, `aviator.jpg`, `we-need-to-talk-about-kevin.jpg`, `what-we-do-in-the-shadows.jpg`,
    `revenant.jpg`, `johnny-english.jpg`],
  GENRES: [`Drama`, `Drama`, `Romance`, `Horror`, `Horror`, `Comedy`, `Thriller`, `Thriller`],
  YEARS: [2018, 2019, 1971, 2004, 2011, 2015, 2015, 2003],
  PREVIEW: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  DIRECTORS: [`David Yates`, `Bryan Singer`, `Roman Polanski`, `Martin Scorsese`, `Lynne Ramsay`, `Jemaine Clement`,
    `Alejandro G. Iñárritu`, `Peter Howitt`],
  ACTORS: [[`Eddie Redmayne`, `Katherine Waterston`], [`Rami Malek`, `Lucy Boynton`], [`Jon Finch`, `Francesca Annis`],
    [`Leonardo DiCaprio`, `Cate Blanchett`], [`Tilda Swinton`, `Ezra Miller`], [`Jemaine Clement`, `Taika Waititi`],
    [`Tom Hardy`, `Domhnall Gleeson`], [`Rowan Atkinson`, `Jemaine Clement`]],
  DURATIONS: [5, 14, 14, 17, 11, 10, 15, 5],
  DESCRIPTIONS: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
      Gustave H. (Ralph Fiennes).`,
    `Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury.`,
    `Zero, a junior lobby boy, becomes Gustave&#39;s friend and protege.`,
    `Howard Hughes was a wily industrialist, glamorous movie producer and unstoppable American innovator –
     but thought of himself first and foremost as an aviator`,
    `In late 1823, Hugh Glass guides Captain Andrew Henry's trappers through territory of the present day Dakotas.`,
    `What We Do in the Shadows is a 2014 New Zealand mockumentary horror comedy film written and directed by Jemaine
     Clement and Taika Waititi and the first installment in the What We Do in the Shadows franchise.`,
    `We Need To Talk About Kevin is about the aftermath of a Columbine-style shooting at a school in a small American town.`,
    `He plays a character who became famous in Britain as the star of a long-running series of credit card commercials.`
  ],
};

const reviewFeature = {
  TEXTS: [
    `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one
      of the director's funniest and most exquisitely designed movies in years.`,
    `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them,
      they're a delight. "The Grand Budapest Hotel" is no different, except that he has added
      a hint of gravitas to the mix, improving the recipe.`,
    `I didn't find it amusing, and while I can appreciate the creativity, it's an
      hour and 40 minutes I wish I could take back.`,
    `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there,
      gruesome and/or heartbreaking.`,
    `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there,
      gruesome and/or heartbreaking.....`,
    `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one
      of the director's funniest and most exquisitely designed movies in years.!!!`,
    `I didn't find it amusing, and while I can appreciate the creativity, it's an
      hour and 40 minutes I wish I could take back.!?!`
  ],
  RATINGS: [8.9, 9.0, 7.7, 6.7, 8.0, 5.5, 6.1, 9.3],
  AUTHORS: [`Kate Muir`, `Bill Goodykoontz`, `Amanda Greever`, `Matthew Lickona`, `Paula Fleri-Soler`, `Matthew Lickona`,
    `Amanda Greever`, `Kate Muir`],
  DATES: [`December 20, 2016`, `August 01, 2010`, `March 15, 2019`, `November 07, 2014`, `August 01, 2010`,
    `December 20, 2016`, `March 15, 2019`, `November 07, 2014`],
};

const generateReviews = () => {
  return reviewFeature.TEXTS.map((reviewText, i) => {
    return {
      text: reviewText,
      rating: reviewFeature.RATINGS[i],
      author: reviewFeature.AUTHORS[i],
      date: reviewFeature.DATES[i],
    };
  });
};

const generateMovies = () => {
  return filmFeature.TITLES.map((title, i) => {
    return {
      title,
      poster: filmFeature.POSTERS[i],
      genre: filmFeature.GENRES[i],
      year: filmFeature.YEARS[i],
      preview: filmFeature.PREVIEW,
      director: filmFeature.DIRECTORS[i],
      starring: filmFeature.ACTORS[i],
      duration: filmFeature.DURATIONS[i],
      reviews: generateReviews(),
      descriptions: filmFeature.DESCRIPTIONS[i],
      rating: reviewFeature.RATINGS[i],
    };
  });
};

const generateGenresList = () => {
  const genres = [DEFAULT_GENRE];

  const genresUnique = new Set(generateMovies().map((movie) => {
    return movie.genre;
  }));

  return genres.concat(Array.from(genresUnique));
};

export {generateGenresList};
export default generateMovies();
