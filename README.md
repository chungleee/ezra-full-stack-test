# ezra-full-stack-test

## Requirements

- Node.js v18 or higher
- NPM (comes installed with Node)

https://nodejs.org

1. Install dependencies (will install both backend & frontend)

```
npm run install:all
```

2. Copy from .env.example to .env

```
cp .env.example .env
```

3. Generate dev.db

```
npx prisma db push
```

4. Start dev server (both backend & frontend)

```
npm run dev
```

```
frontend running on http://localhost:5173/
backend running on http://localhost:3000
```
