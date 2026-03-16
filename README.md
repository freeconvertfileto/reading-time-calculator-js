# Reading Time Calculator

Estimate reading time and speaking time from text with a configurable words-per-minute rate, entirely in the browser.

**Live Demo:** https://file-converter-free.com/en/text-tools/reading-time-calculator

## How It Works

Word count uses `text.match(/\S+/g)` (non-whitespace sequences). Character count is `text.length`. Sentence count matches `/[^.!?]+[.!?]+/g`, defaulting to 1 if no punctuation is found but words exist. Paragraph count splits on `/\n\s*\n/` and filters to non-empty paragraphs. Reading time is `wordCount / wpm` where `wpm` defaults to 200 and is configurable via a number input. Speaking time uses a fixed 130 wpm rate. Both are formatted by `formatTime(minutes)`: values under 1 minute show `< 1 min`; under 60 minutes show `N min`; above 60 show `Nh Mm`. All stats update live on `input` and when the WPM input changes.

## Features

- Configurable reading WPM (default 200)
- Fixed speaking time at 130 wpm
- Word count, character count, sentence count, paragraph count
- Live update on every keystroke

## Browser APIs Used

- (No external APIs — pure DOM)

## Code Structure

| File | Description |
|------|-------------|
| `reading-time-calculator.js` | IIFE — `\S+` word count, sentence/paragraph regex, `wordCount/wpm` reading time, 130wpm speaking time, `formatTime` with hours support |

## Usage

| Element ID | Purpose |
|------------|---------|
| `rtcInput` | Input text textarea |
| `rtcWpm` | Words-per-minute number input |
| `rtcReadingTime` | Estimated reading time display |
| `rtcSpeakTime` | Estimated speaking time display |
| `rtcWords` | Word count display |
| `rtcChars` | Character count display |
| `rtcSentences` | Sentence count display |
| `rtcParagraphs` | Paragraph count display |

## License

MIT
