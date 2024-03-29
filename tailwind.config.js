const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1080px',

      }
    },
    extend: {
      fontFamily: {
        'sans': ['Patrick Hand', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        '.bg-search': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.6956 10.367L8.50416 6.49801C8.94778 5.84502 9.20832 5.07601 9.20832 4.25C9.20834 1.9065 7.1435 0 4.60416 0C2.06482 0 0 1.9065 0 4.25C0 6.5935 2.06537 8.5 4.60416 8.5C5.49844 8.5 6.331 8.25951 7.03841 7.85099L11.2298 11.7195C11.4232 11.8975 11.6897 12 11.9632 12C12.5358 12 13 11.5705 13 11.044C13 10.792 12.8884 10.5455 12.6956 10.367ZM4.60416 8.00001C2.36382 8.00001 0.541658 6.31801 0.541658 4.25C0.541658 2.18199 2.36437 0.499993 4.60416 0.499993C6.84394 0.499993 8.66666 2.18199 8.66666 4.25C8.66666 6.31801 6.8445 8.00001 4.60416 8.00001ZM11.9632 11.5005C11.8327 11.5005 11.7054 11.4515 11.6133 11.3665L7.488 7.55852C7.74584 7.36701 7.98038 7.15051 8.18784 6.91251L12.3132 10.72C12.4047 10.8055 12.4583 10.9235 12.4583 11.0435C12.4583 11.2955 12.2357 11.5005 11.9632 11.5005Z' fill='white'/%3E%3Cpath d='M2.2219 4.24953L3.20503 2.88802C3.2879 2.77301 3.25378 2.61802 3.12974 2.54152C3.00624 2.46603 2.83778 2.49551 2.75384 2.61101L1.67049 4.11101C1.60984 4.19501 1.60984 4.30452 1.67049 4.38852L2.75384 5.88852C2.80693 5.96101 2.89196 6.00001 2.97918 6.00001C3.03118 6.00001 3.08318 5.98651 3.12921 5.95752C3.2538 5.88102 3.28737 5.72602 3.20449 5.61101L2.2219 4.24953Z' fill='white'/%3E%3Cpath d='M5.21189 2.0075C5.06564 1.97251 4.91939 2.05501 4.88364 2.18949L3.80029 6.1895C3.76401 6.32349 3.85176 6.459 3.99745 6.4925C4.01911 6.49749 4.04133 6.5 4.06245 6.5C4.18433 6.5 4.29483 6.4245 4.32517 6.3105L5.40851 2.3105C5.44482 2.17651 5.3576 2.04101 5.21189 2.0075Z' fill='white'/%3E%3Cpath d='M7.53834 4.11149L6.455 2.61149C6.37159 2.49599 6.20259 2.46599 6.07962 2.54199C5.95503 2.61849 5.92147 2.77349 6.00434 2.88849L6.98693 4.25L6.00381 5.61151C5.92093 5.72652 5.95506 5.88151 6.07909 5.95801C6.12512 5.98651 6.17712 6.00001 6.22912 6.00001C6.31634 6.00001 6.40191 5.96101 6.45447 5.88901L7.53781 4.38901C7.599 4.30499 7.599 4.19549 7.53834 4.11149Z' fill='white'/%3E%3C/svg%3E%0A")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '20px'
        },
        '.bg-dropDown': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%23E9548A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
          backgroundRepeat: 'no-repeat',
        }
      }
      addUtilities(utilities);
    })
  ],
}
