// Debug utility to help track down issues
export const logEnvironmentInfo = () => {
  console.group('Environment Information');
  
  // Log import.meta environment variables
  try {
    console.log('import.meta.env.MODE:', (import.meta as any).env?.MODE || 'Not available');
    console.log('import.meta.env.PROD:', (import.meta as any).env?.PROD || false);
    console.log('import.meta.env.DEV:', (import.meta as any).env?.DEV || false);
    console.log('import.meta.env.BASE_URL:', (import.meta as any).env?.BASE_URL || '/');
  } catch (error) {
    console.error('Error accessing import.meta.env:', error);
  }
  
  // Log window location information
  console.log('Window Location:');
  console.log('- href:', window.location.href);
  console.log('- pathname:', window.location.pathname);
  console.log('- origin:', window.location.origin);
  
  // Log document information
  console.log('Document:');
  console.log('- readyState:', document.readyState);
  console.log('- #root element exists:', !!document.getElementById('root'));
  
  console.groupEnd();
};

// Log CSS information
export const logCssInfo = () => {
  console.group('CSS Information');
  
  // Check for loaded stylesheets
  const styleSheets = Array.from(document.styleSheets);
  console.log('Number of stylesheets loaded:', styleSheets.length);
  
  styleSheets.forEach((sheet, index) => {
    try {
      console.log(`Stylesheet #${index}:`, sheet.href || '(inline)');
    } catch (e) {
      console.log(`Stylesheet #${index}: Unable to access (possible CORS issue)`);
    }
  });
  
  // Check if Tailwind classes are working
  const testDiv = document.createElement('div');
  testDiv.className = 'bg-blue-500';
  document.body.appendChild(testDiv);
  
  setTimeout(() => {
    const styles = window.getComputedStyle(testDiv);
    console.log('Tailwind bg-blue-500 computed backgroundColor:', styles.backgroundColor);
    document.body.removeChild(testDiv);
  }, 100);
  
  console.groupEnd();
}; 