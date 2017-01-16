var Funcs = require('../app/Funcs')

describe('Funcs.sum()', () => {

    it('soma dois números', () => {

        var num1 = 5,
            num2 = 3;

        var sum = Funcs.sum( num1, num2 )

        expect( sum ).toEqual( 8 )

    })

    it('não deve \'somar\' NaN', () => {

        var str1 = 'ola ',
            str2 = 'mundo';

        var sum = Funcs.sum( str1, str2 )

        expect( sum ).toBe( false )

    })

})

describe('Funcs.isStr()', () => {

    it('deve retornar se é String', () => {

        var test = [
            'uma string',
            '12345',
            false,
            99,
            new Date(),
            null,
            '...'
        ]

        expect( Funcs.isStr( test ) ).toEqual( [true, true, false, false, false, false, true] )

    })

    it('deve retornar true para \'uma string\'', () => {

        expect( Funcs.isStr( 'uma string' ) ).toEqual( true )

    })

    it('deve retornar false para 99', () => {

        expect( Funcs.isStr( 99 ) ).toEqual( false )

    })

})