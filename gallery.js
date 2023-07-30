// Get references to the featured image and the thumbnail list
const featuredImage = document.getElementById('featured-image');
const thumbnailList = document.getElementById('thumbnail-list');

// Add a click event listener to the thumbnail list
thumbnailList.addEventListener('click', function (event) {
	// Check if the clicked element is an <img> element inside a list item
	if (event.target.tagName === 'IMG' && event.target.parentElement.tagName === 'LI') {
		// Get the source of the clicked thumbnail image
		const thumbnailSrc = event.target.src;
		
		// Update the featured image's src and alt attributes
		featuredImage.src = thumbnailSrc.replace('-small', '-large');
		featuredImage.alt = event.target.alt;
		
		// Update the caption
		const caption = event.target.alt;
		const figcaption = featuredImage.nextElementSibling;
		figcaption.textContent = caption;
		
		// Remove the 'active' class from all thumbnails
		const thumbnails = thumbnailList.getElementsByTagName('img');
		for (const thumbnail of thumbnails) {
			thumbnail.classList.remove('active');
		}
		
		// Add the 'active' class to the clicked thumbnail
		event.target.classList.add('active');
	}
});
