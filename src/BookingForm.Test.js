import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

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
