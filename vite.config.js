import { defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from "dotenv";

dotenv.config();


// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_SERVER_URL": JSON.stringify(process.env.VITE_SERVER_URL),
  },
});

// export default defineConfig({
//   plugins: [react()],
// })
