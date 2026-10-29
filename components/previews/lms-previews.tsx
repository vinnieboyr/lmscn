"use client"

import { FillBlank } from "@/registry/default/fill-blank/fill-blank"
import { Flashcards } from "@/registry/default/flashcards/flashcards"
import { Hotspot } from "@/registry/default/hotspot/hotspot"
import { Match } from "@/registry/default/match/match"
import { Order } from "@/registry/default/order/order"
import { ProgressTracker } from "@/registry/default/progress-tracker/progress-tracker"
import { Quiz } from "@/registry/default/quiz/quiz"
import { ReadingPassage } from "@/registry/default/reading-passage/reading-passage"
import { Scramble } from "@/registry/default/scramble/scramble"
import { SpacedRepetition } from "@/registry/default/spaced-repetition/spaced-repetition"

function PreviewShell({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) {
  return (
    <div
      data-lms-preview={name}
      className="not-prose my-8 rounded-xl border border-border bg-background p-4 text-foreground shadow-sm md:p-6"
    >
      {children}
    </div>
  )
}

export function QuizPreview() {
  return (
    <PreviewShell name="quiz">
      <Quiz
        quizData={{
          title: "JavaScript Basics",
          description: "Test your knowledge of JS fundamentals.",
          passingScore: 80,
          showExplanations: true,
          shuffle: false,
          questions: [
            {
              id: "q1",
              type: "single",
              question: "What does `typeof null` return?",
              options: [
                { id: "a", label: "null" },
                {
                  id: "b",
                  label: "object",
                  explanation: "A historical quirk in the JS spec.",
                },
                { id: "c", label: "undefined" },
              ],
              correctIds: ["b"],
              hint: "It's a well-known JavaScript oddity.",
            },
            {
              id: "q2",
              type: "multiple",
              question: "Which are falsy values in JavaScript?",
              options: [
                { id: "a", label: "0" },
                { id: "b", label: '""' },
                { id: "c", label: '"false"' },
                { id: "d", label: "null" },
              ],
              correctIds: ["a", "b", "d"],
              points: 2,
            },
            {
              id: "q3",
              type: "true-false",
              question: "Arrays are objects in JavaScript.",
              options: [
                { id: "true", label: "True" },
                { id: "false", label: "False" },
              ],
              correctIds: ["true"],
            },
          ],
        }}
      />
    </PreviewShell>
  )
}

export function FlashcardsPreview() {
  return (
    <PreviewShell name="flashcards">
      <Flashcards
        flashcardsData={{
          title: "Spanish Vocabulary",
          description: "Core greetings",
          shuffle: false,
          showRatings: true,
          cards: [
            { id: "1", front: "Hola", back: "Hello", tag: "Greetings" },
            { id: "2", front: "Gracias", back: "Thank you", tag: "Greetings" },
            { id: "3", front: "Por favor", back: "Please", tag: "Greetings" },
          ],
        }}
      />
    </PreviewShell>
  )
}

export function MatchPreview() {
  return (
    <PreviewShell name="match">
      <Match
        matchData={{
          title: "Capital Cities",
          description: "Match each country to its capital.",
          shuffle: false,
          pairs: [
            { id: "1", left: "France", right: "Paris" },
            { id: "2", left: "Japan", right: "Tokyo" },
            { id: "3", left: "Egypt", right: "Cairo" },
            { id: "4", left: "Kenya", right: "Nairobi" },
          ],
        }}
      />
    </PreviewShell>
  )
}

export function FillBlankPreview() {
  return (
    <PreviewShell name="fill-blank">
      <FillBlank
        fillBlankData={{
          title: "Biology",
          description: "Complete each sentence.",
          showCorrection: true,
          questions: [
            {
              id: "q1",
              sentence: "The powerhouse of the cell is the ___.",
              answers: ["mitochondria"],
              alternatives: [["mitochondrion"]],
              hint: "It produces ATP.",
            },
            {
              id: "q2",
              sentence: "Water is made of ___ and ___.",
              answers: ["hydrogen", "oxygen"],
            },
          ],
        }}
      />
    </PreviewShell>
  )
}

export function ScramblePreview() {
  return (
    <PreviewShell name="scramble">
      <Scramble
        scrambleData={{
          title: "Science Terms",
          description: "Unscramble the word that matches the clue.",
          questions: [
            {
              id: "1",
              answer: "cell",
              clue: "Basic unit of life",
              clueImage: "/diagrams/cell.svg",
            },
            {
              id: "2",
              answer: "photosynthesis",
              clue: "How plants make food",
            },
          ],
        }}
      />
    </PreviewShell>
  )
}

export function OrderPreview() {
  return (
    <PreviewShell name="order">
      <Order
        orderData={{
          title: "Star Lifecycle",
          description: "Put the stages in the correct sequence.",
          questions: [
            {
              id: "q1",
              prompt: "Order the stages of a star's life:",
              hint: "Starts with a cloud of gas and dust.",
              items: [
                {
                  id: "1",
                  label: "Nebula",
                  description: "A cloud of gas and dust",
                },
                { id: "2", label: "Protostar" },
                { id: "3", label: "Main Sequence" },
                { id: "4", label: "Red Giant" },
                { id: "5", label: "White Dwarf" },
              ],
            },
          ],
        }}
      />
    </PreviewShell>
  )
}

export function ReadingPassagePreview() {
  return (
    <PreviewShell name="reading-passage">
      <ReadingPassage
        readingPassageData={{
          title: "The Water Cycle",
          introduction: "Learn how water moves through Earth's systems.",
          readingTimeMinutes: 3,
          hidePassageOnQuestions: false,
          content: `Solar energy drives evaporation, turning liquid water into vapour. This vapour rises, cools, and condenses into clouds. Water then falls back to the surface as precipitation — rain, snow, or hail — and collects in rivers, lakes, and oceans before the cycle begins again.`,
          questions: [
            {
              id: "q1",
              type: "single",
              question: "What drives the water cycle?",
              options: [
                { id: "a", label: "The Moon" },
                { id: "b", label: "Solar energy" },
                { id: "c", label: "Ocean tides" },
              ],
              correctIds: ["b"],
              explanation: "The sun provides energy to evaporate water.",
            },
            {
              id: "q2",
              type: "true-false",
              question: "Condensation happens when water vapour cools.",
              options: [
                { id: "true", label: "True" },
                { id: "false", label: "False" },
              ],
              correctIds: ["true"],
              explanation: "Cooling vapour condenses into clouds.",
            },
          ],
        }}
      />
    </PreviewShell>
  )
}

export function ProgressTrackerPreview() {
  return (
    <PreviewShell name="progress-tracker">
      <ProgressTracker
        progressTrackerData={{
          learnerName: "Alex",
          totalXp: 340,
          xpToNextLevel: 500,
          level: 4,
          streak: 7,
          units: [
            {
              id: "u1",
              title: "Biology Unit 1",
              lessons: [
                {
                  id: "l1",
                  title: "The Cell",
                  status: "completed",
                  xp: 50,
                  type: "reading",
                  score: 92,
                },
                {
                  id: "l2",
                  title: "Cell Organelles",
                  status: "current",
                  xp: 100,
                  type: "quiz",
                },
                {
                  id: "l3",
                  title: "Match Functions",
                  status: "available",
                  xp: 75,
                  type: "match",
                },
                {
                  id: "l4",
                  title: "Label the Heart",
                  status: "locked",
                  xp: 80,
                  type: "hotspot",
                },
              ],
            },
          ],
        }}
      />
    </PreviewShell>
  )
}

export function SpacedRepetitionPreview() {
  return (
    <PreviewShell name="spaced-repetition">
      <SpacedRepetition
        spacedRepetitionData={{
          title: "French Review",
          description: "Grade each card after you reveal the answer.",
          totalCards: 120,
          dueCards: [
            {
              id: "1",
              front: "bonjour",
              back: "hello",
              interval: 3,
              easeFactor: 2.5,
              tags: ["Greetings"],
            },
            {
              id: "2",
              front: "merci",
              back: "thank you",
              interval: 7,
              easeFactor: 2.8,
            },
            {
              id: "3",
              front: "au revoir",
              back: "goodbye",
              interval: 1,
              easeFactor: 2.1,
            },
          ],
        }}
      />
    </PreviewShell>
  )
}

export function HotspotPreview() {
  return (
    <PreviewShell name="hotspot">
      <Hotspot
        hotspotData={{
          title: "Heart Anatomy",
          description: "Label each chamber of the heart.",
          questions: [
            {
              id: "q1",
              imageUrl: "/diagrams/heart.svg",
              imageAlt: "Diagram of the human heart",
              prompt: "Label the four chambers:",
              caseSensitive: false,
              points: [
                {
                  id: "p1",
                  x: 30,
                  y: 40,
                  label: "Left Ventricle",
                  description: "Pumps oxygenated blood to the body.",
                },
                {
                  id: "p2",
                  x: 60,
                  y: 40,
                  label: "Right Ventricle",
                  description: "Pumps blood to the lungs.",
                },
                { id: "p3", x: 30, y: 20, label: "Left Atrium" },
                { id: "p4", x: 60, y: 20, label: "Right Atrium" },
              ],
            },
          ],
        }}
      />
    </PreviewShell>
  )
}
