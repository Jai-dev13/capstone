import { fetchAPI, submitAPI } from '../api';

jest.mock('../api', () => ({
    fetchAPI: jest.fn((date) => ['17:00', '18:00', '19:00', '20:00', '21:00']),
    submitAPI: jest.fn((formData) => true)
}));
