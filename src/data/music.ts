export interface Song {
  title: string;
  lengthSeconds: number;
}

export interface Album {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  songs: Song[];
}

const songs: Song[] = [
  {
    title: 'Self Conscious',
    lengthSeconds: 27 + 3 * 60,
  },
  {
    title: "Livin' In A Movie",
    lengthSeconds: 27 + 3 * 60,
  },
  {
    title: 'Dark Fantasy',
    lengthSeconds: 12 + 5 * 60,
  },
  {
    title: 'All of the Lights',
    lengthSeconds: 54 + 2 * 60,
  },
  {
    title: 'So Appalled',
    lengthSeconds: 51 + 3 * 60,
  },
  {
    title: 'Devil in a New Dress',
    lengthSeconds: 51 + 4 * 60,
  },
  {
    title: 'Runaway',
    lengthSeconds: 46 + 3 * 60,
  },
  {
    title: 'Hell of a Life',
    lengthSeconds: 2 + 7 * 60,
  },
  {
    title: 'Blame Game',
    lengthSeconds: 37 + 3 * 60,
  },
  {
    title: 'Lost in the World',
    lengthSeconds: 11 + 3 * 60,
  },
  {
    title: 'Who Will Survive in America',
    lengthSeconds: 51 + 3 * 60,
  },
  {
    title: "Livin' In A Movie",
    lengthSeconds: 27 + 3 * 60,
  },
  {
    title: 'Dark Fantasy',
    lengthSeconds: 12 + 5 * 60,
  },
  {
    title: 'All of the Lights',
    lengthSeconds: 54 + 2 * 60,
  },
];

const music: Album[] = [
  {
    id: 'A003',
    title: 'Freshmen Adustment',
    author: 'Kanye West',
    imageUrl: '/static/images/cover-1.png',
    songs,
  },
  {
    id: 'A001',
    title: 'Unreleased',
    author: 'Kanye West',
    imageUrl: '/static/images/unreleased_cover.png',
    songs,
  },
  {
    id: 'A002',
    title: 'Feel The Steel',
    author: 'Steel Panther',
    imageUrl: '/static/images/cover.png',
    songs,
  },
];

export default music;
