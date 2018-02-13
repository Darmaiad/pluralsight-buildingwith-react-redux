import { createSelector } from 'reselect';

// Since we implemented the Memoized selector below, we dont't use this
// but we keep it around because we have a test implemented
export const authorsFormattedForDropdown = (authors) => authors.map((author) => ({
    value: author.id,
    text: author.firstName + ' ' + author.lastName,
}));

// Helper input-selector function to feed authors to the Memoized selector
const getStaticAuthors = (authors) => authors;

export const authorMemoizedSelector = createSelector(
    getStaticAuthors,
    (authors) => (authors).map(author => ({
        value: author.id,
        text: author.firstName + ' ' + author.lastName,
    }))
);
