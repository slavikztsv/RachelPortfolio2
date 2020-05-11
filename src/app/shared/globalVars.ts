import { Media } from './models/media.model';
import { MediaType } from './enums';


export default class GlobalVars {
  public static mediaArray = [
    {
      folderName: 'meir_ariel_16072019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Meir Ariel Tribute',
      description: 'A special show commemorating 20 years of his passing',
      credits: 'Design: Rachel Zaitsev\nStudio: Insight',
      childMedia: [
        new Media('1.jpg'),
        new Media('2.jpg'),
        new Media('3.jpg'),
      ]
    },
    {
      folderName: 'yuval_dayan_06022020',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Yuval Dayan',
      description: 'Music tour 2020',
      credits: 'Design: Rachel Zaitsev\nAnimation: Rachel Zaitsev, Gal Daniel\nStudio: Insight', //last photo credit: Benco Artographer
      childMedia: [
        new Media('1.jpg'),
        new Media('2.jpg'),
        new Media('3.jpg'),
        new Media('4.jpg'),
      ]
    },
    {
      folderName: 'youtube_09122019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Youtube Rewind',
      description: '2019 Conference',
      credits: 'Design: Rachel Zaitsev, Nili Hamudot\nStudio: Insight',
      childMedia: [
        new Media('1.jpg'),
        new Media('2.jpg'),
        new Media('3.jpg'),
      ]
    },
    {
      folderName: 'tikva_6_2019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Hatikva 6',
      description: 'Music tour 2019',
      credits: 'Design: Rachel Zaitsev\nStudio: Insight',//Moon photo-Rachel animator
      childMedia: [
        new Media('2.mp4', MediaType.Video, '2.jpg')
      ]
    },
    {
      folderName: 'the_man_01062019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'The Man Who\nMistook His Wife\nfor a Hat',
      description: 'A theater show, Khan Theater',
      credits: 'Design: Rachel Zaitsev\nTransitions animation: Rachel Zaitsev\nStudio: Insight',
      childMedia: [
        new Media('1.jpg'),
        new Media('2.jpg'),
        new Media('3.jpg'),
        new Media('4.jpg')
      ]
    },
    {
      folderName: 'ramatkal_13012019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Gadi Eizenkot preda',
      description: 'preda ceremony',
      credits: 'Design: Rachel Zaitsev\nAnimation: Rachel Zaitsev\nStudio: Insight',
      childMedia: [
        new Media('1.jpg'),
        new Media('2.mp4', MediaType.Video, '1.jpg'),
        new Media('3.jpg')
      ]
    },
    {
      folderName: 'pras_israel_09052019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Israel Prize',
      description: '2019 award ceremony',
      credits: 'Screen designs: Rachel Zaitsev\nStudio: Insight',
      childMedia: [
        new Media('1.jpg'),
        new Media('2.jpg'),
        new Media('3.jpg'),
        new Media('4.jpg'),
        new Media('5.jpg'),
        new Media('6.jpg'),
        new Media('7.mp4', MediaType.Video, '7.jpg')
      ]
    },
    {
      folderName: 'nyc_wedding_30062019',
      fileName: '0.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'NYC Wedding',
      description: 'Some description here',
      credits: 'Design: Rachel Zaitsev\nMusic: Mattia Cupelli\nStudio: Insight',
      childMedia: [
        new Media('2.jpg'),
        new Media('3.jpg'),
        new Media('4.jpg'),
        new Media('5.jpg'),
        new Media('6.mp4', MediaType.Video, '6.jpg')
      ]
    },
    {
      folderName: 'microsoft_23012020',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Bonnie Tyler',
      description: 'A show at Microsoft event 2020',
      credits: 'Design: Rachel Zaitsev\nAnimation: Rotem Tzur, Valeri Hudedatov\nMusic: Mattia Cupelli, Alec Koff\nStudio: Insight\nPhotography: Tomer Foltyn',
      childMedia: [
        new Media('1.jpg'),
        new Media('2.jpg'),
        new Media('3.jpg'),
        new Media('4.jpg'),
        new Media('5.mp4', MediaType.Video, '5.jpg'),
        new Media('6.mp4', MediaType.Video, '6.jpg')
      ]
    },
    {
      folderName: 'gently_29122019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Gently',
      description: 'A theater show, Haifa theater',
      credits: 'Design: Rachel Zaitsev\nStudio: Insight\nPhotography: Yossi Zwecker',
      childMedia: [
      ]
    },
    {
      folderName: 'hanukalime_23122019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Jerusalem Hanukkah',
      description: 'HanukkahLime festival 2019',
      credits: 'Design: Rachel Zaitsev\nStudio: Insight',
      childMedia: [
      ]
    },
    {
      folderName: 'atnachta_tau_13112019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Atnachta Conference',
      description: 'Tel Aviv University Conference 2020',
      credits: 'Design: Rachel Zaitsev\nAnimation: Valeri Hudedatov\nStudio: Insight',
      childMedia: [
        new Media('2.mp4', MediaType.Video, '1.jpg')
      ]
    },
    {
      folderName: 'jeruz_sound_fest_01042019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Sounds of the\nOld City',
      description: 'Jerusalem fest - Traveling within a soundtrack\nprojected in 360 degrees dome',
      credits: 'Design: Rachel Zaitsev\nAnimation: Nitzan Papir, Gal Daniel\nStudio & Video edit: Insight',
      childMedia: [
        new Media('2.mp4', MediaType.Video, '1.jpg')
      ]
    },
    {
      folderName: 'kkl_pyromania_04112019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Kakal',
      description: 'Event opening item',
      credits: 'Design: Rachel Zaitsev\nStudio: Insight\nProduction & Video edit: Pyromania',
      childMedia: [
        new Media('2.mp4', MediaType.Video, '1.jpg')
      ]
    },
    {
      folderName: 'mahoz_tzafon_26082019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Ministry of Education',
      description: 'Conference item',
      credits: 'Design: Rachel Zaitsev\nAnimation: Gal Daniel\nStudio: Insight',
      childMedia: [
        new Media('2.mp4', MediaType.Video, '1.jpg')
      ]
    },
    {
      folderName: 'manhigim_23012020',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Holocaust Forum',
      description: 'World leaders conference 2020',
      credits: 'Design: Nili Hamudot, Lital, Rachel Zaitsev\nStudio: Insight',
      childMedia: [
        new Media('2.mp4', MediaType.Video, '1.jpg')
      ]
    },
    {
      folderName: 'microsoft_ivri_31012019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Ivri Lider',
      description: 'A Queen tribute at Microsoft event 2019',
      credits: 'Design: Rachel Zaitsev\nAnimation: Rachel Zaitsev\nStudio: Insight',
      childMedia: [
        new Media('2.mp4', MediaType.Video, '1.jpg')
      ]
    },
    {
      folderName: 'odelia_berlin_clip',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Odelia Berlin',
      description: 'Music video',
      credits: 'Design: Rachel Zaitsev\nAnimation: Gal Daniel\nStudio: Insight',
      childMedia: [
        new Media('2.mp4', MediaType.Video, '1.jpg')
      ]
    },
    {
      folderName: 'sapir_15032020',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Sapir Prize',
      description: '2020 Award ceremony',
      credits: 'Animation: Rachel Zaitsev\nStudio: Insight',
      childMedia: [
        new Media('2.mp4', MediaType.Video, '1.jpg')
      ]
    },
    {
      folderName: 'shelochim_24112019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Shluchim Conference',
      description: '2019 International conference',
      credits: 'Screen video art: Rachel Zaitsev\nAnimation: Rachel Zaitsev\nStudio: Insight',
      childMedia: [
        new Media('2.mp4', MediaType.Video, '1.jpg')
      ]
    },
    {
      folderName: 'urbanica_2019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Urbanica',
      description: 'Kids summer collection 2019',
      credits: 'Design: Rachel Zaitsev\nEdit & Animation: Nitzan Papir\nStudio: Insight',
      childMedia: [
        new Media('2.mp4', MediaType.Video, '1.jpg')
      ]
    },
    {
      folderName: 'zikaron_raanana_07052019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Raanana\nMemorial Ceremony',
      description: 'Memorial day for the IDF 2019',
      credits: 'Design: Rachel Zaitsev\nAnimation: Gal Daniel\nStudio: Insight',//music: mattia cupelli
      childMedia: [
        new Media('2.mp4', MediaType.Video, '1.jpg')
      ]
    },
    {
      folderName: 'zikaron_rashlatz_07052019',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'Rishon Lezion\nMemorial Ceremony',
      description: 'Memorial day for the IDF 2019',
      credits: 'Design: Rachel Zaitsev\nAnimation: Nitzan Papir, Talya Ben-Em, Rotem Tzur\nStudio: Insight',//music: mattia cupelli
      childMedia: [
        new Media('1.mp4', MediaType.Video, '1.jpg'),
        new Media('2.mp4', MediaType.Video, '2.jpg')
      ]
    },
    {
      folderName: 'bezalel_fourth',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'W\\hole',
      description: 'Bezalel Academy Graduation film (teaser)',
      credits: 'A film by Rachel Zaitsev',
      childMedia: [
        new Media('2.mp4', MediaType.Video, '1.jpg')
      ]
    },
    {
      folderName: 'bezalel_third',
      fileName: '1.jpg',
      type: MediaType.Image,
      thumbnailFileName: null,
      title: 'On the Other Side',
      description: 'Bezalel Academy 3rd year\n3D animation film',
      credits: 'A film by Rachel Zaitsev',
      childMedia: [
        new Media('2.mp4', MediaType.Video, '1.jpg')
      ]
    }

  ];
}
