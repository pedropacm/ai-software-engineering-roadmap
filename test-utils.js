// Utilitários para testes de timeout
// Configurações de mocks e helpers

// Mock para simular timeout
jest.mock('./llm-timeout', () => ({
  default: jest.fn().mockImplementation(() => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  })
}));