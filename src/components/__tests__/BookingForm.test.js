import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from '../BookingForm';

// Import test setup
import '../../utils/__tests__/setupTests';

describe('BookingForm', () => {
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();
    const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const today = new Date().toISOString().split('T')[0];

    beforeEach(() => {
        mockDispatch.mockClear();
        mockSubmitForm.mockClear();
    });

    describe('HTML5 Validation Attributes', () => {
        test('Date input has required attributes', () => {
            render(
                <BookingForm 
                    availableTimes={mockAvailableTimes} 
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            );
            
            const dateInput = screen.getByLabelText(/choose date/i);
            expect(dateInput).toHaveAttribute('type', 'date');
            expect(dateInput).toHaveAttribute('required');
            expect(dateInput).toHaveAttribute('min', today);
        });

        test('Number of guests input has correct constraints', () => {
            render(
                <BookingForm 
                    availableTimes={mockAvailableTimes} 
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            );
            
            const guestsInput = screen.getByLabelText(/number of guests/i);
            expect(guestsInput).toHaveAttribute('type', 'number');
            expect(guestsInput).toHaveAttribute('min', '1');
            expect(guestsInput).toHaveAttribute('max', '10');
            expect(guestsInput).toHaveAttribute('required');
        });

        test('Time select has required attribute', () => {
            render(
                <BookingForm 
                    availableTimes={mockAvailableTimes} 
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            );
            
            const timeSelect = screen.getByLabelText(/choose time/i);
            expect(timeSelect).toHaveAttribute('required');
        });

        test('Occasion select has required attribute', () => {
            render(
                <BookingForm 
                    availableTimes={mockAvailableTimes} 
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            );
            
            const occasionSelect = screen.getByLabelText(/occasion/i);
            expect(occasionSelect).toHaveAttribute('required');
        });
    });

    describe('JavaScript Validation', () => {
        test('Shows error for past date', () => {
            render(
                <BookingForm 
                    availableTimes={mockAvailableTimes} 
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            );
            
            const pastDate = '2023-01-01';
            fireEvent.change(screen.getByLabelText(/choose date/i), {
                target: { value: pastDate }
            });

            expect(screen.getByText(/date cannot be in the past/i)).toBeInTheDocument();
            expect(screen.getByRole('button')).toBeDisabled();
        });

        test('Shows error for invalid number of guests', () => {
            render(
                <BookingForm 
                    availableTimes={mockAvailableTimes} 
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            );
            
            fireEvent.change(screen.getByLabelText(/number of guests/i), {
                target: { value: '11' }
            });

            expect(screen.getByText(/maximum 10 guests allowed/i)).toBeInTheDocument();
            expect(screen.getByRole('button')).toBeDisabled();
        });

        test('Form is valid with correct inputs', () => {
            render(
                <BookingForm 
                    availableTimes={mockAvailableTimes} 
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            );
            
            // Fill form with valid data
            fireEvent.change(screen.getByLabelText(/choose date/i), {
                target: { value: '2024-12-25' }
            });
            fireEvent.change(screen.getByLabelText(/number of guests/i), {
                target: { value: '4' }
            });

            // Check no error messages are shown
            expect(screen.queryByText(/date cannot be in the past/i)).not.toBeInTheDocument();
            expect(screen.queryByText(/maximum 10 guests allowed/i)).not.toBeInTheDocument();
            expect(screen.getByRole('button')).not.toBeDisabled();
        });
    });

    describe('Form Submission', () => {
        test('Prevents submission with invalid data', () => {
            render(
                <BookingForm 
                    availableTimes={mockAvailableTimes} 
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            );
            
            // Set invalid data
            fireEvent.change(screen.getByLabelText(/choose date/i), {
                target: { value: '2023-01-01' }
            });

            // Try to submit
            fireEvent.submit(screen.getByRole('button'));
            
            expect(mockSubmitForm).not.toHaveBeenCalled();
        });

        test('Submits with valid data', () => {
            render(
                <BookingForm 
                    availableTimes={mockAvailableTimes} 
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            );
            
            // Fill form with valid data
            fireEvent.change(screen.getByLabelText(/choose date/i), {
                target: { value: '2024-12-25' }
            });
            fireEvent.change(screen.getByLabelText(/number of guests/i), {
                target: { value: '4' }
            });
            fireEvent.change(screen.getByLabelText(/occasion/i), {
                target: { value: 'Birthday' }
            });

            // Submit form
            fireEvent.submit(screen.getByRole('button'));
            
            expect(mockSubmitForm).toHaveBeenCalledWith({
                date: '2024-12-25',
                time: '17:00',
                guests: 4,
                occasion: 'Birthday'
            });
        });
    });
});
