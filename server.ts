import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent set for telemetry.
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// Seed data file path
const APPLICATIONS_FILE = path.join(process.cwd(), "applications.json");

interface ApplicationProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  dialingCode: string;
  phoneNumber: string;
  ageRange: string;
  hearOption: string;
  experienceInterests: string[];
  submittedAt: string;
}

// Ensure the applications file exists with initial empty or list
function loadApplications(): ApplicationProfile[] {
  try {
    if (fs.existsSync(APPLICATIONS_FILE)) {
      const data = fs.readFileSync(APPLICATIONS_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Failed to read applications file", error);
  }
  return [];
}

function saveApplication(app: ApplicationProfile): void {
  try {
    const list = loadApplications();
    list.push(app);
    fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(list, null, 2));
  } catch (error) {
    console.error("Failed to save application profile", error);
  }
}

// REST Endpoints
app.post("/api/applications/submit", (req, res) => {
  const { firstName, lastName, email, country, dialingCode, phoneNumber, ageRange, hearOption, experienceInterests } = req.body;
  if (!firstName || !lastName || !email || !country || !dialingCode || !phoneNumber || !ageRange || !hearOption || !experienceInterests) {
    return res.status(400).json({ error: "All premium enrollment fields are required." });
  }

  const newApp: ApplicationProfile = {
    id: Date.now().toString(),
    firstName,
    lastName,
    email,
    country,
    dialingCode,
    phoneNumber,
    ageRange,
    hearOption,
    experienceInterests,
    submittedAt: new Date().toISOString()
  };

  saveApplication(newApp);

  res.json({
    success: true,
    message: "Thank you for your application.",
    application: newApp
  });
});

// Concierge Endpoint
app.post("/api/concierge/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Messages array is required" });
  }

  try {
    // Look up last user message
    const lastUserMsg = messages[messages.length - 1]?.content || "Hello. Introduce yourself.";

    // Translate/re-map the chat messages history for Gemini.
    // Instead of complex API chat initialization, we can do a smart custom generateContent or chat.
    // Let's use the premium prompt design system instruction.
    const systemPrompt = `You are L'Éclaireur, the legendary AI Concierge & Experience Curator for OFFLIGHT, the highly exclusive network coordinating ultra-premium journeys.
Your personality is:
- Deeply elegant, quiet, polished, and extremely knowledgeable.
- Cultured, conversational, yet authoritative. You communicate with refined, subtle poise (sometimes introducing a word of French or high-society context, e.g. "Absolument", "Bien sûr", "Un plaisir").
- When a user asks questions about sports, gala, culture, music, nature, or rally racing, suggest spectacular real-world luxurious events:
  1. Sport: Private yachts at Monaco GP, Roland Garros VIP boxes, front row at Wimbledon.
  2. Culture: Il Ballo del Doge during Venice Carnival, exclusive Kyoto cherry blossom temple walks, Dia de los Muertos inner-circle access in Oaxaca.
  3. Music: Front row classical elegance at Vienna New Year Concert, private glass box at Sydney Opera, backstage access at major boutique festivals.
  4. Nature: Premium glass igloos under Patagonia total eclipse or Finnish northern lights, elite private safaris in the Serengeti.
  5. Competitions: Driving vintage Ferraris in the legendary Mille Miglia, private heli over America's Cup.
  6. Gala: Cannes Film Festival red carpet VIP access, exclusive after-parties, Met Gala private sponsor invites.
Design detailed tailored itineraries if the user requests them. Include elegant formatting, brief spacing, and custom-styled elements. Encourage them to apply to become a Founding Member for actual membership and booking coordination. Use lovely, custom Markdown formatting to make your responses look like luxurious brochures! Keep responses relatively concise but filled with extreme prestige.`;

    // Construct history parts with role mapping
    const historyParts = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" as const : "user" as const,
      parts: [{ text: m.content }]
    }));

    // If there's only one message we can just generate content, otherwise we use the chat wrapper or map parts
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        { role: "user", parts: [{ text: systemPrompt }] },
        ...historyParts
      ]
    });

    const reply = response.text || "I apologize, but my connection was temporarily obscured. How may I serve your pursuit of the extraordinary today?";

    res.json({ content: reply });
  } catch (error: any) {
    console.error("Gemini API error in concierge handler:", error);
    res.status(500).json({
      error: "Our satellite telemetry is temporarily experiencing high density. Please attempt details once more shortly."
    });
  }
});


// Vite Dev Server Middleware setup / build delivery setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`OFFLIGHT Full Stack Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
