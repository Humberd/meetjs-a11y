# Plan

### 1. Pokazanie aplikacji.
### 2. Button
1. `users-header.tsx`: Zamiana `<div>` na `<button>`
2. `users.tsx`: Zamiana `<div>` na `<button>`
3. `_button.scss`: Dodać `:focus`
4. `users-header.tsx`: Dodać `aria-label="Create new user"`
5. `users.tsx`: Dodać title:

### 3. Announcer

1. `index.tsx`: Dodanie kontenera na alerty:
2. `dialogs.service.tsx`: Dodanie wywołania announcera:
3. `index.tsx`: Dodanie klasy `.visually-hidden`:

### 4. Focus Trap

1. `dialog.tsx`: Dodać Focus Trap
2. `dialog.tsx`: Dodać dialog id oraz ria-labelledby

### 5. Formularz

1. `create-user-dialog.tsx`: Zamienic `<div className="row">` na `<label className="row">`
2. `create-user-dialog.tsx`: Dodać `aria-required={true}` do inputu name.
3. `create-user-dialog.tsx`: Dodać `aria-invalid={!!errors.name}` do inputu name.
4. `create-user-dialog.tsx`: 
    1. Dodać `aria-describedby="error-name-required"` do inputu name.
    2. Edytować error message

### 6. Punkty orientacyjne

1. `index.tsx`: Zamienić `<div>` na `<main>`
2. `app-header.tsx`: Zamienić `<div>` na `<header>`
3. `app-footer.tsx`: Zamienić `<div>` na `<footer>`

### 7. Naglowki

1. `users-header.tsx`: Zamiana `<span className="title">` na `<h1 className="title">`
2. `users.tsx`: Zamiana `<span className="name">` na `<h3 className="name">`


### 8. Header logo

1. `app-header`: Dodać `alt="Meet.js logo"` do obrazka


### 9. Table

1. `avatar.tsx`: Dodaje `aria-hidden="true"` do obrazka.
2. `users.tsx`: Dodaje
3. `users.tsx`: Dodaje `<table aria-label="Users table">`
4. `users.tsx`: Dodaje `<tr aria-label={!user.isActive ? 'User inactive' : undefined}> 
