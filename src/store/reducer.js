
const initialState = {
    books: [
        {
            image: "https://images2.penguinrandomhouse.com/cover/9780593178553",
           bookprice:20,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "The Golden Compass",
            descrpition: "Go on an adventure this year with this thrilling fantasy tale."
        },
        {
            image:"https://images2.penguinrandomhouse.com/cover/9780679437222",
           bookprice:40,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "Catch-22",
            descrpition: "If this wasn’t already required reading in your school, it’s about time you’ve read it."
        },
        {
            image: "https://images3.penguinrandomhouse.com/cover/9780452284234",
           bookprice:50,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "1984",
            descrpition: "We were pretty certain you’ve read one of the best books of all time, but in case you haven’t, now’s your chance."
        },
        {
            image: "https://images4.penguinrandomhouse.com/cover/9781400079988",
           bookprice:10,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "War and Peace",
            descrpition: "A legendary masterpiece, this book is synonymous with difficult reading, so why not challenge yourshelf."
        },
        {
            image: "https://images3.penguinrandomhouse.com/cover/9781400033423",
           bookprice:20,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "Song of Solomon",
            descrpition: "One must always read a novel by this Nobel Prize winning author."
        },
        {
            image: "https://images3.penguinrandomhouse.com/cover/9780679722762",
           bookprice:"30",
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "Ulysses",
            descrpition: "“Joyce’s parallel use of The Odyssey…has the importance of a scientific discovery…”."
        },
        {
            image: "https://images2.penguinrandomhouse.com/cover/9780143126393",
           bookprice:30,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "The Shadow of the Wind",
            descrpition: "An incredible book by a beloved writer is a must read."
        }, 
        {
            image: "https://images3.penguinrandomhouse.com/cover/9780345339706",
           bookprice:20,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "The Lord of the Rings",
            descrpition: "Most people have seen the epic movie, but have you read the book?"
        },
        {
            image: "https://images3.penguinrandomhouse.com/cover/9780812976717",
           bookprice:50,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "The Satanic Verses",
            descrpition: "Known as one of Salman Rushdie’s greatest works, this book is definitely on the TBR list."
        },
        {
            image: "https://images4.penguinrandomhouse.com/cover/9780679407584",
           bookprice:60,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "Don Quixote",
            descrpition: "It’s no surprise that one of the best books of all time should be read."
        },
        {
            image: "https://images3.penguinrandomhouse.com/cover/9780812976717",
           bookprice:50,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "The Satanic Verses",
            descrpition: "Known as one of Salman Rushdie’s greatest works, this book is definitely on the TBR list."
        },
        {
            image: "https://images4.penguinrandomhouse.com/cover/9780679407584",
           bookprice:60,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "Don Quixote",
            descrpition: "It’s no surprise that one of the best books of all time should be read."
        },
        {
            image: "https://images3.penguinrandomhouse.com/cover/9780812976717",
           bookprice:50,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "The Satanic Verses",
            descrpition: "Known as one of Salman Rushdie’s greatest works, this book is definitely on the TBR list."
        },
        {
            image: "https://images4.penguinrandomhouse.com/cover/9780679407584",
           bookprice:60,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "Don Quixote",
            descrpition: "It’s no surprise that one of the best books of all time should be read."
        },
        {
            image: "https://images3.penguinrandomhouse.com/cover/9780812976717",
           bookprice:50,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "The Satanic Verses",
            descrpition: "Known as one of Salman Rushdie’s greatest works, this book is definitely on the TBR list."
        },
        {
            image: "https://images4.penguinrandomhouse.com/cover/9780679407584",
           bookprice:60,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "Don Quixote",
            descrpition: "It’s no surprise that one of the best books of all time should be read."
        },
        {
            image: "https://images3.penguinrandomhouse.com/cover/9780812976717",
           bookprice:50,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "The Satanic Verses",
            descrpition: "Known as one of Salman Rushdie’s greatest works, this book is definitely on the TBR list."
        },
        {
            image: "https://images4.penguinrandomhouse.com/cover/9780679407584",
           bookprice:60,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "Don Quixote",
            descrpition: "It’s no surprise that one of the best books of all time should be read."
        },
        {
            image: "https://images3.penguinrandomhouse.com/cover/9780812976717",
           bookprice:50,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "The Satanic Verses",
            descrpition: "Known as one of Salman Rushdie’s greatest works, this book is definitely on the TBR list."
        },
        {
            image: "https://images4.penguinrandomhouse.com/cover/9780679407584",
           bookprice:60,
           bookauother:"Leo Tolstoy.",
           pagecount:"2000",
            bookname: "Don Quixote",
            descrpition: "It’s no surprise that one of the best books of all time should be read."
        },
    ],
    value:null,
    ordersarray:[],
    cartitemsarray:[]
}
const reducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case "SET_CART":
            return {
                ...state,
                value: action.value,
                cartitemsarray:[...state.cartitemsarray, action.value]
            }
            case "SET_ORDER":
            return {
                ...state,
                ordersarray:  [...state.ordersarray, action.value]
            }
    }
    return newState
}
export default reducer