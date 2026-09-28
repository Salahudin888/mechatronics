export type Course = {
    code: string;
    title: string;
    credit: number | "P/F";
    ects: number | null;
    prerequisite: string;
};

export const curriculum: Record<
    number,
    Record<number, Course[]>
> = {
    // ============================================================
    // YEAR I
    // ============================================================

    1: {
        // ---------------- SEMESTER I ----------------
        1: [
            {
                code: "Math 1011",
                title: "Mathematics for Natural Sciences",
                credit: 3,
                ects: 5,
                prerequisite: "None",
            },
            {
                code: "Psch 1011",
                title: "General Psychology",
                credit: 3,
                ects: 5,
                prerequisite: "None",
            },
            {
                code: "Phys 1011",
                title: "General Physics",
                credit: 3,
                ects: 4,
                prerequisite: "None",
            },
            {
                code: "SpSc 1011",
                title: "Physical Fitness",
                credit: "P/F",
                ects: null,
                prerequisite: "None",
            },
            {
                code: "GeSc 1011",
                title: "Geography of Ethiopia and The Horn",
                credit: 3,
                ects: 5,
                prerequisite: "None",
            },
            {
                code: "FLEn 1011",
                title: "Communicative English Language Skills",
                credit: 3,
                ects: 5,
                prerequisite: "None",
            },
            {
                code: "LoCT",
                title: "Critical Thinking",
                credit: 3,
                ects: 4,
                prerequisite: "None",
            },
        ],

        // ---------------- SEMESTER II ----------------
        2: [
            {
                code: "FLEn 1012",
                title: "Communicative English Language Skills II",
                credit: 3,
                ects: 5,
                prerequisite: "None",
            },
            {
                code: "Anth 1012",
                title: "Social Anthropology",
                credit: 2,
                ects: 3,
                prerequisite: "None",
            },
            {
                code: "Math 1041",
                title: "Applied Mathematics",
                credit: 3,
                ects: 6,
                prerequisite: "None",
            },
            {
                code: "Hist 1012",
                title: "History of Ethiopia and the Horn",
                credit: 3,
                ects: 5,
                prerequisite: "None",
            },
            {
                code: "EmTe 1012",
                title: "Introduction to Emerging Technologies",
                credit: 3,
                ects: 5,
                prerequisite: "None",
            },
            {
                code: "Ecob-1011",
                title: "Economics",
                credit: 2,
                ects: 3,
                prerequisite: "None",
            },
            {
                code: "EcEng 1052",
                title: "Computer Programming",
                credit: 3,
                ects: 5,
                prerequisite: "None",
            },
        ],
    },

    // ============================================================
    // YEAR II
    // ============================================================

    2: {
        // ---------------- SEMESTER I ----------------
        1: [
            {
                code: "EnEd 1012",
                title: "Inclusive Education",
                credit: 2,
                ects: 4,
                prerequisite: "None",
            },
            {
                code: "Math 1052",
                title: "Applied Mathematics II",
                credit: 4,
                ects: 6,
                prerequisite: "Applied Mathematics I",
            },
            {
                code: "Stat 2031",
                title: "Probability and Statistics",
                credit: 2,
                ects: 4,
                prerequisite: "None",
            },
            {
                code: "MEng 2031",
                title: "Engineering Drawing",
                credit: 3,
                ects: 5,
                prerequisite: "None",
            },
            {
                code: "EcEng 2041",
                title: "Basic Electricity & Electronics",
                credit: 3,
                ects: 5,
                prerequisite: "None",
            },
            {
                code: "CEng 2033",
                title: "Engineering Mechanics I - Statics",
                credit: 3,
                ects: 5,
                prerequisite: "Applied Mathematics I",
            },
            {
                code: "GlTr 1012",
                title: "Global Trends",
                credit: 2,
                ects: 4,
                prerequisite: "None",
            },
        ],

        // ---------------- SEMESTER II ----------------
        2: [
            {
                code: "McEng 2022",
                title: "Object Oriented Programming with Python",
                credit: 3,
                ects: 5,
                prerequisite: "Computer Programming",
            },
            {
                code: "MEng 2032",
                title: "Engineering Mechanics II - Dynamics",
                credit: 3,
                ects: 5,
                prerequisite:
                    "Engineering Mechanics I & Applied Mathematics I, II",
            },
            {
                code: "Math 2012",
                title: "Applied Mathematics III",
                credit: 4,
                ects: 6,
                prerequisite: "Applied Mathematics II",
            },
            {
                code: "McEng 2034",
                title: "Smart and Functional Material",
                credit: 3,
                ects: 5,
                prerequisite: "None",
            },
            {
                code: "McEng 2038",
                title: "Machine Drawing with CAD",
                credit: 3,
                ects: 6,
                prerequisite: "Engineering Drawing",
            },
            {
                code: "McEng 2036",
                title: "Workshop Technology",
                credit: 2,
                ects: 3,
                prerequisite: "None",
            },
            {
                code: "EcEng 2042",
                title: "Electrical Engineering Laboratory",
                credit: 2,
                ects: 3,
                prerequisite: "Basic Electricity & Electronics",
            },
        ],
    },

    // ============================================================
    // YEAR III
    // ============================================================

    3: {
        // ---------------- SEMESTER I ----------------
        1: [
            {
                code: "McEng 3041",
                title: "Analog and Digital Electronics",
                credit: 3,
                ects: 5,
                prerequisite: "Basic Electricity & Electronics",
            },
            {
                code: "McEng 3031",
                title: "Strength of Materials",
                credit: 3,
                ects: 5,
                prerequisite:
                    "Engineering Mechanics I, Smart and Functional Material",
            },
            {
                code: "Math 3011",
                title: "Numerical Methods & Analysis with Matlab for Engineers",
                credit: 3,
                ects: 6,
                prerequisite:
                    "Computer Programming & Applied Mathematics III",
            },
            {
                code: "McEng 3061",
                title: "CNC Technology",
                credit: 3,
                ects: 5,
                prerequisite: "Workshop Technology",
            },
            {
                code: "McEng 3033",
                title: "Applied Thermodynamics",
                credit: 3,
                ects: 5,
                prerequisite: "Applied Mathematics I",
            },
            {
                code: "McEng 3021",
                title: "Algorithm and Data Structure",
                credit: 2,
                ects: 3,
                prerequisite:
                    "Computer Programming, Object Oriented Programming with Python",
            },
            {
                code: "McEng 3063",
                title: "Principles of CAE (CAD/CAM)",
                credit: 3,
                ects: 5,
                prerequisite: "Machine Drawing with CAD",
            },
        ],

        // ---------------- SEMESTER II ----------------
        2: [
            {
                code: "McEng 3052",
                title: "Regulation and Control System",
                credit: 3,
                ects: 4,
                prerequisite: "Applied Mathematics III",
            },
            {
                code: "McEng 3032",
                title: "Mechanics of Machinery",
                credit: 3,
                ects: 5,
                prerequisite: "Engineering Mechanics II",
            },
            {
                code: "McEng 3062",
                title: "Sensor and Actuator",
                credit: 2,
                ects: 3,
                prerequisite: "Analog and Digital Electronics",
            },
            {
                code: "EcEng 3042",
                title: "Electrical Machines and Drives",
                credit: 3,
                ects: 5,
                prerequisite: "Basic Electricity and Electronics",
            },
            {
                code: "McEng 3034",
                title: "Machine Elements",
                credit: 3,
                ects: 5,
                prerequisite: "Strength of Materials",
            },
            {
                code: "McEng 3064",
                title: "Instrumentation and Measurement",
                credit: 3,
                ects: 5,
                prerequisite:
                    "Basic Electricity and Electronics, Sensor and Actuator (Co-requisite)",
            },
            {
                code: "McEng 3066",
                title: "Mechatronics Lab-I",
                credit: 2,
                ects: 3,
                prerequisite:
                    "Basic Electricity and Electronics, Sensor and Actuator",
            },
            {
                code: "McEng 3044",
                title: "Industrial Power Electronics & Applications",
                credit: 2,
                ects: 3,
                prerequisite: "Electrical Machines and Drives (Co-requisite)",
            },
        ],
    },

    // ============================================================
    // YEAR IV
    // ============================================================

    4: {
        // ---------------- SEMESTER I ----------------
        1: [
            {
                code: "McEng 4061",
                title: "Mechatronics System Design",
                credit: 2,
                ects: 4,
                prerequisite:
                    "Sensor and Actuator, Mechanics of Machinery, Regulation and Control System",
            },
            {
                code: "McEng 4021",
                title: "Data Communication and Computer Networks",
                credit: 3,
                ects: 5,
                prerequisite: "Object Oriented Programming with Python",
            },
            {
                code: "McEng 4063",
                title: "Introduction to Digital Manufacturing and Smart Production",
                credit: 2,
                ects: 4,
                prerequisite:
                    "Industrial Power Electronics & Applications, Mechanics of Machinery",
            },
            {
                code: "McEng 4041",
                title: "Signal and Systems",
                credit: 3,
                ects: 5,
                prerequisite:
                    "Analog and Digital Electronics, Probability and Statistics",
            },
            {
                code: "McEng 4067",
                title: "Mechatronics Lab II",
                credit: 3,
                ects: 5,
                prerequisite: "Mechatronics Lab-I",
            },
            {
                code: "McEng 4065",
                title: "Applied Pneumatics and Hydraulics",
                credit: 3,
                ects: 5,
                prerequisite:
                    "Applied Thermodynamics, Sensor and Actuator",
            },
            {
                code: "McEng 4051",
                title: "PLC and SCADA Control System",
                credit: 3,
                ects: 5,
                prerequisite:
                    "Computer Programming, Analog & Digital Electronics",
            },
        ],

        // ---------------- SEMESTER II ----------------
        2: [
            {
                code: "McEng 4062",
                title: "Research Methods and Presentation",
                credit: 2,
                ects: 3,
                prerequisite: "None",
            },
            {
                code: "McEng 4052",
                title: "Introduction to Artificial Intelligence and Machine Learning",
                credit: 3,
                ects: 5,
                prerequisite:
                    "Object Oriented Programming with Python, Probability and Statistics",
            },
            {
                code: "McEng 4060",
                title: "Applied Embedded System",
                credit: 3,
                ects: 5,
                prerequisite:
                    "Sensors and Actuator, Instrumentation and Measurement, Computer Programming",
            },
            {
                code: "McEng 4066",
                title: "Mechatronics Lab-III",
                credit: 3,
                ects: 5,
                prerequisite: "Mechatronics Lab-II",
            },
            {
                code: "McEng 4032",
                title: "Mechatronic Systems Reliability & Maintenance",
                credit: 2,
                ects: 3,
                prerequisite: "Mechatronics Lab-II",
            },
            {
                code: "McEng 4068",
                title: "Mechatronics System Design Project",
                credit: 3,
                ects: 5,
                prerequisite: "Mechatronics System Design",
            },
            {
                code: "McEng 4054",
                title: "Introduction to Robotics",
                credit: 3,
                ects: 5,
                prerequisite: "Mechatronics System Design",
            },
        ],
    },

    // ============================================================
    // YEAR V
    // ============================================================

    5: {
        // ---------------- SEMESTER I ----------------
        1: [
            {
                code: "McEng 5061",
                title: "Industrial Internship",
                credit: 15,
                ects: 30,
                prerequisite: "Senior standing",
            },
        ],

        // ---------------- SEMESTER II ----------------
        2: [
            {
                code: "McEng 5062",
                title: "Principle of Innovation & Entrepreneurship",
                credit: 2,
                ects: 3,
                prerequisite: "None",
            },
            {
                code: "McEng 5032",
                title: "Industrial Management & Engineering Economics",
                credit: 3,
                ects: 5,
                prerequisite: "Economics",
            },
            {
                code: "McEng 507x",
                title: "Elective",
                credit: 2,
                ects: 3,
                prerequisite: "None",
            },
            {
                code: "McEng 5060",
                title: "Mechatronics Lab IV",
                credit: 3,
                ects: 5,
                prerequisite:
                    "Applied Pneumatics and Hydraulics, Mechatronics Lab III",
            },
            {
                code: "McEng 5064",
                title: "Mechatronics Lab V",
                credit: 3,
                ects: 5,
                prerequisite:
                    "PLC & SCADA, Introduction to Robotics, Mechatronics Lab III",
            },
            {
                code: "McEng 5066",
                title: "Bachelor Thesis",
                credit: 6,
                ects: 12,
                prerequisite: "Senior standing",
            },
            {
                code: "McEng 5068",
                title: "Exit Exam",
                credit: "P/F",
                ects: null,
                prerequisite:
                    "All Mechatronics Engineering Course and BSc Thesis",
            },
        ],
    },
};