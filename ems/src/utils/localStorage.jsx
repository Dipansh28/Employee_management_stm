
const employees = [

  {
    "id": "1",
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "taskTitle": "Title: Fix Monthly Report Bug",
        "taskDescription": "Description: Complete the monthly report and resolve pending issues.",
        "taskDate": "2024-12-01",
        "taskCategory": "Category: Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Title: Attend Code Review Meeting",
        "taskDescription": "Description: Attend the team meeting to finalize code quality standards.",
        "taskDate": "2024-12-02",
        "taskCategory": "Category: Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Title: Update Documentation for API",
        "taskDescription": "Description: Update project documentation to include the latest API changes.",
        "taskDate": "2024-12-03",
        "taskCategory": "Category: Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": "2",
    "firstName": "Vivaan",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "taskTitle": "Title: Code Review Backend Logic",
        "taskDescription": "Description: Review code changes and suggest improvements for backend logic.",
        "taskDate": "2024-12-01",
        "taskCategory": "Category: Code Review",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Title: Prepare Frontend Demo",
        "taskDescription": "Description: Prepare for client presentation by building a responsive frontend demo.",
        "taskDate": "2024-12-02",
        "taskCategory": "Category: Client Work",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Title: Organize Logs for Debugging",
        "taskDescription": "Description: Organize files for audit to help debug system issues.",
        "taskDate": "2024-12-03",
        "taskCategory": "Category: Administrative",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": "3",
    "firstName": "Advika",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "taskTitle": "Title: Plan DevOps Workflow",
        "taskDescription": "Description: Plan team outing while creating efficient DevOps workflows.",
        "taskDate": "2024-12-01",
        "taskCategory": "Category: Planning",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Title: Draft Sprint Goals",
        "taskDescription": "Description: Draft quarterly goals to align with company strategies and plans.",
        "taskDate": "2024-12-02",
        "taskCategory": "Category: Strategy",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Title: Check Server Crash Logs",
        "taskDescription": "Description: Check server logs to identify and resolve recurring issues.",
        "taskDate": "2024-12-03",
        "taskCategory": "Category: IT Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": "4",
    "firstName": "Ishaan",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "taskTitle": "Title: Compile Sales Pipeline Data",
        "taskDescription": "Description: Compile sales data for analysis to improve future strategies.",
        "taskDate": "2024-12-01",
        "taskCategory": "Category: Sales",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Title: Test New CI/CD Pipeline",
        "taskDescription": "Description: Test new software features to ensure seamless deployments.",
        "taskDate": "2024-12-02",
        "taskCategory": "Category: Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Title: Respond to Bug Tickets",
        "taskDescription": "Description: Respond to client emails by addressing critical bug reports.",
        "taskDate": "2024-12-03",
        "taskCategory": "Category: Client Communication",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": "5",
    "firstName": "Diya",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "taskTitle": "Title: Review Finance App Logic",
        "taskDescription": "Description: Review financial statements to verify logic in the app.",
        "taskDate": "2024-12-01",
        "taskCategory": "Category: Finance",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Title: Plan Marketing Automation Campaign",
        "taskDescription": "Description: Plan marketing campaign for automation using targeted strategies.",
        "taskDate": "2024-12-02",
        "taskCategory": "Category: Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Title: Train New Interns on Git",
        "taskDescription": "Description: Train new interns to efficiently use Git for version control.",
        "taskDate": "2024-12-03",
        "taskCategory": "Category: Training",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }  

];

const admin = [
  {
    "id": 1,
    "firstName": "Raja",
    "email": "admin@example.com",
    "password": "123",
  },
];


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
