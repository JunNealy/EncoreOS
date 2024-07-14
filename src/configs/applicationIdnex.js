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
      icon: './src/assets/icons/EncoreOS-Calc.png',
    },
    {
      name: 'Chat',
      app: Chat,
      icon: './src/assets/icons/EncoreOS-Messenger-Pigeon.png',
    },
    {
      name: 'Wordpad',
      app: WordPad,
      icon: './src/assets/icons/EncoreOS-WordPad.png',
    },
    {
      name: 'Wyrm',
      app: Wyrm,
      icon: './src/assets/images/head.png',
    },
    {
      name: 'Virtual Pet',
      app: PetApp,
      icon: './src/assets/images/Grungus.png',
    },
  ],
};

export { applicationIndex };
