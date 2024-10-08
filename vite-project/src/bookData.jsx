/**
 * @import books App.jsx
 */

const Books = [
  /**
   * @description 1.Fourth Wings
   */
  {
    title: 'Fourth Wings - Flammengeküsst',
    author: 'Rebecca Yarros',
    id: 1,
    price: 28,
    publicationYear: 2023,
    publisher: 'dtv',
    pages: 768,
    genre: 'Fantasie',
    titleType: 'Pentalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 2.Iron Flames
   */
  {
    title: 'Iron Flame - Flammengeküsst',
    author: 'Rebecca Yarros',
    id: 2,
    price: 28,
    publicationYear: 2023,
    publisher: 'dtv',
    pages: 960,
    genre: 'Fantasie',
    titleType: 'Pentalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 3.Die Flüsse von London
   */
  {
    title: 'Die Flüsse von London - Peter Grant Story Band 1',
    author: 'Ben Aaronovitch',
    id: 3,
    price: 12,
    publicationYear: 2012,
    publisher: 'dtv',
    pages: 480,
    genre: 'Fantasie',
    titleType: 'Ennealogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 4.Der Mond über Soho
   */
  {
    title: 'Der schwarze Mond über Soho - Peter Grant Story Band 2',
    author: 'Ben Aaronovitch',
    id: 4,
    price: 11.95,
    publicationYear: 2012,
    publisher: 'dtv',
    pages: 416,
    genre: 'Fantasie',
    titleType: 'Ennealogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 5.Die schlafenden Geister
   */
  {
    title:
      'Die schlafenden Geister des Lake Superior - Kimberley Reynolds Story',
    author: 'Ben Aaronovitch',
    id: 5,
    price: 11.95,
    publicationYear: 2023,
    publisher: 'dtv',
    pages: 240,
    genre: 'Fantasie',
    titleType: 'Einzelband',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 6.Rubinrot
   */
  {
    title: 'Rubinrot - Liebe geht durch alle Zeiten Bd. 1',
    author: 'Kerstin Gier',
    id: 6,
    price: 17,
    publicationYear: 2009,
    publisher: 'Arena',
    pages: 352,
    genre: 'Zeitreiseliebesroman',
    titleType: 'Trilogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 7.Saphierblau
   */
  {
    title: 'Saphirblau - Liebe geht durch alle Zeiten Band 2',
    author: 'Kerstin Gier',
    id: 7,
    price: 18,
    publicationYear: 2010,
    publisher: 'Arena',
    pages: 400,
    genre: 'Zeitreiseliebesroman',
    titleType: 'Trilogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 8.Smaragdgrün
   */
  {
    title: 'Smaragdgrün - Liebe geht durch alle Zeiten Band 3',
    author: 'Kerstin Gier',
    id: 8,
    price: 22,
    publicationYear: 2010,
    publisher: 'Arena',
    pages: 400,
    genre: 'Zeitreiseliebesroman',
    titleType: 'Trilogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 9.Love Recipes Band 1
   */
  {
    title: 'Love Recipes – Verführung à la carte',
    author: 'Kate Meader',
    id: 9,
    price: 9.99,
    publicationYear: 2020,
    publisher: 'Piper',
    pages: 464,
    genre: 'Young Adult Roman',
    titleType: 'Trilogie',
    bookType: 'eBook',
  },
  /**
   * @description 10.Love Recipes Band 2
   */
  {
    title: 'Love Recipes - Süßes Verlangen',
    author: 'Kate Meader',
    id: 10,
    price: 9.99,
    publicationYear: 2020,
    publisher: 'Piper',
    pages: 464,
    genre: 'Young Adult Roman',
    titleType: 'Trilogie',
    bookType: 'eBook',
  },
  /**
   * @description 11.Love Recipes Band 3
   */
  {
    title: 'Love Recipes - Happy Hour fürs Herz',
    author: 'Kate Meader',
    id: 11,
    price: 9.99,
    publicationYear: 2020,
    publisher: 'Piper',
    pages: 400,
    genre: 'Young Adult Roman',
    titleType: 'Trilogie',
    bookType: 'eBook',
  },
  /**
   * @description 12.Die Liebenden von Leningrad
   */
  {
    title: 'Die Liebenden von Leningrad',
    author: 'Paullina Simons',
    id: 12,
    price: 12,
    publicationYear: 2018,
    publisher: 'Heyne',
    pages: 752,
    genre: 'Kriegsroman',
    titleType: 'Dilogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 13.Illuminati
   */
  {
    title: 'Illuminati',
    author: 'Dan Brown',
    id: 13,
    price: 14,
    publicationYear: 2003,
    publisher: 'Lübbe',
    pages: 736,
    genre: 'Thriller',
    titleType: 'Pentalogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 14.Sakrileg
   */
  {
    title: 'Sakrileg',
    author: 'Dan Brown',
    id: 14,
    price: 14,
    publicationYear: 2003,
    publisher: 'Lübbe',
    pages: 624,
    genre: 'Thriller',
    titleType: 'Pentalogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 15.Cupido
   */
  {
    title: 'Cupido',
    author: 'Jilliane Hoffman',
    id: 15,
    price: 14,
    publicationYear: 2005,
    publisher: 'Rowohlt Taschenbuch',
    pages: 480,
    genre: 'Thriller',
    titleType: 'Triologie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 16.Disney Villains 1
   */
  {
    title: 'Die Schönste im ganzen Land',
    author: 'Serena Valentino',
    id: 16,
    price: 7.99,
    publicationYear: 2021,
    publisher: 'Carlsen',
    pages: 272,
    genre: 'Märchen',
    titleType: 'Reihe',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 17.Disney Villains 2
   */
  {
    title: 'Das Biest in ihm',
    author: 'Serena Valentino',
    id: 17,
    price: 7.99,
    publicationYear: 2021,
    publisher: 'Carlsen',
    pages: 224,
    genre: 'Märchen',
    titleType: 'Reihe',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 18.Harry Potter 1
   */
  {
    title: 'Harry Potter und der Stein der Weisen',
    author: 'J.K.Rowling',
    id: 18,
    price: 18,
    publicationYear: 1997,
    publisher: 'Carlsen',
    pages: 336,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 19.Harry Potter 2
   */
  {
    title: 'Harry Potter und die Kammer des Schreckens',
    author: 'J.K.Rowling',
    id: 19,
    price: 18,
    publicationYear: 1998,
    publisher: 'Carlsen',
    pages: 352,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 20.Harry Potter 3
   */
  {
    title: 'Harry Potter und der Gefangene von Askaban',
    author: 'J.K.Rowling',
    id: 20,
    price: 20,
    publicationYear: 1999,
    publisher: 'Carlsen',
    pages: 448,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 21.Harry Potter 4
   */
  {
    title: 'Harry Potter und der Feuerkelch',
    author: 'J.K.Rowling',
    id: 21,
    price: 27,
    publicationYear: 2000,
    publisher: 'Carlsen',
    pages: 704,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 22.Harry Potter 5
   */
  {
    title: 'Harry Potter und der Orden des Phönix',
    author: 'J.K.Rowling',
    id: 22,
    price: 30,
    publicationYear: 2003,
    publisher: 'Carlsen',
    pages: 960,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },

  /**
   * @description 23.Harry Potter 6
   */
  {
    title: 'Harry Potter und der Halbblutprinz',
    author: 'J.K.Rowling',
    id: 23,
    price: 26,
    publicationYear: 2005,
    publisher: 'Carlsen',
    pages: 640,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 24.Harry Potter 7
   */
  {
    title: 'Harry Potter und die Heiligtümer des Todes',
    author: 'J.K.Rowling',
    id: 24,
    price: 28,
    publicationYear: 2007,
    publisher: 'Carlsen',
    pages: 752,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 25.Warum Menschen töten
   */
  {
    title: 'Warum Menschen töten - Eine Polizeipsychologin ermittelt',
    author: 'Claudia Brockmann',
    id: 25,
    price: 7.99,
    publicationYear: 2013,
    publisher: 'Ullstein Verlag',
    pages: 208,
    genre: 'Bericht',
    titleType: 'Einzelband',
    bookType: 'eBook',
  },
  /**
   * @description 26.Dunbridge Academy 1
   */
  {
    title: 'Dunbridge Academy - Anywhere',
    author: 'Sarah Sprinz',
    id: 26,
    price: 14,
    publicationYear: 2022,
    publisher: 'LYX',
    pages: 464,
    genre: 'Young Adult',
    titleType: 'Trilogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 27.Tycoon
   */
  {
    title: 'Tycoon - Dein Herz so nah',
    author: 'Katy Evans',
    id: 27,
    price: 9.99,
    publicationYear: 2019,
    publisher: 'LYX',
    pages: 297,
    genre: 'Roman',
    titleType: 'Trilogie',
    bookType: 'eBook',
  },
  /**
   * @description 28.Mogul
   */
  {
    title: 'Mogul -  Wenn du mich berührst',
    author: 'Katy Evans',
    id: 28,
    price: 9.99,
    publicationYear: 2019,
    publisher: 'LYX',
    pages: 281,
    genre: 'Roman',
    titleType: 'Trilogie',
    bookType: 'eBook',
  },
  /**
   * @description 29.Gone Girl
   */
  {
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    id: 29,
    price: 10.99,
    publicationYear: 2014,
    publisher: 'Fischer Taschenbuch Verlag',
    pages: 592,
    genre: 'Thriller',
    titleType: 'Einzelband',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 30.Die Physiker
   */
  {
    title: 'Die Physiker',
    author: 'Friedrich Dürrenmatt',
    id: 30,
    price: 9,
    publicationYear: 1988,
    publisher: 'Diogenes',
    pages: 96,
    genre: 'Lektüre',
    titleType: 'Einzelband',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 31.Die neuen Leiden des jungen W.
   */
  {
    title: 'Die neuen Leiden des jungen W.',
    author: 'Ulrich Plenzdorf',
    id: 31,
    price: 6,
    publicationYear: 1976,
    publisher: 'Suhrkamp',
    pages: 160,
    genre: 'Lektüre',
    titleType: 'Einzelband',
    bookType: 'Taschenbuch',
  },
];

export default Books;
