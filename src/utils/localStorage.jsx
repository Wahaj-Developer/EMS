

const employees = [
  {
    id: 1,
    firstname: "Arjun",
    email: "e@e.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Client Website",
        description: "Fix layout issues on the client's homepage.",
        date: "2025-06-11",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write Weekly Report",
        description: "Summarize weekly progress for the team.",
        date: "2025-06-09",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy to Production",
        description: "Release version 1.2.0 to live server.",
        date: "2025-06-08",
        category: "Deployment"
      }
    ]
  },
  {
    id: 2,
    firstname: "Ravi",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Landing Page",
        description: "Create a responsive design for the product landing page.",
        date: "2025-06-11",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Meeting",
        description: "Attend daily stand-up meeting.",
        date: "2025-06-10",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Bug Fixes",
        description: "Resolve high-priority bugs reported by QA.",
        date: "2025-06-07",
        category: "Bug Fixing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "SEO Optimization",
        description: "Improve page ranking through keyword optimization.",
        date: "2025-06-11",
        category: "Marketing"
      }
    ]
  },
  {
    id: 3,
    firstname: "Amit",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Backup",
        description: "Perform a full backup of the production database.",
        date: "2025-06-11",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "System Monitoring",
        description: "Check server health and performance metrics.",
        date: "2025-06-10",
        category: "IT Support"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Security Patch",
        description: "Apply critical security patches.",
        date: "2025-06-09",
        category: "Security"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Network Audit",
        description: "Audit internal network for bottlenecks.",
        date: "2025-06-11",
        category: "Networking"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Review merge requests from team members.",
        date: "2025-06-08",
        category: "Code Review"
      }
    ]
  },
  {
    id: 4,
    firstname: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Presentation",
        description: "Prepare slides for upcoming client meeting.",
        date: "2025-06-11",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Feedback",
        description: "Compile feedback received from users.",
        date: "2025-06-10",
        category: "Customer Service"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Invoice Processing",
        description: "Process pending client invoices.",
        date: "2025-06-09",
        category: "Finance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Social Media Post",
        description: "Create content for social media campaign.",
        date: "2025-06-11",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Product Demo",
        description: "Demonstrate product features to a lead.",
        date: "2025-06-07",
        category: "Sales"
      }
    ]
  },
  {
    id: 5,
    firstname: "Priya",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Internal Training",
        description: "Complete required training modules.",
        date: "2025-06-11",
        category: "Training"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Performance Review",
        description: "Self-assessment and peer feedback.",
        date: "2025-06-10",
        category: "HR"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Documentation Update",
        description: "Update outdated product documentation.",
        date: "2025-06-11",
        category: "Documentation"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));

};

export const getLocalStorage = () => {
const employees =  JSON.parse(localStorage.getItem('employees'));
const admin =  JSON.parse(localStorage.getItem('admin'));
return{employees , admin}

};