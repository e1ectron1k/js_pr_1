const Character = require('../src/js/Character');
const Bowerman = require('../src/js/Bowerman');
const Swordsman = require('../src/js/Swordsman');
const Magician = require('../src/js/Magician');
const Daemon = require('../src/js/Daemon');
const Undead = require('../src/js/Undead');
const Zombie = require('../src/js/Zombie');

describe('Character Class', () => {
  test('should create character with valid name and type', () => {
    const character = new Character('John', 'Bowman');
    expect(character.name).toBe('John');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });

  test('should throw error for invalid name length', () => {
    expect(() => new Character('J', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters');
    expect(() => new Character('VeryLongNameHere', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters');
  });

  test('should throw error for invalid type', () => {
    expect(() => new Character('John', 'InvalidType')).toThrow('Invalid type. Must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });
});

describe('Character Classes', () => {
  test('Bowerman should have correct stats', () => {
    const bowman = new Bowerman('John');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
    expect(bowman.type).toBe('Bowman');
  });

  test('Swordsman should have correct stats', () => {
    const swordsman = new Swordsman('John');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
    expect(swordsman.type).toBe('Swordsman');
  });

  test('Magician should have correct stats', () => {
    const magician = new Magician('John');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
    expect(magician.type).toBe('Magician');
  });

  test('Daemon should have correct stats', () => {
    const daemon = new Daemon('John');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
    expect(daemon.type).toBe('Daemon');
  });

  test('Undead should have correct stats', () => {
    const undead = new Undead('John');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
    expect(undead.type).toBe('Undead');
  });

  test('Zombie should have correct stats', () => {
    const zombie = new Zombie('John');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
    expect(zombie.type).toBe('Zombie');
  });
});