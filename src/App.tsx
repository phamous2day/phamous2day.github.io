const App = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '2rem',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        🎉 Vanilla Portfolio Ready!
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#666', maxWidth: '600px' }}>
        Your vanilla HTML/CSS/JS portfolio has been created and is ready for GitHub Pages deployment.
      </p>
      <div style={{ 
        padding: '1.5rem', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '0.5rem',
        maxWidth: '500px'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>📁 Files for GitHub Pages:</h3>
        <ul style={{ textAlign: 'left', fontSize: '0.9rem' }}>
          <li><strong>index.html</strong> - Complete portfolio</li>
          <li><strong>styles.css</strong> - All styles & animations</li>
          <li><strong>script.js</strong> - Interactive functionality</li>
          <li><strong>diamond-head-bg.jpg</strong> - Hero background</li>
        </ul>
      </div>
      <p style={{ fontSize: '0.9rem', color: '#888' }}>
        Simply download these files and upload them to your GitHub Pages repository!
      </p>
    </div>
  );
};

export default App;