import { MessagingProtocol } from '../classes/interfaces';

class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}

export default Messaging;
