Backend:

- Save the DB in a Docker container
- Implement Users auth
  - needs nickname
- Doble check db
  - set time and date limit for the task {today == !end-date ? continue : expire task}
  - assign to a user by nickname
  - needs to save an Icon for the user "avatar" // later save url of the real avatar

Frontend:

- RESPONSIVE 100%? or just look ok?
- ALL the design (order, more or less...)
  - Home
  - payments? (probably nope)
  - Register
  - main personal page
    - list with different states of the task... todo, in progress, review, finish
  - main group page
    - list with different states of the task... todo, in progress, review, finish
  - create form
    - needs to have end date
    - needs to assign to a user or left empty
  - update form
  - task page
    - needs to have update button
    - needs to have delete button with a warning