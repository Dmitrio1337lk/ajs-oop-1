import Character from './Character';

export default class Magician extends Character {
  constructor(name, type) {
    super(100, 1, 10, 40);
    this.name = name;
    this.type = type;
    if (this.name.length < 2 || this.name.length > 10) throw new Error('Невалидное имя');
    if (this.type !== 'Magician') throw new Error('Невалидный класс');
  }
}