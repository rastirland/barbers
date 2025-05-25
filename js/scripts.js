var statusEl = document.getElementById('statusEl');
statusEl.innerText = 'The status is OK';

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    

});

window.onload = function() {
  var statusEl = document.getElementById('status');
  if (statusEl) {
    var isOpen = isOpenNow(); // Assume isOpenNow() returns true if the store is open
    statusEl.textContent = isOpen ? 'Open' : 'Closed';
    statusEl.style.color = isOpen ? '#00ff00' : '#ff0000'; // Change the color to green if open, and red if closed
    statusEl.style.fontWeight = isOpen ? 'bold' : 'normal'; // Add bold font weight to the text if open
  }
};

function isOpenNow() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var dayOfWeek = currentTime.getDay();
  
  // Check if it's Monday-Thursday and the store is open
  if (dayOfWeek >= 1 && dayOfWeek <= 4 && ((hours == 9 && minutes >= 30) || (hours > 9 && hours < 18) || (hours == 18 && minutes < 00))) {
      return true;
  // Check if it's Friday and the store is open
  } else if (dayOfWeek == 5 && ((hours == 9 && minutes >= 30) || (hours > 9 && hours < 19) || (hours == 19 && minutes < 00))) {
    return true;
  // Check if it's Saturday and the store is open
  } else if (dayOfWeek == 6 && hours >= 9 && hours < 16) {
    return true;
  // Otherwise, the store is closed
  } else {
    return false;
  }
}


 
