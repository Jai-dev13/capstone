import { updateTimes, initializeTimes } from '../timeManagement';

// Import test setup
import './setupTests';

describe('Time Management Functions', () => {
    beforeEach(() => {
        // Clear mock function calls before each test
        window.fetchAPI.mockClear();
    });

    test('initializeTimes calls fetchAPI and returns available times for today', () => {
        const result = initializeTimes();
        
        // Verify fetchAPI was called
        expect(window.fetchAPI).toHaveBeenCalled();
        
        // Verify the result matches the mock data
        expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
        expect(result.length).toBe(5);
        
        // Verify fetchAPI was called with today's date
        const today = new Date().toISOString().split('T')[0];
        expect(window.fetchAPI).toHaveBeenCalledWith(today);
    });

    test('updateTimes calls fetchAPI with the selected date', () => {
        const selectedDate = '2024-03-25';
        const currentState = ['17:00', '18:00', '19:00'];
        
        const newState = updateTimes(currentState, { 
            type: 'UPDATE_TIMES', 
            payload: selectedDate 
        });
        
        // Verify fetchAPI was called with the selected date
        expect(window.fetchAPI).toHaveBeenCalledWith(selectedDate);
        
        // Verify the result matches the mock data
        expect(newState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
    });

    test('updateTimes returns current state for invalid action type', () => {
        const currentState = ['17:00', '18:00', '19:00'];
        const newState = updateTimes(currentState, { type: 'INVALID_ACTION' });
        
        // Verify fetchAPI was not called
        expect(window.fetchAPI).not.toHaveBeenCalled();
        
        // Verify state remains unchanged
        expect(newState).toBe(currentState);
    });
});
