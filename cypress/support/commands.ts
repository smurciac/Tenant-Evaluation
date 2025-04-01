declare global {
  namespace Cypress {
    interface ResolvedConfigOptions {
      showLastNCommandsLogOnly?: number;
    }
  }
}
