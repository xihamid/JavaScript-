const generateFakeData = () => {
    const data = [];
    for (let i = 1; i <= 100; i++) {
      const cgpa = (Math.random() * 1.5 + 2).toFixed(2); // Random CGPA between 2.0 and 3.5
      const enrollment_no = `F2022-${i.toString().padStart(3, '0')}`;
      data.push({ cgpa, enrollment_no });
    }
    return data;
  };

  // Sample data
  const data = generateFakeData();
//   console.log(data);

console.log(count(data.cgpa));