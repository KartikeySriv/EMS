localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Prepare Report",
        "taskDescription": "Compile Q1 financial data.",
        "taskDate": "2024-01-15",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Weekly sync-up with team.",
        "taskDate": "2024-01-16",
        "category": "Management",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Call",
        "taskDescription": "Discuss project requirements.",
        "taskDate": "2024-01-17",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstname": "Vihaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review the codebase for errors.",
        "taskDate": "2024-01-15",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Update Documentation",
        "taskDescription": "Update project wiki.",
        "taskDate": "2024-01-16",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Debug Issues",
        "taskDescription": "Resolve reported bugs.",
        "taskDate": "2024-01-18",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstname": "Ishaan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Market Analysis",
        "taskDescription": "Research industry trends.",
        "taskDate": "2024-01-14",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Customer Survey",
        "taskDescription": "Conduct satisfaction surveys.",
        "taskDate": "2024-01-15",
        "category": "Marketing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Campaign Planning",
        "taskDescription": "Plan next quarter campaigns.",
        "taskDate": "2024-01-20",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Budget Allocation",
        "taskDescription": "Allocate marketing budget.",
        "taskDate": "2024-01-22",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstname": "Arjun",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Inventory Check",
        "taskDescription": "Verify stock levels.",
        "taskDate": "2024-01-13",
        "category": "Logistics",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Vendor Meeting",
        "taskDescription": "Negotiate pricing terms.",
        "taskDate": "2024-01-15",
        "category": "Logistics",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Order Fulfillment",
        "taskDescription": "Ensure timely delivery.",
        "taskDate": "2024-01-18",
        "category": "Operations",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstname": "Aditya",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "IT Maintenance",
        "taskDescription": "System updates and backups.",
        "taskDate": "2024-01-12",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Cybersecurity Audit",
        "taskDescription": "Check security protocols.",
        "taskDate": "2024-01-14",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Onboarding Support",
        "taskDescription": "Setup new user accounts.",
        "taskDate": "2024-01-15",
        "category": "Support",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Server Migration",
        "taskDescription": "Migrate to new server architecture.",
        "taskDate": "2024-01-20",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  
  return { employees, admin };
}
