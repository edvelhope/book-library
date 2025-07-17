export type Book = {
    id: string;
    titolo: string;
    autore: string;
    preferenza: boolean;
};

export const books: Book[] = [
    {
        id: "1",
        titolo: "Il vecchio e il mare",
        autore: "Ernest Hemingway",
        preferenza: true,
    },
    {
        id: "2",
        titolo: "I Promessi Sposi",
        autore: "Alessandro Manzoni",
        preferenza: false,
    },
    {
        id: "3",
        titolo: "1984",
        autore: "George Orwell",
        preferenza: true,
    },
    {
        id: "4",
        titolo: "Delitto e castigo",
        autore: "Fëdor Dostoevskij",
        preferenza: false,
    },
    {
        id: "5",
        titolo: "Orgoglio e pregiudizio",
        autore: "Jane Austen",
        preferenza: true,
    },
];
