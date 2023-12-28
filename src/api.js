export const sendDataToApi = async (data) => {
  try {
    const jsonData = JSON.stringify(data);

    const response = await fetch('http://localhost:7000/users', {
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
    console.log('API response:', responseData);
  } catch (error) {
    console.error('API error:', error);
  }
};

export const sendConnectionDataToApi = async (data) => {
  try {
    const connData = JSON.stringify(data);

    const response = await fetch('http://localhost:7001/connection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: connData,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    console.log('API response:', responseData);
  } catch (error) {
    console.error('API error:', error);
  }
};
