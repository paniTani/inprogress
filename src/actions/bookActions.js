import request from 'superagent';

export const getBooks = (value) => {
    return (dispatch) => {
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: value, maxResults: 40 }) //'q' as the origin url looks like:'https://www.googleapis.com/books/v1/volumes?q=sea'
            .end((err, res) => {
                switch (res.statusCode) {
                    case 200:
                        const data = JSON.parse(res.text)
                        dispatch( {
                            type: 'RECEIVE_BOOKS',
                            booksList: data
                        })
                        break;
                }
            })
    };
}
