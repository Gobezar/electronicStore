function CurrentTheme() {
    const switchButton = document.getElementById('switchMode');
    const currentTheme = document.getElementById('currentTheme');
  
    switchButton.textContent = (currentTheme.getAttribute('href') === 'css/style.css') ? '⚫' : '⚪';
    switchButton.addEventListener('click', toggleTheme);
  }
  
  function toggleTheme() {
    const switchButton = document.getElementById('switchMode');
    const currentTheme = document.getElementById('currentTheme');
  
    if (currentTheme.getAttribute('href') === 'css/style.css') {
      currentTheme.href = 'css/darkTheme.css';
      switchButton.textContent = '⚪';
    } else {
      currentTheme.href = 'css/style.css';
      switchButton.textContent = '⚫';
    }
  }
  
  CurrentTheme();
  