<div align="center">
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-Mongodb-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="[https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4](https://www.google.com/imgres?imgurl=https%3A%2F%2Fcamo.githubusercontent.com%2F9be0208aa516b4d1976412d27e9f73d851ea253f8ee005a0b600939f841bba8b%2F68747470733a2f2f7777772e63686172746a732e6f72672f6d656469612f6c6f676f2d7469746c652e737667&tbnid=xE1dMmnRc7qCFM&vet=12ahUKEwjKwf_y1YqEAxUQsmMGHVqaAewQMygFegQIARB3..i&imgrefurl=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fchart.js%3FactiveTab%3Dreadme&docid=-9tBDxs1A-GjAM&w=256&h=256&q=chart%20js&ved=2ahUKEwjKwf_y1YqEAxUQsmMGHVqaAewQMygFegQIARB3)" alt="chartjs" />
  </div>

  <h3 align="center">Next.js 14 Expense Tracking Application</h3>

    
## Expensor
**E X P E N S O R**


## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>
**Visualise and Track your Daily Expenses**

Expensor is a expense tracking web application where a user can track and visualise his daily expenses.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- chart.js
- MongoDB
- NextAuth
- TailwindCSS

## <a name="features">🔋 Features</a>
👉 **Track and Visualise Daily Expenses**: Allow users to keep track of expenses and visualise them on monthly and daily basis.

 
  ![Landing Page](public/assets/images/home.png)

👉 **Daily Analysis of Expenses**: User can add his daily expenses and can visualise his expenses in a doughnut chart and also filter the expenses on the basis of months .

  ![Profile](public/assets/images/dailyAnalysis.png)

👉 **Monthly Analysis of Expenses**: User can visualise his expenses of all months for particular year in a Bar Chart.

  ![PromptCard](public/assets/images/monthlyAnalysis.png)
  
👉 **Profile Page**: Each user gets a dedicated profile page where he can see all his expense uptill now.

  ![PromptCard](public/assets/images/profile.png)

👉 **Responsive Website**: Develop a fully responsive website to ensure optimal user experience across various devices, from desktops to smartphones

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from [Google Cloud Console](https://console.cloud.google.com/welcome?rapt=AEjHL4MBaLLneW6OfAHf_zgms1eWZFw1wdy0_KIC4uh1nEqh2m4ojOvrXNlzJ4h7CZTkpiWgcsoHbUvS-FMdCP7WIkaVlPAeU7cnVR6Y0wJHeLMOtU6KAzA&project=promptopia-385410), [Cryptpool](https://www.cryptool.org/en/cto/openssl) (for random Auth Secret), and [MongoDB](https://www.mongodb.com/). 

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request.
