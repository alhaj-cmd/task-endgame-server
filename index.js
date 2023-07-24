const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const users = [
    {
        "college_name": "ABC College",
        "image": "https://img.freepik.com/free-psd/photo-frames-mock-up-design_1297-39.jpg?size=626&ext=jpg&ga=GA1.1.1132668939.1664394842&semt=ais",
        "admission_dates": {
          "fall": "September 1, 2023",
          "spring": "January 15, 2024",
          "summer": "May 10, 2024"
        },
        "events": [
          {
            "event_name": "Orientation Day",
            "date": "August 28, 2023",
            "location": "Main Auditorium"
          },
        ],
        "research": [
          {
            "project_title": "Advancements in Renewable Energy",
            "faculty_lead": "Dr. Jane Doe",
            "description": "Exploring new technologies for sustainable energy."
          },
        ],
        "sports": [
          {
            "sport_name": "Football",
            "coach": "Coach Alex Johnson",
            "practice_schedule": "Mondays and Wednesdays, 4:00 PM - 6:00 PM",
            "home_ground": "College Stadium"
          },
        ]
      },
      {
        "college_name": "Dhaka College",
        "image": "https://img.freepik.com/premium-photo/education-concept-collage-with-many-pictures-students-college-university-high-school_380164-99198.jpg?size=626&ext=jpg&ga=GA1.1.1132668939.1664394842&semt=ais",
        "admission_dates": {
          "fall": "September 1, 2023",
          "spring": "January 15, 2024",
          "summer": "May 10, 2024"
        },
        "events": [
          {
            "event_name": "Career Fair",
            "date": "October 12, 2023",
            "location": "Student Center"
          },
        ],
        "research": [
          {
            "project_title": "AI for Healthcare",
            "faculty_lead": "Prof. John Smith",
            "description": "Applying AI to improve medical diagnosis and treatment."
          }
        ],
        "sports": [
          {
            "sport_name": "Basketball",
            "coach": "Coach Sarah Wilson",
            "practice_schedule": "Tuesdays and Thursdays, 3:30 PM - 5:30 PM",
            "home_ground": "Sports Complex"
          }
        ]
      },
      {
        "college_name": "Dhaka College",
        "image": "https://img.freepik.com/free-vector/grunge-frames-template_23-2147490972.jpg?size=626&ext=jpg&ga=GA1.1.1132668939.1664394842&semt=ais",
        "admission_dates": {
          "fall": "September 1, 2023",
          "spring": "January 15, 2024",
          "summer": "May 10, 2024"
        },
        "events": [
          {
            "event_name": "Career Fair",
            "date": "October 12, 2023",
            "location": "Student Center"
          },
        ],
        "research": [
          {
            "project_title": "AI for Healthcare",
            "faculty_lead": "Prof. John Smith",
            "description": "Applying AI to improve medical diagnosis and treatment."
          }
        ],
        "sports": [
          {
            "sport_name": "Basketball",
            "coach": "Coach Sarah Wilson",
            "practice_schedule": "Tuesdays and Thursdays, 3:30 PM - 5:30 PM",
            "home_ground": "Sports Complex"
          }
        ]
      },

      {
        "college_name": "Sylet College",
        "image": "https://img.freepik.com/free-vector/background-with-white-squares_23-2147500538.jpg?size=626&ext=jpg&ga=GA1.1.1132668939.1664394842&semt=ais",
        "admission_dates": {
          "fall": "September 1, 2023",
          "spring": "January 15, 2024",
          "summer": "May 10, 2024"
        },
        "events": [
          {
            "event_name": "Cultural Fest",
            "date": "March 3, 2024",
            "location": "Outdoor Amphitheater"
          }
        ],
        "research": [
          {
            "project_title": "Advancements in Renewable Energy",
            "faculty_lead": "Dr. Jane Doe",
            "description": "Exploring new technologies for sustainable energy."
          }
        ],
        "sports": [
          {
            "sport_name": "Basketball",
            "coach": "Coach Sarah Wilson",
            "practice_schedule": "Tuesdays and Thursdays, 3:30 PM - 5:30 PM",
            "home_ground": "Sports Complex"
          }
        ]
      }
      
      
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`Server is running on PORT : ${port}`)
})