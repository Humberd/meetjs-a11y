# Plan

### 1. Pokazanie aplikacji.
### 2. Button
1. `users-header.tsx`: Zamiana `<div>` na `<button>`
2. `users.tsx`: Zamiana `<div>` na `<button>`
3. `_button.scss`: Dodać `:focus`
```scss
&.success {
    /*...*/

    &:hover,
    &:focus { // <-- dodać :focus
        background-color: #225f6b;
    }
}  

&.only-icon {
    /*...*/

    &:hover,
    &:focus { // <-- dodać :focus
        background-color: rgba(223, 225, 246, 0.71);
        color: #161440;
    }
}
```
    
4. `users-header.tsx`: Dodać `aria-label="Create new user"`
```html
<button
    className="app-button success new"
    onClick={openDialog}
    aria-label="Create new" <!-- dodać aria-label -->
>
  <FaPlus/>
  New
</button>
```
5. `users.tsx`: Dodać title:
```html
<button
    className="app-button only-icon edit"
    onClick={onUpdateUser}
    title="Edit user" <!-- dodać title -->
>
  <FaEdit/>
</button>
<button
    className="app-button only-icon delete"
    onClick={onDeleteUser}
    title="Delete user" <!-- dodać title -->
>
  <FaTrash/>
</button>
```

### 3. Announcer

1. `index.tsx`: Dodanie kontenera na alerty:
```html
<UsersTable/>
<!-- stąd -->
<div aria-live="polite">
  {text}
</div>
<!-- dotąd -->
{dialogRef && dialogRef.elem}
```

2. `dialogs.service.tsx`: Dodanie wywołania announcera:
```typescript
private openDialog<T>(dialogRef: DialogRef<T>): DialogRef<T> {
  dialogRef.addOnCloseListener(() => {
    this.dialogRef = null;
    GlobalAnnouncer.announce('Dialog closed'); // <-- to
  });
  GlobalAnnouncer.announce('Dialog opened'); // <-- i to

  this.dialogRef = dialogRef;

  return dialogRef;
}
```

2. `index.tsx`: Dodanie klasy `.visually-hidden`:
```html
<div className="visually-hidden" aria-live="polite">
  {text}
</div>
```

### 4. Focus Trap

1. `dialog.tsx`: Dodać Focus Trap
```html
<FocusTrap
    focusTrapOptions={{
      clickOutsideDeactivates: true,
    }}
>
  <div
      className="AppDialog top-level-container"
      onClick={event => event.stopPropagation()}
  >
    {children}
  </div>
</FocusTrap>
```

2. `dialog.tsx`: Dodać dialog id oraz ria-labelledby

```html
<h2 className="dialogTitle" id="DialogTitle">
  {title}
</h2>
```

```html
<div
    className="AppDialog top-level-container"
    aria-labelledby="DialogTitle" <-- dodać to
    onClick={event => event.stopPropagation()}
>
  {children}
</div>
```

3. `dialog.tsx`: Dodać role do dialogu
```html
<div
    className="AppDialog top-level-container"
    role="dialog" <-- dodać to
    aria-labelledby="DialogTitle" 
    onClick={event => event.stopPropagation()}
>
  {children}
</div>
```

### 5. Formularz

1. `create-user-dialog.tsx`: Zamienic `<div className="row">` na `<label className="row">`
2. `create-user-dialog.tsx`: Dodać `aria-required={true}` do inputu name.
3. `create-user-dialog.tsx`: Dodać `aria-invalid={!!errors.name}` do inputu name.
4. `create-user-dialog.tsx`: 
    1. Dodać `aria-describedby="error-name-required"` do inputu name.
    2. Edytować error message
```html
<span role="alert" id="error-name-required" className="error-message">
  This field is required
</span>
```    

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

```html
<th aria-label="Row counter"/>
<th aria-label="Avatar"/>
```

3. `users.tsx`: Dodaje `<table aria-label="Users table">`
4. `users.tsx`: Dodaje `<tr aria-label={!user.isActive ? 'User inactive' : undefined}> 
