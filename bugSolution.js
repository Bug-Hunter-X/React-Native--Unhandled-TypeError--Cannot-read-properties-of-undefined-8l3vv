import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('some-api-endpoint');
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>{data?.someProperty ?? 'Loading...'}</Text> {/* Safe access with optional chaining and default value */}
    </View>
  );
}

//Alternative solution using conditional rendering
// return (
//   <View>
//     {data ? <Text>{data.someProperty}</Text> : <Text>Loading...</Text>}
//   </View>
// );
