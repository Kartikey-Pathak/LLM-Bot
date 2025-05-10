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
