function triangle(height, symbol) {
    if (height) {
        if (symbol.lenght === 1) {
            let triangle = '';
            for (let i = 0; i <= height; i++) {
                const space = ' '.repeat(height - i);

                triangle += space + symbol.repeat(i + i - 1) + '/n';
                return triangle;
            }
        }else {
            throw new Error('Symbole should be singular!');
        }

    }else{
        throw  new Error ('Height is required');
    }
    
}