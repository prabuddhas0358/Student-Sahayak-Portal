# Student Sahayak — Email-only version (no Supabase)

This version removes Supabase, database setup, admin login, complaint tracking, and demo form messages. The website displays **ptechstudio1@gmail.com** as a clickable email link.

## Run locally
1. Install Node.js LTS: https://nodejs.org/
2. Extract this ZIP and open the `StudentSahayak_NoSupabase` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL printed by Vite.

## Contact behavior
Clicking `ptechstudio1@gmail.com` opens the visitor's default email application using a `mailto:` link. The website does not send or store messages itself. Visitors can also copy the email address and send mail manually.

## Build for hosting
```bash
npm run build
```
The static site is generated in the `dist` folder. Upload it to a static host such as Netlify or Vercel.

No Supabase project, API keys, database, or backend are required.
