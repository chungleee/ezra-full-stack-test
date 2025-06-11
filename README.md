# ezra-full-stack-test

## Requirements

- Node.js v18 or higher
- NPM (comes installed with Node)
- Git clone the project
https://nodejs.org

### Backend Setup

1. Install dependencies

```
cd nodejs/
npm install
```

2. Copy from .env.example to .env

```
cp .env.example .env
```

3. Generate dev.db

```
npx prisma db push
```

4. Start server

```
npm run dev

<!-- backend running on http://localhost:3000 -->
```

### Frontend Setup

1. Install dependencies

```
<!-- open new terminal tab & navigate into frontend/ folder -->
<!-- if navigating from nodejs/ folder -->
cd ../frontend/

<!-- if navigating from root -->
cd frontend/

npm install
```

2. Start server

```
npm run dev
```

### Swapping to Dotnet API

1. Close Nodejs server

2. Close frontend vite server and navigate to frontend/vite.config.ts and swap endpoints

```
// in frontend/vite.config.ts
comment out line 9
uncomment line 10

http://localhost:5112 should now be in use
```

3. Start vite server

```npm run dev

```

4. In a new terminal tab, navigate to dotnet-api folder

```
if comming from frontend/ folder

cd ../dotnet-api/

if coming from root

cd dotnet-api/
```

5. Start dotnet api server

```
dotnet run

Server should be running on http://localhost:5112
```

Thoughts on this test:

- building the frontend and backend with javascript/typescript was smooth as i'm confortable in this environment

- i'm not the best visual designer so I kept the the look fairly simple, centered and not cluttered

- the hardest part was definitely learning dotnet since it's my first time:

  - I made use of microsofts documentation to install the prerequisites and to start writing code
  - looked up best practices / conventions to keep organized
  - made use of gemini/chatgpt to explain and learn what namespaces / using / etc keywords meant

  - lots to learn but i like the opionated approach and structure
  - I enjoyed it since i got to learn something new and outside of comfort
