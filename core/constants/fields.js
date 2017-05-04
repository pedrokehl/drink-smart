angular
    .module('drinkSmart')
    .constant('fieldsConstants', {
        idade: {
            prefix: 'a',
            fieldName: 'Idade',
            options: {
                1: '18 a 25 anos',
                2: '26 a 30 anos',
                3: '31 a 40 anos',
                4: '41 a 50 anos',
                5: 'Acima de 50 anos'
            }
        },
        sexo: {
            prefix: 'o',
            fieldName: 'Gênero',
            options: {
                'M': 'Masculino',
                'F': 'Feminino'
            }
        },
        preferencia: {
            prefix: 'a',
            fieldName: 'Preferência',
            options: {
                1: 'Cervejas',
                2: 'Vinhos',
                3: 'Destilados'
            }
        },
        acompanhamento: {
            prefix: 'o',
            fieldName: 'Acompanhamento',
            options: {
                1: 'Aves',
                2: 'Suinos',
                3: 'Carne Vermelha',
                4: 'Peixes e Frutos do Mar',
                5: 'Massas',
                6: 'Petiscos',
                7: 'Fast-Food',
                0: 'Nenhum'
            }
        },
        clima: {
            prefix: 'o',
            fieldName: 'Clima',
            options: {
                1: 'Primavera',
                2: 'Verão',
                3: 'Outono',
                4: 'Inverno'
            }
        },
        ocasiao: {
            prefix: 'a',
            fieldName: 'Ocasião',
            options: {
                1: 'Aniversário',
                2: 'Aniversário de Casamento',
                3: 'Jantar de Negócios',
                4: 'Almoço',
                5: 'Jantar',
                6: 'Dia dos Namorados',
                7: 'Amigos',
                8: 'Família',
                0: 'Outros'
            }
        },
        valor: {
            prefix: 'o',
            suffix: ' Desejado',
            fieldName: 'Valor',
            options: {
                1: 'Até R$50,00',
                2: '51,00 à 100,00',
                3: '101,00 à 150,00',
                4: '151,00 à 200,00',
                5: 'Acima de 200,00'
            }
        }
    });