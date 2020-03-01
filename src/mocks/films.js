const filmFeature = {
  TITLES: [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`,
    `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`,
    `Revenant`, `Johnny English`],
  POSTERS: [`fantastic-beasts-the-crimes-of-grindelwald.jpg`, `bohemian-rhapsody.jpg`,
    `macbeth.jpg`, `aviator.jpg`, `we-need-to-talk-about-kevin.jpg`, `what-we-do-in-the-shadows.jpg`,
    `revenant.jpg`, `johnny-english.jpg`],
  GENRES: [`fantasy`, `drama`, `military`, `drama`, `drama`, `horror`, `thriller`,
    `action`],
  YEARS: [`2018`, `2019`, `1971`, `2004`, `2011`, `2015`, `2015`, `2003`],
  PREVIEWS: [`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`],
  DIRECTORS: [`David Yates`, `Bryan Singer`, `Roman Polanski`, `Martin Scorsese`, `Lynne Ramsay`, `Jemaine Clement`,
    `Alejandro G. Iñárritu`, `Peter Howitt`],
  ACTORS: [`Eddie Redmayne`, `Katherine Waterston`, `Rami Malek`, `Lucy Boynton`, `Jon Finch`, `Francesca Annis`,
    `Leonardo DiCaprio`, `Cate Blanchett`, `Tilda Swinton`, `Ezra Miller`, `Jemaine Clement`, `Taika Waititi`,
    `Tom Hardy`, `Domhnall Gleeson`, `Rowan Atkinson`],
  DURATIONS: [133, 134, 140, 170, 112, 82, 156, 87],
  DESCRIPTIONS: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
      Gustave H. (Ralph Fiennes).`,
    `Zero, a junior lobby boy, becomes Gustave&#39;s friend and protege.`,
    `Howard Hughes was a wily industrialist, glamorous movie producer and unstoppable American innovator –
     but thought of himself first and foremost as an aviator`,
    `In late 1823, Hugh Glass guides Captain Andrew Henry's trappers through territory of the present day Dakotas.`
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
  ],
  RATINGS: [8.9, 9.0, 7.7, 6.7, 8.0],
  AUTHORS: [`Kate Muir`, `Bill Goodykoontz`, `Amanda Greever`, `Matthew Lickona`, `Paula Fleri-Soler`],
  DATES: [`December 20, 2016`, `August 01, 2010`, `March 15, 2019`, `November 07, 2014`],
};

const getRandomElement = (elements) => {
  return elements[Math.floor(Math.random() * elements.length)];
};

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const generateFeatures = (features, amountFeatures) => {
  const uniqueFeatures = new Set(features.filter(() => Math.random() > 0.5).slice(0, amountFeatures));

  return Array.from(uniqueFeatures);
};

const generateDuration = (duration) => {
  return `${Math.floor(duration / 60)}h ${duration % 60}m`;
};

const generateReviews = () => {
  return new Array(getRandomNumber(3, 7)).fill(``).map(() => {
    return {
      text: getRandomElement(reviewFeature.TEXTS),
      rating: getRandomElement(reviewFeature.RATINGS),
      author: getRandomElement(reviewFeature.AUTHORS),
      date: getRandomElement(reviewFeature.DATES),
    };
  });
};

const generateFilms = () => {
  return filmFeature.TITLES.map((title, i) => {
    return {
      title,
      poster: filmFeature.POSTERS[i],
      genre: filmFeature.GENRES[i],
      year: filmFeature.YEARS[i],
      preview: getRandomElement(filmFeature.PREVIEWS),
      director: filmFeature.DIRECTORS[i],
      starring: generateFeatures(filmFeature.ACTORS, 3),
      duration: generateDuration(filmFeature.DURATIONS[i]),
      reviews: generateReviews(),
      descriptions: generateFeatures(filmFeature.DESCRIPTIONS, getRandomNumber(1, 4)),
      rating: getRandomElement(reviewFeature.RATINGS),
    };
  });
};

export default generateFilms();
