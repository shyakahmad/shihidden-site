/*****************************************
  DROPDOWN MENU TOGGLE ON LOGO CLICK
******************************************/
const logoContainer = document.querySelector('.logo-container');
if (logoContainer) {
  logoContainer.addEventListener('click', function(e) {
    // Prevent propagation so clicking the logo doesn't trigger other click events
    e.stopPropagation();
    const dropdown = logoContainer.querySelector('.dropdown-menu');
    if (dropdown) {
      // Toggle dropdown display on click
      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
      } else {
        dropdown.style.display = 'block';
      }
    }
  });
}

// Hide dropdown when clicking outside
document.addEventListener('click', function() {
  const dropdowns = document.querySelectorAll('.dropdown-menu');
  dropdowns.forEach(dropdown => {
    dropdown.style.display = 'none';
  });
});

/*****************************************
  PLAYFUL EFFECT FOR "shihidden" TITLE
******************************************/
const titleDiv = document.getElementById('shihidden-title');
if (titleDiv) {
  setTimeout(() => {
    titleDiv.classList.add('loaded');
  }, 500);

  document.body.addEventListener('click', () => {
    titleDiv.classList.toggle('loaded');
  });
}


/*****************************************
  IMAGE DATA & INFINITE SCROLL
******************************************/
// Example array of image paths. Replace with your own.
const allImages = [
  'images/archive1.WebP',
  'images/archive2.jpg',
  'images/archive3.jpg',
  'images/archive4.jpg',
  'images/archive5.jpg',
  'images/archive6.jpg',
  'images/archive7.jpg',
  'images/archive8.jpg',
  'images/archive9.jpg',
  'images/archive10.jpg',
  'images/archive11.jpg',
  'images/archive12.jpg',
  'images/archive13.jpg',
  'images/archive14.jpg',
  'images/archive15.jpg',
  'images/archive16.jpg',
  'images/archive17.jpg',
  'images/archive18.jpg',
  'images/archive19.jpg',
  'images/archive20.jpg',
  'images/archive21.jpg',
  'images/archive22.jpg',
  'images/archive23.jpg',
  'images/archive24.jpg',
  'images/archive25.jpg',
  'images/archive26.jpg',
  'images/archive27.jpg',
  'images/archive28.jpg',
  'images/archive29.jpg',
  'images/archive30.jpg',
  'images/archive31.jpg',
  'images/archive32.jpg',
  'images/archive33.jpg',
  'images/archive35.jpg',
  'images/archive36.jpg',
  'images/archive34.jpg',
  'images/archive37.jpg',
  'images/archive38.jpg',
  'images/archive39.jpg',
  'images/archive40.jpg',
  'images/archive41.jpg',
  'images/archive42.jpg',
  'images/archive43.jpg',
  'images/archive44.jpg',
  'images/archive45.jpg',
  'images/archive46.jpg',
  'images/archive47.jpg',
  'images/archive48.jpg',
  'images/archive49.jpg',
  'images/archive50.jpg',
  'images/archive51.jpg',
  'images/archive52.jpg',
  'images/archive53.jpg',
  'images/archive54.jpg',
  'images/archive55.jpg',
  'images/archive56.jpg',
  'images/archive57.jpg',
  'images/archive58.jpg',
  'images/archive59.jpg',
  'images/archive60.jpg',
  'images/archive61.jpg',
  'images/archive62.jpg',
  'images/archive63.jpg',
  'images/archive64.jpg',
  'images/archive65.jpg',
  'images/archive66.jpg',
  'images/archive67.jpg',
  'images/archive68.jpg',
  'images/archive69.jpg',
  'images/archive70.jpg',
  'images/archive71.jpg',
  'images/archive72.jpg',
  'images/archive73.jpg',
  'images/archive74.jpg',
  'images/archive75.jpg',
  'images/archive76.jpg',
  'images/archive77.jpg',
  'images/archive78.jpg',
  'images/archive79.jpg',
  'images/archive80.jpg',
  'images/archive81.jpg',
  'images/archive82.jpg',
  'images/archive83.jpg',
  'images/archive84.jpg',
  'images/archive85.jpg',
  'images/archive86.jpg',
  'images/archive87.jpg',
  'images/archive88.jpg',
  'images/archive89.jpg',
  'images/archive90.jpg',
  'images/archive91.jpg',
  'images/archive92.jpg',
  'images/archive93.jpg',
  'images/archive94.jpg',
  'images/archive95.jpg',
  'images/archive96.jpg',
  'images/archive97.jpg',
  'images/archive98.jpg',
  'images/archive99.jpg',
  'images/archive100.jpg',
  'images/archive101.jpg',
  'images/archive102.jpg',
  'images/archive103.jpg',
  'images/archive104.jpg',
  'images/archive105.jpg',
  'images/archive106.jpg',
  'images/archive107.jpg',
  'images/archive108.jpg',
  'images/archive109.jpg',
  'images/archive110.jpg',
  'images/archive111.jpg',
  'images/archive112.jpg',
  'images/archive113.jpg',
  'images/archive114.jpg',
  'images/archive115.jpg',
  'images/archive116.jpg',
  'images/archive117.jpg',
  'images/archive118.jpg',
  'images/archive119.jpg',
  'images/archive120.jpg',
  'images/archive121.jpg',
  'images/archive122.jpg',
  'images/archive123.jpg',
  'images/archive124.jpg',
  'images/archive125.jpg',
  'images/archive126.jpg',
  'images/archive127.jpg',
  


  // Add as many as you want
];



