import { saveToLocalStorage, loadFromLocalStorage } from './localStorageUtils';

describe('localStorageUtils', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('should save data to localStorage', () => {
    const key = 'testKey';
    const value = { test: 'data' };

    // Mock localStorage
    Storage.prototype.setItem = jest.fn();

    saveToLocalStorage(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });

  it('should load data from localStorage', () => {
    const key = 'testKey';
    const value = { test: 'data' };

    // Mock localStorage
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(value));

    const loadedValue = loadFromLocalStorage(key);

    expect(localStorage.getItem).toHaveBeenCalledWith(key);
    expect(loadedValue).toEqual(value);
  });

  it('should return null if the key does not exist in localStorage', () => {
    const key = 'nonExistentKey';

    // Mock localStorage
    Storage.prototype.getItem = jest.fn(() => null);

    const loadedValue = loadFromLocalStorage(key);

    expect(localStorage.getItem).toHaveBeenCalledWith(key);
    expect(loadedValue).toBeNull();
  });
});
