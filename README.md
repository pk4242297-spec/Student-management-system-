# Student-management-system-

## Run locally

The local `.env` file is ignored by Git and is loaded by `npm start`. To set the
student login, create `.env` in the project root with:

```dotenv
STUDENT_USERNAME=your-username
STUDENT_PASSWORD=your-password
```

Then start the Express server:

```powershell
npm.cmd start
```

Open `http://localhost:3000`. The browser loads dashboard records with `GET /api/pages` and submits login credentials with `POST /api/login`. For deployments, configure `STUDENT_USERNAME` and `STUDENT_PASSWORD` as server environment variables.