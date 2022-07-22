import { ImHtmlFive } from 'react-icons/im';
import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiStyledcomponents,
  SiWordpress,
  SiVercel,
  SiHeroku,
  SiGithub,
  SiDjango,
  SiJsonwebtokens,
  SiNpm,
  SiYarn,
  SiFigma,
  SiInsomnia,
  SiTrello,
  SiNotion,
  SiVisualstudiocode
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { createContext, useContext } from 'react';
import StrateegiaImg from './strateegia-img.png';

const DEFAULT_ICONS_VALUE = [
  {
    icon: undefined,
    text: '',
    link: ''
  }
];

const DEFAULT_PROJECT_VALUE = [
  {
    img: '',
    title: '',
    inProgress: true,
    description: '',
    technologies: [],
    previewUrl: '',
    githubUrl: ''
  }
];

export const DataBaseContext = createContext<ContextProps>({
  techsList: DEFAULT_ICONS_VALUE,
  studyingTechsList: DEFAULT_ICONS_VALUE,
  toolsList: DEFAULT_ICONS_VALUE,
  projectsList: DEFAULT_PROJECT_VALUE
});

export const DataBaseProvider = ({ children }) => {
  const techsList = [
    {
      icon: FaGitAlt,
      text: '',
      link: 'https://git-scm.com/'
    },
    {
      icon: ImHtmlFive,
      text: '',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
    },
    {
      icon: SiCss3,
      text: '',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
    },
    {
      icon: SiJavascript,
      text: '',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
    },
    {
      icon: FaReact,
      text: '',
      link: 'https://pt-br.reactjs.org/'
    },
    {
      icon: TbBrandNextjs,
      text: '',
      link: 'https://nextjs.org/'
    },
    {
      icon: SiTypescript,
      text: '',
      link: 'https://www.typescriptlang.org/'
    },
    {
      icon: SiStyledcomponents,
      text: '',
      link: 'https://styled-components.com/'
    },
    {
      icon: FaReact,
      text: 'ContextAPI',
      link: 'https://pt-br.reactjs.org/docs/context.html'
    },
    {
      icon: undefined,
      text: 'Api REST',
      link: 'https://pt.wikipedia.org/wiki/REST'
    },
    {
      icon: SiJsonwebtokens,
      text: '',
      link: 'https://jwt.io/'
    },
  ];
  const studyingTechsList = [
    {
      icon: SiWordpress,
      text: '',
      link: 'https://wordpress.com/'
    },
    {
      icon: SiDjango,
      text: '',
      link: 'https://www.djangoproject.com/'
    },
    {
      icon: FaReact,
      text: 'Native',
      link: 'https://reactnative.dev/'
    }
  ];
  const toolsList = [
    {
      icon: SiNpm,
      text: '',
      link: 'https://www.npmjs.com/'
    },
    {
      icon: SiYarn,
      text: '',
      link: 'https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable'
    },
    {
      icon: SiGithub,
      text: '',
      link: 'https://github.com/'
    },
    {
      icon: SiHeroku,
      text: '',
      link: 'https://www.heroku.com/'
    },
    {
      icon: SiVercel,
      text: '',
      link: 'https://vercel.com/'
    },
    {
      icon: SiFigma,
      text: '',
      link: 'https://www.figma.com/'
    },
    {
      icon: SiInsomnia,
      text: '',
      link: 'https://insomnia.rest/'
    },
    {
      icon: SiTrello,
      text: '',
      link: 'https://trello.com/'
    },
    {
      icon: SiNotion,
      text: '',
      link: 'https://www.notion.so/'
    },
    {
      icon: SiVisualstudiocode,
      text: '',
      link: 'https://code.visualstudio.com/'
    }
  ];
  const projectsList = [
    {
      img: StrateegiaImg,
      title: 'Strateegia Landing Page',
      inProgress: true,
      description:
        'A landing page for the product Strateegia Digital of TDS.Company',
      technologies: ['WordPress', 'Elementor', 'HTML5', 'CSS3'],
      previewUrl: 'https://strateegia.digital/',
      githubUrl: ''
    }
  ];

  return (
    <DataBaseContext.Provider
      value={{
        techsList,
        studyingTechsList,
        toolsList,
        projectsList
      }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};

export default function useDataBase() {
  return useContext(DataBaseContext);
}