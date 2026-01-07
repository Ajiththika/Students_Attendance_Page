# Student Attendance System

A modern, responsive Student Attendance management application built with **React**, **Vite**, and **Tailwind CSS**. This tool allows teachers or administrators to track daily attendance, manage student remarks, and export data efficiently.

## 🚀 Key Features

- **Dashboard Navigation**: A clean entry point with routing via React Router.
- **Live Attendance Tracking**: Toggle student status between "Present" and "Absent" with a single click.
- **Real-time Search**: Instantly filter students by name using the search bar.
- **Live Statistics**: Summary cards showing Total Students, Present count, and Absent count.
- **Data Persistence**: Uses `localStorage` so your attendance data is saved even if you refresh the page.
- **Export to CSV**: Download your attendance records as a `.csv` file for use in Excel or Google Sheets.
- **Interactive UI**: Includes a "New Attendance" modal for a professional user experience.

## 🛠️ Tech Stack

* **Frontend**: React.js (Hooks: `useState`, `useEffect`, `useNavigate`)
* **Routing**: React Router DOM
* **Styling**: Tailwind CSS
* **Build Tool**: Vite

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Ajiththika/Students_Attendance_Page.git](https://github.com/Ajiththika/Students_Attendance_Page.git)
    cd Students_Attendance_Page
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to `http://localhost:5173`

## 📂 Project Structure

- `/src/pages`: Contains main views (Dashboard, AttendancePage, NotFound).
- `/src/components`: Reusable UI components (Header, Table, Form).
- `/src/App.jsx`: Main routing configuration.

## 📝 Future Improvements
- [ ] Integration with a backend (Firebase or Node.js).
- [ ] Login/Authentication for teachers.
- [ ] Historical attendance reports.