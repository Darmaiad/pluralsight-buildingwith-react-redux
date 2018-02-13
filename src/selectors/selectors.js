import { createSelector } from 'reselect';

// export const authorsFormattedForDropdown = (authors) => authors.map((author) => ({
//     value: author.id,
//     text: author.firstName + ' ' + author.lastName,
// }));

// Helper input-selector function to feed authors to the Memoized selector
const getStaticAuthors = (authors) => authors;

export const authorMemoizedSelector = createSelector(
    getStaticAuthors,
    (authors) => (authors).map(author => ({
        value: author.id,
        text: author.firstName + ' ' + author.lastName,
    }))
);
