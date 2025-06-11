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
