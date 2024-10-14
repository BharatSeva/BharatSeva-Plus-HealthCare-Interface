# Bharat Seva+ (HealthCare Interface)  [![Deploy to Azure VM](https://github.com/BharatSeva/BharatSeva-Plus-HealthCare-Interface/actions/workflows/azure-apps-node.yml/badge.svg)](https://github.com/BharatSeva/BharatSeva-Plus-HealthCare-Interface/actions/workflows/azure-apps-node.yml)  [![ESLint Check](https://github.com/BharatSeva/BharatSeva-Plus-HealthCare-Interface/actions/workflows/eslint.yaml/badge.svg)](https://github.com/BharatSeva/BharatSeva-Plus-HealthCare-Interface/actions/workflows/eslint.yaml)

Welcome to **Bharat Seva+ HealthCare Interface**, an innovative healthcare management platform designed to simplify patient appointments, health record management, and communication between patients and healthcare professionals. With Bharat Seva+, healthcare providers can easily manage patient data, and patients can store and access their health records anytime, anywhere.    
Refer to [Official Organisation](https://github.com/BharatSeva) to get better idea of this whole project.

---

## Table of Contents

- [About this Project](#about-this-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

---

## About this Project
**Healthcare Interface**: Designed for healthcare professionals to manage patient records, search for patients, and update vaccination or check-up logs.

---

## Features

- **Digital Health Records**: Store and manage comprehensive patient health records in a secure cloud environment.
- **Appointments**: Easily schedule and manage appointments between patients and healthcare providers.
- **Search and Track**: Healthcare professionals can search patient data for vaccination or health check-up purposes.
- **Security**: Uses modern security practices, including OAuth 2.0, JWT for sessions, and Firebase authentication.
- **Cloud Storage**: Records are stored safely on the cloud using MongoDB and Firebase.
- **Upcoming Features**: Video-text messaging between patients and healthcare professionals.

---

## Tech Stack
- **Frontend**: React.js
- **Backend**: Express.js (Node.js)
- **Database**: MongoDB, Firebase
- **Authentication**: OAuth 2.0, JWT
---

## Installation
### Steps

1. **Clone the repository**:
   ```
   git clone https://github.com/<your-username>/<BharatSeva-Plus-HealthCare-Interface.git>
   cd bharat-seva-plus
	```
2. **Install dependencies**: Navigate to the server directory and install dependencies:  
	```npm install```
3. **Environment Variables**: Create .env.production  and .env.development file in the root directory of the server with the following variables:  
**Production**:-   Will in npm start or npm run start  
```REACT_APP_API_URL=http://4.236.178.190:5000  # Do not include trailing '/' in URL ```  
**Development**:  Will run in npm run build  
```REACT_APP_API_URL=http://localhost:5000  # Do not include trailing '/' in URL ```  
4. Run the application  using 
```npm start```



## Contributing
We welcome contributions from the open-source community! Whether it's fixing bugs, adding new features, or improving documentation, your help is appreciated. 
Please refer to CONTRIBUTING.md file for more information on how to contribute

## License
  This project is licensed under the MIT License.

Contact
For any questions or inquiries regarding this project, feel free to reach out or start the discussion in community.