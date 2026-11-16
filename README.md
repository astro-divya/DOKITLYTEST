# DoKitly Build 46 — Story & Voice Studio (Isolated Test)

This is a standalone test package. It does not modify or replace the live DoKitly website.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a modern browser, or upload the folder to a new GitHub repository and enable GitHub Pages.
3. Open **Text Tools → Story & Voice Studio**.

## Included
- Text category entry and tool page.
- Script input and TXT upload.
- Basic local format conversion: Story/Novel, Screenplay, Podcast and YouTube narration.
- Speaker detection using `Character: dialogue` or `Character — dialogue`.
- Per-character browser voice assignment, speed and pitch controls.
- Sequential playback, pause/resume and stop.
- TXT and JSON project export.
- Light/dark theme.

## Honest limitations
- Speech uses the browser's Web Speech `speechSynthesis` engine and voices installed/provided by the browser/operating system.
- Voice availability, Hindi pronunciation, language coverage and quality vary by device.
- This test build does **not** generate downloadable MP3/WAV audio. Browser playback is not the same as audio-file export.
- Format conversion is rule-based formatting, not generative AI rewriting.
- TXT upload is limited to 2 MB in this test build.

## Category placement
The tool is listed in `text-tools/index.html`. No production repository files are changed.
