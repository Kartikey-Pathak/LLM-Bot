# 🧠 Local LLM Chatbot (WebLLM + React)

This is a chatbot powered by [@mlc-ai/web-llm](https://github.com/mlc-ai/web-llm) that runs completely in the browser — no internet or server required after setup!

## 🚀 Features
- Uses RedPajama 3B model
- Fully runs in-browser using WebGPU (no API key needed)
- Works on modern desktop browsers (Chrome, Edge)
- Lightweight UI built with React + Tailwind CSS

## Notes
- **WebGPU support is required** (only works on modern Chromium-based browsers like Chrome/Edge).
- Works best on **desktop/laptops** with GPU support.
- May not work on low-end or mobile devices due to limited GPU power and WebGPU support.

---
🚨 Important Note About Vercel Hosting
While the application is fully functional when hosted on Vercel, please note the following:

The WebLLM model is downloaded entirely on the client-side, which means initial loading times can be long (especially on slower networks or devices).

You might see a delay before the model starts responding — this is expected due to model weight downloading and initialization in-browser.

✅ You can still explore the full UI and user experience via the hosted link.

⚠️ Recommendation: For a smooth and responsive experience, we highly recommend cloning the repository locally and running the app using:

npm install
npm run dev

This way, the model will only be downloaded once and then reused, resulting in faster interactions and testing.
---

---

## 📦 Installation & Setup

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/web-llm-chat.git
cd web-llm-chat

### 2. Install dependencies

npm install
Start the development server

npm run dev
Model Download & Loading

As soon as you run the dev server, the app will automatically start downloading the selected LLM model (e.g., RedPajama-INCITE-Chat-3B).

You’ll see progress logs in the console like Model loading progress: XX%.

Once the loader disappears from the UI, the chatbot is ready for use ✅
