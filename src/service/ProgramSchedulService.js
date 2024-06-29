/* eslint-disable no-unused-vars */
export const ProgramScheduleService = {
  programScheduleData: {
    programs: [
      {
        name: 'Computer Science',
        code: 'CS',
        exams: [
          {
            examType: 'Midterm',
            assignedRoom: 'Room 201',
            schedule: 'Monday, 8:00 AM',
            time: '1 hour'
          },
          {
            examType: 'Quiz',
            assignedRoom: 'Computer Lab',
            schedule: 'Wednesday, 10:00 AM',
            time: '30 minutes'
          },
          {
            examType: 'Math Test',
            assignedRoom: 'Room 112',
            schedule: 'Friday, 2:00 PM',
            time: '50 minutes'
          },
          {
            examType: 'Chemistry Lab Practical',
            assignedRoom: 'Science Lab B',
            schedule: 'Monday, Next Week, 1:00 PM',
            time: '2 hours 30 minutes'
          },
          {
            examType: 'Take-Home Exam',
            assignedRoom: 'N/A',
            schedule: 'Due Wednesday, End of Day',
            time: '48 hours'
          }
        ]
      },
      {
        name: 'Information Technology',
        code: 'IT',
        exams: [
          {
            examType: 'Final',
            assignedRoom: 'Room 305',
            schedule: 'Tuesday, 1:00 PM',
            time: '2 hours'
          },
          {
            examType: 'History Essay',
            assignedRoom: 'Library',
            schedule: 'Saturday, 9:00 AM',
            time: '2 hours'
          },
          {
            examType: 'Oral Exam',
            assignedRoom: "Professor's Office",
            schedule: 'Thursday, By Appointment',
            time: 'Varies'
          }
        ]
      },
      {
        name: 'Information System',
      code: 'IS',
        exams: [
          {
            examType: 'Group Project Presentation',
            assignedRoom: 'Auditorium',
            schedule: 'Tuesday, Next Week, 10:00 AM',
            time: '15 minutes per group'
          },
          {
            examType: 'Online Quiz',
            assignedRoom: 'N/A (Accessible from home)',
            schedule: 'Opens Friday, Closes Sunday',
            time: '72 hours'
          },
          {
            examType: 'Poetry Analysis (written)',
            assignedRoom: 'Assigned in class (students can choose a location)',
            schedule: 'Monday, In-class',
            time: '1 hour'
          },
          {
            examType: 'Short Story Reading Comprehension (written)',
            assignedRoom: 'Assigned in class (students can choose a location)',
            schedule: 'Wednesday, In-class',
            time: '45 minutes'
          },
          {
            examType: 'Literature Review Essay',
            assignedRoom: 'N/A (submitted electronically)',
            schedule: 'Due Friday, 11:59 PM',
            time: '1 week'
          },
          {
            examType: 'Class Participation (ongoing)',
            assignedRoom: 'N/A',
            schedule: 'Throughout the semester',
            time: 'N/A (participation is tracked in class discussions)'
          },
          {
            examType: 'Book Report Presentation (optional)',
            assignedRoom: 'Assigned during class presentations (students can choose a format)',
            schedule: 'Throughout the semester (students choose a presentation date)',
            time: '5-10 minutes per presentation'
          }
        ]
      }
    ]
  },

  getProgramSchedules() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.programScheduleData)
      }, 1000)
    })
  }
}
