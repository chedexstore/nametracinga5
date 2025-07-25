document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('nameInput');
  const repetitionsInput = document.getElementById('repetitions');
  const lineHeightInput = document.getElementById('lineHeight');
  const lineHeightDisplay = document.getElementById('lineHeightDisplay');
  const letterSpacingInput = document.getElementById('letterSpacing');
  const letterSpacingDisplay = document.getElementById('letterSpacingDisplay');
  const generatePrintBtn = document.getElementById('generatePrintBtn');
  const pageDiv = document.getElementById('page');

  function createLine(top, height, color, style = 'solid') {
    const line = document.createElement('div');
    line.style.position = 'absolute';
    line.style.top = `${top}px`;
    line.style.left = '0';
    line.style.right = '0';
    line.style.height = height;
    if (style === 'solid') {
      line.style.borderBottom = `1px ${style} ${color}`;
    } else {
      line.style.borderBottom = `1px ${style} ${color}`;
    }
    return line;
  }

  function generatePracticeSheet() {
    const name = nameInput.value || 'Sample';
    const repetitions = parseInt(repetitionsInput.value) || 5;
    const lineHeight = parseInt(lineHeightInput.value) || 55;
    const letterSpacing = parseInt(letterSpacingInput.value) || 0;

    pageDiv.innerHTML = '';

    for (let i = 0; i < repetitions; i++) {
      const lineContainer = document.createElement('div');
      lineContainer.style.position = 'relative';
      lineContainer.style.height = `${lineHeight}px`;
      lineContainer.style.marginBottom = '20px';
      lineContainer.style.pageBreakInside = 'avoid';

      const topLine = createLine(3, '1px', 'rgba(74, 111, 165, 0.3)');
      const middleLine = createLine(lineHeight / 2, '1px', 'rgba(255, 107, 107, 0.7)', 'dashed');
      const bottomLine = createLine(lineHeight, '1px', 'rgba(74, 111, 165, 0.3)');

      const traceText = document.createElement('div');
      traceText.style.position = 'absolute';
      traceText.style.top = '0';
      traceText.style.left = '0';
      traceText.style.right = '0';
      traceText.style.height = `${lineHeight}px`;
      traceText.style.fontFamily = `'KGPrimaryDots', sans-serif`;
      traceText.style.fontSize = `${lineHeight * 1.5}px`;
      traceText.style.lineHeight = `${lineHeight * 1.1}px`;
      traceText.style.color = '#333333';
      traceText.style.letterSpacing = `${letterSpacing}px`;
      traceText.style.textAlign = 'left';

      const textSpan = document.createElement('span');
      textSpan.style.display = 'inline-block';
      textSpan.style.position = 'relative';
      textSpan.style.top = `${lineHeight * 0.05}px`;
      textSpan.textContent = name;

      traceText.appendChild(textSpan);
      lineContainer.appendChild(topLine);
      lineContainer.appendChild(middleLine);
      lineContainer.appendChild(bottomLine);
      lineContainer.appendChild(traceText);
      pageDiv.appendChild(lineContainer);
    }

    lineHeightDisplay.textContent = `${lineHeight}px`;
    letterSpacingDisplay.textContent = `${letterSpacing}px`;
  }

  nameInput.addEventListener('input', generatePracticeSheet);
  repetitionsInput.addEventListener('input', generatePracticeSheet);
  lineHeightInput.addEventListener('input', generatePracticeSheet);
  letterSpacingInput.addEventListener('input', generatePracticeSheet);
  generatePrintBtn.addEventListener('click', () => window.print());

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  generatePracticeSheet();
});
