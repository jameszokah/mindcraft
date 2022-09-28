import { useState, useEffect, useCallback } from 'react';

interface IActions<T extends boolean> {
  moveForward: T;
  moveBackward: T;
  moveLeft: T;
  moveRight: T;
  jump: T;
  dirt: T;
  grass: T;
  glass: T;
  wood: T;
  log: T;
};

interface IActionKey<T extends keyof IActions<boolean>> {
  KeyW: T;
  KeyS: T;
  KeyA: T;
  KeyD: T;
  Space: T;
  Digit1: T;
  Digit2: T;
  Digit3: T;
  Digit4: T;
  Digit5: T;
}

// |
const actionByKey = <T extends string | keyof IActionKey<keyof IActions<boolean>>>(key: T, action: IActions<boolean>): IActionKey<keyof IActions<boolean>>[T] => {
  
  const actions: IActionKey<keyof typeof action> = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log'
    
  }
  return actions[key];
  
}


export const useKeyboard = () => {
  const [actions, setActions] = useState<IActions<boolean>>({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false
  });

  const handleKeyUp = useCallback((e: React.KeyboardEvent): void => {
    const actionKey = actionByKey(e.code, actions)

  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent): void => {

  }, []);

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);
}

