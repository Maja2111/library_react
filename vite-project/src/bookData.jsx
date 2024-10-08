/**
 * @import books App.jsx
 */

const books = [
  /**
   * @description 1.Fourth Wings
   */
  {
    title: 'Fourth Wings - Flammengeküsst',
    author: 'Rebecca Yarros',
    image:
      'https://images.thalia.media/00/-/e6aa57f4de994b2cb78aef72ccd0999e/fourth-wing-flammengekuesst-gebundene-ausgabe-rebecca-yarros.png',
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
    image:
      'https://images.thalia.media/00/-/0e25d17c9eab4741af1d0d8508f59377/iron-flame-flammengekuesst-gebundene-ausgabe-rebecca-yarros.jpegs',
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
    image:
      'https://images.thalia.media/00/-/a22dc1ec75b74e35a96bd8b02c4ae335/die-fluesse-von-london-taschenbuch-ben-aaronovitch.jpeg',
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
    image:
      'https://images.thalia.media/00/-/a26c67d7ba2543fab17401934ef86a92/schwarzer-mond-ueber-soho-peter-grant-band-2-taschenbuch-ben-aaronovitch.jpeg',
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
    image:
      'https://images.thalia.media/00/-/d39a8e171fb34d2d87bb533b41357beb/die-schlafenden-geister-des-lake-superior-taschenbuch-ben-aaronovitch.jpeg',
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
    title: 'Rubinrot - Liebe geht durch alle Zeiten Band 1',
    author: 'Kerstin Gier',
    image:
      'https://images.thalia.media/00/-/635c0059c6b746879f47f76dc470cf7a/rubinrot-liebe-geht-durch-alle-zeiten-bd-1-taschenbuch-kerstin-gier.jpegs',
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
    image: 'https://bilder.buecher.de/produkte/26/26335/26335875n.jpg',
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
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/91MVN9qXjzL._AC_UL210_SR210,210_.jpg',
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
    image: 'https://himmelsblau.org/wp-content/uploads/loverecipes01.jpg',
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
    image: 'https://m.media-amazon.com/images/I/61s-bFAeIrL._UX250_.jpg',
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
    image: 'https://m.media-amazon.com/images/I/7154VHF1JXL._UX250_.jpg',
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
    image:
      'https://m.media-amazon.com/images/I/71irmWDjdBL._AC_UF894,1000_QL80_.jpg',
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
    image:
      'https://images.thalia.media/00/-/1349803d619546418ecc5b62df69e441/illuminati-taschenbuch-dan-brown.jpeg',
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
    image:
      'https://images.booklooker.de/s/9783785721520/Dan-Brown+Sakrileg-Thriller-Aus-dem-Amerikan-von-Piet-van-Poll.jpg',
    price: 14,
    publicationYear: 2003,
    publisher: 'Lübbe',
    pages: 624,
    genre: 'Thriller',
    titleType: 'Pentalogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 15.Cupio
   */
  {
    title: 'Cupio',
    author: 'Jilliane Hoffman',
    image:
      'https://images.thalia.media/-/BF750-750/25a2c1439fbf4002b2af59e93fa08e5e/cupido-cupido-trilogie-band-1-taschenbuch-jilliane-hoffman.jpeg',
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
    image:
      'https://leosuniversum.de/wp-content/uploads/2020/10/25187246-6CC5-4A4D-8728-6ECD4C30D250.jpg',
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
    image:
      'https://m.media-amazon.com/images/I/71fQyM7AKXL._AC_UF894,1000_QL80_.jpg',
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
    image:
      'https://images.thalia.media/-/BF2000-2000/df3ee70551004435acf1d81ee629c5d3/harry-potter-und-der-stein-der-weisen-taschenbuch-j-k-rowling.jpeg',
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
    image:
      'https://images.thalia.media/-/BF2000-2000/e47a2128aeee4e45b8c0c25b945b2c9d/harry-potter-und-die-kammer-des-schreckens-taschenbuch-j-k-rowling.jpeg',
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
    image:
      'https://images.thalia.media/-/BF2000-2000/9777982917bc40329f9200ce61f83f68/harry-potter-und-der-gefangene-von-askaban-taschenbuch-j-k-rowling.jpeg',
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
    image:
      'https://images.thalia.media/-/BF2000-2000/d51ce0c24fce491a9865def8d538a994/harry-potter-und-der-feuerkelch-taschenbuch-j-k-rowling.jpeg',
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
    image:
      'https://images.thalia.media/-/BF2000-2000/8725b2c6f1a848fbb4806c61179c7e23/harry-potter-und-der-orden-des-phoenix-taschenbuch-j-k-rowling.jpeg',
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
    image:
      'https://images.thalia.media/-/BF2000-2000/f73af9883e404450af721470189f8414/harry-potter-und-der-halbblutprinz-taschenbuch-j-k-rowling.jpeg',
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
    image:
      'https://m.media-amazon.com/images/I/91ZUICJWftL._AC_UF894,1000_QL80_.jpg',
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
    image:
      'https://m.media-amazon.com/images/I/61Z17uZRwmL._UF1000,1000_QL80_.jpg',
    price: 7.99,
    publicationYear: 2013,
    publisher: 'Ullstein Verlag',
    pages: 208,
    genre: 'Bericht',
    titleType: 'Einzelband',
    bookType: 'eBook',
  },
  /**
   * @description 26.Dunbrige Academy 1
   */
  {
    title: 'Dunbrige Academy - Anywhere',
    author: 'Sarah Sprinz',
    image:
      'https://lh5.googleusercontent.com/proxy/qRpcvsEgKennlK1U1U-Rok7rRPFQci-4IubvNws1jCA4I1651fFf9Mzq93hMfHnvwpC2E-GVbebJanieTsvUHmIiTLhg9OHZBbeUQifR66B4ElubsKa30yxNiNrJbJ3Fs9wp-FxQouGEwuuwJAEwAibrE7stXg',
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
    image:
      'https://m.media-amazon.com/images/I/61QqSqqxRbL._AC_UF894,1000_QL80_.jpg',
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
    image:
      'https://m.media-amazon.com/images/I/813yZjRPRsL._UF1000,1000_QL80_.jpg',
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
    image:
      'https://images.thalia.media/-/BF2000-2000/43670cdd2174415eb978565c083ddc88/gone-girl-das-perfekte-opfer-gebundene-ausgabe-gillian-flynn.jpeg',
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
    image:
      'https://m.media-amazon.com/images/I/71cxehebk5L._AC_UF894,1000_QL80_.jpg',
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
    image:
      'https://media.suhrkamp.de/mediadelivery/asset/c9af09e4a97d413c8101e052521c8f6a/',
    price: 6,
    publicationYear: 1976,
    publisher: 'Suhrkamp',
    pages: 160,
    genre: 'Lektüre',
    titleType: 'Einzelband',
    bookType: 'Taschenbuch',
  },
];

export default books;
