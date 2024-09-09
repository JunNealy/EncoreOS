import calcIcon from '../assets/icons/EncoreOS-Calc.png';
import chatIcon from '../assets/icons/EncoreOS-Messenger-Pigeon.png';
import wordpadIcon from '../assets/icons/EncoreOS-WordPad.png';
import virtualPetIcon from '../assets/images/Grungus.png';
import wyrmIcon from '../assets/images/head.png';
import Calculator from '../components/Calculator/Calculator';
import Chat from '../components/Chat/Chat';
import PetApp from '../components/PetApp/PetApp';
import WordPad from '../components/WordPad/WordPad';
import Wyrm from '../components/Wyrm/Wyrm';

const applicationIndex = {
  applications: [
    {
      name: 'Calculator',
      app: Calculator,
      icon: calcIcon,
    },
    {
      name: 'Chat',
      app: Chat,
      icon: chatIcon,
    },
    {
      name: 'Wordpad',
      app: WordPad,
      icon: wordpadIcon,
    },
    {
      name: 'Wyrm',
      app: Wyrm,
      icon: wyrmIcon,
    },
    {
      name: 'Virtual Pet',
      app: PetApp,
      icon: virtualPetIcon,
    },
  ],
};

export { applicationIndex };
