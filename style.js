<script>
    $(document).ready(function() {
      $('#contactForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // Send the form data to your server
        $.ajax({
          type: 'POST',
          url: '#email', // Replace with your server-side script URL
          data: {
            name: name,
            email: email,
            message: message
          },
          success: function(response) {
            // Handle the success response
            alert('Message sent successfully!');
            $('#contactForm')[0].reset();
          },
          error: function(xhr, status, error) {
            // Handle the error response
            alert('Error: ' + error);
          }
        });
      });
    });
    $(document).ready(function() {
  $('#contact').css('box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.5)');
});
  </script>
 