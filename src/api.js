export const sendDataToApi = async (data) => {
  try {
    const jsonData = JSON.stringify(data);

    const response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
  } catch (error) {
    console.error('API error:', error);
  }
};
