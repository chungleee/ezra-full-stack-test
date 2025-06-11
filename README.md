# ezra-full-stack-test

## Requirements

- Node.js v18 or higher
- NPM (comes installed with Node)

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
