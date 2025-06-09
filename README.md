# ezra-full-stack-test

## Requirements

- Node.js v18 or higher
- NPM (comes installed with Node)

https://nodejs.org

1. Install dependencies

```
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

4. Start dev server

```
npm run dev
```

```
open http://localhost:3000
```

5. Install frontend dependencies

```
cd frontend
npm install
```

6. Run frontend

```
npm run dev
```

```
open http://localhost:5173
```
