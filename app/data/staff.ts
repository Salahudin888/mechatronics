export type StaffMember = {
  id: number;
  name: string;
  position: string;
  specialization: string;
  email: string;
  phone: string;
  image: string;
};

export const staff: StaffMember[] = [
  {
    id: 1,
    name: "Dr. Teacher Name",
    position: "Head of Department",
    specialization: "Mechatronics Engineering",
    email: "teacher1@wku.edu.et",
    phone: "+251 9XX XXX XXX",
    image: "/staff/teacher1.jpg",
  },

  {
    id: 2,
    name: "Teacher Name",
    position: "Assistant Professor",
    specialization: "Automation and Control",
    email: "teacher2@wku.edu.et",
    phone: "+251 9XX XXX XXX",
    image: "/staff/teacher2.jpg",
  },

  {
    id: 3,
    name: "Teacher Name",
    position: "Lecturer",
    specialization: "Robotics and Industrial Automation",
    email: "teacher3@wku.edu.et",
    phone: "+251 9XX XXX XXX",
    image: "/staff/teacher3.jpg",
  },

  {
    id: 4,
    name: "Teacher Name",
    position: "Lecturer",
    specialization: "Electrical and Electronic Systems",
    email: "teacher4@wku.edu.et",
    phone: "+251 9XX XXX XXX",
    image: "/staff/teacher4.jpg",
  },

  {
    id: 5,
    name: "Teacher Name",
    position: "Lecturer",
    specialization: "Mechanical Systems",
    email: "teacher5@wku.edu.et",
    phone: "+251 9XX XXX XXX",
    image: "/staff/teacher5.jpg",
  },

  {
    id: 6,
    name: "Teacher Name",
    position: "Technical Assistant",
    specialization: "Laboratory and Technical Support",
    email: "teacher6@wku.edu.et",
    phone: "+251 9XX XXX XXX",
    image: "/staff/teacher6.jpg",
  },
];