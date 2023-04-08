
# **Git**
Git is a version control system that allows software developers to track changes in their code over time, collaborate with other developers on the same codebase, and manage different versions of their code. It was developed in 2005 by Linus Torvalds, the creator of Linux.

Git allows developers to work collaboratively on code by providing a way to manage and merge changes made by multiple contributors. It also provides a way to revert to previous versions of the code if necessary. Git works by creating a repository, which is a directory containing the project's files and a hidden .git directory that stores the history of changes to the files.

Using Git, developers can create branches of the code to work on new features or bug fixes, and merge those changes back into the main branch when they are ready. Git also provides tools for resolving conflicts that may arise when merging changes made by multiple contributors.

In addition to managing code, Git can be used to track changes to any type of file, including documentation, images, and other project assets. It is open source and freely available, and is widely used in the software development industry.

<br>

## **Create a new repository on the command line**

<br>

```bash
git init
git add README.md 
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:markoclimakodev/repository.git
git push -u origin main

  cd my-project
```


## Git Commands
| Command | Description | Example Usage |
| --- | --- | --- |
| `git init` | Initializes a new Git repository | `git init` |
| `git clone` | Creates a copy of a remote Git repository | `git clone https://github.com/username/repo.git` |
| `git add` | Adds changes to the staging area | `git add file.txt` |
| `git commit` | Saves changes to the local repository | `git commit -m "Added new feature"` |
| `git push` | Sends committed changes to a remote repository | `git push origin master` |
| `git pull` | Fetches and merges changes from a remote repository | `git pull origin master` |
| `git branch` | Lists existing branches or creates a new branch | `git branch new-feature` |
| `git checkout` | Switches to a different branch or commits | `git checkout new-feature` |
| `git checkout -b` | Creates a new branch and switches to it | `git checkout -b new-feature` |
| `git merge` | Merges changes from one branch into another | `git merge new-feature` |
| `git status` | Displays the current status of the repository | `git status` |
| `git log` | Displays a list of all commits in the repository | `git log` |
| `git reset` | Undoes changes to the repository | `git reset HEAD file.txt` |
| `git reset --soft HEAD~1` | Undoes the last commit and keeps the changes staged | `git reset --soft HEAD~1` |
| `git reset --hard HEAD~1` | Undoes the last commit and discards the changes | `git reset --hard HEAD~1` |
| `git remote` | Lists existing remote repositories or adds a new remote | `git remote add origin https://github.com/username/repo.git` |

<br>

## Conventional Commits
A specification for adding human and machine readable meaning to commit messages
|  Commit Type | Commit Message | Meaning |
| --- | --- | --- |
| `feat`        | feat: add new login feature            | Adds a new feature to the codebase                |
| `fix`         | fix: resolve issue with user signup    | Fixes a bug in the codebase                       |
| `docs`        | docs: update API documentation         | Updates documentation for the codebase            |
| `style`       | style: format user profile page        | Changes the look and feel of the codebase          |
| `refactor`    | refactor: optimize database queries    | Improves code quality without changing behavior   |
| `test`        | test: add unit tests for authentication | Adds or updates tests for the codebase            |
| `chore`       | chore: update dependencies             | Makes changes to build or configuration settings  |
| `perf`        | perf: improve page load times          | Improves performance of the codebase              |
| `ci`          | ci: set up automated testing           | Makes changes to the CI/CD pipeline or configs    |
| `revert`      | revert: undo previous commit           | Reverts a previous commit in the codebase          |


## Message examples
```
style[header]: update header styles

This commit updates the CSS styles for the header section of the website. The changes include:

- Increasing the font size of the logo
- Adding a background color to the header
- Changing the color of the navigation links

These changes were made to improve the readability and visual appeal of the header. The code for this update can be found in the 'style.css' file.
```

```
feat: add sign-up functionality to page

This commit adds a sign-up form to the home page of the website, allowing users to create a new account. The form includes fields for name, email, and password. 
```