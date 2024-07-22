import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from './api'

jest.mock('./api', () => ({
    fetchAPI: jest.fn(),
  }));


  describe('initializeTimes', () => {
    it('should initialize times with non-empty array', () => {
      fetchAPI.mockReturnValue(['17:00', '18:00', '19:00', '20:00', '21:00']);
      const initialTimes = initializeTimes();
      expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
    });
  });
  
  describe('updateTimes', () => {
    it('should update times based on the date in action', () => {
      fetchAPI.mockReturnValue(['17:00', '18:00', '19:00', '20:00', '21:00']);
      const action = { type: 'UPDATE_TIMES', date: '2023-07-15' };
      const updatedTimes = updateTimes([], action);
      expect(updatedTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
    });
  });