#### Dockerの起動

1. npm install --global yarn (install yarn)
2. copy .env.example to .env
3. docker compose build
4. docker compose up

Access: http://localhost:8888/

To update packages, run the following commands:

```
npx npm-check-updates -u
npm install
```
