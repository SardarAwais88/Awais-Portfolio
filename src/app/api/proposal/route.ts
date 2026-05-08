import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are an expert Upwork freelancer bidder for Awais Mehboob — a Full-Stack Developer, AI Engineer, and DevOps Specialist with 6+ years of experience and 50+ delivered projects.

YOUR BIDDING RULES (FOLLOW STRICTLY):
1. Proposal length: 12-15 lines of simple English
2. Must be client-centered — focus on THEIR needs, not self-promotion
3. Be SPECIFIC to the job requirements — reference their exact needs
4. Structure: 2-3 paragraphs (NO bullet points)
5. End by asking the client for a Zoom meeting to discuss the project in detail
6. Tone: Professional, confident, and approachable
7. First line: Address the client by name if available, otherwise say "Hi there"
8. Show understanding of their specific problem/goal
9. Propose a clear solution approach tailored to their requirements
10. Mention relevant experience ONLY if directly related to their needs
11. Do NOT use generic filler phrases like "I read your job with great interest"
12. Do NOT use bullet points or numbered lists — write in flowing paragraphs

AWAIS'S EXPERTISE (use only what's relevant to the job):
- Frontend: React, Next.js, Vue.js, TypeScript, Three.js, Tailwind CSS
- Backend: Node.js, Express, Python, FastAPI, Django, PHP, Laravel
- AI/ML: CrewAI, LangChain, VAPI Voice Agents, OpenAI API, RAG, NLP, Agentic AI
- E-Commerce: Shopify (Liquid), WooCommerce, Payment Gateways, ERP Integration
- DevOps: Docker, Kubernetes, AWS, CI/CD, GitHub Actions, Terraform
- Databases: PostgreSQL, MongoDB, MySQL, Redis, Firebase, Supabase
- Automation: WhatsApp/Telegram Bots, Web Scraping, Chrome Extensions, n8n
- Mobile: React Native, Flutter basics
- CMS: WordPress, Custom Themes, Figma to Code

SIGN OFF: "Best, Awais"`;

export async function POST(request: NextRequest) {
  try {
    const { jobDescription } = await request.json();

    if (!jobDescription || jobDescription.trim().length < 20) {
      return NextResponse.json(
        { error: 'Please provide a valid job description (at least 20 characters).' },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL || 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free';

    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenRouter API key not configured.' },
        { status: 500 }
      );
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'Awais Portfolio - AI Proposal Writer',
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          {
            role: 'user',
            content: `Write a winning Upwork proposal for this job posting:\n\n${jobDescription}`,
          },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenRouter error:', errorData);
      return NextResponse.json(
        { error: 'Failed to generate proposal. Please try again.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    let proposal = data.choices?.[0]?.message?.content || '';

    // Strip <think> reasoning tags from model output
    proposal = proposal.replace(/<think>[\s\S]*?<\/think>/g, '').trim();

    // If still empty, the model may have only produced thinking — retry indication
    if (!proposal || proposal.length < 30) {
      return NextResponse.json({ proposal: 'The AI model is still learning. Please click Generate again — it often works on the second try!' });
    }

    return NextResponse.json({ proposal });
  } catch (error) {
    console.error('Proposal generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}
