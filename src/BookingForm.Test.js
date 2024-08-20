import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    date: Yup.string().required('Please choose a date.'),
    time: Yup.string().required('Please choose a time.'),
    guests: Yup.number()
      .min(1, 'Please enter a number of guests between 1 and 10.')
      .max(10, 'Please enter a number of guests between 1 and 10.')
      .required('Please enter the number of guests.'),
    occasion: Yup.string().required('Please select an occasion.')
  });

test('Renders the BookingForm static text', () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const dispatch = jest.fn(); // Mock dispatch function
    
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    
    // Check for a static text in the BookingForm component
    const dateLabel = screen.getByLabelText("Choose date");
    expect(dateLabel).toBeInTheDocument();

    const timeLabel = screen.getByLabelText("Choose time");
    expect(timeLabel).toBeInTheDocument();
    
    const guestsLabel = screen.getByLabelText("Number of guests");
    expect(guestsLabel).toBeInTheDocument();
    
    const occasionLabel = screen.getByLabelText("Occasion");
    expect(occasionLabel).toBeInTheDocument();
    
    const submitButton = screen.getByText("Submit Reservation");
    expect(submitButton).toBeInTheDocument();
});

test('Submit form with valid data', () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const dispatch = jest.fn(); // Mock dispatch function
    
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    
    // Fill out the form with valid data
    fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '2024-07-15' } });
    fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: 'Birthday' } });

    // Simulate form submission
    fireEvent.click(screen.getByText("Submit Reservation"));

    // Add assertions based on expected outcomes of submission
    // For example, checking if the dispatch function was called with correct arguments
    expect(dispatch).toHaveBeenCalledWith({
        type: 'SUBMIT_BOOKING',
        payload: {
            date: '2024-07-15',
            time: '18:00',
            guests: 4,
            occasion: 'Birthday'
        }
    });
});

test('Submit form with invalid data', async () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const dispatch = jest.fn(); // Mock dispatch function
    
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    
    // Fill out the form with invalid data
    fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: '11' } });
    fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: '' } });

    // Simulate form submission
    fireEvent.click(screen.getByText("Submit Reservation"));

    // Check for validation error messages
    expect(await screen.findByText('Please choose a date.')).toBeInTheDocument();
    expect(await screen.findByText('Please choose a time.')).toBeInTheDocument();
    expect(await screen.findByText('Please enter a number of guests between 1 and 10.')).toBeInTheDocument();
    expect(await screen.findByText('Please select an occasion.')).toBeInTheDocument();
});

test('User input updates form values correctly', () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const dispatch = jest.fn(); // Mock dispatch function
    
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    
    // Simulate user input
    fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '2024-07-15' } });
    fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: 'Birthday' } });

    // Verify that input values have been updated correctly in the form
    expect(screen.getByLabelText("Choose date").value).toBe('2024-07-15');
    expect(screen.getByLabelText("Choose time").value).toBe('18:00');
    expect(screen.getByLabelText("Number of guests").value).toBe('4');
    expect(screen.getByLabelText("Occasion").value).toBe('Birthday');
});
