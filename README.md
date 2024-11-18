# Bharat Seva+ (Healthcare Interface)  
[![Deploy](https://github.com/BharatSeva/HealthCare-Interface/actions/workflows/deploy.yml/badge.svg)](https://github.com/BharatSeva/HealthCare-Interface/actions/workflows/deploy.yml)   [![Strict ESLint Check](https://github.com/BharatSeva/BharatSeva-Plus-HealthCare-Interface/actions/workflows/eslintcheck.yaml/badge.svg)](https://github.com/BharatSeva/BharatSeva-Plus-HealthCare-Interface/actions/workflows/eslintcheck.yaml)

Welcome to **Bharat Seva+ Healthcare Interface**, a platform thoughtfully designed to simplify healthcare management for providers and patients alike. This interface enables healthcare professionals to manage patient data, schedule appointments, and securely store health records, while patients can easily access their healthcare information anytime, anywhere.  
Refer to our [Official Organization](https://github.com/BharatSeva) to understand the broader scope of this project.  

---

> **Note**  
> - We have increased request limits for certain operations. If you encounter any exhaustion, please let us know to extend them further.  
> - As part of ongoing development, some accounts may be removed to improve the platform.  
> - Major updates are underway. If you face access issues, please check back after 1-2 days. Thank you for your patience and understanding!  

---

## Table of Contents

- [About This Project](#about-this-project)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Contributing](#contributing)  
- [License](#license)  

---

## About This Project

The **Bharat Seva+ Healthcare Interface** is your gateway to modernized healthcare management. Built with scalability and performance in mind, this platform serves as a secure and user-friendly solution for healthcare professionals and patients. While the backend offers a rich set of features to ensure seamless operations, the current frontend implementation is continuously evolving to match the backend's full potential.  

### Exciting News!
We are actively working on integrating a **deep learning model** that will redefine the way healthcare data is managed and analyzed. This upcoming feature aims to provide intelligent insights and predictive capabilities to enhance user experience and decision-making.

---

## Features

- **Comprehensive Health Records**: Securely store and manage detailed patient health records in the cloud.  
- **Appointment Scheduling**: Facilitate smooth appointment booking and management between patients and providers.  
- **Search Functionality**: Quickly search patient data for vaccination records or health check-up details.  
- **Secure Authentication**: Implementing robust security with OAuth 2.0 and JWT.  
- **Backend Excellence**: The backend supports advanced features like scalability, performance optimization, and asynchronous task processing with RabbitMQ.  
- **Deep Learning in Progress**: Upcoming enhancements will include predictive analytics and personalized healthcare insights.  

---

## Tech Stack

- **Frontend**: React.js  
- **Backend**: Golang, Nginx, RabbitMQ, Docker  
- **Databases**: MongoDB, PostgreSQL  
- **Authentication**: OAuth 2.0, JWT  

---

## Installation

### Steps to Get Started

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/BharatSeva/HealthCare-Interface.git
   cd HealthCare-Interface
   ```
2. **Install dependencies**:

```bash
npm install
```
3. **Environment Variables**:
Create .env.production and .env.development files in the project root with the following variables:  
For Development  

```bash
REACT_APP_API_URL=http://localhost:3000/api/v1/healthcare
```
4. **Run the Application**:

```bash
npm start
```
5. **Backend Setup**:
To fully test the interface, ensure the backend is running. Refer to the Healthcare Server Repository for [setup instructions](https://github.com/BharatSeva/Healthcare-Server).

## Contributing
We love contributions! Whether you’re fixing bugs, suggesting new features, or improving documentation, your help is welcome.
Please check out CONTRIBUTING.md for guidelines and best practices.

## License
This project is licensed under the MIT License.


