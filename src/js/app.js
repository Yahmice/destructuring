const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]	
}

function extractInfo(array, searchObject) {
  const result = [];
  
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    
    // Проверка через переменную
    let match = true;
    for (const key in searchObject) {
      if (item[key] !== searchObject[key]) {
        match = false;
        break;
      }
    }

    // Если соответствует
    if (match) {
      result.push({
        id: item.id,
        icon: item.icon,
        description: item.description || 'Описание недоступно'
      });
    }
  }
  
  return result;
}


const searchObject = { id: 9 }; // Любой параметр
console.log(extractInfo(character.special, searchObject));

export default extractInfo;
