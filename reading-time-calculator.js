(function() {
    var inputEl = document.getElementById('rtcInput');
    var wpmEl = document.getElementById('rtcWpm');
    var readingTimeEl = document.getElementById('rtcReadingTime');
    var speakTimeEl = document.getElementById('rtcSpeakTime');
    var wordsEl = document.getElementById('rtcWords');
    var charsEl = document.getElementById('rtcChars');
    var sentencesEl = document.getElementById('rtcSentences');
    var paragraphsEl = document.getElementById('rtcParagraphs');

    function formatTime(minutes) {
        if (minutes < 1) return '< 1 min';
        if (minutes < 60) return Math.round(minutes) + ' min';
        var h = Math.floor(minutes / 60);
        var m = Math.round(minutes % 60);
        return h + 'h ' + (m > 0 ? m + 'm' : '');
    }

    function calculate() {
        var text = inputEl ? inputEl.value : '';
        var wpm = wpmEl ? parseInt(wpmEl.value) || 200 : 200;
        var wordMatches = text.match(/\S+/g);
        var wordCount = wordMatches ? wordMatches.length : 0;
        var charCount = text.length;
        var sentenceMatches = text.match(/[^.!?]+[.!?]+/g);
        var sentenceCount = sentenceMatches ? sentenceMatches.length : (wordCount > 0 ? 1 : 0);
        var paragraphMatches = text.split(/\n\s*\n/).filter(function(p) { return p.trim().length > 0; });
        var paragraphCount = paragraphMatches.length;

        var readingMins = wordCount / wpm;
        var speakMins = wordCount / 130;

        if (readingTimeEl) readingTimeEl.textContent = wordCount > 0 ? formatTime(readingMins) : '0 min';
        if (speakTimeEl) speakTimeEl.textContent = wordCount > 0 ? formatTime(speakMins) : '0 min';
        if (wordsEl) wordsEl.textContent = wordCount.toLocaleString();
        if (charsEl) charsEl.textContent = charCount.toLocaleString();
        if (sentencesEl) sentencesEl.textContent = sentenceCount;
        if (paragraphsEl) paragraphsEl.textContent = paragraphCount;
    }

    if (inputEl) inputEl.addEventListener('input', calculate);
    if (wpmEl) wpmEl.addEventListener('change', calculate);

    calculate();
})();
