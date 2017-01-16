const Funcs = {

    sum( num1, num2 ) {

        if (typeof num1 != 'number')
            return false

        return num1 + num2

    },

    isStr( val ) {

        var isString = val => typeof val === 'string'

        if ( typeof val == 'object')
            return val.map( isString )

        return isString( val )

    }

}

module.exports = Funcs