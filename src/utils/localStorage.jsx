const employees = [
  {
    "id": "E001",
    "firstName": "Rajesh",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare monthly report",
        "taskDescription": "Gather data for the monthly performance report and analyze trends.",
        "taskDate": "2025-01-12",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client onboarding",
        "taskDescription": "Assist in onboarding new clients and setup accounts.",
        "taskDate": "2025-01-08",
        "category": "Client Relations"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update website content",
        "taskDescription": "Revise outdated information on the company website.",
        "taskDate": "2025-01-15",
        "category": "Website Maintenance"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": "E002",
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Organize team meeting",
        "taskDescription": "Schedule and manage the weekly team meeting agenda.",
        "taskDate": "2025-01-11",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Submit financial documents",
        "taskDescription": "Prepare and submit all required financial documents for auditing.",
        "taskDate": "2025-01-07",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Research new technologies",
        "taskDescription": "Explore emerging technologies relevant to the industry.",
        "taskDate": "2025-01-18",
        "category": "Research"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": "E003",
    "firstName": "Anjali",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design marketing campaign",
        "taskDescription": "Develop a campaign strategy for upcoming product launch.",
        "taskDate": "2025-01-13",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Inventory review",
        "taskDescription": "Review and update inventory records.",
        "taskDate": "2025-01-09",
        "category": "Operations"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Draft team guidelines",
        "taskDescription": "Create a draft for new team workflow guidelines.",
        "taskDate": "2025-01-17",
        "category": "HR"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": "E004",
    "firstName": "Vikram",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer feedback analysis",
        "taskDescription": "Analyze customer feedback for service improvement.",
        "taskDate": "2025-01-14",
        "category": "Customer Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Database cleanup",
        "taskDescription": "Remove outdated records from the system database.",
        "taskDate": "2025-01-06",
        "category": "IT"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Security audit",
        "taskDescription": "Perform an internal security audit for all systems.",
        "taskDate": "2025-01-19",
        "category": "Security"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": "E005",
    "firstName": "Sneha",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare training material",
        "taskDescription": "Create comprehensive training materials for new hires.",
        "taskDate": "2025-01-16",
        "category": "Training"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Vendor communication",
        "taskDescription": "Follow up with vendors for pending orders.",
        "taskDate": "2025-01-10",
        "category": "Procurement"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Social media updates",
        "taskDescription": "Schedule and post updates on social media channels.",
        "taskDate": "2025-01-20",
        "category": "Social Media"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

const admin = [
  {
    "id": "A001",
    "firstName": "Ramesh",
    "email": "admin@example.com",
    "password": "123"
  }
];
 

  export const setLocalStorage = () =>{
       localStorage.setItem('employees',JSON.stringify(employees))
       localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage = () =>{
      const employees = JSON.parse(localStorage.getItem('employees'))
      const admin = JSON.parse(localStorage.getItem('admin'))

      return {employees,admin}
  }
   