const day1 = new Date();
const day2 = new Date();

day1.setDate(day1.getDate() + 1);
day2.setDate(day2.getDate() + 2);

const Topics = [
    {
        id: 0,
        topic: "State and ownership",
        time: {
            from: "9:00 A.M.",
            to: "10:00 A.M.",
            date: day1.toDateString()
        },
        speaker: "Muia Muteti"
    },
    {
        id: 1,
        topic: "React Hooks",
        time: {
            from: "10:30 A.M.",
            to: "11:30 A.M.",
            date: day1.toDateString()
        },
        speaker: "Nancy Kasiva"
    },
    {
        id: 2,
        topic: "Context management",
        time: {
            from: "11:30 A.M.",
            to: "12:30 P.M.",
            date: day1.toDateString()
        },
        speaker: "Jimmy Alex"
    },
    {
        id: 3,
        topic: "React Native applications",
        time: {
            from: "9:00 A.M.",
            to: "10:00 A.M.",
            date: day2.toDateString()
        },
        speaker: "Felix Ngugi"
    },
    {
        id: 4,
        topic: "Jobs and internships",
        time: {
            from: "10:30 A.M.",
            to: "11:30 A.M.",
            date: day2.toDateString()
        },
        speaker: "Agnes Ndunge"
    },
];

export default Topics;