import React, { useState } from 'react';
import { Sparkles, Users, TrendingUp, Award, RefreshCw, Clock, DollarSign } from 'lucide-react';

const MarketingGame = () => {
  const [difficultySelected, setDifficultySelected] = useState(false);
  const [difficulty, setDifficulty] = useState('');
  const [currentDecision, setCurrentDecision] = useState(0);
  const [score, setScore] = useState(0);
  const [choices, setChoices] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastPoints, setLastPoints] = useState(0);
  const [lastChoice, setLastChoice] = useState('');
  const [showNameEntry, setShowNameEntry] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [highScores, setHighScores] = useState([]);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState('');

  const decisionsEasy = [
    {
      title: "Campaign Visual Content Creation",
      scenario: "You need to create 50+ social media posts featuring beach scenes and summer vibes for your travel service campaign. Timeline: 2 weeks.",
      options: [
        {
          label: "AI-Generated Imagery",
          icon: "🤖",
          description: "Use AI tools to generate custom beach scenes, lifestyle imagery, and branded visuals quickly",
          isOptimal: true,
          points: 100,
          feedback: "Excellent choice! AI excels at scalable, routine content generation. For 50+ posts with tight deadlines, AI-generated imagery provides efficiency and consistency while freeing your creative team to focus on strategy and emotional storytelling in captions and messaging.",
          tools: "🛠️ Recommended AI Tools: Midjourney, DALL-E 3, Adobe Firefly, Canva AI for rapid visual content generation"
        },
        {
          label: "Professional Photography Team",
          icon: "📸",
          description: "Hire photographers for original on-location shoots and manual editing",
          isOptimal: false,
          points: 50,
          feedback: "While authentic photography has value, this approach is costly and time-intensive for high-volume social content. AI imagery would handle the scale better, reserving human photographers for hero campaign assets where authenticity is critical.",
          tools: "💡 Better Alternative: Use AI tools like Midjourney or Adobe Firefly for volume content, save photography budget for key hero shots"
        }
      ]
    },
    {
      title: "Influencer Partnership Strategy",
      scenario: "You have a $15K budget to partner with influencers for your outdoor gear brand. You need to identify creators whose audience matches your target demographic.",
      options: [
        {
          label: "Manual Influencer Research",
          icon: "🔍",
          description: "Personally research and reach out to influencers based on your judgment and industry connections",
          isOptimal: false,
          points: 50,
          feedback: "Manual research is time-consuming and limits your reach. AI tools can analyze thousands of micro-influencers' engagement rates, audience demographics, and authenticity scores simultaneously—maximizing your budget efficiency.",
          tools: "💡 Better Alternative: Use AI platforms like Upfluence, AspireIQ, or CreatorIQ for data-driven influencer discovery and vetting"
        },
        {
          label: "AI Micro-Influencer Targeting",
          icon: "🎯",
          description: "Use AI platforms to analyze engagement data, audience fit, and predict campaign ROI across hundreds of creators",
          isOptimal: true,
          points: 100,
          feedback: "Smart move! AI-powered analytics excel at data-driven tasks like influencer vetting. The technology can process massive datasets to identify optimal micro-influencers with authentic engagement, allowing you to focus on relationship-building and creative direction.",
          tools: "🛠️ Recommended AI Tools: Upfluence, AspireIQ, CreatorIQ, Influencity for comprehensive influencer analysis and campaign tracking"
        }
      ]
    },
    {
      title: "Brand Story Campaign Development",
      scenario: "Your beach resort brand needs an emotional campaign story about family connections and summer memories that will resonate across TV, social, and print.",
      options: [
        {
          label: "Human Creative Team",
          icon: "💡",
          description: "Work with copywriters and creative directors to craft an authentic emotional narrative",
          isOptimal: true,
          points: 100,
          feedback: "Perfect decision! Emotional storytelling, authentic brand narratives, and creative concepts that build deep customer connections require human empathy, cultural understanding, and strategic thinking. AI can assist, but humans lead where emotional resonance matters most.",
          tools: "🛠️ Human-Led Process: Creative directors and copywriters lead, with AI tools like ChatGPT or Claude as brainstorming assistants only"
        },
        {
          label: "AI Story Generation",
          icon: "✨",
          description: "Use AI tools to generate campaign concepts and emotional narratives based on trending themes",
          isOptimal: false,
          points: 50,
          feedback: "AI can generate ideas, but emotional brand storytelling needs human creativity, empathy, and cultural nuance. For campaigns requiring authentic emotional connections, human creative teams bring irreplaceable insight—though AI can support with research and variations.",
          tools: "💡 Better Approach: Let human creatives lead strategy, use AI tools like ChatGPT or Jasper only for initial brainstorming and variations"
        }
      ]
    },
    {
      title: "Media Budget Allocation",
      scenario: "You need to allocate a $100K media budget across channels (social, display, video, search) for maximum ROI. Historical performance data is available.",
      options: [
        {
          label: "Traditional Market Analysis",
          icon: "📊",
          description: "Use spreadsheets and marketing team expertise to analyze past campaigns and allocate budget",
          isOptimal: false,
          points: 50,
          feedback: "Traditional analysis works but is slower and less precise. AI predictive analytics can process complex multi-channel data, identify patterns humans miss, and optimize budget allocation in real-time—crucial for data-driven efficiency.",
          tools: "💡 Better Alternative: Use AI platforms like Google Analytics 4 with predictive metrics, Adobe Sensei, or Salesforce Einstein for data-driven budget optimization"
        },
        {
          label: "AI Predictive Analytics",
          icon: "🔮",
          description: "Deploy AI tools to analyze historical data, predict channel performance, and recommend optimal budget splits",
          isOptimal: true,
          points: 100,
          feedback: "Excellent choice! AI excels at data-driven, analytical tasks like media planning. Predictive analytics can process massive datasets to optimize budget allocation with precision and speed that manual analysis can't match, maximizing your campaign ROI.",
          tools: "🛠️ Recommended AI Tools: Google Analytics 4 (predictive metrics), Adobe Sensei, Salesforce Einstein, Albert.ai for autonomous campaign optimization"
        }
      ]
    },
    {
      title: "User-Generated Content Curation",
      scenario: "Customers have shared 500+ vacation photos with your brand hashtag. You need to select 20 authentic, emotionally resonant images for your campaign that build trust.",
      options: [
        {
          label: "AI Automated Curation",
          icon: "⚡",
          description: "Use AI to filter by engagement metrics, visual quality, and brand alignment",
          isOptimal: false,
          points: 50,
          feedback: "AI can narrow selections efficiently, but UGC requiring emotional resonance and authenticity needs human judgment. People understand subtle emotional cues, cultural context, and genuine trust-building moments that algorithms might miss—critical for authentic brand connection.",
          tools: "💡 Better Approach: Use AI like Pixlee or Olapic for initial filtering, then human curators select final content for emotional impact"
        },
        {
          label: "Manual Human Curation",
          icon: "❤️",
          description: "Have your team personally review and select images based on emotional impact and authenticity",
          isOptimal: true,
          points: 100,
          feedback: "Great choice! When authenticity, emotional resonance, and trust are paramount, human curation is essential. Your team can identify genuine moments and emotional depth that build real connections—though AI can pre-filter to save time on obviously unsuitable content.",
          tools: "🛠️ Recommended Process: Human curators lead selection, optionally use Pixlee or TINT AI for initial volume filtering to save time"
        }
      ]
    }
  ];

  const decisionsHard = [
    {
      title: "Hero Christmas Film",
      scenario: "You are the Marketing Director for a heritage chocolate brand, famous for its cinematic Christmas hero film. This year, your agency proposes a generative video system that can assemble hundreds of micro-stories, swapping dialogue, backgrounds, music, and gifts to match user profiles. Early tests show a 25% higher CTR and completion rate. Your CMO and Creative Director warn that fragmenting the story will weaken the emotional arc and the shared cultural impact.",
      options: [
        {
          label: "Option A",
          icon: "⭐",
          cost: "€60k",
          time: "40h",
          description: "Keep one human-crafted hero story that defines the brand's Christmas meaning, and use AI only for distribution, targeting, and media optimization, not for narrative creation",
          isOptimal: true,
          points: 100,
          feedback: "Excellent! This protects the emotional arc and shared cultural ritual while using AI efficiently for scaling and media optimization. The hero story maintains brand equity and emotional impact.",
          tools: "🛠️ Human narrative first, AI for peripheral support: Use tools like Sora or Runway for format adaptation, but keep the core story human-crafted."
        },
        {
          label: "Option B",
          icon: "❤️",
          cost: "€90k",
          time: "120h",
          description: "Produce multiple fully human-edited variants with careful attention to pacing, emotional arc, and narrative consistency; no AI involved",
          isOptimal: false,
          points: 50,
          feedback: "Full human production protects the narrative beautifully but is costly and slow, missing efficiency gains. AI can handle distribution and format optimization without compromising the story's emotional core.",
          tools: "💡 Better approach: Keep human storytelling but use AI for technical distribution tasks to save time and budget."
        },
        {
          label: "Option C",
          icon: "⚡",
          cost: "€45k",
          time: "20h",
          description: "Let AI freely recombine and personalize the story for each user profile, locking only mandatory brand shots, prioritizing relevance and performance metrics",
          isOptimal: false,
          points: 50,
          feedback: "While AI boosts engagement metrics, freely recombining the story fragments the shared cultural moment and flattens the emotional arc, weakening long-term brand equity and the 'shared ritual' promise.",
          tools: "💡 Risk: Tools like Synthesia or D-ID can personalize, but they sacrifice the unified emotional experience that builds brand meaning."
        },
        {
          label: "Option D",
          icon: "🛠️",
          cost: "€50k",
          time: "50h",
          description: "Use AI to generate initial scene combinations, then have human editors adjust major story beats; the final variants are partially human-guided",
          isOptimal: false,
          points: 50,
          feedback: "This hybrid approach improves efficiency but still risks narrative fragmentation. Allowing AI to recombine scenes, even with human review, can dilute the emotional arc compared to one hero story.",
          tools: "💡 Consider: Keep narrative creation fully human, reserve AI only for post-production and distribution."
        }
      ]
    },
    {
      title: "Seasonal Mascot Design",
      scenario: "Your retailer wants a new seasonal mascot to appear across TV, TikTok, AR filters, in-store signage, and packaging. AI can generate hundreds of variations and allow fans to remix the character. Human designers argue that without strict control, the mascot will lose its iconic, long-term recognizability.",
      options: [
        {
          label: "Option A",
          icon: "🛠️",
          cost: "€40k",
          time: "30h",
          description: "Define a human concept, then let AI generate dozens of minor variations freely; humans only review extreme outliers",
          isOptimal: false,
          points: 50,
          feedback: "This allows creative freedom but risks brand inconsistency. Without strict style guides, AI variations may drift from the core character design, weakening long-term IP recognition.",
          tools: "💡 Risk: Tools like Midjourney or DALL-E need tighter constraints to maintain mascot consistency across channels."
        },
        {
          label: "Option B",
          icon: "⚡",
          cost: "€30k",
          time: "10h",
          description: "Allow AI to create hundreds of mascot designs, poses, and animations, with minimal human supervision, maximizing engagement and novelty",
          isOptimal: false,
          points: 50,
          feedback: "Full AI is fast and cheap but sacrifices brand consistency and long-term IP value. Without human-defined boundaries, the mascot becomes unrecognizable across contexts, losing memorability.",
          tools: "💡 Risk: Generative tools create variety but lack the strategic design thinking needed for lasting brand assets."
        },
        {
          label: "Option C",
          icon: "⭐",
          cost: "€55k",
          time: "50h",
          description: "Lock down the core character design, expression range, and style rules with humans; AI operates within strict style guides for production and minor fan-generated content cleanup",
          isOptimal: true,
          points: 100,
          feedback: "Perfect! This approach protects the mascot's recognizable identity while leveraging AI for scalable production and fan engagement. Strict style guides ensure consistency across all touchpoints.",
          tools: "🛠️ Human design foundation, AI production: Use Midjourney or Adobe Firefly with detailed style guides, ControlNet for consistency."
        },
        {
          label: "Option D",
          icon: "❤️",
          cost: "€70k",
          time: "80h",
          description: "Entire mascot design, poses, and animations crafted by humans; AI is not used at all",
          isOptimal: false,
          points: 50,
          feedback: "Full human work ensures quality but is slow and expensive for the volume needed across multiple channels. AI can handle production variations while humans define the core IP.",
          tools: "💡 Better approach: Human designers create the foundation, AI scales production within defined rules."
        }
      ]
    },
    {
      title: "Festival Brand Takeovers",
      scenario: "You are sponsoring 50+ music festivals worldwide. An AI engine can scrape local trends, restyle logos, colors, and typography to match each festival's aesthetic, generating stage visuals and social content. Field tests show double social shares, but distorted logos risk brand recognition.",
      options: [
        {
          label: "Option A",
          icon: "❤️",
          cost: "€80k",
          time: "120h",
          description: "Have human designers create each festival asset manually, ensuring full brand consistency; no AI used",
          isOptimal: false,
          points: 50,
          feedback: "Perfect brand consistency but too slow and expensive for 50+ festivals. You'll miss festival deadlines and can't scale. AI can handle variations while protecting core brand elements.",
          tools: "💡 Better approach: Use AI for production speed while humans define non-negotiable brand rules."
        },
        {
          label: "Option B",
          icon: "⭐",
          cost: "€55k",
          time: "50h",
          description: "Provide a strict 'remix toolkit' with non-negotiables (logo, core color, typography). AI generates festival-specific visuals within these constraints; humans review outputs",
          isOptimal: true,
          points: 100,
          feedback: "Excellent balance! The remix toolkit protects brand identity while AI delivers local relevance at scale. This ensures recognition while maximizing festival engagement across 50+ events.",
          tools: "🛠️ Controlled AI creativity: Use Canva AI, Adobe Firefly with brand kits, or custom style guides in Midjourney for consistent variations."
        },
        {
          label: "Option C",
          icon: "⚡",
          cost: "€35k",
          time: "20h",
          description: "Give AI full creative freedom to remix assets for each festival, prioritizing engagement over brand consistency",
          isOptimal: false,
          points: 50,
          feedback: "High social engagement but dangerously low brand attribution. Your brand may look like 50 different companies. Engagement without recognition doesn't build long-term brand equity.",
          tools: "💡 Risk: Unconstrained AI tools will prioritize virality over brand recognition, weakening your sponsorship ROI."
        },
        {
          label: "Option D",
          icon: "🛠️",
          cost: "€50k",
          time: "45h",
          description: "Humans design templates and brand guardrails; AI generates most assets and minor variations; humans approve final outputs",
          isOptimal: false,
          points: 50,
          feedback: "Good approach but less efficient than a strict toolkit. Manual approvals for 50+ festivals slow production. Clearer upfront rules let AI work more autonomously.",
          tools: "💡 Consider: Tighten guardrails upfront so AI needs fewer manual reviews, improving speed without sacrificing control."
        }
      ]
    },
    {
      title: "Teen Multi-Platform Storytelling",
      scenario: "You need a multi-platform storytelling campaign targeting teens globally. The content must reflect slang, viral memes, and cultural nuances. AI can generate posts, videos, and influencer ideas instantly.",
      options: [
        {
          label: "Option A",
          icon: "⚡",
          cost: "€20k",
          time: "15h",
          description: "Generate all ideas, copy, and visuals with AI, making minor adjustments",
          isOptimal: false,
          points: 50,
          feedback: "Quick and cheap but culturally risky. AI often gets slang wrong, misses local nuances, and creates tone-deaf content. Teens spot inauthenticity instantly, damaging brand credibility.",
          tools: "💡 Risk: Tools like ChatGPT or Jasper lack cultural context; they need human validation for teen/youth content."
        },
        {
          label: "Option B",
          icon: "🛠️",
          cost: "€30k",
          time: "40h",
          description: "AI produces drafts; human teams in each market adapt content for cultural nuances",
          isOptimal: false,
          points: 50,
          feedback: "Better than full AI but still reactive. Humans spend time correcting AI mistakes rather than creating authentically from the start. Cultural accuracy requires human-led ideation.",
          tools: "💡 Consider: Lead with local human creators, use AI only for scaling production tasks like editing and formatting."
        },
        {
          label: "Option C",
          icon: "⭐",
          cost: "€45k",
          time: "50h",
          description: "Human creative teams co-develop the full concept with AI assisting only in production-heavy tasks (editing, formatting, visuals)",
          isOptimal: true,
          points: 100,
          feedback: "Perfect approach! Local human teams ensure cultural authenticity and trend relevance, while AI handles efficient production. This avoids tone-deaf content and builds genuine teen engagement.",
          tools: "🛠️ Human-led creative, AI production: Use CapCut, Descript, or Canva AI for editing; humans lead all creative strategy and cultural validation."
        },
        {
          label: "Option D",
          icon: "❤️",
          cost: "€70k",
          time: "100h",
          description: "Humans handle everything without AI assistance",
          isOptimal: false,
          points: 50,
          feedback: "Culturally authentic but too slow and expensive for multi-platform global rollout. AI can accelerate production tasks without compromising cultural accuracy when used correctly.",
          tools: "💡 Better approach: Keep human creative control but use AI for repetitive production to save time and budget."
        }
      ]
    },
    {
      title: "AI-Guided Holiday Animation",
      scenario: "You want a short animated ad telling a nostalgic, culturally-rich holiday story. AI can fully generate animation quickly, while humans ensure nuance, humor, and emotional depth.",
      options: [
        {
          label: "Option A",
          icon: "🛠️",
          cost: "€40k",
          time: "35h",
          description: "Humans design storyboards; AI fully generates animation with minimal adjustments",
          isOptimal: false,
          points: 50,
          feedback: "Storyboards help but aren't enough. AI needs detailed human prompts and direction to capture cultural nuance and emotional beats. Minimal human guidance risks generic, emotionally flat animation.",
          tools: "💡 Consider: Humans must craft detailed scene-by-scene prompts with emotional direction, not just storyboards."
        },
        {
          label: "Option B",
          icon: "❤️",
          cost: "€70k",
          time: "90h",
          description: "Humans design story, storyboard, and animate everything; AI not used",
          isOptimal: false,
          points: 50,
          feedback: "Highest emotional quality but very expensive and slow. AI can handle animation production efficiently when given detailed human creative direction, freeing humans for strategic storytelling.",
          tools: "💡 Better approach: Keep human story control, let AI handle animation rendering to save significant time and cost."
        },
        {
          label: "Option C",
          icon: "⭐",
          cost: "€55k",
          time: "50h",
          description: "Human teams craft the story and detailed prompts; AI produces the animation based on these, preserving emotional nuance",
          isOptimal: true,
          points: 100,
          feedback: "Optimal choice! Human storytelling ensures cultural resonance and emotional depth, while AI efficiently handles animation production. Detailed prompts guide AI to maintain quality and nuance.",
          tools: "🛠️ Human-guided AI animation: Use Runway, Pika, or Kling AI with detailed human prompts; humans direct every emotional beat and cultural element."
        },
        {
          label: "Option D",
          icon: "⚡",
          cost: "€30k",
          time: "20h",
          description: "AI generates the story and animation end-to-end with minor human tweaks",
          isOptimal: false,
          points: 50,
          feedback: "Fast and cheap but culturally shallow. AI lacks the lived experience to create nostalgic, culturally-rich stories. Holiday emotions and cultural traditions require human understanding.",
          tools: "💡 Risk: AI-generated stories lack emotional depth and cultural authenticity essential for holiday campaigns."
        }
      ]
    }
  ];

  const decisions = difficulty === 'easy' ? decisionsEasy : decisionsHard;

  // Load high scores from memory on component mount
  React.useEffect(() => {
    const easyScores = JSON.parse(localStorage.getItem('easyHighScores') || '[]');
    const hardScores = JSON.parse(localStorage.getItem('hardHighScores') || '[]');
    setHighScores(difficulty === 'easy' ? easyScores : hardScores);
  }, [difficulty]);

  const saveHighScore = (name, finalScore) => {
    const storageKey = difficulty === 'easy' ? 'easyHighScores' : 'hardHighScores';
    const currentScores = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    const newScore = {
      name: name.toUpperCase(),
      score: finalScore,
      date: new Date().toISOString()
    };
    
    const updatedScores = [...currentScores, newScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    
    localStorage.setItem(storageKey, JSON.stringify(updatedScores));
    setHighScores(updatedScores);
  };

  const handleNameSubmit = () => {
    if (playerName.length === 3) {
      saveHighScore(playerName, score);
      setShowNameEntry(false);
      setShowFeedbackForm(true);
    }
  };

  const handleFeedbackSubmit = () => {
    submitToGoogleForm(playerName, score, feedback);
    setShowFeedbackForm(false);
  };

  const handleSkipFeedback = () => {
    submitToGoogleForm(playerName, score, "No feedback provided");
    setShowFeedbackForm(false);
  };

  const submitToGoogleForm = (initials, finalScore, userFeedback) => {
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSfNaQG_7_w26Q3Zu_CcrulP0anM946ykrkisXnQR0JcCyBg7w/formResponse";
    
    // Build decision summary
    const decisionsSummary = choices.map((choice, index) => {
      const decision = decisions[index];
      const option = decision.options[choice.option];
      return `Q${index + 1}: ${option.label} (${choice.points}pts)`;
    }).join(", ");

    const formData = new FormData();
    formData.append("entry.1137466981", initials.toUpperCase());  // INITIALS
    formData.append("entry.891544908", finalScore.toString());    // Score
    formData.append("entry.2105719727", decisionsSummary);        // Decisions
    formData.append("entry.1259557320", difficulty === 'easy' ? 'Easy' : 'Hard'); // Mode
    formData.append("entry.358001929", userFeedback);             // Feedback

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    }).then(() => {
      console.log("Results submitted to Google Form successfully!");
    }).catch(err => {
      console.error("Error submitting to Google Form:", err);
    });
  };

  const selectDifficulty = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setDifficultySelected(true);
  };

  const makeChoice = (optionIndex) => {
    const decision = decisions[currentDecision];
    const selectedOption = decision.options[optionIndex];
    
    setLastPoints(selectedOption.points);
    setLastChoice(selectedOption.label);
    setScore(score + selectedOption.points);
    setChoices([...choices, { decision: currentDecision, option: optionIndex, points: selectedOption.points }]);
    setShowFeedback(true);
  };

  const nextDecision = () => {
    setShowFeedback(false);
    if (currentDecision < decisions.length - 1) {
      setCurrentDecision(currentDecision + 1);
    } else {
      setCurrentDecision(currentDecision + 1);
      setShowNameEntry(true);
    }
  };

  const restartGame = () => {
    setDifficultySelected(false);
    setDifficulty('');
    setCurrentDecision(0);
    setScore(0);
    setChoices([]);
    setShowFeedback(false);
    setShowNameEntry(false);
    setPlayerName('');
    setShowFeedbackForm(false);
    setFeedback('');
  };

  const renderDifficultySelect = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">🎯 Marketing Manager Challenge</h1>
          <p className="text-lg text-gray-600">Test your judgment: When should you use AI vs. Human expertise?</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Choose Your Difficulty Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => selectDifficulty('easy')}
              className="bg-gradient-to-br from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white rounded-2xl p-8 transform transition hover:scale-105 shadow-lg"
            >
              <div className="text-6xl mb-4">😊</div>
              <h3 className="text-2xl font-bold mb-3">Easy Mode</h3>
              <p className="text-sm mb-4">Clear scenarios with straightforward AI vs. Human choices. Perfect for learning the basics!</p>
              <div className="bg-white/20 rounded-lg p-3 text-xs">
                <p className="font-semibold mb-1">You'll face:</p>
                <p>• Obvious scale & efficiency tasks</p>
                <p>• Clear emotional storytelling needs</p>
                <p>• 2 straightforward options per scenario</p>
              </div>
            </button>
            
            <button
              onClick={() => selectDifficulty('hard')}
              className="bg-gradient-to-br from-red-500 to-purple-700 hover:from-red-600 hover:to-purple-800 text-white rounded-2xl p-8 transform transition hover:scale-105 shadow-lg"
            >
              <div className="text-6xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold mb-3">Hard Mode</h3>
              <p className="text-sm mb-4">Complex scenarios with cost/time trade-offs. Test your strategic thinking!</p>
              <div className="bg-white/20 rounded-lg p-3 text-xs">
                <p className="font-semibold mb-1">You'll face:</p>
                <p>• 4 options with budget & time constraints</p>
                <p>• Nuanced hybrid approaches</p>
                <p>• Real-world strategic dilemmas</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDecision = () => {
    const decision = decisions[currentDecision];
    
    if (showFeedback) {
      const selectedOption = decision.options.find(opt => opt.label === lastChoice);
      const isOptimal = selectedOption.isOptimal;
      
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl w-full">
            <div className="text-center mb-6">
              <div className={`text-6xl mb-4 ${isOptimal ? 'animate-bounce' : ''}`}>
                {isOptimal ? '🎉' : '💡'}
              </div>
              <h2 className={`text-3xl font-bold mb-2 ${isOptimal ? 'text-green-600' : 'text-orange-600'}`}>
                {isOptimal ? 'Optimal Choice!' : 'Suboptimal Choice'}
              </h2>
              <div className="text-5xl font-bold text-purple-600 mb-4">
                +{lastPoints} Points
              </div>
              <div className="bg-gray-100 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">You chose:</p>
                <p className="text-xl font-semibold text-gray-800">{lastChoice}</p>
                {difficulty === 'hard' && selectedOption.cost && (
                  <div className="flex justify-center gap-4 mt-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{selectedOption.cost}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedOption.time}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-6">
              <p className="text-gray-800 leading-relaxed mb-4">{selectedOption.feedback}</p>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-semibold text-blue-800">{selectedOption.tools}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold text-gray-700">
                Progress: {currentDecision + 1} / {decisions.length}
              </div>
              {currentDecision < decisions.length - 1 ? (
                <button
                  onClick={nextDecision}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transform transition hover:scale-105 shadow-lg"
                >
                  Next Decision →
                </button>
              ) : (
                <button
                  onClick={nextDecision}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transform transition hover:scale-105 shadow-lg"
                >
                  See Results 🏆
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    const isHardMode = difficulty === 'hard';
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-5xl w-full">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="text-3xl">{difficulty === 'easy' ? '😊' : '🔥'}</div>
              <div>
                <p className="text-sm text-gray-600">Decision {currentDecision + 1} of {decisions.length}</p>
                <div className="w-48 bg-gray-200 rounded-full h-2 mt-1">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all"
                    style={{ width: `${((currentDecision + 1) / decisions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Current Score</p>
              <p className="text-3xl font-bold text-purple-600">{score}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{decision.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-4">
              {decision.scenario}
            </p>
          </div>
          
          <div className={`grid grid-cols-1 ${isHardMode ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-4`}>
            {decision.options.map((option, index) => (
              <button
                key={index}
                onClick={() => makeChoice(index)}
                className="bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-2xl p-6 transform transition hover:scale-105 shadow-lg text-left"
              >
                <div className="text-4xl mb-3">{option.icon}</div>
                <h3 className="text-xl font-bold mb-2">{option.label}</h3>
                {isHardMode && option.cost && (
                  <div className="flex gap-3 mb-3 text-sm opacity-90">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{option.cost}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{option.time}</span>
                    </div>
                  </div>
                )}
                <p className="text-sm opacity-90">{option.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderNameEntry = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">🏆</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Game Over!</h1>
            <div className="text-6xl font-bold text-purple-600 mb-4">{score} pts</div>
            <p className="text-lg text-gray-600">Enter your initials for the leaderboard</p>
          </div>

          <div className="mb-6">
            <input
              type="text"
              maxLength={3}
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value.toUpperCase())}
              onKeyPress={(e) => e.key === 'Enter' && playerName.length === 3 && handleNameSubmit()}
              placeholder="AAA"
              className="w-full text-center text-6xl font-bold tracking-widest bg-gray-100 rounded-xl p-4 border-4 border-purple-300 focus:border-purple-600 focus:outline-none uppercase"
              style={{ letterSpacing: '0.5em' }}
            />
            <p className="text-sm text-gray-500 text-center mt-2">Enter 3 letters (your results will be submitted)</p>
          </div>

          <button
            onClick={handleNameSubmit}
            disabled={playerName.length !== 3}
            className={`w-full font-bold py-4 px-8 rounded-full transform transition shadow-lg ${
              playerName.length === 3
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Score
          </button>
        </div>
      </div>
    );
  };

  const renderFeedbackForm = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">💬</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Feedback Matters!</h1>
            <p className="text-lg text-gray-600">Help us improve this learning experience</p>
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              What did you think of this game? Any suggestions?
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts, what you learned, what could be better..."
              rows={6}
              className="w-full bg-gray-100 rounded-xl p-4 border-2 border-purple-300 focus:border-purple-600 focus:outline-none text-gray-800 resize-none"
            />
            <p className="text-sm text-gray-500 mt-2">Optional - but we'd love to hear from you!</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleFeedbackSubmit}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transform transition hover:scale-105 shadow-lg"
            >
              {feedback.trim() ? 'Submit Feedback' : 'Skip'}
            </button>
            <button
              onClick={handleSkipFeedback}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-4 px-8 rounded-full transform transition hover:scale-105 shadow-lg"
            >
              Skip & Continue
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const maxScore = decisions.length * 100;
    const percentage = (score / maxScore) * 100;
    
    let rating = '';
    let ratingColor = '';
    let ratingEmoji = '';
    
    if (percentage === 100) {
      rating = 'Marketing Genius!';
      ratingColor = 'text-yellow-600';
      ratingEmoji = '🏆';
    } else if (percentage >= 80) {
      rating = 'Expert Strategist';
      ratingColor = 'text-green-600';
      ratingEmoji = '⭐';
    } else if (percentage >= 60) {
      rating = 'Solid Performance';
      ratingColor = 'text-blue-600';
      ratingEmoji = '👍';
    } else {
      rating = 'Learning Opportunity';
      ratingColor = 'text-orange-600';
      ratingEmoji = '📚';
    }
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full max-h-screen overflow-y-auto">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">{ratingEmoji}</div>
            <h1 className={`text-4xl font-bold mb-2 ${ratingColor}`}>{rating}</h1>
            <div className="text-6xl font-bold text-purple-600 mb-2">{score} / {maxScore}</div>
            <p className="text-lg text-gray-600">Campaign Complete!</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🎯 When to Use AI vs. Human Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 shadow-md border-2 border-green-200">
                <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2 text-lg">
                  <Sparkles className="w-6 h-6" />
                  ✅ Use AI When You Need:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span><strong>Scale & Speed:</strong> Processing large volumes of data or content quickly (e.g., 100+ product descriptions, thousands of customer segments)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span><strong>Data Analysis:</strong> Predictive analytics, pattern recognition, media budget optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span><strong>Personalization at Scale:</strong> Individual customer targeting across thousands of users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span><strong>Real-Time Optimization:</strong> 24/7 campaign monitoring and automated bid adjustments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span><strong>Routine Tasks:</strong> Automated responses, data filtering, initial content drafts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span><strong>Efficiency Focus:</strong> When cost and time savings are the priority</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-md border-2 border-blue-200">
                <h3 className="font-bold text-blue-700 mb-3 flex items-center gap-2 text-lg">
                  <Users className="w-6 h-6" />
                  ✅ Use Humans When You Need:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Emotional Storytelling:</strong> Authentic narratives that create deep customer connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Ethical Oversight:</strong> Brand values, sustainability claims, sensitive messaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Creative Strategy:</strong> Original concepts, cultural nuance, breakthrough ideas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Authenticity & Trust:</strong> Curating UGC, building genuine relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Complex Problem-Solving:</strong> Non-routine situations requiring judgment and empathy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Critical Thinking:</strong> Strategic decisions, crisis management, ethical dilemmas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-purple-200">
                <h3 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  💼 The Future of Marketing Jobs
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>AI augments, not replaces.</strong> Marketing roles are transforming: routine tasks shift to AI, 
                  while strategic, creative, and ethical work becomes more valuable. Modern marketers need: 
                  <span className="text-purple-700 font-semibold"> AI literacy, prompt engineering skills, strategic oversight, 
                  ethical judgment for AI outputs</span>, and enhanced soft skills (empathy, creativity, critical thinking).
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm border border-orange-200">
                <h3 className="font-bold text-orange-700 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  🏆 Best Practice: The Blended Approach
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The winning strategy <strong>combines both</strong>: Use AI for execution, data analysis, scale, and optimization. 
                  Reserve human expertise for strategy, creative vision, ethical decisions, and emotional connection. 
                  <span className="text-orange-700 font-semibold"> Always maintain transparency about AI use</span>, especially 
                  with personalization and customer data. The most successful campaigns leverage AI's efficiency while 
                  keeping humans in control of meaning, values, and relationships.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={restartGame}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-full transform transition hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Try Another Mode
            </button>
          </div>

          {highScores.length > 0 && (
            <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-300">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
                🏆 High Scores - {difficulty === 'easy' ? 'Easy Mode' : 'Hard Mode'}
              </h2>
              <div className="space-y-2">
                {highScores.map((entry, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      index === 0
                        ? 'bg-gradient-to-r from-yellow-200 to-yellow-300 border-2 border-yellow-400'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-gray-700 w-8">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`}
                      </span>
                      <span className="text-3xl font-bold tracking-wider text-purple-700">
                        {entry.name}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-gray-800">{entry.score} pts</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (!difficultySelected) {
    return renderDifficultySelect();
  }

  if (showNameEntry) {
    return renderNameEntry();
  }

  if (showFeedbackForm) {
    return renderFeedbackForm();
  }

  if (showFeedback && currentDecision >= decisions.length) {
    return renderResults();
  }

  if (currentDecision >= decisions.length) {
    return renderResults();
  }

  return renderDecision();
};

export default MarketingGame;