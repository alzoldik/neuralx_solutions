# NeuralX Solutions

This project is a React application built with Vite.

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages.

### Prerequisites

1.  **Create a GitHub Repository**:
    *   Go to [GitHub](https://github.com/new) and create a new public repository named `neuralx-solutions` (or whatever name you prefer).
    *   DO NOT initialize it with a README, .gitignore, or License (we already have them here).

2.  **Verify Configuration**:
    *   Open `vite.config.js` and ensure the `base` property matches your repository name.
        ```javascript
        base: '/your-repo-name/',
        ```
        *Default is configured for `/neuralx-solutions/`.*

### Deployment Steps

1.  **Initialize Git (if not already done)**:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Link to GitHub**:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/neuralx-solutions.git
    git branch -M main
    git push -u origin main
    ```

3.  **Deploy**:
    ```bash
    npm run deploy
    ```
    This command will build the project and push the `dist` folder to the `gh-pages` branch.

4.  **Activate Pages**:
    *   Go to your repository **Settings** > **Pages**.
    *   Ensure the source is set to **Deploy from a branch**.
    *   Select the `gh-pages` branch and `/ (root)` folder.
    *   Save.

Your site should now be live at `https://YOUR_USERNAME.github.io/neuralx-solutions/`.
