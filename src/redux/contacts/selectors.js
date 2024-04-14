import { createSelector } from 'reselect';

export const selectContactsList = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectNameFilter = state => state.contacts.nameFilter;

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);