let bookings = [
    { date: '2024-07-15', time: '18:00', guests: 4, occasion: 'Birthday' },
    { date: '2024-07-16', time: '19:00', guests: 2, occasion: 'Anniversary' },
    // More initial data if needed
  ];
  
  export const fetchBookings = async () => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(bookings);
      }, 1000);
    });
  };
  
  export const addBooking = async (newBooking) => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        bookings.push(newBooking);
        resolve(newBooking);
      }, 1000);
    });
  };
  
  export const submitAPI = async (formData) => {
    // Simulate API submission delay
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Booking submitted:', formData);
        resolve(true); // Simulate successful submission
      }, 1000);
    });
  };
  
  // Mock fetchAPI function for testing purposes
export const fetchAPI = (date) => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};