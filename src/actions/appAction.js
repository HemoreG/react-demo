export const changePage = (path) => ({
    type: 'CHANGEPAGE',
    newPage: path
});

export const changePosition = () => ({
   type: 'CHANGEPOSITION'
});

export const changeTheme = () => ({
    type: 'CHANGETHEME'
});
// Actions needed inside the App Component