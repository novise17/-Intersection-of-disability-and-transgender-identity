// Handle broken images and provide visual feedback
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('error', function() {
      // Log missing images for debugging
      console.warn('Image failed to load: ' + this.src);
      
      // Add visual indicator for broken images
      this.style.background = '#f0f0f0';
      this.style.border = '2px solid #ccc';
      this.style.padding = '20px';
      this.style.minHeight = '200px';
      this.style.display = 'flex';
      this.style.alignItems = 'center';
      this.style.justifyContent = 'center';
      this.style.color = '#999';
      this.style.fontSize = '14px';
      this.style.textAlign = 'center';
      
      // Create alt text display
      const altText = this.getAttribute('alt') || 'Image not available';
      this.title = 'Missing: ' + this.src;
    });
    
    img.addEventListener('load', function() {
      // Image loaded successfully - ensure it displays properly
      this.style.background = 'transparent';
      this.style.border = 'none';
    });
  });
});
