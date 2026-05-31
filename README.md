# Vastra E-Commerce Platform

Cloud-hosted e-commerce platform built using Node.js, React.js, MySQL, AWS EC2, and Nginx with CI/CD deployment workflows.

## Features

* User authentication and authorization
* Product listing and management
* Shopping cart functionality
* Order management workflows
* Admin dashboard support
* Deployment automation workflows
* Linux-based server deployment
* Nginx reverse proxy configuration

## Technologies Used

### Frontend

* React.js
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* MySQL

### Cloud & DevOps

* AWS EC2
* GitHub Actions
* Nginx
* Linux
* Docker

## Deployment Workflow

1. Application code pushed to GitHub
2. GitHub Actions CI/CD pipeline triggered
3. Backend deployment workflow executed
4. Application deployed on AWS EC2
5. Nginx configured as reverse proxy

## Infrastructure Components

* AWS EC2 for hosting
* Linux server configuration
* Nginx reverse proxy
* CI/CD deployment automation
* GitHub Actions workflow

## Deployment Architecture

```text
                 Users
                   │
                   ▼
              Route 53
                   │
                   ▼
             CloudFront
                   │
                   ▼
          Nginx Reverse Proxy
              AWS EC2
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
   Backend API            Frontend
    Node.js               React.js
        │
        ▼
      MySQL
```

### Deployment Flow
1. Developer pushes code to GitHub
2. GitHub Actions pipeline starts automatically
3. Frontend and backend dependencies are installed
4. Frontend build process executes
5. Deployment workflow triggered
6. Application hosted on AWS EC2
7. Nginx handles reverse proxy and request routing

## Project Structure

vastra-ecommerce-platform/
│
├── .github/workflows
├── backend
├── frontend
└── README.md

## Operational Tasks Performed

* Deployment troubleshooting
* Linux log analysis
* Nginx configuration
* Deployment workflow monitoring
* Infrastructure management

## Future Improvements

* Kubernetes deployment
* Monitoring dashboards
* Auto-scaling infrastructure
* CloudWatch integration
* Load balancer integration
