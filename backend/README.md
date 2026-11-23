# backend

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

To type check:

```bash
bun check
```

Run `bun fmt` to format the code.

This project was created using `bun init` in bun v1.4.4. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.


## how you add env 
 - first is env file
 - in terminal you just export like -- export PORT=3000 or export DATABASE_URL=postgress and then for this teminal session it will use that env if not mention on the env file
 - third is before running npm run dev you just add all the env like 
    PORT=3000 POSTGRES_URL=postgres npm run dev