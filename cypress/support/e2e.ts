import './commands';

const showLastNCommandsLogOnly = Cypress.env('showLastNCommandsLogOnly');

if (showLastNCommandsLogOnly) {
  const app = window.top;
  if (app && !app.document.head.querySelector('.commands-container > .command')) {
    const style = app.document.createElement('style');
    style.innerHTML = `
      .commands-container > .command {
        display: none;
      }
      .commands-container > .command:nth-last-child(-n+${showLastNCommandsLogOnly}) {
        display: block;
      }`;
    app.document.head.appendChild(style);
  }
}

Cypress.on('uncaught:exception', () => {
  return false;
});
