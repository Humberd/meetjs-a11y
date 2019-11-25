# Plan

 1. Pokazanie aplikacji.
 2. Button
    1. `users-header.tsx`: Zamiana `<div>` na `<button>`
    2. `users.tsx`: Zamiana `<div>` na `<button>`
    3. `_button.scss`
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
    
    4. `users-header.tsx`: Dodać `aria-label="Create new user"` do buttona
    5. `users.tsx`: Dodać title:
        1. `title="Edit user"`
        2. `title="Delete user"`
