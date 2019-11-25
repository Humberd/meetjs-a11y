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
