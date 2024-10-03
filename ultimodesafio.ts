// Classe genérica Herói
class Heroi {
    nome: string;
    idade: number;
    tipo: string;
  
    constructor(nome: string, idade: number, tipo: string) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar(): void {
      let ataque: string;
  
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'fez um ataque comum';
          break;
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de criação de heróis e ataques
  const mago = new Heroi('Merlin', 150, 'Mago');
  const guerreiro = new Heroi('Aragorn', 35, 'Guerreiro');
  const monge = new Heroi('Chirrut', 40, 'Monge');
  const ninja = new Heroi('Naruto', 17, 'Ninja');
  
  // Ataques
  mago.atacar();       // O Mago atacou usando magia
  guerreiro.atacar();  // O Guerreiro atacou usando espada
  monge.atacar();      // O Monge atacou usando artes marciais
  ninja.atacar();      // O Ninja atacou usando shuriken
  