# Bharat Seva+ (HealthCare Interface)  [![Deploy to Azure VM](https://github.com/BharatSeva/BharatSeva-Plus-HealthCare-Interface/actions/workflows/azure-apps-node.yml/badge.svg)](https://github.com/BharatSeva/BharatSeva-Plus-HealthCare-Interface/actions/workflows/azure-apps-node.yml)  [![Strict ESLint Check](https://github.com/BharatSeva/BharatSeva-Plus-HealthCare-Interface/actions/workflows/eslintcheck.yaml/badge.svg)](https://github.com/BharatSeva/BharatSeva-Plus-HealthCare-Interface/actions/workflows/eslintcheck.yaml)

Welcome to **Bharat Seva+ HealthCare Interface**, an innovative healthcare management platform designed to simplify patient appointments, health record management, and communication between patients and healthcare professionals. With Bharat Seva+, healthcare providers can easily manage patient data, and patients can store and access their health records anytime, anywhere.    
Refer to [Official Organisation](https://github.com/BharatSeva) to get better idea of this whole project.

---

> [!TIP]
> Hi everyone! Hope you're doing well, this is to let you know that you can access webapps hosted on public links using these credentials:  
> ### [HealthCare Interface 🔗](http://4.236.178.190:5000/healthcare/login)  
> **HealthCare Number** :  2021071042  
> **License Number** :     2021071042  
> **Password** : 00000  

> [!NOTE]
> I've increased Request limits for above ID's, If exhausted let me know I'll increase it.  
> We may occasionally delete accounts inorder to improve the platform, it is part of our development process.  
> Platform is under going some major changes, if in case you are not able to access these webpages, please try again after 1 - 2 days.  
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
	```
	npm install
 	```
4. **Environment Variables**: Create .env.production  and .env.development file in the root directory of the server with the following variables:   
	```
 	# FOR PRODUCTION
	REACT_APP_API_URL=http://4.236.178.190:5000  # Do not include trailing '/' in URL 
	```  
	```
 	# FOR DEVELOPMENT
 	REACT_APP_API_URL=http://localhost:5000  # Do not include trailing '/' in URL 
 	```  
5. Run the application using  
	```
 	npm start
  	```
 > [!IMPORTANT]  
> Please sync your local files with ``` git pull ``` fequently to avoid conflicts.


> You can set up express backend for this project to test your application!  
> Refer to Bharat Seva Express Server to know to setup and test your application    


## Contributing
We welcome contributions from the open-source community! Whether it's fixing bugs, adding new features, or improving documentation, your help is appreciated.   
Please refer to [CONTRIBUTING.md](./CONTRIBUTING.md) file for more information on how to contribute

## License
  This project is licensed under the MIT License.

Contact
For any questions or inquiries regarding this project, feel free to reach out or start the discussion. 
