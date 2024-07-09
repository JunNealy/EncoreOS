import Calculator from '../components/Calculator/Calculator';
import Chat from '../components/Chat/Chat';

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
  ],
};

export { applicationIndex };
