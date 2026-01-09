
    document.getElementById('example-form').addEventListener('submit', function(event) {
      event.preventDefault();

      const checkboxes = Array.from(document.querySelectorAll('[name="checkbox-group"]:checked'))
        .map(cb => cb.value);

      const radio = document.querySelector('[name="radio-group"]:checked');
      const radioValue = radio ? radio.value : null;

      console.log('Selected checkboxes:', checkboxes);
      console.log('Selected radio button:', radioValue);
    });