let loadedCount = 0;
const batchSize = 4;

function loadNextBatch() {
  const masonry = document.getElementById('masonry');
  if (!masonry) return;

  // Create a fragment to append items at once.
  const fragment = document.createDocumentFragment();
  const endIndex = loadedCount + batchSize;
  const slice = allImages.slice(loadedCount, endIndex);

  slice.forEach(src => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    const img = document.createElement('img');
    img.src = src;
    itemDiv.appendChild(img);
    fragment.appendChild(itemDiv);
  });

  masonry.appendChild(fragment);
  loadedCount += batchSize;

  // Wait until all images in the container are loaded, then refresh Masonry.
  imagesLoaded(masonry, function() {
    if (window.msnry) {
      window.msnry.reloadItems();
      window.msnry.layout();
    }
  });
}

function onScroll() {
  const scrollPosition = window.innerHeight + window.scrollY;
  const threshold = document.body.offsetHeight - 200;
  if (scrollPosition >= threshold) {
    loadNextBatch();
  }
}

/*****************************************
  Masonry.js Initialization
******************************************/
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('hidden.html')) {
    loadNextBatch(); // Load first batch of images
    window.addEventListener('scroll', onScroll);

    // Initialize Masonry on the container with id "masonry"
   
    
  }
});

/*****************************************
  CUSTOM CONTEXT MENU (Share & Download)
******************************************/
let currentImageSrc = null;
const customMenu = document.getElementById('custom-menu');
const shareOption = document.getElementById('share-option');
const downloadOption = document.getElementById('download-option');

document.addEventListener('click', () => {
  if (customMenu) customMenu.style.display = 'none';
});

document.addEventListener('contextmenu', (e) => {
  if (e.target.tagName === 'IMG' && e.target.closest('.masonry')) {
    e.preventDefault();
    currentImageSrc = e.target.src;
    if (customMenu) {
      customMenu.style.left = `${e.pageX}px`;
      customMenu.style.top = `${e.pageY}px`;
      customMenu.style.display = 'block';
    }
  }
});

if (shareOption) {
  shareOption.addEventListener('click', () => {
    if (!currentImageSrc) return;
    if (navigator.share) {
      navigator.share({
        title: 'Check out this pic',
        text: 'Found something cool on shihidden!',
        url: currentImageSrc
      }).catch((err) => {
        console.log('Sharing failed:', err);
      });
    } else {
      alert('Sharing not supported in this browser. Try copying the URL.');
    }
    if (customMenu) customMenu.style.display = 'none';
  });
}

if (downloadOption) {
  downloadOption.addEventListener('click', () => {
    if (!currentImageSrc) return;
    const link = document.createElement('a');
    link.href = currentImageSrc;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (customMenu) customMenu.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('hidden.html')) {
    loadNextBatch(); // Load first batch of images
    window.addEventListener('scroll', onScroll);
  }

  // Disable scrolling on About Us page
  if (window.location.pathname.includes('about.html')) {
    document.body.style.overflow = 'hidden';
  }
});
