import assets from '../assets';

export const logosAbout = {
  0: assets.secure,
  1: assets.fast,
  2: assets.simple,
};

export const logosCollaborators = {
  0: assets.emurgo,
  1: assets.inputOutput,
  2: assets.vacumlabs,
  3: assets.cardano,
};

export const logosSocial = {
  0: assets.fb,
  1: assets.twitter,
  2: assets.youtube,
  3: assets.medium,
  4: assets.redit,
  5: assets.linkedIn,
};

export const photosBlog = {
  0: assets.blogOne,
  1: assets.blogTwo,
  2: assets.blogThree,
};

export const photoContactUs = {
  0: assets.contactUs,
};

export const photoDeveloper = {
  0: assets.developerPerson,
};

export const photoStartPage = {
  0: assets.startPage,
};

export const photoEmurgoTest = {
  0: assets.emurgotestLogo,
};

export const photoEmurgo = {
  0: assets.emurgoLogo,
};

export const cardsBlog = [
  {
    image: photosBlog[0],
    date: '11 Nov 2019',
    text: 'Metaps Plus and EMURGO Collaborate on Joint Launch of World’s First ADA CRYPTO CARD in South Korea',
  },
  {
    image: photosBlog[1],
    date: '11 Nov 2019',
    text: 'Regarding our relationship with EMURGO HK Limited',
  },
  {
    image: photosBlog[2],
    date: '16 Oct 2019',
    text: 'EMURGO to Hold Blockchain Hackathon in Partnership with Tokyo University of Science',
  },
];

export const cardsAbout = [
  {
    title: 'Secure',
    subtitle: 'Our top priority',
    paragraph: 'High-quality code, thoroughly tested, security audited and more to make sure that Yoroi works flawlessly. Private keys are encrypted and never shared with our servers or third party providers. In order to preserve your privacy, Yoroi wallet does not even implement analytics.',
    image: logosAbout[0],
  },
  {
    title: 'Fast',
    subtitle: 'Our innovation',
    paragraph: 'Yoroi is a light wallet for Cardano. There is no need to download the blockchain when you open the wallet. So you are ready to send and receive transactions right away.',
    image: logosAbout[1],
  },
  {
    title: 'Simple',
    subtitle: 'Our passion',
    paragraph: 'We believe that software should have a simple structure and a beautiful user interface. Yoroi has been carefully designed and constructed to offer a great user experience.',
    image: logosAbout[2],
  },
];

export const linksEmurgo = {
  0: 'About',
  1: 'Blog',
  2: 'Contact',
  3: 'Eng',
};
