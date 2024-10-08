import extractInfo from '../app.js';

describe('func test', () => {
	test('should return correctly', () => {
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
		};

		const expected = [
			{
				id: 9,
				icon: 'http://...',
				description: 'Описание недоступно'
			}
		];

		const searchObject = { id: 9 };
		expect(extractInfo(character.special, searchObject)).toEqual(expected);
	})
})