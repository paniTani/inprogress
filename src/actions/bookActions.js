import request from 'superagent';

// export const addBookName = (text) => {
//     return {
//         type: 'ADD_BOOK_NAME',
//         bookName: text
//     }
// }

export const fetchBooks = (value) => {
    return (dispatch) => {
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: value }) //'q' as the origin url looks like:'https://www.googleapis.com/books/v1/volumes?q=sea'
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