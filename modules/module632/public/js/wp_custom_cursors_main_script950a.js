/*
 * WP Custom Cursors | WordPress Cursor Plugin
 * Author: Web_Trendy
 * Copyright 2020 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Open your hands if you want to be held." -Rumi
 *
 */    

(function(){

	window.addEventListener('DOMContentLoaded', function(event) {
		window.addEventListener('load', function(event) {

			const getMousePosition = function(e) {
		        var posx = 0;
		        var posy = 0;
		        posx = e.clientX;
	            posy = e.clientY;
		        return { x : posx, y : posy }
		    }

		    var mousePosition = {x:0, y:0};

			// Create Cursor Element
			var body = document.querySelector('body'),
			cursorWrapper = document.createElement('div'),
			cursorEl1 = document.createElement('div'),
			cursorEl2 = document.createElement('div'),
			frames = document.querySelectorAll('iframe');

			cursorWrapper.classList.add('cursor');
			cursorEl1.classList.add('cursor-el1');
			cursorEl2.classList.add('cursor-el2');
			cursorWrapper.appendChild(cursorEl1);
			cursorWrapper.appendChild(cursorEl2);
			body.appendChild(cursorWrapper);

			body.addEventListener('mousemove', function(ev) {mousePosition = getMousePosition(ev)});

			// IFrame Stop Cursor
			if (frames.length > 0) {
				[...frames].forEach(function(frame){
					frame.addEventListener('mouseenter', function(){
						cursorWrapper.classList.add('iframe-hover');
					});
					frame.addEventListener('mouseleave', function(){
						cursorWrapper.classList.remove('iframe-hover');
					});
				});
			}

			requestAnimationFrame(function() {renderCursor()});

			function renderCursor() {
	   			cursorEl1.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
	   			cursorEl2.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
				requestAnimationFrame(function() { renderCursor()});
			}

			// For Each Cursor
			[...cursors].forEach(function(cursor) {
				var elements = null;
				// Activate Cursor on Body
				if (cursor.body_activation == 1) {
					elements = document.querySelectorAll("body");
				} 

				// Activate Cursor on Elements
				else {
					switch (cursor.selector_type) {
						case 'tag':
							elements = document.querySelectorAll(cursor.selector_data);
					    break;

					    case 'class':
						    elements = document.querySelectorAll("." + cursor.selector_data);
					    break;

					    case 'id':
						    elements = document.querySelectorAll("#" + cursor.selector_data);
					    break;

					    case 'attribute':
						    elements = document.querySelectorAll("[" + cursor.selector_data + "]");
					    break;
					}
				}

				if (elements != null && elements.length > 0) {
					cursorElements(elements, cursor);
				}

			});

			

			var mutationOptions = {
			  childList: true,
			  subtree: true,
			},
			observer = new MutationObserver(mutationCallback);

			function mutationCallback(mutations) {
			  for (var mutation of mutations) {
			    if (mutation.type === 'childList') {
			    	[...cursors].forEach(function(cursor) {
			    		var elements = null;
			    		if (cursor.body_activation != 1) {
			    			switch (cursor.selector_type) {
								case 'tag':
									elements = document.querySelectorAll(cursor.selector_data);
							    break;

							    case 'class':
								    elements = document.querySelectorAll("." + cursor.selector_data);
							    break;

							    case 'id':
								    elements = document.querySelectorAll("#" + cursor.selector_data);
							    break;

							    case 'attribute':
								    elements = document.querySelectorAll("[" + cursor.selector_data + "]");
							    break;
							}
			    		}
			    		if (elements != null && elements.length > 0) {
							cursorElements(elements, cursor);
						}
			    	});
			    }
			  }
			}

			observer.observe(body, mutationOptions);


			function cursorElements(cElements, cursor) {
				Array.prototype.forEach.call(cElements, function (element) {
					var shapeClass = "cursor-", 
						removedClass = "", 
						removedCursorColor = "",
						removedCursorWidth = "",
						removedCursorBlending = "",
						removedDefaultCursor = "",
						removedCursorHover = "",
						removedCursorImage = null,
						currentImage = null,
						firedMouseEnter = false;
					
					if (cursor.cursor_type == 0) {
						shapeClass += cursor.cursor_shape;

						// SVG Cursor
						if (cursor.cursor_shape == 18) {
							var blob = '<svg viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Blob</title><desc>WP Custom Cursors.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path class="fillmeinside" d="M14.8965404,0 C24.3319123,0 33.3750903,16.1924411 28.754397,24.2923631 C24.1337037,32.3922852 5.09134123,31.3965374 1.0386837,24.2923631 C-3.01397383,17.1881889 5.46116844,1.13466707e-15 14.8965404,0 Z" id="blob" fill="#D8D8D8"></path></g></svg>';
							cursorEl1.innerHTML = blob;
							shapeClass = "cursor-svg";
						}
					}

					else {
						shapeClass = "cursor-img";

						currentImage = document.createElement('img');
						currentImage.setAttribute('src', cursor.cursor_image);
					}

					element.classList.add('cursor-element');

					element.addEventListener('mousemove', function() {
						if (!firedMouseEnter) {
							mouseEntered();	
						}
					});

					element.addEventListener('mouseenter', function() {

						mouseEntered();	

					}); 

					element.addEventListener('mouseleave', function() {
						// Handle Classes
						
						if (removedCursorHover != cursor.hover_effect) {
							cursorWrapper.classList.add(removedCursorHover);
							cursorWrapper.classList.remove(cursor.hover_effect);
						}
						if (removedClass != shapeClass) {
							cursorWrapper.classList.add(removedClass);
							cursorWrapper.classList.remove(shapeClass);
						}

						
						if (cursor.cursor_type != 0) {
							// Remove Image Cursor
							if (removedCursorImage) {
								cursorEl2.removeChild(currentImage);
								cursorEl2.appendChild(removedCursorImage);
								removedCursorImage = null;
							}

							else {
								cursorEl2.removeChild(currentImage);
							}
						}
						
						// Set Old CSS Variables
						if (removedCursorColor.length > 0) {
							body.style.setProperty('--cursor-width', removedCursorWidth);
							body.style.setProperty('--color', removedCursorColor);
							body.style.setProperty('--blending-mode', removedCursorBlending);
							body.style.setProperty('--default-cursor', removedDefaultCursor);
						}
					});

					function mouseEntered() {
						firedMouseEnter = true;
						
						// Get Old CSS Variables
						removedCursorWidth = body.style.getPropertyValue('--cursor-width');
						removedCursorColor = body.style.getPropertyValue('--color');
						removedCursorBlending = body.style.getPropertyValue('--blending-mode');
						removedDefaultCursor = body.style.getPropertyValue('--default-cursor');

						// Handle Classes
						cursorWrapper.classList.add(cursor.hover_effect);
						cursorWrapper.classList.add(shapeClass);
						removedCursorHover = cursorWrapper.classList.item(1);
						removedClass = cursorWrapper.classList.item(2);
						if (removedClass != shapeClass) {
							cursorWrapper.classList.remove(removedClass);
						}
						if (removedCursorHover != cursor.hover_effect) {
							cursorWrapper.classList.remove(removedCursorHover);
						}

						if (cursor.cursor_type != 0) {

							// Add Image Cursor
							if (cursorEl2.hasChildNodes()) {
								removedCursorImage = cursorEl2.removeChild(cursorEl2.firstChild);
								cursorEl2.appendChild(currentImage);
							}

							else {
								cursorEl2.appendChild(currentImage);
							}
						}

						// Update New CSS Variables
						body.style.setProperty('--cursor-width', cursor.width + "px");
						body.style.setProperty('--color', cursor.color);
						body.style.setProperty('--blending-mode', cursor.blending_mode);
						body.style.setProperty('--default-cursor', cursor.default_cursor);
					}

					var innerLinks = element.querySelectorAll('a, button, input[type="checkbox"], input[type="radio"], input[type="button"], input[type="submit"], input[type="file"], select, .rs-waction'),
						innerInputs = element.querySelectorAll('input[type="text"], input[type="email"], input[type="search"], input[type="number"], input[type="password"], input[type="url"], input[type="date"], input[type="range"], textarea');

					[...innerLinks].forEach(function(link) {
				        link.addEventListener('mouseenter', function() {elementEnter('link-hover')} );
				        link.addEventListener('mouseleave', function() {elementLeave('link-hover')} );
				    });

				    [...innerInputs].forEach(function(input) {
				        input.addEventListener('mouseenter', function() {elementEnter('input-hover')} );
				        input.addEventListener('mouseleave', function() {elementLeave('input-hover')} );
				    });

					function elementEnter(className) {
				        cursorWrapper.classList.add(className);
				    }
				    function elementLeave(className) {
				        cursorWrapper.classList.remove(className);
				    }

				});
			}

		});
	});
	
})();



/* :) Let's meke internet BEAUTIFUL*/
/*
 _       __     __       ______                    __
| |     / /__  / /_     /_  __/_______  ____  ____/ /_  __
| | /| / / _ \/ __ \     / / / ___/ _ \/ __ \/ __  / / / /
| |/ |/ /  __/ /_/ /    / / / /  /  __/ / / / /_/ / /_/ /
|__/|__/\___/_.___/    /_/ /_/   \___/_/ /_/\__,_/\__, /
                                                 /____/
*/