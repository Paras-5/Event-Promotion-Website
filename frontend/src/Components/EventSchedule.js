const EventSchedule = () => {
    const schedule = [
      { date: "2025-01-10", topic: "Water Security", speaker: "Dr. Jane Smith" },
      { date: "2025-01-11", topic: "Energy Conservation", speaker: "John Doe" },
      // Add more events
    ];
  
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Event Schedule</h2>
        <ul className="space-y-4">
          {schedule.map((item, index) => (
            <li key={index} className="bg-gray-50 p-4 rounded shadow-md">
              <p className="font-bold">{item.date}</p>
              <p className="text-gray-600">{item.topic} by {item.speaker}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  };

  
export default EventSchedule