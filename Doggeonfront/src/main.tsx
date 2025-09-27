import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors ({
    origin: "http://localhost:5173",
    methods: 'GET,POST,PUT,PATCH,HEAD,DELETE'
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
