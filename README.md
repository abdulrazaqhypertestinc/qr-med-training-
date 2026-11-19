
QR MED Team Workspace

Project Overview
A React-based task management dashboard that helps engineering teams manage tasks and track project progress.

Technologies Used
- React.js
- JavaScript
- Vite
- HTML5 and CSS3
- Git and GitHub
- ESLint and Prettier
- Husky
- GitHub Actions

Features
- Dashboard with task summary cards
- Display of 8 sample tasks
- Task status and priority indicators
- Search by task title or assignee
- Filter by status and priority
- Empty state and clear filters
- Responsive desktop and mobile layout

Installation

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd qr-med-team-workspace
npm install
npm run dev
```

Available Commands

| Command | Description |
|---|---|
| npm run dev | Start development server |
| npm run build | Build application |
| npm run lint | Run ESLint |
| npm run format | Format code |
| npm run format:check | Check formatting |

Project Structure

- `src/components/` – Reusable React components
- `src/data/` – Sample task data
- `src/pages/` – Dashboard page
- `src/styles/` – Global CSS
- `.husky/` – Pre-commit hooks
- `.github/workflows/` – GitHub Actions CI

Code Quality and CI
- ESLint checks code quality.
- Prettier maintains consistent formatting.
- Husky runs checks before commits.
- GitHub Actions runs formatting, lint and build checks on push and pull requests targeting main.

Git Workflow
1. Create a feature branch.
2. Implement changes and commit.
3. Push the branch to GitHub.
4. Create a Pull Request.
5. Review and merge into main.

Definition of Ready (DoR)
- Requirements and acceptance criteria are clear.
- Scope, dependencies and risks are identified.
- Owner and priority are assigned.
- Required resources are available.

Definition of Done (DoD)
- Acceptance criteria are satisfied.
- Code is reviewed and tested.
- ESLint and Prettier checks pass.
- GitHub Actions checks pass.
- Pull Request is approved and merged.

Known Limitations
- Uses mock/local task data.
- No backend or database integration.
- No real authentication.

Developers
**Abdul Razaq:-github actions, ESlint, prettier, Husky,**
**Sravanthi:-Components Header,summarycard, app.css**
**Mohith:- data, index.css, index**
**Pavani:- Components filterbar, taskcard, git pr**,
**Raj kumar:- Pages, app.jsx, main.jsx**
